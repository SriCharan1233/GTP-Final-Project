import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../Redux/Slices/AuthenticationSlice";
import { useEffect } from "react";
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Mandatory Fields!!!
      </div>
    );
  }
};
const Login = () => {
  let navigate = useNavigate();
  const form = useRef();
  const checkBtn = useRef();

  const { userinfo } = useSelector((state) => {
    return state.Auth;
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  useEffect(() => {
    if (userinfo.username) {
      navigate("/");
    }
  });

  const handleLogin = (e) => {
    e.preventDefault();
    form.current.validateAll();
    dispatch(signIn({ username, password }));
  };
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-sm-6 col-md-4">
          <div className="card p-6">
            <div className="card-header text-center">
              <h4>Food To GO</h4>
            </div>
            <img
              src="../Images/apple.png"
              alt="profile-img"
              className="profile-img-card mx-auto mt-3"
            />
            <Form onSubmit={handleLogin} ref={form}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <Input
                  validations={[required]}
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={onChangeUsername}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                  validations={[required]}
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={onChangePassword}
                />
              </div>
              <div className="form-group d-flex justify-content-center">
                <button
                  className="btn btn-success btn-block w-50 mt-4"
                  disabled={loading}
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Login</span>
                </button>
              </div>
              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
              <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
