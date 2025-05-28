import React, { useState } from 'react';

const jobSkillsExamples = {
  'Customer Service Representative': ['Active Listening', 'Empathy', 'Conflict Resolution'],
  'Software Developer': ['Problem Solving', 'Attention to Detail', 'Collaboration'],
  'Project Manager': ['Time Management', 'Multitasking', 'Leadership'],
  // Add more job titles and associated skills as needed
};

const SearchJobTitle = ({ onSelect }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [suggestedSkills, setSuggestedSkills] = useState([]);

  const handleSearch = () => {
    const skills = jobSkillsExamples[jobTitle] || [];
    setSuggestedSkills(skills);
    if (onSelect) {
      onSelect(skills);
    }
  };

  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm">Search by Job Title</label>
      <div className="flex gap-2">
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          placeholder="e.g., Software Developer"
          className="flex-1 p-2 bg-gray-800 rounded-md text-white"
        />
        <button
          type="button"
          onClick={handleSearch}
          className="bg-yellow-300 text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-400 transition"
        >
          Search
        </button>
      </div>
      {suggestedSkills.length > 0 && (
        <div className="mt-2">
          <p className="text-sm text-yellow-300">Suggested Skills:</p>
          <ul className="list-disc list-inside">
            {suggestedSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchJobTitle;
