import { createSlice } from '@reduxjs/toolkit';
import {
  addUserData,
  getUserParams,
  logIn,
  logOut,
  refreshUser,
  register,
  updateAvatar,
  updateUserParams,
} from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
    height: 160,
    currentWeight: 60,
    desiredWeight: 55,
    birthday: '08.01.1987',
    blood: 1,
    sex: 'male',
    levelActivity: 1,
    avatarUrl: null,
  },
  token: null,
  isLoggedIn: false,
  goToParams: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  // reducers: {},
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, action) => state)

      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.goToParams = true;
      })
      .addCase(register.rejected, (state, action) => state)

      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(logOut.fulfilled, state => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      })

      .addCase(updateUserParams.pending, (state, action) => state)
      .addCase(updateUserParams.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.goToParams = false;
        state.isRefreshing = false;
      })
      .addCase(updateUserParams.rejected, (state, action) => {
        state.isLoggedIn = true;
        state.goToParams = false;
      })

      .addCase(getUserParams.pending, (state, action) => state)
      .addCase(getUserParams.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.token = action.payload.token;
      })
      .addCase(getUserParams.rejected, (state, action) => state)

      .addCase(addUserData.pending, (state, action) => state)
      .addCase(addUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.goToParams = false;
      })
      .addCase(addUserData.rejected, (state, action) => {
        state.isLoggedIn = true;
        state.goToParams = false;
      })
      .addCase(updateAvatar.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isRefreshing = false;
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;

