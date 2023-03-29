/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/v1/users';
const accessToken = localStorage.getItem('access_token');

const initialState = {
    houses: [],   // empty array to initalize house
    isLoading: false,
    error: null
};

const currentUserSlice = createSlice({
    name: 'userHouse',
    initialState,
    reducers: {
        fetchUserHouseStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        fetchUserHouseSuccess: (state, action) => {
            state.houses = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        fetchUserHouseFail: (state, house) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchUserHouseStart, fetchUserHouseSuccess, fetchUserHouseFail } = currentUserSlice.actions;

export const fetchCurrentUser = () => async (dispatch) => {
    try {
        dispatch(fetchUserHouseStart());
        const response = await axios.get(apiUrl, {
            headers:{
                'Content-Type': 'application/json',
                Authorization: accessToken,
            },
        });
        dispatch(fetchUserHouseSuccess());
       return response.data;
    } catch (error) {
        dispatch(fetchUserHouseFail(error.response?.data?.errors || error.message))
        throw error;
    }

}