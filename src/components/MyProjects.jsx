import { motion } from 'framer-motion';
import React from 'react';
import { 
    PaddingContainer,
    Heading,
    BlueText 
} from '../styles/Global.styled';

// Project data import
import { ProjectDetails } from '../utils/Data';
import { fadeInTopVariant } from '../utils/Variants';
import Projects from './layouts/Projects';

const MyProjects = () => {
    return ( 
        <PaddingContainer
            id="Projects"
            top="5%"
            bottom="5%"
            left='5%'
            right="5%"
            responsiveTop='20%'
            responsiveLeft='1rem'
            responsiveRight='1rem'
        >
            <Heading 
                as={motion.h4}
                variants={fadeInTopVariant}
                initial="hidden"
                whileInView="visible"  
                size='h4'
            >
                MY PROJECTS
            </Heading>
            <Heading 
                as={motion.h2}
                variants={fadeInTopVariant}
                initial="hidden"
                whileInView="visible"  
                size='h2'
            >
                What <BlueText>I have built</BlueText>
            </Heading>

            {ProjectDetails.map((project) => (
                <PaddingContainer key={project.id} top="5rem" bottom="5rem">
                    <Projects project={project}/>
                </PaddingContainer>
            ))}

        </PaddingContainer>
     );
}
 
export default MyProjects;