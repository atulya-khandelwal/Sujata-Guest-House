import React from 'react'
import { MdOutlineAddIcCall } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";


const Navbar2 = () => {
  return (
    <nav className="bg-[#FAF6EB]">
      <div className="max-w-7xl mx-auto px-4 md:px-28 flex flex-col justify-between h-76 md:h-52 py-9 md:py-4">
        <div className="flex flex-col md:flex-row items-center md:space-y-4 gap-5">
          <img src="logo.png" alt="Logo" className="h-13 w-13" />
          <div className='flex flex-col items-center md:items-start'>
            <div className=" text-lg font-bold text-blue-700">
                SUJATA GUEST HOUSE
            </div>
            <div className="text-sm text-gray-500 ">RAJAPUR BODHGAYA</div>
            
            <div className='flex flex-row md:flex-col gap-10 md:gap-1 mt-3'>
                <div className='flex gap-1'>
                    <IoLocationOutline />
                    <p className='hidden md:block'>Near LFC Resturant, Rajapur, Bodhgaya,Gaya, Bihar, 824231</p>
                </div>
                <div className='flex gap-1'>
                    <MdOutlineAddIcCall />
                    <p className='hidden md:block'>+917320070720</p>
                </div>
            </div>
            <div className='block md:hidden mt-7 bg-[#FFB612] rounded-md px-28 py-3'>
                <button>Book Now</button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#hotel" className="text-gray-600 hover:text-blue-700">HOTEL</a>
          <a href="#rooms" className="text-gray-600 hover:text-blue-700">ROOMS</a>
          <a href="#gallery" className="text-gray-600 hover:text-blue-700">GALLERY</a>
          <a href="#offers" className="text-gray-600 hover:text-blue-700">OFFERS</a>
          <a href="#events" className="text-gray-600 hover:text-blue-700">SPECIAL EVENTS</a>
          <a href="#about" className="text-gray-600 hover:text-blue-700">ABOUT US</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-700">CONTACT US</a>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar2;
