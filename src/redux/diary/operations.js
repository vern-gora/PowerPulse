import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
/*[Immer] An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft. */
export const fetchFood = createAsyncThunk(
  'food/fetchFood',
  async (date, thunkAPI) => {
    try {
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
      const response = await axios.delete(`diary/food/${_id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
