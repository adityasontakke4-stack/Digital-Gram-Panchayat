import { Link, Outlet } from "react-router-dom";

function VillagersHome() {
  return (
    <>
      {/* ✅ VILLAGERS NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img
          src={process.env.PUBLIC_URL + "/logodg.png"}
          height="60"
          alt="logo"
        />

        <ul className="navbar-nav ms-3">
          <li className="nav-item">
            <Link className="nav-link" to="/VillagersHome">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="BrowseSchemes">Browse Schemes</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="Register_problem">Register Problem</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="Viewproblems">View Problems</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="apply-certificate">
              Apply for Certificate
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-danger" to="/logout">
              Logout
            </Link>
          </li>
        </ul>
      </nav>

      {/* ✅ CHILD PAGES RENDER HERE */}
      <Outlet />
    </>
  );
}

export default VillagersHome;
