/* eslint-disable import/no-extraneous-dependencies */
import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger';
import registerSlice from './auth/registerSlice';
import loginSlice from './auth/loginSlice';
import logoutSlice from './auth/logoutSlice';
import addHouseSlice from './house/addHouseSlice';
import displayHouseSlice from './house/displayHouseSlice';
import deleteHouseSlice from './house/deleteHouseSlice';
import currentUserSlice from './user/currentUserSlice';
import updateHouseSlice from './house/updateHouseSlice';

// root Reducer
const rootReducer = combineReducers({
  // Add reducer here
  register: registerSlice,
  login: loginSlice,
  logout: logoutSlice,
  addHouse: addHouseSlice,
  displayHouse: displayHouseSlice,
  deleteHouse: deleteHouseSlice,
  currentUser: currentUserSlice,
  updateHouse: updateHouseSlice,
});

// Redux store
const store = configureStore(
  {
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), logger],
  },
);

export default store;
