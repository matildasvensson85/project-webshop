// import { useSelector, useDispatch, batch } from 'react-redux';
// import React, { useState, useEffect } from 'react';
// import { useHistory, Link } from 'react-router-dom';
import React from 'react';

import styled from 'styled-components';

import { SearchBar } from 'components/SearchBar'
import { ProductUnit } from 'components/ProductUnit'

export const Products = () => {

  return (
    <>
      <PageWrapper>
        <SearchWrapper>
          <SearchBar />
        </SearchWrapper>
        <ProductsWrapper>
          <InnerWrapper>
            <ProductUnit />
            <ProductUnit />
            <ProductUnit />
            <ProductUnit />
            <ProductUnit />
            <ProductUnit />
            <ProductUnit />
            <ProductUnit />
            <ProductUnit />
            <ProductUnit />
            <ProductUnit />
            <ProductUnit />
            <ProductUnit />
            <ProductUnit />
          </InnerWrapper>
        </ProductsWrapper>
      </PageWrapper>
    </>
  ) 
}

const PageWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
`
const SearchWrapper = styled.section`
  height: 60px;
  width: 100%;
  background-color: #BCB0A6;
  display: flex;
  justify-content: center;
`
const ProductsWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
`
const InnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 90vh;
  margin: 20px 20px 0 20px;
  max-width: 1300px;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`


