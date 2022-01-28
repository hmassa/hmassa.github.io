import Job from "../interfaces/Job";
import Project from "../interfaces/Project";
import Contact from "../interfaces/Contact";

import paycom from "./paycom.jpg";
import mizzou from "./mizzou.jpg";
import pfizer from "./pfizer.jpg";

import {FiPhone, FiMail, } from "react-icons/fi";
import {IoLogoLinkedin, IoLogoGithub} from "react-icons/io";
import Skill from "../interfaces/Skill";

export const Contacts: Contact[] = [
    {
        logo: FiPhone,
        data: "(636) 875-4765",
    },
    {
        logo: FiMail,
        data: "haleyemassa@gmail.com",
        link: "mailto:haleyemassa@gmail.com",
    },
    {
        logo: IoLogoGithub,
        data: "hmassa",
        link: "https://github.com/hmassa",
    },
    {
        logo: IoLogoLinkedin,
        data: "haley-massa",
        link: "https://www.linkedin.com/in/haley-massa/",
    },
];

export const Experience: Job[] = [
    {
        company: "Paycom",
        logo: paycom,
        title: "Software Development Intern",
        start: "May 2021",
        end: "August 2021",
        description: "Software development intern at Paycom, a human capital " +
        "management technology provider. Worked with three other " + 
        "interns to develop a real-time company-wide broadcast system " + 
        "using React for the fron-end, ASP.NET Core MVC for the backend, " +
        "and a MySQL database. Served as the team leader."
    }, 
    {
        company: "University of Missouri",
        logo: mizzou,
        title: "Student Researcher",
        start: "January 2021",
        end: "May 2021",
        description: "Worked as a frontend web developer on the RIDSI dashboard " +
        "as an extension to my senior capstone project. The application " + 
        "was built using TypeScript, React, and Ionic and used Google " +
        "Firebase services for data storage/querying and site hosting."
    }, 
    {
        company: "Pfizer",
        logo: pfizer,
        title: "Scientific Informatics Coordinator",
        start: "June 2019",
        end: "August 2019",
        description: "Internship focused on promoting information security " +
        "practices to Pfizer colleagues. Responsibilities for this role " +
        "included developing social campaigns and organizing events to " +
        "encourage appropriate handling of sensitive information, " +
        "performing desk sweeps, and evaluating the physical and " +
        "information security standards of the site."
    }
];

export const LangsAndTechs: Skill[] = [
    {data: "Angular"},
    {data: "C"},
    {data: "C#"},
    {data: "C++"},
    {data: "Firebase"},
    {data: "Git"},
    {data: "Go"},
    {data: "HTML/CSS"},
    {data: "Ionic"}, 
    {data: "Java"},
    {data: "JavaScript"},
    {data: "Matlab"},
    {data: "PHP"},
    {data: "Python"},
    {data: "PyTorch"},
    {data: "React"}, 
    {data: "SQL"},
    {data: "TypeScript"}
];

export const Projects: Project[] = [
    {
        title: "Access-Adaptive Priority Search Tree",
        start: "May 2020",
        end: "present",
        description: "Research project that aimed to evaluate the " +
        "efficiency of a new application of the priority search tree." +
        "Currently reviewing paper for submission to <i>Innovations in " +
        "Systems and Software Engineering</i>, a NASA journal.",
        link: "https://github.com/hmassa/aopst",
    },
    {
        title: "RIDSI",
        start: "September 2020",
        end: "May 2021",
        description: "The Regional Intelligent Transportation System Data " + 
        "Sharing Initiative, or RIDSI, is an online dashboard for historical " + 
        "and active transportation data. The project was dispatched to " + 
        "the University of Missouri by the Missouri Department of " +
        "Transportation and related agencies.",
        link: "https://ridsi-13389.web.app/Login",
    },
    {
        title: "Program Planner",
        start: "June 2020",
        end: "July 2020",
        description: "Web application that allows users to create, edit, " + 
        "and delete events for a multi-event program or conference. " + 
        "Front-end built using React and connected to a MySQL database " +
        "using PHP.",
        link: "https://github.com/hmassa/event-planner",
    },
    {
        title: "Spotify Listening History App",
        start: "April 2020",
        end: "May 2020",
        description: "Web application that has users sign in through Spotify " +
        "and then displays data and analytics about their listening " + 
        "history. Information pulled from the Spotify Web API using " +
        "JavaScript.",
        link: "https://github.com/hmassa/spotify-app",
    },
    {
        title: "Forest Database",
        start: "March 2019",
        end: "May 2019",
        description: "MySQL database that stores information about " +
        "forest geography, forest composition, and tree characteristics. " + 
        "Users able to query the database and view results via a web " + 
        "interface.",
    },

]