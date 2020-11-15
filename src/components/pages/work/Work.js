import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FaBabyCarriage } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import resume from '../../../assets/pdfs/DouglasJames-Resume-4.22.2020.pdf'
import { jobs } from '../../../utils/jobs';
import { STATUS } from '../../../utils/constants';

export default class Work extends Component {
    render() {
        return (
            <div>
                <div className="full-width bg-blue">
                    <div className="wrapper white no-padding">
                        <Grid fluid>
                            <Row middle="xs">
                                <Col md={12} lg={8}>
                                    <h1 className="white">Work</h1>
                                    <p>
                                        I am a web developer, computer technician, and an entrepreneur with a lifelong dream to build great products. 
                                        I have broken down my relevant work into chronological order below, with a detailed view for each job on tap.
                                    </p>
                                </Col>
                                <Col md={12} lg={4}>
                                    <Row center="xs">
                                        <a href={resume} download className="big-icon-btn">
                                            <Col>
                                                <img alt="download file" src={require('../../../assets/images/icons/file.png')} />
                                                <p>Download Resume<br/>(4/22/2020)</p>
                                            </Col>
                                        </a>
                                    </Row>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </div>
                {/* TODO: show check mark or pending icon in upper right corner and hide on hover showing complete or working */}
                <VerticalTimeline className="custom-line">
                    {
                        jobs.map((job, i) => { 
                            return (
                                <VerticalTimelineElement
                                    key={i}
                                    className="vertical-timeline-element"
                                    contentStyle={{ background: '#202D3E', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  #202D3E' }}
                                    date={job.period}
                                    iconStyle={{ background: job.status === STATUS.COMPLETE ? '#202D3E' : '#fff', color: job.status === STATUS.COMPLETE ? '#fff' : '#202D3E' }}
                                    icon={job.icon}
                                    onTimelineElementClick={() => this.props.history.push(`/work/${job.title.split(" ").join("-").toLowerCase()}`)}
                                >
                                    <h3 className="vertical-timeline-element-title">{job.title}</h3>
                                    <h4 className="vertical-timeline-element-subtitle no-margin">{job.role}</h4>
                                    <p>{job.shortDescription}</p>
                                    <span className="view-btn">View</span>
                                    <span className="status-icon">{job.status === STATUS.COMPLETE ? <i className="fas fa-check"/> : <i className="fas fa-clock"/>}</span>
                                </VerticalTimelineElement>
                            )
                        })
                    }
                </VerticalTimeline> 
                <div className="full-width bg-blue md-margin-b">
                    <div className="wrapper white no-padding center-text">
                        <h3><FaBabyCarriage color="white" /> &nbsp;Douglas R.C. James was born!</h3>
                        <p>December 21, 1994</p>
                    </div>
                </div>
            </div>
        )
    }
}