import React from 'react'

function Gallary() {
  const Images = [
    'gallary01.svg',
    'gallary02.svg',
    'gallary03.svg',
    'gallary04.svg',
    'gallary05.svg',
  ]
  return (
    <>
        <div className='bg-white max-w-7xl mx-auto px-4 md:px-8 my-24 py-8'>
            <div>
                <h1 className='text-3xl font-bold text-center mb-10'>Gallary</h1>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-12'>
                    {Images.map((image,index) =>{
                      return(
                        <div key={index} className='w-full h-48 overflow-hidden'>
                          <img src={image} alt="" className="w-full h-full object-cover"/>
                        </div>
                      )
                    })}
                </div>
            </div>
        </div>
    </>
  )
}

export default Gallary
