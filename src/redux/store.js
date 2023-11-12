import { configureStore } from "@reduxjs/toolkit";
// import { createAction, createReducer } from "@reduxjs/toolkit";

import { authReducer } from './auth/authSlice';
import { diaryReducer } from './diary/diarySlice';
import { exercisesReducer } from './exercises/exercisesSlice';
import { productsReducer } from './products/productsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    diary: diaryReducer,
    products: productsReducer,
    sports: exercisesReducer,
  },
});


