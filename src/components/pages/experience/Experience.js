import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { MdWork } from "react-icons/md";
import { FaBabyCarriage } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import resume from '../../../assets/pdfs/DouglasJames-Resume-4.22.2020.pdf'
import { Link } from 'react-router-dom';

export default class Experience extends Component {
    render() {
        return (
            <div>
                <div className="full-width bg-blue">
                    <div className="wrapper white no-padding">
                        <Grid fluid>
                            <Row middle="xs">
                                <Col md={12} lg={8}>
                                    <h1 className="white">Experience</h1>
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
                {/* TODO: buttons to visit that exp page and insert my stuff with new icons and wording and links!! */}
                <VerticalTimeline className="custom-line">
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#202D3E', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #202D3E' }}
                        date="May, 2016 - Today"
                        iconStyle={{ background: '#fff', color: '#202D3E' }}
                        icon={<MdWork />}
                        onTimelineElementClick={() => this.props.history.push('/experience/minute.tech')}
                    >
                        <h3 className="vertical-timeline-element-title">Minute.tech LLC</h3>
                        <h4 className="vertical-timeline-element-subtitle no-margin">Founder &amp; Software Engineer</h4>
                        <p>
                            Web and mobile applications connecting non-techies to techies for technical support.
                        </p>
                        <span className="view-btn">View</span>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#202D3E', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #202D3E' }}
                        date="May, 2016 - Today"
                        iconStyle={{ background: '#fff', color: '#202D3E' }}
                        icon={<MdWork />}
                        onTimelineElementClick={() => this.props.history.push('/experience/minute.tech')}
                    >
                        <h3 className="vertical-timeline-element-title">Minute.tech LLC</h3>
                        <h4 className="vertical-timeline-element-subtitle no-margin">Founder &amp; Software Engineer</h4>
                        <p>
                            Web and mobile applications connecting non-techies to techies for technical support.
                        </p>
                        <span className="view-btn">View</span>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#202D3E', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #202D3E' }}
                        date="May, 2016 - Today"
                        iconStyle={{ background: '#fff', color: '#202D3E' }}
                        icon={<MdWork />}
                        onTimelineElementClick={() => this.props.history.push('/experience/minute.tech')}
                    >
                        <h3 className="vertical-timeline-element-title">Minute.tech LLC</h3>
                        <h4 className="vertical-timeline-element-subtitle no-margin">Founder &amp; Software Engineer</h4>
                        <p>
                            Web and mobile applications connecting non-techies to techies for technical support.
                        </p>
                        <span className="view-btn">View</span>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#202D3E', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #202D3E' }}
                        date="May, 2016 - Today"
                        iconStyle={{ background: '#fff', color: '#202D3E' }}
                        icon={<MdWork />}
                        onTimelineElementClick={() => this.props.history.push('/experience/minute.tech')}
                    >
                        <h3 className="vertical-timeline-element-title">Minute.tech LLC</h3>
                        <h4 className="vertical-timeline-element-subtitle no-margin">Founder &amp; Software Engineer</h4>
                        <p>
                            Web and mobile applications connecting non-techies to techies for technical support.
                        </p>
                        <span className="view-btn">View</span>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#202D3E', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #202D3E' }}
                        date="May, 2016 - Today"
                        iconStyle={{ background: '#fff', color: '#202D3E' }}
                        icon={<MdWork />}
                        onTimelineElementClick={() => this.props.history.push('/experience/minute.tech')}
                    >
                        <h3 className="vertical-timeline-element-title">Minute.tech LLC</h3>
                        <h4 className="vertical-timeline-element-subtitle no-margin">Founder &amp; Software Engineer</h4>
                        <p>
                            Web and mobile applications connecting non-techies to techies for technical support.
                        </p>
                        <span className="view-btn">View</span>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#202D3E', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #202D3E' }}
                        date="May, 2016 - Today"
                        iconStyle={{ background: '#fff', color: '#202D3E' }}
                        icon={<MdWork />}
                        onTimelineElementClick={() => this.props.history.push('/experience/minute.tech')}
                    >
                        <h3 className="vertical-timeline-element-title">Minute.tech LLC</h3>
                        <h4 className="vertical-timeline-element-subtitle no-margin">Founder &amp; Software Engineer</h4>
                        <p>
                            Web and mobile applications connecting non-techies to techies for technical support.
                        </p>
                        <span className="view-btn">View</span>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#202D3E', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #202D3E' }}
                        date="May, 2016 - Today"
                        iconStyle={{ background: '#fff', color: '#202D3E' }}
                        icon={<MdWork />}
                        onTimelineElementClick={() => this.props.history.push('/experience/minute.tech')}
                    >
                        <h3 className="vertical-timeline-element-title">Minute.tech LLC</h3>
                        <h4 className="vertical-timeline-element-subtitle no-margin">Founder &amp; Software Engineer</h4>
                        <p>
                            Web and mobile applications connecting non-techies to techies for technical support.
                        </p>
                        <span className="view-btn">View</span>
                    </VerticalTimelineElement>
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
