import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks, NavbarWalletBtn, NavbarWalletBtnConnect, NavLogo } from './NavbarElements';
import Connect from '../Phantom/Connect';

const Navbar = ({ toggle }) => {

    const [ scrollNav, setScrollNav ] = useState(false) 

    const changeNav = () => {
        if( window.scrollY >= 80 ) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect( () => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>BUBBLEGIRLS</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="1" smooth={true} duration={500} spy={true} exact="true" offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="2" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Roadmap</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavbarWalletBtn>
                        <NavbarWalletBtnConnect onClick={Connect}>Connect Wallet</NavbarWalletBtnConnect>
                    </NavbarWalletBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    );
};

export default Navbar;
