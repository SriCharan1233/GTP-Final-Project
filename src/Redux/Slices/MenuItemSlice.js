import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getItemsByRestaurant = createAsyncThunk(
  "MenuItems/restaurantItems",
  async (restaurantId) => {
    const response = await axios.get(
      `http://localhost:8282/api/MenuItems/getitembyid/${restaurantId}`
    );
    return response.data;
  }
);

export const addItem = createAsyncThunk(
  "MenuItems/addItem",
  async (menuitem) => {
    await axios.post("http://localhost:8282/api/MenuItems/additems", menuitem);
  }
);

export const searchItem = createAsyncThunk(
  "MenuItems/searchItem",
  async (searchitem) => {
    const response = await axios.get(
      `http://localhost:8282/api/MenuItems/searchitem/${searchitem}`
    );

    return response.data;
  }
);
export const myItems = createAsyncThunk(
  "MenuItems/myItems",
  async (restaurantId) => {
    const response = await axios.get(
      `http://localhost:8282/api/MenuItems/getitembyid/${restaurantId}`
    );
    return response.data;
  }
);
export const deleteItem = createAsyncThunk(
  "MenuItems/deleteItem",
  async (itemId) => {
    await axios.delete(
      `http://localhost:8282/api/MenuItems/removeitem/${itemId}`
    );
    return itemId;
  }
);
export const updateAvilability = createAsyncThunk(
  "MenuItems/updateAvilability",
  async (itemId) => {
    const response = await axios.post(
      `http://localhost:8282/api/MenuItems/update/${itemId}`
    );

    console.log(response.data);
    return response.data;
  }
);

const initialState = {
  itemList: [],

  selectedItem: [],
  itemAdded: false,
  itemDeleted: false,
};

const MenuItemSlice = createSlice({
  name: "MenuItems",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getItemsByRestaurant.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getItemsByRestaurant.fulfilled, (state, action) => {
      state.isLoading = false;
      state.itemList = action.payload;
    });
    builder.addCase(getItemsByRestaurant.rejected, (state, action) => {
      state.isLoading = false;
      state.itemList = [];
    });
    builder.addCase(addItem.fulfilled, (state, action) => {
      state.isLoading = true;
      state.itemAdded = true;
      //state.itemList.push(action.payload);
    });
    builder.addCase(searchItem.fulfilled, (state, action) => {
      state.isLoading = true;
      state.selectedItem = action.payload;
    });
    builder.addCase(myItems.fulfilled, (state, action) => {
      state.isLoading = true;
      state.itemAdded = false;
      state.itemList = action.payload;
    });
    builder.addCase(deleteItem.fulfilled, (state, action) => {
      state.isLoading = true;
      state.itemDeleted = true;
      //state.itemList = action.payload
      console.log(action.payload);
      //state.itemList=state.itemList.filter(item => item.id !== action.payload)
    });
    builder.addCase(updateAvilability.fulfilled, (state, action) => {
      state.isLoading = true;
      state.itemList = action.payload;
    });
  },
});
const { reducer } = MenuItemSlice;
export default reducer;
