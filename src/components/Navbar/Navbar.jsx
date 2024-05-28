import React, { useState } from "react";
import { navs } from "../../config/config";

const Navbar = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <nav className=" text-gray-800 flex items-center justify-between p-4  ">
        <div className="flex items-center  space-x-4">
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
          <div className="space-x-4">
            {navs.map((nav, idx) => (
              <a
                href={nav.page}
                key={idx}
                className="hover:text-gray-400 hover:underline ml-2 "
              >
                {nav.nav}
              </a>
            ))}
          </div>
        </div>
        {/* <div className="relative">
          <input
            type="text"
            placeholder="Explore news..."
            className="text-gray-700 px-4 py-2 rounded-l-lg"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            disabled={!search.trim()}
            className={`bg-blue-600 text-white cursor-pointer px-4 py-2 rounded-r-lg ${
              !search.trim() ? "bg-blue-500 " : "hover:bg-blue-700"
            }`}
          >
            Search
          </button>
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;
