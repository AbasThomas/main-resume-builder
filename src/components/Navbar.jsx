import React from 'react'

const Navbar = () => {
  return (
    <div>
    <div className=' flex items-center '>
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">
            <span 
            className='text-white '
              style={{filter: 'drop-shadow(0 0 8px #ffffffaa) drop-shadow(0 0 16px #ffffff88)', }}
            >Res</span>
            <span 
            className='text-yellow-300'
       style={{filter: 'drop-shadow(0 0 6px #fffb3b) drop-shadow(0 0 16px #fffb3b)',}}>Craft</span></h1>
        </div>
        <div className='itmes-center justify-center '>
            <select
              name="language"
              className="bg-transparent border border-gray-600 text-white px-1 flex items-center py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 shadow-md"
              defaultValue="en"
            >
              <option value="en" className="text-black">English</option>
              <option value="fr" className="text-black">Français</option>
              <option value="es" className="text-black">Español</option>
              <option value="de" className="text-black">Deutsch</option>
              <option value="zh" className="text-black">中文</option>
            </select>
        </div>

        <div className="dark-mode-toggle">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
            
        </div>
      </div>
    </div>
  )
}

export default Navbar