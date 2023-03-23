import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllRestaurants = createAsyncThunk(
  "Restaurant/allRestaurants",
  async () => {
    const response = await axios.get(
      "http://localhost:8282/api/restaurants/restaurantlist"
    );
    return response.data;
  }
);
const initialState = {
  restaurantList: [],
};

const RestaurantSlice = createSlice({
  name: "Restaurant",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllRestaurants.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllRestaurants.fulfilled, (state, action) => {
      state.isLoading = false;
      state.restaurantList = action.payload;
    });
    builder.addCase(getAllRestaurants.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});
const { reducer } = RestaurantSlice;
export default reducer;
