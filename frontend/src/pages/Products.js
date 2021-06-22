import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';


import { artists } from 'reducers/artists'
import { basket } from 'reducers/basket'
import styled from 'styled-components';

import { SearchBar } from 'components/SearchBar'
// import { ProductUnit } from 'components/ProductUnit'


export const Products = () => {
  const dispatch = useDispatch()

  const artist = useSelector(store => store.artists);
  console.log(artist)
  const products = useSelector(store => store.artists.products);
  console.log(products)

  // const addToBasket = () => {
  //   console.log('added')
  //   dispatch(basket.actions.addItem({product._id}))
  // }

  useEffect(() => {
      fetch('http://localhost:8080/products')
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.success) {
            // setAllProducts(data.products)
              // setSingleProduct(data.productById)
              // setProductList(data.products)
              // dispatch(artists.actions.setArtistName(data.artistName))
              dispatch(artists.actions.setProducts(data.products))
          } else {
            dispatch(artists.actions.setErrors(data));
          }
        })
        .catch((err) => console.error(err));
  }, [])




  // // Fetch all products
  // const fetchProducts = () => {
  //   fetch('http://localhost:8080/products')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setProductList(data.products)
  //   })
  //   .catch((err) => console.error(err));
  // }

  //   // Fetch all product photos
  //   const fetchProductPhotos = () => {
  //     fetch('http://localhost:8080/productPhoto')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPhotoList(data.productPhotos)
  //     })
  //     .catch((err) => console.error(err));
  //   }

  // useEffect(() => {
  //   fetchProducts()
  //   fetchProductPhotos()
  // }, [])
  
  return (
    <>
      <PageWrapper>
        <SearchWrapper>
          <SearchBar />
        </SearchWrapper>
        <ProductsWrapper>
          <InnerWrapper>
            {products.map((product) => (
              <ProductCard key={product._id}>
                <Link to={`/products/${product._id}`}>
                  <ProductImage src={product.photo} alt='Ceramics bowls and bottle'/>
                  <ProductTextWrapper>
                    <Title tabIndex='0'>{product.productName} </Title>
                    <SmallTextWrapper>
                      <Text tabIndex='0'>{product.price} €</Text>
                      <Text tabIndex='0'>{product.artistName}</Text>
                      
                    </SmallTextWrapper>
                  </ProductTextWrapper>
                </Link>
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
const SearchWrapper = styled.section`
  height: 60px;
  width: 100%;
  background-color: #BCB0A6;
  display: flex;
  justify-content: center;
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
const ProductTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SmallTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h3`
  margin: 5px 0 0 0;
  font-size: 18px;
  line-height: 150%;
`
const Text = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 150%;
`
const SubTitle = styled.h3`
  font-size: 18px;
  margin: 0 20px 20px 20px;
  text-align: center;
`
