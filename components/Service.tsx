import React from 'react';
import Image from 'next/image';

const styles = {
cards:"text-white rounded-xl pt-11 w-[80%] sm:w-[300px] my-8 lg:text-left",
};

const Service = () => {
  return (
    <div>
      
      <div className='bg-[#1E1E1E]  w-full md:my-[180px] lg:py-[60px] mt-2 flex flex-col lg:flex-row items-center justify-evenly py-8 '>
        
        
       
        {/* First Item */}
        <div className={styles.cards}>
          <Image
            src="enjoy.svg"
            alt="Enjoy flexibility"
            height={70}
            width={70}
          />
          <h1 className='text-3xl py-7 font-serif font-medium'>
            Enjoy some flexibility
          </h1>
          <p className='text-md'>
            Stays with flexible cancellation make it easy to re-book if your plans change.
          </p>
        </div>

        {/* Second Item */}
        <div className={styles.cards}>
          <Image
            src="flight.svg"
            alt="Flight flexibility"
            height={70}
            width={70}
          />
          <h1 className='text-3xl py-7 font-serif font-medium'>
          Over 2 million active trips
          </h1>
          <p className='text-md'>
            Convenient flight options with flexible cancellation policies.
          </p>
        </div>

        {/* Third Item */}
        <div className={styles.cards}>
          <Image
            src="gear.svg"
            alt="Gear flexibility"
            height={70}
            width={70}
          />
          <h1 className='text-3xl py-7 font-serif font-medium'>
          Over 2 million active trips
          </h1>
          <p className='text-md'>
            We provide high-quality gear to make your experience smooth and enjoyable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
