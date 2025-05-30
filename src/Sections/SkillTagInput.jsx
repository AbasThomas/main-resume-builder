import React, { useState } from 'react';

const SkillTagInput = ({ skills = [], onChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === ',') && inputValue.trim()) {
      e.preventDefault();
      addSkill();
    }
  };

  const addSkill = () => {
    const newSkill = inputValue.trim();
    if (newSkill && !skills.includes(newSkill)) {
      const updatedSkills = [...skills, newSkill];
      setInputValue('');
      if (onChange) onChange(updatedSkills);
    }
  };

  const removeSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    if (onChange) onChange(updatedSkills);
  };

  return (
    <div className="mb-6">
      <label className="block mb-2 text-sm font-medium">Add your skills:</label>
      <div className="flex flex-wrap gap-2 mb-2 min-h-[40px]">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="bg-yellow-300 text-black px-3 py-1 rounded-full flex items-center"
          >
            {skill}
            <button 
              type="button" 
              onClick={() => removeSkill(index)}
              className="ml-2 text-black hover:text-gray-700 text-lg leading-none"
              aria-label={`Remove ${skill}`}
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type a skill and press Enter"
          className="flex-1 p-2 bg-gray-800 rounded-md text-white"
        />
        <button
          type="button"
          onClick={addSkill}
          className="ml-2 bg-yellow-300 text-black px-4 py-2 rounded-md hover:bg-yellow-400 transition"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default SkillTagInput;