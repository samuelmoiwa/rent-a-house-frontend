import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    favorites: [],
    loading: false,
    error: null
  };