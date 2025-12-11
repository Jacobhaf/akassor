export const metadata = {
    title: "Om oss – Oberoende guide till a-kassor | Välja A-kassa",
    description: "Läs mer om Välja A-kassa. Vi är en oberoende tjänst som hjälper dig att hitta rätt a-kassa baserat på ditt yrke och din bransch.",
    openGraph: {
        title: "Om oss – Oberoende guide till a-kassor | Välja A-kassa",
        description: "Läs mer om Välja A-kassa. Vi är en oberoende tjänst som hjälper dig att hitta rätt a-kassa baserat på ditt yrke och din bransch.",
        url: "https://www.valjaakassa.se/om-oss",
        images: [
            {
                url: "/hero-poster.jpg",
                width: 1200,
                height: 630,
                alt: "Om oss - Välja A-kassa",
            },
        ],
    },
};

import Image from "next/image";

// ... (existing metadata)

export default function OmOssPage() {
    return (
        <main>
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-[#0B1B3F] py-24 sm:py-32">
                <div className="absolute inset-0 -z-10 h-full w-full">
                    <Image
                        src="/assets/images/hero-generic.png"
                        alt="Hero background"
                        fill
                        className="object-cover object-center opacity-20"
                        priority
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Om Välja a-kassa
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-blue-100">
                            Vi är en oberoende tjänst som hjälper dig att hitta rätt a-kassa baserat på ditt yrke och din bransch.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">

                <div className="prose prose-lg text-gray-600">
                    <p>
                        Välja a-kassa är en oberoende tjänst som hjälper dig att hitta rätt a-kassa utifrån ditt yrke.
                        Vi vet att det kan vara krångligt att veta vilken a-kassa man ska välja, särskilt om man byter bransch
                        eller är ny på arbetsmarknaden.
                    </p>
                    <p>
                        Vårt mål är att göra det enkelt att jämföra och hitta rätt trygghet. Vi listar alla Sveriges a-kassor
                        och matchar dem mot hundratals yrken.
                    </p>
                    <p>
                        Observera att vi inte är en a-kassa själva, utan vi länkar vidare till respektive a-kassas hemsida
                        där du kan läsa mer och bli medlem.
                    </p>
                </div>
            </div>
        </main>
    );
}
