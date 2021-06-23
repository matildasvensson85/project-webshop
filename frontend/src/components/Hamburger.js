import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { user } from '../reducers/user'



// const MobileNav = styled.ul`
//   position: fixed;
//   width: 150px;
//   height: 100vh;
//   margin: -100px 0 0 -50px;
//   padding: 50px 50px 0 50px;
//   padding-top: 100px;
//   background: #ededed;

//   list-style-type: none;
//   -webkit-font-smoothing: antialiased;
  
//   transform-origin: 0% 0%;
//   transform: translate(-100%, 0%);
  
//   transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
// `
// const Li = styled.li`
//   padding: 10px 0;
//   font-size: 20px;
// `
// const Input = styled.input`
//   display: block;
//   width: 25px;
//   height: 25px;
//   position: absolute;
//   top: -7px;
//   left: -5px;

//   cursor: pointer;

//   opacity: 0;
//   z-index: 2;

//   -webkit-touch-callout: none;

//   &:checked ~ ${Span} {
//     opacity: 1;
//     transform: rotate(45deg) translate(-2px, -1px);
//     background: #1a1a1a;
//   }

//   &:checked ~ span:nth-last-child(3) {
//     opacity: 0;
//     transform: rotate(0deg) scale(0.2, 0.2);
//   }

//   &:checked ~ span:nth-last-child(2) {
//     transform: rotate(-45deg) translate(0, -1px);
//   }

//   &:checked ~ ${MobileNav} {
//     transform: none;
//   }
// `

export const Hamburger = () => {
  const dispatch = useDispatch()
  const accessToken = useSelector((store) => store.artists.accessToken)
  // const [check, setCheck] = useState(false)

  // const menuClick = () => setCheck(!check)

  // const handleSignOut = () => {
  //   // dispatch(user.actions.logout())
  // }

  return (
    <nav>
      <MenuWrapper>
        {/* <Input type="checkbox" checked={check} onChange={menuClick} /> */}
        <Line></Line>
        <Line></Line>
        <Line></Line>
        {/* <MobileNav>
          <Link to="/" onClick={menuClick}>
            <Li>Home</Li>
          </Link>
          <Link to="/cart" onClick={menuClick}>
            <Li>Cart</Li>
          </Link>
          <Link to="/products" onClick={menuClick}>
            <Li>Products</Li>
          </Link>
          <Link to="/market" onClick={menuClick}>
            <Li>Market</Li>
          </Link> */}

          {/* {!accessToken &&
            <>
              <Link to="/login" onClick={menuClick}>
                <Li>Log in</Li>
              </Link>
              <Link to="/signup" onClick={menuClick}>
                <Li>Sign up</Li>
              </Link>
            </>
          }

          {accessToken &&
            <>
              <Link to="/sell" onClick={menuClick}>
                <Li>List product</Li>
              </Link>
              <Link to="/profilepage" onClick={menuClick}>
                <Li>Profile</Li>
              </Link>
              <Link to="/" onClick={menuClick}>
                <Li onClick={handleSignOut}>Sign out</Li>
              </Link>
            </>
          }
        </MobileNav> */}
      </MenuWrapper>
    </nav>
  )
}

const MenuWrapper = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  /* display: block;
  position: fixed; */
  /* top: 10px;
  right: 20px; */
  width: 26px;
  height: 26px;
  /* padding-top: 10px; */
  /* padding-left: 4px; */
  margin: 11px 0 0 15px;
  /* border-radius: 50px; */
  /* background: rgba(255,255,255, 0.4); */
  
  /* z-index: 2;
  
  -webkit-user-select: none;
  user-select: none; */

  /* a {
    text-decoration: none;
    color: #232323;
    transition: color 0.3s ease;
  } */

  /* a:hover {
    color: #fb958b;
  } */

  @media (min-width: 768px) {
    display: none;
  }
`
const Line = styled.span`
  /* display: block; */
  /* display: flex; */
  border: solid 1px black;
  box-sizing: border-box;
  width: 22px;
  height: 2px;
  margin: 0 0 5px 0;
  border-radius: 1px;
  /* position: relative; */
  background: #1a1a1a;
  
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