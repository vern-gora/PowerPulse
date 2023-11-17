import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchFoodAndExercises = createAsyncThunk(
  'food/fetchFood',
  async (date, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const storedToken = state.auth.token;

      setAuthHeader(storedToken);
      const response = await axios.get(`/diary?date=${date}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteFood = createAsyncThunk(
  'food/deleteFood',
  async (_id, thunkAPI) => {
    try {
      const response = await axios.delete(`/diary/food/${_id}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addProductToDiary = createAsyncThunk(
  'diary/addProductToDiary',
  async (data, thunkAPI) => {
    try {
      const res = await axios.post('/diary/food', data);
      return res.data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
