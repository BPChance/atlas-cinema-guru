"use client";

import { useEffect, useState } from "react";
import Movies from "components/Movies";
import Pagination from "components/Pagination";
import { Title } from "@/lib/definitions";

export default function WatchLaterPage({ userEmail }: { userEmail: string }) {
  const [watchLater, setWatchLater] = useState<Title[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  const handlePrevPage = () => setPage((prev) => prev - 1);
  const handleNextPage = () => setPage((prev) => prev + 1);

  useEffect(() => {
    async function loadWatchLater() {
      const res = await fetch(
        `/api/watch-later?page=${page}&userEmail=${userEmail}`
      );
      const data = await res.json();
      setWatchLater(data.watchLater);
    }

    loadWatchLater();
  }, [page, userEmail]);

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h1 className="flex justify-center text-2xl text-white font-bold mb-4">
        Watch Later
      </h1>
      <Movies titles={watchLater} userEmail={userEmail} />
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </div>
  );
}
