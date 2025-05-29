import React, { createContext, useContext, useState } from 'react';

const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState({});
  const [selectedTemplate, setSelectedTemplate] = useState('Modern');

  const updateSection = (section, data) => {
    setResumeData((prev) => ({ ...prev, [section]: data }));
  };

  const value = {
    resumeData,
    selectedTemplate,
    setSelectedTemplate,
    updateSection,
  };

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  );
};
