import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { artists } from 'reducers/artists'
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
          dispatch(artists.actions.setErrors(data))
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
          <ProfilePic src={singleArtist.photo} />
          <TextWrapper>
            <BigTitle tabIndex='0'>{singleArtist.artistName}.</BigTitle>
            <Text>{singleArtist.presentation}</Text>
          </TextWrapper>
            
        </ArtistWrapper>
        <ProductsWrapper>
          <Title>{singleArtist.artistName}s art for sale</Title>
            <CardsWrapper>
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
            </CardsWrapper>
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

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
const ProfilePic = styled.img`
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
const ProductsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 20px 20px 20px 20px;
`
const CardsWrapper = styled.section`
  display: flex;
`
const ProductCard = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 47%;
  margin: 10px 10px 0 0;
  :hover {
    transform: scale(1.01);
  }
  @media (min-width: 768px) {
    width: 200px;
  }
`
const ProductImage = styled.img`
  width: 100%;
`
const ProductTextWrapper = styled.div`
`