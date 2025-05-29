// src/pages/ResumeBuilder.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../context/ResumeContext';

import R3FBackground from '../components/R3FBackground';
import PersonalInfoForm from '../Sections/PersonalInformation';
import WorkExperienceForm from '../Sections/WorkExperienceForm';
import EducationForm from '../Sections/EducationForm';
import SkillsForm from '../Sections/SkillsForm';
import ReferencesForm from '../Sections/ReferencesForm';
import TemplateSelection from '../Sections/TemplateSelection';

const ResumeBuilder = () => {
  const navigate = useNavigate();
  const { setResumeData } = useResume();
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [localData, setLocalData] = useState({});

  const handleNext = () => {
    const next = currentStep + 1;
    setCurrentStep(next);
    setProgress((next - 1) * 20);
  };

  const handleSubmitTemplate = (template) => {
    const fullData = { ...localData, template };
    setResumeData(fullData);
    navigate('/preview');
  };

  return (
    <div className="relative w-full min-h-screen text-white bg-[var(--almost-black)] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <R3FBackground blur />
      </div>

      <div className="relative z-10 w-full max-w-[1000px] px-4 py-8">
        {/* Progress Bar */}
        {currentStep < 6 && (
          <>
            <div className="text-xl font-bold mb-2 text-center">Resume Completion</div>
            <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
              <div className="bg-yellow-400 h-4 rounded-full transition-all" style={{ width: `${progress}%` }} />
            </div>
            <p className="text-sm text-yellow-300 text-center mb-6">{progress}% Complete</p>
          </>
        )}

        {/* Form Steps */}
        {currentStep === 1 && (
          <PersonalInfoForm
            onChange={(data) => setLocalData((prev) => ({ ...prev, personalInfo: data }))}
            onNext={handleNext}
          />
        )}
        {currentStep === 2 && (
          <WorkExperienceForm
            onChange={(data) => setLocalData((prev) => ({ ...prev, experiences: data }))}
            onNext={handleNext}
          />
        )}
        {currentStep === 3 && (
          <EducationForm
            onChange={(data) => setLocalData((prev) => ({ ...prev, education: data }))}
            onNext={handleNext}
          />
        )}
        {currentStep === 4 && (
          <SkillsForm
            onChange={(data) => setLocalData((prev) => ({ ...prev, skills: data }))}
            onNext={handleNext}
          />
        )}
        {currentStep === 5 && (
          <ReferencesForm
            onChange={(data) => setLocalData((prev) => ({ ...prev, references: data }))}
            onNext={handleNext}
          />
        )}
        {currentStep === 6 && (
          <TemplateSelection
            onChange={(template) => handleSubmitTemplate(template)}
          />
        )}
      </div>
    </div>
  );
};

export default ResumeBuilder;
