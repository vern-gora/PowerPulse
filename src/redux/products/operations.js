import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://powerpulse-backend.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const storedToken = state.auth.token;
    if (storedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      setAuthHeader(storedToken);
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
    const state = thunkAPI.getState();
    const storedToken = state.auth.token;

    if (storedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      setAuthHeader(storedToken);
      const res = await axios.get('/products/categories');
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const getProductById = createAsyncThunk(
  'products/getProductById',
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const storedToken = state.auth.token;
    if (storedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      setAuthHeader(storedToken);
      const res = await axios.get(`/products/current/${id}`);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const getFilteredProducts = createAsyncThunk(
  'products/getFilteredProducts',
  async (params, thunkAPI) => {
    const state = thunkAPI.getState();
    const storedToken = state.auth.token;
    if (storedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      setAuthHeader(storedToken);
      const res = await axios.get('/products/search', {
        params,
      });
      return res.data.data;
    } catch (error) {}
  }
);

const productsOperations = {
  fetchProducts,
  fetchProductsCategories,
  getProductById,
  getFilteredProducts,
};

export default productsOperations;
