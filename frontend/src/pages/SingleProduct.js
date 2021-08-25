import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { artists } from 'reducers/artists'
import { basket } from 'reducers/basket'
import { Button } from 'components/Button'
import { 
  StyledLink,
  BigTitle,
  Text 
} from 'Styling'

export const SingleProduct = () => {

  const { productId } = useParams()
  const [singleProduct, setSingleProduct] = useState({})
  console.log(singleProduct)
  const dispatch = useDispatch()
  const accessToken = useSelector((store) => store.artists.accessToken)

    useEffect(() => {
        fetch(`https://artists-webshop.herokuapp.com/products/${productId}`)
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
    }, [productId, dispatch])

  return (
    <>
      <PageWrapper>
        <ProductWrapper>
          <Image src={singleProduct.photo} />
          <TextWrapper>
            <BigTitle tabIndex='0'>{singleProduct.productName}</BigTitle>
            <Text tabIndex='0'>{singleProduct.description}</Text>
            <Text tabIndex='0'>Price: {singleProduct.price} €</Text>
            <Text tabIndex='0'>{singleProduct.color}</Text>
            <Text tabIndex='0'>{singleProduct.category}</Text>
            <StyledLink to={`/artists/${singleProduct.artistID}`}>
              <Text tabIndex='0'>Artist: {singleProduct.artistName}</Text>
            </StyledLink>
            {accessToken && (
              <>
                <ButtonWrapper>
                  <Button
                    buttonText='Add to basket'
                    onClick={() => dispatch(basket.actions.addItem(singleProduct))}
                  />
                </ButtonWrapper>
              </>
            )}
          </TextWrapper>
        </ProductWrapper>
      </PageWrapper>
    </>
  ) 
}

const PageWrapper = styled.section`
`
const ProductWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
const Image = styled.img`
  width: 100%;
  margin: 0 0 0 0;
  @media (min-width: 768px) {
    width: 450px;
    margin: 20px 0 0 20px;
  }
`
const TextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 20px 20px 20px 20px;
  max-width: 450px;
`
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 10px 10px 0;
`