import React from 'react';

import styled from 'styled-components';

import { FilterSelect } from 'components/FilterSelect'

export const SearchBar = () => {

  return (
    <>
      <SearchWrapper>
        <SearchInput placeholder='search'/>
          <FilterWrapper>
            <Filter>Filter</Filter>
              <DesktopFilter>
                <FilterSelect 
                  id='Type'
                  value='Type'
                  name='Type'
                  optionOne='blue'
                  optionTwo='green'
                  >
                </FilterSelect>
                <FilterSelect 
                  id='Artist'
                  value='Artist'
                  name='Artist'
                  optionOne='blue'
                  optionTwo='green'
                  >
                </FilterSelect>
                <FilterSelect
                  id='Price'
                  value='Price'
                  name='Price'
                  optionOne='blue'
                  optionTwo='green'
                  >
                </FilterSelect>
                <FilterSelect 
                  id='Material'
                  value='Material'
                  name='Material'
                  optionOne='blue'
                  optionTwo='green'
                  >
              </FilterSelect>
            </DesktopFilter>
          </FilterWrapper>
      </SearchWrapper>
    </>
  ) 
}

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 20px 10px 20px;
  width: 100%;
  max-width: 1300px;
  @media (min-width: 768px) {
    justify-content: left;
  }
`
const SearchInput = styled.input`
  width: 150px;
  height: 30px;
  border: none;
  padding-left: 5px;
  font-size: 16px;
  @media (min-width: 768px) {
    width: 200px;
  }
`
const FilterWrapper = styled.div`
`
const Filter = styled.p`
  margin: 0;
  font-size: 16px;
  @media (min-width: 768px) {
    display: none;
  }
`
const DesktopFilter = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`









