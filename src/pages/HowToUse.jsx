import React from 'react';
import { useNavigate } from 'react-router-dom';
import R3FBackground from '../components/R3FBackground';

export default function HowToUse() {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/loader');
  };

  return (
    <div className="relative w-full h-screen text-white bg-[var(--almost-black)] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <R3FBackground blur />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">How To Use</h2>
        <p className="max-w-xl text-lg text-gray-300 mb-8">
          Learn how to craft your resume with our AI-enhanced builder. Follow simple steps, choose styles, and export professionally.
        </p>
        <button
          onClick={handleProceed}
          className="px-6 py-3 rounded-full text-lg font-bold bg-yellow-300 text-black hover:bg-yellow-400 transition"
        >
          Proceed
        </button>
      </div>
    </div>
  );
}
