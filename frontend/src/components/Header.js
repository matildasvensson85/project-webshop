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
            {/* <Link to='/cart'> */}
              <Cart>C</Cart>
            {/* </Link> */}
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
  /* background-color: red; */
  display: flex;
  justify-content: center;
  margin: 10px 20px 10px 20px;
  width: 100%;
`
const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1300px;
`
const LogoWrapper = styled.div`
`
const Logo = styled.h4`
  margin: 0;
  cursor: pointer;
  @media (min-width: 768px) {
    font-size: 25px;
  }
`
const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const Cart = styled.h4`
  margin: 0;
  cursor: pointer;
`
const Hamburger = styled.h4`
  margin: 0 0 0 15px;
  cursor: pointer;
  @media (min-width: 1024px) {
    display: none;
    
  }
`
const DesktopNav = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
  }
`
const MenuItem = styled.p`
  font-size: 16px;
  margin: 0 0 0 15px;
  cursor: pointer;
`

