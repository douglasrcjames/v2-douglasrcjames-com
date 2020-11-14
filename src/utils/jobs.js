import React from 'react'
import { MdWork, MdSchool } from "react-icons/md";
import { BiCodeAlt, BiRocket } from "react-icons/bi"

import MinuteTech from "../components/pages/work/MinuteTech";
import { STATUS, SKILLS } from "./constants";

// TODO: allow link within long description (like for friend's linkedin)
export const jobs = [
    {
        title: "goprestigepower.com",
        role: "Web developer",
        shortDescription: "Built a custom CRM web app and front end site for solar sales company out of Orange County, California.",
        longDescription: "",
        logoUrl: "",
        period: "July, 2020 - August, 2020",
        status: STATUS.COMPLETE,
        link: "https://www.goprestigepower.com",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.NODEJS, SKILLS.REACTJS, SKILLS.GITHUB, SKILLS.FIREBASE
            ]
        },
        headerUrl: "",
        icon: <BiCodeAlt />,
        extraContent: ""
    },
    {
        title: "Tesla",
        role: "Product Specialist",
        shortDescription: "Car salesman at the flagship Tesla electric vehcile showroom in Sunnyvale, California.",
        longDescription: `While attending San Jose State, I had some spare time and a heavy interest in Tesla as a company and the products they were building. 
        I got an interview from a college friend of mine, Vybhav Kandadai, another car salesman at the Santana Row show room in San Jose. I nailed the interview 
        after expressing my knowledge for Elon's vision for Tesla and his other companies. I made quick friends with my co-workers, and have lasting relationships 
        with many of them from my experience there. The Santana Row location was the flagship store for Tesla, so we got many affluent visitors, such as business 
        men and women, sports players, actors/actresses, and Elon himself occasionally. In this high stakes environment, I perfected how to present myself as a professional. 
        Ultimately, I left the job because I quickly found that moving from selling cars to an engineering position was difficult due to the size of the company. I felt I had 
        also reached the limit on the challenges I was being presented, and wanted to move to a more challenging engineering job that took advantage of what I was studying in school. 
        I am grateful for the opportunity I had at Tesla and the valuable lessons I learned along the way.`,
        logoUrl: "",
        period: "August, 2016 - December, 2016",
        status: STATUS.COMPLETE,
        link: "https://www.tesla.com",
        skills: {
            primary: [
                SKILLS.SALES, SKILLS.CUSTOMER_SERVICE
            ]
        },
        headerUrl: "",
        icon: <MdWork />,
        extraContent: ""
    },
    {
        title: "Minute.tech LLC",
        role: "Founder & Software Engineer",
        shortDescription: "Web and mobile applications connecting non-techies to techies for technical support.",
        longDescription: `Minute.tech plans to be a web, iOS, Android, and desktop app that provides consumer grade 
            tech support by connecting clients who have tech questions with qualified technicians. 
            The system will facilitate communication with technicians over messenger, voice/video calls, 
            remote connection, and in-person scheduling, and a payment solution all under the application's hood. 
            I recognize this project is ambitious, and has taken me many years, team members, advisors, and prototypes, 
            but I do believe the opportunity is worth the effort based on my personal experience and extensive research.`,
        logoUrl: "",
        period: "May, 2016 - Today",
        status: STATUS.WORKING,
        link: "https://www.minute.tech",
        skills: {
            primary: [
                SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.NODEJS, SKILLS.REACTJS, SKILLS.GITHUB, SKILLS.FIREBASE
            ]
        },
        headerUrl: "",
        icon: <BiRocket />,
        extraContent: <MinuteTech />
    },
    {
        title: "San Jose State University",
        role: "Computer Engineering & Business Student",
        shortDescription: "Earned a computer engineering major and business & math minors in the heart of Silicon Valley.",
        longDescription: `Earned computer engineering major with business & math minors in the heart of Silicon Valley. Member of Computer & Software Engineering Society. 
            Member of the Pi Kappa Alpha fraternity. Earned the confidence and paperwork to work professionally as an engineer solving problems around the world!`,
        logoUrl: "",
        period: "August, 2013 - December, 2019",
        status: STATUS.COMPLETE,
        link: "https://www.sjsu.edu",
        skills: {
            courses: [
                
            ]
        },
        headerUrl: "",
        icon: <MdSchool />,
        extraContent: ""
    },
    
]