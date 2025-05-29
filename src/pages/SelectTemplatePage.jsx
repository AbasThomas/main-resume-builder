import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectTemplatePage = () => {
  const navigate = useNavigate();

  const handleTemplateSelect = (template) => {
    navigate(`/resume-preview/${template}`);
  };

  return (
    <div className="min-h-screen bg-[var(--almost-black)] text-white px-4 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-2 text-yellow-300">Choose Your Resume Template</h1>
        <p className="text-gray-400 mb-10">Select a design that fits your style and industry</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
          {/* Modern Template */}
          <div
            className="bg-[#2e2f34] rounded-xl p-6 shadow-lg hover:shadow-yellow-300/30 transition cursor-pointer"
            onClick={() => handleTemplateSelect('modern')}
          >
            <div className="bg-white text-black rounded-md h-72 flex items-center justify-center font-bold mb-4">
              Modern
            </div>
            <button className="bg-yellow-300 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-400 w-full">
              Use Template
            </button>
          </div>

          {/* Additional templates can go here */}
          {/* <div className="...">Classic, Minimal, Creative, etc.</div> */}
        </div>
      </div>
    </div>
  );
};

export default SelectTemplatePage;
