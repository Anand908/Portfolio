import React from 'react';

// import Global styles
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer
} from '../styles/Global.styled';

// import Showcase styles
import { 
    ShowcaseImageCard,
    ShowcaseParticleContainer,
    Particle
 } from '../styles/Showcase.styled';    

//  import react-icons
import {BsLinkedin, BsTwitter, BsYoutube, BsInstagram} from 'react-icons/bs';

//  import assets
import ShowcaseImg from '../assets/img.png';
import Logo from '../assets/logo.png';
import { motion } from 'framer-motion';

import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';

const Showcase = () => {
    return(
        <PaddingContainer
            id='Home'    
            left='5%'
            right='10%'
            top='15%'
            bottom='10%'
            responsiveLeft='1rem'
            responsiveRight='1rem'
            responsiveTop='8rem'
        >
            <FlexContainer align="left" fullWidthChild>
                {/* --Left Conetent-- */}
                <motion.div
                    variants={fadeInLeftVariant}
                    initial="hidden"
                    whileInView="visible"
                >
                    <Heading as="h4" size="h4">Hello!</Heading>

                    <Heading
                        as="h1"
                        size="h1"
                        top="0.5rem"
                        bottom="1rem"
                    >
                        I'm <BlueText>Anand Kumar</BlueText>
                    </Heading>

                    <Heading as="h3" size="h3">
                        I'm a <BlueText> Frontend Developer</BlueText>
                    </Heading>

                    <ParaText 
                        top="0.5rem"
                        bottom="3rem">
                        An enthusiastic and determined Java developer with the specialization in Java, Spring Boot. Self motivated, keen to learn and eager to build new and creative web products as per guidelines.
                    </ParaText>

                    {/* --Social-icons-- */}
                    <FlexContainer gap="20px" responsiveFlex>

                        <IconContainer color='white' size='1.5rem'>
                            <BsLinkedin/>
                        </IconContainer>

                        <IconContainer color='white' size='1.5rem'>
                            <BsTwitter/>
                        </IconContainer>

                        <IconContainer color='white' size='1.5rem'>
                            <BsYoutube/>
                        </IconContainer>

                        <IconContainer color='white' size='1.5rem'>
                            <BsInstagram/>
                        </IconContainer>

                    </FlexContainer>
                </motion.div>
                
                {/* --Right Content-- */}
                <FlexContainer
                    as={motion.div}
                    variants={fadeInRightVariant}
                    initial="hidden"
                    whileInView="visible" 
                    justify="flex-end"
                >
                    <ShowcaseParticleContainer>
                        <ShowcaseImageCard>
                            <img src={ShowcaseImg} alt="Showcase" />
                        </ShowcaseImageCard>

                        <Particle
                            as={motion.img}
                            animate={{
                                x: [0,100,0],
                                rotate: 360,
                                scale: [1,0.5,1],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                            }}
                            src={Logo}
                            alt='Particle'
                            top='-50px'
                            left='20px'
                            rotate='-50deg'
                            
                            responsiveTop='-25px'
                        />    
                        <Particle
                            as={motion.img}
                            animate={{
                                y: [0,100,0],
                                rotate: 360,
                                scale: [1,0.8,1],
                            }}
                            transition={{
                                duration: 18,
                                repeat: Infinity,
                            }}
                            src={Logo}
                            alt='Particle'
                            top='50px'
                            right='-70px'
                            rotate='0deg'
                            
                            responsiveTop='180px'
                            responsiveRight='-20px'
                        />    
                        <Particle
                            as={motion.img}
                            animate={{
                                y: [0,-100,0],
                                rotate: 360,
                                scale: [1,0.9,1],
                            }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                            }}
                            src={Logo}
                            alt='Particle'
                            bottom='10px'
                            left='-70px'
                            rotate='-30deg'
                            
                            responsiveLeft='-30px'
                        />    
                    </ShowcaseParticleContainer>
                </FlexContainer>
            </FlexContainer>
        </PaddingContainer>
    );
}

export default Showcase;