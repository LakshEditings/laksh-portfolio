// src/Components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} V. Lakshen</p>
      </div>
    </footer>
  );
}