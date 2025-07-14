"use client";

import { useEffect, useState } from "react";
import Movies from "components/Movies";
import { Title } from "@/lib/definitions";
import Pagination from "@/components/Pagination";

export default function FavoritesPage({ userEmail }: { userEmail: string }) {
  const [favorites, setFavorites] = useState<Title[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  const handlePrevPage = () => setPage((prev) => prev - 1);
  const handleNextPage = () => setPage((prev) => prev + 1);

  useEffect(() => {
    async function loadFavorites() {
      const res = await fetch(
        `/api/favorites?page=${page}&userEmail=${userEmail}`
      );
      const data = await res.json();
      setFavorites(data.titles);
    }

    loadFavorites();
  }, [userEmail, page]);

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h1 className="flex justify-center text-2xl text-white font-bold mb-4">
        Favorites
      </h1>
      <Movies titles={favorites} userEmail={userEmail} />
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </div>
  );
}
