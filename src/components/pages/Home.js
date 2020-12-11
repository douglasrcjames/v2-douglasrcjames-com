import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { METRICS, SITE_UPDATED, SKILLS } from '../../utils/constants';
import { Accolade, numberWithCommas, ucFirst } from '../../utils/misc';
import { jobs } from '../../utils/jobs';
import ContactForm from '../misc/ContactForm';
import { HashLink } from 'react-router-hash-link';

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
            stripeDollars: 0,
            twilioMins: 0,

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
            firebase: 0,
            swift: 0,
            redux: 0

        }
    }

    componentDidMount(){
        if(jobs){
            jobs.forEach((job, i) => { 
                if(job.skills){
                    if(job.skills.primary || job.skills.secondary){
                        const allSkills = job.skills.primary.concat(job.skills.secondary);
                        allSkills.forEach((skill, i) => {
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
                            } else if(skill === SKILLS.SWIFT){
                                this.setState((prevState, props) => ({
                                    swift: prevState.swift + 1
                                })); 
                            } else if(skill === SKILLS.REDUX){
                                this.setState((prevState, props) => ({
                                    redux: prevState.redux + 1
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
                        } else if(metric.name === METRICS.TWILIO_MINS){
                            this.setState((prevState, props) => ({
                                twilioMins: prevState.twilioMins + metric.value
                            })); 
                        } else if(metric.name === METRICS.STRIPE_DOLLARS){
                            this.setState((prevState, props) => ({
                                stripeDollars: prevState.stripeDollars + metric.value
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
                        <b>+</b> I'm a freelance full-stack software developer working with React.js/Native to build great user experiences.<br/>
                        <b>+</b> I'm trained as a computer engineer in Silicon Valley, California.<br/>
                        <b>+</b> I'm working on <Link to="/work/minute.tech-llc" className="">Minute.tech</Link> to connect non-techies to techies for tech support.
                    </p>
                    <Link to="/work">
                        <button className="md-blue-btn">
                            View my work
                        </button>
                    </Link>
                </div>
                <div className="headshot-block">
                    <img className="xlarge center" alt="headshot" src={require('../../assets/images/misc/professional.png')} />
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
                                <img className="home-icon" alt="spaceship" src={require('../../assets/images/icons/spaceship.png')} />
                                <h3>Cutting Edge</h3>
                                <p>
                                    The software I create is built on industry leading technologies like Node.js and React.js; 
                                    the same modern bones that large corporations like Twitter and Instagram use for their applications.
                                </p>
                            </Col>
                            
                            <Col md={12} lg={4}>
                                <img className="home-icon" alt="schedule" src={require('../../assets/images/icons/schedule.png')} />
                                <h3>Always On Time</h3>
                                <p>
                                    The projects I complete are always delivered on time, if not earlier. Weekly updates or "sprints" are posted for my projects on
                                    &#8239;<a href="https://github.com" target="_blank" rel="noopener noreferrer" className="white">GitHub</a> so my clients can track the progress of development.
                                </p>
                            </Col>
                            <Col md={12} lg={4}>
                                <img className="home-icon" alt="business climb" src={require('../../assets/images/icons/business.png')} />
                                <h3>Ambitious, but Realistic</h3>
                                <p>
                                    I like to think big, but not too big, right in the goldilocks zone. Early on in planning projects, 
                                    I will take a bird's eye view to ensure the route we are taking is the best fit for the client in the long term.
                                </p>
                            </Col>
                        </Row>
                        <Row center="xs">
                            <Col md={12} lg={4}>
                                <img className="home-icon" alt="detective" src={require('../../assets/images/icons/private-detective.png')} />
                                <h3>Detail-oriented Dude</h3>
                                <p>
                                    I truly enjoy the process and treat your project like my own, customizing my client's sites down to the smallest details. 
                                    No two sites I create are exactly the same because I take the extra step to build unique designs for every new project.
                                </p>
                            </Col>
                            <Col md={12} lg={4}>
                                <img className="home-icon" alt="mushroom" src={require('../../assets/images/icons/mushroom.png')} />
                                <h3>Fun Guy</h3>
                                <p>
                                    My roots are deep in the customer service forest through my work as a showroom 
                                    guru at <Link to="/work/tesla" className="white">Tesla</Link> and in my many <Link to="/work/minute.tech-llc" className="white">tech support</Link> roles. 
                                    As a result, I am patient, down-to-earth, and pleasant to work with, just ask my past clients! 
                                </p>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
            <div className="pricing-section">
                <div className="overlap-background">
                    <div className="overlap-container">
                        <div className="pricing-panel">
                            <h1 className="center-text">Development Packages</h1>
                            <div className="pricing-table">
                                <div className="pricing-plan">
                                    <img src={require("../../assets/images/icons/web-basic.png")} alt="basic website" />
                                    <h3>Basic</h3>
                                    <ul>
                                        <li>
                                            <div>5 responsive web pages</div>
                                            <span>
                                                We will design your website with up to 5 custom web screens that look great on every device; iPhone, Android, Mac, and more. These pages are often Home, About Us, What We Do, F.A.Q., Products, etc.
                                            </span>
                                        </li>
                                        <li>
                                            <div>Contact form</div>
                                            <span>
                                                Form that collects visitor name, email, message, and automatically sends you an email with this info. 
                                                Lowers the barrier for potential visitors to contact you with a personal message or question.
                                            </span>
                                        </li>
                                        <li>
                                            <div>Google Analytics</div>
                                            <span>
                                                Google Analytics will allow you analyze the traffic that visits your website. 
                                                Collects metrics such as unique visitors, page views, session duration, and more! 
                                                An example of this being helpful is if you are trying to understand if your advertisements are properly driving visitors to your website.
                                            </span>
                                        </li>
                                        <li>
                                            <div>SEO</div>
                                            <span>
                                                Search Engine Optimization (SEO) increases your business relevance ranking on any search engine (Google, Bing, etc). 
                                                So if someone searches on Google for your business name or related keywords, you will appear at the top. 
                                                Results can differ depending on your market, business name, competitors, and more.
                                            </span>
                                        </li>
                                    </ul>
                                    <span className="price">$500-$1000</span>
                                </div>
                                
                                <div className="pricing-plan">
                                    <img src={require("../../assets/images/icons/web-design.png")} alt="website designed" />
                                    <h3>Basic + Design</h3>
                                    <ul>
                                        <li>
                                            <div>All Basic offerings</div>
                                        </li>
                                        <li>
                                            <div>Unlimited responsive web pages</div>
                                        </li>
                                        <li>
                                            <div>Wireframing</div>
                                            <span>
                                                Websites wireframes are a "hand-drawn" draft of what the website will 
                                                look like before we begin coding the website. Building a wireframe for a site first is always more efficient, 
                                                because it can be made quickly, iterate ideas with the client faster, and almost always produces a higher quality 
                                                end product website.
                                            </span>
                                        </li>
                                        <li>
                                            <div>Branding Guidelines</div>
                                            <span>
                                                I work with other in-house freelance designers to find the perfect brand name, logo, colors, 
                                                and fonts that will make your brand and assets stand out. If you already have brand assets, 
                                                we will be glad to build you a formal branding guidelines template that work around your existing assets.
                                            </span>
                                        </li>
                                    </ul>
                                    <span className="price">$1000-$2000</span>
                                </div>
                                
                                <div className="pricing-plan">
                                    <img src={require("../../assets/images/icons/app.png")} alt="mobile app" />
                                    <h3>Web/Mobile Application</h3>
                                    <ul>
                                        <li><div>All Basic + Design offerings</div></li>
                                        <li>
                                            <div>All sizes</div>
                                            <span>
                                                Apps are often large systems that have many functionalities, such as an iPhone chat app or custom CRM web app (Customer Relations Management). 
                                                A few examples of past projects are:&#8239;
                                                <Link to="/work/capsmd.org">capsmd.org</Link>,&#8239; 
                                                <Link to="/work/goprestigepower.com">goprestigepower.com</Link>, and&#8239;
                                                <Link to="/work/minute.tech-llc">minute.tech</Link>. 
                                                These price points can differ wildly depending on how ambitious the requirements 
                                                are so please send me a message and we can discuss the details to get a better estimation.
                                            </span>
                                        </li>
                                    </ul>
                                    <span className="price">$2000+</span>
                                </div>
                            </div>

                            <div className="center-text md-margin-t">
                                <HashLink 
                                    to="/#Contact" 
                                    className="lg-blue-btn">
                                    Contact me
                                </HashLink>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="wrapper">
               <h1 className="no-margin">Accolades</h1>
               <p>
                   Accolades are "trophies" that are automatically awarded to me (by me) for any job that I used a technology/skill, produced a metric, or built a system. 
                   For example, I used the technology, React.js, when I built <Link to="/work/smithzellner.consulting">smithzellner.consulting</Link>&#8239;
                   and has thus far accumulated 1,889 page views. So, 1 React.js accolade and 1,889 page view accolades awarded. 
                </p>
                <b>Last updated: {SITE_UPDATED.LONG}</b>

                <Grid fluid className="sm-margin-t-b">
                    <Row center="xs">
                        <Accolade link={SKILLS.HTML.link} name={SKILLS.HTML.name} value={this.state.html} />
                        <Accolade link={SKILLS.CSS.link} name={SKILLS.CSS.name} value={this.state.css} />
                        <Accolade link={SKILLS.JS.link} name={SKILLS.JS.name} value={this.state.js} />
                        <Accolade link={SKILLS.REACT.link} name={SKILLS.REACT.name} value={this.state.react} />
                        <Accolade link={SKILLS.NODE.link} name={SKILLS.NODE.name} value={this.state.node} />
                        <Accolade link={SKILLS.FIREBASE.link} name={SKILLS.FIREBASE.name} value={this.state.firebase} />
                        <Accolade link={SKILLS.GITHUB.link} name={SKILLS.GITHUB.name} value={this.state.github} />
                        <Accolade link={SKILLS.WIREFRAMING.link} name={SKILLS.WIREFRAMING.name} value={this.state.wireframing} />
                        <Accolade link={SKILLS.SWIFT.link} name={SKILLS.SWIFT.name} value={this.state.swift} />
                        <Accolade link={SKILLS.REDUX.link} name={SKILLS.REDUX.name} value={this.state.redux} />
                        <Accolade link={SKILLS.PHP.link} name={SKILLS.PHP.name} value={this.state.php} />
                        <Accolade link={SKILLS.PYTHON.link} name={SKILLS.PYTHON.name} value={this.state.python} />
                        <Accolade link={SKILLS.MYSQL.link} name={SKILLS.MYSQL.name} value={this.state.mysql} />
                        <Accolade link={"https://douglasrcjames.com/work"} name={"plus"} value={"and more!"} />
                    </Row>
                    <br/>
                    <div className="horiz-rule" />
                    <br/>
                    <Row center="xs">
                        <Col sm={12} md={6} className="sm-margin-t-b">
                            <div className="doug-card">
                                <div className="md-video-container">
                                    <div className="video-responsive">
                                        <iframe
                                            title="capsmd.org web app demo video"
                                            width="560" height="315"
                                            src="https://www.youtube.com/embed/Ke1DP5UzHZQ"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen="allowfullscreen"
                                            mozallowfullscreen="mozallowfullscreen" 
                                            msallowfullscreen="msallowfullscreen" 
                                            oallowfullscreen="oallowfullscreen" 
                                            webkitallowfullscreen="webkitallowfullscreen"
                                        />
                                    </div>
                                </div>
                                
                                <label style={{display: "block"}}>Built custom CMS (Content Management System)</label>
                                <Link to="/work/capsmd.org" className=" sm-text">See <b>caps.org</b> project</Link>
                            </div>

                        </Col>  
                        <Col sm={12} md={6} className="sm-margin-t-b">
                            <div className="doug-card">
                                <div className="md-video-container">
                                    <div className="video-responsive">
                                        <iframe
                                            title="goprestigepower.com web app demo video"
                                            width="560" height="315"
                                            src="https://www.youtube.com/embed/wad3TnxJgMQ"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen="allowfullscreen"
                                            mozallowfullscreen="mozallowfullscreen" 
                                            msallowfullscreen="msallowfullscreen" 
                                            oallowfullscreen="oallowfullscreen" 
                                            webkitallowfullscreen="webkitallowfullscreen"
                                        />
                                    </div>
                                </div>
                                
                                <label style={{display: "block"}}>Built custom CRM (Customer Relationship Management) system</label>
                                <Link to="/work/goprestigepower.com" className=" sm-text">See <b>goprestigepower.com</b> project</Link>
                            </div>
                        </Col>
                        <Col sm={12} md={6} className="sm-margin-t-b">
                            <div className="doug-card">
                                <div className="md-video-container">
                                    <div className="video-responsive">
                                        <iframe
                                            title="goprestigepower.com web app demo video"
                                            width="560" height="315"
                                            src="https://www.youtube.com/embed/qeaLJ-Jw2SE"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen="allowfullscreen"
                                            mozallowfullscreen="mozallowfullscreen" 
                                            msallowfullscreen="msallowfullscreen" 
                                            oallowfullscreen="oallowfullscreen" 
                                            webkitallowfullscreen="webkitallowfullscreen"
                                        />
                                    </div>
                                </div>
                                
                                <label style={{display: "block"}}>Built tech support system with messenger, video calling, screen sharing, and payment</label>
                                <Link to="/work/minute.tech-llc" className=" sm-text">See <b>Minute.tech</b> project</Link>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <div className="horiz-rule" />
                    <br/>
                    <div className="doug-card">
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
                            <Col sm={6} md={4}>
                                <label style={{display: "block", fontSize: "18px"}}>{ucFirst(METRICS.TWILIO_MINS)}: <span className="roboto-regular">{numberWithCommas(this.state.twilioMins)}</span></label>
                            </Col>
                            <Col sm={6} md={4}>
                                <label style={{display: "block", fontSize: "18px"}}>{ucFirst(METRICS.STRIPE_DOLLARS)}: <span className="roboto-regular">${numberWithCommas(this.state.stripeDollars)}</span></label>
                            </Col>
                        </Row>
                    </div>
                </Grid>
            </div>
            <div className="full-width bg-blue">
                <div className="wrapper white">
                    <h1 className="white no-margin"><a id="Contact" className="anchor" href="/#">Contact</a>Contact</h1>
                    <p className="white" style={{margin: "0 0 25px 0"}}>Feel free to shoot me an email 
                    at <a href="mailto:douglasrcjames@gmail.com" className="white " target="_blank" rel="noopener noreferrer">douglasrcjames@gmail.com</a> or 
                    text/call at <a href="tel:916-802-5609" className="white " target="_blank" rel="noopener noreferrer">(916) 802-5609</a>.</p>
                    <ContactForm />
                </div>
            </div>
            </>
        )
    }
}
