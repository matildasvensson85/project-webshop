import { useSelector, useDispatch, batch } from 'react-redux';
import React, { useState, useEffect } from 'react';
// import { useHistory, Link } from 'react-router-dom';


import styled from 'styled-components';

import { SearchBar } from 'components/SearchBar'
// import { ProductUnit } from 'components/ProductUnit'
import { products } from 'reducers/products'


export const Products = () => {

  const productsArray = useSelector(store => store.products)
  // console.log(productsArray)

  const [productList, setProductList] = useState([])
  const [photoList, setPhotoList] = useState([])
  console.log(productList)
  // console.log(photoList)

  const productName = useSelector(store => store.products.productName)
  const description = useSelector(store => store.products.description)
  const byArtistName = useSelector(store => store.products.byArtistName);
  console.log(`by artist ${byArtistName}`)

  // Fetch all products
  const fetchProducts = () => {
    fetch('http://localhost:8080/products')
    .then((res) => res.json())
    .then((data) => {
      setProductList(data.products)
    })
    .catch((err) => console.error(err));
  }

    // Fetch all product photos
    const fetchProductPhotos = () => {
      fetch('http://localhost:8080/productPhoto')
      .then((res) => res.json())
      .then((data) => {
        setPhotoList(data.productPhotos)
      })
      .catch((err) => console.error(err));
    }

  useEffect(() => {
    fetchProducts()
    fetchProductPhotos()
  }, [])
  
  return (
    <>
      <PageWrapper>
        <SearchWrapper>
          <SearchBar />
        </SearchWrapper>
        <ProductsWrapper>
          <InnerWrapper>

          {productList.map((product, index) => (
            <ProductCard key={index}>
              {/* {photoList.map((photo, index) => (
                <ProductImage key={index} src={photo.imageUrl} alt='Ceramics bowls and bottle'/>
              ))} */}
                <ProductTextWrapper>
                  <Title tabIndex='0'>{product.productName} </Title>
                  <SmallTextWrapper>
                    <Text tabIndex='0'>{product.price} €</Text>
                    {/* <Text tabIndex='0'>{byArtistName}</Text> */}
                  </SmallTextWrapper>
                </ProductTextWrapper>
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
  /* height: 20px; */
  /* width: 100%; */
  /* height: auto; */
  /* height: 100%; */
  /* background-color: gray; */
  /* outline: 1px solid blue; */
  /* margin: 20px 20px 0 0; */
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 48.8%;
  }
  @media (min-width: 1024px) {
    width: 23.7%;
    /* :nth-last-child() {
      border: 5px solid red;
    }
    :last-child {
      border: 5px solid green;
      justify-content: margin-left: 10px;
    } */
  } 
`

const ProductImage = styled.img`
  /* background-color: red; */
  width: 100%;
  /* height: 520px; */
  /* height: auto; */
  /* object-fit: cover;
  object-position: 50% 50%; */
  /* margin-bottom: 100px; */
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


