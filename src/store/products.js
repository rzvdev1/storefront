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
    setActiveCategory: (state, action) => {
      state.categories = state.categories.map((category) => {
        if (category.id === action.payload) {
          category.active = true;
        } else {
          category.active = false;
        }
        return category;
      });
    },
  },
});

export default productSlice;
