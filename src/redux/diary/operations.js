import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const instance = axios.create({
  baseURL: 'https://powerpulse-backend.onrender.com',
})

/*let token;
if(JSON.parse(localStorage.getItem("persist:auth")).token){
   token =  JSON.parse(localStorage.getItem("persist:auth")).token;

if(token){
  instance.defaults.headers['Authorization'] = token;
}else{
  instance.defaults.headers['Authorization'] = '';
}
}

console.log(token);*/

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