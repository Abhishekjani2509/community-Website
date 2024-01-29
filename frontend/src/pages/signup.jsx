import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    gender: "",
    address: "",
    age: "",
    residence: "",
    Dob: "",
  });

  const [profileImg, setProfileImg] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // If the input is a file input, handle it separately
    if (name === "profileimg") {
      handleImageChange(e);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file)
    setProfileImg(file);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = `${process.env.REACT_APP_DOMAIN}/api/auth/register`;

      const formDataWithImage = new FormData();

      // Append the profile image only if it's not null or undefined
      if (profileImg) {
        formDataWithImage.append("profileimg", profileImg);
      }

      // Append other form data to FormData
      Object.entries(formData).forEach(([key, value]) => {
        formDataWithImage.append(key, value);
      });

      const response = await fetch(apiUrl, {
        method: "POST",
        body: formDataWithImage,
      });
      
      // Assuming you still want to log the form data for debugging purposes
      // console.log("FormData with image:", formDataWithImage);
      
      

      if (response.ok) {
        const data = await response.json();
        console.log(data)
        navigate("/");
        alert("Registration Done, Login Now");
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error submitting registration:", error.message);
      // Handle specific status codes or display a general error message
      alert("Registration failed. Please try again.");
    }
  };
  const title = "Welcome to Community Mitra";
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
                  <h4>Community Mitra</h4>
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
                <form onSubmit={handleFormSubmit}>
                  <h4 className="content-title">{accTitle}</h4>
                  <div className="form-group">
                    <label>Username*</label>
                    <input
                      type="text"
                      name="fullname"
                      id="item01"
                      placeholder="Enter Your Fullname *"
                      className="my-form-control"
                      onChange={handleInputChange}
                      required
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
                      onChange={handleInputChange}
                      autoComplete="username"
                      required
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
                      onChange={handleInputChange}
                      autoComplete="current-password"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password*</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="item04"
                      placeholder="Enter Your Confirm Password *"
                      className="my-form-control"
                      onChange={handleInputChange}
                      autoComplete="new-password"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      id="item05"
                      placeholder="Enter Your Phone no *"
                      className="my-form-control"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      id="item06"
                      placeholder="Enter Address *"
                      className="my-form-control"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Age</label>
                    <input
                      type="text"
                      name="age"
                      id="item07"
                      placeholder="Enter Your Age*"
                      className="my-form-control"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Current Residence</label>
                    <select
                      className="my-form-control"
                      name="residence"
                      id="residence"
                      value={formData.residence}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="In Palghar">In Palghar</option>
                      <option value="Outside Palghar">Outside Palghar</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Gender</label>
                    <select
                      className="my-form-control"
                      name="gender"
                      id="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      name="Dob"
                      id="item09"
                      placeholder="Enter Your Date of Birth*"
                      className="my-form-control"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Profile Picture</label>
                    <input
                      type="file"
                      accept="image/*"
                      name="profileimg"
                      id="item08"
                      className="my-form-control"
                      style={{
                        padding: "10px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        color: "#333",
                        cursor: "pointer",
                      }}
                      onChange={handleInputChange}
                    />
                  </div>
                  {/* <div className="form-group">
                    <label>Profile Picture</label>
                    <input
                      type="file"
                      accept="image/*"
                      multiple="multiple"
                      name="profilePicture"
                      id="item10"
                      className="my-form-control"
                      style={{
                        padding: "10px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        color: "#333",
                        cursor: "pointer",
                      }}
                      onChange={handleInputChange}
                    />
                  </div> */}
                  <button type="submit" className="default-btn reverse">
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
