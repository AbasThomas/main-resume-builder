import React from 'react';

const SkillTagInput = ({ skills, onChange }) => {
  const handleAddSkill = () => {
    onChange([...skills, '']);
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    onChange(updatedSkills);
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    onChange(updatedSkills);
  };

  return (
    <div>
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center gap-4 mb-2">
          <input
            type="text"
            value={skill}
            onChange={(e) => handleSkillChange(index, e.target.value)}
            placeholder="e.g., Teamwork"
            className="flex-1 p-2 bg-gray-800 rounded-md text-white"
          />
          <button
            type="button"
            onClick={() => handleRemoveSkill(index)}
            className="text-red-400 hover:text-red-500"
            title="Delete skill"
          >
            &times;
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddSkill}
        className="text-yellow-300 hover:text-yellow-400 font-medium flex items-center gap-2 mt-2"
      >
        + Add Another Skill
      </button>
    </div>
  );
};

export default SkillTagInput;
