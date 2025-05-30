import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Bold = ({ data }) => {
  // Destructure with proper nesting and defaults
  const personalInfo = data.personalInfo || {};
  const {
    fullName = 'ABAS THOMAS',
    position = 'Software Developer',
    email = 'rescraft@gmail.com',
    phone = '010 1010 100 10',
    address = 'Lagos Nigeria',
    linkedin = 'linkedin.com/in/johndoe',
    professionalSummary = 'Professional summary goes here...',
    profileImage = null
  } = personalInfo;

  const skills = data.skills || ['Teamwork', 'Customer Service', 'Multitasking', 'Friendly'];
  const experiences = data.experiences || [];
  const education = data.education || [];
  const references = data.references || [];

  const contactDetails = [
    { value: phone, icon: faPhone },
    { value: email, icon: faEnvelope },
    { value: address, icon: faMapMarkerAlt },
    { value: linkedin, icon: faLinkedinIn },
  ];

  return (
    <div className="w-[900px] p-10 bg-white text-black font-sans mb-10 shadow-md rounded">
      {/* Header */}
      <div className="flex justify-between items-center border-b-2 pb-4 border-gray-400">
        <div>
          <h1 className="text-4xl font-bold">{fullName}</h1>
          <p className="text-xl text-gray-500 mt-1.5">{position}</p>
        </div>
        {profileImage && (
          <div className="w-[80px] h-[80px] bg-gray-300 rounded-full overflow-hidden">
            <img 
              src={typeof profileImage === 'string' 
                   ? profileImage 
                   : URL.createObjectURL(profileImage)} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      {/* Contact Info */}
      <div className="flex gap-4 mt-5 flex-wrap">
        {contactDetails.map(({ value, icon }, index) => (
          <div key={index} className="bg-gray-200 p-2 rounded flex items-center">
            <FontAwesomeIcon icon={icon} className="text-gray-700 mr-2" />
            <span className="font-medium text-sm">{value}</span>
          </div>
        ))}
      </div>

      {/* Professional Summary */}
      <section className="mt-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 w-fit">Professional Summary</h2>
        <p className="mt-2 text-[17px] leading-relaxed">{professionalSummary}</p>
      </section>

      {/* Skills */}
      <section className="mt-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 w-fit">Skills</h2>
        <div className="flex flex-wrap gap-3 mt-3">
          {skills.map((skill, idx) => (
            <span key={idx} className="bg-gray-200 px-3 py-1 rounded text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mt-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 w-fit">Experience</h2>
        {experiences.map((exp, idx) => (
          <div key={idx} className="mt-4">
            <div className="font-semibold text-lg">{exp.position} @ {exp.company}</div>
            <div className="text-sm text-gray-600">
              {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
            </div>
            <ul className="list-disc ml-5 mt-1 text-[15px] space-y-1">
              {exp.description?.split('\n').map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mt-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 w-fit">Education</h2>
        {education.map((edu, idx) => (
          <div key={idx} className="mt-3">
            <div className="font-semibold text-lg">{edu.degree}</div>
            <div className="text-sm">{edu.school} — {edu.startDate} to {edu.current ? 'Present' : edu.endDate}</div>
            {edu.fieldOfStudy && (
              <div className="text-sm text-gray-600">Field: {edu.fieldOfStudy}</div>
            )}
            {edu.description && (
              <p className="mt-1 text-sm">{edu.description}</p>
            )}
          </div>
        ))}
      </section>

      {/* References */}
      <section className="mt-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 w-fit">References</h2>
        {references.map((ref, idx) => (
          <div key={idx} className="mt-3 text-[15px]">
            <div><strong>Name:</strong> {ref.name}</div>
            <div><strong>Position:</strong> {ref.position}</div>
            <div><strong>Company:</strong> {ref.company}</div>
            <div><strong>Email:</strong> {ref.email}</div>
            <div><strong>Phone:</strong> {ref.phone}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Bold;