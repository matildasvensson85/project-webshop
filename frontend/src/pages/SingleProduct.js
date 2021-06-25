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
          <BigTitle tabIndex='0'>{singleProduct.productName}</BigTitle>
          <Text tabIndex='0'>{singleProduct.description}</Text>
          <Image src={singleProduct.photo} />
          <Text tabIndex='0'>Price: {singleProduct.price} €</Text>
          <Text tabIndex='0'>{singleProduct.color}</Text>
          <Text tabIndex='0'>{singleProduct.category}</Text>
          <StyledLink to={`/artists/${singleProduct.artistID}`}>
            <Text tabIndex='0'>Artist: {singleProduct.artistName}</Text>
          </StyledLink>
          </ProductWrapper>

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
      </PageWrapper>
    </>
  ) 
}

const PageWrapper = styled.section`
`
const ProductWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Image = styled.img`
  width: 300px;
  margin: 0 0 10px 0;
`
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`