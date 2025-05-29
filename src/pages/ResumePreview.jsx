// src/pages/ResumePreview.jsx
import React from 'react';
import { useResume } from '../context/ResumeContext';
import { useNavigate } from 'react-router-dom';

import Bold from '../Templates/Bold';
import Elegant from '../Templates/Elegant';
import Executive from '../Templates/Executive';
import Expressive from '../Templates/Expressive';
import Distinct from '../Templates/Distinct';

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
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-  bg-white rounded-lg shadow-xl p-8 relative">
        <button
          onClick={() => navigate('/builder')}
          className="absolute top-4 right-4  bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Edit
        </button>
        <h2 className="text-center text-2xl font-bold mb-4">Your Resume</h2>
        {renderTemplate()}
      </div>
    </div>
  );
};

export default ResumePreview;
