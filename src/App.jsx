import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import HowToUse from './pages/HowToUse';
import ResumeBuilder from './pages/ResumeBuilder';
import LoaderScreen from './components/LoaderScreen';
import './App.css';
import './animations/Gsap'
import Text from './pages/Text'
export default function App() {
  const [showLoader, setShowLoader] = useState(false);

  return (
    <BrowserRouter>
      {showLoader && <LoaderScreen onComplete={() => setShowLoader(false)} />}
      <Routes>
        <Route path ="/test" element = {<Text/>}/>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-to-use" element={<HowToUse />} />
        <Route
          path="/loader"
          element={<LoaderScreen onComplete={() => setShowLoader(false)} />}
        />
        <Route path="/builder" element={<ResumeBuilder />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
