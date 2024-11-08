"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };

  const closeSearchBar = () => {
    setIsSearchBarOpen(false);
  };

  return (
    <div className="relative">
      <FaSearch
        className="transition-all cursor-pointer w-[19px] h-[19px]"
        onClick={toggleSearchBar}
      />

      {isSearchBarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={closeSearchBar}
          ></div>

          <div className="absolute top-10 left-0 w-full bg-white border rounded-md shadow-lg z-50 p-4">
            <input
              type="text"
              placeholder="Enter your keywords"
              className="w-[1170px] p-2 border border-gray-300 rounded-md"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SearchBar;
