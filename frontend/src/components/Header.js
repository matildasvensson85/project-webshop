import { useSelector, useDispatch, batch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';

// import {user} from '../reducers/user';
// import styled from 'styled-components';

export const Header = () => {

  return (
    <>
      <HeaderWrapper>
        <NavWrapper>
          <LogoWrapper>
            <Link to='/'>
              <Logo>Artist's Collection</Logo>
            </Link>
          </LogoWrapper>
          <MenuWrapper>
            <Link to='/cart'>
              <Cart>C</Cart>
            </Link>
            <Hamburger>H</Hamburger>
            <DesktopNav>
              {/* <Link to='/products'> */}
                <MenuItem>Products</MenuItem>
              {/* </Link> */}
              {/* <Link to='/register'> */}
                <MenuItem>Register</MenuItem>
              {/* </Link> */}
              {/* <Link to='/login'> */}
                <MenuItem>Log in</MenuItem>
              {/* </Link> */}
            </DesktopNav>
          </MenuWrapper>
        </NavWrapper>
      </HeaderWrapper>
    </>
  )

}

const HeaderWrapper = styled.header`
background-color: papayawhip;
  margin: 10px 20px 10px 20px;
  display: flex;
  justify-content: center;
  width: 100%;

  /* justify-content: space-between; */
  align-items: center;
  /* max-width: 1300px; */

  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`
const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
`
const LogoWrapper = styled.div`
  background-color: pink;
`
const Logo = styled.h4`
  margin: 0;

  @media (min-width: 768px) {
    font-size: 25px;
  }
`
const MenuWrapper = styled.nav`
  background-color: red;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Cart = styled.h4`
  margin-right: 15px;
`
const Hamburger = styled.h4`
  @media (min-width: 1024px) {
    display: none;
  }
`
const DesktopNav = styled.div`
  color: red;
  display: flex;
  /* display: none; */
  /* @media (min-width: 1024px) {
    display: inline;
  } */
`
const MenuItem = styled.p`
  font-size: 16px;
  color: green;
  @media (min-width: 1024px) {
    /* display: none; */
  }
`

