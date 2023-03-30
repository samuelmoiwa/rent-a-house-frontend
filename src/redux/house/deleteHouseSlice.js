import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = 'http://localhost:3000/api/v1/houses/36';
const accessToken = localStorage.getItem('access_token');

const initialState = {
    deleteHouse: [],
    isLoading: false,
    error: null,
};

const deleteHouseSlice = createSlice({
    name: 'deleteHouse',
    initialState,
    reducers: {
        deleteHouseStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        deleteHouseSuccess: (state, action) => {
            state.deleteHouse = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        deleteHouseFailed: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { deleteHouseStart, deleteHouseSuccess, deleteHouseFailed } = deleteHouseSlice.actions;

export const deleteHouse = () => async (dispatch) => {
    try {
        dispatch(deleteHouseStart());
        const response = await axios.delete(apiUrl, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: accessToken,
            },
        });
        dispatch(deleteHouseSuccess(response.data)); 
    } catch (error) {
        dispatch(deleteHouseFailed(error.response?.data?.errors || error.message))
        throw error;
    }
}

export default deleteHouseSlice.reducer;