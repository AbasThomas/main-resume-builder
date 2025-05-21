// src/pages/HomePage.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HomePage({ onStart }) {
  const containerRef = useRef();
  const textRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    tl.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    ).fromTo(
      buttonRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.3"
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white flex items-center justify-center"
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, #111 0px, #111 2px, #000 2px, #000 20px)",
      }}
    >
      <div className="text-center space-y-8">
        <h1
          ref={textRef}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Craft Your Resume Like a Pro
        </h1>
        <button
          ref={buttonRef}
          onClick={onStart}
          className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-600 hover:to-purple-500 px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300"
        >
          Let’s Start
        </button>
      </div>
    </div>
  );
}
