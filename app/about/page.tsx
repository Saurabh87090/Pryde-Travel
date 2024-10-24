// pages/contact.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
      {/* Contact Image Section */}
      <div className="relative flex-1 hidden lg:block">
        <Image
          src="/Contact Us.png"
          alt="Contact"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 rounded-r-lg"
        />
      </div>

      {/* Contact Form Section */}
      <div className="flex-1 bg-gray-100 p-8 lg:p-16 flex items-center justify-center">
        <div className="max-w-md w-full">
          {isSubmitted ? (
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Form Submitted✅
              </h1>
              <p className="text-xl">
                Thank you for reaching out! We will get back to you shortly. 👍
              </p>
            </div>
          ) : (
            <>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Contact Us📨
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    id="name"
                    name="user_name"
                    type="text"
                    placeholder="Enter your name"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3"
                    required
                  />
                </div>
                <div>
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    placeholder="Enter your email"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3"
                    required
                  />
                </div>
                <div>
                  <input
                    id="phone"
                    name="user_phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3"
                    required
                  />
                </div>
                <div>
                  <input
                    id="address"
                    name="user_address"
                    type="text"
                    placeholder="Enter your address"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3"
                    required
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    name="user_message"
                    placeholder="Your message"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3"
                    rows={4}
                    required
                  />
                </div>
                <div className="flex items-center justify-center flex-col md:flex-row space-y-6">
                <Link href="/" className="bg-[#CCF32F] px-[60px] py-3 md:mt-6 md:mx-5 rounded-full">
                  {"<-"}Back
                </Link>

                <button
                  type="submit"
                  className="bg-[#CCF32F] text-black py-3 px-[60px] rounded-full hover:bg-[#98ba11]"
                >
                  Submit{"->"}
                </button>
                
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <ContactForm />
    </div>
  );
};

export default ContactPage;
