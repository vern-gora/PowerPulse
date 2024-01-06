import { createSlice } from '@reduxjs/toolkit';
import {
  fetchFoodAndExercises,
  deleteFood,
  deleteExercise,
  addProductToDiary,
  addExerciseToDiary
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
  isLoadingProducts: false,
  isLoadingExercise:false,
  error: null,
  spliceIndex: null,
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
    setSplice: (state, action) => {
      state.spliceIndex = action.payload;
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
        state.isLoadingProducts = true;
        state.isLoadingExercise = true;
      })
      .addCase(fetchFoodAndExercises.fulfilled, (state, action) => {
        state.data.consumedProduct = action.payload.data.foods;
        state.data.exerciseDone = action.payload.data.exercises;
        state.error = null;
        state.isLoadingProducts = false;
        state.isLoadingExercise = false;
      })
      .addCase(fetchFoodAndExercises.rejected, (state, action) => {
        state.data.consumedProduct = [];
        state.data.exerciseDone = [];
        state.isLoadingProducts = false;
        state.isLoadingExercise = false;
        state.error = action.payload;
      })
      .addCase(deleteFood.pending, (state, action) => {
        state.isLoadingProducts = true;
      })
      .addCase(deleteFood.fulfilled, (state, action) => {
        state.isLoadingProducts = false;
        const deletedId = action.payload._id;
        state.data.consumedProduct = state.data.consumedProduct.filter(
          product => product._id !== deletedId
        );
      })
      .addCase(deleteFood.rejected, (state, action) => {
        state.isLoadingProducts = false;
        state.error = action.payload;
      })
      .addCase(deleteExercise.pending, (state, action) => {
        state.isLoadingExercise = true;
      })
      .addCase(deleteExercise.fulfilled, (state, action) => {
        state.isLoadingExercise = false;
        const deletedId = action.payload._id;
        state.data.exerciseDone = state.data.exerciseDone.filter(
          exersize => exersize._id !== deletedId
        );
      })
      .addCase(deleteExercise.rejected, (state, action) => {
        state.isLoadingExercise = false;
        state.error = action.payload;
      })
      .addCase(addProductToDiary.fulfilled, (state, action) => {
        state.isLoadingProducts = false;
        state.error = null;
        state.data.consumedProduct.push(action.payload);
      })
      .addCase(addProductToDiary.rejected, (state, action) => {
        state.isLoadingProducts = false;
        state.error = action.payload;
      })
      .addCase(addExerciseToDiary.fulfilled, (state, action) => {
        state.isLoadingExercise = false;
        state.error = null;
        state.data.exerciseDone.push(action.payload);
      })
      .addCase(addExerciseToDiary.rejected, (state, action) => {
        state.isLoadingExercise = false;
        state.error = action.payload;
      }),
});
export const { updateFoodList, updateExerciseList } = diarySlice.actions;

export const diaryReducer = diarySlice.reducer;
