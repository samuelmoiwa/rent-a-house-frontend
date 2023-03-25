/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/v1/login';

// set the inital state
const initialState = {
  isLoading: false,
  error: null,
};

// create register slice that has actions
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginUserStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginUserSuccess: (state) => {
      state.isLoading = false;
      state.error = null;
      state.registered = true; // Set flag indicating successful registration
    },
    loginUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { loginUserStart, loginUserSuccess, loginUserFailure } = loginSlice.actions;

// Use axios to post form data to the api
export const userLogin = (userData) => async (dispatch) => {
  dispatch(loginUserStart());
  try {
    const response = await axios.post(apiUrl, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // Store the access token in local storage
    localStorage.setItem('access_token', response.headers.authorization);

    dispatch(loginUserSuccess());
    return response.data;
  } catch (error) {
    dispatch(loginUserFailure(error.response?.data?.errors || error.message));
    throw error;
  }
};

export default loginSlice.reducer;
