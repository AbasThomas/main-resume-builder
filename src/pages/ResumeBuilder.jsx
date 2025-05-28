import React, { useState } from 'react';
import R3FBackground from '../components/R3FBackground';
import PersonalInfoForm from '../Sections/PersonalInformation';
const ResumeBuilder = () => {
  // Example state for progress (0 to 100)
  const [progress, setProgress] = useState(0);

  return (
        <div className="relative w-full  text-white bg-[var(--almost-black)] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <R3FBackground blur />
          </div>

          <div className="relative z-10 p-6  mx-auto">
            <div className='flex items-center justify-center flex-col'>
              <h2 className="mb-3  text-2xl font-bold">Resume Completion</h2>

              {/* Progress Bar Container */}
              <div className="w-[700px]  bg-gray-700 rounded-full h-6 ">
                {/* Progress Fill */}
                <div
                  className="bg-yellow-300 h-6 rounded-full transition-all duration-500 ease-in-out "
                  style={{ width: `${progress}%` }}
                />
              </div>
            <p className="mt-1 text-yellow-300 font-semibold text-[15px] relative right-[290px]">{progress}% Complete</p>

            </div>

          <div className=" p-2 ">
                <PersonalInfoForm
                  onChange={data => console.log('Form Data Updated:', data)}
                  onNext={data => {
                    console.log('Next clicked, current data:', data);
                    // Move to next step in resume builder or save data
                  }}
                />
          </div>          
          </div>
          
        </div>
  );
};

export default ResumeBuilder;

