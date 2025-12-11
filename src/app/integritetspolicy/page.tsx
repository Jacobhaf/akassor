export const metadata = {
    title: "Integritetspolicy | Välja A-kassa",
    description: "Läs om hur Välja A-kassa hanterar dina personuppgifter.",
    openGraph: {
        title: "Integritetspolicy | Välja A-kassa",
        description: "Läs om hur Välja A-kassa hanterar dina personuppgifter.",
        url: "https://www.valjaakassa.se/integritetspolicy",
        images: [
            {
                url: "/hero-poster.jpg",
                width: 1200,
                height: 630,
                alt: "Integritetspolicy - A-kassa Portal",
            },
        ],
    },
};

import Image from "next/image";

// ... (existing metadata)

export default function IntegritetspolicyPage() {
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
                            Integritetspolicy
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-blue-100">
                            Information om hur vi hanterar dina personuppgifter och cookies.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">

                <div className="prose prose-lg text-gray-600">
                    <p>
                        Din integritet är viktig för oss. Denna policy beskriver hur vi samlar in, använder och skyddar din information
                        när du använder vår webbplats.
                    </p>

                    <h3>Personuppgifter</h3>
                    <p>
                        Vi sparar inga personuppgifter om dig när du besöker vår hemsida, såvida du inte själv väljer att kontakta oss
                        via e-post. I sådana fall använder vi endast din e-postadress för att svara på din förfrågan.
                    </p>

                    <h3>Cookies och analys</h3>
                    <p>
                        Vi kan använda cookies och liknande tekniker för att förbättra din upplevelse och analysera hur vår webbplats används.
                        Informationen som samlas in är anonym och används för att se besöksstatistik och förbättra innehållet.
                    </p>
                    <p>
                        Du kan själv välja att stänga av cookies i din webbläsare om du inte vill att de ska sparas.
                    </p>

                    <h3>Externa länkar</h3>
                    <p>
                        Vår webbplats innehåller länkar till externa webbplatser (t.ex. a-kassor). Vi ansvarar inte för integritetspolicyn
                        eller innehållet på dessa webbplatser.
                    </p>

                    <h3>Kontakt</h3>
                    <p>
                        Om du har frågor om vår integritetspolicy är du välkommen att kontakta oss via vår kontaktsida.
                    </p>
                </div>
            </div>
        </main>
    );
}
