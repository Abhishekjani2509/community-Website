import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext";

const Blog = () => {
  const { token } = useAuth();
  const [users, setUsers] = useState([]);
  const [blogData, setBlogData] = useState({
    name: "",
    title: "",
    date: "",
    desc: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const apiUrl = `${process.env.REACT_APP_DOMAIN}/api/blog/all`;

  useEffect(() => {
    loadUsers();
  }, [apiUrl]);

  const loadUsers = async () => {
    try {
      const result = await axios.get(apiUrl);
      const data = result.data;
      setUsers(data);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_DOMAIN}/api/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Blog Deleted");
      loadUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData({
      ...blogData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_DOMAIN}/api/blog/create`, blogData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      closeModel();
      loadUsers();
      alert("Blog Added");
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1 className="text-center">All Blogs</h1>
        <button
          type="button"
          className="btn btn-primary mb-4"
          onClick={openModal}
        >
          Add Blog
        </button>

        <div
          className={`modal fade ${isModalOpen ? "show" : ""}`}
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden={!isModalOpen}
          style={{ display: isModalOpen ? "block" : "none" }}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="modal-dialog"
            role="document"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Blog
                </h5>
                <button
                  type="button"
                  className="close"
                  onClick={closeModel}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Name *"
                      className="form-control"
                      value={blogData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="by">Blog Title</label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Enter Blog title *"
                      className="form-control"
                      value={blogData.title}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="date">Blog Date</label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      placeholder="Enter Blog Date *"
                      className="form-control"
                      value={blogData.date}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="desc">Blog Description</label>
                    <input
                      type="text"
                      name="desc"
                      id="desc"
                      placeholder="Enter Blog Description *"
                      className="form-control"
                      value={blogData.desc}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Add Blog
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModel}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Date</th>
              <th>Delete Blog</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.title}</td>
                <td>{user.desc}</td>
                <td>{user.date}</td>
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

export default Blog;
