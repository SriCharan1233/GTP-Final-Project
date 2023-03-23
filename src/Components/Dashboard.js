import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [showRestaurantBoard, setShowRestaurantBoard] = useState(false);
  const [showUserBoard, setShowUserBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userinfo } = useSelector((state) => {
    return state.Auth;
  });

  const user = userinfo;

  useEffect(() => {
    //const user = AuthService.getCurrentUser();

    if (user) {
      //setCurrentUser(user.id);
      setCurrentUser(user);
      setShowRestaurantBoard(user.roles.includes("RESTAURANT"));
      setShowUserBoard(user.roles.includes("USER"));
      console.log(user);
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <div className="container-fluid">
        <div className="navbar-brand d-flex align-items-center">
          <Link to={"/"} className="navbar-brand text-decoration-none">
            <span className="app-name">Food To Go</span>
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {showRestaurantBoard && (
              <li className="nav-item">
                <Link
                  to={`/restaurant/additem/${userinfo.id}`}
                  className="nav-link"
                >
                  Add New Item
                </Link>
              </li>
            )}

            {showRestaurantBoard && (
              <li className="nav-item">
                <Link
                  to={`/restaurantorders/${userinfo.id}`}
                  className="nav-link"
                >
                  View Orders
                </Link>
              </li>
            )}

            {showRestaurantBoard && (
              <li className="nav-item">
                <Link to={"/myitems"} className="nav-link">
                  My Items
                </Link>
              </li>
            )}

            {showUserBoard && (
              <li className="nav-item">
                <Link className="nav-link" to={`/userorders/${userinfo.id}`}>
                  Orders
                </Link>
              </li>
            )}

            {showUserBoard && (
              <li className="nav-item">
                <Link className="nav-link" to={`/searchitem`}>
                  Item Search
                </Link>
              </li>
            )}

            {userinfo.username ? (
              <>
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {userinfo.username}
                  </Link>
                </li>

                <li className="nav-item">
                  <a
                    href="/"
                    className="nav-link"
                    //onClick={logOut}
                  >
                    LogOut
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/signup"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Dashboard;
