"use client";
import React, { useState } from "react";
import { headingFormat } from "~/src/lib/definitions";

type SearchDropdownProps = {
  setSearchVal: (val: string) => void;
};

const SearchDropdown: React.FC<SearchDropdownProps> = ({ setSearchVal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Card No.");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (setVal: keyof typeof headingFormat) => {
    setSelected(headingFormat[setVal]);
    setSearchVal(setVal);
    setIsOpen(false);
  };

  return (
    <div className="ml-6">
      <div className="relative inline-block">
        <button
          type="button"
          className="px-4 py-2.5 sm:px-5 md:py-3 text-white bg-slate-500 hover:bg-slate-400 focus:ring-1 focus:outline-none focus:ring-blue-300 font-semibold text-md ms:text-lg rounded-md inline-flex items-center"
          onClick={toggleDropdown}
        >
          {selected}
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-24 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
            <ul
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
              className="divide-y divide-gray-200"
            >
              <li>
                <p
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => handleClick("date")}
                >
                  Date
                </p>
              </li>
              <li>
                <p
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => handleClick("card_no")}
                >
                  Card No.
                </p>
              </li>
              <li>
                <p
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => handleClick("circle")}
                >
                  Circle
                </p>
              </li>
              <li>
                <p
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => handleClick("village")}
                >
                  Village
                </p>
              </li>
              <li>
                <p
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => handleClick("name")}
                >
                  Name
                </p>
              </li>
              <li>
                <p
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => handleClick("through")}
                >
                  Through
                </p>
              </li>
              <li>
                <p
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => handleClick("variety")}
                >
                  Variety
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchDropdown;
