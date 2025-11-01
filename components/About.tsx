import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    
    <div id='about'>
      <div className='mt-[100px] lg:mt-[180px] px-4'>
        <div className='text-[#0E3D4D] flex flex-col lg:flex-row justify-between items-center lg:items-start'>
          <div className='text-center lg:text-left px-0 lg:px-[160px]'>
            <h1 className='text-xl font-medium my-6'>Where do you want to go</h1>
            <p className='text-3xl lg:text-5xl font-semibold font-serif'>
              {"Let's us worry about your plans,"} <br className='hidden lg:block' />
              Just get packed🧳
            </p>
          </div>
          <div className='mt-6 lg:mt-[80px] mx-auto lg:mx-[90px]'>
            <button className='bg-[#CCF32F] text-black font-medium px-6 lg:px-9 py-2 lg:py-3 mt-4 lg:mt-9 border-2 rounded-full hover:bg-[#c7e738] focus:bg-[#c7e738]'>
              Take Trip {"->"}
            </button>
          </div>
        </div>

        {/* Image and Text Sections */}
        
        <div className='flex flex-col lg:flex-row items-center lg:items-start mt-8 lg:mt-11'>
          <div className='mx-auto lg:ml-[100px]'>
            <Image
              src="About .svg"
              alt='travel img'
              width={700}
              height={400}
              className='w-full h-auto lg:w-[700px]'
            />
          </div>

          <div className='text-[#0E3D4D] mt-8 lg:mt-[140px] lg:ml-11 text-center lg:text-left '>
            <div className='mb-12'>
              <Image
                src="car.svg"
                alt='car img'
                width={50}
                height={50}
                className='mx-auto lg:mx-0'
              />
              <h1 className='text-3xl lg:text-5xl font-semibold font-serif mt-5'>Rent a car</h1>
              <p className='text-md lg:text-lg font-medium my-6'>
               {" Every journey should be tailored to your needs. Whether you're exploring a new city,"}
                <br className='hidden lg:block' />
                heading out for a weekend getaway, or simply need a reliable ride for the day,
                <br className='hidden lg:block' />
                our car rental service has you covered. You can pick any car.
              </p>
            </div>

            {/* Second Section */}
            <div>
              <Image
                src="bed.svg"
                alt='hotel img'
                width={50}
                height={50}
                className='mx-auto lg:mx-0'
              />
              <h1 className='text-3xl lg:text-5xl font-semibold font-serif mt-5'>Get a hotel</h1>
              <p className='text-md lg:text-lg font-medium my-6'>
                Experience unparalleled comfort and luxurious accommodations.
                <br className='hidden lg:block' />
                Exceptional dining, prime location, outstanding service, modern amenities,
                <br className='hidden lg:block' />
                special offers, and packages where every detail is designed to make your stay unforgettable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
