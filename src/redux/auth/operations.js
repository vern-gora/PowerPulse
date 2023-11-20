import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://powerpulse-backend.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const res = await axios.post('/users/register', formData);
      toast.success('You have successfully registered');
      setAuthHeader(res.data.token);
      return res.data;
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
      toast.loading('You have successfully logged in');
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
    const refreshToken = state.auth.refreshToken;

    if (refreshToken === null) {
      return thunkAPI.rejectWithValue('Unable to get user');
    }

    try {
      const res = await axios.post('/users/refresh', refreshToken);
      console.log('refreshed');
      return res.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserParams = createAsyncThunk(
  'auth/params',
  async (params, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to get user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.patch('/users/update', params);
      toast.success('User successfully updated');
      return res.data.user;
    } catch (error) {
      toast.error('User update failed');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addUserData = createAsyncThunk(
  'auth/data',
  async (params, thunkAPI) => {
    const state = thunkAPI.getState();
    const storedToken = state.auth.token;
    if (storedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      setAuthHeader(storedToken);
      const res = await axios.put('/users/update', params);
      toast.success('User successfully added');
      return res.data.user;
    } catch (error) {
      toast.error('User add failed');
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
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      console.log(res.data.user);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'auth/avatar',
  async (formData, thunkAPI) => {
    try {
      toast.loading('Avatar successfully added');
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to get user');
      }
      setAuthHeader(persistedToken);
      const {data} = await axios.post('/users/avatar/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Avatar successfully added');
      return data.user;
    } catch (error) {
      toast.error('Error, failed to load avatar');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
