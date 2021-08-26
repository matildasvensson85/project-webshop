import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { artists } from 'reducers/artists'
import { 
  StyledLink,
  Title,
} from 'Styling'

export const Artists = () => {

  const dispatch = useDispatch()
  const artistList = useSelector(store => store.artists.artistList)

  useEffect(() => {
      fetch('https://artists-webshop.herokuapp.com/artists')
        .then(res => res.json())
        .then(data => {
          console.log(data)
          console.log(data.artists)
          if (data.success) {
            dispatch(artists.actions.setArtistList(data.artists))
          } else {
            dispatch(artists.actions.setErrors(data))
          }
        })
        .catch((err) => console.error(err))
  }, [dispatch])

  return (
    <>
      <PageWrapper>
        <ProductsWrapper>
          <InnerWrapper>
          {artistList.slice(0, 12).map(artist => (
            <ProductCard key={artist._id}>
              <StyledLink to={`/artists/${artist._id}`}>
                <ProductImage src={artist.photo} alt='Artist photo'/>
                <ProductTextWrapper>
                      <Title tabIndex='0'>{artist.artistName} </Title>
                </ProductTextWrapper>
              </StyledLink>
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
  :hover {
    transform: scale(1.01);
  }
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
