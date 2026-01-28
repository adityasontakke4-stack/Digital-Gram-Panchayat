import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function VillagersHome() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("loggeduser"));

  if (!user) {
    navigate("/Userlogin");
    return null;
  }

  const { first_name, last_name } = user;

  return (
    <div>
      {/* Villager Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={process.env.PUBLIC_URL + "logodg.png"} height="100" alt="logo" />
        <Link className="navbar-brand" to="/VillagersHome">
          Digital Grampanchayat
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <Link to="/VillagersHome" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="BrowseSchemes" className="nav-link">
                Browse Schemes
              </Link>
            </li>

            <li className="nav-item">
              <Link to="Register_problem" className="nav-link">
                Register Problem
              </Link>
            </li>

            <li className="nav-item">
              <Link to="Viewproblems" className="nav-link">
                View Problems
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/logout" className="nav-link text-danger">
                Logout
              </Link>
            </li>

          </ul>
        </div>
      </nav>

      {/* Dashboard */}
      <div className="container mt-3">
        <h3>Villagers Dashboard</h3>
        <p>Welcome <strong>{first_name} {last_name}</strong></p>
      </div>

      {/* Nested routes */}
      <Outlet />
    </div>
  );
}
