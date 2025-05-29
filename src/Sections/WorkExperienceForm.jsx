import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';

const WorkExperienceForm = ({ onChange, onNext }) => {
  const [experiences, setExperiences] = useState([
    {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    }
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...experiences];
    updated[index][field] = value;
    setExperiences(updated);
    if (onChange) onChange(updated);
  };

  const addExperience = () => {
    setExperiences([...experiences, {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    }]);
  };

  const removeExperience = (index) => {
    const updated = experiences.filter((_, i) => i !== index);
    setExperiences(updated);
    if (onChange) onChange(updated);
  };

  const handleNext = () => {
    if (onNext) onNext(experiences);
  };

  return (
    <form className="bg-[#2e2f34] p-6 rounded-xl text-white w-full max-w-[950px] mx-auto shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-yellow-300">
        Work Experience
      </h2>

      {experiences.map((exp, index) => (
        <div key={index} className="mb-8 border-b border-gray-700 pb-6 relative">
          <h3 className="text-xl font-semibold mb-4">Experience {index + 1}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm">Company</label>
              <input
                type="text"
                value={exp.company}
                onChange={e => handleChange(index, 'company', e.target.value)}
                placeholder="Company Name"
                className="w-full p-2 bg-gray-800 rounded-md text-white"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Position</label>
              <input
                type="text"
                value={exp.position}
                onChange={e => handleChange(index, 'position', e.target.value)}
                placeholder="Job Title"
                className="w-full p-2 bg-gray-800 rounded-md text-white"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Start Date</label>
              <input
                type="month"
                value={exp.startDate}
                onChange={e => handleChange(index, 'startDate', e.target.value)}
                className="w-full p-2 bg-gray-800 rounded-md text-white"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">End Date</label>
              <input
                type="month"
                value={exp.endDate}
                onChange={e => handleChange(index, 'endDate', e.target.value)}
                disabled={exp.current}
                className="w-full p-2 bg-gray-800 rounded-md text-white disabled:opacity-50"
              />
            </div>
            <div className="col-span-1 md:col-span-2 flex items-center gap-2">
              <input
                type="checkbox"
                checked={exp.current}
                onChange={e => handleChange(index, 'current', e.target.checked)}
              />
              <label className="text-sm">I currently work here</label>
            </div>
          </div>

          <div className="mt-4">
            <label className="block mb-1 text-sm">Description</label>
            <textarea
              value={exp.description}
              onChange={e => handleChange(index, 'description', e.target.value)}
              rows={3}
              placeholder="Brief description of your responsibilities..."
              className="w-full p-2 bg-gray-800 rounded-md text-white placeholder:text-sm"
            />
          </div>

          {experiences.length > 1 && (
            <button
              type="button"
              onClick={() => removeExperience(index)}
              className="absolute top-0 right-0 bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Delete
            </button>
          )}
        </div>
      ))}

      <div className="flex justify-between items-center mt-4">
        <button
          type="button"
          onClick={addExperience}
          className="text-yellow-300 underline hover:text-yellow-400 transition"
        >
          + Add Another Experience
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="bg-yellow-300 text-black font-bold px-6 py-2 rounded-md hover:bg-yellow-400 transition"
        >
          Next <FontAwesomeIcon icon={faForward} className="ml-2" />
        </button>
      </div>
    </form>
  );
};

export default WorkExperienceForm;
