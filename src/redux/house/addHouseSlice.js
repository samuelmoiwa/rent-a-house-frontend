import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/v1/houses';

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
                'Content-Type': 'application/json',
            }
        })
        dispatch(addHouseSuccess());
      return response.data
        
    } catch (error) {
        dispatch(addHouseFail(error.response?.data?.errors || error.message));
    throw error;       
    }

}

export default addHouseSlice.reducer;