"use client"
import { useTranslations } from 'next-intl';
import { Alex_Brush } from 'next/font/google';
import Link from 'next/link';
import { useRef } from 'react';

const alexBrush = Alex_Brush({ weight: '400', subsets: ['latin'] });

function Hero() {
    const translations = useTranslations('Main'); // Replace 'Main' with your actual message bundle name
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <div className="flex-col flex justify-center items-center">
            <div className="w-full h-screen" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <video ref={videoRef} src="https://videos.pexels.com/video-files/8045840/8045840-hd_1920_1080_25fps.mp4" className="w-full h-screen object-cover z-0" autoPlay muted loop playsInline />
                <div className="   absolute inset-0 bg-black bg-opacity-40 z-10"></div>
                <div className="text-center   pt-40 space-y-6 z-20" style={{ position: 'absolute' }}>
                    <div className="text-7xl   ">
                        <h1 className={alexBrush.className}>
                            Alaeddin&apos;s <br /> Coast
                        </h1>
                    </div>
                    <h3>{translations('hero.subtitle')}</h3>
                    <div className="mt-4 items-center flex-shrink-0 flex flex-wrap justify-center gap-4">
                        <Link
                            target="_blank"
                            className="inline-block border transition duration-200 ease-in-out border-white px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-black focus:outline-none"
                            href="mailto:info@alaeddinscoast.com"
                        >
                            {translations('hero.button_contact')}
                        </Link>
                        <Link
                            className="inline-block border transition duration-200 ease-in-out border-white px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-black focus:outline-none"
                            href="/our-properties"
                        >
                            {translations('hero.button_properties')}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
