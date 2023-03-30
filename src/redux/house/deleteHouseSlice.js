import { createSlice } from "@reduxjs/toolkit";

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