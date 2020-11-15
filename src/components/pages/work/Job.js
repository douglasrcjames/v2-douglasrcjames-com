import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { ucFirst } from '../../../utils/misc';

const WithSeparator = require("react-with-separator");

export default class Job extends Component {
    render() {
        var topBgImageStyle = {
            width: "100%",
            height: "200px",
            backgroundImage: `url(${this.props.job.headerUrl})`,
            backgroundPosition: "50% 50%", // change me around to move up and down!
            backgroundSize: "cover"
          };
        return (
            <div>
                <div style={ topBgImageStyle }></div>
                <div className="wrapper">
                    <Grid fluid>
                        <Row middle="xs">
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
                                                     <img className="xsmall-fit sm-padding  " alt="skill logo" src={require(`../../../assets/images/logos/skills/${skill}.png`)} /> 
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
                                                     <img className="xsmall-fit sm-padding  " alt="skill logo" src={require(`../../../assets/images/logos/skills/${skill}.png`)} /> 
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
                    
                    
                    {this.props.job.extraContent}
                </div>
            </div>
        )
    }
}
