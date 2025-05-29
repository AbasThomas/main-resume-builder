import React from 'react';

const Expressive = () => {
  return (
    <div className="max-w-[950px] mx-auto bg-gradient-to-tr from-pink-100 via-white to-purple-100 text-gray-800 font-sans p-10 shadow-2xl rounded-xl">
      {/* Header */}
      <div className="text-center border-b-4 border-pink-400 pb-6 mb-8">
        <h1 className="text-4xl font-extrabold uppercase tracking-wide text-pink-600">Aria Bloom</h1>
        <p className="text-lg italic text-purple-700">Creative Director & Visual Storyteller</p>
        <div className="flex justify-center gap-5 mt-3 text-sm">
          <span>✉ aria.bloom@creativemail.com</span>
          <span>🌐 www.ariabloom.design</span>
          <span>📍 New York, NY</span>
        </div>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left Side */}
        <div className="col-span-1 space-y-8">
          {/* Profile */}
          <div>
            <h2 className="text-xl font-bold text-purple-600 border-b border-purple-300 pb-1">Profile</h2>
            <p className="text-sm mt-2">
              Passionate creative leader with over 7 years of experience turning brand stories into stunning visual campaigns. Known for pushing the boundaries of digital aesthetics and driving memorable experiences.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xl font-bold text-purple-600 border-b border-purple-300 pb-1">Skills</h2>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>Visual Branding</li>
              <li>Creative Strategy</li>
              <li>UI/UX Design</li>
              <li>Motion Graphics</li>
              <li>Storyboarding</li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xl font-bold text-purple-600 border-b border-purple-300 pb-1">Education</h2>
            <div className="mt-2 text-sm">
              <p className="font-semibold text-pink-700">BFA in Visual Communication</p>
              <p>Parsons School of Design, 2015 – 2019</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-span-2 space-y-10">
          {/* Experience */}
          <div>
            <h2 className="text-xl font-bold text-pink-600 border-b border-pink-300 pb-1">Experience</h2>
            <div className="mt-3 space-y-4">
              <div>
                <h3 className="font-semibold text-lg">Creative Director – Vibe Studio</h3>
                <p className="text-sm text-gray-600">2021 – Present</p>
                <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                  <li>Led cross-functional teams in delivering 30+ client campaigns per year.</li>
                  <li>Developed award-winning digital content strategies.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Senior Designer – Pixel & Hue</h3>
                <p className="text-sm text-gray-600">2019 – 2021</p>
                <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                  <li>Revamped branding for 10+ companies, increasing visual engagement.</li>
                  <li>Designed interfaces for mobile and web applications using Figma and Adobe XD.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Awards */}
          <div>
            <h2 className="text-xl font-bold text-pink-600 border-b border-pink-300 pb-1">Awards & Recognition</h2>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>2023 Adobe Creative Leader Award</li>
              <li>2022 Behance Top Featured Artist</li>
              <li>2021 Awwwards Honorable Mention</li>
            </ul>
          </div>

          {/* References */}
          <div>
            <h2 className="text-xl font-bold text-pink-600 border-b border-pink-300 pb-1">Reference</h2>
            <div className="text-sm mt-2">
              <p><strong>Name:</strong> Riley Chen</p>
              <p><strong>Role:</strong> Head of Production, Vibe Studio</p>
              <p><strong>Email:</strong> riley.chen@vibestudio.com</p>
              <p><strong>Phone:</strong> +1 555 123 4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expressive;
