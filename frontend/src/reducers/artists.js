import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // login: {
        accessToken: null,
        artistID: null,
        artistName: null,  
        presentation: null,
        photo: null,
        errors: null,
        productList: [],
        orders: [],
        // singleArtist: null,
        artistList: [],
    // },
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
        setProductList: (store, action) => {
            store.productList = action.payload
        },
        setProduct: (store, action) => {
            store.productList = [...store.productList, action.payload]
        },
        // setSingleArtist: (store, action) => {
        //     store.singleArtist = action.payload
        // },
        setArtistList: (store, action) => {
            store.artistList = action.payload
        },
        // setOrders: (store, action) => {
        //     store.orders = action.payload
        // },
        setLogOut: () => {
            return initialState
            // return {
            //     artistName: null,
            //     artistID: null,
            //     accessToken: null,
            //     errors: null,
            // }
        },
    },
      
})

// Thunk to get orders and products
export const getProductsAndOrders = ({ accessToken,userID }) => {

}