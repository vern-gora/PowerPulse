import { createSlice } from "@reduxjs/toolkit";

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
}

const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {},
  // extraReducers: {},
});

export const diaryReducer = diarySlice.reducer;
