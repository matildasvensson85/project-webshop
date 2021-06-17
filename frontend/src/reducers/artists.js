import { createSlice } from '@reduxjs/toolkit'

export const artists = createSlice({
    name: 'artists',
    initialState: {
        artistName: null,  
        artistID: null,
        testtest: null,
        email: null,
        accessToken: null,
        presentation: null,
        photo: null,
        photoID: null,
        errors: null
    },
    reducers: {
        setArtistName: (store, action) => {
            store.artistName = action.payload
        },
        setArtistID: (store, action) => {
            store.artistID = action.payload
        },
        // setEmail: (store, action) => {
        //     store.email = action.payload
        // },
        setAccessToken: (store, action) => {
            store.accessToken = action.payload
        },
        setPresentation: (store, action) => {
            store.presentation = action.payload
        },
        setPhoto: (store, action) => {
            store.photo = action.payload
        }, 
        setPhotoID: (store, action) => {
            store.photoID = action.payload
        },
        setErrors: (store, action) => {
            store.errors = action.payload
        },
        setLogOut: () => {
            return {
                artistName: null,
                artistID: null,
                accessToken: null,
                errors: null
            }
        }
    },
      
})