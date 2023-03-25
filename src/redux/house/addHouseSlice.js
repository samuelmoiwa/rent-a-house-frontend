import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/v1/houses';
const accessToken = localStorage.getItem('access_token');

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
      state.error = null;
      state.added = true; // Set flag indicating successful addition
    },
    addHouseFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addHouseStart, addHouseSuccess, addHouseFail } = addHouseSlice.actions;

export const addHouse = (houseData) => async (dispatch) => {
    dispatch(addHouseStart());
    try {
        const response = await axios.post(apiUrl, houseData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: accessToken,
            },
            method: 'POST'
        })
        dispatch(addHouseSuccess());
      return response.data
        
    } catch (error) {
        dispatch(addHouseFail(error.response?.data?.errors || error.message));
           
    }

}

export default addHouseSlice.reducer;