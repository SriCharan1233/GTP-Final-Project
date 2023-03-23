import React, { useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { searchItem } from "../Redux/Slices/MenuItemSlice";
import { saveOrder } from "../Redux/Slices/OrderSlice";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";

function Search(props) {
  //const userinfo = AuthService.getCurrentUser();
  const [searchitem, setSearchItem] = useState("");
  const items = useSelector((state) => state.MenuItems.selectedItem);
  const { userinfo } = useSelector((state) => state.Auth);
  const navigate = useNavigate();
  //console.log(userinfo.id)
  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchItem(searchitem));
  }
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
    //console.log(data);
  };

  return (
    <div>
      <Dashboard />
      <div>
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => handleChange(e)}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>

        <div>
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
      </div>
    </div>
  );
}
export default Search;
