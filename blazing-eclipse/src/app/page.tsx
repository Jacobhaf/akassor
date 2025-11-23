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
            <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay */}
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="/hero-poster.jpg"
                        className="h-full w-full object-cover"
                    >
                        <source src="/hero.mp4" type="video/mp4" />
                        {/* Fallback for mobile/no-video support */}
                        <div
                            className="h-full w-full bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: 'url("/hero-poster.jpg")',
                            }}
                        />
                    </video>
                </div>

                {/* Content */}
                <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
                            Hitta rätt a-kassa för ditt yrke
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto drop-shadow-md">
                            Vi matchar alla Sveriges a-kassor mot typiska yrken så att du kan känna dig trygg.
                        </p>

                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-white/20 mb-8">
                            <Search />
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="#popular-occupations"
                                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-500 transition-all transform hover:scale-105"
                            >
                                Kom igång
                            </Link>
                            <Link
                                href="#jamfor"
                                className="px-8 py-4 bg-white/20 backdrop-blur-md text-white font-bold rounded-lg shadow-lg hover:bg-white/30 transition-all border border-white/30"
                            >
                                Jämför a-kassor
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Professions Section */}
            <section id="popular-occupations" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
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
