import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AuthService from "../Services/Authenticate";
import { useDispatch, useSelector } from "react-redux";
import { getItemsByRestaurant } from "../Redux/Slices/MenuItemSlice";
import { saveOrder } from "../Redux/Slices/OrderSlice";
import Dashboard from "./Dashboard";
import "./Items.css";

const Items = () => {
  const user = AuthService.getCurrentUser();
  const { restaurantId } = useParams();
  const items = useSelector((state) => state.MenuItems.itemList);
  const [order, setOrder] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userinfo } = useSelector((state) => {
    return state.Auth;
  });

  useEffect(() => {
    dispatch(getItemsByRestaurant(restaurantId));
  }, [dispatch]);

  const handleOrder = (e, itemId, restaurantId) => {
    e.preventDefault();
    //console.log(itemId, restaurantId);

    let data = {
      items: [
        {
          itemId: itemId,
        },
      ],
      restaurant: {
        restaurantId: restaurantId,
      },
      user: {
        id: userinfo.id,
      },
      status: "Ordered",
    };
    //axios.post(`http://localhost:8282/orders/saveorder`, data);
    dispatch(saveOrder(data));
    alert("order placed");
    navigate(`/userorders/${userinfo.id}`);
    console.log(data);
  };

  if (userinfo.roles.includes("RESTAURANT")) {
    return (
      <div>
        <Dashboard />
        <div className="container">
          <div className="row">
            {items.map((item) => {
              return (
                <div className="col-md-4 mb-4">
                  <div className="card shadow">
                    <img src="../Images/food.png" />
                    <div className="card-body">
                      <h5 className="card-title">{item.itemName}</h5>
                      <p className="card-text">Price: {item.price}</p>
                      <p className="card-text">
                        Availability: {item.avilability.toString()}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Dashboard />
        <div className="container">
          <div className="row">
            {items.map((item) => {
              return (
                <div className="col-md-4 mb-4">
                  <div className="card shadow">
                    <img src="../Images/food.png" />
                    <div className="card-body">
                      <h5 className="card-title">{item.itemName}</h5>
                      <p className="card-text">Price: {item.price}</p>
                      <p className="card-text">
                        Availability: {item.avilability.toString()}
                      </p>
                      <button
                        className="btn btn-outline-success"
                        onClick={(e) =>
                          handleOrder(
                            e,
                            item.itemId,
                            item.restaurant.restaurantId
                          )
                        }
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};
export default Items;
