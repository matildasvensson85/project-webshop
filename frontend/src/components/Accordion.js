import { useSelector, useDispatch, batch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import styled from 'styled-components';

export const Accordion = ({ title, content }) => {

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <AccordionHeader 
        onClick={handleClick}> 
        <Title>{title}</Title>
      </AccordionHeader>

      <AccordionContent 
        open={open}>
        {content}
      </AccordionContent>
    </>
  ) 
}

const AccordionHeader = styled.button`
  cursor: pointer;
  background-color: black;
  transition: 0,4s;
  border: none;
  width: 100%;
  height: 30px;
  margin: 0 0 10px 0;
    :hover {
    background-color: #B72C72;
    }  
/* @media (min-width: 1024px) { */
/* } */
`

const AccordionContent = styled.div`
  overflow: hidden;
  max-height: ${(props) => (props.open ? '100%' : '0')};
  width: 100%;
`

const Title = styled.p`
  margin: 0;
  color: white;
  font-size: 16px;
`