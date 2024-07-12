"use client"
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import client from '@/utils/configSanity';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Head from 'next/head';
import { Old_Standard_TT } from 'next/font/google';
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

const PropertyList = () => {
    const [properties, setProperties] = useState<Property[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [propertiesPerPage, setPropertiesPerPage] = useState(2);
    const propertyListRef = useRef<HTMLDivElement>(null); // Reference to the property list container
    const translations = useTranslations("Property-List");

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const query = `*[_type == "property"]{
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
                const result = await client.fetch(query);
                setProperties(result);
            } catch (err) {
                setError('Failed to fetch properties.');
                console.error('Error fetching properties:', err);
            }
        };

        fetchProperties();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setPropertiesPerPage(1);

        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call it initially to set the correct value based on initial size

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (error) {
        return <div className="p-40 text-red-500">Error: {error}</div>;
    }

    const totalPages = Math.ceil(properties.length / propertiesPerPage);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            scrollToPropertyList(); // Scroll to the top of property list on page change
        }
    };

    const scrollToPropertyList = () => {
        if (propertyListRef.current) {
            propertyListRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);
    const priceFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    });
    return (
        <section className='bg-orange-50'>

            <div ref={propertyListRef} className="mx-auto py-10 my-auto     max-w-screen-xl px-4 ">
                {currentProperties.map((property) => (
                    <div key={property._id}  >

                        <div className="grid grid-cols-1  gap-8 lg:grid-cols-2 lg:gap-16">
                            <div className="relative xl:h-[40rem] h-[20rem] overflow-hidden w-full  ">
                                <img
                                    alt={property.title}
                                    src={property.images?.[0] || 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
                                    className="absolute  inset-0  h-full w-full object-cover"
                                />
                            </div>

                            <div className="  flex-col flex  justify-center text-black">
                                <p className="underline text-lg">Featured Listing</p>
                                <div className={oldStandard.className}>
                                    <h2 className="text-5xl mt-4">{property.title}</h2>
                                </div>
                                <p className="  text-xl mt-4">

                                    {priceFormatter.format(property.price)}

                                </p>
                                <div className="flex mt-4">
                                    <p className="text-2xl font-thin">{property.bedrooms} {translations('beds')} | {property.bathrooms}  {translations('baths')} | {property.size}  {translations('size')}</p>
                                </div>

                                <div className="flex mt-4 space-x-4">
                                    <Link href={`/property/${property.slug.current}`} className="inline-block border transition duration-200 ease-in-out bg-black border-black px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black ">
                                        {translations('button_1')}
                                    </Link>
                                    <Link href="/our-properties" className="inline-block border transition duration-200 ease-in-out border-black px-12 py-3 text-sm font-medium text-black hover:bg-black hover:text-white ">
                                        {translations('button_2')}
                                    </Link>
                                </div>
                                <ol className="flex mt-5 justify-start   text-md  ">

                                    {Array.from({ length: totalPages }, (_, i) => (
                                        <li key={i + 1}>
                                            <button
                                                onClick={() => handlePageChange(i + 1)}
                                                className={`block size-8   ${currentPage === i + 1 ? ' ' : 'text-gray-400 '} hover:underline text-center leading-8`}
                                            >
                                                0{i + 1}
                                            </button>
                                        </li>
                                    ))}


                                </ol>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </section>
    );
};

export default PropertyList;