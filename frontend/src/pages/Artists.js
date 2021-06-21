// import { useSelector, useDispatch, batch } from 'react-redux';
import React  from 'react';
// import { useHistory, Link } from 'react-router-dom';

import styled from 'styled-components';

// import {user} from '../reducers/user';
// import { DropDown } from 'components/DropDown'
// import { SearchBar } from 'components/SearchBar'
// import { ProductUnit } from 'components/ProductUnit'

export const Artists = () => {

  return (
    <>
    <h1>list of all artists</h1>
      <PageWrapper>
        <SearchWrapper>
          {/* <SearchBar /> */}
        </SearchWrapper>
        <ProductsWrapper>
          <InnerWrapper>
            {/* <ProductUnit />
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
            <ProductUnit /> */}
          </InnerWrapper>
        </ProductsWrapper>
      </PageWrapper>
    </>
  ) 
}

const PageWrapper = styled.section`
  background-color: #F7D5DF;
  /* background-color: lightcoral; */
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  min-height: 90vh;
  /* margin: 20px; */
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
  /* background-color: black; */
  display: flex;
  justify-content: center;
  /* flex-wrap: wrap; */
  width: 100%;
  /* min-height: 90vh; */
  margin: 0;
  /* margin: 20px; */
`
const InnerWrapper = styled.div`
  background-color: pink;
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


