import { createSlice } from '@reduxjs/toolkit';
import { fetchFood, deleteFood } from './operations';
const initialState = {
  data: {
    _id: '',
    clientId: '',
    _v: null,
    consumedProduct: [],
    exerciseDone: [],
  },
  currentData: '',
  message: '',
  isLoading: false,
  error: null,
};

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchFood.pending, (state, action) => (state.isLoading = true))
      .addCase(fetchFood.fulfilled, (state, action) => {
        state.data.consumedProduct = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(fetchFood.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteFood.pending, (state, action) => state.isLoading = true)
      .addCase(deleteFood.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.data.consumedProduct.findIndex(
          product => product._id === action.payload._id
        );
        state.data.consumedProduct.splice(index, 1);
      })
      .addCase(deleteFood.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload
      }),
});

export const diaryReducer = diarySlice.reducer;
