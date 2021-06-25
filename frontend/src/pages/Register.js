import { useSelector, useDispatch, batch } from 'react-redux'
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { artists } from 'reducers/artists'
import { InputLine } from 'components/InputLine'
import { Button } from 'components/Button'


export const Register = () => {

  const [artistName, setArtistName] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()
  const accessToken = useSelector(store => store.artists.accessToken);

  // Move to profile page when logged in
  useEffect(() => {
    if (accessToken) {
      history.push('/profile')
    }
  }, [accessToken, history])

  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ artistName, password })
    }
    fetch('https://artists-webshop.herokuapp.com/register', options)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.success) {
          batch(() => {
            dispatch(artists.actions.setArtistName(data.artistName))
            dispatch(artists.actions.setArtistID(data.artistID))
            dispatch(artists.actions.setAccessToken(data.accessToken))
            dispatch(artists.actions.setErrors(null));
          })
        } else {
          dispatch(artists.actions.setErrors(data));
          console.log('failure')
        }
      })
      .catch()
  }

  return (
    <>
      <PageWrapper>
        <Title tabIndex='0'>Register to sell your art</Title>
        <RegisterWrapper>
          <Form onSubmit={onFormSubmit}>
            <InputLine
                type='text'
                label='Name' 
                value={artistName}
                onChange={event => setArtistName(event.target.value)} 
                />
              <InputLine
                type='password'
                label='Password' 
                value={password}
                onChange={event => setPassword(event.target.value)} 
                />
                <Button buttonText='Register' />
              </Form>
            <BottomWrapper>
              <SmallText tabIndex='0'>Already have an account?</SmallText>
              <LinkText tabIndex='0'>Sign In</LinkText>
            </BottomWrapper>
        </RegisterWrapper>
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
    background-image: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.2)), url('https://images.unsplash.com/photo-1602172694659-d6a5fb605c07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
`
const Title = styled.h2`
  color: black;
  font-size: 25px;
  margin: 0 20px 50px 20px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 35px;
  }
`
const RegisterWrapper = styled.div`
  width: 100%;
  max-width: 450px;
  @media (min-width: 768px) {
    background-color: white;
    padding: 30px;
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SmallText = styled.p`
  font-size: 14px;
  margin: 0;
  line-height: 19px;
`
const LinkText = styled(SmallText)`
  font-weight: 600;
  color: black;
  margin: 0;
  cursor: pointer;
  :hover {
    color: #1D47B2;
  }
`