import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userOrder } from "../Redux/Slices/OrderSlice";
import Dashboard from "./Dashboard";

function UserOrders(props) {
  const orders = useSelector((state) => state.Orders.orders);
  const { userid } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userOrder(userid));
  }, [dispatch]);
  return (
    <div>
      <Dashboard />
      <div className="container">
        <div className="row">
          {orders.map((order) => {
            return (
              <div className="col-md-4 mb-4">
                <div className="card shadow">
                  <img src="../Images/order.png" />
                  <div className="card-body"></div>
                  {order.items.map((item) => {
                    return (
                      <h5 className="card-title">Item: {item.itemName}</h5>
                    );
                  })}

                  <p className="card-text">
                    Restaurant Name: {order.restaurant.restaurantName}
                  </p>
                  <p className="card-text">Order Status: {order.status}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserOrders;
