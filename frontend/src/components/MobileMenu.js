import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { artists } from 'reducers/artists'
import { basket } from 'reducers/basket'  
import { 
  StyledLink,
  BigTitle,
  Title,
  SubTitle,
  Text 
} from 'Styling'

export const MobileMenu = () => {
  const dispatch = useDispatch()
  const accessToken = useSelector((store) => store.artists.accessToken)
  const [check, setCheck] = useState(false)

  const menuClick = () => setCheck(!check)

  return (
    <nav>
      <MenuWrapper>
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
              <StyledLink to="/register" onClick={menuClick}>
                <MenuItem>Log out</MenuItem>
              </StyledLink>
            </>
          }

          {accessToken &&
            <>
              <StyledLink to="/profil" onClick={menuClick}>
                <MenuItem>Profile</MenuItem>
              </StyledLink>
              <StyledLink to="/basket" onClick={menuClick}>
                <MenuItem>Basket</MenuItem>
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
      </MenuWrapper>
    </nav>
  )
}

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 26px;
  height: 26px;
  margin: 11px 0 0 15px;
`
const MenuItem = styled.p`
  text-decoration: none;
  font-size: 22px;
  margin: 10px 0 0 15px;
`
