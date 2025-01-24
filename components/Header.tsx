"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { IoIosAlert } from "react-icons/io";
import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

const styles = {
  link: "text-base font-medium font-sans text-white transition-all duration-200 hover:text-blue-300 focus:text-blue-300",
  mobileLink:
    "inline-flex  py-2 text-base font-medium font-sans text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600",
  joinButton:
    "inline-flex justify-center px-7 py-3 text-base font-semibold text-white transition-all duration-200 bg-transparent text-[#333] border border-2 rounded-full items-center hover:bg-[#CCF32F] focus:bg-[#CCF32F] hover:text-black border-2 mx-9 ",
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    
    <header className=" absolute top-0 left-0 right-0 z-10  ">
      <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link href="#" title="pryde travel" className="flex">
              <Image
                className="w-auto h-10 mx-[20px] lg:mx-[80px] lg:h-10"
                src="logo.svg"
                alt="pryde travel"
                height={200}
                width={200}
              />
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>

          <div className="hidden  mr-6 lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <Link href="/place" className={styles.link} title="Place">
              Places
            </Link>
            <Link href="#" className={styles.link} title="About">
              About
            </Link>
            <Link href="#" className={styles.link} title="Blog">
              Blog
            </Link>
            <Link href="/about" className={styles.link} title="Contact">
              Contact
            </Link>
          </div>

          <Link
            href="./sign-in"
            className={`${styles.joinButton} hidden lg:inline-flex`}
            role="button"
          >
            Sign-in -{">"}
          </Link>
          
          <UserButton/ >
         
        </nav>

        {isMenuOpen && (
          <nav className="bg-white pt-4 pb-6 border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
              <div className=" text-black flex flex-col px-6 -my-2 space-y-1">
                <Link href="/place" className={styles.mobileLink} title="Place">
                  Places
                </Link>
                <hr className="mt-16 mb-10 border-gray-200" />
                <Link href="#" className={styles.mobileLink} title="About">
                  About
                </Link>
                <hr className="mt-16 mb-10 border-gray-200" />
                <Link href="#" className={styles.mobileLink} title="Blog">
                  Blog
                </Link>
                <hr className="mt-16 mb-10 border-gray-200" />
                <Link href="/about" className={styles.mobileLink} title="Contact">
                  Contact
                </Link>
                <hr className="mt-16 mb-10 border-gray-200" />
              </div>
            </div>

            <div className="px-6 mx-6">
               <Link
                href="./sign-in"
                className="inline-flex justify-center px-7 py-3 text-base font-semibold text-white transition-all duration-200 bg-[#07050533] border border-transparent rounded-full items-center hover:bg-[#ceec55] focus:bg-[##ceec55] mt-8 mx-11"
                role="button"
              >
                Sign-in -{">"}
              </Link> 

              
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
