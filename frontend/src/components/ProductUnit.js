import { useSelector, useDispatch, batch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import styled from 'styled-components';
import CeramicsImage from 'assets/tom-crew-NLcLjLNUJbY-unsplash.jpg'

export const ProductUnit = () => {

  return (
    <>
      <ProductCard>
        {/* <h1>Product here</h1> */}
        <ProductImage src={CeramicsImage} alt='Ceramics bowls and bottle'/>
        {/* <ProductImage src='assets/tom-crew-NLcLjLNUJbY-unsplash.jpg' alt='Ceramics bowls and bottle'/> */}
        {/* <ProductImage src='https://images.unsplash.com/photo-1525974160448-038dacadcc71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80' alt='Ceramics bowls and bottle'/> */}
        <ProductTextWrapper>
          <Title>Oil painting</Title>
          <SmallTextWrapper>
            <Text>215 €</Text>
            <Text>Alexander Lindberg</Text>
          </SmallTextWrapper>
        </ProductTextWrapper>
      </ProductCard>
    </>
  ) 
}

const ProductCard = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 20px; */
  /* width: 100%; */
  /* height: auto; */
  /* height: 100%; */
  /* background-color: gray; */
  outline: 1px solid blue;
  /* margin: 20px 20px 0 0; */
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 48.8%;
  }
  @media (min-width: 1024px) {
    width: 23.7%;
    /* :nth-last-child() {
      border: 5px solid red;
    }
    :last-child {
      border: 5px solid green;
      justify-content: margin-left: 10px;
    } */
  } 
`

const ProductImage = styled.img`
  /* background-color: red; */
  width: 100%;
  /* height: 520px; */
  /* height: auto; */
  object-fit: cover;
  object-position: 50% 50%;
`
const ProductTextWrapper = styled.div`
`
const SmallTextWrapper = styled.div`
  /* display: flex;
  justify-content: space-between; */
`
const Title = styled.h3`
`
const Text = styled.p`
`


