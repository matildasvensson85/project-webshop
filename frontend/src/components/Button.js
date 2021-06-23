import React from 'react';
import styled from 'styled-components';

export const Button = ({ buttonText, onClick }) => {

  return (
    <>
      <StyledButton 
        type='submit'
        onClick={onClick}>
        {buttonText}
      </StyledButton>
    </>
  ) 
}

const StyledButton = styled.button`
  color: white;
  background-color: #282875;
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