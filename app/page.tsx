import { auth } from "@/auth";
import { redirect } from "next/navigation";
import HomePageClient from "@/components/HomePageClient";

export default async function Page() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return <HomePageClient />;
}
