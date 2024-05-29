import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { useHistory } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      if (!search.trim()) {
        return;
      }
      // Redirect to the search page with the search query as a URL parameter
      history.push(`/search?q=${search}`);
    }
  };

  return (
    <div className="flex items-center justify-center w-full mt-10">
      <div className="relative flex items-center justify-center w-9/12   ">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>

        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Explore News..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>

      <div className="flex items-center cursor-pointer justify-center ml-2">
        <button
          className=" p-3 bg-gray-200 rounded-lg cursor-pointer z-10 hover:bg-gray-300"
          onClick={toggleModal}
        >
          <svg
            className="w-6 h-6 text-gray-500 mr-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M5.05 3C3.291 3 2.352 5.024 3.51 6.317l5.422 6.059v4.874c0 .472.227.917.613 1.2l3.069 2.25c1.01.742 2.454.036 2.454-1.2v-7.124l5.422-6.059C21.647 5.024 20.708 3 18.95 3H5.05Z" />
          </svg>
        </button>
      </div>

      {isOpen && <Modal toggleModal={toggleModal} />}
    </div>
  );
};

export default Search;
