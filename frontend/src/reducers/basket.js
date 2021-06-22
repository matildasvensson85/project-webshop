import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}



export const basket = createSlice({
    name: 'basket',
    initialState: initialState,
    reducers: {
        addItem: (store, action) => {
          console.log(store.items)
          // store.items = action.payload
          // store.items.push({ ...action.payload, quantity: 1 })

          const exsistingItems = store.items.find(
            (item) => item._id === action.payload._id
          );
    
          if (exsistingItems) {
            exsistingItems.quantity += 1;
          } else {
            store.items.push({ ...action.payload, quantity: 1 });
          }
        }
        // setErrors: (store, action) => {
        //     store.errors = action.payload
        // },
        // setProducts: (store, action) => {
        //     store.products = action.payload
        //     // store.products = [...store.products, action.payload]
        // },

        // setLogOut: () => {
        //     return initialState
        //     // return {
        //     //     artistName: null,
        //     //     artistID: null,
        //     //     accessToken: null,
        //     //     errors: null,  
        //     // }
        // },
    },
      
})

