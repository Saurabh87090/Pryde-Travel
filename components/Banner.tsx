import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="relative">
      <div className='relative bg-[#112F38] text-white text-center flex items-center justify-center h-full w-full pb-[220px]'>
        <Image 
          src="Vector 1.svg" 
          alt="Frame 3" 
          width={700}  
          height={200}  
          className='object-cover'
        />
        
        {/* Text content overlapping the image */}
        
        <div className='absolute top-0 w-full h-full flex flex-col items-center justify-center z-10 pt-11'>
          <h1 className='text-[40px] lg:text-[50px] font-extrabold font-serif leading-snug'>
            Ready to go? <br />
            Give us a quick call
          </h1>
          
          <Link  href="/about">
          <button className='bg-[#CCF32F] text-black font-medium px-6 lg:px-9 py-2 lg:py-3 mt-4 lg:mt-9 rounded-full hover:bg-[#c7e738] focus:bg-[#c7e738]'>
            Contact Us {"->"}
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner
