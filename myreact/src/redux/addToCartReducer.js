import { createSlice } from "@reduxjs/toolkit";

// command to install reduxjs toolkit: npm install @reduxjs/toolkit react-redux

export const addToCartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:[],
    },
    reducers:{
        addNewItem: (state, action) =>{
            state.cart = [...state.cart, action.payload]
        }
    }
})

export const {addNewItem} = addToCartSlice.actions

export default addToCartSlice.reducer