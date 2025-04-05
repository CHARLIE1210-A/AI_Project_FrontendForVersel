'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Sun, Moon, User } from 'lucide-react';
import '../globals.css';

const Header = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <header className="flex items-center justify-between w-auto p-3 bg-[#253745] text-white">
      <div className="flex items-center h-auto w-auto space-x-2">
        <Image src="/icons/logo_name0.svg" alt="Logo" width={120} height={40} />
        {/* <span className="text-lg font-semibold">Brand Name</span> */}
      </div>
      <button
        onClick={toggleDarkMode}
        className=" p-2 rounded-full bg-[#4d96a6] hover:bg-[#9ba8ab]"
      >
        {darkMode ? <Sun /> : <Moon />}
      </button>
      <div className="p-2 rounded-full bg-[#4d96a6] hover:bg-[#9ba8ab]">
        <User />
      </div>
    </header>
  );
};

export default Header;
