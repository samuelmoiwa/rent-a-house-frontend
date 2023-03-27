import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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