import { useSelector, useDispatch, batch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import styled from 'styled-components';

// import {user} from '../reducers/user';


export const Products = () => {

  return (
    <>
      <PageWrapper>
        <SearchWrapper>
          <SearchBar>
            <SearchInput placeholder='search'/>
            <DropDown />
            <DropDown />
            <DropDown />
            <DropDown />
            {/* <Checkbox type='checkbox' />
            <Checkbox type='checkbox' /> */}
          </SearchBar>
        </SearchWrapper>
        <ProductsWrapper>

        </ProductsWrapper>

      </PageWrapper>
    </>
  ) 
}

const PageWrapper = styled.section`
  background-color: #F7D5DF;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 0 20px 20px 20px; */
  min-height: 90vh;
`
const SearchWrapper = styled.section`
  height: 60px;
  width: 100%;
  background-color: blueviolet;
  display: flex;
`
const SearchBar = styled.div`
  background-color: palevioletred;
  display: flex;
  align-items: center;
  margin: 10px 20px 10px 20px;
  width: 100%;
`
const SearchInput = styled.input`
  width: 120px;
  height: 25px;
`
const DropDown = styled.select`
`
const Checkbox = styled.input`
`
const ProductsWrapper = styled.section`
  background-color: yellowgreen;
  width: 100%;
`


