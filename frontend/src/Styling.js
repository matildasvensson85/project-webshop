import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  text-align: center;
`

// font-family: 'Frank Ruhl Libre', serif;
// font-family: 'Roboto', sans-serif;
