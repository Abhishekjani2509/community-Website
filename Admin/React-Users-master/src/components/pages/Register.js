import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const Register = () => {
  const { token } = useAuth();
  // console.log(token);
  const [users, setUsers] = useState([]);
  const apiUrl = "http://localhost:5000/api/users/registerReq";

  useEffect(() => {
    loadUsers();
  }, [apiUrl]);

  const loadUsers = async () => {
    try {
      const result = await axios.get(apiUrl, {
        headers: {
          "Content-Type": "application/json",
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
      // Uncomment the following lines if you want to delete a user
      await axios.put(
        `http://localhost:5000/api/users/admin/${id}`,
        {
          registerVerified: true,
          message: "Your Profile has been Registered",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Replace 'Bearer' with your authentication scheme if needed
          },
        }
      );
      loadUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Replace 'Bearer' with your authentication scheme if needed
        },
      });
      loadUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Register Requested Users Page</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Age</th>
              <th scope="col">Current Residence</th>
              <th scope="col">Date of Birth</th>
              <th>Approve Request</th>
              <th>Delete Request</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>{user.age}</td>
                <td>{user.residence}</td>
                <td>{user.Dob}</td>
                {/* <td>{user.id}</td> */}
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
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Register;
