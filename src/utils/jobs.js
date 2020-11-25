import React from 'react'
import { MdWork, MdSchool } from "react-icons/md";
import { BiCodeAlt, BiRocket } from "react-icons/bi"
import { Link } from 'react-router-dom';

import { STATUS, SKILLS, SIZE } from "./constants";

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

export const jobs = [
    {
        title: "smithzellner.consulting",
        role: "Web developer",
        shortDescription: "Built a front end website for a civil rights consulting firm in Fairhope, Alabama.",
        longDescription: <p>Explain Bob Zellner being a author. Ullamco excepteur adipisicing sit nisi duis sint ex aliquip excepteur ut eiusmod. 
            Pariatur nostrud est cupidatat commodo labore eiusmod quis aliquip quis nulla consequat. 
            Ad nostrud Lorem nulla ut esse consequat Lorem exercitation nisi ipsum ex adipisicing aliqua magna. 
            Minim enim aliquip consectetur est ipsum incididunt labore aliquip. Magna consequat sint laboris velit 
            do tempor irure. Ullamco nulla excepteur in ea enim ipsum minim ullamco aliqua. Ullamco qui excepteur do 
            nostrud non.</p>,
        logoUrl: require("../assets/images/jobs/smithzellner/logo.png"),
        logoSize: SIZE.LARGE,
        period: "August, 2020 - September, 2020",
        status: STATUS.COMPLETE,
        link: "https://www.smithzellner.consulting",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.NODE, SKILLS.REACT, SKILLS.GITHUB, SKILLS.FIREBASE
            ]
        },
        headerUrl: require("../assets/images/jobs/smithzellner/header.png"),
        headerPosition: "50% 50%",
        icon: <BiCodeAlt />,
        extraContent: <SmithZellnerConsulting />
    },
    // TODO: wait to put this one in there
    // {
    //     title: "zestydoug.com",
    //     role: "Web developer",
    //     shortDescription: "Built a front end website for my live streaming persona.",
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
        shortDescription: "Built a custom CRM web app and front end site for solar sales company out of Orange County, California.",
        longDescription: <p>Ullamco excepteur adipisicing sit nisi duis sint ex aliquip excepteur ut eiusmod. 
            Pariatur nostrud est cupidatat commodo labore eiusmod quis aliquip quis nulla consequat. 
            Ad nostrud Lorem nulla ut esse consequat Lorem exercitation nisi ipsum ex adipisicing aliqua magna. 
            Minim enim aliquip consectetur est ipsum incididunt labore aliquip. Magna consequat sint laboris velit 
            do tempor irure. Ullamco nulla excepteur in ea enim ipsum minim ullamco aliqua. Ullamco qui excepteur do 
            nostrud non.</p>,
        logoUrl: require("../assets/images/jobs/goprestigepower/logo.png"),
        logoSize: SIZE.LARGE,
        period: "July, 2020 - August, 2020",
        status: STATUS.COMPLETE,
        link: "https://www.goprestigepower.com",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.NODE, SKILLS.REACT, SKILLS.GITHUB, SKILLS.FIREBASE
            ]
        },
        headerUrl: require("../assets/images/jobs/goprestigepower/header.png"),
        headerPosition: "50% 50%",
        icon: <BiCodeAlt />,
        extraContent: <GoPrestigePower />
    },
    {
        title: "vectorpsi.com",
        role: "Web developer",
        shortDescription: "Built a front end website for a industrial manufacturing sales company in Danville, California.",
        longDescription: <p>Discuss collabing wtih Ana to create branding guidelines. Ullamco excepteur adipisicing sit nisi duis sint ex aliquip excepteur ut eiusmod. 
            Pariatur nostrud est cupidatat commodo labore eiusmod quis aliquip quis nulla consequat. 
            Ad nostrud Lorem nulla ut esse consequat Lorem exercitation nisi ipsum ex adipisicing aliqua magna. 
            Minim enim aliquip consectetur est ipsum incididunt labore aliquip. Magna consequat sint laboris velit 
            do tempor irure. Ullamco nulla excepteur in ea enim ipsum minim ullamco aliqua. Ullamco qui excepteur do 
            nostrud non.</p>,
        logoUrl: require("../assets/images/jobs/vectorpsi/logo.png"),
        logoSize: SIZE.LARGE,
        period: "June, 2020 - October, 2020",
        status: STATUS.COMPLETE,
        link: "https://www.vectorpsi.com",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.NODE, SKILLS.REACT, SKILLS.GITHUB, SKILLS.FIREBASE
            ]
        },
        headerUrl: require("../assets/images/jobs/vectorpsi/header.png"),
        headerPosition: "50% 50%",
        icon: <BiCodeAlt />,
        extraContent: <VectorPSI />
    },
    {
        title: "Doug's React Boiler",
        role: "Web developer",
        shortDescription: "Built myself a boilerplate template for building my React.js/Firebase web applications.",
        longDescription: <p>Discuss motivations and that I will always be adding and evolving this. Ullamco excepteur adipisicing sit nisi duis sint ex aliquip excepteur ut eiusmod. 
            Pariatur nostrud est cupidatat commodo labore eiusmod quis aliquip quis nulla consequat. 
            Ad nostrud Lorem nulla ut esse consequat Lorem exercitation nisi ipsum ex adipisicing aliqua magna. 
            Minim enim aliquip consectetur est ipsum incididunt labore aliquip. Magna consequat sint laboris velit 
            do tempor irure. Ullamco nulla excepteur in ea enim ipsum minim ullamco aliqua. Ullamco qui excepteur do 
            nostrud non.</p>,
        // TODO: give me a proper logo!
        logoUrl: require("../assets/images/jobs/dougs-react-boiler/logo.png"),
        logoSize: SIZE.LARGE,
        period: "June, 2020 - November, 2020",
        status: STATUS.COMPLETE,
        link: "https://dougs-react-boiler.web.app/",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.NODE, SKILLS.REACT, SKILLS.GITHUB, SKILLS.FIREBASE
            ]
        },
        headerUrl: require("../assets/images/jobs/dougs-react-boiler/header.png"),
        headerPosition: "50% 50%",
        icon: <BiCodeAlt />,
        extraContent: <DougsReactBoiler />
    },
    {
        title: "blairfamily.foundation",
        role: "Web developer",
        shortDescription: "Built a front end website for a philanthropy foundation in Montgomery, Maryland.",
        longDescription: <p>Ullamco excepteur adipisicing sit nisi duis sint ex aliquip excepteur ut eiusmod. 
            Pariatur nostrud est cupidatat commodo labore eiusmod quis aliquip quis nulla consequat. 
            Ad nostrud Lorem nulla ut esse consequat Lorem exercitation nisi ipsum ex adipisicing aliqua magna. 
            Minim enim aliquip consectetur est ipsum incididunt labore aliquip. Magna consequat sint laboris velit 
            do tempor irure. Ullamco nulla excepteur in ea enim ipsum minim ullamco aliqua. Ullamco qui excepteur do 
            nostrud non.</p>,
        logoUrl: require("../assets/images/jobs/blairfamily/logo.png"),
        logoSize: SIZE.LARGE,
        period: "April, 2020 - September, 2020",
        status: STATUS.COMPLETE,
        link: "https://www.blairfamily.foundation",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.NODE, SKILLS.REACT, SKILLS.GITHUB, SKILLS.FIREBASE
            ]
        },
        headerUrl: require("../assets/images/jobs/blairfamily/header.png"),
        headerPosition: "50% 50%",
        icon: <BiCodeAlt />,
        extraContent: <BlairFamilyFoundation />
    },
    {
        title: "retreatonnichols.com",
        role: "Web developer",
        shortDescription: "Built a front end website short term luxury rental property in Fairhope, Alabama.",
        longDescription: <>
            <p>
                The Retreat on Nichols is a two unit luxury short-term accommodation in Fairhope, Alabama. The property features a common outdoor kitchen, wood-fired pizza oven, 
                fire pit, Petanque court, lawn &amp; board games, additional bathroom, laundry, gated parking, bicycles, &amp; golf cart. I was brought on board to build the website and 
                manage SEO because the property owners were looking to increase the traffic to the rental via Airbnb and VRBO booking sites.
            </p>
            <p>
                I built this site using React.js as the front end, and Firebase for the database backend to store contact info, and send that contact info to the client's email via 
                node-mailer. The site took me about a month to plan, design, and build. The design phase was fairly quick, because I had previously built a SquareSpace site for the 
                client, so I based much of my design off that template. I had to do a quick rework of the logo because the client did not have the original image for the logo. 
                I also worked with a videographer and photographer to fit their content captured into the site. Since August 2019 the site has garnered 500 unique website visitors.
            </p>
        </>,
        logoUrl: require("../assets/images/jobs/retreatonnichols/logo.png"),
        logoSize: SIZE.LARGE,
        period: "August, 2019 - March 2020",
        status: STATUS.COMPLETE,
        link: "https://www.retreatonnichols.com",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.NODE, SKILLS.REACT, SKILLS.GITHUB, SKILLS.FIREBASE
            ]
        },
        headerUrl: require("../assets/images/jobs/retreatonnichols/header.png"),
        headerPosition: "50% 50%",
        icon: <BiCodeAlt />,
        extraContent: <RetreatOnNichols />
    },
    {
        title: "douglasrcjames.com",
        role: "Web developer",
        shortDescription: "Built a front end portfolio website for myself demonstrating and showcasing my skills.",
        longDescription: <p>Display link to V1 @ live address on firebase hosting. Have V2 at live address. Talk about how meta this is. Ullamco excepteur adipisicing sit nisi duis sint ex aliquip excepteur ut eiusmod. 
            Pariatur nostrud est cupidatat commodo labore eiusmod quis aliquip quis nulla consequat. 
            Ad nostrud Lorem nulla ut esse consequat Lorem exercitation nisi ipsum ex adipisicing aliqua magna. 
            Minim enim aliquip consectetur est ipsum incididunt labore aliquip. Magna consequat sint laboris velit 
            do tempor irure. Ullamco nulla excepteur in ea enim ipsum minim ullamco aliqua. Ullamco qui excepteur do 
            nostrud non.</p>,
        logoUrl: require("../assets/images/logos/logo512.png"),
        logoSize: SIZE.LARGE,
        period: "August, 2019 - Today",
        status: STATUS.WORKING,
        link: "https://www.douglasrcjames.com",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.NODE, SKILLS.REACT, SKILLS.GITHUB, SKILLS.FIREBASE
            ]
        },
        headerUrl: require("../assets/images/jobs/douglasrcjames/header.png"),
        headerPosition: "50% 40%",
        icon: <BiCodeAlt />,
        extraContent: <Douglasrcjames />
    },
    {
        title: "capsmd.org",
        role: "Web developer",
        shortDescription: "Built a custom CMS and front end website for a political publication non-profit organization in Montgomery, Maryland.",
        longDescription: <div>
            <p>Discuss that I still occasionally help them out, they are one of my more active clients.</p>
            <p>
                CAPS (Council for Advocacy and Policy Solutions) is a non-profit political publication group with the goal to educate constituents in 
                Montgomery County, Maryland about legislation that effects them. The group came to me in May, 2019 during my finals week for school because their previous web developer had dropped
                the ball building a site with Webflow.com. <a href="https://capswebsite.webflow.io/" target="_blank" rel="noopener noreferrer">(See previous webflow site here.)</a> They were launching their CAPS program in a few weeks and were in a mad rush to get the site up and operational. 
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
                I am very proud of the website I developed and the client was very pleased with the finished product as well. I recently developed a custom CMS 
                solution for them to be able to post their own articles within my intervention. In hindsight, I definitely should have started this project by building the CMS, 
                but along the way I learned the true difference between WordPress/SquareSpace/other CMS use case and my CMS solution. 
                Oh and since July 2019 the site has garnered 1,500 unique website visitors!
            </p>
        </div>,
        logoUrl: require("../assets/images/jobs/caps/logo.png"),
        logoSize: SIZE.LARGE,
        period: "May, 2019 - November, 2020",
        status: STATUS.COMPLETE,
        link: "https://www.capsmd.org",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.NODE, SKILLS.REACT, SKILLS.GITHUB, SKILLS.FIREBASE
            ]
        },
        headerUrl: require("../assets/images/jobs/caps/header.png"),
        headerPosition: "50% 50%",
        icon: <BiCodeAlt />,
        extraContent: <CAPS />
    },
    {
        title: "bodybyyama.com",
        role: "Web developer",
        shortDescription: "Built a front end website the personal fitness trainer Yamato Nishino in San Jose, California.",
        longDescription: <p>Discuss that site is no longer live. Yamato Nishino is a friend and personal fitness trainer in the San Fransisco Bay Area. In June of 2018, she wanted a website to 
            centralize her personal training business, where potential clients could read and watch more about what she had to offer. 
            I worked with two other graphic designers, <a href="https://www.linkedin.com/in/ryan-wall-287837132/" target="_blank" rel="noopener noreferrer">Ryan Wall</a>&nbsp;
            and <a href="https://www.linkedin.com/in/mitchell-licata/" target="_blank" rel="noopener noreferrer">Mitch Licata</a> to create logo, branding (colors, fonts, etc), and 
            website wireframe. I developed her one-page site with PHP for the contact form and UIkit 3 for the front end work. This site turned out simply beautiful, I was so proud 
            of what we were able to design as a 3 man team. My favorite part of the site are the animations, such as the background image that moves a bit as the viewer scrolls down the page. </p>,
        logoUrl: require("../assets/images/jobs/bodybyyama/logo.png"),
        logoSize: SIZE.LARGE,
        period: "June, 2018 - August, 2018",
        status: STATUS.COMPLETE,
        link: "https://www.bodybyyama.com",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.PHP, SKILLS.MYSQL
            ]
        },
        headerUrl: require("../assets/images/jobs/bodybyyama/header.png"),
        headerPosition: "50% 70%",
        icon: <BiCodeAlt />,
        extraContent: <BodyByYama />
    },
    {
        title: "glasshousefarms.co",
        role: "Web developer",
        shortDescription: "Built a front end website a hydroponic growing facility in Ithaca, New York.",
        longDescription: <>
        <p>
            Glass House Farms LLC is a hydroponic growing faculty based out of Ithaca, New York. They grow veggies like lettuce, basil, pac choi, and arugula in hydroponic glasshouse farms (hence the name) and are sold in local grocery stores.
            The business wanted a central website where they could educate potential buyers and consumers on their tasty, healthy, and trusted products, as well as a contact channel. 
        </p>
        <p>
            I worked with a graphic designer <a href="https://www.linkedin.com/in/ryan-wall-287837132/" target="_blank" rel="noopener noreferrer">Ryan Wall</a>&nbsp;
            to create a logo, branding (colors, fonts, etc), and website wireframe that fit the client's needs. Ryan was able to create the wireframe mock and I was able to code 
            the site in under a week! Both Ryan and I, as well as the client are stoked with the outcome of the website. I was particularly excited because this was my first experience with
            translating a wireframe to a working website. There was only one style I wasn't able to figure out, which was the green or white stripe that went from the headers
            to the edge of the screen. Perhaps with more time on the project, I would have found a solution to this, but it was not vital to the design so I scrapped it in the final design.
            I continue to provide occasional updates to the site when necessary to the client.  Since April of 2018, the site has garnered 3500 unique website visitors.
        </p>
        </>,
        logoUrl: require("../assets/images/jobs/glasshousefarms/logo.png"),
        logoSize: SIZE.LARGE,
        period: "March, 2018 - April, 2018",
        status: STATUS.COMPLETE,
        link: "https://www.glasshousefarms.co",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.PHP, SKILLS.MYSQL
            ]
        },
        headerUrl: require("../assets/images/jobs/glasshousefarms/header.png"),
        headerPosition: "50% 60%",
        icon: <BiCodeAlt />,
        extraContent: <GlassHouseFarms />
    },
    {
        title: "Coldbrew Creative",
        role: "Web developer",
        shortDescription: "Built, updated, and managed websites for a small digital marketing team in San Jose, California.",
        longDescription: <p>Now Manticore, Coldbrew Creative is a small digital marketing firm based in San Jose, California. The CEO, 
            <a href="https://www.linkedin.com/in/mikeejlee/" target="_blank" rel="noopener noreferrer">&nbsp;Mike Lee</a>,&nbsp; was a classmate of mine at San Jose State,
            and I caught wind that he was looking for a web designer to help with client demand. I joined his Slack team, Trello workspace, and Github repositories
            so I could jump in to help with various web maintenance tasks. There was an even mix between fixing and updating WordPress, SquareSpace, and HTML/CSS/JS/PHP bugs and content. 
            As my position ramped up I started to attend Zoom and in-person meetings, as well as visiting clients in person to get a better idea on the brand
            they wanted to build on the site. Overall, this was a great job and with a motivated team around me that I gained a plethora of knowledge from. Mike motivated me
            as a leader, <a href="https://github.com/andyhqtran" target="_blank" rel="noopener noreferrer">Andy Tran</a> motivated me as a software engineer, and&nbsp;
            <a href="https://www.linkedin.com/in/ryan-wall-287837132/" target="_blank" rel="noopener noreferrer">Ryan Wall</a> motivated me as a designer. Ultimately, I left
            the team because I was working with technology too far up the stack (WordPress) and wanted to work with less abstracted technologies, like Node and Python. </p>,
        logoUrl: require("../assets/images/jobs/coldbrewcreative/logo.png"),
        logoSize: SIZE.LARGE,
        period: "October, 2017 - January, 2018",
        status: STATUS.COMPLETE,
        link: "https://mntcre.com/",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.PHP, SKILLS.SQUARESPACE, SKILLS.WORDPRESS
            ]
        },
        headerUrl: require("../assets/images/jobs/coldbrewcreative/header.png"),
        headerPosition: "50% 50%",
        icon: <MdWork />,
        extraContent: <ColdBrewCreative />
    },
    {
        title: "Tesla",
        role: "Product Specialist",
        shortDescription: "Car salesman at the flagship Tesla electric vehicle showroom in Sunnyvale, California.",
        longDescription: <p>While attending San Jose State, I had some spare time and a heavy interest in Tesla as a company and the products they were building. I got an interview from a 
            college friend of mine, <a href="https://www.linkedin.com/in/vybhav-a-kandadai-%E2%98%81-8525244a/" rel="noopener noreferrer" target="_blank">Vybhav Kandadai</a>, another car salesman 
            at the Santana Row show room in San Jose. I nailed the interview after expressing my knowledge for Elon's vision for Tesla and his other companies. I made quick friends
            with my co-workers, and have lasting relationships with many of them from my experience there. The Santana Row location was the flagship store for Tesla, so we got many affluent visitors, 
            such as business men and women, sports players, actors/actresses, and Elon himself occasionally. In this high stakes environment, I perfected how to present myself as a professional. 
            Ultimately, I left the job because I quickly found that moving from selling cars to an engineering position was difficult due to the size of the company. I felt I had also
            reached the limit on the challenges I was being presented, and wanted to move to a more challenging engineering job that took advantage of what I was studying in school.
            I am grateful for the opportunity I had at Tesla and the valuable lessons I learned along the way.</p>,
        logoUrl: require("../assets/images/jobs/tesla/logo.png"),
        logoSize: SIZE.MEDIUM,
        period: "August, 2016 - December, 2016",
        status: STATUS.COMPLETE,
        link: "https://www.tesla.com",
        skills: {
            other: [
                SKILLS.SALES, SKILLS.CUSTOMER_SERVICE, SKILLS.ELECTRIC_VEHICLES
            ]
        },
        headerUrl: require("../assets/images/jobs/tesla/header.png"),
        headerPosition: "50% 50%",
        icon: <MdWork />,
        extraContent: <Tesla />
    },
    {
        title: "Minute.tech LLC",
        role: "Founder & Software Engineer",
        shortDescription: "Web and mobile applications connecting non-techies to techies for technical support.",
        longDescription: <p>Minute.tech plans to be a web, iOS, Android, and desktop app that provides consumer grade 
            tech support by connecting clients who have tech questions with qualified technicians. 
            The system will facilitate communication with technicians over messenger, voice/video calls, 
            remote connection, and in-person scheduling, and a payment solution all under the application's hood. 
            I recognize this project is ambitious, and has taken me many years, team members, advisors, and prototypes, 
            but I do believe the opportunity is worth the effort based on my personal experience and extensive research.</p>,
        logoUrl: require("../assets/images/jobs/minutetech/logo.png"),
        logoSize: SIZE.LARGE,
        period: "May, 2016 - Today",
        status: STATUS.WORKING,
        link: "https://www.minute.tech",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.NODE, SKILLS.REACT, SKILLS.GITHUB, SKILLS.FIREBASE
            ],
            secondary: [
                SKILLS.SWIFT, SKILLS.PYTHON, SKILLS.MYSQL, SKILLS.FLASK
            ],
            other: [
                SKILLS.COMPUTER_HARDWARE, SKILLS.BUSINESS_DEV, SKILLS.LEADERSHIP, SKILLS.TEAMWORK, SKILLS.TECHNICAL_SUPPORT, SKILLS.CUSTOMER_SERVICE
            ]
        },
        headerUrl: require("../assets/images/jobs/minutetech/header.png"),
        headerPosition: "50% 50%",
        icon: <BiRocket />,
        extraContent: <MinuteTech />
    },
    {
        title: "Palo Alto Networks",
        role: "IT Specialist",
        shortDescription: "Provided on-site technical support at the previous Palo Alto Networks headquarters in Sunnyvale, California",
        longDescription: <p>While attending San Jose State, I got into a deep conversation at a party with <a href="https://www.linkedin.com/in/matthew-elliott11/" target="_blank" rel="noopener noreferrer">Matt Elliott,</a>&nbsp;
            an MIS student and employee at Palo Alto Networks at the time. After discussion on my interest in all things technology, he advised that I send him my 
            resume to forward to his hiring manager. After a few phone interviews, and one in-person interview, I got the job! The job fit me perfectly, 
            I was stationed in the room where all the tech hardware like monitors, cables, and computers were kept and organized.
            I was tasked at distributing this hardware to new hire employees or employees with broken/outdated hardware. I would grab the appropriate hardware for them, deliver it to their
            desk, and set all the hardware and software up. Palo Alto Networks was growing rapidly at the time and thus new hires were coming in daily, so a good chunk of my time was occupied
            by setting up desks. While not setting up desks, I was busy re-imaging old laptops to be recirculated into the company. This doesn't sound that glamorous, but to me I loved it; 
            I always enjoyed tearing my computer setup apart at home and putting it back together in a more organized or optimal way. My main project was for hardware reconciliation, 
            where I had to account for all hardware under the hood of the headquarters in Sunnyvale, which was more than a million dollars in assets. I needed to sift through hundreds 
            of separate spreadsheets and cross reference them into one consolidated list to reference. I was able to finish the project, but it was more difficult than my manager or 
            I had anticipated because many assets were either unaccounted for or unaccessible.  Through this, I learned the bureaucracy of a large, publicly traded, network security corporation.         </p>,
        logoUrl: require("../assets/images/jobs/palo-alto-networks/logo.png"),
        logoSize: SIZE.LARGE,
        period: "May, 2015 - August, 2015",
        status: STATUS.COMPLETE,
        link: "https://www.paloaltonetworks.com/",
        skills: {
            other: [
                SKILLS.TECHNICAL_SUPPORT, SKILLS.CUSTOMER_SERVICE
            ]
        },
        headerUrl: require("../assets/images/jobs/palo-alto-networks/header.png"),
        headerPosition: "50% 50%",
        icon: <MdWork />,
        extraContent: <PaloAltoNetworks />
    },
    {
        title: "ACFN Franchise",
        role: "ATM Technician",
        shortDescription: "Worked as a remote ATM technician at an ATM franchising company in San Jose, California",
        longDescription: <p>ACFN is an ATM company with 2500+ machines worldwide that operates on a franchise business model.
            ACFN provides market research on the best placement of the ATM and follow up support for the ATM front and back end.
            The franchisee buys an ACFN supported ATM, usually <a href="https://www.tritonatm.com/" target="_blank" rel="noopener noreferrer">Triton</a> branded,  
            then "buys" the cash that goes into the ATM, and ACFN as a business takes a percentage off every transaction. I sat in an office in downtown
            San Jose answering phone calls from franchisees dialing in from around the world when trying to setup, service, or troubleshoot the machines (or customers calling with issues, which rarely happened.)
            In this position, I learned how to remotely troubleshoot with clients with semi-high level hardware and software. The troubleshooting patterns I learned
            at this job directly applied to the inception of <Link to="/work/minute.tech-llc">Minute.tech</Link>. </p>,
        logoUrl: require("../assets/images/jobs/acfn/logo.png"),
        logoSize: SIZE.LARGE,
        period: "February, 2015 - June, 2015",
        status: STATUS.COMPLETE,
        link: "https://www.atmfranchise.com",
        skills: {
            other: [
                SKILLS.TECHNICAL_SUPPORT, SKILLS.CUSTOMER_SERVICE, SKILLS.ATM_TECHNOLOGY
            ]
        },
        headerUrl: require("../assets/images/jobs/acfn/header.png"),
        headerPosition: "50% 50%",
        icon: <MdWork />,
        extraContent: <ACFN />
    },
    {
        title: "San Jose State University",
        role: "Computer Engineering & Business Student",
        shortDescription: "Earned a computer engineering major and business & math minors in the heart of Silicon Valley.",
        longDescription: <p>Earned computer engineering major with business &amp; math minors in the heart of Silicon Valley. Member of Computer &amp; Software Engineering Society. 
            Member of the Pi Kappa Alpha fraternity. Earned the confidence and paperwork to work professionally as an engineer solving problems around the world!</p>,
        logoUrl: require("../assets/images/jobs/sjsu/logo.png"),
        logoSize: SIZE.LARGE,
        period: "August, 2013 - December, 2019",
        status: STATUS.COMPLETE,
        link: "https://www.sjsu.edu",
        skills: {
            primary: [
                SKILLS.GITHUB, SKILLS.SWIFT, SKILLS.PYTHON, SKILLS.FLASK, SKILLS.MYSQL
            ],
            // TODO: split this up better visually, hard to read all these. maybe just get rid of em?
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
        headerPosition: "50% 50%",
        icon: <MdSchool />,
        extraContent: <SJSU />
    },
    {
        title: "iHealPhones",
        role: "Founder",
        shortDescription: "Founded a local device repair business in El Dorado Hills, California.",
        longDescription: <p>
            iHealPhones was my first business I built at the age of 15 that was focused on repairing smartphone, laptop, and device hardware in the local area of El Dorado Hills, California. 
            80% of work done was fixing iPhone screens at a time when iPhones were hitting the market. iHealPhones gave me the reputation at my high school as the "phone guy", which caused many jobless high schoolers asking for a free phone fix. 
            These requests got so bad, that I "had" to make a shirt that said "No, I will not fix your phone for free." (I know, pretty cringey.) 
            The Flash website I built for this business was my first website and introduced me to the coding world for the first time.
            The tech repair/support business and troubleshooting knowledge I learned at this job directly applied to the inception of <Link to="/work/minute.tech-llc">Minute.tech</Link>. 
        </p>,
        logoUrl: require("../assets/images/jobs/ihealphones/logo-v2.png"),
        logoSize: SIZE.XLARGE,
        period: "December, 2010 - February, 2014",
        status: STATUS.COMPLETE,
        link: "https://www.ihealphones.com",
        skills: {
            primary: [
                SKILLS.WEB_FUNDAMENTALS,
                SKILLS.HTML,
                SKILLS.CSS,
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
            &nbsp;<a href="https://www.deca.org" target="_blank" rel="noopener noreferrer">DECA</a>, a young business leader club at school which is normally 
            reserved for 3rd and 4th year students, invited me to join the club as a 2nd year because of iHealPhones. I also became 1 of the 3 web developer students that 
            managed the school website. Through this early opportunity, I was given a free subscription to Adobe Creative Suite (Photoshop, Dreamweaver, etc) 
            and to <a href="https://www.lynda.com" target="_blank" rel="noopener noreferrer">Lyndia.com</a> where I learned the basics of web development and design with hours of online tutorials. 
            Despite my "techie" persona, I managed to still be a sporty dude, playing soccer and lacrosse, but ultimately, I knew my calling was technology, 
            so I applied to colleges to pursue a computer engineering degree at <Link to="/work/san-jose-state-university">San Jose State University</Link>.
        </p>,
        logoUrl: require("../assets/images/jobs/orhs/logo.png"),
        logoSize: SIZE.LARGE,
        period: "August, 2009 - May, 2013",
        status: STATUS.COMPLETE,
        link: "http://orhs.eduhsd.k12.ca.us/",
        skills: {
            primary: [
                SKILLS.WEB_FUNDAMENTALS,
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
        headerPosition: "50% 30%",
        icon: <MdSchool />,
        extraContent: <ORHS />
    },
]