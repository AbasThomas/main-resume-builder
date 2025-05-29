// src/pages/ResumePreview.jsx
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ResumeContext } from '../context/ResumeContext';
import Bold from '../components/Templates/Bold';
import Elegant from '../components/Templates/Elegant';
import Executive from '../components/Templates/Executive';

const ResumePreview = () => {
  const { resumeData } = useContext(ResumeContext);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedTemplate = searchParams.get('template') || 'bold';

  const renderTemplate = () => {
    switch (selectedTemplate.toLowerCase()) {
      case 'elegant':
        return <Elegant data={resumeData} />;
      case 'executive':
        return <Executive data={resumeData} />;
      case 'bold':
      default:
        return <Bold data={resumeData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Resume Preview</h1>
        <button
          onClick={() => window.print()}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
        >
          Print / Save as PDF
        </button>
      </div>
      <div className="flex justify-center">
        {renderTemplate()}
      </div>
    </div>
  );
};

export default ResumePreview;
