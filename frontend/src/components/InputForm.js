// import { useSelector, useDispatch, batch } from 'react-redux';
import React, { useState, useEffect } from 'react';
// import { useHistory, Link } from 'react-router-dom';

import styled from 'styled-components';


export const InputForm = ({
  id,
  value,
  placeholder,
  onChange,
  type,
  label
}) => {

  return (
    <>
      <Form>
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
      </Form>
    </>
  ) 
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 450px;

  /* margin: 15px 0px 15px 0px;
  padding: 10px 10px 40px 10px;
  border: solid 1px darkgrey;
  margin: 20px; */
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
const Input = styled.textarea`
  border: solid 1px #1D47B2;
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  margin: 10px 0 30px 0;
  padding: 10px;
  font-size: 16px; 
  background-color: transparent;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  :focus {
    border: none;
    background-color: peachpuff;
    color: #3F3327;
  }
`