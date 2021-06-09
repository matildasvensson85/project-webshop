import { useSelector, useDispatch, batch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import styled from 'styled-components';

// import {user} from '../reducers/user';


export const Register = () => {

  return (
    <>
      <PageWrapper>
          <Title tabIndex='0'>Register to sell your art</Title>
          {/* <StyledFrame> */}
            <Form>
                  <Label tabIndex='0' aria-label='enter your name'>Name</Label>
                  <Input 
                    type='text'
                    // value={}
                    // onChange  
                  />
                  <Label tabIndex='0' aria-label='enter your e-mail'>E-mail</Label>
                  <Input 
                    type='email'
                    // value={}
                    // onChange  
                  />
                  <Label tabIndex='0' aria-label='enter your password'>Password</Label>
                  <Input 
                    type='password'
                    // value={}
                    // onChange  
                  />
                  {/* <StyledCheckbox type='checkbox'/>
                  <StyledLabel> I agree with the Terms and Conditions</StyledLabel> */}
                  <RegisterButton type='submit'>Register</RegisterButton>
                  <Text tabIndex='0'>Already have an account?</Text>
                  <LinkText tabIndex='0'>Sign In</LinkText>
              </Form>
            {/* </StyledFrame> */}
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
// const StyledFrame = styled.div`
//   @media (min-width: 768px) {
//   }
//   @media (min-width: 1024px) {
//   }
// `
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 450px;
  @media (min-width: 768px) {
    background-color: white;
    padding: 30px;
    width: 450px;
    height: 365px;
  }
`
const Label = styled.label`
  color: #4F4F4F;
  width: 100%;
  font-size: 14px;
  margin-bottom: 7px;
`
const Input = styled.input`
  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #1D47B2;
  width: 100%;
  margin-bottom: 30px;
  font-size: 16px; 
  background-color: transparent;
  padding: 7px 1px 7px 1px;
  cursor: pointer;
  :focus {
    border: none;
    background-color: peachpuff;
    color: #3F3327;
  }
`
const RegisterButton = styled.button`
  color: white;
  background-color: #1D47B2;
  border-radius: 25px;
  width: 130px;
  height: 45px;
  border: none;
  margin: 25px 0 10px 0;
  font-size: 16px;
  margin: 0 0 20px 0;
  cursor: pointer;
  :hover {
    background-color: #B72C72;
  }
`
const Text = styled.p`
font-size: 14px;
margin: 0;
line-height: 19px;
`

const LinkText = styled(Text)`
  font-weight: 600;
  color: black;
  margin: 0;
  cursor: pointer;
  :hover {
    color: #1D47B2;
  }
`