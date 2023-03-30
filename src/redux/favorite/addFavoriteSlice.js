/* eslint-disable   no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/v1/houses';
const accessToken = localStorage.getItem('access_token');

const initialState = {
  favorites: [],
  loading: false,
  error: null,
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
    },
  },
});

export const { addFavoriteStart, addFavoriteSuccess, addFavoriteFailure } = favoriteSlice.actions;

export const addFavorite = (houseId, houseIdData) => async (dispatch) => {
  try {
    dispatch(addFavoriteStart());
    const response = await axios.post(`${apiUrl}/${houseId}/favorites`, houseIdData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
    });
    dispatch(addFavoriteSuccess(response.data));
  } catch (error) {
    dispatch(addFavoriteFailure(error.response?.data?.errors || error.message));
    throw error;
  }
};

export default favoriteSlice.reducer;
