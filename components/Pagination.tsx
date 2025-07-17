"use client";

import React from "react";

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  handleNextPage: (page: number) => void;
  handlePrevPage: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  handleNextPage,
  handlePrevPage,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center mt-8">
      <button
        className="bg-teal-500 px-4 py-2 text-sm text-black rounded-l-full w-24 h-12"
        onClick={() => handlePrevPage(currentPage)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <div className="w-1 bg-black" />
      <button
        className="bg-teal-500 px-4 py-2 text-sm text-black rounded-r-full w-24 h-12"
        onClick={() => handleNextPage(currentPage)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}
