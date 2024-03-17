"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [inputValue, setInputValue] = useState("");

  const handleSearch = (term: string) => {
    console.log("searching for:", term);
    const params = new URLSearchParams(searchParams);
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
      <div className="relative flex flex-1 flex-shrink-0 m-5">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          className="peer block w-full h-12 rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
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
          Grower Code
        </button>
      </div>
    </>
  );
}
