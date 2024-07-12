import { useTranslations } from "next-intl";
import { Old_Standard_TT } from "next/font/google";
import Link from "next/link"
const oldStandard = Old_Standard_TT({ weight: "400", subsets: ["latin"] });

function SellYourProperty() {
    const translations = useTranslations("cta");

    return (
        <div className="text-black   px-4 py-16 mx-auto   md:max-w-full lg:max-w-screen-xl   lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                    <div className="  mb-6">
                        <div className={oldStandard.className}>
                            <h2 className="  mb-6 text-5xl  tracking-tight   sm:leading-none">
                                {translations('title')}

                            </h2>   </div>
                        <p className=" font-thin  text-2xl">
                            {translations('description')}
                        </p>
                    </div>
                    <Link
                        className="  inline-block border transition duration-200 ease-in-out border-black px-12 py-3 text-sm font-medium text-black hover:bg-black hover:text-white  "
                        href="/sell-with-us"
                    >
                        {translations('button')}                    </Link>
                </div>
                <div className="relative lg:w-1/2">
                    <img
                        className="object-contain w-full h-56     sm:h-96"
                        src="/sell-house.png"
                        alt=""
                    />

                </div>
            </div>
        </div>
    )
}
export default SellYourProperty