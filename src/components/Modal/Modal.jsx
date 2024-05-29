import React, { useState } from "react";
import { navs, sources } from "../../config/config";
import DatePickerInput from "./DatePicker";
import { formatDate } from "../../utils/utils";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Modal = ({ toggleModal }) => {
  const [filtered, setFilter] = useState({
    source: "",
    category: "",
    date: null,
  });
  const history = useHistory();


  const onInputChangeHandler = (e) => { 
    if (e.target) {
      const { name, value } = e.target;
      setFilter({ ...filtered, [name]: value });
      return;
    }

    setFilter({ ...filtered, date: formatDate(e) });
  };

  const onFilteredHanlder = () => {
    // console.log(filtered);
    toggleModal()

    history.push(`/search?sources=${filtered.source}&category=${filtered.category}&from=${filtered.date}`);
    setFilter({
      source: "",
      category: "",
      date: null,
    })


  };

  

  return (
    <div>
      <div
        tabIndex="-1"
        aria-hidden="true"
        className="fixed inset-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow ">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-500">
                News Filtering
              </h3>
              <button
                type="button"
                onClick={toggleModal}
                className="text-gray-400 bg-transparent hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-300 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2 ">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="border border-gray-300 text-gray-500 text-sm rounded-lg  block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-500 "
                    onChange={onInputChangeHandler}
                  >
                    <option defaultValue="">Select category</option>

                    {navs.map((nav, idx) => (
                      <option key={idx} value={nav.nav}>
                        {nav.nav}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-span-2 ">
                  <div>
                    <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                      Source
                    </h3>
                    <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white  rounded-lg sm:flex dark:bg-white  dark:text-white">
                      {sources.map((source, idx) => (
                        <li className="w-full " key={idx}>
                          <div className="flex items-center ps-3">
                            <input
                              id={source}
                              type="radio"
                              value={source}
                              name="source"
                              className="w-4 h-4 text-blue-600 bg-gray-100"
                              onChange={onInputChangeHandler}
                            />
                            <label
                              htmlFor={source}
                              className="w-full py-3 ms-2 text-sm font-medium text-gray-600 dark:text-gray-600"
                            >
                              {source}
                            </label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="col-span-2">
                  <DatePickerInput
                    onInputChangeHandler={onInputChangeHandler}
                    startDate={filtered.date}
                  />
                </div>
              </div>

              <button
                type="submit"
                className={`text-white inline-flex items-center ${(filtered.source || filtered.category ) ? "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" : "bg-gray-400 cursor-not-allowed" }  font-medium rounded-lg text-sm px-5 py-2.5 text-center `}
                onClick={onFilteredHanlder}
                disabled={!(filtered.source || filtered.category )}
              >
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
