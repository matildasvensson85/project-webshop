import { useSelector, useDispatch, batch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

// import {user} from '../reducers/user';
import styled from 'styled-components';

export const SingleArtist = () => {

  const artistName = useSelector(store => store.artists.artistName);
  const artistID = useSelector(store => store.artists.artistID);

  return (
    <>
      <p>Single artist profile page</p>
      {/* <PageWrapper>

        <Title tabIndex='0'>Welcome {artistName} to Artist's Collection.</Title>
        <BodyText>Edit your profile here, and upload your art to the market.</BodyText>


      </PageWrapper> */}
    </>
  ) 
}

const PageWrapper = styled.section`
  background-color: #F7D5DF;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px 20px 20px;
  min-height: 90vh;

  @media (min-width: 768px) {
    padding-top: 90px;
    /* background-image: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.2)), url('https://images.unsplash.com/photo-1602172694659-d6a5fb605c07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat; */
  }
`
const Title = styled.h2`
  color: black;
  font-size: 25px;
  margin: 0 20px 20px 20px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 35px;
  }
`
const BodyText = styled.p`
  font-size: 16px;
  margin: 0 0 30px 0;
  line-height: 130%;
  text-align: center;
  max-width: 300px;
`