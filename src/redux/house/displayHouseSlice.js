import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/v1/houses';

const initialState = {
  houses: [],
  isLoading: false,
  error: null,
};

const houseSlice = createSlice({
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

export const { fetchHouseStart, fetchHouseSuccess, fetchHouseFailed } = houseSlice.actions;

export const fetchHouses = () => async (dispatch) => {
  try {
    dispatch(fetchHouseStart());
    const response = await axios.get(apiUrl);
    dispatch(fetchHouseSuccess(response.data));
  } catch (error) {
    dispatch(fetchHouseFailed(error.message));
  }
};

export default houseSlice.reducer;
