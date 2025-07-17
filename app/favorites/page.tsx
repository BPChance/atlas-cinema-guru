import { auth } from "@/auth";
import FavoritesPageClient from "@/components/FavoritesPageClient";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (!session) {
    redirect("/api/auth/signin");
  }
  return <FavoritesPageClient />;
}
