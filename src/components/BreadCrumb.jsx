"use client";

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

const Breadcrumb = () => {
  const pathname = usePathname();
  const locale = useLocale(); 
  const t = useTranslations("breadcrumb");
  const [pathArray, setPathArray] = useState([]);

  useEffect(() => {
    if (pathname) {
      const segments = pathname.split('/').filter(Boolean);
      if (segments.length > 0) {
        setPathArray(segments.slice(1));
      }
    }
  }, [pathname]);

  if (!pathArray.length) return null;

  return (
    <nav aria-label="Breadcrumb Navigation ">
      <ol className="flex gap-2 text-sm font-light text-color1 px-6 md:px-8 lg:px-16">
        <li className="">
          <Link href={`/${locale}`}>{t("home")}</Link>
        </li>
        {pathArray.map((segment, index) => {
          const href = `/${locale}/${pathArray.slice(index).join('/')}`;
          const translatedSegment = t(segment) || segment; 
          return (
            <li key={href} className="flex ">
              <Link href={href}>
               {translatedSegment}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
