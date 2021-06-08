import { useSelector, useDispatch, batch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import styled from 'styled-components';

// import {user} from '../reducers/user';


export const Register = () => {

  return (
    <>
      <StyledWrapper>
        <StyledTitle tabIndex='0'>Register to sell your art</StyledTitle>
        <StyledFrame>
          <StyledForm>
                <StyledLabel tabIndex='0' aria-label='enter your name'>Name</StyledLabel>
                <StyledInput 
                  type='text'
                  // value={}
                  // onChange  
                />
                <StyledLabel tabIndex='0' aria-label='enter your e-mail'>E-mail</StyledLabel>
                <StyledInput 
                  type='email'
                  // value={}
                  // onChange  
                />
                <StyledLabel tabIndex='0' aria-label='enter your password'>Password</StyledLabel>
                <StyledInput 
                  type='password'
                  // value={}
                  // onChange  
                />
                {/* <StyledCheckbox type='checkbox'/>
                <StyledLabel> I agree with the Terms and Conditions</StyledLabel> */}
                <StyledButton type='submit'>Register</StyledButton>
                <StyledText tabIndex='0'>Already have an account?</StyledText>
                <StyledLinkText tabIndex='0'>Sign In</StyledLinkText>

            </StyledForm>
           </StyledFrame>

      </StyledWrapper>
    </>
  ) 
}

const StyledWrapper = styled.section`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  background-color: white;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    justify-content: center;
    padding-top: 0;
    background-image: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.2)), url('https://images.unsplash.com/photo-1602172694659-d6a5fb605c07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80');
  }
  @media (min-width: 1200px) {
  }
`
const StyledTitle = styled.h2`
  color: black;
  font-size: 25px;
  margin: 0 0 50px 0;
  @media (min-width: 768px) {
    font-size: 40px;
    margin: 0 0 20px 0;
  }
`
const StyledFrame = styled.div`

  @media (min-width: 768px) {

  }
  @media (min-width: 1200px) {
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  width: 90vw;
  
  @media (min-width: 768px) {
    margin: 10vw;
    background-color: white;
    padding: 30px;
    width: 330px;
    height: 365px;
  }
  @media (min-width: 1200px) {
  }
`
const StyledLabel = styled.label`
  color: #4F4F4F;
  width: 100%;
  font-size: 14px;
  margin-bottom: 7px;

  @media (min-width: 768px) {
  }
  @media (min-width: 1200px) {

  }
`
const StyledInput = styled.input`
  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #1D47B2;
  width: 100%;
  margin-bottom: 30px;
  font-size: 16px; 
  background-color: transparent;
  /* color: #AA4D24; */
  padding: 7px 1px 7px 1px;
  cursor: pointer;
  :focus {
    border: none;
    background-color: peachpuff;
    color: #3F3327;
  }
  @media (min-width: 768px) {
    }
  @media (min-width: 1200px) {
    }
`
const StyledButton = styled.button`
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
const StyledText = styled.p`
font-size: 14px;
margin: 0;
line-height: 19px;
`

const StyledLinkText = styled(StyledText)`
  font-weight: 600;
  color: black;
  margin: 0;
  cursor: pointer;
  :hover {
    color: #1D47B2;
  }
`