import React, { Component } from 'react'
import { mtMobileSwift, mtMobileWireframe, mtWebLive, mtMobileNative, mtWebWireframe } from '../../../../utils/screens'
import { mtMisc } from '../../../../utils/photos'
import PhotoGallery from '../../../misc/PhotoGallery'
import ScreensGallery from '../../../misc/ScreensGallery'

export default class MinuteTech extends Component {
    render() {
        return (
            <div>
                <div className="lg-container">
                    <h2><a id="Web" className="anchor" href="/#">Web</a>Web Application</h2>
                    {/* <p>
                        The web application was built with React.js, Firebase, …. List off all version developed through various classes. Mention that some stuff might have changed like video calling UI.
                        magna vel placerat. Vestibulum sem lacus, iaculis in porttitor eget, commodo varius odio. Suspendisse a laoreet justo. Cras a libero 
                        sed mauris fringilla laoreet a at diam. Sed at finibus nulla. Maecenas vel nulla lobortis, aliquam arcu et, blandit enim. Pellentesque 
                        suscipit finibus dui, nec accumsan elit blandit id. Curabitur vestibulum vehicula viverra. Interdum et malesuada fames ac ante ipsum
                        primis in faucibus. Aliquam varius elit a orci rhoncus, non pulvinar turpis posuere. Duis dapibus tellus posuere, ultricies neque at, 
                        commodo dui. Ut viverra orci nisl. Nunc aliquet pellentesque sollicitudin.
                    </p> */}
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
                    {/* <p>
                        The mobile applications were built with React Native, Swift,... explain the version I built and whyI built them that way. magna vel placerat. Vestibulum sem lacus, iaculis in porttitor eget, commodo varius odio. 
                        Suspendisse a laoreet justo. Cras a libero  sed mauris fringilla laoreet a at diam. Sed at finibus nulla. Maecenas vel nulla lobortis, aliquam arcu et, blandit enim. Pellentesque orci rhoncus, orci rhoncus,
                        suscipit finibus dui, nec accumsan elit blandit id. Curabitur vestibulum vehicula viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam varius elit a orci rhoncus, non pulvinar 
                        turpis posuere. Duis dapibus tellus posuere, ultricies neque at, commodo dui. Ut viverra orci nisl. Nunc aliquet pellentesque sollicitudin.
                    </p> */}
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
                    {/* <p>
                        Written two businnes plans, led teams, etc... explain the version I built and whyI built them that way. magna vel placerat. Vestibulum sem lacus, iaculis in porttitor eget, commodo varius odio. 
                        Suspendisse a laoreet justo. Cras a libero  sed mauris fringilla laoreet a at diam. Sed at finibus nulla. Maecenas vel nulla lobortis, aliquam arcu et, blandit enim. Pellentesque orci rhoncus, orci rhoncus,
                        suscipit finibus dui, nec accumsan elit blandit id. Curabitur vestibulum vehicula viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam varius elit a orci rhoncus, non pulvinar 
                        turpis posuere. Duis dapibus tellus posuere, ultricies neque at, commodo dui. Ut viverra orci nisl. Nunc aliquet pellentesque sollicitudin.
                    </p> */}
                </div>

                <PhotoGallery photos={mtMisc} />

                <div className="lg-container">
                    <h2><a id="Timeline" className="anchor" href="/#">Timeline</a>Full Timeline</h2>
                    {/* <p>
                        Written two businnes plans, led teams, etc... explain the version I built and whyI built them that way. magna vel placerat. Vestibulum sem lacus, iaculis in porttitor eget, commodo varius odio. 
                        Suspendisse a laoreet justo. Cras a libero  sed mauris fringilla laoreet a at diam. Sed at finibus nulla. Maecenas vel nulla lobortis, aliquam arcu et, blandit enim. Pellentesque orci rhoncus, orci rhoncus,
                        suscipit finibus dui, nec accumsan elit blandit id. Curabitur vestibulum vehicula viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam varius elit a orci rhoncus, non pulvinar 
                        turpis posuere. Duis dapibus tellus posuere, ultricies neque at, commodo dui. Ut viverra orci nisl. Nunc aliquet pellentesque sollicitudin.
                    </p> */}
                </div>
                
                

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
