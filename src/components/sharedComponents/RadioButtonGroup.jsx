import React from 'react'
import { sources } from '../../config/config'

const RadioButtonGroup = ({onInputChangeHandler}) => {
  return (
    <div className='w-full'>
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
  )
}

export default RadioButtonGroup