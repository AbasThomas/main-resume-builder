import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Bold = () => {
  const user = [
    {
      input: '010 1010 100 10',
      icon: faPhone,
    },
    {
      input: 'ResCraft@gmail.com',
      icon: faEnvelope,
    },
    {
      input: 'Lagos Nigeria',
      icon: faMapMarkerAlt,
    },
    {
      input: 'LinkedIn: JohnDoe',
      icon: faLinkedinIn,
    },
  ]

  const skill = [
    { skills: 'Teamwork' },
    { skills: 'Customer Service' },
    { skills: 'Multitasking' },
    { skills: 'Friendly' },
  ]

  return (
    <div className="w-[900px] mx-auto p-10 bg-white text-black font-sans border-b-3 mb-10 border-gray-400">
      {/* Header */}
      <div className="border-b-3 border-gray-400 py-2.5 flex justify-between">
        <div>
          <h2 className="text-4xl font-bold">ABAS THOMAS</h2>
          <p className="text-[20px] text-gray-500 font-semibold mt-1.5">Software Developer</p>
        </div>
        <div className="w-30 h-30 bg-gray-300 rounded-full">
          <img src="#" alt="profile-img" />
        </div>
      </div>

      {/* Contact */}
      <div className="flex flex-wrap gap-3 mt-[20px]">
        {user.map((item, index) => (
          <div key={index} className="bg-gray-200 p-2 rounded-[8px] flex items-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-1.5">
              <FontAwesomeIcon icon={item.icon} className="text-[18px]" />
            </div>
            <p className="font-semibold text-[15px]">{item.input}</p>
          </div>
        ))}
      </div>

      {/* Professional Summary */}
      <div className="professionalSumm mt-6">
        <div className="border-b-3 w-[250px] border-gray-400 py-2.5">
          <h1 className="font-bold text-[22px]">Professional Summary</h1>
        </div>
        <p className="mt-[10px] text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa temporibus tenetur possimus autem omnis tempora eum ab fuga soluta excepturi. Voluptatem explicabo dolor blanditiis cum nisi mollitia.
        </p>
      </div>

      {/* Skills */}
      <div className="skills mt-6">
        <div className="border-b-3 w-[70px] border-gray-400 py-2.5">
          <h1 className="font-bold text-[22px]">Skills</h1>
        </div>
        <div className="flex gap-3 flex-wrap mt-[20px]">
          {skill.map((item, index) => (
            <div key={index} className="bg-gray-200 p-2 rounded-[8px]">
              <p className="font-semibold">{item.skills}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience 1 */}
      <div className="experience mt-6">
        <div className="border-b-3 w-[120px] border-gray-400 py-2.5">
          <h1 className="font-bold text-[22px]">Experience</h1>
        </div>

        <div className="mt-[20px]">
          <div className="font-semibold text-[19px]">Company: ResCraft</div>
          <div className="flex mt-[10px]">
            <div className="text-[19px] mr-2">Software Engineer,</div>
            <div className="text-[19px]">July 2020 - August 2024</div>
          </div>
          <ul className="list-disc ml-5 mt-3 text-[18px] space-y-1">
            <li>Worked with coworkers to complete tasks</li>
            <li>Demonstrated ability to manage multiple tasks</li>
            <li>Responded quickly to meet customer needs</li>
          </ul>
        </div>

        {/* Experience 2 */}
        <div className="mt-[20px]">
          <div className="font-semibold text-[19px]">Company: ResBuild</div>
          <div className="flex mt-[10px]">
            <div className="text-[19px] mr-2">Database Engineer,</div>
            <div className="text-[19px]">July 2021 - August 2023</div>
          </div>
          <ul className="list-disc ml-5 mt-3 text-[18px] space-y-1">
            <li>Worked with coworkers to complete tasks</li>
            <li>Demonstrated ability to manage multiple tasks</li>
            <li>Responded quickly to meet customer needs</li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="education mt-6">
        <div className="border-b-3 w-[110px] border-gray-400 py-2.5">
          <h1 className="font-bold text-[22px]">Education</h1>
        </div>
        <div className="mt-[20px]">
          <div className="font-semibold text-[22px]">High School Diploma</div>
          <div className="flex items-center gap-1.5 mt-2">
            <div className="text-[19px] font-semibold">Catholic Boys Secondary School,</div>
            <div className="text-[19px]">July 1991 - August 1997</div>
          </div>
        </div>

        <div className="mt-[20px]">
          <div className="font-semibold text-[22px]">BSc</div>
          <div className="flex items-center gap-1.5 mt-2">
            <div className="text-[19px] font-semibold">University of Lagos - <span className="italic">Currently Studying</span>,</div>
            <div className="text-[19px]">July 2019 - August 2026</div>
          </div>
        </div>
      </div>

      {/* References */}
      <div className="references mt-6">
        <div className="border-b-3 w-[110px] border-gray-400 py-2.5">
          <h1 className="font-bold text-[22px]">References</h1>
        </div>
        <div className="reference mt-3">
          <div className="text-2xl font-semibold">Name: Jane Doe</div>
          <div className="text-[19px] mt-1"><span className="font-semibold">Position:</span> Manager</div>
          <div className="text-[19px] mt-1"><span className="font-semibold">Company:</span> ResCraft</div>
          <div className="text-[19px] mt-1"><span className="font-semibold">Email:</span> janedoe@gmail.com</div>
          <div className="text-[19px] mt-1"><span className="font-semibold">Phone:</span> 234 100 1001 001</div>
        </div>
      </div>
    </div>
  )
}

export default Bold
