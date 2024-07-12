// pages/_app.tsx
import 'leaflet/dist/leaflet.css';

import RootLayout from '@/app/[locale]/layout';
import { AppProps } from 'next/app';
import '@/app/globals.css';
import Head from 'next/head';
import Script from 'next/script';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    // Extract locale from pageProps
    const { locale } = pageProps;

    return (
        <RootLayout params={{ locale }}>

            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon_package_v0.16/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon_package_v0.16/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon_package_v0.16/favicon-16x16.png" />
                <link rel="manifest" href="/favicon_package_v0.16/site.webmanifest" />
                <link rel="mask-icon" href="/favicon_package_v0.16/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />

            </Head>
            <Component {...pageProps} />
        </RootLayout>
    );
};

export default MyApp;