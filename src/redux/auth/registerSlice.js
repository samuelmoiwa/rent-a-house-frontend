/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/v1/register';

// set the inital state
const initialState = {
  isLoading: false,
  error: null,
};

// create register slice that has actions
const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registerUserStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    registerUserSuccess: (state) => {
      state.isLoading = false;
      state.error = null;
      state.registered = true; // Set flag indicating successful registration
    },
    registerUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  registerUserStart,
  registerUserSuccess,
  registerUserFailure,
} = registerSlice.actions;

// Use axios to post form data to the api
export const userRegister = (userData) => async (dispatch) => {
  dispatch(registerUserStart());
  try {
    const response = await axios.post(apiUrl, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // Store the access token in local storage
    localStorage.setItem('access_token', response.headers.authorization);

    dispatch(registerUserSuccess());
    return response.data;
  } catch (error) {
    dispatch(registerUserFailure(error.response?.data?.errors || error.message));
    throw error;
  }
};

export default registerSlice.reducer;
