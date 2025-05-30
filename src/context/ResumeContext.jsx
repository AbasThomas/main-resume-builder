import React, { createContext, useState, useContext } from 'react';

const ResumeContext = createContext();

export const useResume = () => {
  const context = useContext(ResumeContext);
  return context || { resumeData: {
    personalInfo: {},
    experiences: [],
    education: [],
    skills: [],
    references: [],
    template: 'bold'
  }, setResumeData: () => {} };
};

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState({
    personalInfo: {},
    experiences: [],
    education: [],
    skills: [],
    references: [],
    template: 'bold'
  });

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
};