import { ChevronRight, Search } from "lucide-react";
import React, { useState } from "react";

const SearchComponent = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleClear = () => {
    setSearchQuery("");
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4 bg-gradient-to-b from-white via-[#efede9] to-[#e6ddd9]">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-montserrat-bold tracking-wider text-[#333] mb-4">
            Discover Our Collection
          </h1>
          <p className="text-sm md:text-base text-[#666] font-montserrat-medium tracking-widest">
            SEARCH FOR EXQUISITE ITEMS
          </p>
        </div>

        <div className="relative">
          <div
            className={`flex items-center border-b transition-all duration-500 ${
              isFocused ? "border-[#333]" : "border-[#ccc]"
            }`}
          >
            <Search
              className={`text-xl transition-all duration-300 ${
                isFocused ? "text-[#333]" : "text-[#999]"
              }`}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Search for luxury items..."
              className="w-full py-4 px-4 bg-transparent outline-none text-[#333] placeholder-[#999] font-light tracking-wide text-lg"
            />
            {searchQuery && (
              <button
                onClick={handleClear}
                className="p-1 transition-opacity duration-200 hover:opacity-70"
              >
                <ChevronRight className="text-[#999] text-lg" />
              </button>
            )}
          </div>
          <div
            className={`h-[1px] bg-[#333] transition-all duration-500 ${
              isFocused ? "w-full opacity-100" : "w-0 opacity-0"
            }`}
          ></div>
        </div>

        <div className="mt-8 text-center font-montserrat-medium">
          <p className="text-xs text-[#999] tracking-widest">
            Try: <span className="hover:underline ml-2">Perfume</span> •{" "}
            <span className="hover:underline">Handbag</span> •{" "}
            <span className="hover:underline">Jewelry</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;