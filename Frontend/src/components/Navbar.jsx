// src/Navbar.js
import React, { useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img className="h-8 w-8" src="logo.png" alt="Logo" />
            <h1 className="ml-2 text-blue-600 sm:text-xl text-sx font-bold">SUJATA GUEST HOUSE</h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800 flex items-center"><MdLanguage className='h-5 w-5 mr-1'/>Language</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 flex items-center"><FaRegUserCircle className="h-5 w-5 mr-1" /> Sign in or join</a>
          </div>
          <div className="flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-800 focus:outline-none">
              {isOpen ?  <RxCross1  className="h-6 w-6" /> : <IoMdMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'}  md:hidden`}>
        <div className=" pt-2 pb-3  sm:px-3 divide-y">
          <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-800 bg-[#FAF6EB]">Hotel</a>
          <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-800 bg-[#FAF6EB]">Room</a>
          <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-800 bg-[#FAF6EB]">Gallary</a>
          <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-800 bg-[#FAF6EB]">Offers</a>
          <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-800 bg-[#FAF6EB]">Special Events</a>
          <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-800 bg-[#FAF6EB]">About Us</a>
          <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-800 bg-[#FAF6EB]">Contact Us</a>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;
