import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faForward } from '@fortawesome/free-solid-svg-icons';

const PersonalInfoForm = ({ onNext, onDataChange, initialData }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    position: 'Software Developer',
    email: '',
    phone: '',
    address: '',
    linkedin: '',
    professionalSummary: '',
    profileImage: null,
  });

  // Initialize form with draft data if available
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const newFormData = {
      ...formData,
      [name]: name === 'profileImage' ? files[0] : value,
    };
    setFormData(newFormData);
  };

  const handleNext = () => {
    if (onDataChange) onDataChange(formData);
    if (onNext) onNext();
  };

  return (
    <form className="bg-[#2e2f34] p-4 rounded-lg text-white w-full max-w-[950px] mx-auto shadow-lg max-h-[85vh] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-yellow-300">
        <FontAwesomeIcon icon={faUser} className="mr-2" />
        Personal Information
      </h2>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Profile Image Upload */}
        <div className="flex flex-col items-center gap-2">
          <div className="bg-gray-700 rounded-full w-[100px] h-[100px] overflow-hidden flex justify-center items-center">
            {formData.profileImage ? (
              <img
                src={typeof formData.profileImage === 'string' 
                  ? formData.profileImage 
                  : URL.createObjectURL(formData.profileImage)}
                alt="Profile Preview"
                className="object-cover w-full h-full rounded-full"
              />
            ) : (
              <FontAwesomeIcon icon={faUser} className="text-3xl text-[#95989B]" />
            )}
          </div>
          <label
            htmlFor="profileImage"
            className="cursor-pointer bg-yellow-300 text-black text-xs px-3 py-1 rounded-md hover:bg-yellow-400 transition"
          >
            Upload Photo
          </label>
          <input
            id="profileImage"
            type="file"
            name="profileImage"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
        </div>

        {/* Input Fields */}
        <div className="flex-1 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {['fullName', 'email', 'phone', 'address'].map((field) => (
              <div key={field}>
                <label className="block mb-1 text-xs capitalize">
                  {field.replace(/([A-Z])/g, ' $1').trim()}
                </label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-800 rounded-md text-sm"
                  placeholder={field === 'email' ? 'rescraft@example.com' : ''}
                />
              </div>
            ))}
            
            {/* Position field */}
            <div>
              <label className="block mb-1 text-xs">Position</label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full p-2 bg-gray-800 rounded-md text-sm"
                placeholder="Software Developer"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-xs">LinkedIn URL</label>
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="linkedin.com/in/johndoe"
              className="w-full p-2 bg-gray-800 rounded-md text-sm"
            />
          </div>

          <div>
            <label className="block mb-1 text-xs">Professional Summary</label>
            <textarea
              name="professionalSummary"
              value={formData.professionalSummary}
              onChange={handleChange}
              rows={3}
              placeholder="Write a compelling summary..."
              className="w-full p-2 bg-gray-800 rounded-md text-sm"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 text-right">
        <button
          type="button"
          onClick={handleNext}
          className="bg-yellow-300 text-black font-semibold px-5 py-2 text-sm rounded-md hover:bg-yellow-400 transition"
        >
          Next <FontAwesomeIcon icon={faForward} className="ml-2" />
        </button>
      </div>
    </form>
  );
};

export default PersonalInfoForm;