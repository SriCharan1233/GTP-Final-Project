import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { orderStatus, restaurantOrder } from "../Redux/Slices/OrderSlice";
import Dashboard from "./Dashboard";

function RestaurantOrders(props) {
  const orders = useSelector((state) => state.Orders.orders);

  const { restaurantId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(restaurantOrder(restaurantId));
  }, [dispatch, restaurantId]);
  // console.log(orders);
  const [status, setStatus] = useState(false);

  const handleStatus = (e, orderid) => {
    e.preventDefault();

    dispatch(orderStatus(orderid));
  };
  if (status) return <RestaurantOrders />;
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
                  <p className="card-text"> OrderId : {order.orderid}</p>
                  {order.items.map((item) => {
                    return (
                      <h5 className="card-title"> Item : {item.itemName}</h5>
                    );
                  })}

                  <p className="card-text">User Mail : {order.user.email}</p>
                  <p className="card-text">Status : {order.status}</p>
                  <button
                    className="btn btn-outline-success m-2"
                    onClick={(e) => handleStatus(e, order.orderid)}
                  >
                    Update Status
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RestaurantOrders;
