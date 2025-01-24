"use client";
import React, { useState } from "react";
import { Carousel } from "primereact/carousel";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CircularDemo() {
  const [activeIndex, setActiveIndex] = useState(0); // Initialize activeIndex
  const products = [
    {
      id: 1,

      image: "/Location no 1.svg",
    },
    {
      id: 2,

      image: "/Location 2.svg",
    },
    {
      id: 3,

      image: "/Location 3.svg",
    },
    {
      id: 4,

      image: "/Location  4.svg",
    },

    {
      id: 5,

      image: "/Location 5.svg",
    },

    {
      id: 6,

      image: "/Location 6.svg",
    },

    {
      id: 7,

      image: "/Location 7.svg",
    },
  ];

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const scrollLeft = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : products.length - 1
    );
  };

  const scrollRight = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < products.length - 1 ? prevIndex + 1 : 0
    );
  };

  const productTemplate = (product: any) => {
    return (
      
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className=" surface-border border-round  flex items-center justify-center text-center py-11">
          <Image
            src={product.image}
            alt="location"
            width={400}
            height={200}
            className=" shadow-2"
          />
        </div>
      </motion.div>
    );
  };

  return (
    <div className="card bg-[#F3F3F3]">
      {/* Destination Header */}
      <div className="px-4 lg:ml-[130px] text-[#0E3D4D] flex flex-col lg:flex-row justify-between">
        <div className="text-center lg:text-left">
          <p className="text-xl font-medium my-6">Where do you want to go</p>
          <h1 className="text-4xl lg:text-6xl font-semibold font-serif">
            Popular Destinations🌍
          </h1>
        </div>
        <div className="mt-6 lg:mt-[80px] space-x-4 mx-auto lg:mx-11 flex justify-center">
          <button
            onClick={scrollLeft}
            className="border-[#0E3D4D] text-xl lg:text-2xl py-1 px-6 lg:px-8 rounded-full border-2"
          >
            {"<-"}
          </button>
          <button
            onClick={scrollRight}
            className="bg-[#0E3D4D] text-white text-xl lg:text-2xl py-2 px-7 lg:px-9 rounded-full"
          >
            {"->"}
          </button>
        </div>
      </div>

      {/* Carousel */}
      <Carousel
        value={products}
        numVisible={3}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        circular
        autoplayInterval={3000}
        itemTemplate={productTemplate}
        // activeIndex={activeIndex}
        onPageChange={(e) => setActiveIndex(e.page)} // Update the activeIndex on page change
      />
    </div>
  );
}
