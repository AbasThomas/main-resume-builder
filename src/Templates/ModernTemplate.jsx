import React from 'react';
import './ModernResumeTemplate.css';

const ModernResumeTemplate = ({ personalInfo, workExperience, education, skills, references }) => {
  return (
    <div className="modern-resume-container">
      {/* Header */}
      <header className="resume-header">
        <h1>{personalInfo.fullName}</h1>
        <p>{personalInfo.jobTitle}</p>
        <div className="contact-info">
          <span>{personalInfo.email}</span> | <span>{personalInfo.phone}</span> | <span>{personalInfo.address}</span>
        </div>
      </header>

      {/* Sections */}
      <section className="section">
        <h2>Work Experience</h2>
        {workExperience.map((exp, i) => (
          <div key={i} className="item">
            <h3>{exp.position} - {exp.company}</h3>
            <span>{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>

      <section className="section">
        <h2>Education</h2>
        {education.map((edu, i) => (
          <div key={i} className="item">
            <h3>{edu.degree} - {edu.institution}</h3>
            <span>{edu.startDate} - {edu.endDate}</span>
          </div>
        ))}
      </section>

      <section className="section">
        <h2>Skills</h2>
        <ul className="skills-list">
          {skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>References</h2>
        {references.map((ref, i) => (
          <div key={i} className="item">
            <h3>{ref.name}</h3>
            <p>{ref.position} at {ref.company}</p>
            <p>{ref.email} | {ref.phone}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ModernResumeTemplate;
