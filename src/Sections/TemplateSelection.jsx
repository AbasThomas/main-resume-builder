import React from 'react';

const TemplateSelection = ({ onChange, onNext }) => {
  const templates = [
    {
      name: 'Modern',
      description: 'Clean, sleek layout with bold headings and minimalist design.',
      preview: '/assets/templates/modern-preview.png', // Replace with your actual image path
    },
    {
      name: 'Elegant',
      description: 'Sophisticated design with clean lines and refined fonts.',
      preview: '/assets/templates/elegant-preview.png',
    },
    {
      name: 'Executive',
      description: 'Professional and polished format ideal for leadership roles.',
      preview: '/assets/templates/executive-preview.png',
    },
    {
      name: 'Expressive',
      description: 'Creative layout with eye-catching visual structure.',
      preview: '/assets/templates/expressive-preview.png',
    },
    {
      name: 'Distinct',
      description: 'Unique design with emphasis on individuality and bold formatting.',
      preview: '/assets/templates/distinct-preview.png',
    },
    {
      name: 'Bold',
      description: 'Strong and confident look with impactful typography.',
      preview: '/assets/templates/bold-preview.png',
    },
  ];

  const handleSelect = (templateName) => {
    onChange(templateName); // Pass template name to parent
    onNext(); // Move to next step
  };

  return (
    <div className="bg-[#2e2f34] p-6 rounded-xl text-white w-full max-w-[950px] mx-auto shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-yellow-300">Choose a Template</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.name}
            className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:ring-2 hover:ring-yellow-300 transition"
            onClick={() => handleSelect(template.name)}
          >
            <img
              src={template.preview}
              alt={`${template.name} Template`}
              className="w-full h-56 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold">{template.name}</h3>
            <p className="text-sm text-gray-400">{template.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelection;
