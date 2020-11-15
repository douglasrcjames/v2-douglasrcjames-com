import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';

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
                            <Col md={12} lg={8}>
                                <h1>{this.props.job.title}</h1>
                                <p>{this.props.job.longDescription}</p>
                            </Col>
                            <Col md={12} lg={4}>
                                <Row center="xs">
                                    <a href={this.props.job.link} target="_blank" rel="noopener noreferrer">
                                        <Col>
                                            <img className={`responsive ${this.props.job.logoSize}`} alt="job logo" src={this.props.job.logoUrl} />
                                        </Col>
                                    </a>
                                </Row>
                            </Col>
                        </Row>
                    </Grid>
                   
                    
                    {this.props.job.extraContent}
                </div>
            </div>
        )
    }
}
