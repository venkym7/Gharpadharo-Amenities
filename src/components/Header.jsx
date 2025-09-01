import React, { useState } from 'react';

import { HiUser } from "react-icons/hi2";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white inset-shadow-2xs fixed top-0 left-0 right-0 z-50 ">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between relative">
        
       
        <div className='size-16 flex max-w-sm'>
          <img src='https://www.gharpadharo.com/assets/logo.png' alt='Logo' className="w-full h-auto" />
        </div>
        
       
        <div className="text-2xl font-bold text-gray-800 absolute left-20 md:left-24 top-1/2 transform -translate-y-1/2">
          Gharpadharo
        </div>

      
        <nav className="ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block md:hidden text-gray-800 focus:outline-none text-2xl"
          >
            {isOpen ? '✕' : '☰'}
          </button>

          <ul className={`absolute top-full left-0 w-full bg-white md:bg-transparent md:static md:flex md:space-x-6 ${
            isOpen ? 'block' : 'hidden'
          }`}>
            <li><a href="#" className="block py-2 md:py-0 text-gray-800 font-bold">Home</a></li>
            <li><a href="#" className="block py-2 md:py-0 text-gray-800 ">Properties</a></li>
            <li><a href="#" className="block py-2 md:py-0 text-gray-800 ">About</a></li>
            <li><a href="#" className="block py-2 md:py-0 text-gray-800 ">Pricing</a></li>
            <li><a href="#" className="block py-2 md:py-0 text-gray-800 ">Contact</a></li>
            <li><a href="#" className="block py-2 md:py-0 text-gray-800 ">Careers</a></li>
            <li><a href="#" className="block py-2 md:py-0 text-gray-800 ">Blog</a></li>

           <li className="px-4 py-2 md:px-0 md:py-0">
              <a
                href="#"
                className="flex items-center justify-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded font-bold hover:bg-yellow-600 transition"
              >
                <HiUser  className="text-xl" />
                Login/Register
              </a>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}
