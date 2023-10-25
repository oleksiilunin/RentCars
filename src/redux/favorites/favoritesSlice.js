import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoriteAdverts: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.favoriteAdverts.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favoriteAdverts = state.favoriteAdverts.filter(
        advert => advert.id !== action.payload.id
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
