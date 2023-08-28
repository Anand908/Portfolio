import React from 'react';
// Global styled import
import { 
    PaddingContainer,
    Heading,
    BlueText,
    FlexContainer,
    Button     
} from '../styles/Global.styled';

// Footer styled import
import {
    ContactForm,
    FormLabel,
    FormInput
} from '../styles/Footer.styled';
import { fadeInBottmVariant } from '../utils/Variants';
import { motion } from 'framer-motion';

import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Footer = () => {

    // send Mail
    const form = useRef();

    const sendMail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_74i6q3v', 'template_h6tkyz9', form.current, 'OdmTdMknZDpFU9HUZ').then(
            (result) => {
                alert("Thanks for your Message");
            },
            (error) => {
                alert("Message din't sent");
            }
        );
    }

    return ( 
        <PaddingContainer
            as={motion.div}
            variants={fadeInBottmVariant}
            initial="hidden"
            whileInView="visible"
            id='Contact'
            top='5%'
            bottom='10%'
            left="5%"
            right="5%"
        >
            <Heading as='h4' size='h4' align='center'>
                MY CONTACT
            </Heading>

            <Heading 
                as='h2' 
                size='h2' 
                align='center' 
                top='0.5rem'
            >
                Contact <BlueText>Me Here</BlueText>
            </Heading>

            <PaddingContainer top='3rem'>
                <FlexContainer justify='center'>
                    <ContactForm ref={form} onSubmit={sendMail}>
                        <PaddingContainer bottom='2rem'>
                            <FormLabel>Name:</FormLabel>
                            <FormInput 
                                type='text'
                                name='name'
                                placeholder='Enter your name' 
                            />
                        </PaddingContainer>
                        <PaddingContainer bottom='2rem'>
                            <FormLabel>Email:</FormLabel>
                            <FormInput 
                                type='email'
                                name='email'
                                placeholder='Enter your Email' 
                            />
                        </PaddingContainer>
                        <PaddingContainer bottom='2rem'>
                            <FormLabel>Message:</FormLabel>
                            <FormInput 
                                as='textarea'
                                name='message'
                                textArea
                                placeholder='Enter your Message' 
                            />
                        </PaddingContainer>
                        <FlexContainer justify='center' 
                            responsiveFlex>
                            <Button type='submit'>Send Message</Button>
                        </FlexContainer>
                    </ContactForm>
                </FlexContainer>
            </PaddingContainer>
        </PaddingContainer>
     );
}
 
export default Footer;