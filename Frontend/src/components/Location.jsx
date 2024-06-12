import React from 'react'

function Location() {
  return (
    <>
        <div className='bg-white max-w-7xl mx-auto px-4 md:px-8 my-24 py-8'>
            <div>
                <h1 className='text-3xl font-bold text-center mb-10'>Find Your Stay</h1>
                <div  className='flex flex-col md:flex-row md:justify-evenly space-y-10 md:space-y-0'>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57961.753945348566!2d84.93280852167968!3d24.774570500000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32c6833c04185%3A0x5bdd1e5ddd9884a8!2sSujata%20House!5e0!3m2!1sen!2sin!4v1718078997095!5m2!1sen!2sin" className="md:w-[500px] md:h-[400px] w-[380px] h-[300px]" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='border border-[#000000]/30 p-6 space-y-8'>
                        <h2 className='text-2xl font-bold text-center '>Map, Parking + Transportation</h2>
                        <div>
                            <h5 className='text-xl'>Address</h5>
                            <p>Near LFC Resturant, Rajapur</p>
                            <p>Bodhgaya,Gaya, Bihar, 824231</p>
                        </div>
                        <div>
                            <h5 className='text-xl'>Phone</h5>
                            <p>+917320070720</p>
                        </div>
                        <button className='bg-[#FFB612] py-2 px-4'>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Location
