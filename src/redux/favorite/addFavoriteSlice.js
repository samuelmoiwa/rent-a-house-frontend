import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  favorites: [],
  loading: false,
  error: null
};

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavoriteStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addFavoriteSuccess: (state, action) => {
      state.loading = false;
      state.favorites.push(action.payload);
    },
    addFavoriteFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const addFavorite = (house.id) => async (dispatch) => {
  try {
    dispatch(addFavoriteStart());
    const response = await axios.post('/favorites', { house.id });
    dispatch(addFavoriteSuccess(response.data));
  } catch (error) {
    dispatch(addFavoriteFailure(error.message));
  }
};

export const { addFavoriteStart, addFavoriteSuccess, addFavoriteFailure } = favoriteSlice.actions;
export default favoriteSlice.reducer;