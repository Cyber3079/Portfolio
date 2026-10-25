import { title } from "framer-motion/client";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  tut,
  php,
  cpp,
  myspaza,
  threejs,
  Wordpress,
  Jquery,
  portfolio
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "tech",
    title: "tech",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },

];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Embedded sysems Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    title:"HTML 5",
  },
  {
    name: "CSS 3",
    icon: css,
    title:"CSS 3",
  },
  {
    name: "JavaScript",
    icon: javascript,
    title:"JavaScript",
  },
  {
    name: "React JS",
    icon: reactjs,
    title:"React JS",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    title:"Tailwind CSS",
  },
  {
    name: "Node JS",
    icon: nodejs,
    title:"Node JS",
  },
  
  {
    name: "Three JS",
    icon: threejs,
    title:"three.js",
  },
    {
    name: "PHP",
    icon: php,
    title:"php",
  },
    {
    name: "C++",
    icon: cpp,
    title:"php",
  },
  {
    name: "git",
    icon: git,
    title:"git/github",
  },
  {
    name: "Wordpress",
    icon: Wordpress,
    title:"WordPress"
  },
  {
    name: "JQuery",
    icon: Jquery,
    title: "Jquery"
  }

];

const experiences = [
  {
    title: "Academic Tutor",
    company_name: "Tshwane University of Technology",
    icon: tut,
    iconBg: "#383E56",
    date: "February 2024 - June 2024",
    points: [
  "Collaborated with students to resolve complex programming challenges in C++, strengthening their understanding of backend logic and software architecture.",
  "Developed and implemented comprehensive curriculum materials to build technical proficiency in computer systems engineering ",
	"Utilized real-world technical examples to illustrate advanced system concepts, improving students' comprehension of application performance and debugging.",
  "Mentored diverse groups of students in technical communication and problem-solving methodologies to enhance their preparedness for professional development roles.",

    ],
  },
 
  
];

const projects = [
  {
    name: "Spaza Invontory app",
    description:
      "Web-based platform that allows small business owner to Record Inventories, Search supplier and Get Advise from AI on how to improve their decision, by using their phones",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
       {
        name: "Gemini APi",
        color: "red-text-gradient",
      },
    ],
    image: myspaza,
    source_code_link: "https://github.com/Cyber3079/SmartSpaza",
    live_demo: "https://smartspaza.onrender.com/ "
  },
  {
    name: "Keitumetse's Portfolio",
    description:
      "Web-based platform that allows small business owner to Record Inventories, Search supplier and Get Advise from AI on how to improve their decision, by using their phones",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Taliwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
       {
        name: "Javascript",
        color: "red-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Cyber3079/Portfolio",
    live_demo: "https://portfolio.matlhaelakeitumetse.workers.dev/ "
  },

 
];

export { services, technologies, experiences, projects };