import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const Classic = () => {
  const contact = [
    {
      icon: <FaPhone />,
      text: '010 1010 100 10',
    },
    {
      icon: <FaEnvelope />,
      text: 'ResCraft@gmail.com',
    },
    {
      icon: <FaMapMarkerAlt />,
      text: 'Lagos, Nigeria',
    },
    {
      icon: <FaLinkedin />,
      text: 'LinkedIn: JohnDoe',
    },
  ];

  const skills = [
    'Teamwork',
    'Customer Service',
    'Multitasking',
    'Friendly',
  ];

  const experiences = [
    {
      company: 'ResCraft',
      position: 'Software Engineer',
      start: 'July 2020',
      end: 'August 2024',
      responsibilities: [
        'Worked with coworkers to complete tasks',
        'Demonstrated ability to manage multiple tasks',
        'Responded quickly to meet customer needs',
      ],
    },
    {
      company: 'ResBuild',
      position: 'Database Engineer',
      start: 'July 2021',
      end: 'August 2023',
      responsibilities: [
        'Worked with coworkers to complete tasks',
        'Demonstrated ability to manage multiple tasks',
        'Responded quickly to meet customer needs',
      ],
    },
  ];

  const education = [
    {
      degree: 'High School Diploma',
      institution: 'Catholic Boys Secondary School',
      start: 'July 1991',
      end: 'August 1997',
    },
    {
      degree: 'BSc',
      institution: 'University of Lagos - Currently Studying',
      start: 'July 2019',
      end: 'August 2026',
    },
  ];

  return (
    <div className="w-[900px] mx-auto p-10 bg-white text-black font-sans mb-10">
      {/* Header */}
      <div className="bg-purple-500 text-white p-8 text-center">
        <h2 className="text-4xl font-bold border-b-2 pb-2">ABAS THOMAS</h2>
        <p className="text-[20px] font-semibold mt-1.5">Software Developer</p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-wrap gap-4 mt-5">
        {contact.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="text-purple-600 text-lg">{item.icon}</div>
            <p className="font-semibold text-[17px]">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Professional Summary */}
      <section className="mt-8">
        <h3 className="uppercase text-[22px] font-semibold border-b-2">Professional Summary</h3>
        <p className="mt-3 text-[18px] leading-7">
          Motivated and adaptable Software Developer with experience delivering scalable web applications. Proven ability to collaborate with cross-functional teams and manage multiple tasks under pressure while maintaining high quality standards.
        </p>
      </section>

      {/* Skills */}
      <section className="mt-8">
        <h3 className="uppercase text-[22px] font-semibold border-b-2">Skills</h3>
        <ul className="mt-3 grid grid-cols-2 gap-2 list-disc pl-5 text-[18px]">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section className="mt-8">
        <h3 className="uppercase text-[22px] font-semibold border-b-2">Experience</h3>
        {experiences.map((exp, index) => (
          <div key={index} className="mt-6">
            <div className="font-semibold text-[19px] text-purple-600">Company: {exp.company}</div>
            <div className="flex mt-1 text-[18px]">
              <span className="mr-2">{exp.position},</span>
              <span>{exp.start} - {exp.end}</span>
            </div>
            <ul className="mt-2 list-disc pl-5 text-[17px] space-y-1">
              {exp.responsibilities.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mt-8">
        <h3 className="uppercase text-[22px] font-semibold border-b-2">Education</h3>
        {education.map((edu, index) => (
          <div key={index} className="mt-6">
            <div className="font-semibold text-[20px] text-purple-600">{edu.degree}</div>
            <div className="flex items-center text-[18px] mt-1">
              <span className="font-semibold">{edu.institution}</span>
              <span className="ml-2">({edu.start} - {edu.end})</span>
            </div>
          </div>
        ))}
      </section>

      {/* References */}
      <section className="mt-8">
        <h3 className="uppercase text-[22px] font-semibold border-b-2">References</h3>
        <div className="mt-4 text-[18px] space-y-1">
          <p><span className="font-semibold">Name:</span> Jane Doe</p>
          <p><span className="font-semibold">Position:</span> Manager</p>
          <p><span className="font-semibold">Company:</span> ResCraft</p>
          <p><span className="font-semibold">Email:</span> janedoe@gmail.com</p>
          <p><span className="font-semibold">Phone:</span> 234 100 1001 001</p>
        </div>
      </section>
    </div>
  );
};

export default Classic;
