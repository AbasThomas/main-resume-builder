import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import SearchJobTitle from './SearchJobTitle';
import SkillTagInput from './SkillTagInput';

const SkillsForm = ({ onChange, onNext, initialData = [] }) => {
  const [skills, setSkills] = useState(initialData.length ? initialData : ['']);

  const handleSkillsChange = (updatedSkills) => {
    setSkills(updatedSkills);
    if (onChange) onChange(updatedSkills);
  };

  const handleJobTitleSelect = (suggestedSkills) => {
    setSkills(suggestedSkills);
    if (onChange) onChange(suggestedSkills);
  };

  const handleNext = () => {
    if (onNext) onNext(skills);
  };

  return (
    <form className="bg-[#2e2f34] p-6 rounded-xl text-white w-full max-w-[950px] mx-auto shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-yellow-300">Skills</h2>

      <SearchJobTitle onSelect={handleJobTitleSelect} />
      <SkillTagInput skills={skills} onChange={handleSkillsChange} />

      <div className="flex justify-end items-center mt-6">
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

export default SkillsForm;