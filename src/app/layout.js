import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sancar Hukuk Bürosu",
  description: "Hukuki Danışmanlık Hizmetleri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full bg-white px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-64 shadow-sm">
        <Navbar/>
          </div> 
        {children}</body>
    </html>
  );
}
