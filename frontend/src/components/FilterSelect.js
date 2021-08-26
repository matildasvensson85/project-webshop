import React from 'react'
import styled from 'styled-components'

export const FilterSelect = ({ id, value, name, onChange, optionOne, optionTwo, optionThree }) => {

  return (
    <>
      <Label htmlFor={id} aria-label={`Filter by ${id}`}></Label>
        <Select
          id={id}
          name={id}
          onChange={onChange}>
          <option>{optionOne}</option>
          <option>{optionTwo}</option>
          <option>{optionThree}</option>
        </Select>
    </>
  ) 
}

const Select = styled.select`
  border: none;
  background-color: transparent;
  color: black;
  font-size: 16px;
`
const Label = styled.label`
  margin: 0 0 0 20px;
  font-size: 50px;
`



