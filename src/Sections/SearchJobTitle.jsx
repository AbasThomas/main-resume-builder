import React, { useState } from 'react';

const SearchJobTitle = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample job titles and their associated skills
  const jobTitles = {
    'Software Developer': ['JavaScript', 'React', 'Node.js', 'HTML/CSS', 'Git'],
    'Data Scientist': ['Python', 'Machine Learning', 'Pandas', 'SQL', 'Statistics'],
    'UX Designer': ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'UI Design'],
    'Product Manager': ['Agile', 'Scrum', 'Product Strategy', 'Market Research', 'JIRA'],
    'DevOps Engineer': ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Linux']
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (title) => {
    setSearchTerm(title);
    if (jobTitles[title]) {
      onSelect(jobTitles[title]);
    }
  };

  const filteredTitles = Object.keys(jobTitles).filter(title => 
    title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-6">
      <label className="block mb-2 text-sm font-medium">
        Search for a job title to get suggested skills:
      </label>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="e.g. Software Developer"
          className="w-full p-2 bg-gray-800 rounded-md text-white"
        />
        {searchTerm && filteredTitles.length > 0 && (
          <div className="absolute z-10 w-full bg-gray-700 rounded-md shadow-lg max-h-60 overflow-y-auto">
            {filteredTitles.map((title, index) => (
              <div
                key={index}
                className="p-2 hover:bg-gray-600 cursor-pointer"
                onClick={() => handleSelect(title)}
              >
                {title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchJobTitle;