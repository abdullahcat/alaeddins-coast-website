// src/app/[locale]/property/[slug]/page.tsx
"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import client from '@/utils/configSanity';
import SellYourProperty from '@/components/sellyourproperty';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Old_Standard_TT } from 'next/font/google';
import { Link as ScrollLink } from 'react-scroll';
import { ArrowDownward, BathroomOutlined, BathtubOutlined, BedOutlined, LandscapeOutlined, Payment, PaymentOutlined, PaymentsOutlined, SellOutlined, SquareFootOutlined } from '@mui/icons-material';
import Link from 'next/link';
import Map from '@/components/leaflet-map';
import { useTranslations } from 'next-intl';

interface Property {
    _id: string;
    title: string;
    description: string;
    price: number;
    address: string;
    bedrooms: number;
    bathrooms: number;
    size: number;
    yearBuilt: number;
    propertyType: string;
    listingStatus: string;
    images: string[];
    location: {
        lat: number;
        lng: number;
    };
    slug: {
        current: string;
    };
}



const oldStandard = Old_Standard_TT({ weight: "400", subsets: ["latin"] });

export default function PropertyDetail() {
    const translations = useTranslations("Property");

    const params = useParams();
    const slug = params?.slug as string; // Cast slug to string
    const [property, setProperty] = useState<Property | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isReadMore, setIsReadMore] = useState<boolean>(false);
    const replacements: {
        forSale: string;
        forLease: string;
        sold: string;
    } = {
        forSale: translations('features.forSale'),
        forLease: translations('features.forLease'),
        sold: translations('features.sold'),
    };
    const priceFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    });

    const propertyTypes = {
        house: translations('features.house'),
        apartment: translations('features.apartment'),
        condo: translations('features.condo'),
        townhouse: translations('features.townhouse'),
        land: translations('features.land'),
        commercial: translations('features.commercial'),
    };

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                if (!slug) return; // Exit early if no slug
                const query = `*[_type == "property" && slug.current == $slug]{
                    _id,
                    title,
                    description,
                    price,
                    address,
                    bedrooms,
                    bathrooms,
                    size, 
                    yearBuilt,
                    propertyType,
                    listingStatus,
                    "images": images[].asset->url,
                    location,
                    slug
                }`;
                const params = { slug };
                const result = await client.fetch(query, params);
                if (result.length > 0) {
                    setProperty(result[0]);
                } else {
                    setError('Property not found.');
                }
            } catch (err) {
                setError('Failed to fetch property details.');
                console.error('Error fetching property:', err);
            }
        };

        fetchProperty();
    }, [slug]);

    if (error) {
        return <div className="p-40 text-red-500">Error: {error}</div>;
    }

    if (!property) {
        return <div className="p-40 text-gray-500">Loading...</div>;
    }

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <div className="text-white">
            <title>{property.title}</title>
            <div className="h-screen bg-black">
                {property.images && property.images.length > 0 && (
                    <Carousel
                        showThumbs={false}
                        autoPlay
                        infiniteLoop
                        className="h-screen w-full"
                    >
                        {property.images.map((image, index) => (
                            <div key={index} className="h-screen   w-full">
                                <img className="h-screen w-full object-cover" src={image} alt={property.title} />
                            </div>
                        ))}
                    </Carousel>
                )}
                <div className="text-white absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col justify-center items-center">
                    <div className="px-4 text-center pt-40 space-y-6 z-20" style={{ position: 'absolute' }}>

                        <div className="xl:text-7xl text-5xl">
                            <h1 >
                                {property.title}
                            </h1>
                        </div>
                        <h3>
                            {property.address}


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
            <section id='section_2' className='text-black xl:px-10 py-10 px-4 '>
                <div className="grid grid-cols-1  gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative xl:h-[30rem] h-[20rem] overflow-hidden w-full  ">
                        <img
                            alt={property.title}
                            src={property.images?.[0] || 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
                            className="absolute  inset-0  h-full w-full object-cover"
                        />
                    </div>

                    <div className="  flex-col flex  justify-center text-black">
                        <div className={oldStandard.className}>
                            <h2 className="text-5xl mt-4">{property.title}</h2>
                        </div>
                        <p className="  text-xl mt-4"> {priceFormatter.format(property.price)}</p>
                        <div className="flex mt-4">
                            <p className="text-2xl font-thin">{property.bedrooms} {translations('section_2.beds')} | {property.bathrooms} {translations('section_2.baths')} | {property.size} {translations('section_2.size')}</p>
                        </div>

                        <div className="flex mt-4  justify-start items-start flex-col">
                            <p className="text-xl font-thin">
                                {isReadMore ? property.description : `${property.description.slice(0, 100)}...`}
                            </p>
                            <button onClick={toggleReadMore} className="    underline">
                                {!isReadMore ? translations('section_2.readmore') : translations('section_2.readless')}
                            </button>
                        </div>
                        <div className="flex mt-4 space-x-4">
                            <Link href={`mailto:info@alaeddinscoast.com?subject=About: ${property.title}`} className="inline-block border transition duration-200 ease-in-out bg-black border-black px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black ">
                                {translations('section_2.button')}
                            </Link>

                        </div>

                    </div>
                </div>

            </section>

            <div className="px-4 py-16 mx-auto text-black sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="p-8 border-b sm:border-r">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                                <SquareFootOutlined className="w-10 h-10"></SquareFootOutlined>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">{translations('section_3.living-area')}                           </h6>
                            <p className="mb-3 text-xl  ">
                                {property.size} {translations('section_2.size')}
                            </p>
                        </div>
                    </div>
                    <div className="p-8 border-b lg:border-r">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                                <BedOutlined className="w-10 h-10"></BedOutlined>

                            </div>
                            <h6 className="mb-2 font-semibold leading-5">{translations('section_3.bedrooms')}    </h6>
                            <p className="mb-3 text-xl ">
                                {property.bedrooms}
                            </p>
                        </div>
                    </div>
                    <div className="p-8 border-b sm:border-r lg:border-r-0">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                                <BathtubOutlined className="w-10 h-10"></BathtubOutlined>

                            </div>
                            <h6 className="mb-2 font-semibold leading-5">{translations('section_3.bathrooms')}    </h6>
                            <p className="mb-3 text-xl ">
                                {property.bathrooms}
                            </p>
                        </div>
                    </div>
                    <div className="p-8 border-b lg:border-b-0 lg:border-r">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                                <SellOutlined className="w-10 h-10"></SellOutlined>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">{translations('section_3.status')}    </h6>
                            <p className="mb-3 text-xl ">
                                {replacements[property.listingStatus as keyof typeof replacements]}
                            </p>
                        </div>
                    </div>
                    <div className="p-8 border-b sm:border-b-0 sm:border-r">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                                <PaymentsOutlined className="w-10 h-10"></PaymentsOutlined>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">{translations('section_3.sales-price')}    </h6>
                            <p className="mb-3 text-xl ">
                                {priceFormatter.format(property.price)}
                            </p>
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                                <LandscapeOutlined className="w-10 h-10"></LandscapeOutlined>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">{translations('section_3.property-type')}    </h6>
                            <p className="mb-3 text-xl ">
                                {propertyTypes[property.propertyType as keyof typeof propertyTypes]}
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='text-black text-center text-5xl p-4'>
                <h1 className={oldStandard.className}>{property.title}</h1>

            </div>

            <Map adress={property.address} lat={property.location.lat} lng={property.location.lng} /> {/* Add the Map component */}

            <SellYourProperty></SellYourProperty>
        </div>
    );
}