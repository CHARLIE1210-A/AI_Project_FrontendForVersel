'use client';

import {Home, Settings, ClipboardList, CheckCircle, Plus, Sun, Moon, User, Menu } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../assets/icons/logo1.svg';

import '../globals.css';

const menuItems = [
  { name: 'home', icon: <Home />, link: '/' },
  { name: 'tasks', icon: <ClipboardList />, link: '/tasks' },
  { name: 'check', icon: <CheckCircle />, link: '/check' },
  { name: 'settings', icon: <Settings />, link: '/settings' },
];

const Sidebar = () => {
  const [active, setActive] = useState<string>('home');
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <aside className={`h-auto ${expanded ? 'w-48' : 'w-16'} flex flex-col bg-[#253745] text-white p-2 transition-all`}>
      <div className="flex items-center justify-center w-12 h-12 mb-28">
        <Image src="/icons/logo0.png" alt="Logo" width={48} height={48} />
      </div>
      <div className="flex items-center justify-center space-x-2 mb-14 cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <Menu className="text-white" />
        {expanded && <span className="text-lg font-semibold">Menu</span>}
      </div>
      <div className="flex flex-col space-y-6 flex-grow">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.link}>
            <div
              className={`flex items-center justify-center space-x-2 p-2 rounded-full transition-all cursor-pointer hover:bg-[#4d96a6] ${
                active === item.name ? 'bg-[#9ba8ab]' : ''
              }`}
              onClick={() => setActive(item.name)}
            >
              {item.icon}
              {expanded && <span className="text-sm">{item.name}</span>}
            </div>
          </Link>
        ))}
      </div>
      {/* <button className="p-2 bg-[#4d96a6] rounded-full hover:bg-[#9ba8ab] mt-auto">
        <Plus />
      </button> */}
    </aside>
  );
};

export default Sidebar;
