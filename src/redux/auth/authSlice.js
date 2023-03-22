/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/auth_api';

export const initialState = {
  authenticatedUser: {},
  status: 'idle',
  message: '',
  error: null,
};

export const signup = createAsyncThunk('auth/signup', async (user) => {
  try {
    const response = await api.register(user);
    return {
      data: response.data,
      message: response.message,
      status: response.status === 200 ? 'successful' : 'failed',
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
});

export const signin = createAsyncThunk('auth/signin', async (user) => {
  try {
    const response = await api.login(user);
    return {
      data: response.data,
      message: response.message,
      status: response.status.status,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
});

export const getAuthenticatedUser = createAsyncThunk('auth/getAuthenticatedUser', async () => {
  try {
    const response = await api.fetchAuthUser();
    return {
      data: response.data,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
});

const authSlice = createSlice({
  name: 'authenticatedUser',
  initialState,
  reducers: {
    setStatusIdle: (state) => ({
      ...state,
      status: 'idle',
      message: '',
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        const { data, message, status } = action.payload;
        return {
          ...state,
          authenticatedUser: data,
          message,
          status: status === 200 ? 'successful' : 'failed',
        };
      })
      .addCase(signin.fulfilled, (state, action) => {
        const { data, message, status } = action.payload;
        return {
          ...state,
          authenticatedUser: data,
          message,
          status: status === 200 ? 'successful' : 'failed',
        };
      })
      .addCase(getAuthenticatedUser.fulfilled, (state, action) => {
        const { data } = action.payload;
        return {
          ...state,
          authenticatedUser: data,
          status: 'successful',
          message: 'User is authenticated',
        };
      })
      .addCase(signup.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.payload.error,
      }))
      .addCase(signin.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.payload.error,
      }))
      .addCase(getAuthenticatedUser.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.payload.error,
      }));
  },
});

export const { setStatusIdle } = authSlice.actions;
export const authenticatedUser = (state) => state.auth.authenticatedUser;
export const allStatus = (state) => state.auth.status;
export const allMessages = (state) => state.auth.message;

export default authSlice.reducer;
