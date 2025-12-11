import { akassor, yrken } from "@/data/database";
import Search from "@/components/Search";
import AkassaCard from "@/components/AkassaCard";
import YrkeCard from "@/components/YrkeCard";
import AkassorGrid from "@/components/AkassorGrid";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jämför alla Sveriges A-kassor 2025 | Välja A-kassa",
    description: "Jämför Sveriges alla a-kassor och hitta rätt kassa för ditt yrke. Snabb jämförelse, tydliga rekommendationer och uppdaterad information för 2025.",
    openGraph: {
        title: "Jämför alla Sveriges A-kassor 2025 | Välja A-kassa",
        description: "Jämför Sveriges alla a-kassor och hitta rätt kassa för ditt yrke. Snabb jämförelse, tydliga rekommendationer och uppdaterad information.",
        url: "https://www.valjaakassa.se",
        images: [
            {
                url: "/hero-poster.jpg",
                width: 1200,
                height: 630,
                alt: "Jämför a-kassor",
            },
        ],
    },
};

export default function Home() {
    // Select specific popular professions to display
    const targetYrkenNames = [
        "Lärare",
        "Sjuksköterska",
        "Undersköterska",
        "Elektriker",
        "Snickare",
        "Ekonom"
    ];

    // Filter and sort to match the order in targetYrkenNames
    const popularYrken = targetYrkenNames
        .map(name => yrken.find(y => y.name === name))
        .filter((y): y is typeof yrken[0] => y !== undefined);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-[#0B1B3F] py-24 sm:py-32">
                <div className="absolute inset-0 -z-10 h-full w-full">
                    <Image
                        src="/assets/images/hero-home.png"
                        alt="Hero background"
                        fill
                        className="object-cover object-center opacity-20"
                        priority
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Hitta rätt a-kassa för din trygghet
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-blue-100">
                            Vi hjälper dig att jämföra och välja rätt arbetslöshetskassa baserat på ditt yrke och din situation.
                        </p>
                        <div className="mt-8 mb-8 w-full max-w-md">
                            <Search />
                        </div>
                        <div className="mt-10 flex items-center gap-x-6">
                            <Link
                                href="/jamfor"
                                className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                            >
                                Jämför nu
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

            {/* Popular Professions Section */}
            <section id="popular-occupations" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Populära yrken
                        </h2>
                        <p className="text-lg text-gray-600">
                            Klicka på ditt yrke nedan och se vilken a-kassa som rekommenderas.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
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
                    <div className="mt-12 text-center">
                        <Link
                            href="/yrken"
                            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all hover:scale-105"
                        >
                            Se alla yrken
                        </Link>
                    </div>
                </div>
            </section>

            {/* All A-kassor Section */}
            <section
                id="jamfor"
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
                    <AkassorGrid />
                </div>
            </section>
        </div>
    );
}
