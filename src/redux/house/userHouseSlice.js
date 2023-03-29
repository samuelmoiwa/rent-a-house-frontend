/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    houses: [],   // empty array to initalize house
    isLoading: false,
    error: null
};

const userHouseSlice = createSlice({
    name: 'userHouse',
    initialState,
    reducers: {
        fetchUserHouseStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
    },
})