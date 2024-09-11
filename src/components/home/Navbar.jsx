import React from "react";
import MobileMenu from "./MobileMenu";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../LocaleSwitcher";

const Navbar = () => {
  const t = useTranslations("navbarlinks");

  const navLinks = [
    { key: "about", path: "/hakkimizda" },
    { key: "team", path: "/ekibimiz" },
    { key: "services", path: "/hizmetler" },
    { key: "publications", path: "/yayinlar" },
    { key: "career", path: "/kariyer" },
    { key: "contact", path: "/iletisim" },
    { key: "ePayment", path: "/e-tahsilat" }
  ];

  return (

      <div className="h-24 flex items-center justify-between ">
        {/* LEFT */}
        <div className="md:hidden lg:block">
          <Link href="/" className="font-extrabold text-xl">
            <span className="text-color6">SANCAR</span> HUKUK
          </Link>
        </div>

        {/* CENTER */}
        <div className="hidden md:flex justify-end">
          {/* LINKS */}
          <div className="flex gap-6 text-gray-600 text-sm font-semibold">
            {navLinks.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                className="hover:text-color6 duration-500 items-center font-semiboldbold"
              >
                {t(link.key)}
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-end gap-4 text-xs font-bold">
          <LocaleSwitcher />
          <MobileMenu />
        </div>
      </div>
  
  );
};

export default Navbar;
