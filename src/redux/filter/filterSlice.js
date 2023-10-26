import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  carBrand: '',
  pricePerOneHour: '',
  carMileageFrom: '',
  carMileageTo: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearFilter: state => {
      return initialState;
    },
  },
});

export const { setFilter, clearFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
