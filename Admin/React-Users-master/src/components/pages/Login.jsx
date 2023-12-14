import React, { useState } from "react";
import axios from "axios";
import {useAuth} from "../../Context/AuthContext"
import { Link, NavLink,useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const {login} = useAuth();
  const [userPhone, setUserPhone] = useState("");
  const [userPass, setUserPass] = useState("");
  // const [message, setMessage] = useState("");

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
        "http://localhost:5000/api/auth/admin-login",
        {
          phone: userPhone,
          password: userPass,
        }
      );
      if (response.status === 200) {
        // On successful authentication, get the token
        const data = response.data;
        // const token = response.data.accessToken;
        login(data.accessToken);
        // localStorage.setItem("jwtToken", token);
        // navigate("/");
        history.replace("/");
        alert("Login Successful");
      } else if (response.status === 401) {
        // Handle authentication error
        const errorMessage = response.data || "Wrong credentials!";
        console.log(errorMessage);
        alert(errorMessage);
      } else {
        // Handle other status codes
        console.error("Authentication failed with status:", response.status);
        alert("Authentication failed");
      }
    } catch (error){
      // Handle login error
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Login failed with status:", error.response.status);
        alert("Login failed: " + error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received");
        alert("No response received");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request", error.message);
        alert("Error setting up the request");
      }
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="row">
        <div className="">
          <div className="log-reg-inner border p-4">
            <div className="section-header inloginp">
              <h2 className="title">Admin Login</h2>
            </div>
            <div className="main-content inloginp">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="item01">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter Your Phone Number *"
                    className="form-control"
                    value={userPhone}
                    onChange={handlePhoneChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="item02">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Your Password *"
                    className="form-control"
                    value={userPass}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    <span>Sign In</span>
                  </button>
                </div>
                {/* {message && <p className="text-center mt-3">{message}</p>} */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
