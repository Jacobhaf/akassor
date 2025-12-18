import AkassorGrid from "@/components/AkassorGrid";
import Image from "next/image";

export const metadata = {
    title: "Lista på alla a-kassor i Sverige 2026 | Välja A-kassa",
    description: "Här hittar du en komplett lista över alla a-kassor i Sverige. Jämför avgifter, villkor och hitta rätt a-kassa för dig.",
    openGraph: {
        title: "Lista på alla a-kassor i Sverige 2026 | Välja A-kassa",
        description: "Här hittar du en komplett lista över alla a-kassor i Sverige. Jämför avgifter, villkor och hitta rätt a-kassa för dig.",
        url: "https://www.valjaakassa.se/akassor",
        images: [
            {
                url: "/hero-poster.jpg",
                width: 1200,
                height: 630,
                alt: "Alla a-kassor - Välja A-kassa",
            },
        ],
    },
};

export default function AkassorPage() {
    return (
        <main>
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-[#0B1B3F] py-24 sm:py-32">
                <div className="absolute inset-0 -z-10 h-full w-full">
                    <Image
                        src="/assets/images/hero-akassor.png"
                        alt="Hero background"
                        fill
                        className="object-cover object-center opacity-20"
                        priority
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Alla a-kassor
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-blue-100">
                            Här hittar du alla Sveriges a-kassor. Klicka på den a-kassa du vill veta mer om för att komma direkt till deras hemsida.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <AkassorGrid />
            </div>
        </main>
    );
}
