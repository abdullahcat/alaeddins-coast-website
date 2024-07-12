import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { unstable_setRequestLocale } from 'next-intl/server';
export default createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'tr', 'ru'],

    // Used when no locale matches
    defaultLocale: 'en'
});

export const config = {

    matcher: [
        '/((?!api|_next|_vercel|.*\\..*).*)',
        '/([\\w-]+)?/users/(.+)'
    ]
};


