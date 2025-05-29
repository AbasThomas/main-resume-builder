import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faLink
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Distinct = () => {
  const user = [
    {
      input: '010 1010 100 10',
      icon: faPhone
    },
    {
      input: 'ResCraft@gmail.com',
      icon: faEnvelope
    },
    {
      input: 'Lagos, Nigeria',
      icon: faMapMarkerAlt
    },
    {
      input: 'LinkedIn : JohnDoe',
      icon: faLinkedin
    }
  ]

  const skill = [
    { skills: 'Teamwork' },
    { skills: 'Customer Service' },
    { skills: 'Multitasking' },
    { skills: 'Friendly' }
  ]

  return (
    <div className="w-[900px] mx-auto p-10 bg-white text-black font-sans flex shadow-lg">
      {/* Sidebar */}
      <div className="sidebar bg-purple-600 px-5 text-white w-[300px]">
        <div className="py-2.5 flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl font-bold">ABAS THOMAS</h2>
          <p className="text-[20px] font-semibold mt-1.5">Software Developer</p>
          <div className="w-[100px] h-[100px] bg-gray-300 rounded-full mt-3.5">
            <img src="#" alt="profile" className="rounded-full w-full h-full object-cover" />
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-6">
          <h1 className="uppercase text-[22px] border-b-2 border-white pb-2.5">Contact</h1>
          {user.map(({ input, icon }, index) => (
            <div key={index} className="p-2 flex items-center mt-2">
              <div className="icon w-8 h-8 bg-white text-purple-600 flex items-center justify-center rounded-full mr-2">
                <FontAwesomeIcon icon={icon} />
              </div>
              <p className="font-semibold text-[14px]">{input}</p>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="skills mt-10">
          <h1 className="uppercase text-[22px] border-b-2 border-white pb-2.5">Skills</h1>
          <ul className="mt-2 list-disc ml-5">
            {skill.map(({ skills }, index) => (
              <li key={index} className="font-semibold text-[15px] mt-1">
                {skills}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="normall px-6 flex-1">
        {/* Summary */}
        <section className="professionalSumm">
          <h1 className="text-[22px] font-semibold border-b-2 border-purple-700 py-2.5">
            Professional Summary
          </h1>
          <p className="mt-3 text-[18px]">
            Highly motivated and detail-oriented software developer with proven experience in
            building scalable applications and collaborating in fast-paced environments.
          </p>
        </section>

        {/* Experience */}
        <section className="experience mt-6">
          <h1 className="text-[22px] font-semibold border-b-2 border-purple-700 py-2.5">
            Experience
          </h1>

          {/* Job 1 */}
          <div className="mt-4">
            <p className="font-semibold text-[19px]">Company: ResCraft</p>
            <div className="flex mt-1 text-[19px]">
              <span className="mr-2">Software Engineer,</span>
              <span>July 2020 - August 2024</span>
            </div>
            <ul className="list-disc ml-5 mt-2 text-[18px]">
              <li>Collaborated with team members to complete development tasks.</li>
              <li>Managed multiple tasks simultaneously under tight deadlines.</li>
              <li>Provided responsive solutions to meet customer needs.</li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="mt-4">
            <p className="font-semibold text-[19px]">Company: ResBuild</p>
            <div className="flex mt-1 text-[19px]">
              <span className="mr-2">Database Engineer,</span>
              <span>July 2021 - August 2023</span>
            </div>
            <ul className="list-disc ml-5 mt-2 text-[18px]">
              <li>Optimized database performance for enterprise systems.</li>
              <li>Worked closely with engineers to maintain data integrity.</li>
              <li>Led database migration projects to new platforms.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="education mt-6">
          <h1 className="text-[22px] font-bold border-b-2 border-purple-700 py-2.5">Education</h1>

          <div className="mt-4">
            <p className="font-semibold text-[20px]">High School Diploma</p>
            <div className="text-[19px] flex gap-2 mt-1">
              <span>Catholic Boys Secondary School</span>
              <span> | July 1991 - August 1997</span>
            </div>
          </div>

          <div className="mt-4">
            <p className="font-semibold text-[20px]">BSc, Computer Science</p>
            <div className="text-[19px] flex gap-2 mt-1">
              <span>
                University of Lagos <span className="italic">(Currently Studying)</span>
              </span>
              <span> | July 2019 - August 2026</span>
            </div>
          </div>
        </section>

        {/* References */}
        <section className="references mt-6">
          <h1 className="text-[22px] font-bold border-b-2 border-purple-700 py-2.5">References</h1>
          <div className="mt-3">
            <p className="text-2xl font-semibold">Name: Jane Doe</p>
            <p className="text-[19px] mt-1">
              <span className="font-semibold">Position:</span> Manager
            </p>
            <p className="text-[19px] mt-1">
              <span className="font-semibold">Company:</span> ResCraft
            </p>
            <p className="text-[19px] mt-1">
              <span className="font-semibold">Email:</span> janedoe@gmail.com
            </p>
            <p className="text-[19px] mt-1">
              <span className="font-semibold">Phone:</span> 234 100 1001 001
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Distinct
