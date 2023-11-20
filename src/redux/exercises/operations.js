import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchFilters = createAsyncThunk(
  'exercise/fetchfilters',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const storedToken = state.auth.token;

      setAuthHeader(storedToken);
      const response = await axios.get('/exercises/filters');
      return response.data;
    } catch (e) {
      toast.error('Some error occured. Please try again later');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const fetchleBodyPartExercise = createAsyncThunk(
  'exercise/fetchSelected',
  async (name, thunkAPI) => {
    try {
      const response = await axios.get(`/exercises/bodyParts/${name}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching filtered exercises:', error);
    }
  }
);
