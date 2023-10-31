import { createSlice } from '@reduxjs/toolkit';
import productsData from '../db.json';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    productData: productsData,
    selectedProduct: undefined,
    price: 'all',
    categories: [],
  },
  reducers: {
    showProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setPriceCount: (state, action) => {
      state.price = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export default productSlice;
