import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  accessToken: null,
  artistID: null,
  artistName: null,  
  presentation: null,
  photo: null,
  errors: null,
  productList: [],
  orders: [],
  artistList: [],
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
    setErrors: (store, action) => {
      store.errors = action.payload
    },
    setProductList: (store, action) => {
      store.productList = action.payload
    },
    setProduct: (store, action) => {
      store.productList = [...store.productList, action.payload]
    },
    setArtistList: (store, action) => {
      store.artistList = action.payload
    },
    setLogOut: () => {
      return initialState
    },
  },
      
})