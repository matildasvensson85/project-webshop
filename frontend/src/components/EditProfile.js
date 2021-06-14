// import { useSelector, useDispatch, batch } from 'react-redux';
// import React, { useState, useEffect } from 'react';
import React from 'react';
// import { useHistory, Link } from 'react-router-dom';

import styled from 'styled-components';

import { InputLine } from 'components/InputLine'
import { InputForm } from 'components/InputForm'
import { Button } from 'components/Button'
// import { Accordion } from 'components/Accordion'
// import { Sell } from 'components/Sell'


export const EditProfile = () => {

  return (
    <>
      <PageWrapper>
        <InputLine
          label='Name' />
        <InputForm
          label='Description' />
        <Button buttonText='Save' />
      </PageWrapper>
    </>
  ) 
}

const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 20px 20px;

  @media (min-width: 768px) {
    padding-top: 90px;
  }
`
// const Title = styled.h2`
//   color: black;
//   font-size: 25px;
//   margin: 0 20px 20px 20px;
//   text-align: center;
//   @media (min-width: 768px) {
//     font-size: 35px;
//   }
// `
// const BodyText = styled.p`
//   font-size: 16px;
//   margin: 0 0 50px 0;
//   line-height: 130%;
//   text-align: center;
//   max-width: 300px;
// `
// const SmallText = styled.p`
// font-size: 14px;
// margin: 0;
// line-height: 19px;
// `
// const LinkText = styled(SmallText)`
//   font-weight: 600;
//   color: black;
//   margin: 0;
//   cursor: pointer;
//   :hover {
//     color: #1D47B2;
//   }
// `