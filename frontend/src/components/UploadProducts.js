import { useSelector, useDispatch, batch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import styled from 'styled-components';

import { InputLine } from 'components/InputLine'
import { InputForm } from 'components/InputForm'
import { Button } from 'components/Button'
import { Accordion } from 'components/Accordion'
import { Sell } from 'components/Sell'
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
  min-height: 90vh;

  @media (min-width: 768px) {
    padding-top: 90px;
    background-image: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.2)), url('https://images.unsplash.com/photo-1602172694659-d6a5fb605c07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
`
const SelectWrapper = styled.div`
  display: flex;
  
`
