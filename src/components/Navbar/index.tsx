import React, { FC, useState, useEffect, useCallback } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from './Navbar.style';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { NavbarType } from '../../types/NavbarType';

const Navbar: FC<NavbarType> = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = useCallback(() => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }, []);

  const toggleHome = useCallback(() => {
    scroll.scrollToTop();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [changeNav]);
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav onClick={toggleHome} scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/'>Landing</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='about' smooth duration={500} spy offset={-80}>
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='discover' smooth duration={500} spy offset={-80}>
                  Discover
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='services' smooth duration={500} spy offset={-80}>
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='signup' smooth duration={500} spy offset={-80}>
                  Sign Up
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
