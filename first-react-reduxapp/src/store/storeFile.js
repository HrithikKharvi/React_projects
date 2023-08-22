import { createSlice, configureStore } from '@reduxjs/toolkit';

import counterSlice from './counterReducer.js';
import authSlice from './authReducerFile.js';

const store = configureStore({
    reducer: {
        "counter": counterSlice.reducer,
        "auth" : authSlice.reducer
    }
})

export const authAction = authSlice.actions;
export const counterAction = counterSlice.actions;

export default store;
