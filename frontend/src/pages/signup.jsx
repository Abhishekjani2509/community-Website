import React, { useState } from "react";
import { Link } from "react-router-dom";
import SelectMarid from "../component/select/selectmarid";

const SignUp = () => {
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConPassword, setRegConPassword] = useState("");

  const title = "Welcome to Ollya";
  const desc =
    "Let's create your profile! Just fill in the fields below, and we’ll get a new account.";
  const accTitle = "Account Details";

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
          <div className="image"></div>
          <div className="col-lg-7">
            <div className="log-reg-inner">
              <div className="section-header">
                <h2 className="title">{title} </h2>
                <p>{desc} </p>
              </div>
              <div className="main-content">
                <form action="#">
                  <h4 className="content-title">{accTitle}</h4>
                  <div className="form-group">
                    <label>Username*</label>
                    <input
                      type="text"
                      name="name"
                      id="item01"
                      placeholder="Enter Your Usewrname *"
                      className="my-form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address*</label>
                    <input
                      type="email"
                      name="email"
                      id="item02"
                      placeholder="Enter Your Email *"
                      className="my-form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Password*</label>
                    <input
                      type="password"
                      name="password"
                      id="item03"
                      placeholder="Enter Your Password *"
                      className="my-form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password*</label>
                    <input
                      type="password"
                      name="password"
                      id="item04"
                      placeholder="Enter Your Confirm Password *"
                      className="my-form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      name="Number"
                      id="item05"
                      placeholder="Enter Your Phone no *"
                      className="my-form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      id="item06"
                      placeholder="Enter Your Phone no *"
                      className="my-form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Age</label>
                    <input
                      type="text"
                      name="address"
                      id="item07"
                      placeholder="Enter Your Age*"
                      className="my-form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Current Residence</label>
                    <select className="my-form-control" name="cars" id="cars">
                      <option value="none" selected disabled hidden>
                        Select an Option
                      </option>
                      <option value="In Palghar">In Palghar</option>
                      <option value="Outside Palghar">Outside Palghar</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      name="date"
                      id="item09"
                      placeholder="Enter Your Date of Birth*"
                      className="my-form-control"
                    />
                  </div>
                  <button className="default-btn reverse">
                    <span>Create Your Profile</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
