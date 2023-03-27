import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    favorites: [],
    loading: false,
    error: null
  };
  addFavoriteStart: (state) => {
    state.loading = true;
    state.error = null;
  },
  addFavoriteSuccess: (state, action) => {
    state.loading = false;
    state.favorites.push(action.payload);
  },