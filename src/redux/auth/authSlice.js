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
import toast from 'react-hot-toast';

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
  },
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  goToParams: false,
  isRefreshing: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  // reducers: {},
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.goToParams = true;
        state.isLoading = false;
        toast.success('You have successfully registered');
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        toast.error('This email is already in use. Please choose another email address to continue.');
      })
      .addCase(logIn.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.isLoading = false;
        toast.loading('You have successfully logged in');
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoading = false;
        toast.error('Unable to sign in. Please ensure your email and password are correct, and make another attempt.');
      })
      .addCase(logOut.fulfilled, state => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, state => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      })

      .addCase(updateUserParams.pending, (state, action) => {
        toast.loading("Loadind data")
      })
      .addCase(updateUserParams.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.goToParams = false;
        state.isRefreshing = false;
        toast.success('User successfully update');
      })
      .addCase(updateUserParams.rejected, (state, action) => {
        state.isLoggedIn = true;
        state.goToParams = false;
        toast.error('User update failed');
      })

      .addCase(getUserParams.pending, (state, action) => state)
      .addCase(getUserParams.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(getUserParams.rejected, (state, action) => state)

      .addCase(addUserData.pending, (state, action) => {
        toast.loading("Loadind data")
      })
      .addCase(addUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.goToParams = false;
        toast.success('User data successfully added');
      })
      .addCase(addUserData.rejected, (state, action) => {
        state.isLoggedIn = true;
        state.goToParams = false;
        toast.error('Error adding data');
      })
      .addCase(updateAvatar.pending, (state, action) => {
        toast.loading('Loading data');
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.goToParams = false;
        toast.success('Avatar successfully added');
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        toast.error('Error, failed to load avatar');
      })
});

export const authReducer = authSlice.reducer;
