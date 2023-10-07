import { createSlice, configureStore } from '@reduxjs/toolkit';

import productSlice from './reducers/productsReducers';
import cartSlice from './reducers/cartReducer.js';

export const cartActions = cartSlice.actions;

export const productActions = productSlice.actions;

const store = configureStore({
    reducer: {
        "cart": cartSlice.reducer,
        "product": productSlice.reducer
    }  
})

export default store;
