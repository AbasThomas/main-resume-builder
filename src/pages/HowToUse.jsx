// src/pages/HomePage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import R3FBackground from '../components/R3FBackground';

export default function HomePage() {
  const navigate = useNavigate();
  const fullTitle = 'Craft Your Resume Like a Pro';
  const [displayed, setDisplayed] = useState('');
  const [loading, setLoading]     = useState(false);
  const [percent, setPercent]     = useState(0);
  const [stageText, setStageText] = useState('Getting Ready...');
  const subtitleRef = useRef();
  const buttonRef   = useRef();

  // Typewriter + GSAP intro
  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      setDisplayed(fullTitle.slice(0, idx + 1));
      idx++;
      if (idx === fullTitle.length) {
        clearInterval(interval);
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.2 }
        );
        gsap.fromTo(
          buttonRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)', delay: 1.0 }
        );
        gsap.to(buttonRef.current, {
          scale: 1.05,
          boxShadow: '0 0 20px #fffb3b, 0 0 40px #fffb3b',
          repeat: -1,
          yoyo: true,
          duration: 1.5,
          ease: 'sine.inOut',
          delay: 1.8,
        });
      }
    }, 100);
    return () => clearInterval(interval);
  }, [fullTitle]);

  // Kick off loader
  const handleStart = () => setLoading(true);

  // Loader animation
  useEffect(() => {
    if (!loading) return;
    let pct = 0;
    const stages = [
      { threshold: 33, text: 'Getting Ready...' },
      { threshold: 66, text: 'Almost There...' },
      { threshold: 100, text: 'Finishing Up...' },
    ];

    const loader = setInterval(() => {
      pct += 1;
      setPercent(pct);
      const stage = stages.find(s => pct <= s.threshold);
      setStageText(stage.text);
      if (pct >= 100) {
        clearInterval(loader);
        setTimeout(() => navigate('/builder'), 300);
      }
    }, 30);

    return () => clearInterval(loader);
  }, [loading, navigate]);

  // Circle math
  const R = 50;
  const C = 2 * Math.PI * R;

  return (
    <div className="relative w-full h-screen text-white overflow-hidden bg-[var(--almost-black)]">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <R3FBackground />
      </div>

      {loading ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <svg width={200} height={200} className="mb-6 loader-svg-glow">
            <circle cx="100" cy="100" r={90} stroke="#333" strokeWidth="4" fill="none" />
            <circle
              cx="100"
              cy="100"
              r={90}
              stroke="#FFFB3B"
              strokeWidth="4"
              fill="none"
              strokeDasharray={C}
              strokeDashoffset={C * (1 - percent / 100)}
              strokeLinecap="round"
            />
          </svg>
          <div className="text-5xl font-bold">{percent}%</div>
          <div className="mt-2 text-lg text-gray-300">{stageText}</div>
        </div>
      ) : (
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            {displayed}<span className="cursor">|</span>
          </h1>
          <p ref={subtitleRef} className="mt-4 text-lg sm:text-xl text-gray-300 max-w-xl opacity-0">
            AI-enhanced. Fast. Sleek. Professional.
          </p>
          <button
            ref={buttonRef}
            onClick={handleStart}
            className="mt-10 rounded-full border-4 border-yellow-300 px-6 py-3 text-lg font-bold hover:bg-yellow-300 hover:text-black transition-all duration-300 shadow-xl opacity-0 transform scale-75"
          >
            Let’s Start
          </button>
        </div>
      )}
    </div>
  );
}
