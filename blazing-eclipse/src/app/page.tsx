import { akassor, yrken } from "@/data/database";
import Search from "@/components/Search";
import AkassaCard from "@/components/AkassaCard";
import YrkeCard from "@/components/YrkeCard";
import Link from "next/link";

export default function Home() {
    // Select a few popular professions to display
    const popularYrken = yrken.slice(0, 12);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                        Hitta rätt a-kassa för ditt yrke
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Skriv in ditt yrke eller välj det i listan så matchar vi dig med den
                        a-kassa som brukar passa bäst.
                    </p>
                    <Search />
                    <div className="mt-8 flex justify-center gap-4">
                        <Link
                            href="#alla-akassor"
                            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors"
                        >
                            Se alla a-kassor
                        </Link>
                    </div>
                </div>
            </section>

            {/* Popular Professions Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Populära yrken
                        </h2>
                        <p className="text-lg text-gray-600">
                            Vet du redan vad du jobbar som? Klicka på ditt yrke nedan och se
                            vilken a-kassa som rekommenderas.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {popularYrken.map((yrke) => {
                            const recommendedAkassa = akassor.find(
                                (a) => a.id === yrke.recommendedAkassaId
                            );
                            return (
                                <YrkeCard
                                    key={yrke.slug}
                                    yrke={yrke}
                                    akassa={recommendedAkassa}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* All A-kassor Section */}
            <section
                id="alla-akassor"
                className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Alla a-kassor på ett ställe
                        </h2>
                        <p className="text-lg text-gray-600">
                            Här hittar du alla a-kassor vi listar. Klicka dig vidare för att
                            se vilka yrken de riktar sig till, vad det kostar och hur du blir
                            medlem.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {akassor.map((akassa) => (
                            <AkassaCard key={akassa.id} akassa={akassa} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
