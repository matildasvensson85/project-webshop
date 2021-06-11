import { useSelector, useDispatch, batch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import styled from 'styled-components';

import { InputLine } from 'components/InputLine'
import { Button} from 'components/Button'

export const Register = () => {

  return (
    <>
      <PageWrapper>
        <Title tabIndex='0'>Register to sell your art</Title>
        <FormWrapper>
          <InputLine
              label='Username' />
            <InputLine
              label='E-mail' />
            <InputLine
              label='Password' />
            <BottomWrapper>
              <Button buttonText='Register' />
              <SmallText tabIndex='0'>Already have an account?</SmallText>
              <LinkText tabIndex='0'>Sign In</LinkText>
            </BottomWrapper>
        </FormWrapper>
      </PageWrapper>
    </>
  ) 
}

const PageWrapper = styled.section`
  background-color: #F7D5DF;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px 20px 20px;
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
  margin: 0 20px 50px 20px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 35px;
  }
`
const FormWrapper = styled.div`
  @media (min-width: 1024px) {
    background-color: white;
    padding: 30px;
  }
`

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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