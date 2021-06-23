import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

import { artists } from 'reducers/artists'
import { basket } from 'reducers/basket'
import { Button } from 'components/Button'
import { 
  StyledLink,
  BigTitle,
  Title,
  SubTitle,
  Text 
} from 'Styling'

export const SingleProduct = () => {

  const { productId } = useParams()
  const [singleProduct, setSingleProduct] = useState({})
  const [questionIndex, setQuestionIndex] = useState(0)
  console.log(singleProduct)
  const dispatch = useDispatch()

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

    const addToBasket = () => {
      dispatch(basket.actions.addItem(singleProduct))
      onQuestionIndexChange()
    }

    const onQuestionIndexChange = () => {
      setQuestionIndex(questionIndex +1)
  }

  return (
    <>
      <PageWrapper>
        <ProductWrapper>
          <BigTitle tabIndex='0'>{singleProduct.productName}</BigTitle>
          <Text>{singleProduct.description}</Text>
          <Image src={singleProduct.photo} />
          <Text>Price: {singleProduct.price} €</Text>
          <Text>{singleProduct.color}</Text>
          <Text>{singleProduct.category}</Text>
          <StyledLink to={`/artists/${singleProduct.artistID}`}>
            <Text>Artist: {singleProduct.artistName}</Text>
          </StyledLink>
          </ProductWrapper>
        <ButtonWrapper>
          <Button
            buttonText='Add to basket'
            onClick={() => dispatch(basket.actions.addItem(singleProduct))}
          />
        </ButtonWrapper>
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