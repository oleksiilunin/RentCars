import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCars, fetchCarById } from './carsOperations';

const initialState = {
  cars: [],
  filterCars: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchAllCarsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.cars = action.payload;
  // state.cars.sort((firstCar, secondCar) =>
  //   firstCar.name.toLowerCase().localeCompare(secondCar.name.toLowerCase())
  // );
};

const handleFetchCarByIdFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.cars.findIndex(car => car.id === action.payload.id);
  state.cars.splice(index, 1);
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: initialState,

  extraReducers: builder =>
    builder
      .addCase(fetchAllCars.pending, handlePending)
      .addCase(fetchAllCars.fulfilled, handleFetchAllCarsFulfilled)
      .addCase(fetchAllCars.rejected, handleRejected)
      .addCase(fetchCarById.pending, handlePending)
      .addCase(fetchCarById.fulfilled, handleFetchCarByIdFulfilled)
      .addCase(fetchCarById.rejected, handleRejected),
});

export const carsReducer = carsSlice.reducer;
