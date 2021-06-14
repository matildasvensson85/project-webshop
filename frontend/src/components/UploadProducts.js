// import { useSelector, useDispatch, batch } from 'react-redux';
import React from 'react';
// import React, { useState, useEffect } from 'react';
// import { useHistory, Link } from 'react-router-dom';

import styled from 'styled-components';

import { InputLine } from 'components/InputLine'
import { InputForm } from 'components/InputForm'
import { Button } from 'components/Button'
// import { Accordion } from 'components/Accordion'
// import { Sell } from 'components/Sell'
import { UploadSelect } from 'components/UploadSelect'

export const UploadProducts = () => {

  return (
    <>
      <PageWrapper>
          <InputLine
            label='Product name'/>

          <InputLine
            label='Price €' />

          <SelectWrapper>

            <UploadSelect
              id={'category'}
              label='Category'
              optionOne='Painting'
              optionTwo='Sculpture'>
            </UploadSelect>

            <UploadSelect
              id={'color'}
              label='Color'
              optionOne='Beige'
              optionTwo='Sculpture'>
            </UploadSelect>

          </SelectWrapper>

          <InputForm
            label='Description' />

          <Button buttonText='Upload product' />
      </PageWrapper>
    </>
  ) 
}

const PageWrapper = styled.section`
  /* background-color: #F7D5DF; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 20px 20px;

  @media (min-width: 768px) {
    padding-top: 90px;
  }
`
const SelectWrapper = styled.div`
  display: flex;
  
`
