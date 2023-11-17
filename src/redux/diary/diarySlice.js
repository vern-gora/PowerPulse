import { createSlice } from '@reduxjs/toolkit';
import {
  fetchFoodAndExercises,
  /*fetchFoodNameById,*/ deleteFood,
  addProductToDiary,
} from './operations';
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
      .addCase(fetchFoodAndExercises.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchFoodAndExercises.fulfilled, (state, action) => {
        state.data.consumedProduct = action.payload.data.foods;
        state.data.exerciseDone = action.payload.data.exercises;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(fetchFoodAndExercises.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteFood.pending, (state, action) => (state.isLoading = true))
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
        state.error = action.payload;
      })
      .addCase(addProductToDiary.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data.consumedProduct.push(action.payload);
      })
      .addCase(addProductToDiary.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const diaryReducer = diarySlice.reducer;
