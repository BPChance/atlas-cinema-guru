import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      Hello {session.user?.email}
    </div>
  );
}
