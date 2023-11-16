import { createSlice } from '@reduxjs/toolkit';
import productsOperations from './operations';

const initialState = {
  productList: [],
  productsCategories: null,
  currentProduct: {},
  error: null,
  isLoading: false,
  filter: '',
  filteredProducts: [],
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,

  reducers: {
    filterProducts(state, action) {
      state.filter = action.payload;
    },
    clearFilter(state) {
      state.filter = '';
    },
  },

  extraReducers: builder => {
    builder
      .addCase(productsOperations.fetchProducts.pending, state => {
        state.isLoading = true;
      })
      .addCase(productsOperations.fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.productList = action.payload;
      })
      .addCase(productsOperations.fetchProducts.rejected, handleRejected)
      .addCase(productsOperations.fetchProductsCategories.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        productsOperations.fetchProductsCategories.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.productsCategories = action.payload;
        }
      )
      .addCase(
        productsOperations.fetchProductsCategories.rejected,
        handleRejected
      )
      .addCase(productsOperations.getProductById.pending, state => {
        state.isLoading = true;
      })
      .addCase(productsOperations.getProductById.fulfilled, (state, action) => {
        state.isLoading = true;
        state.error = null;
        state.currentProduct = action.payload;
      })
      .addCase(productsOperations.getProductById.rejected, handleRejected)
      .addCase(productsOperations.getFilteredProducts.pending, state => {
        state.isLoading = true;
        state.filteredProducts = [];
      })
      .addCase(
        productsOperations.getFilteredProducts.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.filteredProducts = action.payload;
        }
      )
      .addCase(productsOperations.getFilteredProducts.rejected, handleRejected);
  },
});

export const productsReducer = productsSlice.reducer;
export const { filterProducts, clearFilter } = productsSlice.actions;
