import React from 'react'
import { MdWork, MdSchool } from "react-icons/md";
import { BiCodeAlt, BiRocket, BiBuildings } from "react-icons/bi"
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Col, Row } from 'react-flexbox-grid';

import { STATUS, SKILLS, SIZE, METRICS } from "./constants";

import MinuteTech from "../components/pages/work/jobs/MinuteTech";
import SJSU from '../components/pages/work/jobs/SJSU';
import SmithZellnerConsulting from '../components/pages/work/jobs/SmithZellnerConsulting';
import GoPrestigePower from '../components/pages/work/jobs/GoPrestigePower';
import BlairFamilyFoundation from '../components/pages/work/jobs/BlairFamilyFoundation';
import DougsReactBoiler from '../components/pages/work/jobs/DougsReactBoiler';
import Tesla from '../components/pages/work/jobs/Tesla';
import CAPS from '../components/pages/work/jobs/CAPS';
import Douglasrcjames from '../components/pages/work/jobs/Douglasrcjames';
import RetreatOnNichols from '../components/pages/work/jobs/RetreatOnNichols';
import GlassHouseFarms from '../components/pages/work/jobs/GlassHouseFarms';
import ColdBrewCreative from '../components/pages/work/jobs/ColdBrewCreative';
import ORHS from '../components/pages/work/jobs/ORHS';
import IHealPhones from '../components/pages/work/jobs/IHealPhones';
import ACFN from '../components/pages/work/jobs/ACFN';
import PaloAltoNetworks from '../components/pages/work/jobs/PaloAltoNetworks';
import BodyByYama from '../components/pages/work/jobs/BodyByYama';
import VectorPSI from '../components/pages/work/jobs/VectorPSI';
import PhotoGallery from '../components/misc/PhotoGallery';
import TextLinkGallery from '../components/misc/TextLinkGallery';
import Canary from '../components/pages/work/jobs/Canary';
import MeerkatMedical from '../components/pages/work/jobs/MeerkatMedical';
import StreetsOnTheLake from '../components/pages/work/jobs/StreetsOnTheLake';

export const jobs = [
    {
        title: "meerkatmedical.com",
        role: "Web developer",
        shortDescription: "Built on a full-stack website with API integration for an insurance company out of Tulsa, Oklahoma.",
        longDescription: <div>
            <p>Tasked at creating a simple customer lead form collection web app that interfaces with their CRM backend API, AgencyBloc. Toughest challenge was getting this AgencyBloc API working with Node.js. 
            I seemed to be one of the first devs using their API with Node.js. 
            Their documentation was not thorough, so I spent a few dozen emails working with their tech team to figure out how to properly make an API call. 
            I was able to experiment with some fun SVG and CSS tricks with this site, like the slanted </p>
            <p>Oh and I designed a simple cute logo for them real quick lol!</p>
            </div>,
        logoUrl: require("../assets/images/jobs/meerkatmedical/logo.png"),
        logoSize: SIZE.LARGE,
        period: "Feb. 2021 - May 2021",
        status: STATUS.COMPLETE,
        link: "https://www.meerkatmedical.com",
        githubLink: "https://github.com/douglasrcjames/meerkatmedical.com",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.NODE, SKILLS.REACT, SKILLS.GITHUB, SKILLS.FIREBASE
            ]
        },
        metrics: [
            {
                name: METRICS.VISITORS,
                value: 1224
            },
            {
                name: METRICS.PAGE_VIEWS,
                value: 2178
            },
            {
                name: METRICS.COMMITS,
                value: 17
            },
            {
                name: METRICS.LOC,
                value: 9000
            },
            {
                name: METRICS.FILES,
                value: 84
            },
            {
                name: METRICS.SCREENS,
                value: 18
            },
        ],
        headerUrl: require("../assets/images/jobs/meerkatmedical/header.png"),
        lastUpdated: "Mar. 13th, 2021",
        headerPosition: "50% 70%",
        icon: <BiCodeAlt />,
        extraContent: <MeerkatMedical />
    },
    {
        title: "Canary Marketing",
        role: "Web Engineer",
        shortDescription: "Building ecommerce web applications for a marketing agency.",
        longDescription: <>
            <p>
                Canary Marketing is a full service marketing agency with a simple mission. Create merch people actually want to keep. 
                Whether it's a shirt or a seeding kit, make it the best one it can be. Hold every project to the same standard. Be thoughtful. Design differently. 
                Because after all, no one needs more "stuff".
            </p>
            <p>
                I started working as a contractor for Canary creating online pop up shops for them to display branded merchandise for their client project: Stitch Fix's 10th Anniversary. 
                This initial shop was a prototype for the greater web app/shop system that included customer authentication, admin management, item postings, checkout, and payment. 
                The initial shop had a guest list of ~10,000 users and the system worked great! So great that I was hired full time in March of 2021 as their web engineer to bring the full web shop to life. 
                As I finish building this web shop, I will report back and post screenshots and a deeper explanation of the web app!
            </p>
            </>,
        logoUrl: require("../assets/images/jobs/canary/logo.png"),
        logoSize: SIZE.LARGE,
        period: "Jan. 2021 - Today",
        status: STATUS.WORKING,
        link: "https://www.canarymarketing.shop",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.NODE, SKILLS.REACT, SKILLS.TS, SKILLS.GITHUB, SKILLS.FIREBASE
            ],
        },
        metrics: [
            {
                name: METRICS.VISITORS,
                value: 10583
            },
            {
                name: METRICS.PAGE_VIEWS,
                value: 374122
            },
            {
                name: METRICS.COMMITS,
                value: 71
            },
            {
                name: METRICS.LOC,
                value: 9000
            },
            {
                name: METRICS.FILES,
                value: 84
            },
            {
                name: METRICS.SCREENS,
                value: 18
            },
        ],
        headerUrl: require("../assets/images/jobs/canary/header.png"),
        lastUpdated: "Mar. 13th, 2021",
        headerPosition: "50% 50%",
        icon: <BiBuildings />,
        extraContent: <Canary />
    },
    {
        title: "streetsonthelake.com",
        role: "Web developer",
        shortDescription: "Working on a full-stack web app with RSVP functionality for a friend's wedding out of Anchorage, Alaska",
        longDescription: <div>
                <p>
                    Created a wedding website for the Street's wedding in Big Lake, Alaska with the goal to detail the relationship, upcoming event, and to collect RSVPs for the guests of the event. 
                    Website was built as a pro bono for our good friend; cheers to the Streets, what a fun wedding!!
                </p>
                <p>
                    Launch was fairly smooth, one issue was that some users had thrown away or misplaced the letter the invite came in for them to know exactly how to enter their name on the site. 
                    There were some guests who were labeled "Doe Family" or "The Doe Family", so some didn't know if they should input their individual first and last name, or the full family name or what, which is understandably confusing.
                    A better approach would have been to clearly label a group # on the invite with a small note to use this to RSVP. The user could then be identified by their group number OR by their name.
                </p>
            </div>,
        logoUrl: require("../assets/images/jobs/streetsonthelake/logo.png"),
        logoSize: SIZE.ROUNDED,
        period: "Jan. 2021 - Aug. 2021",
        status: STATUS.COMPLETE,
        link: "https://www.streetsonthelake.com",
        githubLink: "https://github.com/douglasrcjames/streetsonthelake.com",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.NODE, SKILLS.REACT, SKILLS.GITHUB, SKILLS.FIREBASE
            ]
        },
        metrics: [
            {
                name: METRICS.VISITORS,
                value: 498
            },
            {
                name: METRICS.PAGE_VIEWS,
                value: 2361
            },
            {
                name: METRICS.COMMITS,
                value: 9
            },
            {
                name: METRICS.LOC,
                value: 3500
            },
            {
                name: METRICS.FILES,
                value: 165
            },
            {
                name: METRICS.SCREENS,
                value: 10
            },
        ],
        headerUrl: require("../assets/images/jobs/streetsonthelake/header.png"),
        lastUpdated: "Dec. 3rd 2021",
        headerPosition: "50% 40%",
        icon: <BiCodeAlt />,
        extraContent: <StreetsOnTheLake />
    },
    {
        title: "Minute.tech LLC",
        role: "Founder & Engineer",
        shortDescription: "Web and mobile applications connecting non-techies to techies for technical support.",
        longDescription: <>
            <p>
                Minute.tech LLC is a software solution connecting clients who have tech questions with qualified technicians for everyday tech support; think GeekSquad crossed with Uber.
                Users can communicate via real-time messenger, voice/video call, screen sharing, and scheduling with a review and payment system built in. 
                The Minute.tech system lowers the barrier for non-techies and techies to work together, especially during a pandemic that requires social distanced solutions to previously in-person services.
                Minute.tech currently has a live (beta) <HashLink to="/work/minute.tech-llc#Web">web</HashLink> application and an upcoming <HashLink to="/work/minute.tech-llc#Mobile">mobile</HashLink> application set to beta launch Q2 2021. 
                Since the pandemic started in Feb. 2020, I have been testing the Minute.tech beta web app with live clients with me as the only technician. I gave the customer the option to resolve with or without paying me for my help. 
                So far I have answered 100 client questions with the Minute.tech platform, transacted nearly $4000 with the Stripe API, and accrued almost 10,000 call minutes with the Twilio API.
            </p>
            <p>
                I started this project in my junior year at San Jose State University for an entrepreneurship course where we were assigned to pick an idea with a group and build a business plan for it. 
                I suggested my tech support idea I recently came up with after my parents were constantly calling for tech support after leaving them for college, and my team loved it. The business plan I built for this project impressed my 
                professor enough for her to suggest I compete in the Shark Tank-like Silicon Valley Business Plan Competition (SVBPC). I wisely listened to her and competed in the SVBPC,&#8239;&#8239;
                <a href="https://www.sjsu.edu/svce/svbpc/pastwinners/index.html" target="_blank" rel="noopener noreferrer">which awarded my new business $1500 cash and $1000 in legal help</a>! 
                For my future engineering/business semesters and many group projects, I conducted tests, did extensive research, and built out app prototypes to turn Minute.tech into a reality.
            </p>
            <p>
                <b>To organize the extensive work history I have done with Minute.tech, I have portioned this job into 4 sections. Please select a portion you want to learn more about below:</b>
            </p>
            <Row center="xs">
                <Col xs={12} sm={6} md={3} className="sm-padding-t-b">
                    <HashLink to="/work/minute.tech-llc#Web">
                        <button className="md-white-btn">
                            <i className="fas fa-globe" /> Web app
                        </button>
                    </HashLink>  
                </Col>
                <Col xs={12} sm={6} md={3} className="sm-padding-t-b">
                    <HashLink to="/work/minute.tech-llc#Mobile">
                        <button className="md-white-btn">
                            <i className="fas fa-mobile" /> Mobile app
                        </button>
                    </HashLink>  
                </Col>
                <Col xs={12} sm={6} md={3} className="sm-padding-t-b">
                    <HashLink to="/work/minute.tech-llc#Business">
                        <button className="md-white-btn">
                            <i className="fas fa-briefcase" /> Business development
                        </button>  
                    </HashLink>  
                </Col>
                <Col xs={12} sm={6} md={3} className="sm-padding-t-b">
                    <HashLink to="/work/minute.tech-llc#Timeline">
                        <button className="md-white-btn">
                            <i className="fas fa-history" /> Full timeline
                        </button> 
                    </HashLink>  
                </Col>
            </Row>
            </>,
        logoUrl: require("../assets/images/jobs/minutetech/logo.png"),
        logoSize: SIZE.LARGE,
        period: "May. 2016 - Today",
        status: STATUS.WORKING,
        link: "https://www.minute.tech",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.NODE, SKILLS.REACT, SKILLS.TS, SKILLS.STRIPE, SKILLS.TWILIO, SKILLS.GITHUB, SKILLS.FIREBASE, SKILLS.WIREFRAMING
            ],
            secondary: [
                SKILLS.SWIFT, SKILLS.REDUX, SKILLS.PYTHON, SKILLS.MYSQL, SKILLS.FLASK
            ],
            other: [
                SKILLS.COMPUTER_HARDWARE, SKILLS.BUSINESS_DEV, SKILLS.LEADERSHIP, SKILLS.TEAMWORK, SKILLS.TECHNICAL_SUPPORT, SKILLS.CUSTOMER_SERVICE
            ]
        },
        metrics: [
            {
                name: METRICS.VISITORS,
                value: 2561
            },
            {
                name: METRICS.PAGE_VIEWS,
                value: 70875
            },
            {
                name: METRICS.COMMITS,
                value: 1306 // estimated between all libraries under MT github org page
            },
            {
                name: METRICS.LOC,
                value: 20000
            },
            {
                name: METRICS.FILES,
                value: 500
            },
            {
                name: METRICS.SCREENS,
                value: 45
            },
            {
                name: METRICS.TWILIO_MINS,
                value: 3866
            },
            {
                name: METRICS.STRIPE_DOLLARS,
                value: 5135

            }
        ],
        headerUrl: require("../assets/images/jobs/minutetech/header.png"),
        lastUpdated: "Dec. 3rd, 2021",
        headerPosition: "50% 50%",
        icon: <BiRocket />,
        extraContent: <MinuteTech />
    },
    {
        title: "capsmd.org",
        role: "Web developer",
        shortDescription: "Built a full-stack site with custom CMS for a political publication non-profit organization in Montgomery, Maryland.",
        longDescription: <div>
            <p>
                CAPS (Council for Advocacy and Policy Solutions) is a non-profit political publication group with the goal to educate constituents in 
                Montgomery County, Maryland about legislation that effects them. The group came to me in May, 2019 during my finals week for school because their previous web developer had dropped
                the ball building a site with Webflow.com. <a href="https://capswebsite.webflow.io/" target="_blank" rel="noopener noreferrer">(See previous webflow site here</a> and screenshots below.) 
                They were launching their CAPS program in a few weeks and were in a mad rush to get the site up and operational. 
                I agreed, excited to use my new React and Firebase skills and was able to crank out a website for them in a week. (and still pass 4 of my engineering classes!)
                There was one hiccup the night before they were launching, I was making a few final (vital) touches to the site, and suddenly my computer crashed. I spent hours 
                troubleshooting to get back hours of un-pushed changes, but unfortunately, my hard drive was bust. 
                The next day I learned some valuable lessons: 
            </p>   
            
            <ol>
                <li>
                    Recovering data on hard drives is <i>tough</i>. There are no local hard drive repair companies in the
                    Silicon Valley? How is that possible!? Notes taken for my <Link to="work/minute.tech-llc">minute.tech</Link> project.
                </li>
                <li>
                    I had fortunately deployed to Firebase before my computer crashed and thought there might be a way to reverse deploy or access that deployed version.
                    A few hours later, and asking a few techie friends I found out that you can access and download the build files via your web browser! I previously
                    thought the build process jumbled things up so client side couldn't see the build files, but I was wrong! This is a valuable lesson when deploying sensitive software
                    to the web, as well for my particular situation to recover data.
                </li>
            </ol>

            <p>
                The final front-end experience was built with HTML/CSS/React.js and back-end services like hosting with SSL, server side functions, file storage, authentication, and NoSQL databases 
                were built with Firebase. The initial build required me to go into the back-end to create a React.js component file for every article they wanted to post to the system, which quickly showed was not going to work 
                efficiently for their use case with short deadlines, differing time zones, etc. So I built them out a custom Content Management System (CMS) so they could login as an admin, and post custom articles at their leisure.
                Building the system raised a few challenges such as:
            </p>
            <ol>
                <li>How could I dynamically post articles?</li>
                <li>How to allow CAPS employees to publish formatted articles with images, graphs, etc?</li>
            </ol>
            <p>I tackled these challenges as follows:</p>
            <ol>
                <li>
                    Previously to solving this, I didn't know how I would render a web page route with React Router without creating a React component file for that web page.
                    After a bit of messing around in a test project, I figured out that I could render routes by pulling data from the database then pass that data to an "Article" component which would then render that data accordingly.
                    Here was the most important section of code that made that dynamic render possible:
                    <PhotoGallery 
                        photos={
                            [{
                                src: require(`../assets/images/jobs/caps/misc/cms-code.png`), 
                                caption: "CMS dynamic React routing snip",
                                width: 1.1,
                                height: 0.2
                            }]
                        } 
                        setWidth={"lg"} 
                    />
                </li>
                <li>
                    Previously to creating the CMS, articles would obviously take longer to make, but each page would be quality assured to be beautiful, for example these custom graphs I used the 
                    &#8239;<a href="https://github.com/recharts/recharts" target="_blank" rel="noopener noreferrer">recharts</a> library for some articles:&#8239;
                    <a href="https://capsmd.org/issues/education/stories-opinions/do-better-kirwan-funding" target="_blank" rel="noopener noreferrer">here</a>,&#8239;
                    <a href="https://capsmd.org/issues/economic-development/facts/slow-growth-budget" target="_blank" rel="noopener noreferrer">here</a>,&#8239;
                    and <a href="https://capsmd.org/issues/economic-development/stories-opinions/how-did-the-county-spend-your-money-this-year" target="_blank" rel="noopener noreferrer">here</a>. I unfortunately had to sacrifice these 
                    beautiful graphs to trade off for a viable solution that would be simple for the client in this use case. That solution was to use the
                    &#8239;<a href="https://github.com/zenoamaro/react-quill" target="_blank" rel="noopener noreferrer">react-quill</a> library to allow the user to create "Rich Text" articles that have formatted text for the article with image inserts and links. 
                    I also created an option for the user to upload a PDF that would be viewable in a clean interface with the <a href="https://github.com/wojtekmaj/react-pdf" target="_blank" rel="noopener noreferrer">react-pdf</a> library.
                </li>
            </ol>
        </div>,
        githubLink: "https://github.com/douglasrcjames/capsmd.org",
        logoUrl: require("../assets/images/jobs/caps/logo.png"),
        logoSize: SIZE.LARGE,
        period: "May. 2019 - Mar. 2021",
        status: STATUS.COMPLETE,
        link: "https://www.capsmd.org",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.NODE, SKILLS.REACT, SKILLS.GITHUB, SKILLS.FIREBASE
            ]
        },
        metrics: [
            {
                name: METRICS.VISITORS,
                value: 4022
            },
            {
                name: METRICS.PAGE_VIEWS,
                value: 19531
            },
            {
                name: METRICS.COMMITS,
                value: 190
            },
            {
                name: METRICS.LOC,
                value: 15000
            },
            {
                name: METRICS.FILES,
                value: 250
            },
            {
                name: METRICS.SCREENS,
                value: 15
            }
        ],
        lastUpdated: "Mar. 13th, 2021",
        headerUrl: require("../assets/images/jobs/caps/header.png"),
        headerPosition: "50% 50%",
        icon: <BiCodeAlt />,
        extraContent: <CAPS />
    },
    {
        title: "blairfamily.foundation",
        role: "Web developer",
        shortDescription: "Built a full-stack website for a philanthropy foundation in Montgomery, Maryland.",
        longDescription: <p>
            The David and Mikel Blair Family Foundation is dedicated to purposeful giving and 
            is rooted in improving the quality of life for individuals around Maryland. The foundation connected with me after a partner had a positive experience working with me at <Link to="/work/capsmd.org">capsmd.org</Link>. 
            They were looking to develop a simple full-stack website with a contact form and subscribe form, much like my work at capsmd.org. I was able to work with a designer on their team to take their 
            wireframe design and turn it into a living website. The wireframe was one of the more intricate designs I have had to emulate, but I was able to tackle the challenge with relative ease with my newfound skills. 
            I built this site using React.js as the front-end, and Firebase for the NoSQL database back-end to store contact info then send that contact info to the client's email via 
            nodemailer with server side functions, and free SSL hosting. The site also features traffic tracking for the client with Google Analytics.
        </p>,
        githubLink: "https://github.com/douglasrcjames/blairfamily.foundation",
        logoUrl: require("../assets/images/jobs/blairfamily/logo.png"),
        logoSize: SIZE.LARGE,
        period: "Apr. 2020 - Mar. 2021",
        status: STATUS.COMPLETE,
        link: "https://www.blairfamily.foundation",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.NODE, SKILLS.REACT, SKILLS.GITHUB, SKILLS.FIREBASE, SKILLS.WIREFRAMING
            ]
        },
        metrics: [
            {
                name: METRICS.VISITORS,
                value: 1488
            },
            {
                name: METRICS.PAGE_VIEWS,
                value: 5151
            },
            {
                name: METRICS.COMMITS,
                value: 55
            },
            {
                name: METRICS.LOC,
                value: 3400
            },
            {
                name: METRICS.FILES,
                value: 150
            },
            {
                name: METRICS.SCREENS,
                value: 5
            }
        ],
        headerUrl: require("../assets/images/jobs/blairfamily/header.png"),
        lastUpdated: "Mar. 13th, 2021",
        headerPosition: "50% 50%",
        icon: <BiCodeAlt />,
        extraContent: <BlairFamilyFoundation />
    },
    {
        title: "douglasrcjames.com",
        role: "Web developer",
        shortDescription: "Built a full-stack portfolio website for myself demonstrating and showcasing my skills.",
        longDescription: <p>
            This is my second and hopefully final build of my personal portfolio website to showcase my work, skills, and more. Check out how far I've come 
            from <a href="https://douglasrcjames-v1.web.app/" target="_blank" rel="noopener noreferrer">version 1 of my portfolio site</a>!
            At the time I am writing this, I feel that this site design and build is my best project to date, and I am proud to show how far my skills have evolved from version 1 to version 2 (granted version 1 was a quick build).
            <br/>
            Also, how meta is this? Here I am creating a project web page about the website you are on!
            </p>,
        githubLink: "https://github.com/douglasrcjames/douglasrcjames.com",
        logoUrl: require("../assets/images/logos/logo512.png"),
        logoSize: SIZE.LARGE,
        period: "Aug. 2019 - Dec. 2020",
        status: STATUS.COMPLETE,
        link: "https://www.douglasrcjames.com",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.NODE, SKILLS.REACT, SKILLS.TS, SKILLS.GITHUB, SKILLS.FIREBASE, SKILLS.WIREFRAMING
            ]
        },
        metrics: [
            {
                name: METRICS.VISITORS,
                value: 245
            },
            {
                name: METRICS.PAGE_VIEWS,
                value: 2226
            },
            {
                name: METRICS.COMMITS,
                value: 77
            },
            {
                name: METRICS.LOC,
                value: 4600
            },
            {
                name: METRICS.FILES,
                value: 350
            },
            {
                name: METRICS.SCREENS,
                value: 5
            }
        ],
        headerUrl: require("../assets/images/jobs/douglasrcjames/header.png"),
        lastUpdated: "Dec. 18th, 2020",
        headerPosition: "50% 40%",
        icon: <BiCodeAlt />,
        extraContent: <Douglasrcjames />
    },
    {
        title: "Doug's React Boiler",
        role: "Web developer",
        shortDescription: "Built myself a boilerplate template for building my React.js/Firebase web applications.",
        longDescription: <p>
            I built this template project because I was finding myself recreating the same portions of code for my React web projects. 
            This template project features my CSS library I created, base React components like a Header &amp; Footer, directories properly structures, React Router, Google Analytics, .env file, sitemap, and more! 
            I figured a boilerplate for me to start from would reduce any mistakes made by repeating the same process, but most importantly speed up the creation of the baseline project.
            This repository will be evolving as I learn new tricks and technologies for my web projects. For example, I recently added SCSS to my baseline styles for ease of use when changing the colors and fonts per project!
        </p>,
        githubLink: "https://github.com/douglasrcjames/dougs-react-boiler",
        logoUrl: require("../assets/images/jobs/dougs-react-boiler/logo.png"),
        logoSize: SIZE.LARGE,
        period: "Jun. 2020 - Nov. 2020",
        status: STATUS.COMPLETE,
        link: "https://dougs-react-boiler.web.app/",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.NODE, SKILLS.REACT, SKILLS.TS, SKILLS.GITHUB, SKILLS.FIREBASE
            ]
        },
        metrics: [
            {
                name: METRICS.LOC,
                value: 1200
            },
            {
                name: METRICS.COMMITS,
                value: 34
            },
            {
                name: METRICS.FILES,
                value: 35
            },
            {
                name: METRICS.SCREENS,
                value: 3
            }
        ],
        headerUrl: require("../assets/images/jobs/dougs-react-boiler/header.png"),
        lastUpdated: "Dec. 18th, 2020",
        headerPosition: "50% 50%",
        icon: <BiCodeAlt />,
        extraContent: <DougsReactBoiler />
    },
    {
        title: "vectorpsi.com",
        role: "Web developer",
        shortDescription: "Built a full-stack website for an industrial manufacturing sales company in Danville, California.",
        longDescription: <p>
            Vector Process Solutions, Inc is an industrial manufacturing sales company in Danville, California that was looking to showcase their supported manufacturing partners and products. 
            I built this site using React.js as the front-end, and Firebase for the NoSQL database back-end to store contact info then send that contact info to the client's email via 
            nodemailer with server side functions, and free SSL hosting. The site also features traffic tracking with Google Analytics, as well as over 70 manufacturing product lines. 
            I also had the pleasure of collaborating with my design partner <a href="https://www.linkedin.com/in/anamariecampos/" target="_blank" rel="noopener noreferrer">Ana Campos</a> to build the client 
            branding guidelines (font, colors, logo, and usage) for their business.
        </p>,
        githubLink: "https://github.com/douglasrcjames/vectorpsi.com",
        logoUrl: require("../assets/images/jobs/vectorpsi/logo.png"),
        logoSize: SIZE.LARGE,
        period: "Jun. 2020 - Oct. 2020",
        status: STATUS.COMPLETE,
        link: "https://www.vectorpsi.com",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.NODE, SKILLS.REACT, SKILLS.TS, SKILLS.GITHUB, SKILLS.FIREBASE
            ]
        },
        metrics: [
            {
                name: METRICS.VISITORS,
                value: 361
            },
            {
                name: METRICS.PAGE_VIEWS,
                value: 1889
            },
            {
                name: METRICS.COMMITS,
                value: 33
            },
            {
                name: METRICS.LOC,
                value: 3700
            },
            {
                name: METRICS.FILES,
                value: 240
            },
            {
                name: METRICS.SCREENS,
                value: 6
            }
        ],
        headerUrl: require("../assets/images/jobs/vectorpsi/header.png"),
        lastUpdated: "Dec. 18th, 2020",
        headerPosition: "50% 50%",
        icon: <BiCodeAlt />,
        extraContent: <VectorPSI />
    },
    {
        title: "smithzellner.consulting",
        role: "Web developer",
        shortDescription: "Built a full-stack website for a civil rights consulting firm in Fairhope, Alabama.",
        longDescription: <div>
            <p>
                Bob Zellner and Pamela Smith are partners that form Smith-Zellner Consulting, a civil rights consulting firm out of Fairhope, Alabama. 
                Bob Zellner is the author of <i>The Wrong Side of Murder Creek: A White Southerner in the Freedom Movement</i>, a story detailing how - as a teenage, white, 
                Alabama son and grandson of Ku Klux Klansmen – he changed his point of view and joined ranks with the black students who were sitting-in, marching, fighting 
                and sometimes dying to challenge the “Southern way of life”. <a href="https://www.imdb.com/title/tt2235372/" target="_blank" rel="noopener noreferrer"><i>Son of the South</i></a>, 
                a major motion picture adaptation of his book, <i>The Wrong Side of Murder Creek</i>, was released on August 26th, 2020. A trend that was clearly visible on the Google Analytics graph of users! See below:
            </p>
            <PhotoGallery 
                photos={
                    [{
                        src: require(`../assets/images/jobs/smithzellner/misc/ga-graph.png`), 
                        caption: "Google Analytics graph of movie release surge",
                        width: 2.2,
                        height: 0.3
                    }]
                } 
                setWidth={"lg"} />
            <p>
                I built this site using React.js as the front-end, and Firebase for the NoSQL database back-end to store contact info then send that contact info to the client's email via 
                nodemailer with server side functions, and free SSL hosting. The site also features traffic tracking for the client with Google Analytics, as shown in the figure above!
            </p>
        </div>
        ,
        githubLink: "https://github.com/douglasrcjames/smithzellner.consulting",
        logoUrl: require("../assets/images/jobs/smithzellner/logo.png"),
        logoSize: SIZE.LARGE,
        period: "Jul. 2020 - Sep. 2020",
        status: STATUS.COMPLETE,
        link: "https://www.smithzellner.consulting",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.NODE, SKILLS.REACT, SKILLS.TS, SKILLS.GITHUB, SKILLS.FIREBASE
            ]
        },
        metrics: [
            {
                name: METRICS.VISITORS,
                value: 176
            },
            {
                name: METRICS.PAGE_VIEWS,
                value: 1889
            },
            {
                name: METRICS.COMMITS,
                value: 34
            },
            {
                name: METRICS.LOC,
                value: 2200
            },
            {
                name: METRICS.FILES,
                value: 80
            },
            {
                name: METRICS.SCREENS,
                value: 5
            }
        ],
        headerUrl: require("../assets/images/jobs/smithzellner/header.png"),
        lastUpdated: "Dec. 18th, 2020",
        headerPosition: "50% 50%",
        icon: <BiCodeAlt />,
        extraContent: <SmithZellnerConsulting />
    },
    // TODO: wait to put this one in there
    // {
    //     title: "zestydoug.com",
    //     role: "Web developer",
    //     shortDescription: "Built a full-stack website for my live streaming persona.",
    //     longDescription: <p>Explain that I stream gaming and coding and is a work in progress. Ullamco excepteur adipisicing sit nisi duis sint ex aliquip excepteur ut eiusmod. 
    //         Pariatur nostrud est cupidatat commodo labore eiusmod quis aliquip quis nulla consequat. 
    //         Ad nostrud Lorem nulla ut esse consequat Lorem exercitation nisi ipsum ex adipisicing aliqua magna. 
    //         Minim enim aliquip consectetur est ipsum incididunt labore aliquip. Magna consequat sint laboris velit 
    //         do tempor irure. Ullamco nulla excepteur in ea enim ipsum minim ullamco aliqua. Ullamco qui excepteur do 
    //         nostrud non.</p>,
    //     logoUrl: require("../assets/images/logos/logo512.png"),
    //     logoSize: SIZE.LARGE,
    //     period: "August, 2020 - September, 2020",
    //     status: STATUS.WORKING,
    //     link: "https://www.zestydoug.com",
    //     skills: {
    //         primary: [
    //             SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.NODE, SKILLS.REACT, SKILLS.GITHUB, SKILLS.FIREBASE
    //         ]
    //     },
    //     headerUrl: require("../assets/images/jobs/zestydoug/header.png"),
    //     headerPosition: "50% 40%",
    //     icon: <BiCodeAlt />,
    //     extraContent: ""
    // },
    {
        title: "goprestigepower.com",
        role: "Web developer",
        shortDescription: "Built a full-stack site with custom CRM for a solar sales company out of Orange County, California.",
        longDescription: <p>
            Prestige Power is a solar sales company out of Orange County, California that came to me looking to create a front-end website to drive traffic to their business, as well as a 
            solution to replace their current CRM (Customer Relationship Management) provider that was charging monthly and wasn't a perfect fit for their use case. I was able to build them a beautiful front-end experience 
            that included forms to capture leads that directly fed into the custom CRM back-end. The front-end experience was built with HTML/CSS/React.js 
            and back-end services like hosting with SSL, server side functions, file storage, authentication, and databases were built with Firebase. The site also features traffic tracking 
            for the client with Google Analytics. I also had the pleasure of collaborating with my design partner <a href="https://www.linkedin.com/in/anamariecampos/" target="_blank" rel="noopener noreferrer">Ana Campos</a> to build the client 
            branding guidelines (font, colors, logo, and usage) for their business.
            {/* TODO: include? <a href="https://www.linkedin.com/in/reed-reilly-8844251ab/" target="_blank" rel="noopener noreferrer">Reed Reilly</a>&#8239; */}
        </p>,
        githubLink: "https://github.com/douglasrcjames/goprestigepower.com",
        logoUrl: require("../assets/images/jobs/goprestigepower/logo.png"),
        logoSize: SIZE.LARGE,
        period: "Jul. 2020 - Aug. 2020",
        status: STATUS.COMPLETE,
        link: "https://www.goprestigepower.com",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.NODE, SKILLS.REACT, SKILLS.TS, SKILLS.GITHUB, SKILLS.FIREBASE
            ]
        },
        metrics: [
            {
                name: METRICS.VISITORS,
                value: 698
            },
            {
                name: METRICS.PAGE_VIEWS,
                value: 4361
            },
            {
                name: METRICS.COMMITS,
                value: 62
            },
            {
                name: METRICS.LOC,
                value: 8000
            },
            {
                name: METRICS.FILES,
                value: 85
            },
            {
                name: METRICS.SCREENS,
                value: 15
            }
        ],
        headerUrl: require("../assets/images/jobs/goprestigepower/header.png"),
        lastUpdated: "Dec. 18th, 2020",
        headerPosition: "50% 50%",
        icon: <BiCodeAlt />,
        extraContent: <GoPrestigePower />
    },
    {
        title: "retreatonnichols.com",
        role: "Web developer",
        shortDescription: "Built a full-stack website short term luxury rental property in Fairhope, Alabama.",
        longDescription: <>
            <p>
                The Retreat on Nichols is a two unit luxury short-term accommodation in Fairhope, Alabama. The property features a common outdoor kitchen, wood-fired pizza oven, 
                fire pit, Petanque court, lawn &amp; board games, additional bathroom, laundry, gated parking, bicycles, &amp; golf cart. I was brought on board to build the website and 
                manage SEO because the property owners were looking to increase the traffic to the rental via Airbnb and VRBO booking sites.
            </p>
            <p>
                I built this site using React.js as the front-end, and Firebase for the NoSQL database back-end to store contact info then send that contact info to the client's email via 
                nodemailer with server side functions, and free SSL hosting. The site also features traffic tracking for the client with Google Analytics. The site took me about a month to plan, design, and build, but I continue to this day updating various media and wording content for the clients. 
                The design phase was fairly quick, because I had previously built a SquareSpace site for the client, so I based much of my design off that template. 
                I had to do a quick rework of the logo with my Photoshop skills because the client did not have the original image for the logo. 
                I also worked with a videographer and photographer to fit their content captured into the site. 
            </p>
        </>,
        githubLink: "https://github.com/douglasrcjames/retreatonnichols.com",
        logoUrl: require("../assets/images/jobs/retreatonnichols/logo.png"),
        logoSize: SIZE.LARGE,
        period: "Aug. 2019 - Mar. 2020",
        status: STATUS.COMPLETE,
        link: "https://www.retreatonnichols.com",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.NODE, SKILLS.REACT, SKILLS.GITHUB, SKILLS.FIREBASE
            ]
        },
        metrics: [
            {
                name: METRICS.VISITORS,
                value: 1302
            },
            {
                name: METRICS.PAGE_VIEWS,
                value: 4953
            },
            {
                name: METRICS.COMMITS,
                value: 59
            },
            {
                name: METRICS.LOC,
                value: 2000
            },
            {
                name: METRICS.FILES,
                value: 150
            },
            {
                name: METRICS.SCREENS,
                value: 5
            }
        ],
        headerUrl: require("../assets/images/jobs/retreatonnichols/header.png"),
        lastUpdated: "Dec. 18th, 2020",
        headerPosition: "50% 50%",
        icon: <BiCodeAlt />,
        extraContent: <RetreatOnNichols />
    },
    {
        title: "San Jose State University",
        role: "Computer Engineering & Business Student",
        shortDescription: "Earned a computer engineering major and business & math minors in the heart of Silicon Valley.",
        longDescription: <p>
            San Jose State University is centered in the heart of Silicon Valley in downtown San Jose, which give me the opportunity to be fully emersed in the business and technology community. 
            While attending, I earned my computer engineering major with business &amp; math minors, giving me the confidence and paperwork to work professionally as an engineer to solve problems worldwide. 
            From the technical courses I took in my higher level courses, I learned how computers are structured and abstracted at all levels of the stack, from machine code to web coding.
            I learned where I wanted to work on that stack, which I have currently landed at around the top, with web based coding languages because I love to "quickly" see everyday consumers using my products.
            I was also an active member of the Computer &amp; Software Engineering Society (SCE) and Pi Kappa Alpha fraternity. Go Spartans!
        </p>,
        logoUrl: require("../assets/images/jobs/sjsu/logo.png"),
        logoSize: SIZE.LARGE,
        period: "Aug. 2013 - Dec. 2019",
        status: STATUS.COMPLETE,
        link: "https://www.sjsu.edu",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.REACT, SKILLS.FIREBASE, SKILLS.SWIFT, SKILLS.PYTHON, SKILLS.FLASK, SKILLS.MYSQL, SKILLS.GITHUB, SKILLS.CPP, SKILLS.VERILOG, SKILLS.ASM,
            ],
            other: [
                SKILLS.BUSINESS_DEV, 
                SKILLS.ACCOUNTING,
                SKILLS.ENTREPRENEURSHIP, 
                SKILLS.LEADERSHIP, 
                SKILLS.TEAMWORK, 
                SKILLS.MATHEMATICS, 
                SKILLS.PHYSICS, 
                SKILLS.ENGINEERING_FUNDAMENTALS, 
                SKILLS.ENGINEERING_ETHICS,
                SKILLS.COMPUTER_HARDWARE, 
                SKILLS.SOFTWARE_ENGINEERING,
                SKILLS.COMPUTER_NETWORKING, 
                SKILLS.COMPUTER_ALGORITHMS,
                SKILLS.DATABASE_SYSTEMS,
                SKILLS.OBJECT_ORIENTED_PROGRAMMING,
                SKILLS.ELECTRONIC_CIRCUITS,
                SKILLS.MICROPROCESSOR_DESIGN,
                SKILLS.COMPUTER_ARCHITECTURE,
                SKILLS.OPERATING_SYSTEMS_DESIGN,
                SKILLS.ASSEMBLY_LANGUAGE,
                SKILLS.COMPILER_DESIGN,
            ]
        },
        headerUrl: require("../assets/images/jobs/sjsu/header.png"),
        lastUpdated: "Dec. 18th, 2020",
        headerPosition: "50% 50%",
        icon: <MdSchool />,
        extraContent: <SJSU />
    },
    {
        title: "bodybyyama.com",
        role: "Web developer",
        shortDescription: "Built a full-stack website the personal fitness trainer Yamato Nishino in San Jose, California.",
        longDescription: <p>
            Yamato Nishino was a friend and personal fitness trainer in the San Fransisco Bay Area. She wanted a website to 
            centralize her personal training business, where potential clients could read and watch more about what she had to offer. 
            I worked with two other graphic designers, <a href="https://www.linkedin.com/in/ryan-wall-287837132/" target="_blank" rel="noopener noreferrer">Ryan Wall</a>&#8239;
            and <a href="https://www.linkedin.com/in/mitchell-licata/" target="_blank" rel="noopener noreferrer">Mitch Licata</a> to create logo, branding (colors, fonts, etc), and 
            website wireframe. I developed her one-page site with PHP for the contact form and UIkit3 for the front-end work. This site turned out simply beautiful, I was so proud 
            of what we were able to design as a 3 man team. My favorite part of the site is the background image of her and how it that moves a bit as the viewer scrolls down the page.
            Yamato has recently decided to step away from her personal training business and the site is no longer live. 
        </p>,
        githubLink: "https://github.com/douglasrcjames/bodybyyama.com",
        logoUrl: require("../assets/images/jobs/bodybyyama/logo.png"),
        logoSize: SIZE.LARGE,
        period: "Jun. 2018 - Aug. 2018",
        status: STATUS.COMPLETE,
        link: "https://www.bodybyyama.com",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.PHP, SKILLS.MYSQL, SKILLS.WIREFRAMING
            ]
        },
        metrics: [
            {
                name: METRICS.COMMITS,
                value: 6
            },
            {
                name: METRICS.LOC,
                value: 600
            },
            {
                name: METRICS.FILES,
                value: 50
            },
            {
                name: METRICS.SCREENS,
                value: 1
            }
        ],
        headerUrl: require("../assets/images/jobs/bodybyyama/header.png"),
        lastUpdated: "Dec. 18th, 2020",
        headerPosition: "50% 70%",
        icon: <BiCodeAlt />,
        extraContent: <BodyByYama />
    },
    {
        title: "glasshousefarms.co",
        role: "Web developer",
        shortDescription: "Built a full-stack website a hydroponic growing facility in Ithaca, New York.",
        longDescription: <>
            <p>
                Glass House Farms LLC is a hydroponic growing facility based out of Ithaca, New York. They grow veggies like lettuce, basil, pac choi, and arugula in hydroponic glasshouse farms (hence the name) and are sold in local grocery stores.
                The business wanted a central website where they could educate potential buyers and consumers on their tasty, healthy, and trusted products, as well as a contact channel. 
            </p>
            <p>
                I worked with a graphic designer <a href="https://www.linkedin.com/in/ryan-wall-287837132/" target="_blank" rel="noopener noreferrer">Ryan Wall</a>&#8239;
                to create a logo, branding (colors, fonts, etc), and website wireframe that fit the client's needs. Ryan was able to create the wireframe mock and I was able to code 
                the site in under a week! Both Ryan and I, as well as the client were stoked with the outcome of the website. I was particularly excited because this was my first experience with
                translating a wireframe to a working website.
            </p>
        </>,
        githubLink: "https://github.com/douglasrcjames/glasshousefarms",
        logoUrl: require("../assets/images/jobs/glasshousefarms/logo.png"),
        logoSize: SIZE.LARGE,
        period: "Mar. 2018 - Apr. 2018",
        status: STATUS.COMPLETE,
        link: "https://www.glasshousefarms.co",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.PHP, SKILLS.MYSQL, SKILLS.WIREFRAMING
            ]
        },
        metrics: [
            {
                name: METRICS.VISITORS,
                value: 5009
            },
            {
                name: METRICS.PAGE_VIEWS,
                value: 15986
            },
            {
                name: METRICS.COMMITS,
                value: 5
            },
            {
                name: METRICS.LOC,
                value: 1000
            },
            {
                name: METRICS.FILES,
                value: 70
            },
            {
                name: METRICS.SCREENS,
                value: 1
            }
        ],
        headerUrl: require("../assets/images/jobs/glasshousefarms/header.png"),
        lastUpdated: "Dec. 18th, 2020",
        headerPosition: "50% 60%",
        icon: <BiCodeAlt />,
        extraContent: <GlassHouseFarms />
    },
    {
        title: "Coldbrew Creative",
        role: "Web developer",
        shortDescription: "Built, updated, and managed websites for a small digital marketing team in San Jose, California.",
        longDescription: <p>Coldbrew Creative (now Manticore) is a small digital marketing firm based in San Jose, California. The CEO, 
            <a href="https://www.linkedin.com/in/mikeejlee/" target="_blank" rel="noopener noreferrer">&#8239;Mike Lee</a>,&#8239; was a classmate of mine at San Jose State,
            and I caught wind that he was looking for a web designer to help with client demand. I joined his Slack team, Trello workspace, and Github repositories
            so I could jump in to help with various web maintenance tasks. There was an even mix between fixing and updating WordPress, SquareSpace, and HTML/CSS/JS/PHP bugs and content. 
            As my position ramped up I started to attend Zoom and in-person meetings, as well as visiting clients in person to get a better idea of the brand
            they wanted to build on the site. Overall, this was a great job where I was surrounded with a motivated team taught me a plethora of new skills. Mike motivated me
            as a leader, <a href="https://github.com/andyhqtran" target="_blank" rel="noopener noreferrer">Andy Tran</a> motivated me as a software engineer, and&#8239;
            <a href="https://www.linkedin.com/in/ryan-wall-287837132/" target="_blank" rel="noopener noreferrer">Ryan Wall</a> motivated me as a designer. Ultimately, I left
            the team because I was working with technology too far up the stack (WordPress) and wanted to work with less abstracted technologies, like Node and Python.</p>,
        logoUrl: require("../assets/images/jobs/coldbrewcreative/logo.png"),
        logoSize: SIZE.LARGE,
        period: "Oct. 2017 - Jan. 2018",
        status: STATUS.COMPLETE,
        link: "https://mntcre.com/",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.PHP, SKILLS.SQUARESPACE, SKILLS.WORDPRESS, SKILLS.GITHUB
            ],
            other: [
                SKILLS.TEAMWORK
            ]
        },
        headerUrl: require("../assets/images/jobs/coldbrewcreative/header.png"),
        lastUpdated: "Dec. 18th, 2020",
        headerPosition: "50% 50%",
        icon: <MdWork />,
        extraContent: <ColdBrewCreative />
    },
    {
        title: "Tesla",
        role: "Product Specialist",
        shortDescription: "Car salesman at the flagship Tesla electric vehicle showroom in Sunnyvale, California.",
        longDescription: <div>
            <p>
                While attending San Jose State University, I had a heavy interest in Tesla as a company and the products they were building. I got an interview from a 
                college friend of mine, <a href="https://www.linkedin.com/in/vybhav-a-kandadai-%E2%98%81-8525244a/" rel="noopener noreferrer" target="_blank">Vybhav Kandadai</a>, another car salesman 
                at the Santana Row showroom in San Jose. I nailed the interview after expressing my knowledge for Elon's vision for Tesla, SpaceX, and Solar City. I made quick friends
                with my co-workers, and have lasting relationships with many of them from my experience there. The Santana Row location was the flagship store for Tesla, so we got many affluent visitors, 
                such as business men and women, sports players, actors/actresses, Steve Wozniak and even Elon himself. This high stakes environment allowed me to perfect presenting myself professionally.
            </p>

            <p>
                In this position, I represented Tesla as a showroom guru educating walk-in clients on Tesla's line of innovative electric vehicles, such as the Model S, 
                Model X, and upcoming Model 3. Interested clients would be invited to setup a test drive, where I would copilot them while they tested the 
                vehicle's features (ie Autopilot) on the freeway. I would then guide them through our online Design Studio to personalize a vehicle to their needs. 
                If the client was in the direct market and satisfied with the vehicle, we would go over payment options (ie cash, lease, or financing) 
                to begin the car building process.
            </p>

            <p>
                Ultimately, I left the job because I quickly found that moving from selling cars to an engineering position was difficult due to the size of the company. I felt I had also
                reached the limit on the challenges I was being presented, and wanted to move to a more challenging technical job that took advantage of what I was studying in school.
                I am grateful for the opportunity I had at Tesla and the valuable lessons I learned along the way.
            </p>
            </div>,
        logoUrl: require("../assets/images/jobs/tesla/logo.png"),
        logoSize: SIZE.MEDIUM,
        period: "Aug. 2016 - Dec. 2016",
        status: STATUS.COMPLETE,
        link: "https://www.tesla.com",
        skills: {
            other: [
                SKILLS.SALES, SKILLS.CUSTOMER_SERVICE, SKILLS.ELECTRIC_VEHICLES
            ]
        },
        headerUrl: require("../assets/images/jobs/tesla/header.png"),
        lastUpdated: "Dec. 18th, 2020",
        headerPosition: "50% 50%",
        icon: <MdWork />,
        extraContent: <Tesla />
    },
    {
        title: "Palo Alto Networks",
        role: "IT Specialist",
        shortDescription: "Provided on-site technical support at the previous Palo Alto Networks headquarters in Sunnyvale, California",
        longDescription: <p>While attending San Jose State University, I got into a deep conversation at a party with <a href="https://www.linkedin.com/in/matthew-elliott11/" target="_blank" rel="noopener noreferrer">Matt Elliott,</a>&#8239;
            an MIS student and employee at Palo Alto Networks. After discussion on my interest in all things technology, he advised that I send him my 
            resume to forward to his hiring manager. After a few phone interviews, and one in-person interview, I got the job! The job fit me perfectly, 
            I was stationed in the room where all the tech hardware like monitors, cables, and computers were kept and organized.
            I was tasked at distributing this hardware to new hire employees or employees with broken/outdated hardware. I would grab the appropriate hardware for them, deliver it to their
            desk, and set all the hardware and software up. Palo Alto Networks was growing rapidly at the time and thus new hires were coming in daily, so a good chunk of my time was occupied
            by setting up desks. While not setting up desks, I was busy re-imaging old laptops to be recirculated into the company. This doesn't sound that glamorous, but to me I loved it; 
            I always enjoyed tearing my computer setup apart at home and putting it back together in a more organized or optimal way. My main project was for hardware reconciliation, 
            where I had to account for all hardware under the hood of the headquarters in Sunnyvale, which was more than 700,000 computers and over $350 million in assets. I needed to sift through hundreds 
            of separate spreadsheets and cross reference them with the physical hardware into one consolidated database to reference. I was able to finish the project, but it was more difficult than my manager or 
            I had anticipated because many assets were either unaccounted for or unaccessible. Through this, I learned top level tech support and the pros/cons of a large, publicly traded, network security corporation's bureaucracy.</p>,
        logoUrl: require("../assets/images/jobs/palo-alto-networks/logo.png"),
        logoSize: SIZE.LARGE,
        period: "May. 2015 - Aug. 2015",
        status: STATUS.COMPLETE,
        link: "https://www.paloaltonetworks.com/",
        skills: {
            other: [
                SKILLS.TECHNICAL_SUPPORT, SKILLS.CUSTOMER_SERVICE, SKILLS.TEAMWORK
            ]
        },
        headerUrl: require("../assets/images/jobs/palo-alto-networks/header.png"),
        lastUpdated: "Dec. 18th, 2020",
        headerPosition: "50% 50%",
        icon: <MdWork />,
        extraContent: <PaloAltoNetworks />
    },
    {
        title: "ACFN Franchise",
        role: "IT Technician",
        shortDescription: "Worked as a remote ATM technician at an ATM franchising company in San Jose, California",
        longDescription: <p>ACFN is an ATM company with 2500+ machines worldwide that operates on a franchise business model.
            ACFN provides market research on the best placement of the ATM and follow up support for the ATM front and back end.
            The franchisee buys an ACFN supported ATM, usually <a href="https://www.tritonatm.com/" target="_blank" rel="noopener noreferrer">Triton</a> branded,  
            then uses their own cash to place inside the ATM, and ACFN as a business takes a percentage off every transaction. I sat in an office in downtown
            San Jose answering phone calls from franchisees dialing in from around the world when trying to setup, service, or troubleshoot the machines (or customers calling with issues, which rarely happened.)
            In this position, I learned how to remotely troubleshoot with clients with high level hardware and software.</p>,
        logoUrl: require("../assets/images/jobs/acfn/logo.png"),
        logoSize: SIZE.LARGE,
        period: "Feb. 2015 - Jun. 2015",
        status: STATUS.COMPLETE,
        link: "https://www.atmfranchise.com",
        skills: {
            other: [
                SKILLS.TECHNICAL_SUPPORT, SKILLS.CUSTOMER_SERVICE, SKILLS.ATM_TECHNOLOGY
            ]
        },
        headerUrl: require("../assets/images/jobs/acfn/header.png"),
        lastUpdated: "Dec. 18th, 2020",
        headerPosition: "50% 50%",
        icon: <MdWork />,
        extraContent: <ACFN />
    },
    {
        title: "iHealPhones",
        role: "Founder",
        shortDescription: "Founded a local device repair business in El Dorado Hills, California.",
        longDescription: <p>
            iHealPhones was a phone repair and computer servicing business that was born out of my garage in the sunny hills to the east of Sacramento in El Dorado Hills, California when I was a ripe age of 15.
            I capitalized on the limited options smartphone users had for fixing common screen breaks by providing them with reliable and inexpensive repairs.
            iHealPhones gave me the reputation at my high school as the "phone guy", which caused many jobless high schoolers asking for a free phone fix. 
            These requests got so bad, that I "had" to make a shirt that said "No, I will not fix your phone for free." (I know, pretty cringey.) 
            The HTML, CSS, PHP, and Flash website I built for this business was my first website and introduced me to the coding world for the first time.
            The tech repair/support business and troubleshooting knowledge I learned at this job directly applied to the inception of <Link to="/work/minute.tech-llc">Minute.tech</Link>. 
            The business was a great opportunity for me to learn from my (many) mistakes, and gave me the confidence and passion for computer engineering and business.
        </p>,
        logoUrl: require("../assets/images/jobs/ihealphones/logo-v2.png"),
        logoSize: SIZE.XLARGE,
        period: "Dec. 2010 - Feb. 2014",
        status: STATUS.COMPLETE,
        link: "https://www.ihealphones.com",
        skills: {
            primary: [
                SKILLS.WEB_FUNDAMENTALS,
                SKILLS.HTML,
                SKILLS.CSS,
                SKILLS.PHP,
                SKILLS.ADOBE_PRODUCTS, 
            ],
            other: [
                SKILLS.BUSINESS_DEV, 
                SKILLS.ACCOUNTING, 
                SKILLS.TECHNICAL_SUPPORT,
                SKILLS.CUSTOMER_SERVICE, 
            ]
        },
        headerUrl: require("../assets/images/jobs/ihealphones/header.png"),
        lastUpdated: "Dec. 18th, 2020",
        headerPosition: "50% 30%",
        icon: <MdSchool />,
        extraContent: <IHealPhones />
    },
    {
        title: "Oak Ridge High School",
        role: "Student",
        shortDescription: "Earned high school diploma at a public school in El Dorado Hills, California",
        longDescription: <p>
            I earned my high school diploma at Oak Ridge High School, a great public school east of Sacramento in the golden hills of El Dorado Hills, California. 
            My business <Link to="/work/ihealphones">iHealPhones</Link> earned me a reputation as the techie guy on campus, which lead me on a path of many opportunities in the tech field. 
            &#8239;<a href="https://www.deca.org" target="_blank" rel="noopener noreferrer">DECA</a>, a young business leader club at school which is normally 
            reserved for 3rd and 4th year students, invited me to join the club as a 2nd year because of iHealPhones. I also became 1 of the 3 web developer students that 
            managed the school website. Through this early opportunity, I was given a free subscription to Adobe Creative Suite (Photoshop, Dreamweaver, etc) 
            and to <a href="https://www.lynda.com" target="_blank" rel="noopener noreferrer">Lyndia.com</a> (now owned by LinkedIn) where I learned the basics of web development and design with hours of online tutorials. 
            Despite my "techie" persona, I managed to still be a sporty dude, playing soccer and lacrosse, but ultimately, I knew my calling was technology, 
            so I applied to colleges to pursue a computer engineering degree and got into <Link to="/work/san-jose-state-university">San Jose State University</Link>!
        </p>,
        logoUrl: require("../assets/images/jobs/orhs/logo.png"),
        logoSize: SIZE.LARGE,
        period: "Aug. 2009 - May. 2013",
        status: STATUS.COMPLETE,
        link: "http://orhs.eduhsd.k12.ca.us/",
        skills: {
            primary: [
                SKILLS.WEB_FUNDAMENTALS,
                SKILLS.HTML,
                SKILLS.CSS,
                SKILLS.JS,
                SKILLS.ADOBE_PRODUCTS,
            ],
            other: [
                SKILLS.BUSINESS_DEV, 
                SKILLS.TEAMWORK, 
                SKILLS.SOCCER,
                SKILLS.LACROSSE
            ]
        },
        headerUrl: require("../assets/images/jobs/orhs/header.png"),
        lastUpdated: "Dec. 18th, 2020",
        headerPosition: "50% 30%",
        icon: <MdSchool />,
        extraContent: <ORHS />
    },
]

export const mtTimeline = [
    {
        title: "Completed business plan v1",
        date: "May. 2016",
        body: <p>
            Wrote an 18 page business plan with a team of 3 others (90% me) for our BUS5 181 (Intro to Entrepreneurship) course at San Jose State University.
            I proceeded to polish the same business plan to compete in the Silicon Valley Business Plan Competition (SVBPC) later that month, awarding my business $1500 cash and $1000 in legal support.
            <br/><br/>
            Interested in reading the business plan? <Link to="/#Contact">Contact me</Link>!
        </p>,
        icon: <MdWork />
    },
    {
        title: "Incorporated business",
        date: "Jun. 2016",
        body: <p>
            Registered Minute.tech as a Limited Liability Company in the state of California.
        </p>,
        icon: <MdWork />
    },
    {
        title: "Built web app v1",
        date: "Jun. 2016",
        body: <p>
            Built the first web app prototype with a team of 3 other engineers for our CMPE 148 (Computer Networks I) course project 
            at San Jose State University. We used the Python Play! Framework to build a simple interface allowing a user to login and submit a ticket. 
            We quickly learned that this framework had way too low of a ceiling for our complex app.
            <br/><br/>
            <a href="https://github.com/minutetech/pyplay.minute.tech" target="_blank" rel="noopener noreferrer">View source code</a>
        </p>,
        icon: <MdWork />
    },
    {
        title: "Built web app v2",
        date: "Spring 2017",
        body: <p>
            Built the second web app prototype with a team of 2 other engineers (90% work done by me) for our CMPE 138 (Database Systems I) course project 
            at San Jose State University. I used the Python Flask Framework and MySQL to build a full stack interface that included authentication, 
            profile editing, and ticket creation.&nbsp;
            (<TextLinkGallery text={"See the MySQL database structure diagram"} photo={{src: require('../assets/images/jobs/minutetech/misc/mysql-erd.png'), caption: "MySQL ERD showing the database structure" }}/>)
        </p>,
        icon: <MdWork />
    },
    {
        title: "Built web app v2.3",
        date: "Fall 2017",
        body: <p>
            Expanded the second web app prototype from previous semester with a team of 2 new engineers (90% work done by me) for our 
            CMPE 130 (Advanced Algorithm Design) course project at San Jose State University. I focused on building a question 
            ticket priority sorting system using the DIPS (Dynamic Insertion Priority Sort) algorithm to efficiently display the 
            most important tickets on the system to a technician.
        </p>,
        icon: <MdWork />
    },
    {
        title: "Built web app v2.7",
        date: "Mar. 2018",
        body: <p>
            After a few group projects where I did most of the work, I decided to hire an inexpensive Fiverr.com developer from Morocco
            to work with me to quickly expand on the Flask framework prototype. We successfully implemented real-time chat with instant 
            messaging using Socket.io and SQLAlchemy libraries. After researching more features to add such as video calling and mobile apps, 
            I realized that the Flask framework also had too low of a ceiling for the features I was looking for. I was deciding between the Python
            framework, Django, or the Javascript framework, React.js. I ultimately went with React.js because it was an especially powerful technology when
            coupled with it's sibling, React Native, that allowed me to create an iOS/Android mobile app with one code base.
            <br/><br/>
            <a href="https://github.com/minutetech/flask-live.minute.tech" target="_blank" rel="noopener noreferrer">View source code</a>
        </p>,
        icon: <MdWork />
    },
    {
        title: "Built iOS mobile app v0.5",
        date: "Spring 2018",
        body: <p>
            Built the first mobile app prototype with a team of 3 other engineers (95% work done by me) for our CMPE 137 (Mobile Software Engineering) course project 
            at San Jose State University. I used the iOS native language of Swift to build an app that tracked both users (technician and client) navigating on 
            a map view using MapKit and Google Maps API. Simulated a similar experience to food delivery apps tracking the driver on their way to client's location.
            <br/><br/>
            <a href="https://github.com/minutetech/swift-gps.minute.tech" target="_blank" rel="noopener noreferrer">View source code</a>
        </p>,
        icon: <MdWork />
    },
    {
        title: "Built business plan v2",
        date: "Q3 & Q4 of 2018",
        body: <p>
            Unsure on how to move forward after failing to find reliable teammates, I thought finding potential investors might help my plight.
            I expanded the 18 page business plan to 60 pages, consolidating my plethora of discoveries and prototypes accrued since the first business plan.
            To properly quote investors, I needed to research the cost and timeline differences between hiring a large engineering firm, a few software engineers, or just doing it myself.
            So, I interviewed 5 large software development firms for web/mobile app quotes and interviewed 20 potential software engineers from a&nbsp;
            <TextLinkGallery text={"physical flyer"} photo={{src: require('../assets/images/jobs/minutetech/misc/react-dev-flyer-MT.png'), caption: "Flyer posted at San Jose State University to find a software developer." }}/>. 
            (I ended up just going with Ryan Morris for equity options, see web app v3 below) Near the end of my search, I came in contact with an older, IT business owner/family 
            friend who was interested in being a partner/investor on the project. Unfortunately, he ended up wanting to be a 50/50 partner of the business, 
            which I was advised not to do and ultimately was probably the best decision.
            <br/><br/>
            Interested in reading the business plan? <Link to="/#Contact">Contact me</Link>!
        </p>,
        icon: <MdWork />
    },
    {
        title: "Designed web app wireframe v1",
        date: "Nov. 2018",
        body: <p>
            Worked with two graphic designer friends and housemates, <a href="https://www.linkedin.com/in/ryan-wall-287837132/" target="_blank" rel="noopener noreferrer">Ryan Wall</a>&nbsp;
            and <a href="https://www.linkedin.com/in/mitchell-licata/" target="_blank" rel="noopener noreferrer">Mitch Licata</a> on the web app wireframe using Sketch, XD, and InVision.
            (<HashLink to="/work/minute.tech-llc#Web">See web wireframe screens above</HashLink>)
        </p>,
        icon: <MdWork />
    },
    {
        title: "Secured trademark",
        date: "Apr. 2019",
        body: <p>
            Using the legal funds awarded from the Silicon Valley Business Plan Competition in 2016,&nbsp;
            <TextLinkGallery text={"I secured the trademark on the 'Minute.tech' name"} photo={{src: require('../assets/images/jobs/minutetech/misc/trademark-cert.jpg'), caption: "Minute.tech trademark certification" }}/>.
        </p>,
        icon: <MdWork />
    },
    {
        title: "Built web app prototype v3",
        date: "Jan. 2019 - Aug. 2019",
        body: <>
            <p>
                Built the third web app prototype with <a href="https://www.linkedin.com/in/ryan-morris-26898ba1/" target="_blank" rel="noopener noreferrer">Ryan Morris</a> using 
                React.js, Redux, and Firebase. We successfully implemented the following features:
            </p>
            <ul>
                <li>User authentication</li>
                <li>Clients can ask question to system</li>
                <li>Technicians can claim question on system</li>
                <li>Users can communicate in a chat room sending texts and files</li>
                <li>Users can transition to voice/video/screen share call using Twilio API</li>
                <li>Clients can pay technicians directly for their services using the Stripe API</li>
                <li>Technician/client ranking system and algorithm that gamified the interactions on the site</li>
                <li>Clients can resolve questions and review technicians they interacted with</li>
            </ul>
            <p> 
                Ryan ultimately wanted to step away from the project because he wanted to go more down the robotics path instead of web. 
                I had to scrap most of the code from this build because Redux was not properly setup, but Ryan taught me a lot and was the best teammate 
                I have worked with yet on Minute.tech who helped propel the project forward.
                <br/><br/>
                This project code is still classified, but <Link to="/#Contact">contact me</Link> if you are interested in viewing.
            </p>
        </>,
        icon: <MdWork />
    },
    {
        title: "Built iOS mobile app v1",
        date: "Jun. 2019 - Dec. 2019",
        body: <>
            <p>
                Built the first fully featured mobile app prototype with a team of 3 other engineers (60% work done by me) for our senior project 
                at San Jose State University. We again used the iOS native language of Swift to build the app, but this time implemented nearly all the required features:
            </p>
            <ul>
                <li>User authentication</li>
                <li>Clients can ask question to system</li>
                <li>Technicians can claim question on system</li>
                <li>Users can communicate in a chat room sending texts and files</li>
                <li>Users can transition to voice/video call using Twilio API</li>
                <li>Users can schedule an in-person meetup at time and location (UI only)</li>
                <li>Clients can resolve questions and review technicians they interacted with</li>
            </ul>
            <p>
                Full demo video and screenshots in the Mobile Application &gt;&gt; Swift section above. 
                <br/><br/>
                This project code is still classified, but <Link to="/#Contact">contact me</Link> if you are interested in viewing.
            </p>
        </>,
        icon: <MdWork />
    },
    {
        title: "Built web app v4",
        date: "Jan. 2020",
        body: <>
            <p>
                Building off some of the project code developed with Ryan Morris, I built a new React.js app that was more organized, had less bugs, and was more production ready than version 3.
                Version 4 is the current production build visible @ <a href="https://www.minute.tech" target="_blank" rel="noopener noreferrer">www.minute.tech</a> and has the following features:
            </p>
            
            <ul>
                <li>User authentication</li>
                <li>Clients can ask question to system</li>
                <li>Technicians can claim question on system</li>
                <li>Users can communicate in a chat room sending texts and files</li>
                <li>Users can transition to voice/video/screen share call using Twilio API</li>
                <li>Clients can pay technicians directly for their services using the Stripe API</li>
                <li>Clients can resolve questions and review technicians they interacted with</li>
            </ul>
            <p>
                I am working on this codebase to this date. Full demo video and screenshots in the Web Application section above. 
                <br/><br/>
                This project code is still classified, but <Link to="/#Contact">contact me</Link> if you are interested in viewing.
            </p>
        </>,
        icon: <MdWork />
    },
    {
        title: "Started building iOS/Android mobile app v2",
        date: "Sep. 2020",
        body: <>
            <p>
                Started building the second mobile app prototype for iOS and Android devices using React Native and a shared back-end with web using Firebase. 
                So far, the application features:
            </p>
            <ul>
                <li>User authentication</li>
                <li>Clients can ask question to system</li>
                <li>Technicians can claim question on system</li>
                <li>Users can communicate in a chat room sending texts</li>
                <li>Clients can resolve questions</li>
            </ul>
            <p>
                There were a few motivations for building the React Native app:
            </p>    
            
            <ul>
                <li>Practice my React Native skills for potential client projects</li>
                <li>
                    It's much easier to maintain one React codebase as a solo developer. 
                    Between the web and mobile app builds, there is over 50% overlap between reused 
                    React components and Firebase server side functions, increasing what I am capable of doing on my own.
                </li>
                <li>
                    Minute.tech is losing clients who are not getting push notifications on their mobile devices they carry everywhere for important app messages.
                </li>
            </ul>
            <p>
                See progress screenshots in the Mobile Application &gt;&gt; React Native section above. 
                <br/><br/>
                This project code is still classified, but <Link to="/#Contact">contact me</Link> if you are interested in viewing.
            </p>    
        </>,
        icon: <MdWork />
    }
]