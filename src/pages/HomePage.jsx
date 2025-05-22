import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import R3FBackground from '../components/R3FBackground';

export default function HomePage({ onStart }) {
  const fullTitle = 'Craft Your Resume Like a Pro';
  const [displayed, setDisplayed] = useState('');
  const [loading, setLoading] = useState(false);
  const [percent, setPercent] = useState(0);
  const [stageText, setStageText] = useState('Getting Ready...');
  const subtitleRef = useRef();
  const buttonRef = useRef();
  const percentRef = useRef();

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
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: 'back.out(1.7)',
            delay: 1.0,
          }
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
  }, []);

  const handleStart = () => {
    setLoading(true);
    setPercent(0);
  };

  useEffect(() => {
    if (!loading) return;

    const stages = [
      { threshold: 33, text: 'Getting Ready...' },
      { threshold: 66, text: 'Almost There...' },
      { threshold: 100, text: 'Finishing Up...' },
    ];

    let pct = 0;
    const loader = setInterval(() => {
      pct += 1;
      setPercent(pct);
      const stage = stages.find(s => pct <= s.threshold);
      setStageText(stage.text);

      gsap.fromTo(
        percentRef.current,
        { scale: 0.95, opacity: 0.8 },
        { scale: 1.05, opacity: 1, duration: 0.3, ease: 'power1.inOut' }
      );

      if (pct >= 100) {
        clearInterval(loader);
        setTimeout(onStart, 500);
      }
    }, 30);

    return () => clearInterval(loader);
  }, [loading, onStart]);

  // Circle parameters
  const R = 70; // larger radius
  const strokeWidth = 4; // thinner stroke
  const C = 2 * Math.PI * R;
  const dashoffset = C - (percent / 100) * C;

  return loading ? (
    // ——— Loading Overlay ———
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[var(--almost-black)] text-white z-50">
      <div className="absolute inset-0 z-0">
        <R3FBackground />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        <svg width={180} height={180} className="mb-6">
          {/* Back circle */}
          <circle
            cx="90"
            cy="90"
            r={R}
            stroke="#222"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Glowing progress ring */}
          <circle
            cx="90"
            cy="90"
            r={R}
            stroke="#FFFB3B"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={C}
            strokeDashoffset={dashoffset}
            strokeLinecap="round"
            transform="rotate(-90 90 90)"
            style={{
              filter: 'drop-shadow(0 0 8px #fffb3b) drop-shadow(0 0 16px #fffb3b)',
              transition: 'stroke-dashoffset 0.3s ease-out',
            }}
          />
        </svg>

        <div
          ref={percentRef}
          className="text-5xl font-extrabold text-yellow-300 transition-all duration-300"
          style={{
            textShadow: '0 0 10px #fffb3b, 0 0 20px #fffb3b',
          }}
        >
          {percent}%
        </div>
        <div className="mt-3 text-lg text-gray-400">{stageText}</div>
      </div>
    </div>
  ) : (
    // ——— Normal Home Page ———
    <div className="relative w-full h-screen text-white overflow-hidden bg-[var(--almost-black)]">
      <div className="absolute inset-0 z-0">
        <R3FBackground />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <h1
          className="text-5xl sm:text-6xl font-extrabold tracking-tight"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          {displayed}
          <span className="cursor">|</span>
        </h1>
        <p
          ref={subtitleRef}
          className="mt-4 text-lg sm:text-xl text-gray-300 max-w-xl opacity-0"
        >
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
    </div>
  );
}
