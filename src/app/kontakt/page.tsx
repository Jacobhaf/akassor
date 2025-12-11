export const metadata = {
    title: "Kontakta oss | Välja A-kassa",
    description: "Har du frågor eller funderingar? Kontakta oss på Välja A-kassa så hjälper vi dig att hitta rätt information.",
    openGraph: {
        title: "Kontakta oss | Välja A-kassa",
        description: "Har du frågor eller funderingar? Kontakta oss på Välja A-kassa så hjälper vi dig att hitta rätt information.",
        url: "https://www.valjaakassa.se/kontakt",
        images: [
            {
                url: "/hero-poster.jpg",
                width: 1200,
                height: 630,
                alt: "Kontakta oss - Välja A-kassa",
            },
        ],
    },
};

import Image from "next/image";

// ... (existing metadata)

export default function KontaktPage() {
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
                            Kontakt
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-blue-100">
                            Har du frågor eller funderingar? Vi finns här för att hjälpa dig.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">

                <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                    <div className="prose prose-lg text-gray-600">
                        <p>
                            Har du frågor om vår tjänst eller hittar du felaktig information? Tveka inte att kontakta oss.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Postadress</h3>
                        <p className="not-prose">
                            Välja a-kassa<br />
                            Vallgatan 25<br />
                            411 16 Göteborg
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">E-post</h3>
                        <p>
                            Du når oss enklast via e-post: <a href="mailto:info@valjaakassa.se" className="text-blue-600 hover:underline">info@valjaakassa.se</a>
                        </p>

                        <div className="mt-8 rounded-lg bg-blue-50 p-4 text-sm text-blue-800">
                            <p className="font-medium">Observera!</p>
                            <p className="mt-1">
                                Vi är inte en a-kassa och kan inte svara på frågor om ditt specifika ärende, utbetalningar eller medlemskap.
                                För sådana frågor måste du kontakta din a-kassa direkt.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
