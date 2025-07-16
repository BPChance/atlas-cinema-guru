"use client";

import Image from "next/image";
import star from "@/assets/Outline/star.svg";
import filledStar from "@/assets/Solid/filledStar.svg";
import clock from "@/assets/Outline/clock.svg";
import filledClock from "@/assets/Solid/filledClock.svg";
import { useEffect, useState } from "react";

type Title = {
  id: string;
  title: string;
  released: number;
  genre: string;
  synopsis: string;
  image: string;
  favorited: boolean;
  watchLater: boolean;
};

type MoviesProps = {
  titles: Title[];
  userEmail: string;
};

export default function Movies({ titles, userEmail }: MoviesProps) {
  const [movieList, setMovieList] = useState(titles);

  useEffect(() => {
    setMovieList(titles);
  }, [titles]);

  const handleToggleFavorite = async (id: string) => {
    await fetch(`/api/favorites/${id}`, { method: "POST" });

    setMovieList((prev) =>
      prev.map((movie) =>
        movie.id === id ? { ...movie, favorited: !movie.favorited } : movie
      )
    );
  };

  const handleToggleWatchLater = async (id: string) => {
    await fetch(`/api/watchlater/${id}`, { method: "POST" });

    setMovieList((prev) =>
      prev.map((movie) =>
        movie.id === id ? { ...movie, watchLater: !movie.watchLater } : movie
      )
    );
  };

  if (!movieList || movieList.length === 0) {
    return (
      <p className="text-white text-center mt-8">
        No movies found matching your filters.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-16 w-full">
      {movieList.map((title) => (
        <div
          key={title.id}
          className="relative group border border-cyan-300 rounded-xl overflow-hidden transition-all duration-300"
        >
          <Image
            src={title.image}
            alt={title.title}
            width={700}
            height={700}
            className="object-fill"
            priority
          />

          {/* Hover overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-[#000848]/90 backdrop-blur-sm text-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out p-2 flex flex-col justify-end">
            <h2 className="text-base">
              {title.title} ({title.released})
            </h2>
            <p className="text-xs text-gray-300 my-1 line-clamp-2">
              {title.synopsis}
            </p>
            <span className="inline-block bg-teal-400 text-white text-sm px-2 py-0.5 rounded-2xl w-fit mt-1">
              {title.genre}
            </span>
          </div>
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2 z-10">
            <button onClick={() => handleToggleFavorite(title.id)}>
              <Image
                src={title.favorited ? filledStar : star}
                alt="Favorite"
                width={20}
                height={20}
              />
            </button>
            <button onClick={() => handleToggleWatchLater(title.id)}>
              <Image
                src={title.watchLater ? filledClock : clock}
                alt="Watch Later"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
