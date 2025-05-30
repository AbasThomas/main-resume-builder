import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const TemplateSelection = ({ onChange }) => {
  const templates = [
    { id: 'bold', name: 'Bold', description: 'Clean and professional design with strong typography' },
    { id: 'elegant', name: 'Elegant', description: 'Sophisticated layout with subtle design elements' },
    { id: 'executive', name: 'Executive', description: 'Formal design suitable for corporate environments' },
    { id: 'expressive', name: 'Expressive', description: 'Creative layout with visual highlights' },
    { id: 'distinct', name: 'Distinct', description: 'Unique design that stands out from traditional formats' },
  ];

  const [selectedTemplate, setSelectedTemplate] = React.useState('bold');

  const handleSelect = (templateId) => {
    setSelectedTemplate(templateId);
    if (onChange) onChange(templateId);
  };

  const handleSubmit = () => {
    if (onChange) onChange(selectedTemplate);
  };

  return (
    <div className="bg-[#2e2f34] p-8 rounded-xl text-white w-full max-w-[950px] mx-auto shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center text-yellow-300">
        Choose a Template
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {templates.map((template) => (
          <div
            key={template.id}
            onClick={() => handleSelect(template.id)}
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              selectedTemplate === template.id
                ? 'border-yellow-400 bg-gray-700'
                : 'border-gray-600 hover:border-gray-500'
            }`}
          >
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold">{template.name}</h3>
              {selectedTemplate === template.id && (
                <FontAwesomeIcon icon={faCheck} className="text-green-400" />
              )}
            </div>
            <p className="mt-2 text-gray-300">{template.description}</p>
            <div className="mt-4 bg-gray-800 h-40 rounded-md flex items-center justify-center">
              <div className="text-gray-500">Template Preview</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <button
          onClick={handleSubmit}
          className="bg-yellow-300 text-black font-bold px-8 py-3 rounded-md hover:bg-yellow-400 transition text-lg"
        >
          Generate Resume
        </button>
      </div>
    </div>
  );
};

export default TemplateSelection;