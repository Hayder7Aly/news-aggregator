import React, { useState } from 'react';

const DropDownCheckBoxes = ({ title, items, initialSelectedItems, onSelectionChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState(initialSelectedItems);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    const updatedSelectedItems = {
      ...selectedItems,
      [id.split('-').pop()]: checked,
    };
    setSelectedItems(updatedSelectedItems);
    onSelectionChange(updatedSelectedItems);
  };

  return (
    <div className="w-full">
      <button
        id="dropdownSearchButton"
        onClick={handleDropdownToggle}
        className="inline-flex mt-6 w-full items-center px-4 py-2 text-sm font-medium text-center text-gray-700 bg-gray-300 rounded-lg hover:bg-gray-400 focus:ring-2 focus:outline-none focus:ring-gray-500 dark:bg-gray-300 dark:hover:bg-gray-400 dark:focus:ring-gray-500"
        type="button"
      >
        {title}
        <svg className="w-2.5 h-2.5 ms-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
        </svg>
      </button>

      {isDropdownOpen && (
        <div id="dropdownSearch" className="z-10 bg-gray-200 rounded-lg shadow w-60 dark:bg-gray-200 mt-2 w-auto">
          <ul className="h-auto px-3 pb-3 text-sm text-white dark:text-white w-full" aria-labelledby="dropdownSearchButton">
            {Object.keys(items).map((key) => (
              <li className="w-full cursor-pointer" key={key}>
                <div className="flex items-center p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-300 w-80">
                  <input
                    id={`checkbox-item-${key}`}
                    type="checkbox"
                    checked={selectedItems[key] || false}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label htmlFor={`checkbox-item-${key}`} className="w-full ms-2 text-sm font-medium text-gray-600 rounded dark:text-gray-600">
                    {items[key]}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownCheckBoxes;
