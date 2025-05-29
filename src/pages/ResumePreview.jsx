// src/pages/ResumePreview.jsx
import React from 'react';
import { useResume } from '../context/ResumeContext';
import { useNavigate } from 'react-router-dom';

import Bold from '../Templates/Bold';
import Elegant from '../Templates/Elegant';
import Executive from '../Templates/Executive';
import Expressive from '../Templates/Expressive';
import Distinct from '../Templates/Distinct';
import R3FBackground from '../components/R3FBackground';
const ResumePreview = () => {
  const { resumeData } = useResume();
  const navigate = useNavigate();

  const renderTemplate = () => {
    switch (resumeData.template) {
      case 'Elegant': return <Elegant data={resumeData} />;
      case 'Executive': return <Executive data={resumeData} />;
      case 'Expressive': return <Expressive data={resumeData} />;
      case 'Distinct': return <Distinct data={resumeData} />;
      default: return <Bold data={resumeData} />;
    }
  };

  return (
    <div className="bg-black min-h-screen p-6">
        <div className="absolute inset-0 z-0">
          <R3FBackground />
      </div>
      <div className="  w-[900px]  mx-auto rounded-lg shadow-xl p-8 relative">
    <div className='action-btn flex justify-between items-center'>
        <button className=" bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition cursor-pointer">
            Export
        </button >
        <button className=" bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer">
            Save as Draft
        </button>
                <button
          onClick={() => navigate('/builder')}
          className=" bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition cursor-pointer"
        >
          Edit
        </button>
    </div>
        <h2 className="text-center text-2xl font-bold mb-4">Your Resume</h2>
        {renderTemplate()}
      </div>
      <div className='justify-self-center'>
        <button className='text-black bg-yellow-300 font-semibold px-4 py-2 rounded hover:bg-yellow-400 transition cursor-pointer'>
            Change Template
        </button>
    </div>
    </div>
  );
};

export default ResumePreview;
