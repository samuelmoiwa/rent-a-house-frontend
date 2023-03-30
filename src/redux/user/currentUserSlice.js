/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/v1/users';
const accessToken = localStorage.getItem('access_token');

const initialState = {
  currentUser: [], // empty array to initalize house
  isLoading: false,
  error: null,
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    fetchCurrentUserStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchCurrentUserSuccess: (state, action) => {
      state.houses = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchCurrentUserFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCurrentUserStart,
  fetchCurrentUserSuccess,
  fetchCurrentUserFail,
} = currentUserSlice.actions;

export const getCurrentUser = () => async (dispatch) => {
  try {
    dispatch(fetchCurrentUserStart());
    const response = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
    });
    dispatch(fetchCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(fetchCurrentUserFail(error.response?.data?.errors || error.message));
    throw error;
  }
};

export default currentUserSlice.reducer;
