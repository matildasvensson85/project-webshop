import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { artists } from 'reducers/artists'

// import {user} from '../reducers/user';
import styled from 'styled-components';
import { SingleArtist } from './SingleArtist';

export const SingleProduct = () => {

  const { productId } = useParams()
  const [singleProduct, setSingleProduct] = useState({})
  console.log(singleProduct)
  const dispatch = useDispatch()


    useEffect(() => {
      
        fetch(`http://localhost:8080/products/${productId}`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.success) {
                setSingleProduct(data.productById)
            } else {
              dispatch(artists.actions.setErrors(data));
            }
          })
          .catch()
      
    }, [productId])

  

  return (
    <>
      <PageWrapper>

          <Title tabIndex='0'>{singleProduct.productName}</Title>
          <Text>{singleProduct.description}</Text>
          <Image src={singleProduct.photo} />
          <Text>{singleProduct.price} €</Text>
          <Text>{singleProduct.color}</Text>
          <Text>{singleProduct.category}</Text>
          <Link to={`/artists/${singleProduct.artistID}`}>
            <Text>{singleProduct.artistName}</Text>
          </Link>
          <button>Add to cart</button>
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
const Image = styled.img`
  width: 300px;
`
const Text = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 150%;
`