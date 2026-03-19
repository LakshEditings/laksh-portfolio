// src/Components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/activities" className="nav-name">
          V Lakshen
        </Link>

        <div className="nav-links">
          <Link to="/about" className="nav-link">
            About
          </Link>
          <a
            href="https://x.com/Lakshen2006"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link-x"
          >
            𝕏 Follow me
          </a>
        </div>
      </div>
    </nav>
  );
}