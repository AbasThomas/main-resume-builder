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
import ModernResume from './components/templates/ModernResume';
import Bold from './Templates/Bold';
import Classic from './Templates/Classic';
import Distinct from './Templates/Distinct';
import Modern from './Templates/Modern';
import ElegantTemplate from './Templates/Elegant';

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
        <Route path="/bold" element={<Bold/>} />
        <Route path="/classic" element={<Classic/>} />
        <Route path="/distinct" element={<Distinct/>} />
        <Route path="/Modern" element={<Modern/>} />
        <Route path="/elegant" element={<ElegantTemplate/>} />


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
