import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api/cars';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (_, { getState }) => {
    const { cars } = getState();
    const params = {
      page: cars.page,
      limit: 12,
      brand: cars.filters.brand || undefined,
      price: cars.filters.price || undefined,
      mileageFrom: cars.filters.mileageFrom || undefined,
      mileageTo: cars.filters.mileageTo || undefined,
    };

    const { data } = await api.get('/cars', { params });

    const normalizedCars = data.cars.map(car => ({
      ...car,
      id: car.id || car._id,
    }));

    return { cars: normalizedCars, total: data.total };
  }
);
