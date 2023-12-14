import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const Navbar = () => {
  const history = useHistory();
  const { token } = useAuth();
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
    history.replace("/login");
    alert("Logout Successful");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        {/* <Link className="navbar-brand" to="/">
          Recat User
        </Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/register">
                Register_Requests
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/profile">
                Profile_requests
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/blog">
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        
        <button className="btn border-dark text-white" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
