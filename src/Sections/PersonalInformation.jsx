import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const PersonalInfoForm = ({ onChange, onNext }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    location: '',
    linkedin: '',
    professionalSummary: '',
    profileImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profileImage') {
      const imageFile = files[0];
      setFormData((prev) => ({ ...prev, profileImage: imageFile }));
      if (onChange) onChange({ ...formData, profileImage: imageFile });
    } else {
      const updatedForm = { ...formData, [name]: value };
      setFormData(updatedForm);
      if (onChange) onChange(updatedForm);
    }
  };

  const handleNext = () => {
    if (onNext) onNext(formData);
  };

  return (
    <form className="bg-[#2e2f34] p-6 rounded-xl text-white w-full max-w-[950px] mx-auto shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-yellow-300">
        <FontAwesomeIcon icon={faUser} className="mr-2" />
        Personal Information
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Profile Image Section */}
        <div className="flex flex-col items-center gap-3">
          <div className="bg-gray-700 rounded-full w-[130px] h-[130px] flex justify-center items-center overflow-hidden">
            {formData.profileImage ? (
              <img
                src={URL.createObjectURL(formData.profileImage)}
                alt="Profile Preview"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <FontAwesomeIcon icon={faUser} className="text-5xl text-[#95989B]" />
            )}
          </div>
          <input
            type="file"
            name="profileImage"
            accept="image/*"
            onChange={handleChange}
            className="text-sm"
          />
        </div>

        {/* Input Fields */}
        <div className="flex-1 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full p-2 bg-gray-800 rounded-md text-white"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="rescraft@example.com"
                className="w-full p-2 bg-gray-800 rounded-md text-white"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+234 000 000 000"
                className="w-full p-2 bg-gray-800 rounded-md text-white"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Country</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Nigeria"
                className="w-full p-2 bg-gray-800 rounded-md text-white"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm">Address</label>
            <textarea
              name="location"
              value={formData.location}
              onChange={handleChange}
              rows={2}
              placeholder="123, Awesome Street, Lagos"
              className="w-full p-2 bg-gray-800 rounded-md text-white"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">LinkedIn Profile URL</label>
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="linkedin.com/in/johndoe"
              className="w-full p-2 bg-gray-800 rounded-md text-white"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Professional Summary</label>
            <textarea
              name="professionalSummary"
              value={formData.professionalSummary}
              onChange={handleChange}
              rows={4}
              placeholder="Write a compelling summary of your professional background and key strengths..."
              className="w-full p-2 bg-gray-800 rounded-md text-white placeholder:text-sm"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 justify-self-end">
        <button
          type="button"
          onClick={handleNext}
          className="bg-yellow-300 text-black font-bold px-6 py-2 rounded-md hover:bg-yellow-400 transition"
        >
          Next  <FontAwesomeIcon icon="fa-forward" />
        </button>
      </div>
    </form>
  );
};

export default PersonalInfoForm;
