"use client"
import { useEffect, useState } from 'react';

import client from '@/utils/configSanity';
import Head from 'next/head';
import { ArrowDownward } from '@mui/icons-material';
import Link from 'next/link';
import { Old_Standard_TT } from 'next/font/google';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';


interface Place {
    _id: string;
    slug: {
        current: string;
    };
    title: string;
    price: number;
    address: string;
    image: string;
}
const oldStandard = Old_Standard_TT({ weight: "400", subsets: ["latin"] });

function Listings() {
    const [places, setPlaces] = useState<Place[]>([]);
    const [error, setError] = useState<string | null>(null);
    const translations = useTranslations("Our-Properties");

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const query = `*[_type == "property"]{
                    _id,
                    title,
                    slug,
                    price,
                    address,
                    "image": images[0].asset->url
                     
                }`;
                const result = await client.fetch(query) as Place[];
                setPlaces(result);
            } catch (err) {
                setError('Failed to fetch places.');
                console.error('Error fetching places:', err);
            }
        };

        fetchPlaces();
    }, []);

    if (error) {
        return <div className="p-40 text-red-500">Error: {error}</div>;
    }
    const priceFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    });
    return (
        <section className='text-black' >

            <title>

                {translations('hero.title')}

            </title>



            <div className="flex-col flex justify-center items-center">
                <div className="w-full text-white " style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-full h-screen object-cover  z-0" />
                    <div className="absolute  inset-0 bg-black bg-opacity-40 z-10"></div>
                    <div className="px-4 text-center pt-40 space-y-6 z-20" style={{ position: 'absolute' }}>

                        <div className="xl:text-7xl text-5xl">

                            <h1 >
                                {translations('hero.title')}
                            </h1>
                        </div>
                        <h3>
                            {translations('hero.subtitle')}


                        </h3>
                        <div className="mt-4 items-center flex-shrink-0 flex flex-wrap justify-center gap-4">

                            <ScrollLink

                                to="section_2"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000} className="cursor-pointer inline-block border transition duration-200 ease-in-out border-white p-2 text-sm font-medium text-white hover:bg-white hover:text-black focus:outline-none  ">
                                <ArrowDownward></ArrowDownward>
                            </ScrollLink>
                        </div>
                    </div>
                </div>
            </div>
            <div id='section_2' className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12">
                <header>

                    <div className={oldStandard.className}>
                        <h2 className="text-5xl">                            {translations('section_2.title')}

                        </h2>
                    </div>
                    <p className="mt-4 max-w-md text-2xl font-thin  ">
                        {translations('section_2.subtitle')}                    </p>
                </header>

                <ul className="mt-8 grid    gap-4 sm:grid-cols-2 lg:grid-cols-2">
                    {places.map((place) => (
                        <li key={place._id}>
                            <Link href={`/property/${place.slug.current}`} className="group block overflow-hidden">
                                <img
                                    src={place.image || 'https://via.placeholder.com/350'}
                                    alt={place.title}
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                />
                                <div className="relative bg-white pt-3">
                                    <h3 className="text-xs text-gray-700  ">
                                        {place.address}


                                    </h3>
                                    <p className="mt-2 group-hover:underline group-hover:underline-offset-4"> {place.title}</p>
                                    <p className="mt-2">
                                        <span className="sr-only"> Price </span>
                                        <span className="tracking-wider ">{priceFormatter.format(place.price)} </span>
                                    </p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </section>
    );
};

export default Listings;