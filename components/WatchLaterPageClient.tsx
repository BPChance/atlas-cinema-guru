"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Movies from "components/Movies";
import Pagination from "components/Pagination";
import { Title } from "@/lib/definitions";

export default function WatchLaterPage() {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email ?? "";

  const [watchLater, setWatchLater] = useState<Title[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  const handlePrevPage = () => setPage((prev) => prev - 1);
  const handleNextPage = () => setPage((prev) => prev + 1);

  useEffect(() => {
    if (!userEmail) return;

    async function loadWatchLater() {
      const res = await fetch(`/api/watch-later?page=${page}`, {
        cache: "no-store",
      });
      const data = await res.json();
      setWatchLater(data.watchLater);
    }

    loadWatchLater();
  }, [userEmail, page]);

  if (status === "loading") {
    return <p className="text-center mt-8">Loading...</p>;
  }

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
