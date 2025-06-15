import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api/cars';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async ({ page, filters }, { rejectWithValue }) => {
    try {
      const params = {
        page,
        limit: 12,
        brand: filters.brand || undefined,
        price: filters.price || undefined,
        mileageFrom: filters.mileageFrom || undefined,
        mileageTo: filters.mileageTo || undefined,
      };

      const response = await api.get('/cars', { params });
      const data = response.data;

      const normalizedCars = data.cars.map(car => ({
        ...car,
        id: car.id || car._id,
      }));

      return { cars: normalizedCars, total: data.total };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
