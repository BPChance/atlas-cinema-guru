import { auth } from "@/auth";
import FavoritesPageClient from "@/components/FavoritesPageClient";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (!session) redirect("/api/auth/signin");
  if (!session.user) {
    redirect("/api/auth/signin");
  }
  if (!session.user.email) {
    redirect("/api/auth/signin");
  }
  return <FavoritesPageClient userEmail={session.user.email as string} />;
}
