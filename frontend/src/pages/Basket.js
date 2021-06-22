import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { artists } from 'reducers/artists'
import { basket } from 'reducers/basket'

// import {user} from '../reducers/user';
import styled from 'styled-components';
import { SingleArtist } from './SingleArtist';

export const Basket = () => {

  // const dispatch = useDispatch()
  const basketItems = useSelector(store => store.basket.items);
  console.log(basketItems)
  const products = useSelector(store => store.artists.products);
  console.log(products)


  return (
    <>
      <PageWrapper>
          <Title tabIndex='0'>Your basket</Title>

          {/* {basketItems.map((item) => ( */}
            {products.map((item) => (
              <ProductCard key={item._id}>
                
                <ImageWrapper>
                  <Link to={`/products/${item._id}`}>
                    <ProductImage src={item.photo} alt='Product image'/>
                  </Link>
                </ImageWrapper>
                <ProductTextWrapper>
                  <SubTitle tabIndex='0'>{item.productName} </SubTitle>
                  <Text tabIndex='0'>{item.price} €</Text>
                  {/* <button>Remove</button> */}
                </ProductTextWrapper>                
              </ProductCard>
                          ))}
              <SummaryWrapper>
                <Text>Total products:{}</Text>
                <Text>Order total:{}€</Text>
                <button>To checkout</button>
                <button>Clear cart</button>
              </SummaryWrapper>


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
const ProductCard = styled.section`
  display: flex;
  /* flex-direction: column; */
  width: 100%;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 48.8%;
  }
  @media (min-width: 1024px) {
    width: 23.7%;
  } 
`
const ImageWrapper = styled.div`
  width: 50%;
`
const ProductImage = styled.img`
  width: 100%;
`
const ProductTextWrapper = styled.div`
  width: 50%;
  padding: 10px 10px 30px 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const SubTitle = styled.h3`
  margin: 0 0 0 0;
  font-size: 18px;
  line-height: 150%;
`
const Text = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 150%;
`
const SummaryWrapper = styled.div`

`
