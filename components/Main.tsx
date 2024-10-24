"use client"
import React, { useState } from 'react';

const Main = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [budget, setBudget] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({ from, to, date, budget });
    setSubmitted(true);
  };

  return (
    <div className="relative w-full h-full lg:h-auto">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover lg:h-screen"
        src="background.mp4" // Replace with your video file
        autoPlay
        loop
        muted
      ></video>

      {/* Black Overlay */}
      <div className="absolute z-1 top-0 left-0 w-full h-[935px] xl:h-[965px] bg-black opacity-40"></div>

      {/* Content Wrapper */}
      <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between h-full p-4">
        {/* Text Content */}
        <div className="lg:text-left text-[#fbfafa] shadow-black sm:pt-[200px] md:pt-[250px] lg:pt-[350px] lg:pl-[80px] px-4 py-8 lg:px-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif mt-[80px] lg:mt-0">
            Explore the world with <br /> exciting people
          </h1>
          <p className="mt-9 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            We help people find co-travelers and structure their travel plans✈️
          </p>
          <button className="bg-[#CCF32F] text-black px-7 py-3 mt-9 lg:mt-[40px] border-2 rounded-full hover:bg-[#657033] focus:bg-[#657033]">
            Take Trip {"->"}
          </button>
        </div>

        {/* Travel Booking Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full mx-auto lg:ml-auto lg:mr-[80px] mt-auto mb-10 lg:mb-0">
          <div className="mb-4">
            <label htmlFor="from" className="block text-sm font-medium text-gray-700">
              From
            </label>
            <input
              type="text"
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter starting location"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="to" className="block text-sm font-medium text-gray-700">
              To
            </label>
            <input
              type="text"
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter destination"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
              Budget Price
            </label>
            <input
              type="number"
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="mt-1 block w-full px-4 py-2 text-black rounded-md shadow-sm focus:ring-[#414f04] focus:border-[#414f04] sm:text-sm"
              placeholder="Enter your budget"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-flex justify-center px-6 py-3 text-base font-semibold text-white bg-[#CCF32F] rounded-md shadow-sm hover:bg-[#e1ecb1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e1ecb1]"
            >
              Search Now
            </button>
          </div>
        </form>

        {/* Submission Message */}
        {submitted && (
          <div className="text-center mt-11 text-white font-medium text-2xl sm:text-xl lg:absolute lg:bottom-10 lg:right-10">
            Thank you for your submission! We are processing your request.
            👍
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
