// src/context/ResumeContext.jsx
import React, { createContext, useState } from 'react';

// Create context
export const ResumeContext = createContext();

// Provider component
export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState({});

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
};
