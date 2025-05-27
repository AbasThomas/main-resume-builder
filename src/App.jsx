import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import HowToUse from './pages/HowToUse';
import ResumeBuilder from './pages/ResumeBuilder';
import LoaderScreen from './components/LoaderScreen';
import Text from './pages/Text';
import Navbar from './components/Navbar';

import './App.css';
import './animations/Gsap';

export default function App() {
  const [showLoader, setShowLoader] = useState(false);

  return (
    <div className="App overflow-hidden">
    <BrowserRouter>

      {/* Conditional loader (not routed) */}
      {showLoader && (
        <>
          <div className="absolute inset-0 z-0">
            <LoaderScreen onComplete={() => setShowLoader(false)} />
          </div>
        </>
      )}

      {/* Routes */}
      <Routes>
        <Route path="/test" element={<Text />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/how-to-use" element={<HowToUse />} />

        {/* Loader via route, optional */}
        <Route
          path="/loader"
          element={<LoaderScreen onComplete={() => setShowLoader(false)} />}
        />

        <Route path="/builder" element={<ResumeBuilder />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
