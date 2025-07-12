"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import folder from "assets/Solid/folder.svg";
import star from "assets/Solid/filledStar.svg";
import clock from "assets/Solid/filledClock.svg";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside
      className={`bg-teal-600 text-white transition-all duration-300 ${
        expanded ? "w-54" : "w-20"
      }`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <nav className="flex flex-col justify-center gap-4 p-5">
        <Link href="/" className="flex items-center flex-row gap-3">
          <Image src={folder} alt="home" className="w-8 h-8" />
          {expanded && "Home"}
        </Link>
        <Link href="/favorites" className="flex items-center flex-row gap-3">
          <Image src={star} alt="favorite" className="w-8 h-8" />
          {expanded && "Favorites"}
        </Link>
        <Link href="/watch-later" className="flex items-center flex-row gap-3">
          <Image src={clock} alt="watch-later" className="w-8 h-8" />
          {expanded && "Watch Later"}
        </Link>
      </nav>
      {expanded && (
        <div className="p-4 mx-4 text-base rounded-md bg-teal-500">
          <div className="flex items-center justify-center gap-2 text-black font-bold">
            Latest Activities
          </div>
        </div>
      )}
    </aside>
  );
}
