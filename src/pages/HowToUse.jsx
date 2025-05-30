import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import R3FBackground from '../components/R3FBackground';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

export default function HowToUse() {
  const navigate = useNavigate();
  const containerRef = useRef();
  const titleRef = useRef();
  const stepRefs = useRef([]);
  const buttonRef = useRef();

  // Initialize animations
  useEffect(() => {
    // Create timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });
    
    // Title animation
    const splitTitle = new SplitText(titleRef.current, { type: 'chars' });
    gsap.set(splitTitle.chars, { opacity: 0, y: 20 });
    
    tl.fromTo(
      splitTitle.chars,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.05 }
    );
    
    // Step animations
    stepRefs.current.forEach((step, i) => {
      tl.fromTo(
        step,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0 },
        i === 0 ? '-=0.5' : '-=0.3'
      );
    });
    
    // Button animation
    tl.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1 },
      '-=0.2'
    );
    
    // Continuous button glow
    gsap.to(buttonRef.current, {
      boxShadow: '0 0 15px rgba(255, 251, 59, 0.7)',
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: 'power1.inOut'
    });
    
    return () => {
      splitTitle.revert();
      tl.kill();
    };
  }, []);

  const handleProceed = () => navigate('/loader');

  const steps = [
    {
      step: '1',
      title: 'Fill in Your Details',
      description: 'Enter your personal information, work experience, and skills.',
    },
    {
      step: '2',
      title: 'Customize Your Resume',
      description: 'Adjust colors, fonts, and layout to match your preferences.',
    },
    {
      step: '3',
      title: 'Choose a Template',
      description: 'Select a template that suits your style and profession.',
    },
    {
      step: '4',
      title: 'Download or Share',
      description: 'Download your resume as a PDF or share it directly online.',
    }
  ];

  return (
    <div className="relative w-full min-h-screen text-white bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <R3FBackground blur />
      </div>
      
      <div 
        ref={containerRef} 
        className="relative z-10 flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6"
      >
        <h1 
          ref={titleRef} 
          className="text-4xl sm:text-5xl font-bold mb-12 text-center"
        >
          How To Use
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          {steps.map(({ step, title, description }, index) => (
            <div 
              key={step}
              ref={el => stepRefs.current[index] = el}
              className="bg-[#1a1a1d] bg-opacity-80 backdrop-blur-sm p-6 rounded-xl border border-[#333337] shadow-lg transform transition-all hover:scale-[1.02] hover:border-yellow-400"
            >
              <div className="flex items-start">
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-400 text-black flex items-center justify-center text-xl font-bold mr-4"
                  style={{ filter: 'drop-shadow(0 0 6px rgba(255, 251, 59, 0.8))' }}
                >
                  {step}
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold mb-2">{title}</h2>
                  <p className="text-gray-300 text-base sm:text-lg">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button
          ref={buttonRef}
          onClick={handleProceed}
          className="mt-16 px-8 py-3 rounded-full text-lg sm:text-xl font-bold bg-yellow-300 text-black hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 focus:outline-none"
          style={{ 
            filter: 'drop-shadow(0 0 8px rgba(255, 251, 59, 0.7))',
            boxShadow: '0 4px 14px rgba(255, 251, 59, 0.25)'
          }}
        >
          Let's Get Started
        </button>
      </div>
    </div>
  );
}