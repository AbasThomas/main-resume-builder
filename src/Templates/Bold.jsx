import React from 'react'

const Bold = () => {
    const user = [
        {
            input:'010 1010 100 10'
        },
        
        {
            input:'ResCraft@gmail.com'
        }, 
        {
            input:'Lagos Nigeria'
        },
        {
            input:'LinkedIn : JohnDoe'
        }
    ]
    const skill =[
        {
            skills:'Teamwork'
        },
        {
            skills:'Customer Service'
        },
        {
            skills:'Multitasking'
        },
        {
            skills:'Friendly'
        }
        

    ]
  return (
    <div className="w-[900px] mx-auto p-10 bg-white text-black font-sans border-b-3 mb-10 border-gray-400">
        {/* Header */}
        <div className=' border-b-3 border-gray-400 py-2.5 flex justify-between'>
            <div>
                <h2 className='text-4xl font-bold'>ABAS THOMAS</h2>
                <p className='text-[20px] text-gray-500 font-semibold mt-1.5'>Software Devloper</p>
            </div>
            <div className='w-30 h-30  bg-gray-300 rounded-full'><img src="#" alt="profile-img" /></div>
        </div>
        {/* contact */}
        <div className='flex gap-3 justify-self-start mt-[20px]'>
        {user.map(({ input}) => (
          <div  className="bg-gray-200 p-2 rounded-[8px] flex items-center ">
            <div className='icon w-8 h-8 bg-white rounded-full mr-1.5'></div>
            
            <p className='font-semibold'>{input}</p>
          </div>
        ))}
        </div>

        <div className="professionalSumm">
            <div className='border-b-3 w-[250px]  border-gray-400 py-2.5'><h1 className='font-bold text-[22px] '>Professional Summary</h1></div>
            <p className='mt-[10px] text-[18px]'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa temporibus tenetur possimus autem omnis tempora eum ab fuga soluta excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem explicabo dolor blanditiis cum nisi mollitia.
            </p>
        </div>
        <div className="skills">
        <div className='border-b-3 w-[70px]  border-gray-400 py-2.5'><h1 className='font-bold text-[22px] '>Skills</h1></div>
        <div className='flex gap-3 justify-self-start mt-[20px]'>

        {skill.map(({ skills}) => (
          <div  className="bg-gray-200 p-2 rounded-[8px] flex items-center ">
            <p className='font-semibold'>{skills}</p>
          </div>
        ))}
        </div>
        </div>
        <div className="experience">
            
            <div className='border-b-3 w-[120px]  border-gray-400 py-2.5'><h1 className='font-bold text-[22px] '>Experience</h1></div>
            <div className="companyPostion  items-center gap-2 mt-[20px]">
                <div className="companyName font-semibold text-[19px]">Company : ResCraft</div>
               
            </div>
            <div className='flex mt-[10px]'>
                <div className="position  text-[19px] mr-2"> Software Engineer, </div>
                <div className="year flex items-center">
                    <div className="startdate text-[19px]">July 2020</div>
                    -
                    <div className="enddate text-[19px]">August 2024</div>
                </div>
            </div>
        </div>
        <div className="experience flex flex-col gap-1.5 mt-3                          ">
            <li className='text-[18px]'>Worked with coworkers to complete tasks</li>
            <li className='text-[18px]'>Demonstrated ability to manage mulitple tasks</li>
            <li className='text-[18px]'>Responded quickly to meet Customer needs</li>

        </div>
                <div className="experience">
            
            <div className="companyPostion  items-center gap-2 mt-[20px]">
                <div className="companyName font-semibold text-[19px]">Company : ResBuild</div>
               
            </div>
            <div className='flex mt-[10px]'>
                <div className="position  text-[19px] mr-2"> Database Engineer, </div>
                <div className="year flex items-center">
                    <div className="startdate text-[19px]">July 2021</div>
                    -
                    <div className="enddate text-[19px]">August 2023</div>
                </div>
            </div>
        </div>
        <div className="skills flex flex-col gap-1.5 mt-3                          ">
            <li className='text-[18px]'>Worked with coworkers to complete tasks</li>
            <li className='text-[18px]'>Demonstrated ability to manage mulitple tasks</li>
            <li className='text-[18px]'>Responded quickly to meet Customer needs</li>

        </div>
        <div className="education mt-3">
             <div className='border-b-3 w-[110px]  border-gray-400 py-2.5'><h1 className='font-bold text-[22px] '>Education</h1></div>
             <div className="Certificate font-semibold text-[22px] mt-[20px]">High School Diploma</div>
            <div className='flex items-center gap-1.5 mt-2'>
                <div className="institution text-[19px] font-semibold ">
                    Catholic Boys Secondary School,  
                </div>
                <div className="year flex items-center">
                        <div className="startdate text-[19px]">July 1991</div>
                        -
                        <div className="enddate text-[19px]">August 1997</div>
                </div>
            
            </div>                
             <div className="Certificate font-semibold text-[22px] mt-[20px]">Bsc</div>
            <div className='flex items-center gap-1.5 mt-2 '>
                <div className="institution text-[19px] font-semibold">
                    University of Lagos - <span className='italic'>Currently Studying</span>,
                </div>
                <div className="year flex items-center">
                        <div className="startdate text-[19px]">July 2019</div>
                        -
                        <div className="enddate text-[19px]">August 2026</div>
                </div>
                
            </div>           
        </div>
        <div className="references">
             <div className='border-b-3 w-[110px]  border-gray-400 py-2.5 mt-3'><h1 className='font-bold text-[22px] '>References</h1></div>
            <div className="reference mt-3">
                <div className="name text-2xl font-semibold">Name: Jane Doe</div>
                <div className="position text-[19px] mt-1"> <span className='font-semibold'>Position:</span> Manager</div>
                <div className="company text-[19px] mt-1"> <span className='font-semibold'>Company:</span> ResCraft</div>
                <div className="Email text-[19px] mt-1"><span className='font-semibold'>Email:</span> janedoe.@gmail.com</div>
                <div className='phone text-[19px] mt-1'><span className='font-semibold'>Phone:</span> 234 100 1001 001</div>
            </div>
        </div>
    </div>
  )
}

export default Bold