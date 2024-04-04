"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function HeaderDropdown({
  session,
  signOutLocal,
}: {
  session: any;
  signOutLocal: any;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="ml-3">
      <div className="relative">
        <button className="p-2 bg-red-700 rounded-lg" onClick={toggleDropdown}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="text-center origin-top-left absolute right-0 mt-2 rounded-md shadow-lg bg-white backdrop-blur bg-opacity-30 z-50">
            <ul
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
              className="divide-y divide-gray-200"
            >
              <li className="p-3 hover:bg-slate-300" onClick={closeDropdown}>
                <Link href={"/search"}>Search</Link>
              </li>
              <li className="p-3 hover:bg-slate-300" onClick={closeDropdown}>
                <Link href={"/upload"}>Upload</Link>
              </li>
              <li className="p-3">
                {session ? (
                  <form action={signOutLocal}>
                    <button className="bg-transparent shadow-md hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mr-5 ml-5">
                      Logout
                    </button>
                  </form>
                ) : (
                  <Link
                    href={"/login"}
                    className="bg-transparent shadow-md bg-slate-100 hover:bg-green-400 text-grey ring-2 focus:outline-none ring-green-300 rounded mr-5 ml-5 py-2 px-5"
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
