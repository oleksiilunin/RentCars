import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { favoriteReducer } from './favorites/favoritesSlice';
import { filterReducer } from './filter/filterSlice';
import { carsReducer } from './cars/carsSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['filter', 'favoriteAdverts'],
};

const persistedFavoriteReducer = persistReducer(persistConfig, favoriteReducer);
const persistedFilterReducer = persistReducer(persistConfig, filterReducer);

export const store = configureStore({
  reducer: {
    favorites: persistedFavoriteReducer,
    cars: carsReducer,
    filter: persistedFilterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
