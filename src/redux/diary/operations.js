import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchFoodAndExercises = createAsyncThunk(
  'food&exercises/fetchFood&Exercises',
  async (date, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const storedToken = state.auth.token;

      setAuthHeader(storedToken);
      const response = await axios.get(`/diary?date=${date}`);
      return response.data;
    } catch (e) {
      toast.error('Some error occured. Please try again later');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteFood = createAsyncThunk(
  'food/deleteFood',
  async (_id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const storedToken = state.auth.token;

      setAuthHeader(storedToken);
      const response = await axios.delete(`/diary/food/${_id}`);
      return response.data;
    } catch (e) {
      toast.error('Some error occured. Please try again later');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteExercise = createAsyncThunk(
  'exersize/deleteExercise',
  async (_id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const storedToken = state.auth.token;

      setAuthHeader(storedToken);
      const response = await axios.delete(`/diary/exercise/${_id}`);
      return response.data;
    } catch (e) {
      toast.error('Some error occured. Please try again later');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addProductToDiary = createAsyncThunk(
  'diary/addProductToDiary',
  async (data, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const storedToken = state.auth.token;

      setAuthHeader(storedToken);
      const res = await axios.post('/diary/food', data);
      toast.success('Product has been successfully added');
      return res.data.result;
    } catch (error) {
      toast.error('Something went wrong. Try again later');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addExerciseToDiary = createAsyncThunk(
  'diary/addExerciseToDiary',
  async (data, thunkAPI) => {
    console.log('🚀 ~ file: operations.js:64 ~ data:', data);
    try {
      const state = thunkAPI.getState();
      const storedToken = state.auth.token;

      setAuthHeader(storedToken);
      const res = await axios.post('/diary/exercise', data);
      return res.data.result;
    } catch (error) {
      toast.error('Some error occured. Please try again later');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
