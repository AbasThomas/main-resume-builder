// src/pages/HomePage.jsx
import React, { useMemo } from 'react';

export default function HomePage({ onStart }) {
  // Pre-generate 20 random lines
  const lines = useMemo(() => {
    return Array.from({ length: 20 }).map(() => ({
      // random top & left positions (0–100%)
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      // random width (20–80vw)
      width: Math.random() * 60 + 20 + 'vw',
      // random rotation (-30° to 30°)
      rotate: Math.random() * 60 - 30 + 'deg',
      // random animation delay (0–5s)
      delay: Math.random() * 5 + 's',
    }));
  }, []);

  return (
    <div className="relative homepage-container bg-[var(--almost-black)] text-white flex flex-col items-center justify-center h-screen overflow-hidden">
      {/* Yellow glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,255,59,0.15) 0%, transparent 70%)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Random writing lines */}
      {lines.map((line, i) => (
        <div
          key={i}
          className="absolute h-[1px] bg-[#FFFB3B] opacity-20 animate-fade"
          style={{
            top: line.top,
            left: line.left,
            width: line.width,
            transform: `rotate(${line.rotate})`,
            animationDelay: line.delay,
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 homepage-content flex flex-col items-center gap-[50px]">
        <h1 className="homepage-title text-6xl font-[1000]">
          Craft Your Resume Like a Pro
        </h1>
        <button
          className="homepage-button w-30 h-30 rounded-full border-4 border-[#FFFB3B] p-[12px]"
          onClick={onStart}
        >
          Let’s Start
        </button>
      </div>
    </div>
  );
}
