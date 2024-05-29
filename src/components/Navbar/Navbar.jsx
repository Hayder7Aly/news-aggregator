import React, { useState } from "react";
import { navs } from "../../config/config";
import ResponsiveNavbar from "./ResponsiveNavbar";
import Links from "./Links";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className=" text-gray-800 flex items-center justify-between ">
        <div className="text-xl font-bold flex cursor-pointer">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-7"
            alt="newsAggregator Logo"
          />
          <div className="heading ml-2 text-gray-800 text-xlg">
            News Aggregator
          </div>
        </div>
        <div className="hidden md:flex space-x-4">
          <Links navs={navs} />
        </div>

        <div className="md:hidden flex items-center">
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
            aria-controls="navbar-search"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && <ResponsiveNavbar navs={navs} />}
    </>
  );
};

export default Navbar;


