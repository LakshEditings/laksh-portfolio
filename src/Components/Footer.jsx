// src/Components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12 mt-20">
      <div className="container text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} V. Lakshen</p>
        <p className="mt-2">Committed to sustainable vehicles for a greener future.</p>
      </div>
    </footer>
  );
}