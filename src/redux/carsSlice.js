import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './carsThunks';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    loading: false,
    error: null,
    page: 1,
    total: 0,
    filters: {},
  },
  reducers: {
    incrementPage(state) {
      state.page += 1;
    },
    setFilters(state, action) {
      state.filters = action.payload;
      state.page = 1;
      state.items = [];
      state.total = 0;
    },
    clearCars(state) {
      state.items = [];
      state.page = 1;
      state.total = 0;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        if (state.page === 1) {
          state.items = action.payload.cars;
        } else {
          state.items = [...state.items, ...action.payload.cars];
        }
        state.total = action.payload.total;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { incrementPage, setFilters, clearCars } = carsSlice.actions;
export default carsSlice.reducer;
