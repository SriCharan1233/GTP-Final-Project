import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllRestaurants } from "../Redux/Slices/RestaurantSlice";
import "./Restaurant.css";

const Restaurant = () => {
  const navigate = useNavigate();
  const restaurants = useSelector((state) => state.Restaurant.restaurantList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRestaurants());
  }, []);

  return (
      <div className="row">
        <ul className="col table shadow list-unstyled text-center">
          {restaurants.map((restaurant) => {
            return (
              <li>
                <Link
                  type="button"
                  to={`/items/${restaurant.restaurantId}`}
                  className="btn btn-light btn-lg"
                >
                  {restaurant.restaurantName}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
  );
};

export default Restaurant;
