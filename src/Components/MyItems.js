import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyItems.css";
import { useDispatch, useSelector } from "react-redux";
import {
  myItems,
  deleteItem,
  updateAvilability,
} from "../Redux/Slices/MenuItemSlice";
import Dashboard from "./Dashboard";

const MyItems = () => {
  const navigate = useNavigate();
  const [itemId, setItemId] = useState(0);
  const [deletestatus, setDeletestatus] = useState(false);
  const [avil, setAvil] = useState(false);
  const items = useSelector((state) => state.MenuItems.itemList);

  const { userinfo } = useSelector((state) => {
    return state.Auth;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(myItems(userinfo.id));
    setItemId(0);
  }, [itemId]);

  const handleDelete = (itemId) => {
    setItemId(itemId);
    dispatch(deleteItem(itemId));
  };

  const handleAvilability = (e, itemId) => {
    setItemId(itemId);
    dispatch(updateAvilability(itemId));
    window.location.reload();
  };

  return (
    <div>
      <Dashboard />
      <div className="container">
        <div className="row">
          {items.map((item) => {
            return (
              <div className="col-md-4 mb-4">
                <div className="card shadow">
                  <img src="../Images/myitems.jpg" />
                  <div className="card-body">
                    <div>
                      <h5 className="card-title">{item.itemName}</h5>
                      <p className="card-text">Price: {item.price}</p>
                      <p className="card-text">
                        Availability: {item.avilability.toString()}
                      </p>
                      <button
                        type="button"
                        className="btn btn-outline-info m-2"
                        onClick={(e) => handleAvilability(e, item.itemId)}
                      >
                        Update Avilavility
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-danger m-2"
                        onClick={() => handleDelete(item.itemId)}
                      >
                        Remove Item
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MyItems;
