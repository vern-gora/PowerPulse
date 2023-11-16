import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://powerpulse-backend.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = token => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const res = await axios.post('/users/register', formData);
      toast.success('You have successfully registered');
      setAuthHeader(res.data.token);
      return res;
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.error(
          'This email is already in use. Please choose another email address to continue.'
        );
      } else {
        toast.error('An error occurred during registration');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', formData);
      toast.success('You have successfully logged in');
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      toast.error(
        'Unable to sign in. Please ensure your email and password are correct, and make another attempt.'
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logut', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to get user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserParams = createAsyncThunk(
  'auth/params',
  async (params, thunkAPI) => {
    try {
      const res = await axios.patch('/users/params', params);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addUserData = createAsyncThunk(
  'auth/data',
  async (params, thunkAPI) => {
    try {
      const res = await axios.patch('/users', params);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserParams = createAsyncThunk(
  'auth/getparams',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to get user');
    }

    try {
      const res = await axios.get('/users/getuser');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'auth/avatar',
  async (file, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('avatar', file);

      const res = await axios.patch('/users/avatar/upload', formData, {
        headers: { 'content-type': 'multipart/form-data' },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
