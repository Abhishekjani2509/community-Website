import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext";

const Profile = () => {
  const { token } = useAuth();
  const [users, setUsers] = useState([]);
  const apiUrl = `${process.env.DOMAIN}/api/users/profileReq`;

  useEffect(() => {
    loadUsers();
  }, [apiUrl]);

  const loadUsers = async () => {
    try {
      const result = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = result.data;
      setUsers(data);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  const updateUser = async (id) => {
    try {
      await axios.put(
        `${process.env.DOMAIN}/api/users/admin/${id}`,
        {
          profileVerified: true,
          message: "Your Profile has been verified",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      loadUsers();
      alert("User Verified");
    } catch (error) {
      console.error("Error Updating user:", error);
    }
  };

  const rejectUser = async (id) => {
    try {
      await axios.put(
        `${process.env.DOMAIN}/api/users/admin/${id}`,
        {
          isRejected: true,
          message:
            "Your Profile Details have been rejected, Update Your details for approval",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("User Rejected");
      loadUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="px-5">
      <div className="py-4">
        <h1>Profile Requested Users Page</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Father Name</th>
              <th scope="col">Mother Name</th>
              <th scope="col">Height</th>
              <th scope="col">Education</th>
              <th scope="col">Job details</th>
              <th scope="col">numberOfBrothers</th>
              <th scope="col">numberOfSisters</th>
              <th scope="col">maritalStatus</th>
              <th scope="col">description</th>
              <th>Action</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <React.Fragment key={index}>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.fullname}</td>
                  <td>{user.phone}</td>
                  <td>{user.fatherName}</td>
                  <td>{user.motherName}</td>
                  <td>{user.height}</td>
                  <td>{user.education}</td>
                  <td>{user.jobDetails}</td>
                  <td>{user.numberOfBrothers}</td>
                  <td>{user.numberOfSisters}</td>
                  <td>{user.maritalStatus}</td>
                  <td>{user.description}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => updateUser(user._id)}
                    >
                      Approve
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => rejectUser(user._id)}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
                {/* Separate row for images */}
                <tr key={`images_${index}`}>
                  <td colSpan="13">
                    {user.images.map((image, imgIndex) => (
                      // eslint-disable-next-line jsx-a11y/img-redundant-alt
                      <img
                        key={imgIndex}
                        src={image}
                        alt={`User ${index + 1} Image ${imgIndex + 1}`}
                        style={{
                          maxWidth: "150px",
                          maxHeight: "150px",
                          marginRight: "5px",
                        }}
                      />
                    ))}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
