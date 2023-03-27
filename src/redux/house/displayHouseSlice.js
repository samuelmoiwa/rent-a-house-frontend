/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/v1/houses';

const initialState = {
  houses: [], // added an empty array to initialize houses
  isLoading: false,
  error: null,
};

const displayHouseSlice = createSlice({
  name: 'house',
  initialState,
  reducers: {
    fetchHouseStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchHouseSuccess: (state, action) => {
      state.houses = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchHouseFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchHouseStart, fetchHouseSuccess, fetchHouseFailed } = displayHouseSlice.actions;

export const fetchHouses = () => async (dispatch) => {
  try {
    dispatch(fetchHouseStart());
    const response = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch(fetchHouseSuccess(response.data));
  } catch (error) {
    dispatch(fetchHouseFailed(error.message));
  }
};

export default displayHouseSlice.reducer;
