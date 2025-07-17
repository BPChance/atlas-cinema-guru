import { auth } from "@/auth";
import WatchLaterPageClient from "@/components/WatchLaterPageClient";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (!session) {
    redirect("/api/auth/signin");
  }

  return <WatchLaterPageClient />;
}
