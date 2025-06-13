import axios from 'axios';

const API_URL = 'https://car-rental-api.goit.global/api';

export const getCars = async (params = {}) => {
  try {
    const response = await axios.get(`${API_URL}/cars`, {
      params: {
        page: 1,
        limit: 8,
        ...params,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
};

export const rentCar = async (carId, formData) => {

};