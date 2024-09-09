import createMiddleware from 'next-intl/middleware';
import {locales} from "./config"


export default createMiddleware({
    locales,
defaultLocale:"tr"});

export const config = {
  matcher: ['/', '/(tr|en)/:path*'],
};