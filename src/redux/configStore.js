/* eslint-disable import/no-extraneous-dependencies */
import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger';
import registerSlice from './auth/registerSlice';
import loginSlice from './auth/loginSlice';
import logoutSlice from './auth/logoutSlice';

// root Reducer
const rootReducer = combineReducers({
  // Add reducer here
  register: registerSlice,
  login: loginSlice,
  logout: logoutSlice,

});

// Redux store
const store = configureStore(
  {
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), logger],
  },
);

export default store;
