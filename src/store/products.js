import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const url = import.meta.env.VITE_API_URL;

export const getProducts = createAsyncThunk('GET/products', async () => {
  const response = await fetch(`${url}/products`);
  const data = await response.json();
  return data.results;
});

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

export const updateProducts = createAsyncThunk(
  'PUT/products:id',
  async (products) => {
    const updateProduct = { products };

    const response = await fetch(`${url}/products/${products._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateProduct),
    });
    const data = await response.json();
    return data;
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(updateProducts.fulfilled, (state, action) => {
        // No need to find and update the product in the array
        // You can directly replace it with the updated product
        state.products = state.products.map((product) =>
          product._id === action.payload._id ? action.payload : product
        );
      });
  },
});

export const { setCategory, setProducts, setActiveCategory } =
  productSlice.actions;

export default productSlice.reducer;
