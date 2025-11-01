import React from 'react';
import Image from "next/image";

function Card(props: any) {
    const { name, imgSrc } = props; 
    return (
        <div className='flex items-center justify-center flex-col '>
          <Image
            src={imgSrc}
            alt='Person'
            height={100}
            width={100}
          /> 
          <h1 className='text-2xl pt-2 font-serif text-[#0E3D4D]'>{name}</h1>
        </div>
    );
}

export default Card;
