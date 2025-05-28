import React, { useState } from 'react';
import R3FBackground from '../components/R3FBackground';
import PersonalInfoForm from '../Sections/PersonalInformation';

const ResumeBuilder = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div className="relative w-full h-screen text-white bg-[var(--almost-black)] overflow-hidden flex items-center justify-center">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <R3FBackground blur />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-[1000px] px-4">
        <div className="flex flex-col items-center justify-center mb-4">
          <h2 className="text-xl font-bold mb-2">Resume Completion</h2>

          {/* Progress Bar */}
          <div className="w-full max-w-[700px] bg-gray-700 rounded-full h-4">
            <div
              className="bg-yellow-300 h-4 rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-1 text-yellow-300 font-semibold text-sm">{progress}% Complete</p>
        </div>

        {/* Form */}
        <PersonalInfoForm
          onChange={(data) => {
            console.log('Form Data Updated:', data);
            // Optionally update progress dynamically here
            const filledFields = Object.values(data).filter(Boolean).length;
            const totalFields = Object.keys(data).length;
            setProgress(Math.round((filledFields / totalFields) * 100));
          }}
          onNext={(data) => {
            console.log('Next clicked, current data:', data);
          }}
        />
      </div>
    </div>
  );
};

export default ResumeBuilder;
