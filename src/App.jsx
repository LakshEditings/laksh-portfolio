// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import TimelineHome from './Components/TimelineHome';
import About from './Components/About';
import YearPage from './Components/YearPage';
import Footer from './Components/Footer';
import './index.css';   // ← changed from App.css

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />

        <main className="pt-20">
          <Routes>
            <Route path="/" element={<TimelineHome />} />
            <Route path="/about" element={<About />} />
            {/* Dynamic year pages */}
            <Route path="/:year" element={<YearPage />} />
            {/* You can keep adding /projects, /achievements later if wanted */}
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;