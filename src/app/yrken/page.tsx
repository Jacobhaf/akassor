
import Image from "next/image";
import { yrken, akassor } from "@/data/database";
import Search from "@/components/Search";
import YrkeCard from "@/components/YrkeCard";
import YrkenList from "@/components/YrkenList";

export const metadata = {
    title: "Alla yrken – Hitta rätt a-kassa för ditt jobb | Välja A-kassa",
    description: "Lista över alla yrken vi matchar mot a-kassa. Hitta ditt yrke och se vilken a-kassa som rekommenderas för just din bransch.",
    openGraph: {
        title: "Alla yrken – Hitta rätt a-kassa för ditt jobb | Välja A-kassa",
        description: "Lista över alla yrken vi matchar mot a-kassa. Hitta ditt yrke och se vilken a-kassa som rekommenderas för just din bransch.",
        url: "https://www.valjaakassa.se/yrken",
        images: [
            {
                url: "/hero-poster.jpg",
                width: 1200,
                height: 630,
                alt: "Hitta a-kassa för yrke - Välja A-kassa",
            },
        ],
    },
};

export default function YrkenPage() {
    return (
        <main>
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-[#0B1B3F] py-24 sm:py-32">
                <div className="absolute inset-0 -z-10 h-full w-full">
                    <Image
                        src="/assets/images/hero-yrken.png"
                        alt="Hero background"
                        fill
                        className="object-cover object-center opacity-20"
                        priority
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Alla yrken
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-blue-100">
                            Här hittar du alla yrken vi matchar mot a-kassa.
                        </p>
                        <div className="mt-8 mx-auto lg:mx-0 max-w-md">
                            <Search />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <YrkenList yrken={yrken} akassor={akassor} />
            </div>
        </main>
    );
}
