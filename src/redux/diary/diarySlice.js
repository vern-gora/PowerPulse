import { createSlice } from '@reduxjs/toolkit';
import {
  fetchFoodAndExercises,
  deleteFood,
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
      .addCase(deleteFood.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(deleteFood.fulfilled, (state, action) => {
        console.log(action.payload._id)
        state.isLoading = false;
        const deletedId = action.payload._id;
        state.data.consumedProduct = state.data.consumedProduct.filter(
          product => product._id !== deletedId
        );
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
