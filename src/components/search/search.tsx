"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import SearchDropdown from "../ui/search-dropdown";

export default function Search({ placeholder }: { placeholder: string }) {
  const [searchVal, setSearchVal] = useState("card_no");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [inputValue, setInputValue] = useState("");

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("searching", searchVal);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <div className="max-[768px]:hidden flex items-center justify-between gap-2">
        <SearchDropdown setSearchVal={setSearchVal} />
        <div className="relative flex flex-1 flex-shrink-0 m-5">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            className="block w-full h-12 rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            placeholder={placeholder}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            defaultValue={searchParams.get("query")?.toString()}
          />
          <MagnifyingGlassIcon className="absolute w-6 h-6 text-gray-400 top-3 left-3" />
        </div>
        <div>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-36 h-12 mr-8"
            onClick={() => handleSearch(inputValue)}
          >
            Search
          </button>
        </div>
      </div>
      <div className="md:hidden flex flex-col items-center justify-between gap-2 ml-3 mr-3">
        <div className="relative flex flex-1 flex-shrink-0 m-5 w-full">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            className="block w-full h-12 rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            placeholder={placeholder}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            defaultValue={searchParams.get("query")?.toString()}
          />
          <MagnifyingGlassIcon className="absolute w-6 h-6 text-gray-400 top-3 left-3" />
        </div>
        <div className="flex flex-grow">
          <SearchDropdown setSearchVal={setSearchVal} />
          <div className="ml-3">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-md w-24 sm:w-36 mr-8"
              onClick={() => handleSearch(inputValue)}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
