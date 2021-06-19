import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // login: {
        accessToken: null,
        artistID: null,
        artistName: null,  
        presentation: null,
        photo: null,
        errors: null,
        products: [],
        orders: []
    
}

export const artists = createSlice({
    name: 'artists',
    initialState: initialState,
    reducers: {
        setAccessToken: (store, action) => {
            store.accessToken = action.payload
        },
        setArtistID: (store, action) => {
            store.artistID = action.payload
        },
        setArtistName: (store, action) => {
            store.artistName = action.payload
        },
        setPresentation: (store, action) => {
            store.presentation = action.payload
        },
        setPhoto: (store, action) => {
            store.photo = action.payload
        }, 
        // setPhotoID: (store, action) => {
        //     store.photoID = action.payload
        // },
        setErrors: (store, action) => {
            store.errors = action.payload
        },
        setProducts: (store, action) => {
            store.artistID = action.payload
        },
        setOrders: (store, action) => {
            store.artistID = action.payload
        },
        setLogOut: () => {
            return initialState
            // return {
                // artistName: null,
                // artistID: null,
                // accessToken: null,
                // errors: null
            // },
        },
    },
      
})

// Thunk to get orders and products
export const getProductsAndOrders = ({ accessToken,userID }) => {

}