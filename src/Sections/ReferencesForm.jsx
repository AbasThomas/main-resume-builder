import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faPlus, faTrash, faForward } from '@fortawesome/free-solid-svg-icons';

const ReferencesForm = ({ onChange, onNext, initialData = [] }) => {
  const [references, setReferences] = useState(initialData.length ? initialData : [
    { name: '', position: '', company: '', email: '', phone: '' },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...references];
    updated[index][field] = value;
    setReferences(updated);
    if (onChange) onChange(updated);
  };

  const addReference = () => {
    setReferences([
      ...references,
      { name: '', position: '', company: '', email: '', phone: '' },
    ]);
  };

  const removeReference = (index) => {
    const updated = references.filter((_, i) => i !== index);
    setReferences(updated);
    if (onChange) onChange(updated);
  };

  const handleNext = () => {
    if (onNext) onNext(references);
  };

  return (
    <form className="bg-[#2e2f34] p-6 rounded-xl text-white w-full max-w-[950px] mx-auto shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-yellow-300">
        <FontAwesomeIcon icon={faUserTie} className="mr-2" />
        References
      </h2>

      {references.map((ref, index) => (
        <div
          key={index}
          className="border border-gray-700 p-4 mb-4 rounded-md relative"
        >
          {references.length > 1 && (
            <button
              type="button"
              onClick={() => removeReference(index)}
              className="absolute top-2 right-2 text-red-400 hover:text-red-500"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm">Name</label>
              <input
                type="text"
                value={ref.name}
                onChange={(e) => handleChange(index, 'name', e.target.value)}
                className="w-full p-2 bg-gray-800 rounded-md text-white"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Position</label>
              <input
                type="text"
                value={ref.position}
                onChange={(e) => handleChange(index, 'position', e.target.value)}
                className="w-full p-2 bg-gray-800 rounded-md text-white"
                placeholder="Senior Manager"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Company</label>
              <input
                type="text"
                value={ref.company}
                onChange={(e) => handleChange(index, 'company', e.target.value)}
                className="w-full p-2 bg-gray-800 rounded-md text-white"
                placeholder="Awesome Corp"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                value={ref.email}
                onChange={(e) => handleChange(index, 'email', e.target.value)}
                className="w-full p-2 bg-gray-800 rounded-md text-white"
                placeholder="jane.doe@example.com"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Phone</label>
              <input
                type="tel"
                value={ref.phone}
                onChange={(e) => handleChange(index, 'phone', e.target.value)}
                className="w-full p-2 bg-gray-800 rounded-md text-white"
                placeholder="+234 123 456 789"
              />
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center mt-6">
        <button
          type="button"
          onClick={addReference}
          className="text-yellow-300 hover:text-yellow-400 font-medium flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faPlus} />
          Add Another Reference
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

export default ReferencesForm;