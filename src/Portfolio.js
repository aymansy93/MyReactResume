import customer from "./assets/images/customer.svg"
import  megaphone from "./assets/images/megaphone.svg"
import  security from "./assets/images/security-verified-svgrepo-com.png"
import {GrMysql} from "react-icons/gr"
import {FaLaravel , FaPhp,FaLinux,FaPython, FaWordpress ,FaGithubSquare, FaHtml5,FaCss3, FaReact,FaDocker} from "react-icons/fa"
// for Education imges 
import mis from './assets/images/mis.png' 
import hacker from "./assets/images/happy-hacker.gif"

// imges for project
import pro1 from './assets/images/w1.png'
import pro2 from './assets/images/w2.png'
import pro3 from './assets/images/Screenshot at 2023-02-16 16-24-38.png'
import img_shop_open from './assets/images/w2_open.png'
import img_invoice_open from './assets/images/w1.bfe2e126dbc75648c0bb.png'
// Navbar Items : 

const NavItemData = [
{
    url : '#splashscreen',
   text: 'Home'
},
{
    url : '#skills',
   text: 'Skills'
},
{
    url : '#services',
   text: 'Services'
},
{
    url : '#onpensource',
   text: 'Open Source'
},
{
   url : '#projects',
  text: 'Projects'
},
{
   url: '#Achievements',
   text:'Achievements'
},
{
    url : '#contact',
   text: 'Contact Me',
},
];
// //////////////////////////////////////////////
//SocialMedia
const SocialMeadiaData ={
   facebook: "https://www.facebook.com/aymen.kn.7/",
   github:"https://github.com/aymansy93",
   whatsapp:"https://wa.me/905531781745?text=Hello",
   email:"mailto:info@aymankanawi.info",
   tryhackme:'https://tryhackme.com/p/aymankan',
   linkedin:'https://www.linkedin.com/in/ayman-kanawi/',
   // other icon supported  Instagram, Twitter AND many other!
  // To customize icons and social links,  src/components/SocialMedia
};
// //////////////////////////////////////////////
const TextAnimated = [
   "Experienced Back-End Web Developer",
   "Proficient in utilizing the Laravel framework",
   "Skilled Web Manager",
   "Specialized in Penetration Testing",
   "Adept in Bug Hunting"
];
//greeting
const greeting={
   title:", I'm Ayman Kanawi",
   subtitle:"My passion for technology and cybersecurity led me to pursue a career as a backend developer and pentester.",

   buttonNormal:[
      {
         url:"#projects",
         name:"View My Work",
        
      },
      {
         url:"https://drive.google.com/file/d/1t3pzvuoxVbK8XngstmrypM8-Kv025hTo/view?usp=sharing",
         name:"SEE ME RESUME",
      }
   ],
}
// //////////////////////////////////////////////
// Skills



const SkillsData = {
   title1:"Combining my love for Backend Development and Security as a ",
   titlecolor:"Web Penetration Tester",
   title2:"Services",

   // skills names 
   skills:[
      {
         name:"Laravel",
         iconname:<FaLaravel/>,
      },
      {
         name:"Php",
         iconname:<FaPhp/>,
      },
      {
         name:"Python",
         iconname:<FaPython/>,
      },
      {
         name:"Linux",
         iconname:<FaLinux/>,
      },
      {
         name:"Wordpress",
         iconname:<FaWordpress/>,
      },
      {
         name:"Mysql",
         iconname:<GrMysql />,
      },
      {
         name:"Github",
         iconname:<FaGithubSquare/>,
      },
      {
         name:"Html5",
         iconname:<FaHtml5/>,
      },
      {
         name:"Css3",
         iconname:<FaCss3/>,
      },
      {
         name:"React js",
         iconname:<FaReact/>,
      },
      {
         name:"Docker",
         iconname:<FaDocker/>,
      },
   ]
}

// //////////////////////////////////////////////
// Services
const ServicesData = [
   {
      text: 'Get your website managed with the latest web technologies and high capabilities',
      img: customer
   },
   {
      text: 'Marketing through social media channels and preparing the site for search engines',
      img: megaphone
   },
   {
      text: 'Check websites for security vulnerabilities professionally',
      img: security
   },
];
// ///////////////////////////////////////////////
// Proficiency
const Proficiency={
   experience: [
      {
        Stack: "Frontend/Design", //Insert stack or technology you have experience in
        progressPercentage: "60%" //Insert relative proficiency in percentage
      },
      {
         Stack: "Backend", //Insert stack or technology you have experience in
         progressPercentage: "80%" //Insert relative proficiency in percentage
      },
      {
         Stack: "Programming/Problem Solving", //Insert stack or technology you have experience in
         progressPercentage: "70%" //Insert relative proficiency in percentage
      },
      {
         Stack: "Penetration Testing", //Insert stack or technology you have experience in
         progressPercentage: "90%" //Insert relative proficiency in percentage
      },
   ]
}
// ////////////////////////////////////////////////

// Education 

const EducationData = {
   edu: [
      {
         name: "Self Education in Cyber Security",
         date:"2019 to Present",
         img :hacker,
      },
      {
         name: "Back-end Bootcamp in Website development",
         date: "February 2022 to May 2022",
         img:mis,
      },
      // add EDucation 
   ]
}
// ///////////////////////////
// Projects Open source
const ProjectsData={
   projects:[
      {
         name:"invoices-managment",
         des:"Managing customer and bank bills",
         url:"https://github.com/aymansy93/invoices-managment",
         img:img_invoice_open,
      },
      {
         name:"SHOPPING",
         des:"A simple online store that contains most of the advantages of electronic stores",
         url:"https://github.com/aymansy93/shopping",
         img:img_shop_open,
      },
      {
         name:"portfolio html&css only",
         des:"Personal website",
         url:"https://github.com/aymansy93/portfolio",
         img:pro3,
      },
      // {
         // add more projects in here 
      //    name:"",
      //    des:"",
      //    url:"",
      //    img:,
      // },
   ]
}
// //////////////////////////////////////////////
// ///////////////////////////
// Projects
const OlineProjects={
   projects:[
      {
         name:"Eccomerce online store",
         des:"This project involves the development of a comprehensive online store utilizing the Laravel framework.",
         url:"https://shop.aymankanawi.info",
         img:pro1,
      },
      {
         name:"GameShop",
         des:"Facilitates charging for gaming and Visa balance transfers in Türkiye.",
         url:"https://yalanashhnbils.com",
         img:pro2,
      },
      {
         name:"portfolio html&css only",
         des:"Personal website",
         url:"https://aymansy93.github.io/portfolio/",
         img:pro3,
      },
      {
         name:"Palhanz Company",
         des:"Official portfolio overview for Palhanz Company",
         url:"https://palhanz.aymankanawi.info/",
         img:null,
      },
       
      // {
         // add more projects in here 
      //    name:"",
      //    des:"",
      //    url:"",
      //    img:,
      // },
   ]
}
// Achievements
const AchievementsData = {
   Achievement:[
      {
         name:'TryHackMe Cybersecurity Proficiency',
         des:'Proficient in Cybersecurity Skills through TryHackMe - demonstrated competence in penetration testing, web application security, and more through interactive challenges and activities.',
         img:'https://tryhackme-badges.s3.amazonaws.com/aymankan.png',
         date:'October 2022',
         // add coustomize 
      },
      {
         name:'Volunteering Workshop html& css scramblebit company',
         des:"Successfully contributed HTML/CSS skills to ScrambleBit's Volunteering Workshop for charity organizations.",
         img:'',
         date:'October 2022',
         // add coustomize 
      },
      {
         name:'Softbox Company',
         des:"As a Backend and Laravel Developer at Softbox Company since January 5, 2023, I've been actively involved in developing robust and scalable solutions. My responsibilities include crafting and maintaining backend systems using Laravel, ensuring optimal performance and security. I contribute to the success of projects by leveraging my expertise in backend development and Laravel framework.",
         img:'',
         date:'January 2023 To Present',
         // add coustomize 
      },
      // 
   ]
}

// ////////////////////////////////////////////////////
// Contact ME
const ContactMeData = {
   title:"Have a question or want to work togetheron a project? I'd love to hear from you!",
   msg:"I'm excited to see what we can achieve when we work together.",
}
const isHireable = true; // Set false if you are not looking for a job.

// EXPORT 

// export {NavItemData as NavItemData}
// export {ServicesData as ServicesData}
// export {SocialMeadiaData as SocialMeadiaData}
// export {greeting as greeting}
// export {SkillsData as SkillsData}
// export {Proficiency as Proficiency}
// export {Education as EducationData}
// export {ProjectsData as ProjectsData}
// export {AchievementsData as AchievementsData}
// export {ContactMeData as ContactMeData}
// export {isHireable as isHireable}

// //////////////////////////////////
//  the code short AND CLEAN , 
export{
   NavItemData,
   ServicesData,
   TextAnimated,
   SocialMeadiaData,
   greeting,
   SkillsData,
   Proficiency,
   EducationData,
   ProjectsData,
   OlineProjects,
   AchievementsData,
   ContactMeData,
   isHireable,
}
