import { auth } from "@/auth";
import FavoritesPageClient from "@/components/FavoritesPageClient";

export default async function Page() {
  const session = await auth();

  return <FavoritesPageClient userEmail={session?.user?.email ?? ""} />;
}
