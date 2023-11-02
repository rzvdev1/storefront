import { configureStore } from '@reduxjs/toolkit';
import productSlice from './products';
import cartSlice from './cart';

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    cart: cartSlice.reducer,
  },
});
