import React from "react";
import {
  
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiGithub,
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const iconStyles = {
    base: "flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7",
    hoverFocus:
      "focus:bg-blue-600 hover:text-white focus:text-white hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600 ",
  };

  const linkClasses = {
    base: "flex text-sm text-gray-800 transition-all duration-200",
    hoverFocus: "hover:text-blue-600 focus:text-blue-600",
  };

  return (
    <section className="py-10 bg-white sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2  lg:grid-cols-8 gap-y-12 gap-x-8 xl:gap-x-12">
          <div className="col-span-2 md:col-span-4 xl:pr-8">
            <Image
              className="w-auto h-9"
              src="logo2.svg" 
              alt="Medicare Logo"
              width={150}
              height={36}
            />
            <p className="text-base leading-relaxed text-gray-600 mt-7">
              Explore the world with
              exciting people
              We help people find co-travelers and structure their travel plans
            </p>
          
          </div>

          {[
            {
              title: "Company",
              links: ["Place", "About", "Blog", "Contact"],
            },
            {
              title: "Help",
              links: [
                "Customer Support",
                "Delivery Details",
                "Terms & Conditions",
                "Privacy Policy",
              ],
            },
           
          ].map((section, index) => (
            <div className="lg:col-span-2" key={index}>
              <p className="text-base font-semibold text-gray-900">
                {section.title}
              </p>
              <ul className="mt-6 space-y-5">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href="#"
                      title={link}
                      className={`${linkClasses.base} ${linkClasses.hoverFocus}`}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600 text-center">
            © Copyright 2024, All Rights Reserved by Pryde Travels
          </p>
          <div className="flex items-center justify-center text-center font-mono text-[15px] mt-2 lg:mt-0">
            <p>Design & developed by 👨‍💻 Developer_saurabh</p>
          </div>

          <ul className="flex items-center justify-center mt-5 space-x-3 md:order-3 sm:mt-0">
            {[
              {
                icon: <FiTwitter className="w-4 h-4" />,
                href: "https://twitter.com",
              },
              {
                icon: <FiFacebook className="w-4 h-4" />,
                href: "https://facebook.com",
              },
              {
                icon: <FiInstagram className="w-4 h-4" />,
                href: "https://instagram.com",
              },
              {
                icon: <FiGithub className="w-4 h-4" />,
                href: "https://github.com",
              },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${iconStyles.base} ${iconStyles.hoverFocus}`}
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
