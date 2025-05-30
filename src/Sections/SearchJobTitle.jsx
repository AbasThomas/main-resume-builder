import React, { useState } from 'react';

const jobSkillsExamples = {
  'Customer Service Representative': ['Active Listening', 'Empathy', 'Conflict Resolution'],
  'Software Developer': ['Problem Solving', 'Attention to Detail', 'Collaboration'],
  'Project Manager': ['Time Management', 'Multitasking', 'Leadership'],
  'Marketing Specialist': ['Creativity', 'Communication', 'Campaign Planning'],
  'Sales Executive': ['Negotiation', 'Product Knowledge', 'Persuasion'],
  'Graphic Designer': ['Creativity', 'Typography', 'Attention to Detail'],
};

const jobTitles = Object.keys(jobSkillsExamples);

const SearchJobTitle = ({ onSelect }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [suggestedSkills, setSuggestedSkills] = useState([]);
  const [filteredTitles, setFilteredTitles] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setJobTitle(value);

    if (value.trim() === '') {
      setFilteredTitles([]);
      setShowDropdown(false);
    } else {
      const matches = jobTitles.filter((title) =>
        title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredTitles(matches);
      setShowDropdown(true);
    }
  };

  const handleSelect = (title) => {
    setJobTitle(title);
    setShowDropdown(false);
    const skills = jobSkillsExamples[title] || [];
    setSuggestedSkills(skills);
    if (onSelect) onSelect(skills);
  };

  const handleSearch = () => {
    handleSelect(jobTitle);
  };

  return (
    <div className="mb-4 relative">
      <label className="block mb-1 text-sm">Search by Job Title</label>
      <div className="flex gap-2 relative">
        <input
          type="text"
          value={jobTitle}
          onChange={handleInputChange}
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

      {/* Dropdown */}
      {showDropdown && filteredTitles.length > 0 && (
        <ul className="absolute bg-gray-800 border border-gray-700 w-full mt-1 rounded-md z-10 max-h-40 overflow-y-auto">
          {filteredTitles.map((title, index) => (
            <li
              key={index}
              onClick={() => handleSelect(title)}
              className="p-2 cursor-pointer hover:bg-gray-700 text-white"
            >
              {title}
            </li>
          ))}
        </ul>
      )}

      {/* Suggested Skills */}
      {suggestedSkills.length > 0 && (
        <div className="mt-3">
          <p className="text-sm text-yellow-300 font-medium mb-1">Suggested Skills:</p>
          <ul className="list-disc list-inside text-sm text-white space-y-1">
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
