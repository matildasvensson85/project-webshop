import React from 'react';
import styled from 'styled-components';

export const Footer = () => {

  return (
    <>
      <FooterWrapper>
        <AboutWrapper>
          <Title tabIndex='0'>About us</Title>
          <Text tabIndex='0'>Lorum impus dolor amet lorum ispus dolor</Text>
        </AboutWrapper>
        <RegisterWrapper>
          <Title tabIndex='0'>Register to sell your art</Title>
          <Text tabIndex='0'>Lorum impus dolor amet lorum ispus dolor</Text>
        </RegisterWrapper>
        <ContactWrapper>
          <Title tabIndex='0'>Contact</Title>
          <ContactDetails>
            <Text tabIndex='0'>Email</Text>
            <Text tabIndex='0'>Phone</Text>
          </ContactDetails>
        </ContactWrapper>
      </FooterWrapper>
    </>
  )
}

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 40px 20px 10px 20px;
  }
`
const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid gray;
  @media (min-width: 768px) {
    border-bottom: none;
    width: 20%;
  }
`
const RegisterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid gray;
  @media (min-width: 768px) {
    border-bottom: none;
    width: 20%;
  }
`
const ContactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  padding-bottom: 15px;
  @media (min-width: 768px) {
    width: 20%;
  }
`
const Title = styled.h4`
  margin: 0 0 4px 0;
  font-size: 14px;
  line-height: 150%;
`
const ContactDetails = styled.section`
`

const Text = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 150%;
`