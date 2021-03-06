import React, { useState, useRef } from 'react'
import { useSelector, useDispatch, batch } from 'react-redux'
import styled from 'styled-components'
import { artists } from 'reducers/artists'
import { Button } from 'components/Button'
import { InputTextArea } from 'components/InputTextArea'


export const EditProfile = () => {

  const [presentation, setPresentation] = useState('')
  const [published, setPublished] = useState(false)
  const artistID = useSelector(store => store.artists.artistID)
  const accessToken= useSelector(store => store.artists.accessToken)
  const fileInput = useRef()
  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault()
    patchEdits()
  }

  const patchEdits = () => {
    const formData = new FormData()
    formData.append('image', fileInput.current.files[0])
    formData.append('presentation', presentation)
    formData.append('artistID', artistID)

    fetch(`https://artists-webshop.herokuapp.com/profile/${artistID}`, { 
      method: 'PATCH',
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
            dispatch(artists.actions.setPresentation(data.editedArtist.presentation))
            dispatch(artists.actions.setPhoto(data.editedArtist.photo))
            dispatch(artists.actions.setErrors(null));
          })
        } else {
          dispatch(artists.actions.setErrors(data))
          console.log('failure')
        }
      })
      .catch()
    }
   
  return (
    <>
      <PageWrapper>
        <Form onSubmit={onFormSubmit}>
          <InputTextArea
            label='Presentation'
            placeholder='Write a a few lines about yourself and your art.'
            value={presentation}
            onChange={event => setPresentation(event.target.value)}  />

          <Upload>
            Profile picture
            <input type='file' ref={fileInput} />
          </Upload>

          <Button 
            buttonText='Publish'
            // OnClick={() => setMode(artistID)}
            onClick={() => setPublished(true)}
             />
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
`
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Upload= styled.label`
  margin-bottom: 15px;
`