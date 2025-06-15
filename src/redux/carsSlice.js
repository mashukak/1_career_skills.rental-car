import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './carsThunks';

const initialState = {
  items: [],
  page: 1,
  total: 0,
  loading: false,
  error: null,
  filters: {
    brand: '',
    price: '',
    mileageFrom: '',
    mileageTo: '',
  },
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload;
      state.page = 1;
      state.items = [];
      state.total = 0;
    },
    clearCars(state) {
      state.items = [];
      state.page = 1;
    },
    incrementPage(state) {
      state.page += 1;
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
      
        const { cars, total } = action.payload;
      
        if (Array.isArray(cars)) {
          if (state.page === 1) {
            // Якщо це перша сторінка — замінюємо список
            state.items = cars;
          } else {
            // Якщо не перша — додаємо до існуючих
            state.items = [...state.items, ...cars];
          }
          state.total = total;
          state.page += 1;
        } else {
          console.error('⚠️ fetchCars.fulfilled отримав НЕ масив cars:', action.payload);
          state.error = 'Invalid cars format from server';
        }
      })
      
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setFilters, clearCars } = carsSlice.actions;
export default carsSlice.reducer;
