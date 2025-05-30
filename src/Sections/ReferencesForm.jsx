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
               