import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

export default function LoaderScreen({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [stageText, setStageText] = useState('Getting Ready...');
  const navigate = useNavigate();

  useEffect(() => {
    let pct = 0;
    const stages = [
      { threshold: 33, text: 'Getting Ready...' },
      { threshold: 66, text: 'Almost There...' },
      { threshold: 100, text: 'Finishing Up...' },
    ];

    const interval = setInterval(() => {
      pct += 1;
      setPercent(pct);
      const stage = stages.find(s => pct <= s.threshold);
      setStageText(stage.text);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete?.();
          navigate('/builder');
        }, 300);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete, navigate]);

  return <Loader percent={percent} stageText={stageText} />;
}
