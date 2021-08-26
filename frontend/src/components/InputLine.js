import React from 'react'
import styled from 'styled-components'

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
    </>
  ) 
}

const Label = styled.label`
  color: #4F4F4F;
  width: 100%;
  font-size: 14px;
  margin-bottom: 17px;
`
const Input = styled.input`
  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #1D47B2;
  width: 100%;
  margin-bottom: 20px;
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