import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const { setResumeData } = useResume();
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [localData, setLocalData] = useState({
    personalInfo: {},
    experiences: [],
    education: [],
    skills: [],
    references: [],
  });

  // Debugging: Log localData whenever it changes
  useEffect(() => {
    console.log("ResumeBuilder localData updated:", localData);
  }, [localData]);

  // Load draft data on mount
  useEffect(() => {
    const draft = localStorage.getItem('resumeDraft');
    if (draft) {
      try {
        const parsed = JSON.parse(draft);
        console.log("Loaded draft data:", parsed);
        setLocalData({
          personalInfo: parsed.personalInfo || {},
          experiences: parsed.experiences || [],
          education: parsed.education || [],
          skills: parsed.skills || [],
          references: parsed.references || [],
        });
      } catch (error) {
        console.error("Failed to parse draft data:", error);
      }
    }
    
    if (location.state?.step) {
      setCurrentStep(location.state.step);
      setProgress((location.state.step - 1) * 20);
    }
  }, [location.state]);

  const handleNext = () => {
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
    setProgress((nextStep - 1) * 20);
  };

  const handleSubmitTemplate = (template) => {
    const fullData = { 
      ...localData, 
      template,
    };
    console.log("Submitting template with data:", fullData);
    setResumeData(fullData);
    navigate('/preview');
  };

  const saveDraft = () => {
    const draftData = { ...localData };
    if (draftData.personalInfo?.profileImage) {
      draftData.personalInfo.profileImage = null;
    }
    localStorage.setItem('resumeDraft', JSON.stringify(draftData));
    console.log("Saved draft:", draftData);
    alert('Draft saved successfully!');
  };

  return (
    <div className="relative w-full min-h-screen text-white bg-[#0a0a0a] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <R3FBackground blur />
      </div>
      
      <div className="absolute top-4 right-4 z-20 flex gap-3">
        <button 
          className="bg-yellow-300 hover:bg-yellow-400 px-4 py-2 rounded font-semibold text-black"
          onClick={() => {
            console.log("Previewing resume with data:", localData);
            setResumeData({ ...localData });
            navigate('/preview');
          }}
        >
          Preview Resume
        </button>
        <button
          className="bg-yellow-300 hover:bg-yellow-400 px-4 py-2 rounded font-semibold text-black"
          onClick={saveDraft}
        >
          Save Draft
        </button>
      </div>

      <div className="relative z-10 w-full max-w-[1000px] px-4 py-8">
        {currentStep < 6 && (
          <>
            <div className="text-xl font-bold mb-2 text-center">Resume Completion</div>
            <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
              <div 
                className="bg-yellow-400 h-4 rounded-full transition-all" 
                style={{ width: `${progress}%` }} 
              />
            </div>
            <p className="text-sm text-yellow-300 text-center mb-6">
              {progress}% Complete
            </p>
          </>
        )}

        {currentStep === 1 && (
          <PersonalInfoForm
            initialData={localData.personalInfo}
            onDataChange={(data) => setLocalData(prev => ({ ...prev, personalInfo: data }))}
            onNext={handleNext}
          />
        )}
        {currentStep === 2 && (
          <WorkExperienceForm
            initialData={localData.experiences}
            onDataChange={(data) => {
              console.log("Work experiences updated:", data);
              setLocalData(prev => ({ ...prev, experiences: data }));
            }}
            onNext={handleNext}
          />
        )}
        {currentStep === 3 && (
          <EducationForm
            initialData={localData.education}
            onDataChange={(data) => {
              console.log("Education updated:", data);
              setLocalData(prev => ({ ...prev, education: data }));
            }}
            onNext={handleNext}
          />
        )}
        {currentStep === 4 && (
          <SkillsForm
            initialData={localData.skills}
            onDataChange={(data) => {
              console.log("Skills updated:", data);
              setLocalData(prev => ({ ...prev, skills: data }));
            }}
            onNext={handleNext}
          />
        )}
        {currentStep === 5 && (
          <ReferencesForm
            initialData={localData.references}
            onDataChange={(data) => {
              console.log("References updated:", data);
              setLocalData(prev => ({ ...prev, references: data }));
            }}
            onNext={handleNext}
          />
        )}
        {currentStep === 6 && (
          <TemplateSelection
            onChange={handleSubmitTemplate}
          />
        )}
      </div>
    </div>
  );
};

export default ResumeBuilder;