import React, { useEffect, useState, useRef } from 'react';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

export default function LoaderScreen({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [stageText, setStageText] = useState('Getting Ready...');
  const navigate = useNavigate();
  const progressRef = useRef(0);
  const animationRef = useRef();

  useEffect(() => {
    const stages = [
      { threshold: 30, text: 'Initializing...' },
      { threshold: 60, text: 'Loading resources...' },
      { threshold: 85, text: 'Finalizing...' },
      { threshold: 100, text: 'Almost done...' },
    ];

    // Create smooth animation timeline
    const tl = gsap.timeline({
      onUpdate: () => {
        const pct = Math.floor(progressRef.current);
        setPercent(pct);
        
        // Find current stage based on progress
        const currentStage = stages.find(stage => pct <= stage.threshold) || stages[stages.length - 1];
        setStageText(currentStage.text);
      },
      onComplete: () => {
        // Completion animation
        gsap.delayedCall(0.5, () => {
          onComplete?.();
          navigate('/builder');
        });
      }
    });

    // Add smooth progress animation
    tl.to(progressRef, {
      current: 100,
      duration: 4, // Total duration in seconds
      ease: "power1.inOut",
    }, 0);

    // Save reference for cleanup
    animationRef.current = tl;

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [onComplete, navigate]);

  return <Loader percent={percent} stageText={stageText} />;
}