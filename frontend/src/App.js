import React from 'react'
import styled from 'styled-components'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit';

// import { artist } from 'reducers/artist'
// import { products } from 'reducers/products'

import { Start } from 'pages/Start'
import { Products } from 'pages/Products'
import { Artist } from 'pages/Artist'
import { Basket } from 'pages/Basket'
import { SingleProduct } from 'pages/SingleProduct'
import { Register } from 'pages/Register'
import { SignIn } from 'pages/SignIn'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

// const reducer = combineReducers ({
//   artist: artist.reducer,
//   products: products.reducer,
// })

// const store = configureStore({ reducer })

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <StyledWrapper>
        {/* <Provider store={store}> */}
          <StyledHeader>
            <Header />
          </StyledHeader>
          <StyledPage>
          {/* <Switch> */}
            {/* <Start />
            <Products />
            <Artist />
            <Basket />
            <SingleProduct /> */}
            <Register />
            {/* <SignIn /> */}
            {/* <Route path='/registration' component={RegistrationForm} />
            <Route exact path='/thoughts' component={Thoughts} />  */}
          {/* </Switch> */}
          </StyledPage>
          <StyledFooter>
            <Footer />
          </StyledFooter>
        {/* </Provider> */}
        </StyledWrapper>
      </BrowserRouter>
    </>
  )
}

const StyledWrapper = styled.div`
  background-color: grey;
  position: relative;
`
const StyledHeader = styled.header`
  background-color: brown;
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
`
const StyledPage = styled.div`
  background-color: pink;
  padding-top: 80px;
  padding-bottom: 80px;
  min-height: 100vh;
`
const StyledFooter= styled.footer`
  background-color: brown;
  height: 80px;
  width: 100%;
  position: fixed;
  bottom: 0;
`
