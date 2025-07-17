"use client";

import { signOut, useSession } from "next-auth/react";
import { Film, LogOut } from "lucide-react";
import film from "assets/Outline/film.svg";
import Image from "next/image";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="flex justify-between items-center bg-teal-500 text-black px-3 py-3 shadow">
      <div className="flex gap-3 text-xl font-bold">
        <Image src={film} alt="cinema logo" width={25} height={25} />
        Cinema Guru
      </div>
      <div className="hidden md:flex items-center">
        <span className="text-black">
          Welcome, {session?.user?.email ?? ""}
        </span>
        <button
          onClick={() => signOut()}
          className="flex text-black items-center gap-2 px-4"
        >
          <LogOut size={18} className="" />
          Log out
        </button>
      </div>
    </header>
  );
}
