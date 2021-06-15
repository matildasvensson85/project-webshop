// import { useSelector, useDispatch, batch } from 'react-redux';
// import React, { useState, useEffect } from 'react';
// import { useHistory, Link } from 'react-router-dom';
import React from 'react';

import styled from 'styled-components';

export const UploadSelect = ({ id, value, name, onChange, optionOne, optionTwo, optionThree, label }) => {

  return (
    <>
      <SelectWrapper>
        <Label htmlFor={id} aria-label={`Filter by ${id}`}>{label}</Label>
        <Select
          id={id}
          value={value}
          name={label}
          onChange={onChange}
          label={label}
          // defaultValue={label}
          >
          {/* <option disabled selected>{label}</option> */}
          <option>{optionOne}</option>
          <option>{optionTwo}</option>
          <option>{optionThree}</option>
        </Select>
      </SelectWrapper>
    </>
  ) 
}

const SelectWrapper = styled.div`
  /* background-color: white; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 450px;
  @media (min-width: 768px) {
    background-color: white;
    padding: 30px;
    width: 450px;
    height: 365px;
  }
`

const Select = styled.select`
  border: 1px solid #1D47B2;
  background-color: transparent;
  /* width: 44%; */
  height: 40px;
  color: black;
  font-size: 16px;
`
const Label = styled.label`
  color: #4F4F4F;
  /* width: 100%; */
  font-size: 14px;

  /* margin-bottom: 7px; */
`



