import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Montserrat } from 'next/font/google';
import '@/app/globals.css'
import Script from 'next/script';

const montserrat = Montserrat({ subsets: ['latin'] });
export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <Script id='mailerLite'>
          {`(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
          .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
          n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
          (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
          ml('account', '970618');`}
        </Script>
        <title>Alaeddin&apos;s Coast</title>
      </head>

      <body className={montserrat.className}>
        <NextIntlClientProvider messages={messages}>
          <header className='light bg-white'>
            <Navbar />
          </header>
          <main className='light bg-white'>
            {children}
          </main>
          <footer className='light bg-white'>
            <Footer />
          </footer>
        </NextIntlClientProvider>
      </body>


    </html>
  );
}