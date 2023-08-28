// Skills Image Imports
import { FaReact, FaNode, FaCss3Alt} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si';

// Projects Image Imports
import Project1 from '../assets/portfolio1.jpg';
import Project2 from '../assets/portfolio2.jpg';
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
        project_name: 'Restourant App',
        project_desc: "It typically includes feature such as a menu with prices, the ability to place an order, and the option to pay for the order directly throught the app. Some restorant application also allow the customers to make reservations, view ans the restorant's location and hours, and access special deals and promotions.",
        tech_stack:['React', 'Tailwind', 'Firebase'],
        project_img: Project1,
        project_url: 'https:www.youtube.com',
        reverse: false,
    },
    {
        id: 1,
        project_name: 'Animax App',
        project_desc: "It typically includes feature such as a menu with prices, the ability to place an order, and the option to pay for the order directly throught the app. Some restorant application also allow the customers to make reservations, view ans the restorant's location and hours, and access special deals and promotions.",
        tech_stack:['React', 'Tailwind', 'Firebase'],
        project_img: Project2,
        project_url: 'https:www.youtube.com',
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