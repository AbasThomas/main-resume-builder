import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Bold = ({ data }) => {
  const personal = data?.personalInfo || {};
  const skills = data?.skills || [];
  const experiences = data?.experiences || [];
  const education = data?.education || [];
  const references = data?.references || [];

  const contactItems = [
    { input: personal.phone, icon: faPhone },
    { input: personal.email, icon: faEnvelope },
    { input: personal.address, icon: faMapMarkerAlt },
    { input: personal.linkedin, icon: faLinkedinIn },
  ].filter(item => item.input); // Remove undefined items

  return (
    <div className="w-[900px] mx-auto p-10 bg-white text-black font-sans border-b-3 mb-10 border-gray-400">
      {/* Header */}
      <div className="border-b-3 border-gray-400 py-2.5 flex justify-between">
        <div>
          <h2 className="text-4xl font-bold uppercase">{personal.fullName || 'Your Name'}</h2>
          <p className="text-[20px] text-gray-500 font-semibold mt-1.5">{personal.profession || 'Job Title'}</p>
        </div>
        <div className="w-24 h-24 bg-gray-300 rounded-full overflow-hidden">
          {personal.photo ? (
            <img src={personal.photo} alt="profile" className="object-cover w-full h-full" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-sm text-gray-500">No Image</div>
          )}
        </div>
      </div>

      {/* Contact */}
      <div className="flex flex-wrap gap-3 mt-[20px]">
        {contactItems.map((item, index) => (
          <div key={index} className="bg-gray-200 p-2 rounded-[8px] flex items-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-1.5">
              <FontAwesomeIcon icon={item.icon} className="text-[18px]" />
            </div>
            <p className="font-semibold text-[15px]">{item.input}</p>
          </div>
        ))}
      </div>

      {/* Summary */}
      {personal.summary && (
        <div className="professionalSumm mt-6">
          <div className="border-b-3 w-[250px] border-gray-400 py-2.5">
            <h1 className="font-bold text-[22px]">Professional Summary</h1>
          </div>
          <p className="mt-[10px] text-[18px]">{personal.summary}</p>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="skills mt-6">
          <div className="border-b-3 w-[70px] border-gray-400 py-2.5">
            <h1 className="font-bold text-[22px]">Skills</h1>
          </div>
          <div className="flex gap-3 flex-wrap mt-[20px]">
            {skills.map((item, index) => (
              <div key={index} className="bg-gray-200 p-2 rounded-[8px]">
                <p className="font-semibold">{item.skill}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Experience */}
      {experiences.length > 0 && (
        <div className="experience mt-6">
          <div className="border-b-3 w-[120px] border-gray-400 py-2.5">
            <h1 className="font-bold text-[22px]">Experience</h1>
          </div>
          {experiences.map((exp, index) => (
            <div className="mt-[20px]" key={index}>
              <div className="font-semibold text-[19px]">Company: {exp.company}</div>
              <div className="flex mt-[10px]">
                <div className="text-[19px] mr-2">{exp.position},</div>
                <div className="text-[19px]">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</div>
              </div>
              <ul className="list-disc ml-5 mt-3 text-[18px] space-y-1">
                {exp.description?.split('\n').map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="education mt-6">
          <div className="border-b-3 w-[110px] border-gray-400 py-2.5">
            <h1 className="font-bold text-[22px]">Education</h1>
          </div>
          {education.map((edu, index) => (
            <div className="mt-[20px]" key={index}>
              <div className="font-semibold text-[22px]">{edu.degree}</div>
              <div className="flex items-center gap-1.5 mt-2">
                <div className="text-[19px] font-semibold">{edu.institution},</div>
                <div className="text-[19px]">{edu.startDate} - {edu.current ? 'Present' : edu.endDate}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* References */}
      {references.length > 0 && (
        <div className="references mt-6">
          <div className="border-b-3 w-[110px] border-gray-400 py-2.5">
            <h1 className="font-bold text-[22px]">References</h1>
          </div>
          {references.map((ref, index) => (
            <div className="reference mt-3" key={index}>
              <div className="text-2xl font-semibold">Name: {ref.name}</div>
              <div className="text-[19px] mt-1"><span className="font-semibold">Position:</span> {ref.position}</div>
              <div className="text-[19px] mt-1"><span className="font-semibold">Company:</span> {ref.company}</div>
              <div className="text-[19px] mt-1"><span className="font-semibold">Email:</span> {ref.email}</div>
              <div className="text-[19px] mt-1"><span className="font-semibold">Phone:</span> {ref.phone}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bold;
