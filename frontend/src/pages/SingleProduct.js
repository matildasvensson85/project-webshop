import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { artists } from 'reducers/artists'
import { basket } from 'reducers/basket'
import { Button } from 'components/Button'
import { 
  StyledLink,
  BigTitle,
  Text,
  BoldText,
  LoadingWrapper,
  LoadingSpinner
} from 'Styling'

export const SingleProduct = () => {

  const { productId } = useParams()
  const [singleProduct, setSingleProduct] = useState({})
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const accessToken = useSelector((store) => store.artists.accessToken)

    useEffect(() => {
      setLoading(true)
      fetch(`https://artists-webshop.herokuapp.com/products/${productId}`)
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setLoading(false)
            setSingleProduct(data.productById)
          } else {
            dispatch(artists.actions.setErrors(data))
          }
        })
        .catch()
    }, [productId, dispatch])


  return (
    <>
      <PageWrapper>
        {loading &&
          <LoadingWrapper>
            <LoadingSpinner />
          </LoadingWrapper>
        }
        {!loading && 
          <ProductWrapper>
            <Image src={singleProduct.photo} />
            <TextWrapper>
              <BigTitle tabIndex='0'>{singleProduct.productName}</BigTitle>
              <Text tabIndex='0'>{singleProduct.description}</Text>
              <Line />
              <BoldText tabIndex='0'>Price: {singleProduct.price} €</BoldText>
              <BoldText tabIndex='0'>{singleProduct.color}</BoldText>
              <BoldText tabIndex='0'>{singleProduct.category}</BoldText>
              <StyledLink to={`/artists/${singleProduct.artistID}`}>
                <BoldText tabIndex='0'>Artist: {singleProduct.artistName}</BoldText>
              </StyledLink>
              <Line />
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
        }
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
    margin: 20px;
    max-width: 600px;
  }
`
const TextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 20px 20px 20px 20px;
  max-width: 450px;
`
const Line = styled.span`
  max-width: 450px;
  height: 1px;
  background: black;
  margin: 20px 0 20px 0;
`
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 10px 10px 0;
`
