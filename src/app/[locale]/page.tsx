"use client"
import Hero from '@/components/hero';

import '@/app/globals.css';
import SellYourProperty from '@/components/sellyourproperty';
import PropertyList from '@/components/property-list';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Old_Standard_TT } from 'next/font/google';
import { AccountBalanceOutlined, AddCommentOutlined, ApartmentOutlined, ArticleOutlined, CurrencyBitcoinOutlined, EventSeatOutlined, ExploreOutlined, Face2Outlined, LocalTaxiOutlined, NoCrashOutlined, PersonOutline, PolicyOutlined, Translate } from '@mui/icons-material';
const oldStandard = Old_Standard_TT({ weight: "400", subsets: ["latin"] });


export default function Home() {
    const translations = useTranslations("Main");

    return (
        <section className='text-white' >
            <Hero></Hero>

            <section  >
                <div className="mx-auto text-black  max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1  gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden   sm:h-80 lg:order-first lg:h-full">
                            <img
                                alt=""
                                src="https://images.pexels.com/photos/22468771/pexels-photo-22468771/free-photo-of-view-of-the-port-in-antalya-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                className="absolute inset-0 h-full w-full object-bottom object-cover"
                            />
                        </div>

                        <div className="lg:py-24">

                            <div className={oldStandard.className}>
                                <h2 className="text-5xl    "> {translations('section_2.title')}                            </h2>

                            </div>
                            <p className="mt-4 font-thin  text-2xl">
                                {translations('section_2.description')}
                            </p>
                            <Link
                                className="mt-4 inline-block border transition duration-200 ease-in-out border-black px-12 py-3 text-sm font-medium text-black hover:bg-black hover:text-white   "
                                href="/offices"
                            >
                                {translations('section_2.button')}

                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-black relative flex flex-col-reverse lg:pt-0 lg:flex-col lg:pb-0">

                <div className="inset-y-0 xl:h-full bg-[#fee800] top-0 right-0 z-0 w-full   px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12  max-w-full lg:absolute xl:px-0">
                    <svg
                        className="absolute  left-0 hidden h-full text-black  transform -translate-x-1/2 lg:block"
                        viewBox="0 0 100 100"
                        fill="currentColor"
                        preserveAspectRatio="none slice"
                    >
                        <path d="M50 0H100L50 100H0L50 0Z" />
                    </svg>
                    <img
                        className="object-contain   h-full bg-[#fee800] w-full              "
                        src="https://egirisim.com/wp-content/uploads/2020/01/sahibinden-com-2019.png"
                        alt=""
                    />
                </div>
                <div className="py-10 relative flex my-auto flex-col items-start justify-center w-full px-4 mx-auto   lg:px-8 lg:max-w-screen-xl">
                    <div className="  max-w-lg lg:pr-5">
                        <div className={oldStandard.className}>

                            <h2 className="text-5xl">{translations('section_2.title')}      </h2>
                        </div>
                        <p className="  font-thin  text-2xl">
                            {translations('section_3.description')}                                </p>
                        <a rel="noopener noreferrer" target="_blank"
                            className="mt-4 inline-block border transition duration-200 ease-in-out border-white px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-black   "
                            href="http://sahibinden.alaeddinscoast.com"
                        >
                            {translations('section_3.button')}
                        </a>

                    </div>
                </div>
            </div>


            <PropertyList></PropertyList>


            <section className="bg-[#7A4C37]  ">
                <div className="px-4 py-16 mx-auto   md:max-w-full lg:max-w-screen-xl   lg:px-8 lg:py-20">
                    <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
                        <div className="lg:w-1/2">
                            <div className={oldStandard.className}>

                                <h2 className="  mb-6   text-5xl   tracking-tight     sm:leading-none xl:max-w-lg">
                                    {translations('section_5.title')}

                                </h2>   </div>
                        </div>
                        <div className="lg:w-1/2">
                            <p className="font-thin text-2xl">
                                {translations('section_5.description')}

                            </p>
                        </div>
                    </div>
                    <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#fffff0]   text-black">
                                <ExploreOutlined></ExploreOutlined>
                            </div>
                            <h6 className="mb-2 text-xl leading-5">
                                {translations('section_5.website_services')}
                            </h6>

                            <ul className="mb-4 -ml-1 space-y-4">
                                <li className="flex items-start">
                                    <span className="mr-1">
                                        <AddCommentOutlined></AddCommentOutlined>
                                    </span>
                                    {translations('section_5.send_roposal')}
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-1">
                                        <EventSeatOutlined></EventSeatOutlined>
                                    </span>
                                    {translations('section_5.online_reservation')}
                                </li>

                            </ul>

                        </div>
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#fffff0] text-black">
                                <PolicyOutlined></PolicyOutlined>
                            </div>
                            <h6 className="mb-2 text-xl leading-5">                                    {translations('section_5.legal_services')}
                            </h6>

                            <ul className="mb-4 -ml-1 space-y-4">
                                <li className="flex items-start">
                                    <span className="mr-1">
                                        <ApartmentOutlined></ApartmentOutlined>
                                    </span>
                                    {translations('section_5.residency')}

                                </li>
                                <li className="flex items-start">
                                    <span className="mr-1">
                                        <PersonOutline></PersonOutline>
                                    </span>
                                    {translations('section_5.citizenship')}

                                </li>
                                <li className="flex items-start">
                                    <span className="mr-1">
                                        <ArticleOutlined></ArticleOutlined>
                                    </span>
                                    {translations('section_5.legal_process')}

                                </li>
                            </ul>

                        </div>
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#fffff0] text-black">
                                <LocalTaxiOutlined></LocalTaxiOutlined>
                            </div>
                            <h6 className="mb-2 text-xl leading-5">
                                {translations('section_5.other_services')}
                            </h6>

                            <ul className="mb-4 -ml-1 space-y-4">
                                <li className="flex items-center  ">
                                    <span className="mr-1 ">
                                        <NoCrashOutlined></NoCrashOutlined>
                                    </span>
                                    {translations('section_5.transportation')}

                                </li>
                                <li className="flex items-start">
                                    <span className="mr-1">
                                        <Face2Outlined></Face2Outlined>
                                    </span>
                                    {translations('section_5.private_assistant')}

                                </li>
                                <li className="flex items-start">
                                    <span className="mr-1">
                                        <Translate></Translate>
                                    </span>
                                    {translations('section_5.translator')}

                                </li>
                            </ul>

                        </div>
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#fffff0] text-black">
                                <AccountBalanceOutlined></AccountBalanceOutlined>
                            </div>
                            <h6 className="mb-2 text-xl leading-5">                                    {translations('section_5.financial_services')}
                            </h6>

                            <ul className="mb-4 -ml-1 space-y-4">
                                <li className="flex items-center  ">
                                    <span className="mr-1 ">
                                        <CurrencyBitcoinOutlined></CurrencyBitcoinOutlined>
                                    </span>
                                    {translations('section_5.transactions')}

                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </section>
            <SellYourProperty></SellYourProperty>
            <div className="relative">
                <img
                    src="https://images.pexels.com/photos/19447364/pexels-photo-19447364/free-photo-of-blue-slide-at-an-abandoned-water-park-at-a-seashore-kas-antalya-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className=" scale-x-[-1] absolute inset-0 object-cover w-full h-full"
                    alt=""
                />
                <div className="relative bg-black bg-opacity-50">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                <div className={oldStandard.className}>
                                    <h2 className="max-w-lg mb-6   text-5xl    ">
                                        {translations('section_5.title')}

                                    </h2>

                                </div>
                                <p className="max-w-xl mb-4 font-thin  text-2xl   ">
                                    {translations('section_5.description')}
                                </p>

                            </div>
                            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                    <div className="ml-embedded" data-form="GIBN68"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}
