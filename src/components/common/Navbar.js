import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { removeToken } from "../../app/api";

const Navbar = ({ handleLogout }) => {
  // const location = window.location.pathname;
  const [path, setPath] = useState("/");
  const navigate = useNavigate();

  useEffect(() => {
    setPath(window.location.pathname);
  }, [window.location.pathname]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            DK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                className={`nav-link ${path === "" ? "active" : ""}`}
                aria-current="page"
                to="/"
              >
                Orgnizations List
              </Link>
              <Link
                className={`nav-link ${
                  path === "/add-orgnization" ? "active" : ""
                }`}
                aria-current="page"
                to="/add-orgnization"
              >
                Add Orgnization
              </Link>

              <button
                className={`nav-link`}
                aria-current="page"
                onClick={() => {
                  // dispatch(resetUserData());
                  handleLogout();
                  removeToken();
                  navigate("/");
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
