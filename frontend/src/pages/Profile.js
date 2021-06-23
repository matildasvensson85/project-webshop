import { useSelector } from 'react-redux';
// import { useSelector, useDispatch, batch } from 'react-redux';
// import React, { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { Accordion } from 'components/Accordion'
import { EditProfile } from 'components/EditProfile'
import { UploadProducts } from 'components/UploadProducts'
import { Button } from 'components/Button'

export const Profile = () => {

  const artistName = useSelector(store => store.artists.artistName);
  const artistID = useSelector(store => store.artists.artistID);

  return (
    <>
      <PageWrapper>

        <Title tabIndex='0'>Welcome {artistName} to Artist's Collection.</Title>
        <BodyText>Edit your profile here, and upload your art to the market.</BodyText>

        <Accordion 
          title='Edit profile'
          content={<EditProfile />}
          />

        <Accordion 
          title='Add products'
          content={ <UploadProducts/> }
          />
        <Link to={`/artists/${artistID}`}>
          <Button buttonText='View profile' />
        </Link>
          
      </PageWrapper>
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