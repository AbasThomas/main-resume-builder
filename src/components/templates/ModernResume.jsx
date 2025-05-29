// import React from 'react';

// const ModernResume = ({ data }) => {
//   const {
//     personalInfo,
//     experiences,
//     education,
//     skills,
//     references,
//   } = data;

//   return (
//     <div className="w-[900px] mx-auto p-10 bg-white text-black font-sans">
//       {/* Header */}
//       <div className="text-center mb-6">
//         <h1 className="text-4xl font-bold">{personalInfo?.fullName || 'John Doe'}</h1>
//         <p className="text-gray-600">{personalInfo?.email} | {personalInfo?.phone} | {personalInfo?.address}</p>
//       </div>

//       {/* 2 Column Layout */}
//       <div className="grid grid-cols-3 gap-6">
//         {/* Left Column */}
//         <div className="col-span-1 space-y-6">
//           {/* Skills */}
//           <div>
//             <h2 className="text-lg font-semibold border-b-2 border-yellow-300 mb-2">Skills</h2>
//             <ul className="list-disc list-inside text-sm">
//               {skills?.map((skill, idx) => (
//                 <li key={idx}>{skill}</li>
//               ))}
//             </ul>
//           </div>

//           {/* References */}
//           <div>
//             <h2 className="text-lg font-semibold border-b-2 border-yellow-300 mb-2">References</h2>
//             <ul className="text-sm">
//               {references?.map((ref, idx) => (
//                 <li key={idx} className="mb-2">
//                   <p className="font-semibold">{ref.name}</p>
//                   <p>{ref.position}</p>
//                   <p className="text-gray-600">{ref.email} | {ref.phone}</p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="col-span-2 space-y-6">
//           {/* Experience */}
//           <div>
//             <h2 className="text-lg font-semibold border-b-2 border-yellow-300 mb-2">Work Experience</h2>
//             {experiences?.map((exp, idx) => (
//               <div key={idx} className="mb-4">
//                 <p className="font-bold">{exp.position} — {exp.company}</p>
//                 <p className="text-sm text-gray-600">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</p>
//                 <p className="text-sm">{exp.description}</p>
//               </div>
//             ))}
//           </div>

//           {/* Education */}
//           <div>
//             <h2 className="text-lg font-semibold border-b-2 border-yellow-300 mb-2">Education</h2>
//             {education?.map((edu, idx) => (
//               <div key={idx} className="mb-4">
//                 <p className="font-bold">{edu.degree} — {edu.institution}</p>
//                 <p className="text-sm text-gray-600">{edu.startYear} - {edu.endYear}</p>
//                 <p className="text-sm">{edu.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modern
import React from 'react'

const ModernResume = () => {
  return (
    <div className="w-[900px] mx-auto p-10 bg-white text-black font-sans">
        {/* Header */}
        
        
    </div>
  )
}

export default ModernResume