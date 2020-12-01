import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { METRICS, SITE_UPDATED, SKILLS } from '../../utils/constants';
import { numberWithCommas, ucFirst } from '../../utils/misc';
import { jobs } from '../../utils/jobs';
import ContactForm from '../misc/ContactForm';

export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            // metrics
            visitors: 0,
            pageViews: 0,
            commits: 0,
            loc: 0,
            sourceFiles: 0,
            screens: 0,
            websites: -3, // i know the coldbrew, sjsu, and orhs produce html skills, but didnt build sites from scratch

            // skills
            html: 0,
            css: 0,
            js: 0,
            php: 0,
            node: 0,
            react: 0,
            python: 0,
            mysql: 0,
            github: 0,
            wireframing: 0,
            firebase: 0

        }
    }

    componentDidMount(){
        if(jobs){
            jobs.forEach((job, i) => { 
                if(job.skills){
                    if(job.skills.primary || job.skills.secondary){
                        job.skills.primary.forEach((skill, i) => {
                            if(skill === SKILLS.HTML){
                                console.log("html!")
                                this.setState((prevState, props) => ({
                                    html: prevState.html + 1,
                                    websites: prevState.websites + 1
                                }));
                            } else if(skill === SKILLS.CSS){
                                this.setState((prevState, props) => ({
                                    css: prevState.css + 1
                                })); 
                            } else if(skill === SKILLS.JS){
                                this.setState((prevState, props) => ({
                                    js: prevState.js + 1
                                })); 
                            } else if(skill === SKILLS.PHP){
                                this.setState((prevState, props) => ({
                                    php: prevState.php + 1
                                })); 
                            } else if(skill === SKILLS.NODE){
                                this.setState((prevState, props) => ({
                                    node: prevState.node + 1
                                })); 
                            } else if(skill === SKILLS.REACT){
                                this.setState((prevState, props) => ({
                                    react: prevState.react + 1
                                })); 
                            } else if(skill === SKILLS.PYTHON){
                                this.setState((prevState, props) => ({
                                    python: prevState.python + 1
                                })); 
                            } else if(skill === SKILLS.MYSQL){
                                this.setState((prevState, props) => ({
                                    mysql: prevState.mysql + 1
                                })); 
                            } else if(skill === SKILLS.GITHUB){
                                this.setState((prevState, props) => ({
                                    github: prevState.github + 1
                                })); 
                            } else if(skill === SKILLS.WIREFRAMING){
                                this.setState((prevState, props) => ({
                                    wireframing: prevState.wireframing + 1
                                })); 
                            } else if(skill === SKILLS.FIREBASE){
                                this.setState((prevState, props) => ({
                                    firebase: prevState.firebase + 1
                                })); 
                            } 
                        });
                    }
                }

                if(job.metrics){
                    job.metrics.forEach((metric, i) => {
                        if(metric.name === METRICS.VISITORS){
                            this.setState((prevState, props) => ({
                                visitors: prevState.visitors + metric.value
                            })); 
                        } else if(metric.name === METRICS.PAGE_VIEWS){
                            this.setState((prevState, props) => ({
                                pageViews: prevState.pageViews + metric.value
                            })); 
                        } else if(metric.name === METRICS.COMMITS){
                            this.setState((prevState, props) => ({
                                commits: prevState.commits + metric.value
                            })); 
                        } else if(metric.name === METRICS.LOC){
                            this.setState((prevState, props) => ({
                                loc: prevState.loc + metric.value
                            })); 
                        } else if(metric.name === METRICS.FILES){
                            this.setState((prevState, props) => ({
                                sourceFiles: prevState.sourceFiles + metric.value
                            })); 
                        } else if(metric.name === METRICS.SCREENS){
                            this.setState((prevState, props) => ({
                                screens: prevState.screens + metric.value
                            })); 
                        } 
                    });
                }
            })
        }
    }
    

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
                    <p className="sm-padding-l">
                        + I'm trained as a computer engineer in Silicon Valley, California.<br/>
                        + I'm a freelance full-stack software developer working with React.js/Native to build great user experiences.<br/>
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
                    <Grid fluid className="sm-margin-t-b">
                        <Row>
                            <Col>
                                <h1 className="white">Why work with me?</h1>
                            </Col>
                        </Row>
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
               <h1 className="no-margin">Accolades</h1>
               <p>
                   An accolades are automatically awarded for any job that used a skill, produced said metric, or built said system. 
                   <br/>
                   For example, I used React.js when I built <Link to="/work/smithzellner.consulting">smithzellner.consulting</Link> 
                   and has thus far accumulated 1,889 page views (among much more). So, 1 React.js accolade and 1,889 page view accolades awarded. 
                </p>
                <b>Last updated: {SITE_UPDATED.LONG}</b>
               {/* Add up metrics, screens built, websites built, CMS and CRM built, etc */}

               <Grid fluid className="sm-margin-t-b">
                    <Row center="xs">
                        <Col xs={6} sm={4} md={3} lg={2}>
                            <img className="xsmall-fit sm-padding" alt="skill logo" src={require(`../../assets/images/icons/skills/html.png`)} /> 
                            <label style={{display: "block", fontSize: "18px"}}>{this.state.html}</label>
                        </Col>
                        <Col xs={6} sm={4} md={3} lg={2}>
                            <img className="xsmall-fit sm-padding" alt="skill logo" src={require(`../../assets/images/icons/skills/css.png`)} /> 
                            <label style={{display: "block", fontSize: "18px"}}>{this.state.css}</label>
                        </Col>
                        <Col xs={6} sm={4} md={3} lg={2}>
                            <img className="xsmall-fit sm-padding" alt="skill logo" src={require(`../../assets/images/icons/skills/javascript.png`)} /> 
                            {/* eslint-disable-next-line  */}
                            <label style={{display: "block", fontSize: "18px"}}>{this.state.js}</label>
                        </Col>
                        <Col xs={6} sm={4} md={3} lg={2}>
                            <img className="xsmall-fit sm-padding" alt="skill logo" src={require(`../../assets/images/icons/skills/node.png`)} /> 
                            <label style={{display: "block", fontSize: "18px"}}>{this.state.node}</label>
                        </Col>
                        <Col xs={6} sm={4} md={3} lg={2}>
                            <img className="xsmall-fit sm-padding" alt="skill logo" src={require(`../../assets/images/icons/skills/react.png`)} /> 
                            <label style={{display: "block", fontSize: "18px"}}>{this.state.react}</label>
                        </Col>
                        <Col xs={6} sm={4} md={3} lg={2}>
                            <img className="xsmall-fit sm-padding" alt="skill logo" src={require(`../../assets/images/icons/skills/firebase.png`)} /> 
                            <label style={{display: "block", fontSize: "18px"}}>{this.state.firebase}</label>
                        </Col>
                        <Col xs={6} sm={4} md={3} lg={2}>
                            <img className="xsmall-fit sm-padding" alt="skill logo" src={require(`../../assets/images/icons/skills/github.png`)} /> 
                            <label style={{display: "block", fontSize: "18px"}}>{this.state.github}</label>
                        </Col>
                        <Col xs={6} sm={4} md={3} lg={2}>
                            <img className="xsmall-fit sm-padding" alt="skill logo" src={require(`../../assets/images/icons/skills/wireframing.png`)} /> 
                            <label style={{display: "block", fontSize: "18px"}}>{this.state.wireframing}</label>
                        </Col>
                        <Col xs={6} sm={4} md={3} lg={2}>
                            <img className="xsmall-fit sm-padding" alt="skill logo" src={require(`../../assets/images/icons/skills/python.png`)} /> 
                            <label style={{display: "block", fontSize: "18px"}}>{this.state.python}</label>
                        </Col>
                        <Col xs={6} sm={4} md={3} lg={2}>
                            <img className="xsmall-fit sm-padding" alt="skill logo" src={require(`../../assets/images/icons/skills/mysql.png`)} /> 
                            <label style={{display: "block", fontSize: "18px"}}>{this.state.mysql}</label>
                        </Col>
                        <Col xs={6} sm={4} md={3} lg={2}>
                            <img className="xsmall-fit sm-padding" alt="skill logo" src={require(`../../assets/images/icons/plus.png`)} /> 
                            <label style={{display: "block", fontSize: "18px"}}>and more!</label>
                        </Col>
                    </Row>
                    <br/>
                    <div className="horiz-rule" />
                    <br/>
                    <Row center="xs">
                        <Col>
                            <label style={{display: "block", fontSize: "18px"}}>Websites built: <span className="roboto-regular">{this.state.websites}</span></label>
                        </Col>
                    </Row>
                    <Row center="xs">
                        <Col sm={6} md={4}>
                            <label style={{display: "block", fontSize: "18px"}}>{ucFirst(METRICS.VISITORS)}: <span className="roboto-regular">{numberWithCommas(this.state.visitors)}</span></label>
                        </Col>
                        <Col sm={6} md={4}>
                            <label style={{display: "block", fontSize: "18px"}}>{ucFirst(METRICS.PAGE_VIEWS)}: <span className="roboto-regular">{numberWithCommas(this.state.pageViews)}</span></label>
                        </Col>
                        <Col sm={6} md={4}>
                            <label style={{display: "block", fontSize: "18px"}}>{ucFirst(METRICS.COMMITS)}: <span className="roboto-regular">{numberWithCommas(this.state.commits)}</span></label>
                        </Col>
                        <Col sm={6} md={4}>
                            <label style={{display: "block", fontSize: "18px"}}>{ucFirst(METRICS.LOC)}: <span className="roboto-regular">{numberWithCommas(this.state.loc)}</span></label>
                        </Col>
                        <Col sm={6} md={4}>
                            <label style={{display: "block", fontSize: "18px"}}>{ucFirst(METRICS.FILES)}: <span className="roboto-regular">{numberWithCommas(this.state.sourceFiles)}</span></label>
                        </Col>
                        <Col sm={6} md={4}>
                            <label style={{display: "block", fontSize: "18px"}}>{ucFirst(METRICS.SCREENS)}: <span className="roboto-regular">{numberWithCommas(this.state.screens)}</span></label>
                        </Col>
                    </Row>
                    <br/>
                    <div className="horiz-rule" />
                    <br/>
                    <Row center="xs">
                        {/* Update these gifs */}
                        <Col xs={12} sm={6}>
                            <img 
                                className="responsive"
                                style={{width: "60%", border: "3px lightgrey solid"}}
                                alt="finished product"
                                src={require("../../assets/images/jobs/bodybyyama/finished-product.gif")}
                                />
                            <label style={{display: "block"}}>Custom CMS (Content Management System) built</label>
                            <Link to="/work/capsmd.org">See <b>caps.org</b> project</Link>
                        </Col>  
                        <Col xs={12} sm={6}>
                            <img 
                                className="responsive"
                                style={{width: "60%", border: "3px lightgrey solid"}}
                                alt="finished product"
                                src={require("../../assets/images/jobs/bodybyyama/finished-product.gif")}
                                />
                            <label style={{display: "block"}}>Custom CRM (Customer Relations Management) system built</label>
                            <Link to="/work/goprestigepower.com">See <b>goprestigepower.com</b> project</Link>
                        </Col>
                    </Row>
                </Grid>
            </div>
            <div className="full-width bg-blue">
                <div className="wrapper white">
                    <h1 className="white"><a id="Contact" className="anchor" href="/#">Contact</a>Contact</h1>
                    <ContactForm />
                </div>
            </div>
            </>
        )
    }
}
