import Head from "next/head";
import { Old_Standard_TT } from "next/font/google";
const oldStandard = Old_Standard_TT({ weight: "400", subsets: ["latin"] });

function Page() {
    return (
        <section className="bg-black pt-20">
            <title>Gizlilik Politikası </title>
            <div className="  mx-auto w-full max-w-screen-xl px-4    py-10 min-h-screen">
                <hr />
                <h1 className='text-3xl text-start py-5'>Gizlilik Politikası</h1>

                <p>  Son Güncelleme Tarihi: 20.09.2023</p>

                <h2 className="text-2xl mt-4">1. Kişisel Bilgilerin Toplanması ve Kullanılması</h2>

                <p className="mt-2">Biz, Alaeddin&apos;s Coast Estates, müşterilerimizin gizliliğini önemsiyoruz. Bu nedenle, sizden topladığımız kişisel bilgileri korumak ve gizliliğinizi sağlamak için gerekli tüm önlemleri alırız.</p>

                <h3 className="text-xl mt-4">1.1. Toplanan Bilgiler</h3>

                <ul className="list-disc list-inside mt-2">
                    <li>Adınız ve soyadınız</li>
                    <li>E-posta adresiniz</li>
                    <li>Telefon numaranız</li>
                    <li>Fatura adresiniz</li>
                    <li>Ödeme bilgileriniz</li>
                    <li>Diğer iletişim bilgileri</li>
                </ul>

                <h3 className="text-xl mt-4">1.2. Kullanım Amaçları</h3>

                <ul className="list-disc list-inside mt-2">
                    <li>Hizmetlerimizi sağlamak, işlem yapmak ve destek sunmak</li>
                    <li>İşletmemizle ilgili güncellemeler ve teklifler göndermek</li>
                    <li>Sizden gelen taleplere yanıt vermek</li>
                    <li>İşlem geçmişinizi ve tercihlerinizi analiz etmek</li>
                    <li>Yasal gerekliliklere uymak</li>
                </ul>
            </div>
        </section>
    );
}
export default Page;