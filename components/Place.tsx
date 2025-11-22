import React from "react";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";

const Place = (props: any) => {
  const { imageSrc, name, location, content } = props;
  return (
    <div className="flex items-center justify-center space-x-11">
      <div className="w-[300px]">
        <img
          src={imageSrc}
          alt="travel img"
          width={100}
          height={100}
          className="w-full h-auto lg:w-[300px] rounded-xl"
        />
        <h1 className="text-[25px] font-medium mt-3 mx-2">{name}</h1>

        <div className="flex ">
          <CiLocationOn className="h-11 w-9 " />
          <h1 className="text-[20px] font-medium pt-2 text-gray-500">
            {" "}
            {location}
          </h1>
        </div>
        <hr className=" border-gray-400 w-[300px] pt-2" />
        <p className="text-gray-600 pt-4 text-center ">{content}</p>
      </div>
    </div>
  );
};

export default Place;
