import { auth } from "@/auth";
import WatchLaterPageClient from "@/components/WatchLaterPageClient";

export default async function Page() {
  const session = await auth();

  return <WatchLaterPageClient userEmail={session?.user?.email ?? ""} />;
}
