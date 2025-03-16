import { configureStore } from "@reduxjs/toolkit";
import addToCartReducer from "./addToCartReducer"; 

export default configureStore({
    reducer: {
        cart: addToCartReducer, // Correct reducer name
    }
});
