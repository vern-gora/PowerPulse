import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  productList: [],
  productsCategories: null,
  error: null,
  isLoading: false,
}

const productsSlice = createSlice({
  name: "diary",
  initialState,
  reducers: {},
  // extraReducers: {},
});

export const productsReducer = productsSlice.reducer;
