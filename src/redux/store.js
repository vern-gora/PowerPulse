import { configureStore } from "@reduxjs/toolkit";
// import { createAction, createReducer } from "@reduxjs/toolkit";

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authReducer } from './auth/authSlice';
import { diaryReducer } from './diary/diarySlice';
import { exercisesReducer } from './exercises/exercisesSlice';
import { productsReducer } from './products/productsSlice';


// const rootReducer = combineReducers({
//   auth: authReducer,
//   diary: diaryReducer,
//   products: productsReducer,
//   exercises: exercisesReducer,
// });

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['token'],
};

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const authPersistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  // reducer: {
  //   info: persistedReducer,
  // },

  reducer: {
    auth: authPersistedReducer,
    diary: diaryReducer,
    products: productsReducer,
    exercises: exercisesReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)
