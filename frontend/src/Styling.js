import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
  :hover {
    color: #B72C72;
    font-weight: 500;
  }
`
export const BigTitle = styled.h2`
  font-family: 'Frank Ruhl Libre', serif;
  margin: 5px 0 0 0;
  font-size: 35px;
  line-height: 150%;
`
export const Title = styled.h3`
  font-family: 'Frank Ruhl Libre', serif;
  margin: 5px 0 0 0;
  font-size: 22px;
  line-height: 150%;
`
export const SubTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  margin: 0 0 10px 0;
  text-align: center;
`

export const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  margin: 0;
  font-size: 16px;
  line-height: 150%;
  text-align: left;
`
export const BoldText = styled(Text)`
  font-weight: 500;
`
export const LoadingWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  @media (min-width: 375px) {
    margin-top: 100px;
  }
  @media (min-width: 768px) {
    margin-top: 200px;
  }
  @media (min-width: 1024px) {
    margin-top: 250px;
  } 
`
export const LoadingSpinner = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: solid 15px darkgrey;
  border-top: 15px solid #B72C72;
  animation: loading 1.5s linear infinite;
  opacity: 0;
  @keyframes loading {
  from {
    opacity: 1;
    transform:rotate(0deg)}
  to {
    opacity: 1;
    transform:rotate(360deg)}
}
`
