import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useState, useEffect, useCallback } from 'react';
import { artists } from 'reducers/artists'
import styled from 'styled-components';
import { 
  StyledLink,
  BigTitle,
  Title,
  SubTitle,
  Text 
} from 'Styling'

export const SingleArtist = () => {

  const { artistId } = useParams()
  const [singleArtist, setSingleArtist] = useState({})
  const [art, setArt] = useState([{}])
  const dispatch = useDispatch()

    const fetchArtistInfo = useCallback(() => {
      fetch(`https://artists-webshop.herokuapp.com/artists/${artistId}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.success) {
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
          <BigTitle tabIndex='0'>{singleArtist.artistName}.</BigTitle>
          <ProfilePic src={singleArtist.photo} />
          <Text>{singleArtist.presentation}</Text>
          <Title>{singleArtist.artistName}s art for sale</Title>
        </ArtistWrapper>
        <ProductsWrapper>
          {art.map((product, index) => (
              <ProductCard key={index}>
                <StyledLink to={`/products/${product._id}`}>
                  <ProductImage src={product.photo} alt='Ceramics bowls and bottle'/>
                  <ProductTextWrapper>
                    <SubTitle tabIndex='0'>{product.productName} </SubTitle>
                  </ProductTextWrapper>
                </StyledLink>
              </ProductCard>
          ))}
        </ProductsWrapper>
      </PageWrapper>
    </>
  ) 
}

const PageWrapper = styled.section`
`
const ArtistWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ProfilePic = styled.img`
  width: 300px;
  margin: 0 0 10px 0;
`
const ProductsWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`
const ProductCard = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 30%;
  margin: 10px;
`
const ProductImage = styled.img`
  width: 150px;
  margin: 10px 0 10px 0;
`
const ProductTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
