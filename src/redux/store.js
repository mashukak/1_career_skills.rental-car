import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './carsSlice';
import favoritesReducer from './favoritesSlice';

const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorites: favoritesReducer,
  },
});

export default store;
