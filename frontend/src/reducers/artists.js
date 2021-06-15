import { createSlice } from '@reduxjs/toolkit'

export const artists = createSlice({
    name: 'artists',
    initialState: {
        artistName: null,
        email: null,
        accessToken: null,
        presentation: '',
        photo: '',
        errors: null
    },
    reducers: {
        setArtistName: (store, action) => {
            store.artistName = action.payload
        },
        setEmail: (store, action) => {
            store.email = action.payload
        },
        setAccessToken: (store, action) => {
            store.accessToken = action.payload
        },
        setPresentation: (store, action) => {
            store.presentation = action.payload
        },
        setPhoto: (store, action) => {
            store.photo = action.payload
        },
        setErrors: (store, action) => {
            store.errors = action.payload
        },
        setLogOut: () => {
            return {
                artistName: null,
                accessToken: null,
                errors: null
            }
        }
    },
      
})