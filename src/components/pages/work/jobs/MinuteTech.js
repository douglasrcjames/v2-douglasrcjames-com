import React, { Component } from 'react'
import { mtMobileSwift, mtMobileWireframe, mtWebLive, mtMobileNative, mtWebWireframe } from '../../../../utils/screens'
import { mtMisc } from '../../../../utils/photos'
import PhotoGallery from '../../../misc/PhotoGallery'
import ScreensGallery from '../../../misc/ScreensGallery'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { mtTimeline } from '../../../../utils/jobs'
import { HashLink } from 'react-router-hash-link'

export default class MinuteTech extends Component {
    render() {
        return (
            <div>
                <div className="lg-container">
                    <h2><a id="Web" className="anchor" href="/#">Web</a>Web Application</h2>
                    <p>
                        The current production (beta) web application was built with HTML, CSS, Node.js, React.js, and Firebase. Firebase is for hosting with SSL, 
                        server side functions, file storage, authentication, and databasing with Firestore. This application has been in development for a few years now, going through 
                        multiple prototypes using Python and React.js. Please see the <HashLink to="/work/minute.tech-llc#Timeline">Full Timeline section below</HashLink> for details on 
                        each of these prototypes. The current build features:
                        <ul>
                            <li>User authentication</li>
                            <li>Client can ask question to system</li>
                            <li>Technician can claim question on system</li>
                            <li>Users can communicate in a chat room sending texts and files</li>
                            <li>Users can transition to voice/video/screen share call using Twilio API</li>
                            <li>Client can pay technician directly for their services using the Stripe API</li>
                            <li>Clients can resolve questions and review technicians they interacted with</li>
                        </ul>
                    </p>
                </div>

                <div className="center-text">
                    <h3 style={{fontSize: "30px", verticalAlign: "middle"}}><u>Demo</u></h3>
                        <div className="sm-video-container">
                            <div className="video-responsive">
                                <iframe
                                    title="Minute.tech web app demo video"
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
                    
                </div>
                <ScreensGallery photos={mtWebWireframe} title={"Wireframe screens"} date={"Nov. 30th, 2020"} />
                <ScreensGallery photos={mtWebLive} title={"Live screens"} date={"Nov. 30th, 2020"} />

                <div className="lg-container">
                    <h2><a id="Mobile" className="anchor" href="/#">Mobile</a>Mobile Application</h2>
                    <p>
                        The mobile application has also undergone multiple prototype versions throughout the years using Swift and React Native. 
                        I am currently working on the React Native build in order to cut down on multiple code bases because the Minute.tech team has limited resources.
                        Here are the current features of the React Native build:
                        <ul>
                            <li>User authentication</li>
                            <li>Client can ask question to system</li>
                            <li>Technician can claim question on system</li>
                            <li>Users can communicate in a chat room sending texts</li>
                            <li>Clients can resolve questions</li>
                        </ul>
                        The Swift application included a few extra features that have yet to be implemented into React Native such as video calling and scheduling, but I plan to add these features before the beta launch Q2 2021.
                        Please see the <HashLink to="/work/minute.tech-llc#Timeline">Full Timeline section below</HashLink> for details on 
                        each of these prototypes. 
                    </p>
                </div>
               
                <div className="center-text">
                    <h3 style={{fontSize: "30px", verticalAlign: "middle"}}><u>Swift Demo</u></h3>
                    <div className="sm-video-container">
                        <div className="video-responsive">
                            <iframe
                                title="Minute.tech mobile swift app demo video"
                                width="560" height="315"
                                src="https://www.youtube.com/embed/ZivovCZzyYk"
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
                </div>

                <ScreensGallery photos={mtMobileWireframe} title={"Wireframe screens"} date={"Nov. 30th, 2020"} />
                <ScreensGallery photos={mtMobileSwift} title={"Swift screens"} date={"Nov. 30th, 2020"} />
                <ScreensGallery photos={mtMobileNative} title={"React Native screens"} date={"Nov. 30th, 2020"} />

                <br/>
                <div className="horiz-rule" />
                <br/>

                <div className="lg-container">
                    <h2><a id="Business" className="anchor" href="/#">Business</a>Business Development</h2>
                    <p>
                        Minute.tech began as a business venture, following my passion for entrepreneurship, but ended up as an engineering venture because I found that I was the most committed engineer.
                        The first business plan was 18 pages and I wrote for an intro to entrepreneurship course at San Jose State University. I then used that same business plan just a month later to compete in the Silicon Valley Business Plan Competition, 
                        and was ultimately awarded $1500 cash and $1000 in legal support for the business. From there, I knew I had a good idea on my hands and hit the ground running, creating prototypes to 
                        verify that there indeed was a market gap for a new tech support solution. I later created an extensive 60 pages business plan to consolidate my many findings and ideas in order to pitch to investors.
                        Please see the <HashLink to="/work/minute.tech-llc#Timeline">Full Timeline section below</HashLink> for details on 
                        each of these business plans. 
                    </p>
                </div>

                <PhotoGallery photos={mtMisc} />

                <div className="lg-container">
                    
                </div>
                <div className="full-width-thin bg-blue">
                    <div className="wrapper">
                        <h2 className="white no-margin"><a id="Timeline" className="anchor" href="/#">Timeline</a>Full Timeline</h2>
                        <p className="white">
                            The Minute.tech project has an extensive history, so I have outlined the important milestones in the business below for easy viewing.
                        </p>
                    </div>
                </div>
                <div className="timeline-x-scroll">
                    <VerticalTimeline className="custom-line">
                        {
                            mtTimeline.map((job, i) => { 
                                return (
                                    <VerticalTimelineElement
                                        key={i}
                                        className="vertical-timeline-element"
                                        contentStyle={{ background: '#202D3E', color: '#fff' }}
                                        contentArrowStyle={{ borderRight: '7px solid  #202D3E' }}
                                        date={job.date}
                                        iconStyle={{ background: '#202D3E', color: '#fff'}}
                                        icon={job.icon}
                                    >
                                        <h3 className="vertical-timeline-element-title">{job.title}</h3>
                                        <p>{job.body}</p>
                                    </VerticalTimelineElement>
                                )
                            })
                        }
                        
                    </VerticalTimeline> 
                </div>
                <div className="full-width-thin bg-blue" />
                
                

                            {/* Mention that source code is proprietary.*/}
            {/* many project teams */}
            {/* Minute.tech plans to be a web, iOS, Android, and desktop app that provides consumer grade 
            tech support by connecting clients who have tech questions with qualified technicians. 
            The system will facilitate communication with technicians over messenger, voice/video calls, 
            remote connection, and in-person scheduling, and a payment solution all under the application's hood. 
            I recognize this project is ambitious, and has taken me many years, team members, advisors, and prototypes, 
            but I do believe the opportunity is worth the effort based on my personal experience and extensive research. */}

            {/* discuss mobile app needed for notifs */}
            </div>
        )
    }
}
