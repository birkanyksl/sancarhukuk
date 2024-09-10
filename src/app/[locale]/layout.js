import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sancar Hukuk Bürosu",
  description: "Hukuki Danışmanlık Hizmetleri",
};

export default async function RootLayout({ children,params:{locale} }) {
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>

        <div className="w-full bg-white px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-64 ">
        <Navbar/>
        </div> 
        {children}
        </NextIntlClientProvider>
        </body>
    </html>
  );
}
