import "@/app/global.css";
import { Metadata } from "next";
import { inter } from "./fonts";

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
        className={`${inter.className} antialiased  bg-[#00003c] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
