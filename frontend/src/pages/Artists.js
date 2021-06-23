// import { useSelector, useDispatch } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { artists } from 'reducers/artists'
import styled from 'styled-components';

import { SearchBar } from 'components/SearchBar'


export const Artists = () => {
  const dispatch = useDispatch()


  // const [artists, setArtists] = useState([])
  console.log(artists)
  const artistList = useSelector(store => store.artists.artistList);
  // console.log(artistList)

  useEffect(() => {
      fetch('https://artists-webshop.herokuapp.com/artists')
        .then(res => res.json())
        .then(data => {
          console.log(data)
          console.log(data.artists)
          if (data.success) {
            // setArtists(data.artists)
            dispatch(artists.actions.setArtistList(data.artists))
          } else {
            // dispatch(artists.actions.setErrors(data));
          }
        })
        .catch((err) => console.error(err));

  }, [dispatch])

  
  return (
    <>
      <PageWrapper>
        <SearchWrapper>
          <SearchBar />
        </SearchWrapper>
        <ProductsWrapper>
          <InnerWrapper>
          {artistList.map(artist => (
          // {artists.map(artist => (
            <ProductCard key={artist._id}>
              <Link to={`/artists/${artist._id}`}>
                <ProductImage src={artist.photo} alt='Artist photo'/>
                <ProductTextWrapper>
                      <Title tabIndex='0'>{artist.artistName} </Title>
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
// const SmallTextWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `
const Title = styled.h3`
  margin: 5px 0 0 0;
  font-size: 18px;
  line-height: 150%;
`
// const Text = styled.p`
//   margin: 0;
//   font-size: 16px;
//   line-height: 150%;
// `
// const SubTitle = styled.h3`
//   font-size: 18px;
//   margin: 0 20px 20px 20px;
//   text-align: center;
// `
