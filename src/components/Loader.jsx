// src/components/Loader.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import R3FBackground from './R3FBackground';

export default function Loader({ percent, stageText }) {
  const percentRef = useRef();

  // Animate % pulse on change
  useEffect(() => {
    if (percentRef.current) {
      gsap.fromTo(
        percentRef.current,
        { scale: 0.95, opacity: 0.8 },
        { scale: 1.05, opacity: 1, duration: 0.3, ease: 'power1.inOut' }
      );
    }
  }, [percent]);

  const R = 70;
  const strokeWidth = 4;
  const C = 2 * Math.PI * R;
  const dashoffset = C - (percent / 100) * C;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[var(--almost-black)] text-white z-50">
      <div className="absolute inset-0 z-0">
        <R3FBackground />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        <svg width={180} height={180} className="mb-6">
          <circle
            cx="90"
            cy="90"
            r={R}
            stroke="#222"
            strokeWidth={strokeWidth}
            fill="none"
          />
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
          className="text-5xl font-extrabold text-yellow-300"
          style={{
            textShadow: '0 0 10px #fffb3b, 0 0 20px #fffb3b',
          }}
        >
          {percent}%
        </div>
        <div className="mt-3 text-lg text-gray-400">{stageText}</div>
      </div>
    </div>
  );
}
