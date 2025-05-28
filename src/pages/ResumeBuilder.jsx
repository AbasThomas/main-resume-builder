import React, { useState } from 'react';
import R3FBackground from '../components/R3FBackground';
import PersonalInfoForm from '../Sections/PersonalInformation';
import WorkExperienceForm from '../Sections/WorkExperienceForm'; // <-- Create this file as given earlier

const ResumeBuilder = () => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);

  // Update progress ONLY when Next is clicked
  const handleNext = () => {
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);

    // Assuming total of 5 steps, increase progress by 20% per step
    const stepProgress = (nextStep - 1) * 20;
    setProgress(stepProgress);
  };

  return (
    <div className="relative w-full min-h-screen text-white bg-[var(--almost-black)] overflow-hidden flex items-center justify-center">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <R3FBackground blur />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-[1000px] px-4 py-8">
        {/* Header and Progress Bar */}
        <div className="flex flex-col items-center justify-center mb-6">
          <h2 className="text-xl font-bold mb-2">Resume Completion</h2>
          <div className="w-full max-w-[700px] bg-gray-700 rounded-full h-4">
            <div
              className="bg-yellow-300 h-4 rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-1 text-yellow-300 font-semibold text-sm">{progress}% Complete</p>
        </div>

        {/* Step-based Form Rendering */}
        {currentStep === 1 && (
          <PersonalInfoForm
            onChange={(data) => console.log('Personal Info Updated:', data)}
            onNext={() => handleNext()}
          />
        )}

        {currentStep === 2 && (
          <WorkExperienceForm
            onChange={(data) => console.log('Work Experience Updated:', data)}
            onNext={() => handleNext()}
          />
        )}

        {/* Future steps (Education, Skills, Summary...) go here */}
      </div>
    </div>
  );
};

export default ResumeBuilder;
