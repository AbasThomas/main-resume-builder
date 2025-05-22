// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import HowToUse      from './pages/HowToUse';
import HomePage      from './pages/HomePage';
import ResumeBuilder from './pages/ResumeBuilder';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Default landing → How To Use */}
        <Route path="/how-to-use" element={<HowToUse />} />

        {/* After “Continue” → Intro + Loader */}
        

        {/* Final builder */}
        <Route path="/builder" element={<ResumeBuilder />} />

        {/* Fallback for any unknown URL */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
