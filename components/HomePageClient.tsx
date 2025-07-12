"use client";

import { useEffect, useState } from "react";
import SearchFilters from "./SearchFilters";
import GenreFilters from "./GenreFilters";
import Movies from "./Movies";
import Pagination from "./Pagination";
import { Title } from "@/lib/definitions";

export default function HomePageClient({ userEmail }: { userEmail: string }) {
  const [search, setSearch] = useState("");
  const [titles, setTitles] = useState<Title[]>([]);
  const [minYear, setMinYear] = useState(1990);
  const [maxYear, setMaxYear] = useState(2024);
  const [genres, setGenres] = useState<string[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  const handlePrevPage = (prevPage: number) => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = (nextPage: number) => {
    setPage((nextPage) => nextPage + 1);
  };

  useEffect(() => {
    async function loadTitles() {
      try {
        const params = new URLSearchParams({
          page: page.toString(),
          minYear: minYear.toString(),
          maxYear: maxYear.toString(),
          query: search,
        });

        if (selectedGenres.length > 0) {
          params.append("genres", selectedGenres.join(","));
        }

        const res = await fetch(`/api/titles?${params.toString()}`);

        const data = await res.json();

        if (Array.isArray(data.title)) {
          setTitles(data.title);
        } else {
          console.warn("Unexpected response:", data);
          setTitles([]);
        }
      } catch (err) {
        console.error("Failed to fetch titles", err);
        setTitles([]);
      }
    }

    loadTitles();
  }, [search, minYear, maxYear, selectedGenres, page]);

  useEffect(() => {
    async function loadGenres() {
      try {
        const res = await fetch("/api/genres");
        const data = await res.json();
        setGenres(data.genres);
      } catch (err) {
        console.error("Failed to fetch genres", err);
      }
    }

    loadGenres();
  }, []);

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-6">
        <div className="w-full md:w-auto">
          <SearchFilters
            search={search}
            minYear={minYear}
            maxYear={maxYear}
            onSearchChange={setSearch}
            onMinYearChange={setMinYear}
            onMaxYearChange={setMaxYear}
          />
        </div>

        <div className="w-full md:w-auto md:flex md:justify-end md:items-start">
          <div className="md:w-[300px]">
            <GenreFilters
              genres={genres}
              selectedGenres={selectedGenres}
              onChange={setSelectedGenres}
            />
          </div>
        </div>
      </div>

      <Movies titles={titles} userEmail={userEmail} />
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      ></Pagination>
    </div>
  );
}
