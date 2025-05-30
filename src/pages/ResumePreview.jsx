import React from 'react';
import { useResume } from '../context/ResumeContext';
import { useNavigate } from 'react-router-dom';
import Bold from '../Templates/Bold';
import R3FBackground from '../components/R3FBackground';

const ResumePreview = () => {
  const { resumeData } = useResume();
  const navigate = useNavigate();

  const renderTemplate = () => {
    return <Bold data={resumeData} />;
  };

  const saveDraft = () => {
    // Create a copy without profileImage for localStorage
    const draftData = { ...resumeData };
    if (draftData.personalInfo?.profileImage) {
      draftData.personalInfo.profileImage = null;
    }
    localStorage.setItem('resumeDraft', JSON.stringify(draftData));
    alert('Draft saved successfully!');
  };

  return (
    <div className="bg-black min-h-screen p-6 relative">
      <div className="absolute inset-0 z-0">
        <R3FBackground />
      </div>
      
      <div className="relative z-10 w-[900px] mx-auto rounded-lg shadow-xl p-8">
        <div className='action-btn flex justify-between items-center mb-6'>
          <button 
            onClick={() => window.print()}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Export
          </button>
          <button 
            onClick={saveDraft}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Save as Draft
          </button>
          <button
            onClick={() => navigate('/builder')}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Edit
          </button>
        </div>
        
        <h2 className="text-center text-2xl font-bold mb-6 text-white">
          Your Resume
        </h2>
        
        {renderTemplate()}
        
        <div className="mt-6 text-center">
          <button 
            onClick={() => navigate('/builder', { state: { step: 6 } })}
            className='bg-yellow-300 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-400 transition'
          >
            Change Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;