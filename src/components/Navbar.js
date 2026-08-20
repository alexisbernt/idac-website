import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img
          src={process.env.PUBLIC_URL + "/iam-learning-logo.png"}
          alt="IAM Learning Logo"
          className="logo-image"
        />
        <p className="logo-subtitle">
          Connecting the biggest moments in tech, sports, and current events
        </p>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/videos">Videos</Link>
      </div>
    </nav>
  );
}

export default Navbar;