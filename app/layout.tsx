import "@/app/global.css";
import { Metadata } from "next";
import { inter } from "./fonts";
import ClientLayout from "./ClientLayout";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Cinema Guru | Atlas School",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-[#00003c] text-white`}
      >
        <SessionProvider>
          <div className="h-screen flex flex-col">
            <Header />
            <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
              <div className="w-full md:w-auto">
                <Sidebar />
              </div>
              <main className="flex-1 overflow-y-auto p-4">{children}</main>
            </div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
