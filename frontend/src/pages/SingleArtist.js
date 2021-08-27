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
  Text,
  LoadingWrapper,
  LoadingSpinner
} from 'Styling'

export const SingleArtist = () => {

  const { artistId } = useParams()
  const [singleArtist, setSingleArtist] = useState({})
  const [art, setArt] = useState([{}])
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()

    const fetchArtistInfo = useCallback(() => {
      setLoading(true)
      fetch(`https://artists-webshop.herokuapp.com/artists/${artistId}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setLoading(false)
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
        {loading &&
          <LoadingWrapper>
            <LoadingSpinner />
          </LoadingWrapper>
        }
        {!loading && 
          <ArtistWrapper>
            <ProfilePic src={singleArtist.photo} />
            <TextWrapper>
              <BigTitle tabIndex='0'>{singleArtist.artistName}.</BigTitle>
              <Text>{singleArtist.presentation}</Text>
              <Line />
              <ProductsWrapper>
                <Title>{singleArtist.artistName}s art for sale</Title>
                  <CardsWrapper>
                    {art.map((product, index) => (
                        <ProductCard key={index}>
                          <StyledLink to={`/products/${product._id}`}>
                            <ProductImage src={product.photo} alt='Product photo'/>
                            <ProductTextWrapper>
                              <SubTitle tabIndex='0'>{product.productName} </SubTitle>
                            </ProductTextWrapper>
                          </StyledLink>
                        </ProductCard>
                    ))}
                  </CardsWrapper>
              </ProductsWrapper>
            </TextWrapper>
          </ArtistWrapper>
        }
      </PageWrapper>
    </>
  ) 
}

const PageWrapper = styled.section`
`
const ArtistWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
const ProfilePic = styled.img`
  width: 100%;
  height: 100%;
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
  @media (min-width: 768px) {
    max-width: 450px;
  }
`
const Line = styled.span`
  height: 1px;
  background: black;
  margin: 20px 0 20px 0;
  @media (min-width: 768px) {
    max-width: 450px;
  }
`
const ProductsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: left;
`
const CardsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
`
const ProductCard = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 30%;
  margin: 10px 10px 0 0;
  :hover {
    transform: scale(1.01);
  }
  @media (min-width: 768px) {
    width: 29%;
  }
  @media (min-width: 1024px) {
    width: 31%;
  } 
`
const ProductImage = styled.img`
  width: 100%;
`
const ProductTextWrapper = styled.div`
`