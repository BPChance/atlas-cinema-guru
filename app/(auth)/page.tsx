import { auth } from "@/auth";
import HomePageClient from "@/components/HomePageClient";

export default async function Page() {
  const session = await auth();

  return <HomePageClient userEmail={session?.user?.email ?? ""} />;

}
