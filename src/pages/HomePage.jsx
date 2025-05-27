import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import R3FBackground from '../components/R3FBackground';
import Navbar from '../components/Navbar';

export default function HomePage() {
  const fullTitle = 'Craft Your Resume Like a Pro';
  const [displayed, setDisplayed] = useState('');
  const subtitleRef = useRef();
  const buttonRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      setDisplayed(fullTitle.slice(0, idx + 1));
      idx++;
      if (idx === fullTitle.length) {
        clearInterval(interval);
        gsap.fromTo(subtitleRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.8 });
        gsap.fromTo(buttonRef.current, { scale: 0.8, opacity: 0 }, {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          delay: 1.0,
        });
        gsap.to(buttonRef.current, {
          scale: 1.05,
          boxShadow: '0 0 20px #fffb3b, 0 0 40px #fffb3b',
          repeat: -1,
          yoyo: true,
          duration: 1.5,
          delay: 1.8,
        });
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

 return (
  <div className="relative w-full h-screen text-white overflow-hidden bg-[var(--almost-black)]">
    <div className="absolute inset-0 z-0">
      <R3FBackground />
    </div>
    <Navbar/>
    {/* Main Content */}
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
        onClick={() => navigate('/how-to-use')}
        className="mt-10 rounded-full border-4 border-yellow-300 px-6 py-3 text-lg font-bold hover:bg-yellow-300 hover:text-black transition-all duration-300 shadow-xl opacity-0 transform scale-75"
      >
        Let’s Start
      </button>
    </div>

    {/* Footer - Terms & Conditions */}
    <div className="absolute bottom-4 w-full text-center text-[#95989B] text-sm z-10 italic">
      * Terms and Conditions Apply *
    </div>
  </div>
);

}
