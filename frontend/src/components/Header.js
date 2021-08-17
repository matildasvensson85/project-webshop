import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import { artists } from 'reducers/artists'
import { basket } from 'reducers/basket'
import { Hamburger } from 'components/Hamburger'
import { FaShoppingCart } from 'react-icons/fa';
import { StyledLink } from 'Styling'

export const Header = () => {

  const accessToken = useSelector((store) => store.artists.accessToken)
  const basketItems = useSelector((store) => store.basket.items)
  const dispatch = useDispatch()

  return (
    <>
      <HeaderWrapper>
        <NavWrapper>
          <LogoWrapper>
            <StyledLink to='/'>
              <Logo>Artists Collection</Logo>
            </StyledLink>
          </LogoWrapper>
          <MenuWrapper>
            {accessToken && (
              <>
              <StyledLink to='/basket'>
                <CartWrapper>
                  <Cart>
                    <FaShoppingCart /> 
                  </Cart>
                  <Amount>
                    ({basketItems.length})
                  </Amount>
                </CartWrapper>
              </StyledLink>
              </>
            )}
            <HamburgerWrapper>
              <Hamburger />
            </HamburgerWrapper>
            <DesktopNav>
              <StyledLink to='/products'>
                <MenuItem>Products</MenuItem>
              </StyledLink>
              <StyledLink to='/artists'>
                <MenuItem>Artists</MenuItem>
              </StyledLink>
              {!accessToken && (
                <>
                  <StyledLink to='/register'>
                    <MenuItem>Register</MenuItem>
                  </StyledLink>
                </>
              )}
              {accessToken && (
                <>
                  <StyledLink to='/profile'>
                    <MenuItem>Profile</MenuItem>
                  </StyledLink>
                  <StyledLink to='/products'>
                  <MenuItem
                      onClick={() => {
                        dispatch(artists.actions.setLogOut())
                        dispatch(basket.actions.setLogOut())}}>
                      Log out
                    </MenuItem>
                  </StyledLink>
                </>
              )}

            </DesktopNav>
          </MenuWrapper>
        </NavWrapper>
      </HeaderWrapper>
    </>
  )
}

const HeaderWrapper = styled.header`
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
  margin: 0 0 0 2px;
  cursor: pointer;
  font-family: 'Frank Ruhl Libre', serif;
  font-size: 18px;
  line-height: 120%;
  color: black;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`
const MenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
`
const CartWrapper= styled.div`
  text-decoration: none;
  display: flex;
  margin: 9px 0 0 0;
  
  @media (max-width: 768px) {
    margin: 9px 34px 0 0;
  
`
const Cart = styled.div`
  text-decoration: none;
  margin: 1px 3px 0 0;
  cursor: pointer;
`
const Amount = styled.div`
`
const HamburgerWrapper = styled.div`
`
const DesktopNav = styled.div`
  text-decoration: none;
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`
const MenuItem = styled.p`
  text-decoration: none;
  font-size: 16px;
  margin: 10px 0 0 15px;
`
