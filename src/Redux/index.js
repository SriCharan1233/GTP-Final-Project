import { configureStore } from "@reduxjs/toolkit";
import restaurantreducer from "./Slices/RestaurantSlice";
import menuitemsreducer from "./Slices/MenuItemSlice";
import ordersreducer from "./Slices/OrderSlice";
import AuthenticationReducer from "./Slices/AuthenticationSlice";

const store = configureStore({
  reducer: {
    Restaurant: restaurantreducer,
    MenuItems: menuitemsreducer,
    Orders: ordersreducer,
    Auth: AuthenticationReducer,
  },
});

export default store;
