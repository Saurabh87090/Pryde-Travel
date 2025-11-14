"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import Card from "./Card";
import { ReviewData } from "@/app/data/Review";
import axios from 'axios';


const Review = () => {


  return (
    <div className="bg-white">
      <div className="flex items-center justify-center flex-col text-[#0E3D4D] space-y-3">
        <h1 className="text-xl font-medium my-6">Testimonials</h1>
        <p className="text-5xl text-center font-semibold font-serif">
          {"Don't take our word for it"}
        </p>
        <p className="text-[#0e3d4dc8] pt-5 text-center text-xl font-medium mx-4 md:mx-0">
          I had the most incredible vacation experience thanks to the amazing
          team at <br />
          XYZ Travel Agency! From the moment I contacted them, their friendly
          and <br />
          knowledgeable staff helped me plan the perfect itinerary. They took
          care of <br />
          every detail, from booking flights and accommodations to arranging
          local tours <br />
          and activities.
        </p>
        <Image
          src="Stars.svg"
          alt="star"
          height={200}
          width={200}
          className="pt-4"
        />
      </div>

      {/* Review Cards */}
      <div className="py-[140px]">
        <div className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-2 sm:grid-rows-3 lg:flex lg:flex-row lg:items-center justify-center lg:space-x-8">
          {ReviewData.map((review, index) => (
            <Card key={index} name={review.name} imgSrc={review.imgSrc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
