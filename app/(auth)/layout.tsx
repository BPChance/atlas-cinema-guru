import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="flex flex-col flex-1">
      <Header userEmail={session.user?.email ?? undefined} />
      <div className="flex h-screen">
        <Sidebar />
        <main className="p-4 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
