import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    houses: [],
    isLoading: false,
    error: null,
  };