import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import axios from "axios";

const title = "Welcome to Ollya";

const LogIn = () => {
  const {login} = useAuth();
  const navigate = useNavigate();
  const [userPhone, setUserPhone] = useState("");
  const [userPass, setUserPass] = useState("");

  const handlePhoneChange = (e) => {
    setUserPhone(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setUserPass(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          phone: userPhone,
          password: userPass,
        }
      );
      const data = response.data;

      if (response.status === 200) {
        // On successful authentication, get the token
        login(data.accessToken);
        // localStorage.setItem("jwtToken", token);
        navigate("/")
        alert("Login Successful")
      } else {
        // Handle authentication error
        console.error("Authentication failed");
      }
    } catch (error) {
      // Handle login error
      console.error("Login failed", error.response.data);
    }
  };

  return (
    <section className="log-reg">
            <div className="top-menu-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-7">
              <div className="logo">
                <Link to="/">
                  <img src="assets/images/logo/logo.png" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-5">
              <Link to="/" className="backto-home">
                <i className="fas fa-chevron-left"></i> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="image image-log"></div>
          <div className="col-lg-7">
            <div className="log-reg-inner">
              <div className="section-header inloginp">
                <h2 className="title">{title}</h2>
              </div>
              <div className="main-content inloginp">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      id="item01"
                      placeholder="Enter Your Phone Number *"
                      className="my-form-control"
                      value={userPhone}
                      onChange={handlePhoneChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      id="item02"
                      placeholder="Enter Your Password *"
                      className="my-form-control"
                      value={userPass}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <p className="f-pass">
                    Forgot your password? <a href="#">recover password</a>
                  </p>
                  <div className="text-center">
                    <button type="submit" className="default-btn">
                      <span>Sign IN</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
