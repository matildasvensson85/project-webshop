import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { artists } from 'reducers/artists'
import { basket } from 'reducers/basket'   
import { StyledLink } from 'Styling'

export const Hamburger = () => {
  const dispatch = useDispatch()
  const accessToken = useSelector((store) => store.artists.accessToken)
  const [check, setCheck] = useState(false)

  const menuClick = () => setCheck(!check)

  return (
    <nav>
      <MenuWrapper>
        <Input type="checkbox" checked={check} onChange={menuClick} />
        <Line></Line>
        <Line></Line>
        <Line></Line>

        <MobileNav>
          <StyledLink to="/products" onClick={menuClick}>
            <MenuItem>Products</MenuItem>
          </StyledLink>
          <StyledLink to="/artists" onClick={menuClick}>
            <MenuItem>Artists</MenuItem>
          </StyledLink>

          {!accessToken &&
            <>
              <StyledLink to="/register" onClick={menuClick}>
                <MenuItem>Register</MenuItem>
              </StyledLink>
            </>
          }

          {accessToken &&
            <>
              <StyledLink to="basket" onClick={menuClick}>
                <MenuItem>Basket</MenuItem>
              </StyledLink>
              <StyledLink to="/profile" onClick={menuClick}>
                <MenuItem>Profile</MenuItem>
              </StyledLink>
              <StyledLink to="/products" onClick={menuClick}>
                <MenuItem
                      onClick={() => {
                        dispatch(artists.actions.setLogOut())
                        dispatch(basket.actions.setLogOut())}}>
                      Log out
                </MenuItem>
              </StyledLink>
            </>
          }
        </MobileNav>
      </MenuWrapper>
    </nav>
  )
}

const MenuWrapper = styled.div`
  display: block;
  position: fixed;
  top: 12px;
  right: 18px;
  width: 26px;
  height: 26px;
  padding-top: 10px;
  padding-left: 4px;
  z-index: 2;
  -webkit-user-select: none;
  user-select: none;
  a {
    text-decoration: none;
    color: #232323;
    transition: color 0.3s ease;
  }
  a:hover {
    color: #fb958b;
  }
  @media (min-width: 768px) {
    display: none;
  }
`
const Line = styled.span`
  display: block;
  width: 21px;
  height: 2px;
  margin-bottom: 3px;
  border-radius: 1px;
  position: relative;
  background: black;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
  &:first-child {
    transform-origin: 0% 0%;
  }
  &:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
`
const MobileNav = styled.ul`
  position: fixed;
  top: 0;
  right: 0px;
  width: 150px;
  height: 100vh;
  background-color: white;
  margin: -50px 0 0 -50px;
  padding: 100px 50px 0 50px;
  background: white;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(+100%, 0%);
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
`
const Input = styled.input`
  display: block;
  width: 25px;
  height: 25px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
  -webkit-touch-callout: none;
  &:checked ~ ${Line} {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
  }
  &:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  &:checked ~ span:nth-last-child(2) {
    opacity: 1;
    transform: rotate(-45deg) translate(0, -1px);
  }
  &:checked ~ ${MobileNav} {
    transform: none;
  }
`
const MenuItem = styled.p`
  text-decoration: none;
  font-size: 16px;
  margin: 10px 0 0 15px;
  :hover {
    color: #B72C72;
    font-weight: 500;
  }
`
