import React from 'react'

function Explore() {
  return (
    <>
        <div className='bg-white max-w-7xl mx-auto px-4 md:px-8 my-24 py-8'>
            <div>
                <h1 className='text-3xl font-bold text-center mb-10'>Explore the rooms</h1>
                <div className='grid md:grid-cols-2 grid-cols-1 md:gap-30 gap-20  p-4 '>
                    <div className='flex flex-col justify-center items-center gap-3 bg-[#EEECE4]/30 p-3'>
                        <img src="explore01.svg" alt="" className='w-[700px]'/>
                        <p className='text-justify'>Accommodation at the guest house is available in well-appointed rooms that are tastefully decorated and fitted with contemporary amenities such as television, tea/coffee maker, personal safe locker, telephones, writing desks, air conditioning hot/cold water, and an attached bathroom.</p>
                        <button className='bg-[#FFB612] w-full py-3'>Delux Room</button>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3 bg-[#EEECE4]/30 p-3'>
                        <img src="explore01.svg" alt="" className='w-[700px]'/>
                        <p>Accommodation at the guest house is available in well-appointed rooms that are tastefully decorated and fitted with contemporary amenities such as television, tea/coffee maker, personal safe locker, telephones, writing desks, air conditioning hot/cold water, and an attached bathroom.</p>
                        <button className='bg-[#FFB612] w-full py-3'>Delux Room</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Explore
