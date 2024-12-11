import MobileMenu from "./MobileMenu";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../LocaleSwitcher";
import UserImage from "./UserImage";
import Image from "next/image";


const Navbar = () => {
  const t = useTranslations("navbarlinks");

  const navLinks = [
    { key: "about", path: "/about" },
    { key: "team", path: "/team" },
    { key: "services", path: "/practice" },
    { key: "publications", path: "/insight" },
    // { key: "career", path: "/career" },
    { key: "contact", path: "/communication" },
  ];

  return (
    <div className="h-24 flex items-center justify-between  ">
      {/* LEFT */}
      <div className="relative w-56 h-24 lg:block mt-6 -ml-12">
  <Link href="/">
    <Image 
      src="/logo.png" 
      alt="Sancar Hukuk Logo" 
      fill 
      className="object-cover"
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </Link>
</div>

      {/* CENTER */}
      <div className="hidden md:flex justify-end">
        {/* LINKS */}
        <div className="flex gap-6 text-color1 text-sm font-medium">
          {navLinks.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className="hover:text-color6 duration-500 items-center "
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
        <Link href="/settings">
          <UserImage />
        </Link>
        
      </div>
    </div>
  );
};

export default Navbar;
