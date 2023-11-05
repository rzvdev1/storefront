import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics', _id: 1 },
    { name: 'food', displayName: 'Food', _id: 2 },
    { name: 'clothing', displayName: 'Clothing', _id: 3 },
  ],
  products: [
    { name: 'TV', category: 'electronics', price: 699.0, inStock: 5 },
    { name: 'Radio', category: 'electronics', price: 99.0, inStock: 15 },
    { name: 'Shirt', category: 'clothing', price: 9.0, inStock: 25 },
    { name: 'Socks', category: 'clothing', price: 12.0, inStock: 10 },
    { name: 'Apples', category: 'food', price: 0.99, inStock: 500 },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
  ],
  activeCategory: '',
};

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    setCategory(state, action) {
      state.categories = action.payload;
    },
    setProducts(state, action) {
      state.products = action.payload;
    },
    setActiveCategory(state, action) {
      state.categories = state.categories.map((category) => {
        if (category.name === action.payload) {
          category.active = true;
        } else {
          category.active = false;
        }
        return category;
      });
    },
  },
});

export const { setCategory, setProducts, setActiveCategory } =
  productSlice.actions;

export default productSlice.reducer;
