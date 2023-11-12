import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exercises: [],
  filter: {},
  isLoading: false,
  error: null,
}

const exercisesSlice = createSlice({
  name: "exercises",
  initialState,
  reducers: {},
  // extraReducers: {},
});

export const exercisesReducer = exercisesSlice.reducer;
