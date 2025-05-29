import React from 'react';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faBriefcase,
  faGraduationCap,
  faStar,
  faUser,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Executive = () => {
  return (
    <div className="w-[900px] mx-auto bg-white shadow-2xl border border-gray-200 font-serif rounded-md overflow-hidden">
      {/* Header */}
      <div className="bg-blue-900 text-white px-8 py-6">
        <h1 className="text-4xl font-bold uppercase tracking-wide">Thomas Abas</h1>
        <p className="text-lg font-light">Chief Technology Officer</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <span className="flex items-center gap-2"><FontAwesomeIcon icon={faPhone} /> +234 101 010 1010</span>
          <span className="flex items-center gap-2"><FontAwesomeIcon icon={faEnvelope} /> thomas.abas@execmail.com</span>
          <span className="flex items-center gap-2"><FontAwesomeIcon icon={faLocationDot} /> Lagos, Nigeria</span>
          <span className="flex items-center gap-2"><FontAwesomeIcon icon={faLinkedin} /> linkedin.com/in/thomasabas</span>
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-12 gap-6 px-10 py-8">
        {/* Left Panel */}
        <div className="col-span-4 border-r border-gray-300 pr-6 space-y-10">
          {/* Skills */}
          <div>
            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <FontAwesomeIcon icon={faStar} /> Executive Skills
            </h2>
            <ul className="text-sm space-y-2 list-disc list-inside">
              <li>Strategic Planning</li>
              <li>Leadership & Mentorship</li>
              <li>Stakeholder Management</li>
              <li>Agile Transformation</li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <FontAwesomeIcon icon={faGraduationCap} /> Education
            </h2>
            <div className="text-sm space-y-3">
              <div>
                <p className="font-semibold">MBA — Harvard Business School</p>
                <p className="text-gray-600">2014 - 2016</p>
              </div>
              <div>
                <p className="font-semibold">BSc Computer Science — UNILAG</p>
                <p className="text-gray-600">2006 - 2010</p>
              </div>
            </div>
          </div>

          {/* References */}
          <div>
            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <FontAwesomeIcon icon={faUser} /> References
            </h2>
            <div className="text-sm space-y-2">
              <p className="font-semibold">Jane Smith</p>
              <p className="text-gray-600">CEO, TechNova</p>
              <p><FontAwesomeIcon icon={faEnvelope} className="mr-1" /> jane.smith@technova.com</p>
              <p><FontAwesomeIcon icon={faPhone} className="mr-1" /> +234 800 123 4567</p>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="col-span-8 space-y-10 pl-6">
          {/* Summary */}
          <div>
            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <FontAwesomeIcon icon={faUser} /> Executive Summary
            </h2>
            <p className="text-sm leading-relaxed">
              Visionary technology leader with 10+ years of experience driving digital transformation at enterprise scale. Proven track record of building and mentoring high-performing teams, overseeing cloud adoption, and aligning IT strategies with business goals.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <FontAwesomeIcon icon={faBriefcase} /> Experience
            </h2>
            <div className="relative border-l-2 border-blue-800 pl-6 space-y-10">
              {/* Job 1 */}
              <div className="relative">
                <div className="absolute left-[-17px] top-1 w-4 h-4 bg-blue-800 rounded-full border-2 border-white"></div>
                <h3 className="text-lg font-semibold">CTO — TechNova Solutions</h3>
                <p className="text-sm text-gray-600">2018 - Present</p>
                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                  <li>Scaled the engineering team from 10 to 70+ globally.</li>
                  <li>Implemented DevOps culture, reducing deployment times by 65%.</li>
                  <li>Defined strategic roadmap leading to 30% YoY revenue growth.</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="relative">
                <div className="absolute left-[-17px] top-1 w-4 h-4 bg-blue-800 rounded-full border-2 border-white"></div>
                <h3 className="text-lg font-semibold">VP Engineering — CloudWare Inc.</h3>
                <p className="text-sm text-gray-600">2014 - 2018</p>
                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                  <li>Led cloud migration for 20+ enterprise applications.</li>
                  <li>Developed enterprise architecture framework adopted globally.</li>
                  <li>Fostered culture of innovation and agile delivery.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Executive;
