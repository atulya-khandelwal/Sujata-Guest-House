import React from 'react'

function Welcome() {
  return (
    <>
      <div className='bg-white max-w-7xl mx-auto px-4 md:px-8 my-24'>
        <div>
            <h1 className='text-3xl font-bold text-center mb-10'>Welcome to <span className='text-[#0072CE]'>Sujata Guest House</span></h1>
            <div className='flex flex-col md:flex-row gap-9'>
                <img src="room.svg" alt="" className='w-[600px]'/>
                <div className='flex flex-col gap-5'>
                    <p className='text-justify'>Sujata Guest House is one of the best guest houses in Bodh Gaya. Ample conveniences are offered at the hotel to suffice the varying requirements of guests. These include room service, front desk, power backup, travel desk, business area, WiFi, doctor on call, and parking facility. The supportive staff of the hotel ensures that all needs of guests are timely fulfilled. Entice your taste buds with the finest of cuisines from every continent dished at the in-house world cuisine restaurant. </p>
                    <p className='text-justify'>Accommodation at the guest house is available in well-appointed rooms that are tastefully decorated and fitted with contemporary amenities such as television, tea/coffee maker, personal safe locker, telephones, writing desks, air conditioning hot/cold water, and an attached bathroom.</p> 
                    <button className='text-[#0072CE] rounded-full border border-[#0072CE] w-36 py-3 ml-32 md:m-0'>View More</button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Welcome
