import { motion } from 'framer-motion';
import React from 'react';

// Global Styles Import
import {
    FlexContainer,
    PaddingContainer,
    Heading,
    IconContainer,
    ParaText,
    BlueText
} from '../styles/Global.styled';

// My Skills Styles Import
import {
    SkillsCard,
    SkillsContainer
} from '../styles/MySkills.styled';
import { Skills } from '../utils/Data';
import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';
const MySkills = () => {
    return ( 
        <PaddingContainer
            id='Skills'
            top='10%'
            bottom='10%'
            right='5%'
            responsiveLeft='1rem'
            responsiveRight='1rem'
        >
            <FlexContainer 
                responsiveFlex 
                fullWidthChild
                responsiveDirection="column-reverse"
            >
                {/* --Left Section-- */}
                <SkillsContainer
                    as={motion.div}
                    variants={fadeInLeftVariant}
                    initial="hidden"
                    whileInView="visible" 
                >
                    {Skills.map((skill) => (
                        <SkillsCard id={skill.id}>
                            <IconContainer size='5rem' color='blue'>
                                {skill.icon}
                            </IconContainer>
                            <Heading as='h4' size='h4'>
                                {skill.tech}
                            </Heading>
                        </SkillsCard>
                    ))}
                </SkillsContainer>

                {/* --Right Section-- */}
                <motion.div
                    variants={fadeInRightVariant}
                    initial="hidden"
                    whileInView="visible" 
                >
                    <Heading as='h4' size='h4'>
                        MY SKILLS
                    </Heading>
                    <Heading as='h2' size='h2' top='0.5rem'>
                        What <BlueText>I can do.</BlueText>
                    </Heading>
                    <ParaText top='2rem' bottom='1.5rem'>
                        An enthusiastic and determinedJava developer with thespecialization in Java, SpringBoot. Self motivated, keen tolearn and eager to build newand creative web products asper guidelines. Looking forwardto work in an organization witha challenging environment todevelop gained skills andcontribute to the organization’sgrowth.
                    </ParaText>
                    <ParaText top='2rem' bottom='1.5rem'>
                        An enthusiastic and determinedJava developer with thespecialization in Java, SpringBoot. Self motivated, keen tolearn and eager to build newand creative web products asper guidelines. Looking forwardto work in an organization witha challenging environment todevelop gained skills andcontribute to the organization’sgrowth.
                    </ParaText>
                </motion.div>
            </FlexContainer>
        </PaddingContainer>
     );
}
 
export default MySkills;