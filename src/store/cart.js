import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartData: [],
    cartCount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartData.push(action.payload);
      state.cartCount = state.cartData.length;
    },
    deleteFromCart: (state, action) => {
      state.cartData = state.cartData.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartCount = state.cartData.length;
    },
  },
});

export default cartSlice;
