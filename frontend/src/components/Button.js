import { useSelector, useDispatch, batch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import styled from 'styled-components';

export const Button = ({ buttonText }) => {

  return (
    <>
      <StyledButton 
        type='submit'
        >
        {buttonText}
      </StyledButton>
    </>
  ) 
}

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