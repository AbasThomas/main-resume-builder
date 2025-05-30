import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import R3FBackground from './R3FBackground';

export default function Loader({ percent, stageText }) {
  const percentRef = useRef();
  const circleRef = useRef();
  const R = 70;
  const strokeWidth = 4;
  const C = 2 * Math.PI * R;
  const dashoffset = C - (percent / 100) * C;

  // Animate on mount and when percent changes
  useEffect(() => {
    if (percentRef.current && circleRef.current) {
      // Pulse animation for percentage text
      gsap.fromTo(
        percentRef.current,
        { scale: 0.95, opacity: 0.8 },
        { 
          scale: 1.05, 
          opacity: 1, 
          duration: 0.3,
          ease: "power1.out"
        }
      );
      
      // Smooth circle animation
      gsap.to(circleRef.current, {
        strokeDashoffset: dashoffset,
        duration: 0.3,
        ease: "power1.out"
      });
    }
  }, [percent, dashoffset]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#0a0a0a] text-white z-50">
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
            ref={circleRef}
            cx="90"
            cy="90"
            r={R}
            stroke="#FFFB3B"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={C}
            strokeDashoffset={C} // Start fully offset
            strokeLinecap="round"
            transform="rotate(-90 90 90)"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(255, 251, 59, 0.7)) drop-shadow(0 0 16px rgba(255, 251, 59, 0.5))',
            }}
          />
        </svg>
        <div 
          ref={percentRef} 
          className="text-5xl font-extrabold mb-2"
          style={{ 
            textShadow: '0 0 10px rgba(255, 251, 59, 0.7), 0 0 20px rgba(255, 251, 59, 0.5)',
            opacity: 0.8
          }}
        >
          {percent}%
        </div>
        <div className="mt-1 text-lg text-gray-300 font-medium">
          {stageText}
        </div>
      </div>
    </div>
  );
}