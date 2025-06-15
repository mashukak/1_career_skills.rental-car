import { createSlice } from '@reduxjs/toolkit';

const loadFavorites = () => {
  const saved = localStorage.getItem('favorites');
  return saved ? JSON.parse(saved) : [];
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: loadFavorites(),
  },
  reducers: {
    addToFavorites(state, action) {
      const existingIndex = state.items.findIndex(
        item => item._id === action.payload._id
      );
      if (existingIndex === -1) {
        state.items.push(action.payload);
      }
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
    removeFromFavorites(state, action) {
      state.items = state.items.filter(item => item._id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;