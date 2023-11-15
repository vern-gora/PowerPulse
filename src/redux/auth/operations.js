import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {toast} from 'react-hot-toast';

axios.defaults.baseURL = 'https://powerpulse-backend.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer${token}`;
};

const clearAuthHeader = token => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const res = await axios.post('/users/register', formData);
      toast.success('Вітаю, ви успішно зареєструвались.')
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.error('Користувач з цим E-mail вже зареєстрований. Будь ласка, використайте інший E-mail.');
      } else {
        toast.error('Сталася помилка під час реєстрації.');
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
      toast.success('Вітаю ви успішно увійшли.')
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      toast.error('Невдалось увійти,перевірте будьласка E-mail та пароль та спробуйте ще раз.')
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
      const res = await axios.post('/users/current');
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

      const res = await axios.patch('/users/avatars', formData, {
        headers: { 'content-type': 'multipart/form-data' },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
