import React from 'react'
import banner from '../assets/hero.png'
import { SlCalender } from "react-icons/sl";


function Hero() {
  return (
    <>
      <div className="h-60 md:h-screen bg-contain bg-no-repeat md:bg-cover pt-40" style={{backgroundImage: `url(${banner})`}}>
      <div className="hidden md:flex w-3/4 mx-auto justify-between px-9 py-4 bg-[#D9D9D9] rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <label className="mb-2 text-sm font-semibold">Check-in</label>
          <input
            type="date"
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="mb-2 text-sm font-semibold">Check-out</label>
          <input
            type="date"
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="mb-2 text-sm font-semibold">Rooms & Guests</label>
          <select className="p-2 border border-gray-300 rounded-md">
            <option>1 Room, 2 Adults</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button className="px-6 text-white bg-yellow-500 rounded-md hover:bg-yellow-600">
          BOOK NOW
        </button>
      </div>
    </div>
    </>
  )
}

export default Hero
