import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api/cars';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (_, { getState }) => {
    const { cars } = getState();

    const { data } = await api.get('/cars');
    console.log('API response data:', data);

    const carsArray = Array.isArray(data) ? data : (data.cars || []);

    const filteredCars = carsArray.filter(car => {
      if (cars.filters.brand && car.make !== cars.filters.brand) return false;
      if (cars.filters.price && Number(car.rentalPrice) > Number(cars.filters.price)) return false;
      if (cars.filters.mileageFrom && Number(car.mileage) < Number(cars.filters.mileageFrom)) return false;
      if (cars.filters.mileageTo && Number(car.mileage) > Number(cars.filters.mileageTo)) return false;
      return true;
    });

    const allCars = filteredCars.map(car => ({
      ...car,
      id: car.id || car._id,
    }));

    const endIndex = cars.page * 12;
    const visibleCars = allCars.slice(0, endIndex);

    return {
      cars: visibleCars,
      total: allCars.length,
    };
  }
);
