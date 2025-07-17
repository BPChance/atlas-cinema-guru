import { auth } from "@/auth";
import WatchLaterPageClient from "@/components/WatchLaterPageClient";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (!session?.user?.email) {
    redirect("/api/auth/signin");
  }

  return <WatchLaterPageClient userEmail={session.user.email} />;
}
