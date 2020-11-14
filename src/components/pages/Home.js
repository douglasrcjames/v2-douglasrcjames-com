import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ContactForm from '../misc/ContactForm';

export default class Home extends Component {
    render() {
        return (
            <>
            <Helmet>
                <title>Home | Douglas R.C. James</title>
            </Helmet>
            <div className="headshot-bg">
                <div className="hero-container">
                    <h1>
                        Hi, I'm Doug. <br/>
                        I solve tech problems.
                    </h1>
                    <p>
                        + I'm trained as a computer engineer in Silicon Valley, California.<br/>
                        + I'm a freelance front and back end software developer working with React.js/Native to build great user experiences.<br/>
                        + I'm working on <Link to="/work">Minute.tech</Link> to connect non-techies to techies for tech support.
                    </p>
                    <Link to="/work">
                        <button className="md-blue-btn">
                            View my work
                        </button>
                    </Link>
                    
                </div>
            </div>
           
            <div className="full-width bg-blue">
                <div className="wrapper white">
                    <h1 className="white">Why work with me?</h1>
                    <Grid fluid>
                        <Row center="xs">
                            <Col md={12} lg={4}>
                                <img className="home-icon" alt="detective" src={require('../../assets/images/icons/private-detective.png')} />
                                <h3>Detail-oriented Dude</h3>
                                <p>I take extra time to customize my client's sites down to the smallest details because I truly enjoy the process and treat your project like my own.</p>
                            </Col>
                            <Col md={12} lg={4}>
                                <img className="home-icon" alt="schedule" src={require('../../assets/images/icons/schedule.png')} />
                                <h3>Always On Time</h3>
                                <p>The projects I complete are always on time, if not earlier. I start planning my projects in the first meeting and for forever in the future.</p>
                            </Col>
                            <Col md={12} lg={4}>
                                <img className="home-icon" alt="business climb" src={require('../../assets/images/icons/business.png')} />
                                <h3>Ambitious, but Realistic</h3>
                                <p>I like to think big, but not too big, right in the goldilocks zone. Early on in planning projects, I will take a bird's eye view to ensure the route we are taking  is what will fit best for the client in the long term.</p>
                            </Col>
                        </Row>
                        <Row center="xs">
                            <Col md={12} lg={4}>
                                <img className="home-icon" alt="mushroom" src={require('../../assets/images/icons/mushroom.png')} />
                                <h3>Fun Guy</h3>
                                <p>Unlike many engineers, I am actually easy to get along with, just ask my past clients! </p>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
            <div className="wrapper">
                <h1><a id="Contact" className="anchor" href="/#">Contact</a>Contact</h1>
                <ContactForm />
            </div>
            </>
        )
    }
}
