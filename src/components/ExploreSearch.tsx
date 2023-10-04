"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export function ExploreSearch() {
  const [query, setQuery] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  return (
    <form className="w-3/4 mt-6 flex space-x-2">
      <div className="relative flex-grow bg-gray-100 border border-gray-200 rounded-md">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <Search color="gray" size={15} />
        </span>
        <input
          className="h-full w-full py-2 text-sm text-white bg-gray-100 rounded-md pl-7 transition-colors focus:outline-none focus:bg-white focus:text-gray-900"
          type="text"
          placeholder="What are you looking for?"
          value={query}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <button className="flex justify-center items-center bg-black text-white rounded-md text-sm font-medium h-10 w-[100px]">
        Search
      </button>
    </form>
  );
}
