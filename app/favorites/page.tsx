import { auth } from "@/auth";
import FavoritesPageClient from "@/components/FavoritesPageClient";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (!session?.user?.email) {
    redirect("/api/auth/signin");
  }

  return <FavoritesPageClient userEmail={session.user.email} />;
}
