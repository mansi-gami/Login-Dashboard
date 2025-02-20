import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { route } from "../routes/RoutePath";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate(route.login);
  };
  return (
    <div className="header-content">
      <div>
        <h1
          style={{
            color: "white",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          DashBoard
        </h1>
      </div>
      <div>
        <nav>
          <Link to={route.home} className="nav-link">
            Home
          </Link>
          <Link to={route.profile} className="nav-link">
            Profile
          </Link>
          <Link to={route.about} className="nav-link">
            About
          </Link>
          <Link to={route.contact} className="nav-link">
            Contact
          </Link>

          <button className="btn" onClick={() => handleLogout()}>
            Logout
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
