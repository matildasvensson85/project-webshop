// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useState, useEffect, useCallback } from 'react';
import { artists } from 'reducers/artists'

// import {user} from '../reducers/user';
import styled from 'styled-components';

export const SingleArtist = () => {

  const { artistId } = useParams()
  const [singleArtist, setSingleArtist] = useState({})
  const [art, setArt] = useState([{}])
  // const artist = useSelector(store => store.artists.singleArtist);
  // console.log(artist)

  const dispatch = useDispatch()

    const fetchArtistInfo = useCallback(() => {
      fetch(`https://artists-webshop.herokuapp.com/artists/${artistId}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.success) {
            // dispatch(artists.actions.setSingleArtist({data.artistById, data.artByArtist}))
            setSingleArtist(data.artistById)
            setArt(data.artByArtist)
        } else {
          dispatch(artists.actions.setErrors(data));
        }
      })
      .catch()
    }, [artistId, dispatch])

    useEffect(() => {
      fetchArtistInfo()
    }, [fetchArtistInfo])


  return (
    <>
      <PageWrapper>
        <ArtistWrapper>
          <Title tabIndex='0'>{singleArtist.artistName}.</Title>
          <BodyText>{singleArtist.presentation}</BodyText>
          <ProfilePic src={singleArtist.photo} />
          <h2>{singleArtist.artistName}s art for sale</h2>
        </ArtistWrapper>
        <ProductsWrapper>
          {art.map((product) => (
              <ProductCard key={product._id}>
                <Link to={`/products/${product._id}`}>
                  <ProductImage src={product.photo} alt='Ceramics bowls and bottle'/>
                  <ProductTextWrapper>
                    <SubTitle tabIndex='0'>{product.productName} </SubTitle>
                  </ProductTextWrapper>
                </Link>
              </ProductCard>
          ))}
        </ProductsWrapper>
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
const ArtistWrapper = styled.section`
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
const BodyText = styled.p`
  font-size: 16px;
  margin: 0 0 30px 0;
  line-height: 130%;
  text-align: center;
  max-width: 300px;
`
const ProfilePic = styled.img`
  width: 300px;
`

const ProductsWrapper = styled.section`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`

const ProductCard = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 40%;
  margin: 10px;
  /* @media (min-width: 768px) {
    width: 48.8%;
  }
  @media (min-width: 1024px) {
    width: 23.7%;
  }  */
`
const ProductImage = styled.img`
  width: 100%;
`
const ProductTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SubTitle = styled.h3`
  font-size: 18px;
  margin: 0 20px 20px 20px;
  text-align: center;
`
// const SmallTextWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `
// const Text = styled.p`
//   margin: 0;
//   font-size: 16px;
//   line-height: 150%;
// `