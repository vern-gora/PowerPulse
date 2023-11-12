import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: {
    _id: '',
    email: '',
    name: '',
    birthday: '',
    blood: null,
    currentWeight: null,
    desiredWeight: null,
    height: null,
    levelActivity: null,
    sex: '',
    avatar: '',
    BMR: null,
    timeForSport: null,
  },
  token: '',
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: true,
  error: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  // extraReducers: {},
});

export const authReducer = authSlice.reducer;
