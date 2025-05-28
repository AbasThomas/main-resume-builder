import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const SkillsForm = ({ onChange, onNext }) => {
  const [skills, setSkills] = useState(['']);

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
    if (onChange) onChange(updatedSkills);
  };

  const addSkill = () => {
    setSkills([...skills, '']);
  };

  const removeSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
    if (onChange) onChange(updatedSkills);
  };

  const handleNext = () => {
    if (onNext) onNext(skills);
  };

  return (
    <form className="bg-[#2e2f34] p-6 rounded-xl text-white w-full max-w-[950px] mx-auto shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-yellow-300">
        <FontAwesomeIcon icon={faLightbulb} className="mr-2" />
        Skills
      </h2>

      {skills.map((skill, index) => (
        <div key={index} className="flex items-center gap-4 mb-4">
          <input
            type="text"
            value={skill}
            onChange={(e) => handleSkillChange(index, e.target.value)}
            placeholder="e.g., JavaScript, React, Photoshop"
            className="flex-1 p-2 bg-gray-800 rounded-md text-white"
          />
          {skills.length > 1 && (
            <button
              type="button"
              onClick={() => removeSkill(index)}
              className="text-red-400 hover:text-red-500"
              title="Delete skill"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          )}
        </div>
      ))}

      <div className="flex justify-between items-center mt-6">
        <button
          type="button"
          onClick={addSkill}
          className="text-yellow-300 hover:text-yellow-400 font-medium flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faPlus} />
          Add Another Skill
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="bg-yellow-300 text-black font-bold px-6 py-2 rounded-md hover:bg-yellow-400 transition"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default SkillsForm;
