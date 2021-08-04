import React, { FC, useState, useEffect, useCallback } from 'react';
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

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [changeNav]);
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/'>Landing</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='about'>About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='discover'>Discover</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='services'>Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='signup'>Sign Up</NavLinks>
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
