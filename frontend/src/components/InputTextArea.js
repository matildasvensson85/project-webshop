import React from 'react'
import styled from 'styled-components'

export const InputTextArea = ({
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
  margin-bottom: 7px;
  max-width: 600px;
`
const Input = styled.textarea`
  border: solid 1px #1D47B2;
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  margin: 10px 0 30px 0;
  padding: 10px;
  font-size: 16px;
  max-width: 600px;
  background-color: transparent;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  :focus {
    border: none;
    background-color: peachpuff;
    color: #3F3327;
  }
`