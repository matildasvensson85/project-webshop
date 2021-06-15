import { useSelector, useDispatch, batch } from 'react-redux';
import React, { useState, useEffect } from 'react';

// import { useHistory, Link } from 'react-router-dom';

import styled from 'styled-components';

import { InputLine } from 'components/InputLine'
import { InputTextArea } from 'components/InputTextArea'
import { Button } from 'components/Button'
// import { Accordion } from 'components/Accordion'
// import { Sell } from 'components/Sell'
import { artists } from 'reducers/artists'


export const EditProfile = () => {

  const [presentation, setPresentation] = useState('')
  console.log(presentation)

  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault()
    console.log(`presentation ${presentation}`)

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ presentation })
    }
    fetch('http://localhost:8080/register', options)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.success) {
          batch(() => {
            dispatch(artists.actions.setPresentation(data.presentation))
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
        <Form onSubmit={onFormSubmit}>
          <InputTextArea
            label='Presentation'
            placeholder='Write a a few lines about yourself and your art.'
            value={presentation}
            onChange={event => setPresentation(event.target.value)}  />
          <Button buttonText='Save' />
        </Form>
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
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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