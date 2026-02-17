// src/Components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="container flex justify-between items-center h-16">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-black hover:text-gray-700"
        >
          V. Lakshen
        </Link>

        <div className="flex gap-8 text-[17px]">
          <Link to="/about" className="text-gray-700 hover:text-black">
            About
          </Link>
          {/* Add more if you want: Projects, Achievements, etc. */}
        </div>
      </div>
    </nav>
  );
}