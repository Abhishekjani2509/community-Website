import React, { useEffect, useState } from "react";
import HeaderOne from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import { useAuth } from "../Context/AuthContext";

const Profile = () => {
  const { token } = useAuth();
  const [userData, setUserData] = useState({});
  const [updateData, setUpdateData] = useState({
    fullname: "",
    phone: "",
    email: "",
    address: "",
    age: "",
    Dob: "",
    fatherName: "",
    motherName: "",
    profileimg: "",
    height: "",
    education: "",
    jobDetails: "",
    numberOfBrothers: "",
    numberOfSisters: "",
    maritalStatus: "",
    description: "",
    _id: "",
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/users/profile",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const userData = await response.json();
          setUserData(userData);
          setUpdateData(userData); // Initialize updateData with current user data
          // console.log(userData)
        } else {
          const errorData = await response.json();
          console.log(errorData.message || "Failed to fetch user profile");
        }
      } catch (error) {
        console.log("Error fetching user profile" + error.message);
      }
    };

    fetchUserProfile();
  }, [token]);

  const handleInputChange = (field, value) => {
    setUpdateData({
      ...updateData,
      [field]: value,
    });
  };

  const handleUpdateProfile = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/users/${updateData._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updateData),
        }
      );

      if (response.ok) {
        const updatedUserData = await response.json();
        setUserData(updatedUserData);
        console.log("User profile updated successfully");
        alert("Profile updated, will be displayed after approval!!");
        window.location.reload();
      } else {
        const errorData = await response.json();
        console.log(errorData.message || "Failed to update user profile");
      }
    } catch (error) {
      console.log("Error updating user profile" + error.message);
    }
  };

  return (
    <div>
      <HeaderOne />
      <PageHeader title={"Your Profile"} curPage={"Profile"} />
      <form>
        {/* Base Info */}
        <div className="col-xl-3 order-xl-0 mb-4">
          <div className="group__bottom--center">
            <div className="story__item style2">
              <div className="story__inner">
                <div className="story__thumb position-relative">
                  <img
                    src={userData.profileimg}
                    alt="Profile Img"
                    // style={{ width: "200px", height: "200px" }}
                  />
                </div>
                <div className="story__content px-0 pb-0">
                  <h3>{userData.fullname}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="info-card mb-4">
          <div className="info-card-title">
            <h6>Base Info</h6>
          </div>
          <div className="info-card-content">
            <ul className="info-list">
              <li>
                <p className="info-name">Name</p>
                <p className="info-details">{userData.fullname}</p>
              </li>
              <li>
                <p className="info-name">Phone</p>
                <p className="info-details">{userData.phone}</p>
              </li>
              <li>
                <p className="info-name">Email</p>
                <p className="info-details">{userData.email}</p>
              </li>
              <li>
                <p className="info-name">Address</p>
                <p className="info-details">{userData.address}</p>
              </li>
              <li>
                <p className="info-name">Age</p>
                <p className="info-details">{userData.age}</p>
              </li>
              <li>
                <p className="info-name">Gender</p>
                <p className="info-details">{userData.gender}</p>
              </li>
              <li>
                <p className="info-name">Residence</p>
                <p className="info-details">{userData.residence}</p>
              </li>
              <li>
                <p className="info-name">Date of Birth</p>
                <p className="info-details">{userData.Dob}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="info-card mb-4">
          <div className="info-card-title">
            <h6>Profile Details</h6>
          </div>
          <div className="info-card-content">
            <ul className="info-list">
              <li>
                <p className="info-name">Father's Name</p>
                <p className="info-details">{userData.fatherName}</p>
              </li>
              <li>
                <p className="info-name">Mother's Name</p>
                <p className="info-details">{userData.motherName}</p>
              </li>
              <li>
                <p className="info-name">Height</p>
                <p className="info-details">{userData.height}</p>
              </li>
              <li>
                <p className="info-name">Education</p>
                <p className="info-details">{userData.education}</p>
              </li>
              <li>
                <p className="info-name">Job Details</p>
                <p className="info-details">{userData.jobDetails}</p>
              </li>
              <li>
                <p className="info-name">Number of Brothers</p>
                <p className="info-details">{userData.numberOfBrothers}</p>
              </li>
              <li>
                <p className="info-name">Number of Sisters</p>
                <p className="info-details">{userData.numberOfSisters}</p>
              </li>
              <li>
                <p className="info-name">Marital Status</p>
                <p className="info-details">{userData.maritalStatus}</p>
              </li>
            </ul>
          </div>
        </div>
        {/* Myself Summary */}
        <div className="info-card mb-4">
          <div className="info-card-title">
            <h6>Myself Description</h6>
          </div>
          <div className="info-card-content">
            <p>{userData.description}</p>
          </div>
        </div>
        {/* Update Form */}
        <div className="info-card mb-4">
          <div className="info-card-title">
            <h6>Update Your Profile</h6>
          </div>
          <div className="info-card-content">
            <div className="update-list d-flex flex-wrap">
              {/* <div className="update-item form-group">
                <label
                  className="update-label"
                  style={{
                    width: "150px",
                    height: "30px",
                    lineHeight: "30px",
                    textAlign: "center",
                  }}
                >
                  Full Name:
                </label>
                <input
                  type="text"
                  className="update-input"
                  style={{
                    width: "calc(50% - 10px)",
                    border: "2px solid #ccc",
                    marginLeft: "10px",
                    marginBottom: "10px",
                  }}
                  value={updateData.fullname || ""}
                  onChange={(e) =>
                    handleInputChange("fullname", e.target.value)
                  }
                />
              </div> */}
              <div className="update-item form-group">
                <label
                  className="update-label"
                  style={{
                    width: "150px",
                    height: "30px",
                    lineHeight: "30px",
                    textAlign: "center",
                  }}
                >
                  Phone:
                </label>
                <input
                  type="text"
                  className="update-input"
                  style={{
                    width: "calc(50% - 10px)",
                    border: "2px solid #ccc",
                    marginLeft: "10px",
                    marginBottom: "10px",
                  }}
                  value={updateData.phone || ""}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
              </div>
              {/* <div className="update-item form-group">
                <label
                  className="update-label"
                  style={{
                    width: "150px",
                    height: "30px",
                    lineHeight: "30px",
                    textAlign: "center",
                  }}
                >
                  Email:
                </label>
                <input
                  type="text"
                  className="update-input"
                  style={{
                    width: "calc(50% - 10px)",
                    border: "2px solid #ccc",
                    marginLeft: "10px",
                    marginBottom: "10px",
                  }}
                  value={updateData.email || ""}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div> */}
              <div className="update-item form-group">
                <label
                  className="update-label"
                  style={{
                    width: "150px",
                    height: "30px",
                    lineHeight: "30px",
                    textAlign: "center",
                  }}
                >
                  Address:
                </label>
                <input
                  type="text"
                  className="update-input"
                  style={{
                    width: "calc(50% - 10px)",
                    border: "2px solid #ccc",
                    marginLeft: "10px",
                    marginBottom: "10px",
                  }}
                  value={updateData.address || ""}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                />
              </div>
              {/* <div className="update-item form-group">
                <label
                  className="update-label"
                  style={{
                    width: "150px",
                    height: "30px",
                    lineHeight: "30px",
                    textAlign: "center",
                  }}
                >
                  Age:
                </label>
                <input
                  type="text"
                  className="update-input"
                  style={{
                    width: "calc(50% - 10px)",
                    border: "2px solid #ccc",
                    marginLeft: "10px",
                    marginBottom: "10px",
                  }}
                  value={updateData.age || ""}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                />
              </div> */}
              {/* <div className="update-item form-group">
                <label
                  className="update-label"
                  style={{
                    width: "150px",
                    height: "30px",
                    lineHeight: "30px",
                    textAlign: "center",
                  }}
                >
                  Date of Birth:
                </label>
                <input
                  type="text"
                  className="update-input"
                  style={{
                    width: "calc(50% - 10px)",
                    border: "2px solid #ccc",
                    marginLeft: "10px",
                    marginBottom: "10px",
                  }}
                  value={updateData.Dob || ""}
                  onChange={(e) => handleInputChange("Dob", e.target.value)}
                />
              </div> */}
              <div className="update-item form-group">
                <label
                  className="update-label"
                  style={{
                    width: "150px",
                    height: "30px",
                    lineHeight: "30px",
                    textAlign: "center",
                  }}
                >
                  Father's Name:
                </label>
                <input
                  type="text"
                  className="update-input"
                  style={{
                    width: "calc(50% - 10px)",
                    border: "2px solid #ccc",
                    marginLeft: "10px",
                    marginBottom: "10px",
                  }}
                  value={updateData.fatherName || ""}
                  onChange={(e) =>
                    handleInputChange("fatherName", e.target.value)
                  }
                />
              </div>
              <div className="update-item form-group">
                <label
                  className="update-label"
                  style={{
                    width: "150px",
                    height: "30px",
                    lineHeight: "30px",
                    textAlign: "center",
                  }}
                >
                  Mother's Name:
                </label>
                <input
                  type="text"
                  className="update-input"
                  style={{
                    width: "calc(50% - 10px)",
                    border: "2px solid #ccc",
                    marginLeft: "10px",
                    marginBottom: "10px",
                  }}
                  value={updateData.motherName || ""}
                  onChange={(e) =>
                    handleInputChange("motherName", e.target.value)
                  }
                />
              </div>
              <div className="update-item form-group">
                <label
                  className="update-label"
                  style={{
                    width: "150px",
                    height: "30px",
                    lineHeight: "30px",
                    textAlign: "center",
                  }}
                >
                  Height:
                </label>
                <input
                  type="text"
                  className="update-input"
                  style={{
                    width: "calc(50% - 10px)",
                    border: "2px solid #ccc",
                    marginLeft: "10px",
                    marginBottom: "10px",
                  }}
                  value={updateData.height || ""}
                  onChange={(e) => handleInputChange("height", e.target.value)}
                />
              </div>
              <div className="update-item form-group">
                <label
                  className="update-label"
                  style={{
                    width: "150px",
                    height: "30px",
                    lineHeight: "30px",
                    textAlign: "center",
                  }}
                >
                  Education:
                </label>
                <input
                  type="text"
                  className="update-input"
                  style={{
                    width: "calc(50% - 10px)",
                    border: "2px solid #ccc",
                    marginLeft: "10px",
                    marginBottom: "10px",
                  }}
                  value={updateData.education || ""}
                  onChange={(e) =>
                    handleInputChange("education", e.target.value)
                  }
                />
              </div>
              <div className="update-item form-group">
                <label
                  className="update-label"
                  style={{
                    width: "150px",
                    height: "30px",
                    lineHeight: "30px",
                    textAlign: "center",
                  }}
                >
                  Job Details:
                </label>
                <input
                  type="text"
                  className="update-input"
                  style={{
                    width: "calc(50% - 10px)",
                    border: "2px solid #ccc",
                    marginLeft: "10px",
                    marginBottom: "10px",
                  }}
                  value={updateData.jobDetails || ""}
                  onChange={(e) =>
                    handleInputChange("jobDetails", e.target.value)
                  }
                />
              </div>
              <div className="update-item form-group">
                <label
                  className="update-label"
                  style={{
                    width: "160px",
                    height: "30px",
                    lineHeight: "30px",
                    textAlign: "center",
                  }}
                >
                  Number of Brothers:
                </label>
                <input
                  type="text"
                  className="update-input"
                  style={{
                    width: "calc(50% - 10px)",
                    border: "2px solid #ccc",
                    marginLeft: "10px",
                    marginBottom: "10px",
                  }}
                  value={updateData.numberOfBrothers || ""}
                  onChange={(e) =>
                    handleInputChange("numberOfBrothers", e.target.value)
                  }
                />
              </div>
              <div className="update-item form-group">
                <label
                  className="update-label"
                  style={{
                    width: "150px",
                    height: "30px",
                    lineHeight: "30px",
                    textAlign: "center",
                  }}
                >
                  Number of Sisters:
                </label>
                <input
                  type="text"
                  className="update-input"
                  style={{
                    width: "calc(50% - 10px)",
                    border: "2px solid #ccc",
                    marginLeft: "10px",
                    marginBottom: "10px",
                  }}
                  value={updateData.numberOfSisters || ""}
                  onChange={(e) =>
                    handleInputChange("numberOfSisters", e.target.value)
                  }
                />
              </div>
              <div className="update-item form-group">
                <label
                  className="update-label"
                  style={{
                    width: "150px",
                    height: "30px",
                    lineHeight: "30px",
                    textAlign: "center",
                  }}
                >
                  Marital Status:
                </label>
                <input
                  type="text"
                  className="update-input"
                  style={{
                    width: "calc(50% - 10px)",
                    border: "2px solid #ccc",
                    marginLeft: "10px",
                    marginBottom: "10px",
                  }}
                  value={updateData.maritalStatus || ""}
                  onChange={(e) =>
                    handleInputChange("maritalStatus", e.target.value)
                  }
                />
              </div>
              <div className="update-item form-group">
                <label
                  className="update-label"
                  style={{
                    width: "150px",
                    height: "30px",
                    lineHeight: "30px",
                    textAlign: "center",
                  }}
                >
                  Description:
                </label>
                <textarea
                  className="update-textarea"
                  style={{
                    width: "calc(50% - 10px)",
                    border: "2px solid #ccc",
                    marginLeft: "10px",
                    marginBottom: "10px",
                  }}
                  value={updateData.description || ""}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                />
              </div>
            </div>
            <button
              type="button"
              className="update-button default-btn"
              onClick={handleUpdateProfile}
            >
              Update Profile
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
