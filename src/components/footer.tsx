"use client"
import { Instagram } from "@mui/icons-material";
import LanguageSwitch from "./language-switch";
import Link from "next/link";
import { useTranslations } from "next-intl";


export default function Footer() {
    const translations = useTranslations("Footer");

    return (
        <section className="border-t text-black" >
            <div className=" px-4 pt-16 mx-auto  lg:max-w-screen-xl   lg:px-8">
                <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">

                    <div className="grid   gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                        <div>
                            <p className="font-semibold tracking-wide 800">
                                {translations('company.title')}

                            </p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <Link
                                        href="/sell-with-us"
                                        className="transition duration-200 ease-in-out  underline-animation"
                                    >
                                        {translations('company.sell_with_us')}

                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/our-properties"
                                        className="transition duration-200 ease-in-out  underline-animation"
                                    >
                                        {translations('company.our_properties')}
                                    </Link>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold tracking-wide 800">
                                {translations('offices.title')}

                            </p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <Link
                                        href="/offices/antalya"
                                        className="transition duration-200 ease-in-out  underline-animation"
                                    >
                                        Antalya
                                    </Link>
                                </li>
                            </ul>
                        </div>


                        <div>
                            <p className="font-semibold tracking-wide 800">
                                {translations('legal.title')}

                            </p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <Link
                                        href="/legal/privacy-policy"
                                        className="transition duration-200 ease-in-out  underline-animation"
                                    >
                                        {translations('legal.privacy_policy')}

                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/legal/terms"
                                        className="transition duration-200 ease-in-out  underline-animation"
                                    >
                                        {translations('legal.terms')}

                                    </Link>
                                </li>

                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold tracking-wide 800">
                                {translations('contact.title')}
                            </p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <Link
                                        href="tel:505-147-29-90"
                                        className="transition duration-200 ease-in-out  underline-animation"
                                    >
                                        505.147.29.90
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="mailto:info@alaeddinscoast.com"
                                        className="transition duration-200 ease-in-out  underline-animation"
                                    >
                                        info@alaeddinscoast.com
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
                    <p className="text-sm ">
                        © {translations('copyright')}

                    </p>
                    <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                        <LanguageSwitch></LanguageSwitch>

                        <a
                            href="https://www.instagram.com/alaeddinscoast"
                            className=" selection:transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            <Instagram></Instagram>
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
};