import React from 'react';
import { useNavigate } from 'react-router-dom';
import R3FBackground from '../components/R3FBackground';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/all';

gsap.registerPlugin(SplitText);
let split = SplitText.create('h1', {
  type : 'lines, words',
})
s
export default function HowToUse() {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/loader');
  };
  const steps =[
    {
      step: '1',
      title: ' Choose a Template',
      description: 'Select a template that suits your style and profession.',
    },
    {
      step: '2',
      title: ' Fill in Your Details',
      description: 'Enter your personal information, work experience, and skills.',
    },
    {
      step: '3',
      title: ' Customize Your Resume',
      description: 'Adjust colors, fonts, and layout to match your preferences.',
    },
    {
      step: '4',
      title: ' Download or Share',
      description: 'Download your resume as a PDF or share it directly online.',
    }
  ]
  return (
    <div className="relative w-full h-screen text-white bg-[var(--almost-black)] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <R3FBackground blur />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-6">
        <h1 className="text-4xl sm:text-4xl font-bold mb-4">How To Use</h1>
        {steps.map(({ step, title, description }) => (
          <div  className="mb-6 p-4  rounded-lg shadow-lg">
            <div             style={{
              filter: 'drop-shadow(0 0 8px #fffb3b) drop-shadow(0 0 16px #fffb3b)',
            }} className='border-5 border-yellow-300 rounded-full w-10 h-10 flex items-center justify-self-center justify-center'>{step}</div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="mt-2 text-lg">{description}</p>
          </div>
        ))}
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
