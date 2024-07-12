"use client"
import SellYourProperty from "@/components/sellyourproperty";
import { AddCommentOutlined, ApartmentOutlined, ArrowDownward, ArticleOutlined, EventSeatOutlined, Face2Outlined, NoCrashOutlined, PaymentsOutlined, Person, Person3, PersonOutline, Translate, TranslateOutlined } from "@mui/icons-material";
import { useTranslations } from "next-intl";
import { Old_Standard_TT } from "next/font/google";
import { Link as ScrollLink } from 'react-scroll';
const oldStandard = Old_Standard_TT({ weight: "400", subsets: ["latin"] });

export default function Page() {

    const translations = useTranslations("Office");


    return (
        <div>
            <title>Antalya Office </title>
            <div className="flex-col flex justify-center items-center">
                <div className="w-full" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="https://images.pexels.com/photos/7560125/pexels-photo-7560125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        className="w-full h-screen object-cover  z-0" />
                    <div className="absolute  inset-0 bg-black bg-opacity-40 z-10"></div>
                    <div className="px-4 text-center pt-40 space-y-6 z-20" style={{ position: 'absolute' }}>

                        <div className="xl:text-7xl text-5xl">

                            <h1 >
                                Antalya Coast Office
                            </h1>
                        </div>
                        <h3>
                            Antalya, Konyaaltı

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
            <div id="section_2" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <div className="text-black max-w-xl mb-6">
                            <div className={oldStandard.className}>
                                <h2 className="max-w-lg mb-6 tracking-tight text-5xl sm:leading-none">
                                    Antalya Coast Office
                                </h2>
                            </div>
                            <p className="text-2xl font-thin ">
                                <span>{translations('section_2.address')}</span> Arapsuyu, Belediye Cd. 7 A, 07070 Bahtılı Köyü Köyü/Konyaaltı/Antalya
                                <br />
                                <span>{translations('section_2.phone')}</span> 505-147-29-90
                                <br />
                                <span>{translations('section_2.email')}</span> antalya@alaeddinscoast.com

                            </p>
                        </div>

                    </div>
                    <div>
                        <img
                            className="object-cover w-full h-56  object-top shadow-lg sm:h-96"
                            src="https://images.pexels.com/photos/10902156/pexels-photo-10902156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <section className="bg-[#7a4c37]">
                <div className="px-4  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col lg:items-center lg:flex-row">
                        <div className="flex items-center mb-6 lg:w-1/2 lg:mb-0">
                            <div className="flex text-black items-center justify-center    mr-5 rounded-full bg-white sm:w-24 sm:h-24 xl:mr-10  w-20  h-20">
                                <PaymentsOutlined className=" text-[#7a4c37] w-10 h-10 " ></PaymentsOutlined>
                            </div>
                            <div className="flex flex-col items-end">
                                <h3 className="text-4xl font-extrabold sm:text-5xl xl:text-6xl">
                                    $3.000.000+

                                </h3>
                                <h1 className="mt-2 ml-2">
                                    {translations('section_3.subtitle')}
                                </h1>
                            </div>

                        </div>

                        <div className="lg:w-1/2">
                            <p className="font-thin text-2xl">
                                {translations('section_3.description')}

                            </p>  </div>
                    </div>
                </div>
            </section>
            <div  >
                <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
                        <svg
                            viewBox="0 0 88 88"
                            className="w-full max-w-screen-xl text-indigo-100"
                        >
                            <circle fill="currentColor" cx="44" cy="44" r="15.5" />
                            <circle
                                fillOpacity="0.2"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="44"
                            />
                            <circle
                                fillOpacity="0.2"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="37.5"
                            />
                            <circle
                                fillOpacity="0.3"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="29.5"
                            />
                            <circle
                                fillOpacity="0.3"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="22.5"
                            />
                        </svg>
                    </div>
                    <div className="relative text-black grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <AddCommentOutlined></AddCommentOutlined>
                                </div>
                                <p className="mb-2 font-bold">
                                    {translations('section_4.title_1')}
                                </p>
                                <p className="text-sm leading-5  ">
                                    {translations('section_4.description_1')}
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <EventSeatOutlined></EventSeatOutlined>
                                </div>
                                <p className="mb-2 font-bold">
                                    {translations('section_4.title_2')}
                                </p>
                                <p className="text-sm leading-5  ">
                                    {translations('section_4.description_2')}
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <ApartmentOutlined></ApartmentOutlined>
                                </div>
                                <p className="mb-2 font-bold">
                                    {translations('section_4.title_3')}
                                </p>
                                <p className="text-sm leading-5  ">
                                    {translations('section_4.description_3')}
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <PersonOutline></PersonOutline>
                                </div>
                                <p className="mb-2 font-bold">
                                    {translations('section_4.title_4')}
                                </p>
                                <p className="text-sm leading-5  ">
                                    {translations('section_4.description_4')}
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <ArticleOutlined></ArticleOutlined>
                                </div>
                                <p className="mb-2 font-bold">
                                    {translations('section_4.title_5')}
                                </p>
                                <p className="text-sm leading-5  ">
                                    {translations('section_4.description_5')}
                                </p>                    </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <NoCrashOutlined></NoCrashOutlined>
                                </div>
                                <p className="mb-2 font-bold">
                                    {translations('section_4.title_6')}
                                </p>
                                <p className="text-sm leading-5  ">
                                    {translations('section_4.description_6')}
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <Face2Outlined></Face2Outlined>
                                </div>
                                <p className="mb-2 font-bold">
                                    {translations('section_4.title_7')}
                                </p>
                                <p className="text-sm leading-5  ">
                                    {translations('section_4.description_7')}
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <TranslateOutlined></TranslateOutlined>
                                </div>
                                <p className="mb-2 font-bold">
                                    {translations('section_4.title_8')}
                                </p>
                                <p className="text-sm leading-5  ">
                                    {translations('section_4.description_8')}
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                    </div>
                </div>
            </div>
            <SellYourProperty></SellYourProperty>
        </div>
    )
}