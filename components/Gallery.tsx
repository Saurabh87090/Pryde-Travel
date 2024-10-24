import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="px-4 sm:px-6">
      {/* Gallery Header */}
      <div className="flex items-center justify-center flex-col text-[#0E3D4D] mt-[60px] sm:mt-[80px]">
        <h1 className="text-lg sm:text-xl font-medium my-4 sm:my-6">Trip Gallery</h1>
        <p className="text-2xl sm:text-4xl font-semibold font-serif lg:text-6xl text-center">
          Completed Journeys
        </p>
      </div>

      {/* Image Rows */}
      <div className="flex flex-wrap justify-center mt-[20px] sm:mt-[40px] space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-8">
        <Image
          src="Frame 1.svg"
          alt="Frame 1"
          width={200}
          height={260}
          className="w-full sm:w-[45%] lg:w-[405px] rounded-lg"
        />
        <Image
          src="Frame 2.svg"
          alt="Frame 2"
          width={200}
          height={600}
          className="w-full sm:w-[45%] lg:w-[850px] rounded-lg"
        />
      </div>

      {/* Second Row of Images */}
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-8 mt-6 sm:mt-8">
        <Image
          src="Frame 3.svg"
          alt="Frame 3"
          width={200}
          height={260}
          className="w-full sm:w-[30%] lg:w-[405px] rounded-lg"
        />
        <Image
          src="Frame 4.svg"
          alt="Frame 4"
          width={200}
          height={260}
          className="w-full sm:w-[30%] lg:w-[405px] rounded-lg"
        />
        <Image
          src="Frame 5.svg"
          alt="Frame 5"
          width={200}
          height={260}
          className="w-full sm:w-[30%] lg:w-[405px] rounded-lg"
        />
      </div>

      {/* Call to Action Button */}
      <div className="flex items-center justify-center my-5 sm:my-7">
        <button className="bg-[#CCF32F] text-black font-medium px-6 py-3 sm:px-8 lg:px-10 mt-4 lg:mt-[40px] border-2 rounded-full hover:bg-[#c7e738] focus:bg-[#c7e738] transition-all duration-200">
          See all details {"->"}
        </button>
      </div>
    </div>
  );
};

export default Gallery;
