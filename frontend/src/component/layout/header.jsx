import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const HeaderOne = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate('/');
    alert("Logout Successful");
  };
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      setIsHeaderFixed(value > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header ${
        isHeaderFixed ? "header-fixed animated fadeInDown" : ""
      }`}
      id="navbar"
    >
      <div className="header__bottom">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">
              <img src="../assets/images/logo/logo.png" alt="logo" />
            </Link>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler--icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav mainmenu">
                <ul>
                  <li>
                    <NavLink to="/" className={"active"}>
                      Home
                    </NavLink>
                  </li>
                  {token ? (
                    <>
                      <li>
                        <NavLink to="/members" className="active">
                          Members
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/blog">Blog</NavLink>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <NavLink to="/blog">Blog</NavLink>
                      </li>
                    </>
                  )}

                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
              <div className="header__more">
                <button
                  className="default-btn dropdown-toggle"
                  type="button"
                  id="moreoption"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  My Account
                </button>
                <ul className="dropdown-menu" aria-labelledby="moreoption">
                  {token ? (
                    <>
                      <li>
                        <NavLink className="dropdown-item" to="/profile">
                          Your Profile
                        </NavLink>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link className="dropdown-item" to="/login">
                          Log In
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/register">
                          Sign Up
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
