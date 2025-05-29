  import React, { useState } from 'react';
  import R3FBackground from '../components/R3FBackground';

  // Form Sections
  import PersonalInfoForm from '../Sections/PersonalInformation';
  import WorkExperienceForm from '../Sections/WorkExperienceForm';
  import EducationForm from '../Sections/EducationForm';
  import SkillsForm from '../Sections/SkillsForm';
  import ReferencesForm from '../Sections/ReferencesForm';
  import TemplateSelection from '../Sections/TemplateSelection';

  // Templates
  // import ModernResume from '../components/templates/ModernResume';
  import Bold from '../Templates/Bold';
  import Classic from '../Templates/Classic';
  import Distinct from '../Templates/Distinct';
  import Elegant from '../Templates/Elegant';
  import Executive from '../Templates/Executive';
  import Expressive from '../Templates/Expressive';

  // import Pro from '.././templates/Pro';

  const ResumeBuilder = () => {
    const [progress, setProgress] = useState(0);
    const [currentStep, setCurrentStep] = useState(1);
    const [resumeData, setResumeData] = useState({});
    const [showPreview, setShowPreview] = useState(false);

    const handleNext = () => {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      const stepProgress = (nextStep - 1) * 20;
      setProgress(stepProgress);
    };

    // Dynamically render the selected template
    const renderSelectedTemplate = () => {
      const selected = resumeData?.template || 'Modern';

      switch (selected) {
        case 'Elegant':
          return <Elegant data={resumeData} />;
        case 'Executive':
          return <Executive data={resumeData} />;
        case 'Expressive':
          return <Expressive data={resumeData} />;
        case 'Distinct':
          return <Distinct data={resumeData} />;
        // case 'Pro':
        //   return <Pro data={resumeData} />;
        case 'bold':
        default:
          return <Bold data={resumeData} />;
      }
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

          {/* Form Steps */}
          {currentStep === 1 && (
            <PersonalInfoForm
              onChange={(data) => setResumeData((prev) => ({ ...prev, personalInfo: data }))}
              onNext={handleNext}
            />
          )}

          {currentStep === 2 && (
            <WorkExperienceForm
              onChange={(data) => setResumeData((prev) => ({ ...prev, experiences: data }))}
              onNext={handleNext}
            />
          )}

          {currentStep === 3 && (
            <EducationForm
              onChange={(data) => setResumeData((prev) => ({ ...prev, education: data }))}
              onNext={handleNext}
            />
          )}

          {currentStep === 4 && (
            <SkillsForm
              onChange={(data) => setResumeData((prev) => ({ ...prev, skills: data }))}
              onNext={handleNext}
            />
          )}

          {currentStep === 5 && (
            <ReferencesForm
              onChange={(data) => setResumeData((prev) => ({ ...prev, references: data }))}
              onNext={handleNext}
            />
          )}

          {currentStep === 6 && (
            <TemplateSelection
              onChange={(selectedTemplate) =>
                setResumeData((prev) => ({ ...prev, template: selectedTemplate }))
              }
              onNext={handleNext}
            />
          )}

          {/* Preview Resume Button */}
          {currentStep === 6 && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setShowPreview(true)}
                className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-md hover:bg-yellow-500 transition"
              >
                Preview Resume
              </button>
            </div>
          )}
        </div>

        {/* Resume Preview Modal */}
        {showPreview && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-6">
            <div className="bg-white rounded-lg shadow-xl overflow-auto max-h-[90vh] max-w-[900px] w-full p-8">
              <div className="text-right">
                <button
                  onClick={() => setShowPreview(false)}
                  className="text-red-600 font-bold text-lg"
                >
                  ✕ Close
                </button>
              </div>
              {/* 🔁 Render Template Dynamically */}
              {renderSelectedTemplate()}
            </div>
          </div>
        )}
      </div>
    );
  };

  export default ResumeBuilder;
