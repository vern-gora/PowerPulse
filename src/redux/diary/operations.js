import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
/*[Immer] An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft. */

axios.defaults.baseURL = 'https://powerpulse-backend.onrender.com';

const token = JSON.parse(localStorage.getItem("persist:root")).token;
if(token){
  axios.defaults.headers['Authorization'] = "Bearer " + JSON.parse(token);
}else{
  axios.defaults.headers['Authorization']  = '';
}
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
      const response = await axios.delete(`/diary/food/${_id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
