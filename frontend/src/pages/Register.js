import { useSelector, useDispatch, batch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import styled from 'styled-components';

// import {user} from '../reducers/user';


export const Register = () => {

  return (
    <>
      <StyledPage>
        <h2>Register to sell your art</h2>
        <StyledForm>
          <label>Name</label>
          <input 
            type='text'
            // value={}
            // onChange  
          />
          <label>E-mail</label>
          <input 
            type='email'
            // value={}
            // onChange  
          />
          <label>Password</label>
          <input
            type='password'
            // value={}
            // onChange  
          />
          <input type='checkbox'/>
          <label> I agree with the Terms and Conditions</label>
        </StyledForm>
      </StyledPage>
    </>
  )

}

const StyledPage = styled.div`
  /* background-color: beige; */
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledForm = styled.form`
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  /* width: 100px; */
  align-items: center;
  padding: 20px;
  border-radius: 10px;

`