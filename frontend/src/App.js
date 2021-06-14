import React from 'react'
import styled from 'styled-components'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { artists } from 'reducers/artists'
// import { products } from 'reducers/products'

import { Start } from 'pages/Start'
import { Products } from 'pages/Products'
import { SingleProduct } from 'pages/SingleProduct'
// import { Artists } from 'pages/Artists'
// import { SingleArtist } from 'pages/Artists'
import { Register } from 'pages/Register'
import { SignIn } from 'pages/SignIn'
import { Basket } from 'pages/Basket'
import { Profile } from 'pages/Profile'
// import { Sell } from 'components/Sell'

import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

const reducer = combineReducers ({
  artists: artists.reducer,
  // products: products.reducer,
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Wrapper>
        <Provider store={store}>
          <StyledHeader>
            <Header />
          </StyledHeader>
          <Main>
            <Switch>

              <Route path="/" exact>
                <Start />
              </Route>

              <Route path="/products">
                <Products />
              </Route>

              <Route path="/products/:productId">
                <SingleProduct />
              </Route>

              {/* <Route path="/artists">
                <Artists />
              </Route> */}

              {/* <Route path="/artists/:artistId">
                <SingleArtist />
              </Route> */}

              <Route path="/register">
                <Register />
              </Route>

              <Route path="/signin">
                <SignIn />
              </Route>

              <Route path="/basket">
                <Basket />
              </Route>

              <Route path="/profile">
                <Profile />
              </Route>

              {/* <Route path="/sell">
                <Sell />
              </Route> */}

            </Switch>
          </Main>
          <StyledFooter>
            <Footer />
          </StyledFooter>
        </Provider>
        </Wrapper>
      </BrowserRouter>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const StyledHeader = styled.header`
  background-color: white;
  height: 60px;
  width: 100%;
  display: flex;
  top: 0;
`
const Main = styled.div`
`
const StyledFooter= styled.footer`
  background-color: #D6D4C5;
  width: 100%;
  margin-top: auto;


`
