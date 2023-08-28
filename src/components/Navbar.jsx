import React, { useEffect, useState } from 'react';

//  Global styled imports
import { 
    PaddingContainer,
    FlexContainer,
    Container,
    BlueText
} from '../styles/Global.styled';

// Navbar Styled imports
import { 
    NavebarContainer,
    Logo, 
    MenuIcon 
} from '../styles/Navbar.styled';

import NavMenu from './layouts/NavMenu';

import { GiHamburgerMenu } from 'react-icons/gi';
import { theme } from '../utils/Theme';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
    
    const [openMenu, setOpenMenu] = useState(false);
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        // onScroll funtion
        const onScroll = () => {
            window.pageYOffset > 50 ? setSticky(true) : setSticky(false);
        }

        window.addEventListener('scroll', onScroll);

        // Cleanup
        return () => window.removeEventListener('scroll', onScroll);
    },[])

    return ( 
        <NavebarContainer 
            bgColor={ sticky ? theme.color.primary : 'transparent'}
        >
            <PaddingContainer
                top='1.2rem'
                bottom='1.2rem'
                right='5%'
                left='5%'
                responsiveLeft='1rem'
                responsiveRight='1rem'
            >
                <Container>
                    <FlexContainer justify='space-between' responsiveFlex>
                        {/* -- Left Logo -- */}
                        <Logo>
                            Pof<BlueText>t.</BlueText>
                        </Logo>

                        {/* -- Right Menu Icon -- */}
                        <MenuIcon 
                            as={motion.a}
                            whileHover={{scale: 1.2}}
                            onClick={() => setOpenMenu(true)}
                        >
                            <GiHamburgerMenu />
                        </MenuIcon>

                    </FlexContainer>
                </Container>

                <AnimatePresence>
                    {openMenu && <NavMenu setOpenMenu={setOpenMenu}/>}
                </AnimatePresence>

            </PaddingContainer>
        </NavebarContainer>
     );
}
 
export default Navbar;