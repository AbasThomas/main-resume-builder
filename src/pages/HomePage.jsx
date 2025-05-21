// src/pages/HomePage.jsx
import React from 'react';

export default function HomePage({ onStart }) {
  return (
    <div className="homepage-container bg-[var(--almost-black)] text-white flex flex-col items-center justify-center h-screen">
      <div className="homepage-content">
        <h1 className="homepage-title">Craft Your Resume Like a Pro</h1>
        <button className="homepage-button" onClick={onStart}>
          Let’s Start
        </button>
      </div>
    </div>
  );
}
