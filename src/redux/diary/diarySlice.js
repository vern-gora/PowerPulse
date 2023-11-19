import { createSlice } from '@reduxjs/toolkit';
import {
  fetchFoodAndExercises,
  deleteFood,
  deleteExercise,
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
  reducers: {
    updateFoodList: (state, action) => {
      const foodIdToDelete = action.payload;
      state.data.consumedProduct = state.data.consumedProduct.filter(
        item => item._id !== foodIdToDelete
      );
    },
    updateExerciseList: (state, action) => {
      const exerciseIdToDelete = action.payload;
      state.data.exerciseDone = state.data.exerciseDone.filter(
        item => item._id !== exerciseIdToDelete
      );
    },
  },
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
        state.isLoading = true;
      })
      .addCase(deleteFood.fulfilled, (state, action) => {
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
      .addCase(deleteExercise.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteExercise.fulfilled, (state, action) => {
        state.isLoading = false;
        const deletedId = action.payload._id;
        state.data.exerciseDone = state.data.exerciseDone.filter(
          exersize => exersize._id !== deletedId
        );
      })
      .addCase(deleteExercise.rejected, (state, action) => {
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
export const { updateFoodList } = diarySlice.actions;

export const diaryReducer = diarySlice.reducer;
