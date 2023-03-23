import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../Redux/Slices/MenuItemSlice";
import { useEffect } from "react";
import Dashboard from "./Dashboard";
import Footer from "./Footer";

function AddItem(props) {
  const navigate = useNavigate();
  const { itemAdded } = useSelector((state) => {
    return state.MenuItems;
  });
  const { restaurantId } = useParams();
  const [menuitem, setMenuItem] = useState({
    itemName: "",
    price: null,
    avilability: true,
    restaurant: { restaurantId: restaurantId },
  });
  const dispatch = useDispatch();
  function onInputChange(e) {
    setMenuItem({
      ...menuitem,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (itemAdded) {
      navigate("/myitems");
    }
  });

  function handleAdd(e) {
    dispatch(addItem(menuitem));
  }

  return (
    <div>
      <Dashboard />
      <div>
        <label>ItemName</label>
        <input
          className="form-control"
          onChange={(e) => onInputChange(e)}
          name="itemName"
          type="text"
          placeholder="Ex:Samosa"
        />
        <label>Price</label>
        <input
          className="form-control"
          onChange={(e) => onInputChange(e)}
          name="price"
          type="text"
          placeholder="175.00"
        />
        <button
          type="button"
          className="btn btn-outline-success m-2"
          onClick={(e) => handleAdd(e)}
        >
          Add Item
        </button>
      </div>
      <div>
      <Footer />
      </div>
    </div>
  );
}

export default AddItem;
