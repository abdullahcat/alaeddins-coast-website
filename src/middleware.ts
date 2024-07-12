import createMiddleware from 'next-intl/middleware';

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