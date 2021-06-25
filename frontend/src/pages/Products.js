import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { artists } from 'reducers/artists'
import { 
  StyledLink,
  Title,
  Text 
} from 'Styling'

export const Products = () => {

  const dispatch = useDispatch()
  const products = useSelector(store => store.artists.productList);

  useEffect(() => {
      fetch('https://artists-webshop.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.success) {
              dispatch(artists.actions.setProductList(data.products))
          } else {
            dispatch(artists.actions.setErrors(data));
          }
        })
        .catch((err) => console.error(err));
  }, [dispatch])

  
  return (
    <>
      <PageWrapper>
        <ProductsWrapper>
          <InnerWrapper>
            {products.map((product) => (
              <ProductCard key={product._id}>
                <StyledLink to={`/products/${product._id}`}>
                  <LinkWrapper>
                    <ProductImage src={product.photo} alt='Product photo'/>
                    <Title tabIndex='0'>{product.productName} </Title>
                  </LinkWrapper>
                </StyledLink>
                  <SmallTextWrapper>
                    <Text tabIndex='0'>{product.price} €</Text>
                  </SmallTextWrapper>
              </ProductCard>
            ))}
          </InnerWrapper>
        </ProductsWrapper>
      </PageWrapper>
    </>
  ) 
}

const PageWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
`
const ProductsWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
`
const InnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 90vh;
  margin: 20px 20px 0 20px;
  max-width: 1300px;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`
const ProductCard = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 48.8%;
  }
  @media (min-width: 1024px) {
    width: 23.7%;
  } 
`
const ProductImage = styled.img`
  width: 100%;
`
const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SmallTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`


