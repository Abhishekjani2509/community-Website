import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import axios from "axios";

const title = "Welcome";

const LogIn = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [userPhone, setUserPhone] = useState("");
  const [userPass, setUserPass] = useState("");

  const handlePhoneChange = (e) => {
    setUserPhone(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setUserPass(e.target.value);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/api/auth/login",
  //       {
  //         phone: userPhone,
  //         password: userPass,
  //       }
  //     );
  //     const data = response.data;

  //     if (response.status === 200) {
  //       // On successful authentication, get the token
  //       login(data.accessToken);
  //       // localStorage.setItem("jwtToken", token);
  //       navigate("/")
  //       alert("Login Successful")
  //     } else if (response.status === 401) {
  //       // Handle authentication error
  //       console.log(response.message);
  //       alert("Registration is not approved Wait")
  //     }else {
  //       // Handle authentication error
  //       console.error("Authentication failed");
  //     }
  //   } catch (error) {
  //     // Handle login error
  //     console.error("Login failed", error.response.data);
  //     alert(error.response.message)
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_DOMAIN}/api/auth/login`,
        {
          phone: userPhone,
          password: userPass,
        }
      );

      if (response.status === 200) {
        // On successful authentication, get the token
        const data = response.data;
        login(data.accessToken);
        // localStorage.setItem("jwtToken", token);
        navigate("/");
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
    } catch (error) {
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
    <section className="log-reg">
      <div className="top-menu-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-7">
              <div className="logo">
                <Link to="/">
                  <h4>Community Mitra</h4>
                </Link>
              </div>
            </div>

          {/* Back to Home */}

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
                    <label>Phone Number</label><br/>
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
                    <label>Password</label><br/>
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
