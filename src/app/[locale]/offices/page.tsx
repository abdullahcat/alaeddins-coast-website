"use client"
import { ArrowDownward } from "@mui/icons-material";
import { useTranslations } from "next-intl";
import { Old_Standard_TT } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
const oldStandard = Old_Standard_TT({ weight: "400", subsets: ["latin"] });
import { Link as ScrollLink } from 'react-scroll';

export default function Page() {
    const translations = useTranslations("Offices");
    return (

        <section  >
            <title>
                {translations('hero.title')}

            </title>
            <div className="flex-col flex justify-center items-center">
                <div className="w-full  " style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-full h-screen object-cover  z-0" />
                    <div className="absolute  inset-0 bg-black bg-opacity-40 z-10"></div>
                    <div className="px-4 text-center pt-40 space-y-6 z-20" style={{ position: 'absolute' }}>

                        <div className="xl:text-7xl text-5xl">

                            <h1 >
                                {translations('hero.title')}
                            </h1>
                        </div>
                        <h3>
                            {translations('hero.description')}


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
            <div id="section_2" className="mx-auto max-w-screen-xl text-black px-4 py-8  sm:py-12  ">
                <header>

                    <div className={oldStandard.className}>
                        <h2 className="     text-5xl">
                            {translations('section_2.title')}


                        </h2>
                    </div>
                    <p className="mt-4 max-w-md text-2xl font-thin  ">
                        {translations('section_2.description')}



                    </p>
                </header>

                <ul className="mt-8 grid gap-4   sm:grid-cols-2 lg:grid-cols-3">
                    <li>
                        <Link href="/offices/antalya" className="group block overflow-hidden">
                            <img
                                src="https://images.pexels.com/photos/7560125/pexels-photo-7560125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt=""
                                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                            />
                            <div className="relative bg-white pt-3">
                                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                    Antalya Office
                                </h3>
                                <p className="mt-2">
                                    <span className="tracking-wider ">Antalya, Konyaaltı</span>
                                </p>
                            </div>

                        </Link>
                    </li>

                </ul>
            </div>
        </section>


    )
}
