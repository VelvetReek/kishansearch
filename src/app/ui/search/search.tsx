"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import Image from "next/image";
import { useState } from "react";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [inputValue, setInputValue] = useState("");

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log("searching for:", term);
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

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
        <Image
          src="/magnifying-glass-icon.gif"
          alt="Search icon"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
          width={22}
          height={22}
        />
      </div>
      <div>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-32 h-12 mr-8"
          onClick={() => handleSearch(inputValue)}
        >
          search
        </button>
      </div>
    </>
  );
}
