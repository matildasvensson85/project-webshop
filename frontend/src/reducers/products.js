import { createSlice } from '@reduxjs/toolkit'

export const products = createSlice({
    name: 'products',
    initialState: {
        productName: null,  
        productID: null,
        price: null,
        category: null,
        color: null,
        description: null,
        photo: null,
        photoID: null,
        errors: null
    },
    reducers: {
        setProcuctName: (store, action) => {
            store.productName = action.payload
        },
        setProductID: (store, action) => {
            store.productID = action.payload
        },
        setPrice: (store, action) => {
          store.price = action.payload
        },
        setCategory: (store, action) => {
            store.category = action.payload
        },
        setColor: (store, action) => {
          store.color = action.payload
        },
        setDescription: (store, action) => {
            store.description = action.payload
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
    },
      
})