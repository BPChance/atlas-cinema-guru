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
    <div className="h-screen flex flex-col">
      <Header userEmail={session.user?.email ?? undefined} />
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        <div className="w-full md:w-auto">
          <Sidebar />
        </div>
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
}
