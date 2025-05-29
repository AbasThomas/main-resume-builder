import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import { MdSchool, MdWork, MdOutlinePerson } from 'react-icons/md';
import { GiSkills } from 'react-icons/gi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Elegant = () => {
  return (
    <div className="w-[900px] mx-auto bg-white text-gray-900 font-sans shadow-xl border border-gray-200 rounded-md overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-8">
        <h1 className="text-4xl font-bold uppercase tracking-wide">Thomas Abas</h1>
        <p className="text-lg font-light mt-1">Software Developer</p>
        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm items-center">
          <span className="flex items-center gap-2"><FaPhoneAlt /> 010 1010 100 10</span>
          <span className="flex items-center gap-2"><FaEnvelope /> ResCraft@gmail.com</span>
          <span className="flex items-center gap-2"><FaMapMarkerAlt /> Lagos, Nigeria</span>
          <span className="flex items-center gap-2"><FaLinkedin /> linkedin.com/in/johndoe</span>
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-12 gap-6 px-10 py-8">
        {/* Left */}
        <div className="col-span-4 border-r border-gray-300 pr-6 space-y-8">
          {/* Skills */}
          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-2"><GiSkills /> Skills</h2>
            <ul className="list-disc list-inside space-y-2 text-sm pl-1">
              <li>Teamwork</li>
              <li>Customer Service</li>
              <li>Multitasking</li>
              <li>Friendly Attitude</li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-2"><MdSchool /> Education</h2>
            <div className="mb-4">
              <p className="font-medium text-sm">High School Diploma</p>
              <p className="text-gray-600 text-xs">Catholic Boys Secondary School</p>
              <p className="text-gray-500 text-xs">1991 - 1997</p>
            </div>
            <div>
              <p className="font-medium text-sm">BSc — University of Lagos</p>
              <p className="text-gray-600 text-xs italic">Currently Studying</p>
              <p className="text-gray-500 text-xs">2019 - 2026</p>
            </div>
          </div>

          {/* References */}
          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-2"><MdOutlinePerson /> References</h2>
            <div className="text-sm space-y-1">
              <p className="font-medium">Jane Doe</p>
              <p className="text-gray-600">Manager, ResCraft</p>
              <p><FaEnvelope className="inline mr-1" /> janedoe@gmail.com</p>
              <p><FaPhoneAlt className="inline mr-1" /> 234 100 1001 001</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="col-span-8 pl-6 space-y-10">
          {/* Summary */}
          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-2"><BsFillPersonLinesFill /> Professional Summary</h2>
            <p className="text-sm leading-relaxed">
              Enthusiastic Software Developer with a passion for building efficient, scalable applications. Strong background in collaboration and problem-solving, with a focus on delivering customer-focused solutions.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-6"><MdWork /> Work Experience</h2>
            <div className="relative border-l-2 border-gray-300 pl-6 space-y-10">
              {/* Job 1 */}
              <div className="relative">
                {/* <div className="absolute left-[-11px] top-1 w-4 h-4 bg-gray-900 rounded-full border-2 border-white"></div> */}
                <h3 className="text-lg font-semibold">Software Engineer — ResCraft</h3>
                <p className="text-sm text-gray-600">July 2020 - August 2024</p>
                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                  <li>Collaborated with team members to develop and deploy applications.</li>
                  <li>Managed multiple project timelines and deadlines efficiently.</li>
                  <li>Provided fast and effective solutions to user issues.</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="relative">
                {/* <div className="absolute left-[-11px] top-1 w-4 h-4 bg-gray-900 rounded-full border-2 border-white"></div> */}
                <h3 className="text-lg font-semibold">Database Engineer — ResBuild</h3>
                <p className="text-sm text-gray-600">July 2021 - August 2023</p>
                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                  <li>Maintained and optimized database performance.</li>
                  <li>Collaborated with developers to integrate data layers.</li>
                  <li>Improved system reliability and consistency.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elegant;
