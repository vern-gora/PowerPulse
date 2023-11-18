import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {toast} from "react-hot-toast"
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchFoodAndExercises = createAsyncThunk(
  'food/fetchFood',
  async (date, thunkAPI) => {
    try {
      const response = await axios.get(`/diary?date=${date}`);
      return response.data;
    } catch (e) {
      toast.error(
        'Some error occured. Please try again later'
      );
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
/*[Immer] An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.*/

export const addProductToDiary = createAsyncThunk(
  'diary/addProductToDiary',
  async (data, thunkAPI) => {
    try {
      setAuthHeader(storedToken);
      const res = await axios.post('/diary/food', data);
      return res.data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
