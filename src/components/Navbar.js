import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img
          src="/iam-learning-logo.png"
          alt="IAM Learning Logo"
          className="logo-image"
        />
        <p className="logo-subtitle">
          A blog by Alexis Bernthal
        </p>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;