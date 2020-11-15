import React from 'react'
import { MdWork, MdSchool } from "react-icons/md";
import { BiCodeAlt, BiRocket } from "react-icons/bi"

import { STATUS, SKILLS, SIZE } from "./constants";

import MinuteTech from "../components/pages/work/jobs/MinuteTech";
import SJSU from '../components/pages/work/jobs/SJSU';
import SmithZellnerConsulting from '../components/pages/work/jobs/SmithZellnerConsulting';
import GoPrestigePower from '../components/pages/work/jobs/GoPrestigePower';
import BlairFamilyFoundation from '../components/pages/work/jobs/BlairFamilyFoundation';
import DougsReactBoiler from '../components/pages/work/jobs/DougsReactBoiler';
import Tesla from '../components/pages/work/jobs/Tesla';

// TODO: allow link within long description (like for friend's linkedin)
export const jobs = [
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
        logoUrl: require("../assets/images/logos/external/goprestigepower.png"),
        logoSize: SIZE.LARGE,
        period: "July, 2020 - August, 2020",
        status: STATUS.COMPLETE,
        link: "https://www.goprestigepower.com",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.NODE, SKILLS.REACT, SKILLS.GITHUB, SKILLS.FIREBASE
            ]
        },
        headerUrl: require("../assets/images/headers/goprestigepower.png"),
        icon: <BiCodeAlt />,
        extraContent: <GoPrestigePower />
    },
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
        logoUrl: require("../assets/images/logos/external/smithzellner.png"),
        logoSize: SIZE.LARGE,
        period: "August, 2020 - September, 2020",
        status: STATUS.COMPLETE,
        link: "https://www.smithzellner.consulting",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.NODE, SKILLS.REACT, SKILLS.GITHUB, SKILLS.FIREBASE
            ]
        },
        // TODO: add proper logo! and better header, this one is low quality!
        headerUrl: require("../assets/images/headers/smithzellner.png"),
        icon: <BiCodeAlt />,
        extraContent: <SmithZellnerConsulting />
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
        logoUrl: require("../assets/images/logos/external/react.png"),
        logoSize: SIZE.LARGE,
        period: "June, 2020 - November, 2020",
        status: STATUS.COMPLETE,
        link: "https://dougs-react-boiler.web.app/",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.NODE, SKILLS.REACT, SKILLS.GITHUB, SKILLS.FIREBASE
            ]
        },
        headerUrl: require("../assets/images/headers/react_blue.png"),
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
        logoUrl: require("../assets/images/logos/external/blairfamily.png"),
        logoSize: SIZE.LARGE,
        period: "April, 2020 - September, 2020",
        status: STATUS.COMPLETE,
        link: "https://www.blairfamily.foundation",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.NODE, SKILLS.REACT, SKILLS.GITHUB, SKILLS.FIREBASE
            ]
        },
        headerUrl: require("../assets/images/headers/blairfamily.png"),
        icon: <BiCodeAlt />,
        extraContent: <BlairFamilyFoundation />
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
        logoUrl: require("../assets/images/logos/external/tesla.png"),
        logoSize: SIZE.MEDIUM,
        period: "August, 2016 - December, 2016",
        status: STATUS.COMPLETE,
        link: "https://www.tesla.com",
        skills: {
            other: [
                SKILLS.SALES, SKILLS.CUSTOMER_SERVICE, SKILLS.ELECTRIC_VEHICLES
            ]
        },
        headerUrl: require("../assets/images/headers/tesla.png"),
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
        logoUrl: require("../assets/images/logos/external/minutetech.png"),
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
        headerUrl: require("../assets/images/headers/minutetech.png"),
        icon: <BiRocket />,
        extraContent: <MinuteTech />
    },
    {
        title: "San Jose State University",
        role: "Computer Engineering & Business Student",
        shortDescription: "Earned a computer engineering major and business & math minors in the heart of Silicon Valley.",
        longDescription: <p>Earned computer engineering major with business &amp; math minors in the heart of Silicon Valley. Member of Computer &amp; Software Engineering Society. 
            Member of the Pi Kappa Alpha fraternity. Earned the confidence and paperwork to work professionally as an engineer solving problems around the world!</p>,
        logoUrl: require("../assets/images/logos/external/sjsu.png"),
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
        headerUrl: require("../assets/images/headers/sjsu.png"),
        icon: <MdSchool />,
        extraContent: <SJSU />
    },
    
]