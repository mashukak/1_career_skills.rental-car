import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (filters = {}, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://car-rental-api.goit.global/api/cars', {
        params: filters,
      })
      return response.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default carsSlice.reducer