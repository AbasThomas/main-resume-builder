import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faTrash, faPlus, faForward } from '@fortawesome/free-solid-svg-icons';

const EducationForm = ({ onChange, onNext, initialData = [] }) => {
  const [educationList, setEducationList] = useState(initialData.length ? initialData : [
    {
      school: '',
      degree: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    },
  ]);

  const handleInputChange = (index, name, value) => {
    const updatedList = [...educationList];
    updatedList[index][name] = value;
    setEducationList(updatedList);
    if (onChange) onChange(updatedList);
  };

  const toggleCurrent = (index) => {
    const updatedList = [...educationList];
    updatedList[index].current = !updatedList[index].current;
    if (updatedList[index].current) {
      updatedList[index].endDate = '';
    }
    setEducationList(updatedList);
    if (onChange) onChange(updatedList);
  };

  const addEducation = () => {
    setEducationList([
      ...educationList,
      {
        school: '',
        degree: '',
        fieldOfStudy: '',
        startDate: '',
        endDate: '',
        current: false,
        description: '',
      },
    ]);
  };

  const removeEducation = (index) => {
    const updatedList = educationList.filter((_, i) => i !== index);
    setEducationList(updatedList);
    if (onChange) onChange(updatedList);
  };

  const handleNext = () => {
    if (onNext) onNext(educationList);
  };

  return (
    <form className="bg-[#2e2f34] p-6 rounded-xl text-white w-full max-w-[950px] mx-auto shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-yellow-300">
        <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
        Education
      </h2>

      {educationList.map((entry, index) => (
        <div key={index} className="border border-gray-600 p-4 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1 text-sm">School/Institution</label>
              <input
                type="text"
                value={entry.school}
                onChange={(e) => handleInputChange(index, 'school', e.target.value)}
                placeholder="University of Lagos"
                className="w-full p-2 bg-gray-800 rounded-md text-white"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Degree</label>
              <input
                type="text"
                value={entry.degree}
                onChange={(e) => handleInputChange(index, 'degree', e.target.value)}
                placeholder="BSc"
                className="w-full p-2 bg-gray-800 rounded-md text-white"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Field of Study</label>
              <input
                type="text"
                value={entry.fieldOfStudy}
                onChange={(e) => handleInputChange(index, 'fieldOfStudy', e.target.value)}
                placeholder="Computer Science"
                className="w-full p-2 bg-gray-800 rounded-md text-white"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-1 text-sm">Start Date</label>
                <input
                  type="month"
                  value={entry.startDate}
                  onChange={(e) => handleInputChange(index, 'startDate', e.target.value)}
                  className="w-full p-2 bg-gray-800 rounded-md text-white"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-1 text-sm">End Date</label>
                <input
                  type="month"
                  value={entry.endDate}
                  disabled={entry.current}
                  onChange={(e) => handleInputChange(index, 'endDate', e.target.value)}
                  className="w-full p-2 bg-gray-800 rounded-md text-white disabled:opacity-50"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                checked={entry.current}
                onChange={() => toggleCurrent(index)}
              />
              <label className="text-sm">Currently Studying</label>
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm">Description / Achievements</label>
            <textarea
              rows="3"
              value={entry.description}
              onChange={(e) => handleInputChange(index, 'description', e.target.value)}
              placeholder="Graduated with honors..."
              className="w-full p-2 bg-gray-800 rounded-md text-white"
            />
          </div>

          {educationList.length > 1 && (
            <button
              type="button"
              onClick={() => removeEducation(index)}
              className="text-red-400 mt-4 flex items-center gap-2 hover:underline"
            >
              <FontAwesomeIcon icon={faTrash} />
              Delete This Education
            </button>
          )}
        </div>
      ))}

      <div className="flex justify-between items-center mt-6">
        <button
          type="button"
          onClick={addEducation}
          className="text-yellow-300 hover:text-yellow-400 font-medium flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faPlus} />
          Add Another Education
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

export default EducationForm;