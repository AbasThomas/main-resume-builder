import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="w-full px-6 py-4 flex items-center justify-between h-min">
      {/* Logo */}
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight">
          <span
            className="text-white"
            style={{
              filter: 'drop-shadow(0 0 8px #ffffffaa) drop-shadow(0 0 16px #ffffff88)',
            }}
          >
            Res
          </span>
          <span
            className="text-yellow-300"
            style={{
              filter: 'drop-shadow(0 0 6px #fffb3b) drop-shadow(0 0 16px #fffb3b)',
            }}
          >
            Craft
          </span>
        </h1>
      </div>

  <div className="flex items-center gap-4">
      {/* Language Dropdown */}
      <div className="relative">
        <select
          name="language"
          className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-black dark:text-white px-3 py-1 pr-8 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 shadow-md appearance-none"
          defaultValue="en"
        >
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="es">Español</option>
          <option value="de">Deutsch</option>
          <option value="zh">中文</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-gray-600 dark:text-gray-400">
          ▼
        </div>
      </div>

      {/* Dark Mode Toggle with Icon */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="w-11 h-11 flex items-center justify-center rounded-full border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black transition duration-300"
        aria-label="Toggle dark mode"
      >
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>
    </div>
    </div>
  );
};

export default Navbar;
