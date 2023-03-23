import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home";
import Restaurant from "./Components/Restaurant";
import Items from "./Components/Items";
import AuthService from "./Services/Authenticate";
import Cart from "./Components/Cart";
import UserOrders from "./Components/UserOrders";
import Search from "./Components/Search";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
// import Profile from "./components/Profile";
// import User from "./components/User";
// import RestaurantOwner from "./components/RestaurantOwner";

import EventBus from "./EventBus/EventBus";
import AddItem from "./Components/AddItem";
import MyItems from "./Components/MyItems";
import RestaurantOrders from "./Components/RestaurantOrders";
import SearchItems from "./Components/SearchItems";

const App = () => {
  return (
    <div className="container mt-3">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Restaurant />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/items/:restaurantId" element={<Items />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/restaurant/additem/:restaurantId" element={<AddItem />} />
        <Route path="/myitems" element={<MyItems />} />
        <Route path="/cart/:itemId" element={<Cart />} />
        <Route path="/userorders/:userid" element={<UserOrders />} />
        <Route
          path="/restaurantorders/:restaurantId"
          element={<RestaurantOrders />}
        />
        <Route path="/searchitem" element={<Search />} />
        <Route path="/getitembyName/:itemName" element={<SearchItems />} />
      </Routes>
    </div>
  );
};

export default App;
