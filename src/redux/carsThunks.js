import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api/cars';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (_, { getState }) => {
    const { cars } = getState();
    const { page, filters } = cars;

    const { data } = await api.get('/cars'); // Візьми всі машини
    const allCars = Array.isArray(data) ? data : data.cars || [];

    // 🔍 Фільтрація
    const filteredCars = allCars.filter(car => {
      if (filters.brand && car.make !== filters.brand) return false;
      if (filters.price && Number(car.rentalPrice.replace('$', '')) > Number(filters.price)) return false;
      return true;
    });

    const carsPerPage = 12;
    const start = (page - 1) * carsPerPage;
    const end = page * carsPerPage;
    const visibleCars = filteredCars.slice(start, end);

    return {
      cars: visibleCars,
      total: filteredCars.length,
    };
  }
);
