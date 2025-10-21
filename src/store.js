// src/store.js

// 1. Import configureStore from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// 2. Import your reducer(s)
import cartReducer from './CartSlice';

// 3. Configure the store with your slice reducers
const store = configureStore({
  reducer: {
    // cart slice managed by cartReducer
    cart: cartReducer,
  },
});

// 4. Export the store to use in <Provider> and throughout your app
export default store;
