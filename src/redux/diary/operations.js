import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/authSlice";
export const fetchFood = createAsyncThunk("food/fetchFood", 
async (date, thunkAPI) => {
    try {
      const response = await instance.get(`/diary/food?date=${date}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});
export const deleteFood = createAsyncThunk(
    "contacts/deleteFood",
    async (_id, thunkAPI) => {
      try {
        const response = await instance.delete(`diary/food/${_id}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );