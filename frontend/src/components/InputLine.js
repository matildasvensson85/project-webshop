// import { useSelector, useDispatch, batch } from 'react-redux';
// import React, { useState, useEffect } from 'react';
import React from 'react';
// import { useHistory, Link } from 'react-router-dom';

import styled from 'styled-components';

export const InputLine = ({
  id,
  value,
  placeholder,
  onChange,
  type,
  label
}) => {

  return (
    <>
      {/* <Form> */}
        <Label htmlFor={id} tabIndex='0' aria-label={`Enter your ${id}`}>{label}</Label>
        <Input 
          type={type}
          id={id}
          value={value}
          name={id}
          placeholder={placeholder}
          onChange={onChange}
          label={label}
        />
      {/* </Form> */}
    </>
  ) 
}


// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   max-width: 450px;
//   @media (min-width: 768px) {
//     width: 450px;
//   }
// `
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