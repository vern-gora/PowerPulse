import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://powerpulse-backend.onrender.com';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTUyMmE5M2VmZGEyYTBiYWY5Yzg0NDMiLCJpYXQiOjE2OTk5NDg3NDIsImV4cCI6MTY5OTk3Mzk0Mn0.FaViPKGLqRqo-q9rn5UYpZ3gkDFwd_OiLwB2HEUHkjs';

axios.defaults.headers.common.Authorization = `Bearer ${token}`;

const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/products');
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const fetchProductsCategories = createAsyncThunk(
  'products/fetchCategories',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/products/categories');
      //   console.log(res.data.data);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const getProductById = createAsyncThunk(
  'products/getProductById',
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`/products/current/${id}`);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const productsOperations = {
  fetchProducts,
  fetchProductsCategories,
  getProductById,
};

export default productsOperations;
