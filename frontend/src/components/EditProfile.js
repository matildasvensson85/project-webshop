import { useSelector, useDispatch, batch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import styled from 'styled-components';

import { InputLine } from 'components/InputLine'
import { InputForm } from 'components/InputForm'
import { Button } from 'components/Button'
import { Accordion } from 'components/Accordion'
import { Sell } from 'components/Sell'


export const EditProfile = () => {

  return (
    <>
      <PageWrapper>
        <InputLine
          label='Name' />
        <InputForm
          label='Description' />
        <Button buttonText='Save' />
      </PageWrapper>
    </>
  ) 
}

const PageWrapper = styled.section`
  background-color: #F7D5DF;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 20px 20px;
  min-height: 90vh;

  @media (min-width: 768px) {
    padding-top: 90px;
    background-image: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.2)), url('https://images.unsplash.com/photo-1602172694659-d6a5fb605c07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
`
const Title = styled.h2`
  color: black;
  font-size: 25px;
  margin: 0 20px 20px 20px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 35px;
  }
`
const BodyText = styled.p`
  font-size: 16px;
  margin: 0 0 50px 0;
  line-height: 130%;
  text-align: center;
  max-width: 300px;
`
const SmallText = styled.p`
font-size: 14px;
margin: 0;
line-height: 19px;
`
const LinkText = styled(SmallText)`
  font-weight: 600;
  color: black;
  margin: 0;
  cursor: pointer;
  :hover {
    color: #1D47B2;
  }
`