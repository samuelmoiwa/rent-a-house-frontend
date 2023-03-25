import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/v1/register';

const initialState = {
  isLoading: false,
  error: null,
};

const addHouseSlice = createSlice({
  name: "addhouse",
  initialState,
  reducers: {
    addHouseStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    addHouseSuccess: (state) => {
      state.isLoading = false;
    },
    addHouseFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addHouseStart, addHouseSuccess, addHouseFail } = addHouseSlice.actions;




export default addHouseSlice.reducer;