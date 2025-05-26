import Information from '../components/ResumeSection/Information'
import Education from '../components/ResumeSection/Education'
import Skills from '../components/ResumeSection/Skills'
import Certificate from '../components/ResumeSection/Certificate'


export const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Resume', href: '#resume' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact Us', href: '#contact' },
];

export const resumedata=[
    {
     id:1,
     title:"Infromation",
     component:Information
    },
    {
     id:2,
     title:"education",
     component:Education 
    },
    {
     id:3,
     title:"skills",
     component:Skills 
    },
    {
     id:4,
     title:"Certificate",
     component:Certificate 
    },
];

export const infromationDetails={
    name:"Balaji T",
    age:22,
    gender:"male",
    languages:"tamil (native) ,engilsh",
    email:"tbalaji2411@gamil.com",
    phone:"91+ 9345868996",
    location:`Bodinayakanur,
 Theni-625513,
 Tamil Nadu`,
};

export const educationData=[
    {
      degree:"B.E in Computer Science",
      institution:"Theni Kammavar Sangam College of Technology",
      year:"2023-2026",
      grade:"on going",
      discripation:"Specializing in coding, web development, and computer science fundamentals."
    },
    {
      degree:"Diploma in EEE",
      institution:"Theni Kammavar Sangam Polytechnic College",
      year:"2020-2022",
      grade:"92.4%",
      discripation:"Trained in electrical circuits, hardware systems, and industrial applications."
    },
    {
      degree:"HSC (12th Grade)",
      institution:"Nadar Higher Secondary School",
      year:"2018-2020",
      grade:"60%",
      discripation:"Completed higher secondary with emphasis on biology, mathematics, and logic."
    },
    {
      degree:"SSLC (10th Grade)",
      institution:"Nadar Higher Secondary School",
      year:"2017-2018",
      grade:"80%",
      discripation:"Built essential knowledge in science, math and foundational subjects."
    },
];

export const otherSkill=[
    {
      language:"typewriting",
      learn:"90%"
    },
    {
      language:"communication",
      learn:"85%",
    },
];

export const developmentSkill=[
    {
      language:"html",
      learn:"90%"
    },
    {
      language:"css",
      learn:"85%",
    },
    {
      language:"Js",
      learn:"75%"
    },
    {
      language:"react",
      learn:"80%"
    },
    {
      language:"tailwind",
      learn:"65%"
    },
    {
      language:"Git",
      learn:"70%"
    }
];

export const projectCardDetails=[
    {
      id:1001,
      title:"spicy hunt",
      img:"/images/Projects/project-1.webp",
      discription:"Spicy Hunt is the first website I built-a responsive restaurant site that helped me learn basics of web design and kickstart my frontend developer journey.",
      language:"HTML, CSS",
      gitLint:"https://github.com/Balaji-2431/spicyHunt",
      liveLink:"https://spicy-hunt.vercel.app"
    },
    {
      id:1002,
      title:"spicy hunt",
      img:"/images/Projects/project-1.webp",
      discription:"Spicy Hunt is the first website I built-a responsive restaurant site that helped me learn basics of web design and kickstart my frontend developer journey.",
      language:"HTML, CSS",
      gitLint:"https://github.com/Balaji-2431/spicyHunt",
      liveLink:"https://spicy-hunt.vercel.app"
    },
    {
      id:1003,
      title:"spicy hunt",
      img:"/images/Projects/project-1.webp",
      discription:"Spicy Hunt is the first website, I built-a responsive restaurant site that helped me learn basics of web design and kickstart my frontend developer journey.",
      language:"HTML, CSS",
      gitLint:"https://github.com/Balaji-2431/spicyHunt",
      liveLink:"https://spicy-hunt.vercel.app"
    },
];