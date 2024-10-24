"use client";
import React, { useEffect, useState } from "react";
import Place from "@/components/Place";
import axios from "axios";
import Link from "next/link";

interface IPlace {
  image: string;
  name: string;
  location: string;
  description: string;
}

const Page = () => {
  const [placeData, setPlaceData] = useState<[] | IPlace[]>([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get("http://localhost:3000/locations");
        console.log(response.data);
        setPlaceData(response.data);
      } catch (error) {
        console.error("Error fetching places data:", error);
      }
    };

    fetchPlaces();
  }, []);

  return (
    <div>
      <div className="mx-3  lg:my-[120px] lg:mx-[115px] ">
        <div className="flex flex-col items-center justify-center sm:flex-row lg:flex-col sm:text-center mx-4 sm:mx-[50px] lg:mx-[50px]">
          <h1 className="text-[28px] sm:text-[34px] lg:text-[50px] font-bold font-serif text-[#0E3D4D] my-4 sm:my-6 lg:my-8">
            Most visited Destination
          </h1>
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-gray-600 sm:mt-2 lg:mt-4 text-center  lg:w-[580px]">
            Explore some of the most popular travel destinations around the
            world, known for their unique culture, breathtaking landscapes, and
            memorable experiences. From the historic landmarks of London to the
            exotic beaches of Southeast Asia, discover your next adventure.
          </p>
        </div>

        {placeData ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center mt-[80px]">
            {placeData?.map((place, index) => (
              <Place
                key={index}
                imageSrc={place.image}
                name={place.name}
                location={place.location}
                content={place.description}
              />
            ))}
          </div>
        ) : (
          <div>
            {" "}
            <div className="loader-container">
              <div className="loader"></div>
              <style jsx>{`
                .loader-container {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 100vh; // Adjust height as needed
                }
                .loader {
                  width: 50px;
                  height: 50px;
                  border: 5px solid #e0e0e0; // Lighter border color
                  border-top: 5px solid #687d13; // Color of the spinning part
                  border-radius: 50%;
                  animation: spin 1s linear infinite;
                }
                @keyframes spin {
                  0% {
                    transform: rotate(0deg);
                  }
                  100% {
                    transform: rotate(360deg);
                  }
                }
              `}</style>
            </div>
          </div>
        )}

        <div className="flex items-center justify-center my-11 space-x-6 md:space-x-[80px]">
          <Link href="/" className="bg-[#CCF32F] px-11 py-2 rounded-full">
            {"<-"}Back
          </Link>
          <button className="bg-[#CCF32F] px-11 py-2 rounded-full">
            Details {"->"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
