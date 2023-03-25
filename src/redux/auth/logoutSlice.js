/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/v1/logout';

// set the inital state
const logoutSlice = createSlice({
  name: 'logout',
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logoutSuccess: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { loginSuccess, logoutSuccess } = logoutSlice.actions;
export const userLogout = () => async (dispatch) => {
  try {
    // Send a DELETE request to the server to delete the session token
    await axios.delete(apiUrl, {
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    });
    // Remove the access token from local storage
    localStorage.removeItem('access_token');
    // Dispatch the logoutSuccess action to update the authentication state
    dispatch(logoutSuccess());
  } catch (error) {
    console.log(error);
  }
};

export default logoutSlice.reducer;
