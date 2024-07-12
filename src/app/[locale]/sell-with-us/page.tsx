"use client"
import { Add, ArrowDownward, BrunchDiningTwoTone, Business, CurrencyBitcoinOutlined, Done, HomeOutlined, LanguageOutlined, MovieCreationOutlined, NoCrashOutlined, QueryStats, QueryStatsOutlined, RocketLaunchOutlined } from "@mui/icons-material";
import { useTranslations } from "next-intl";
import { Alex_Brush, Old_Standard_TT } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import { Link as ScrollLink } from 'react-scroll';

import { useRef } from "react";
const alexBrush = Alex_Brush({ weight: "400", subsets: ["latin"] });
const oldStandard = Old_Standard_TT({ weight: "400", subsets: ["latin"] });

export default function SellWithUs() {

    const translations = useTranslations("Sell-With-Us");


    return (
        <section>

            <div className="flex-col flex justify-center items-center">
                <title>
                    {translations('hero.title')}
                </title>

                <div className="w-full h-screen" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="https://images.pexels.com/photos/6775268/pexels-photo-6775268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-full h-screen object-cover  z-0" />
                    <div className="absolute  inset-0 bg-black bg-opacity-40 z-10"></div>
                    <div className="text-center pt-40 space-y-6 z-20" style={{ position: 'absolute' }}>

                        <div className="text-7xl">

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
            <div id='section_2' className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                        <div className="flex bg-[#7A4C37] text-white items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                            <HomeOutlined className="w-8 h-8"></HomeOutlined>
                        </div>
                        <div className="  text-black mb-6">
                            <div className={oldStandard.className}>
                                <h2 className="max-w-lg mb-6   text-5xl    ">
                                    {translations('section_2.title')}

                                </h2>
                            </div>
                            <p className="text-2xl font-thin    ">
                                {translations('section_2.description')}
                            </p>
                        </div>

                    </div>
                    <div className="flex items-center justify-center -mx-4 lg:pl-8">
                        <div className="flex flex-col items-end px-3">
                            <img
                                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt=""
                            />
                            <img
                                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt=""
                            />
                        </div>
                        <div className="px-3">
                            <img
                                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                                src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <section className=" bg-[#7A4C37] text-white">
                <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-24 row-gap-8 lg:grid-cols-5">

                        <div className="grid gap-8 lg:col-span-2">
                            <div className={oldStandard.className}>
                                <h1 className="text-5xl">
                                    {translations('section_3.title')}
                                </h1>
                            </div>
                            <p className=" text-2xl font-thin">
                                {translations('section_3.description')}

                            </p>
                        </div>
                        <div className="grid border divide-y rounded lg:col-span-3 sm:grid-cols-2  sm:divide-y-0   sm:divide-x">
                            <div className="flex flex-col justify-between   gap-4  p-10">
                                <div>
                                    <p className="text-lg font-semibold   sm:text-base">
                                        {translations('section_3.funds-raised')}

                                    </p>
                                    <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                                        $13,000,000 +
                                    </p>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold   sm:text-base">
                                        {translations('section_3.properties')}

                                    </p>
                                    <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                                        120+
                                    </p>
                                </div>

                            </div>
                            <div className="flex flex-col justify-between gap-4 p-10">
                                <div>
                                    <p className="text-lg font-semibold   sm:text-base">
                                        {translations('section_3.investors')}

                                    </p>
                                    <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                                        100+
                                    </p>
                                </div>

                                <div>
                                    <p className="text-lg font-semibold   sm:text-base">
                                        {translations('section_3.subscribers')}

                                    </p>
                                    <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                                        1500+
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="px-4 py-16 mx-auto text-black sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="p-8 border-b sm:border-r">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                                <CurrencyBitcoinOutlined className="w-10 h-10"></CurrencyBitcoinOutlined>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">
                                {translations('section_4.title_1')}

                            </h6>
                            <p className="mb-3 text-sm ">
                                {translations('section_4.description_1')}
                            </p>
                        </div>
                    </div>
                    <div className="p-8 border-b lg:border-r">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                                <LanguageOutlined className="w-10 h-10"></LanguageOutlined>

                            </div>
                            <h6 className="mb-2 font-semibold leading-5">
                                {translations('section_4.title_2')}

                            </h6>
                            <p className="mb-3 text-sm ">
                                {translations('section_4.description_2')}
                            </p>
                        </div>
                    </div>
                    <div className="p-8 border-b sm:border-r lg:border-r-0">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                                <MovieCreationOutlined className="w-10 h-10"></MovieCreationOutlined>

                            </div>
                            <h6 className="mb-2 font-semibold leading-5">
                                {translations('section_4.title_3')}
                            </h6>
                            <p className="mb-3 text-sm ">
                                {translations('section_4.description_3')}
                            </p>
                        </div>
                    </div>
                    <div className="p-8 border-b lg:border-b-0 lg:border-r">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                                <RocketLaunchOutlined className="w-10 h-10"></RocketLaunchOutlined>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">
                                {translations('section_4.title_4')}


                            </h6>
                            <p className="mb-3 text-sm ">
                                {translations('section_4.description_4')}
                            </p>
                        </div>
                    </div>
                    <div className="p-8 border-b sm:border-b-0 sm:border-r">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                                <NoCrashOutlined className="w-10 h-10"></NoCrashOutlined>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">
                                {translations('section_4.title_5')}
                            </h6>
                            <p className="mb-3 text-sm ">
                                {translations('section_4.description_5')}

                            </p>
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="max-w-md text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                                <QueryStatsOutlined className="w-10 h-10"></QueryStatsOutlined>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">
                                {translations('section_4.title_6')}
                            </h6>
                            <p className="mb-3 text-sm ">
                                {translations('section_4.description_6')}

                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="px-4 text-black py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                    <div className={oldStandard.className}>
                        <h2 className="max-w-lg mb-6   text-5xl         md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="ace59d72-08d5-4850-b9e4-d9d0b86c0525"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#ace59d72-08d5-4850-b9e4-d9d0b86c0525)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">
                                    {translations('section_5.title')}
                                </span>
                            </span>{' '}

                        </h2>
                    </div>
                    <p className="text-base   md:text-lg">

                        {translations('section_5.description')}

                    </p>
                </div>
                <div className="grid     gap-10 row-gap-5 sm:row-gap-10   lg:grid-cols-3 sm:mx-auto">

                    <div className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
                        <div className="mb-6">
                            <div className="flex items-center justify-between pb-6 mb-6 border-b">
                                <div>
                                    <p className="text-md">
                                        {translations('section_5.description_1')}
                                    </p>
                                    <p className="text-5xl  ">   {translations('section_5.title_1')}</p>
                                </div>

                            </div>
                            <div>
                                <p className="mb-2 font-bold tracking-wide">
                                    {translations('section_5.subtitle')}


                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <div className="mr-2">
                                            <Done></Done>
                                        </div>
                                        <p className="font-medium ">
                                            {translations('section_5.feature_1_1')}
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-2">
                                            <Done></Done>
                                        </div>
                                        <p className="font-medium ">
                                            {translations('section_5.feature_1_2')}
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-2">
                                            <Done></Done>
                                        </div>
                                        <p className="font-medium ">{translations('section_5.feature_1_3')}</p>
                                    </li>

                                    <li className="flex items-center">
                                        <div className="mr-2">
                                            <Done></Done>
                                        </div>
                                        <p className="font-medium "> {translations('section_5.feature_1_4')}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>

                            <p className="text-sm ">
                                {translations('section_5.main_description')}
                            </p>
                        </div>
                    </div> <div className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
                        <div className="mb-6">
                            <div className="flex items-center justify-between pb-6 mb-6 border-b">
                                <div>
                                    <p className="text-md">
                                        {translations('section_5.description_2')}
                                    </p>
                                    <p className="text-5xl  ">
                                        {translations('section_5.title_2')}
                                    </p>
                                </div>

                            </div>
                            <div>
                                <p className="mb-2 font-bold tracking-wide">
                                    {translations('section_5.subtitle')}
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <div className="mr-2">
                                            <Add></Add>
                                        </div>
                                        <p className="font-medium ">
                                            {translations('section_5.feature_2_1')}
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-2">
                                            <Add></Add>
                                        </div>
                                        <p className="font-medium ">
                                            {translations('section_5.feature_2_2')}
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-2">
                                            <Add></Add>
                                        </div>
                                        <p className="font-medium ">  {translations('section_5.feature_2_3')}</p>
                                    </li>


                                </ul>
                            </div>
                        </div>
                        <div>

                            <p className="text-sm ">
                                {translations('section_5.main_description')}
                            </p>
                        </div>
                    </div> <div className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
                        <div className="mb-6">
                            <div className="flex items-center justify-between pb-6 mb-6 border-b">
                                <div>
                                    <p className="text-md">
                                        {translations('section_5.description_3')}
                                    </p>
                                    <p className="text-5xl  "> {translations('section_5.title_3')}
                                    </p>
                                </div>

                            </div>
                            <div>
                                <p className="mb-2 font-bold tracking-wide">                        {translations('section_5.subtitle')}
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <div className="mr-2">
                                            <Add></Add>
                                        </div>
                                        <p className="font-medium ">
                                            {translations('section_5.feature_3_1')}
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-2">
                                            <Add></Add>
                                        </div>
                                        <p className="font-medium ">
                                            {translations('section_5.feature_3_2')}
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-2">
                                            <Add></Add>
                                        </div>
                                        <p className="font-medium "> {translations('section_5.feature_3_3')}
                                        </p>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div>

                            <p className="text-sm ">
                                {translations('section_5.main_description')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative">
                <img
                    src="https://images.pexels.com/photos/8482519/pexels-photo-8482519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className=" scale-x-[-1] absolute inset-0 object-cover w-full h-full"
                    alt=""
                />
                <div className="relative bg-black bg-opacity-50">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                <div className={oldStandard.className}>
                                    <h2 className="max-w-lg mb-6   text-5xl    ">
                                        {translations('section_6.title')}
                                    </h2>
                                </div>
                                <p className="max-w-xl mb-4 font-thin  text-2xl   ">
                                    {translations('section_6.description')}

                                </p>

                            </div>
                            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                    <div className="ml-embedded" data-form="LO7qPg"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}