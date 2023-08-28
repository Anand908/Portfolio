// Skills Image Imports
import { FaReact, FaNode, FaCss3Alt} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si';

// Projects Image Imports
import Project1 from '../assets/Project1.png';
import Project2 from '../assets/Project2.png';
// import Project3 from '../assets/portfolio3.jpg';
// import Project4 from '../assets/portfolio4.jpg';
// import Project5 from '../assets/portfolio5.png';
// import Project6 from '../assets/portfolio6.jpg';

export const Skills = [
    {
        id: 0,
        tech: 'React JS',
        icon: <FaReact/>
    },
    {
        id: 1,
        tech: 'Node JS',
        icon: <FaNode/>
    },
    {
        id: 2,
        tech: 'CSS',
        icon: <FaCss3Alt/>
    },
    {
        id: 3,
        tech: 'JavaScript',
        icon: <SiJavascript/>
    }
];

export const ProjectDetails = [
    {
        id: 0,
        project_name: 'Flipkart Clone',
        project_desc: "It typically includes feature such as a menu with prices, the ability to show the detailed information, and the option to add the products to cart throught the app. Flipkart application also allow the customers to create account and to Login, same feature as Flipkart, integrated to this application.",
        tech_stack:['Express JS', 'React JS', 'Node JS'],
        project_img: Project1,
        project_url: 'https://anand-flipkart-clone.cyclic.cloud',
        git_url: 'https://github.com/Anand908/Flipkart_Clone',
        reverse: false,
    },
    {
        id: 1,
        project_name: 'Egypt Trip',
        project_desc: "It typically includes Pages such as a Home, About, Destination, Contact. And many more features are coming soon. Right now allow a user to watch a cool animated effect on the home page on Scroll Event. And then it gives some infortion about egypt. It gives the information of some popular places in Egypt.",
        tech_stack:['HTML', 'CSS', 'JavaScript'],
        project_img: Project2,
        project_url: 'https://egypt-project.vercel.app',
        git_url: 'https://github.com/Anand908/Egypt-Project',
        reverse: true,
    }
];

export const NavLinks = [
    {
        id: 0,
        name: 'Home',
        href: 'Home'
    },
    {
        id: 1,
        name: 'My Skills',
        href: 'Skills'
    },
    {
        id: 2,
        name: 'My Projects',
        href: 'Projects'
    },
    {
        id: 3,
        name: 'My Contact',
        href: 'Contact'
    }
]