import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import { ucFirst } from '../../../utils/misc';

const WithSeparator = require("react-with-separator");

export default class Job extends Component {
    render() {
        var topBgImageStyle = {
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            width: "105%",
            height: "105%",
            margin: "-5px",
            backgroundImage: `url(${this.props.job.headerUrl})`,
            backgroundPosition: this.props.job.headerPosition, // change me around to move up and down!
            backgroundSize: "cover",
            filter: "blur(4px)",
            zIndex: "1"
          };
        var bgImageContainer = {
            position:"relative", 
            height: "200px", 
            width: "100%", 
            overflow: "hidden", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center"
        }
        if(!this.props.job){
            return (
                <div className="wrapper">
                    <h2>Loading job...</h2>
                </div>
            )
        } else {
            return (

                <div>
                    <div style={bgImageContainer}>
                        <div style={ topBgImageStyle }></div>
                        <Grid style={{ position: "relative", zIndex: "5"}}>
                            <Row center="xs" middle="xs">
                                <Col style={{margin: "20px 0"}} xs={12} md={4}>
                                    { this.props.previousJob && (
                                        <Link to={`/work/${this.props.previousJob.title.split(" ").join("-").toLowerCase()}`} className="md-blue-btn">
                                            <i className="fas fa-chevron-left" />&nbsp; Previous job
                                        </Link>
                                    )}
                                </Col>
                                <Col style={{margin: "20px 0"}} xs={12} md={4}>
                                    <Link to="/work" className="md-blue-btn">
                                        <i className="fas fa-chevron-up" />&nbsp; Back to all work
                                    </Link>
                                </Col>
                                <Col style={{margin: "20px 0"}} xs={12} md={4}>
                                    { this.props.nextJob && (
                                        <Link to={`/work/${this.props.nextJob.title.split(" ").join("-").toLowerCase()}`} className="md-blue-btn">
                                            Next job &nbsp;<i className="fas fa-chevron-right" />
                                        </Link>
                                    )}
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                    <div className="wrapper-w-img">
                        <Grid fluid>
                            <Row>
                                <Col md={12} lg={10}>
                                    <h1>{this.props.job.title}</h1>
                                    {this.props.job.longDescription}
                                </Col>
                                <Col md={12} lg={2}>
                                    <Row center="xs">
                                        <a href={this.props.job.link} target="_blank" rel="noopener noreferrer">
                                            <Col>
                                                <img className={`responsive ${this.props.job.logoSize} md-margin`} alt="job logo" src={this.props.job.logoUrl} />
                                            </Col>
                                        </a>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="sm-margin-t-b">
                                <Col className="sm-margin-t-b" md={12} lg={6}>
                                    <h3>Role: <span className="roboto-light">{this.props.job.role}</span></h3>
                                </Col>
                                <Col className="sm-margin-t-b" md={12} lg={6}>
                                    <h3>Status: <span className="roboto-light">{ucFirst(this.props.job.status)}</span></h3>
                                </Col>
                                <Col className="sm-margin-t-b" md={12} lg={6}>
                                    <h3>Period: <span className="roboto-light">{this.props.job.period}</span></h3>
                                </Col>
                                <Col className="sm-margin-t-b" md={12} lg={6}>
                                    <h3>Link: <span className="roboto-light"><a href={this.props.job.link} target="_blank" className="light-blue text-hover" rel="noopener noreferrer">{this.props.job.link}</a></span></h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <h2 className="sm-margin-t-b">Skills</h2>
                                    {this.props.job.skills.primary && (
                                        <>
                                        <h4>Primary:</h4>
                                        { 
                                            this.props.job.skills.primary.map((skill, i) => {
                                                return (
                                                    <span key={i}>
                                                         <img className="xsmall-fit sm-padding  " alt="skill logo" src={require(`../../../assets/images/logos/skills/${skill.split(" ").join("-").toLowerCase()}.png`)} /> 
                                                    </span>
                                                )
                                            }) 
                                        }
                                        </>
                                    )}
                                    {this.props.job.skills.secondary && (
                                        <>
                                        <h4>Secondary:</h4>
                                        { 
                                            this.props.job.skills.secondary.map((skill, i) => {
                                                return (
                                                    <span key={i}>
                                                         <img className="xsmall-fit sm-padding  " alt="skill logo" src={require(`../../../assets/images/logos/skills/${skill.split(" ").join("-").toLowerCase()}.png`)} /> 
                                                    </span>
                                                )
                                            }) 
                                        }
                                        </>
                                    )}
                                    {this.props.job.skills.other && (
                                        <div>
                                            <h4 className="display-inline">Other: </h4>
                                            <WithSeparator separator=", ">
                                                { 
                                                    this.props.job.skills.other.map((skill, i) => {
                                                        return (
                                                            <span key={i}>
                                                                {skill}
                                                            </span>
                                                        )
                                                    }) 
                                                }
                                            </WithSeparator>
                                        </div>
                                    )}
                                    {this.props.job.skills.courses && (
                                        <div>
                                            <h4 className="display-inline">Courses: </h4>
                                            <ul>
                                                { 
                                                    this.props.job.skills.courses.map((course, i) => {
                                                        return (
                                                            <li key={i}>
                                                                {course}
                                                            </li>
                                                        )
                                                    }) 
                                                }
                                            </ul>
                                        </div>
                                    )}
                                    
                                </Col>
                            </Row>
                        </Grid>
                        
                        <br/>

                        {this.props.job.extraContent}
                    </div>
                </div>
            )
        }
    }
}
