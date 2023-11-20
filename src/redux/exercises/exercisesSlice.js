import { createSlice } from '@reduxjs/toolkit';
import {
  fetchFilters,
  fetchleBodyPartExercise,
  fetchleExerciseSelect,
} from './operations';

const initialState = {
  exercises: [],
  filters: [],
  isLoading: false,
  error: null,
};

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  // reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.filters = action.payload.data;
      })
      .addCase(fetchleBodyPartExercise.fulfilled, (state, action) => {
        state.exercises = action.payload;
      });
  },
});

export const exercisesReducer = exercisesSlice.reducer;
