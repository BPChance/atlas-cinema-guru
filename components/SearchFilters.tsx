"use client";

import React from "react";

type Props = {
  search: string;
  minYear: number;
  maxYear: number;
  onSearchChange: (value: string) => void;
  onMinYearChange: (value: number) => void;
  onMaxYearChange: (value: number) => void;
};

export default function SearchFilters({
  search,
  minYear,
  maxYear,
  onSearchChange,
  onMinYearChange,
  onMaxYearChange,
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <p>Search</p>
      <input
        type="text"
        placeholder="Search Movies..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="p-2 rounded-full bg-[#02023b] text-white border border-cyan-300 w-66 placeholder:text-cyan-300"
      />
      <div className="flex flex-row gap-2">
        <div className="flex flex-col">
          <p>Min Year</p>
          <input
            type="text"
            placeholder="Min Year"
            value={minYear}
            onChange={(e) => onMinYearChange(Number(e.target.value))}
            className="p-2 rounded-full bg-[#02023b] text-white border border-cyan-300 w-32"
          />
        </div>
        <div className="flex flex-col">
          <p>Max Year</p>
          <input
            type="text"
            placeholder="Max Year"
            value={maxYear}
            onChange={(e) => onMaxYearChange(Number(e.target.value))}
            className="p-2 rounded-full bg-[#02023b] text-white border border-cyan-300 w-32"
          />
        </div>
      </div>
    </div>
  );
}
