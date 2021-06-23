import { useSelector, useDispatch, batch } from 'react-redux';
import React, { useState, useRef } from 'react';

import styled from 'styled-components';

import { InputLine } from 'components/InputLine'
import { InputTextArea } from 'components/InputTextArea'
import { Button } from 'components/Button'
import { artists } from 'reducers/artists'

export const UploadProducts = () => {

const [productName, setProductName] = useState('')
const [price, setPrice] = useState('')
const [category, setCategory] = useState('')
const [color, setColor] = useState('')
const [description, setDescription] = useState('')
const [published, setPublished] = useState(false)
const [categoryOpen, setCategoryOpen] = useState(false)
const [colorOpen, setColorOpen] = useState(false)
const [chosenCategory, setChosenCategory] = useState('Painting')
const [chosenColor, setChosenColor] = useState('Beige')

const artistID = useSelector(store => store.artists.artistID);
const accessToken= useSelector(store => store.artists.accessToken);
const artistName = useSelector(store => store.artists.artistName);

const fileInput = useRef()
const dispatch = useDispatch()

const handleCategorySelect = () => {
  setCategoryOpen(!categoryOpen)
}

const handleColorSelect = () => {
  setColorOpen(!colorOpen)
}

const categories = [
  'Painting',
  'Sculpture',
  'Ceramics',
  'Textile',
  'Photo art',
  'Prints',
  'Other'
]

const colors = [
  'Beige',
  'Grey',
  'Black',
  'White',
  'Pink',
  'Red',
  'Blue',
  'Green',
  'Brown',
  'Turquise',
  'Yellow',
  'Mixed',
  'Other'
]

// to upload products for sale
const onFormSubmit = (event) => {
  event.preventDefault()
  postProducts()
}

const postProducts = () => {
  const formData = new FormData()
  formData.append('productName', productName)
  formData.append('price', price)
  formData.append('category', category)
  formData.append('color', color)
  formData.append('description', description)
  formData.append('image', fileInput.current.files[0])
  formData.append('artistID', artistID)
  formData.append('artistName', artistName)

  fetch('https://artists-webshop.herokuapp.com/products', { 
    method: 'POST',
    body: formData,
    headers: {
      Authorization: accessToken,
    },
   })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      if (data.success) {
        batch(() => {
          dispatch(artists.actions.setProduct(data.savedProduct));
          dispatch(artists.actions.setErrors(null));
        })
      } else {
        dispatch(artists.actions.setErrors(data));
        console.log('failure')
      }
    })
    .catch()
  }

  return (
    <>
      <PageWrapper>
        <Form onSubmit={onFormSubmit}>
          <InputLine
            label='Product name'
            value={productName}
            id={productName}
            onChange={event => setProductName(event.target.value)}
            />

          <InputLine
            label='Price €'
            value={price}
            id={price}
            onChange={event => setPrice(event.target.value)}
            />

          <SelectWrapper>
            <Select>
            <Label htmlFor='category' tabIndex='0' aria-label={`Choose category`}>Category</Label>
              <SelectButton type="button" onClick={handleCategorySelect}>
                <SelectTitle>{chosenCategory}</SelectTitle>
              </SelectButton>
                <List open={categoryOpen}>
                  {categories.map((category) => (
                    <ListItem
                      key={category}
                      value={category}
                      onClick={() => {
                        handleCategorySelect()
                        setCategory(category)
                        setChosenCategory(category)
                      }}>
                      {category}
                    </ListItem>
                  ))}
                </List>
              </Select>

              <Select>
              <Label htmlFor='Color' tabIndex='0' aria-label={`Choose color`}>Color</Label>
                <SelectButton type="button" onClick={handleColorSelect}>
                  <SelectTitle>{chosenColor}</SelectTitle>
                </SelectButton>
                <List open={colorOpen}>
                  {colors.map((color) => (
                    <ListItem
                      key={color}
                      value={color}
                      onClick={() => {
                        handleColorSelect()
                        setColor(color)
                        setChosenColor(color)
                      }}>
                      {color}
                    </ListItem>
                  ))}
                </List>
              </Select>
          </SelectWrapper>

          <InputTextArea
            label='Description'
            placeholder='Describe the product.'
            value={description}
            id={description}
            onChange={event => setDescription(event.target.value)} />

          <Upload>
            Upload product photo
            <input type='file' ref={fileInput} />
          </Upload>

          <Button 
            buttonText='Publish'
            onClick={() => setPublished(true)} />

          {published === true ? <p>Published!</p> : ''}

        </Form>
      </PageWrapper>
    </>
  ) 
}

const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 20px 20px;
  @media (min-width: 768px) {
    padding-top: 90px;
  }
`
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  
`
const Select = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 45%;
`
const Label = styled.label`
  color: #4F4F4F;
  width: 100%;
  font-size: 14px;
`
const SelectButton = styled.button`
  color: #4F4F4F;
  margin: 15px 0 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #1D47B2;
  width: 100%;
  border-radius: 0;
  height: 44px;
  background-color: transparent;
  cursor: pointer;
`
const SelectTitle = styled.p``

const List = styled.ul`
  position: absolute;
  top: 37px;
  display: ${(props) => (props.open ? 'block' : 'none')};
  width: 100%;
  height: 200px;
  margin: 0;
  padding: 10px 0;
  box-sizing: border-box;
  border: 1px solid #1a1a1a;
  border-top: none;
  background: #fff;
  text-align: justify;
  opacity: ${(props) => (props.open ? 1 : 0)};
  transform: none;
  list-style: none;
  overflow: auto;
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
const Upload= styled.label`
  margin-bottom: 15px;
`