import React from 'react';

const Elegant = ({ data }) => {
  if (!data?.personalInfo) {
    return <p>No data loaded</p>; // Temporary fallback for debugging
  }

  const { personalInfo, experiences, education, skills, references } = data;

  return (
    <div className="p-8 bg-white text-black">
      {/* Personal Info */}
      <h1 className="text-3xl font-bold">{personalInfo.firstName} {personalInfo.lastName}</h1>
      <p>{personalInfo.email} | {personalInfo.phone} | {personalInfo.location}</p>

      {/* Work Experience */}
      <section className="mt-6">
        <h2 className="text-xl font-bold mb-2">Work Experience</h2>
        {experiences?.map((exp, index) => (
          <div key={index} className="mb-2">
            <h3 className="font-semibold">{exp.position} at {exp.company}</h3>
            <p className="text-sm text-gray-700">
              {exp.startDate} - {exp.current ? "Present" : exp.endDate}
            </p>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mt-6">
        <h2 className="text-xl font-bold mb-2">Education</h2>
        {education?.map((edu, index) => (
          <div key={index}>
            <p>{edu.degree} at {edu.schoolName}</p>
            <p className="text-sm">{edu.startDate} - {edu.endDate}</p>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mt-6">
        <h2 className="text-xl font-bold mb-2">Skills</h2>
        <ul className="list-disc ml-5">
          {skills?.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      {/* References */}
      <section className="mt-6">
        <h2 className="text-xl font-bold mb-2">References</h2>
        {references?.map((ref, index) => (
          <div key={index}>
            <p>{ref.name} — {ref.relationship}</p>
            <p className="text-sm">{ref.contact}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Elegant;
