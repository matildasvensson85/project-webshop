import React from 'react';

import styled from 'styled-components';
import CeramicsImage from 'assets/tom-crew-NLcLjLNUJbY-unsplash.jpg'

export const ProductUnit = () => {

  return (
    <>
      <ProductCard>
        <ProductImage src={CeramicsImage} alt='Ceramics bowls and bottle'/>
        <ProductTextWrapper>
          <Title tabIndex='0'>Oil painting</Title>
          <SmallTextWrapper>
            <Text tabIndex='0'>215 €</Text>
            <Text tabIndex='0'>Alexander Lindberg</Text>
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
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 48.8%;
  }
  @media (min-width: 1024px) {
    width: 23.7%;
  } 
`

const ProductImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`
const ProductTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SmallTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h3`
  margin: 5px 0 0 0;
  font-size: 18px;
  line-height: 150%;
`
const Text = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 150%;
`


