import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import TimelineHome from './Components/TimelineHome';
import Activities from './Components/Activities';
import ActivityDetail from './Components/ActivityDetail';
import DocViewer from './Components/DocViewer';
import Footer from './Components/Footer';
import cvPdf from './Components/Resume/Lakshen CV 14.8.26 .pdf';
import resumePdf from './Components/Resume/Laksh Brief Resume 1 14.08.26.pdf';
import { getAchievements, getProjects } from './services/googleSheets';
import './index.css';

function App() {
  // Prefetch data in the background so it's ready when the user navigates
  useEffect(() => {
    getAchievements().catch(console.error);
    getProjects().catch(console.error);
  }, []);

  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<TimelineHome />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/activity/:title" element={<ActivityDetail />} />
            <Route path="/cv" element={<DocViewer title="Curriculum Vitae (CV)" file={cvPdf} downloadName="Lakshen CV.pdf" />} />
            <Route path="/resume" element={<DocViewer title="Resume" file={resumePdf} downloadName="Laksh Brief Resume.pdf" />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;