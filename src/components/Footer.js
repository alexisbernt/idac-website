import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* ── Left: copyright ── */}
        <p className="footer-copy">
          © IAM LEARNING BLOG &nbsp;·&nbsp; Following the path to learn identity one step at a time.
        </p>

        {/* ── Right: links ── */}
        <nav className="footer-links" aria-label="Footer navigation">

          {/* Free Member → /about */}
          <Link to="/about" className="footer-link">
            Free Member
          </Link>

          <span className="footer-divider" aria-hidden="true">·</span>

          {/* Email — mailto keeps address out of plain text */}
          <a
            href="mailto:alexisbernthal4@gmail.com"
            className="footer-link"
            aria-label="Send an email"
          >
            Email
          </a>

          <span className="footer-divider" aria-hidden="true">·</span>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@alexisbernt"
            className="footer-link footer-link--icon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube channel"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              aria-hidden="true"
              className="footer-youtube-icon"
            >
              <path
                fill="currentColor"
                d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
              />
            </svg>
            <span>YouTube</span>
          </a>

        </nav>
      </div>
    </footer>
  );
}

export default Footer;