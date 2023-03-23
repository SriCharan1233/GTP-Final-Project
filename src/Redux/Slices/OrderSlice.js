import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userOrder = createAsyncThunk(
  "Orders/userorders",

  async (userid) => {
    const response = await axios.get(
      `http://localhost:8282/orders/byuser/${userid}`
    );
    return response.data;
  }
);

export const restaurantOrder = createAsyncThunk(
  "Orders/restaurantorders",

  async (restaurantId) => {
    const response = await axios.get(
      `http://localhost:8282/orders/byrestaurant/${restaurantId}`
    );
    return response.data;
  }
);

export const orderStatus = createAsyncThunk(
  "Orders/orderstatus",

  async (orderid) => {
    const response = axios.post(
      `http://localhost:8282/orders/updateorder/${orderid}`
    );
    return response.data;
  }
);

export const saveOrder = createAsyncThunk(
  "Orders/saveorder",

  async (data) => {
    const response = axios.post(`http://localhost:8282/orders/saveorder`, data);
    return response.data;
  }
);

const initialState = {
  orders: [],
};

const OrderSlice = createSlice({
  name: "Orders",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(userOrder.fulfilled, (state, action) => {
      state.isLoading = true;
      state.orders = action.payload;
    });

    builder.addCase(restaurantOrder.fulfilled, (state, action) => {
      state.isLoading = true;
      state.orders = action.payload;
    });

    builder.addCase(orderStatus.fulfilled, (state, action) => {
      state.isLoading = true;
      state.orders = action.payload;
    });

    builder.addCase(saveOrder.fulfilled, (state, action) => {
      state.isLoading = true;
      builder.addCase(orderStatus.fulfilled, (state, action) => {
        state.isLoading = true;
        // state.orders = action.payload;
      });
    });
  },
});

const { reducer } = OrderSlice;
export default reducer;
