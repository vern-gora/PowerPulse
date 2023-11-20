import { createSlice } from '@reduxjs/toolkit';
import { fetchFilters, fetchleBodyPartExercise } from './operations';

const initialState = {
  exercises: [],
  filters: [],
  title: 'Exercise',
  isLoading: false,
  error: null,
};

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {
    setExerciseTitle: (state, action) => {
      state.title = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.filters = action.payload.data;
      })
      .addCase(fetchleBodyPartExercise.fulfilled, (state, action) => {
        state.exercises = action.payload.data;
      });
  },
});

export const { setExerciseTitle } = exercisesSlice.actions;
export const exercisesReducer = exercisesSlice.reducer;
