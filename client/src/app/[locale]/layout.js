import { Montserrat } from "next/font/google";
import "../globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import { ContextProvider } from "@/context/Context";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Sancar Hukuk Bürosu",
  description: "Hukuki Danışmanlık Hizmetleri",
};

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();
  return (
          <ContextProvider>
    <html lang={locale} className="!scroll-smooth">
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
            <div className="w-full bg-white px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-64 ">
              <Navbar />
            </div>
            {children}
            <div className="px-6 md:px-8 lg:px-16">
              <Footer />
            </div>
        </NextIntlClientProvider>
      </body>
    </html>
          </ContextProvider>
  );
}