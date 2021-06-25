import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basket = createSlice({
    name: 'basket',
    initialState: initialState,
    reducers: {
        addItem: (store, action) => {

          const exsistingItems = store.items.find(
            (item) => item.productName === action.payload.productName
          );
    
          if (exsistingItems) {
            exsistingItems.quantity += 1;
          } else {
            store.items.push({ ...action.payload, quantity: 1 });
          }
        },
        setLogOut: () => {
          return initialState
      },
    },
      
})

