import React from 'react'
import styled from 'styled-components'

export const UploadSelect = ({ handleSelect, chosenOption, selectOpen, open, id, label, content, value, mapData, data, onClick, key }) => {

  return (
    <>
      <SelectWrapper>
        <Label htmlFor={id} aria-label={`Filter by ${id}`}>{label}</Label>
        <Select>
          <SelectButton type="button" onClick={onClick}>
            <SelectTitle>{chosenOption}</SelectTitle>
          </SelectButton>
          <List open={open}>
            {mapData.map((data) => (
              <ListItem
                key={key}
                value={value}
                onClick={onClick}>
                {content}
              </ListItem>
             ))}
          </List>
        </Select>
        <Label htmlFor={id} aria-label={`Filter by ${id}`}>{label}</Label>
        <Select
          id={id}
          value={value}
          name={label}
          onChange={onChange}
          label={label}
          defaultValue={label}
          >
          <option disabled selected>{label}</option>
          <option>{optionOne}</option>
          <option>{optionTwo}</option>
          <option>{optionThree}</option>
        </Select>
      </SelectWrapper>
    </>
  ) 
}

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 450px;
  @media (min-width: 768px) {
    background-color: white;
    padding: 30px;
    width: 450px;
    height: 365px;
  }
`
const Select = styled.select`
  border: 1px solid #1D47B2;
  background-color: transparent;
  height: 40px;
  color: black;
  font-size: 16px;
`
const Label = styled.label`
  color: #4F4F4F;
  font-size: 14px;
`
const Selections = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
`
const SelectButton = styled.button`
  position: relative;
  -webkit-appearance: none;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 100%;
  height: 37px;
  padding: 12px 18px;
  border: 1px solid #1a1a1a;
  border-radius: 0;
  background: #fff;
  text-align: left;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`
const SelectArrow = styled.span`
  transform: ${(props) =>
    props.open ? 'rotate(180deg) translateZ(0px)' : 'none'};
  transition: transform 0.2s linear;
`
const SelectTitle = styled.div`
  margin-right: 8px;
  color: #1a1a1a;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
`
const List = styled.ul`
  position: absolute;
  top: 37px;
  display: ${(props) => (props.open ? 'block' : 'none')};
  width: 100%;
  height: 350px;
  margin: 0;
  padding: 10px 0;
  box-sizing: border-box;
  border: 1px solid #1a1a1a;
  border-top: none;
  background: #fff;
  font-size: 12px;
  text-align: justify;
  opacity: ${(props) => (props.open ? 1 : 0)};
  transform: none;
  list-style: none;
  overflow: auto;
`
const SizeList = styled(List)`
`
const SubList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #fff;
  transform: none;
  list-style: none;
`
const ListItem = styled.li`
  margin: 5px 18px;
  padding: 3px;
  box-sizing: border-box;
  background: #fff;
  cursor: pointer;
  &:hover {
    color: #fb958b;
  }
`




