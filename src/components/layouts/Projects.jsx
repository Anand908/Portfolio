import { motion } from 'framer-motion';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

// Global Styles imports
import {
    PaddingContainer,
    Heading,
    FlexContainer,
    ParaText,
    IconContainer,
    Button,
} from '../../styles/Global.styled';

import { TechstackCard, ProjectImageContainer, ProjectImage } from '../../styles/MyProjects.styled';
import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variants';

const Projects = ({project}) => {
    return ( 
        <FlexContainer 
            direction={project.reverse ? 'row-reverse' : 'false'}
            fullWidthChild
        >
            {/* --Left Section Project Content-- */}
            <motion.div
                variants={project.reverse ? fadeInRightVariant : fadeInLeftVariant}
                initial="hidden"
                whileInView="visible"
            >
                <FlexContainer align="center" gap="1rem">
                    <Heading as='h3' size="h3" bottom="1rem">
                        {project.project_name}
                    </Heading>
                    <IconContainer color='blue' size='2rem'>
                        <FaGithub/>
                    </IconContainer>
                </FlexContainer>

                <PaddingContainer top='1rem'>
                    <FlexContainer gap='1.5rem'>
                        {project.tech_stack.map((stack) => (
                            <TechstackCard>{stack}</TechstackCard>
                        ))}
                    </FlexContainer>
                </PaddingContainer>

                <ParaText top='1.5rem' bottom='2rem'>
                    {project.project_desc}
                </ParaText>
                <Button>Visit Website</Button>
            </motion.div>

            {/* --Right Section Project Image-- */}
            <ProjectImageContainer 
                as={motion.div}
                variants={project.reverse ? fadeInLeftVariant : fadeInRightVariant}
                initial="hidden"
                whileInView="visible"
                justify={project.reverse ? "flex-start" : "flex-end"}
            >
                <ProjectImage src={project.project_img} alt={project.project_name} />
            </ProjectImageContainer>
        </FlexContainer>
     );
}
 
export default Projects;