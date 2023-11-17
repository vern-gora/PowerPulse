import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
/*const token = JSON.parse(localStorage.getItem('persist:root')).token;
if (token) {
  axios.defaults.headers['Authorization'] = 'Bearer ' + JSON.parse(token);
} else {
  axios.defaults.headers['Authorization'] = '';
}*/

axios.defaults.baseURL = 'https://powerpulse-backend.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers['Authorization'] = `Bearer ${token}`;
};

export const fetchFood = createAsyncThunk(
  'food/fetchFood',
  async (date, thunkAPI) => {
    const state = thunkAPI.getState();
    const storedToken = state.auth.token;
    if (storedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    try {
      setAuthHeader(storedToken);
      const response = await axios.get(`/diary/food?date=${date}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteFood = createAsyncThunk(
  'food/deleteFood',
  async (_id, thunkAPI) => {
    const state = thunkAPI.getState();
    const storedToken = state.auth.token;
    if (storedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      setAuthHeader(storedToken);
      const response = await axios.delete(`/diary/food/${_id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

/*export const fetchFoodNameById = createAsyncThunk(
  'food/fetchFoodNameById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/products/current/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);*/

export const addProductToDiary = createAsyncThunk(
  'diary/addProductToDiary',
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const storedToken = state.auth.token;

    if (storedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      setAuthHeader(storedToken);
      const res = await axios.post('/diary/food', data);
      return res.data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
