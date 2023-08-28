import React from 'react';

// Global Styles Imports
import { 
    PaddingContainer,
    FlexContainer
} from '../../styles/Global.styled';

// Navbar Style import
import { 
    MenuIcon, 
    NavMenuContainer,
    MenuItem
 } from '../../styles/Navbar.styled';

import {AiOutlineClose} from 'react-icons/ai';
import { NavLinks } from '../../utils/Data';
import { slideInOut } from '../../utils/Variants';
import { motion } from 'framer-motion';

const NavMenu = ({setOpenMenu}) => {
    return ( 
        <NavMenuContainer
            as={motion.div}
            variants={slideInOut}
            initial="hidden"
            animate="visible"
            exit='exit'
        >
            {/* -- Close button -- */}
            <PaddingContainer 
                left='5%'
                right='5%'
                top='2rem'
            >
                <FlexContainer justify='flex-end' responsiveFlex>
                    <MenuIcon
                        as={motion.a}
                        whileHover={{scale: 1.2}}
                    >
                        <AiOutlineClose onClick={() => setOpenMenu(false)}/>
                    </MenuIcon>
                </FlexContainer>
            </PaddingContainer>

            {/* -- Menu Items-- */}
            <PaddingContainer top='8%'>
                <FlexContainer direction='column' align='center' responsiveFlex>

                    {NavLinks.map((link) => (
                        <MenuItem
                            as={motion.a}
                            whileHover={{scale: 1.2}}                    
                            key={link.id}
                            href= {`#${link.href}`}
                            onClick={() => setOpenMenu(false)}
                        >
                            {link.name}
                        </MenuItem>
                    ))}

                </FlexContainer>
            </PaddingContainer>
        </NavMenuContainer>
     );
}
 
export default NavMenu;