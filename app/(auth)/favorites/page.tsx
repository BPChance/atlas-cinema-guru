"use client";

import { useEffect, useState } from "react";
import Movies from "components/Movies";
import { Title } from "@/lib/definitions";

export default function FavoritesPage({ userEmail }: { userEmail: string }) {
  const [favorites, setFavorites] = useState<Title[]>([]);

  useEffect(() => {
    async function loadFavorites() {
      const res = await fetch(`/api/favorites?userEmail=${userEmail}`);
      const data = await res.json();
      setFavorites(data.titles);
    }

    loadFavorites();
  }, [userEmail]);

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h1 className="flex justify-center text-2xl text-white font-bold">
        Favorites
      </h1>
      <Movies titles={favorites} userEmail={userEmail} />
    </div>
  );
}
