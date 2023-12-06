

import React from "react";
import './SearchComponent.css'


export default function SearchComponent() {
  return (
    <div className="max-w-s flex items-center search-bar  border border-gray-300 rounded-md overflow-hidden">
      <input
        type="text"
        placeholder="Search anything..."
        className="w-full py-2 px-4 outline-none focus:border-none placeholder-black "
      />
      <div className="p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}
