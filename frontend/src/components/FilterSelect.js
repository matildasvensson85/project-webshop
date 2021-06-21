// import { useSelector, useDispatch, batch } from 'react-redux';
// import React, { useState, useEffect } from 'react';
// import { useHistory, Link } from 'react-router-dom';
import React from 'react';

import styled from 'styled-components';

export const FilterSelect = ({ id, value, name, onChange, optionOne, optionTwo, optionThree }) => {

  return (
    <>
      <Label htmlFor={id} aria-label={`Filter by ${id}`}></Label>
        <Select
          id={id}
          // value={value}
          name={id}
          onChange={onChange}

          >
          {/* <option disabled selected>{id}</option> */}
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



