import React from 'react'

function Facility() {
  return (
    <>
      <div className='bg-[#FAF6EB] max-w-7xl mx-auto px-4 md:px-8 my-24 py-8'>
        <div>
            <h1 className='text-3xl font-bold text-center mb-10'>Facilities</h1>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-12 p-4'>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <img src = "facility01.svg" alt="" className='' />
                    <p className=''>24 Hour Front Desk</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <img src ="facility02.svg" alt="" />
                    <p>Tour & Travellers</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <img src ="facility03.svg" alt="" />
                    <p>Inhouse Generator</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <img src = "facility04.svg" alt="" />
                    <p>Doctor By Appointment</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <img src = "facility05.svg" alt="" />
                    <p>Car Parking</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <img src = "facility06.svg" alt="" />
                    <p>Hall</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <img src = "facility07.svg" alt="" />
                    <p>Railway/Flight Tickets</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <img src = "facility08.svg" alt="" />
                    <p>Free Wi-Fi</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Facility
