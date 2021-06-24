import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { artists } from 'reducers/artists'
import { basket } from 'reducers/basket'  
import { MobileMenu } from 'components/MobileMenu'  
import { 
  StyledLink,
  BigTitle,
  Title,
  SubTitle,
  Text 
} from 'Styling'

export const Hamburger = () => {
  const dispatch = useDispatch()
  const accessToken = useSelector((store) => store.artists.accessToken)
  const [check, setCheck] = useState(false)

  const menuClick = () => setCheck(!check)

  return (
    <nav>
      <MenuWrapper>
        <Line></Line>
        <Line></Line>
        <Line></Line>
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
  border: none;
`
const Line = styled.span`
  border: solid 1px black;
  box-sizing: border-box;
  width: 22px;
  height: 2px;
  margin: 0 0 5px 0;
  border-radius: 1px;
`