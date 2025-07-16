"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import folder from "assets/Solid/folder.svg";
import star from "assets/Solid/filledStar.svg";
import clock from "assets/Solid/filledClock.svg";
import ActivityFeed from "./ActivityFeed";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside
      className={`bg-teal-600 text-white transition-all duration-300
        ${expanded ? "w-full md:w-54" : "w-full md:w-20"}
        h-auto md:h-full
        flex md:flex-col items-center justify-around md:items-start md:justify-start
      `}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <nav className="flex w-full flex-row md:flex-col gap-4 p-2 py-6 space-y-3 justify-around md:justify-start md:items-start">
        <Link
          href="/"
          className="flex items-center flex-row gap-1 md:gap-3 md:pl-4"
        >
          <Image src={folder} alt="home" className="w-6 h-6" />
          <span className="block md:hidden text-sm md:text-base">Home</span>
          {expanded && <span className="hidden md:inline text-base">Home</span>}
        </Link>
        <Link
          href="/favorites"
          className="flex items-center flex-row gap-1 md:gap-3 md:pl-4"
        >
          <Image src={star} alt="favorite" className="w-6 h-6" />
          <span className="block md:hidden text-sm md:text-base">
            Favorites
          </span>
          {expanded && (
            <span className="hidden md:inline text-base">Favorites</span>
          )}
        </Link>
        <Link
          href="/watch-later"
          className="flex items-center flex-row gap-1 md:gap-3 md:pl-4"
        >
          <Image src={clock} alt="watch-later" className="w-6 h-6" />
          <span className="block md:hidden text-sm md:text-base">
            Watch Later
          </span>
          {expanded && (
            <span className="hidden md:inline text-base">Watch Later</span>
          )}
        </Link>
      </nav>
      {expanded && (
        <div className="hidden md:block p-2 mx-4 text-base rounded-md bg-teal-500">
          <div className="flex items-center justify-center gap-2 text-black font-bold">
            Latest Activities
          </div>
          <ActivityFeed />
        </div>
      )}
    </aside>
  );
}
