import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Om oss – Oberoende guide till a-kassor | Välja A-kassa",
    description: "Läs mer om Välja A-kassa. Vi är en oberoende tjänst som hjälper dig att hitta rätt a-kassa baserat på ditt yrke och din bransch.",
    openGraph: {
        title: "Om oss – Oberoende guide till a-kassor | Välja A-kassa",
        description: "Läs mer om Välja A-kassa. Vi är en oberoende tjänst som hjälper dig att hitta rätt a-kassa baserat på ditt yrke och din bransch.",
        url: "https://www.valjaakassa.se/om-oss",
        images: [
            {
                url: "/images/about-team.jpg",
                width: 1200,
                height: 630,
                alt: "Teamet bakom Välja A-kassa",
            },
        ],
    },
};

export default function OmOssPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-slate-900 py-24 sm:py-32">
                <Image
                    src="/images/about-team.jpg"
                    alt="Teamet på Välja A-kassa"
                    fill
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-20 blur-sm"
                    priority
                />
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Om Välja A-kassa
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
                        Vi guidar dig till rätt trygghet på arbetsmarknaden. En oberoende tjänst för att hitta, jämföra och välja rätt a-kassa.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="prose prose-lg prose-slate text-slate-600">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Vår mission
                        </h2>
                        <p>
                            Välja A-kassa grundades med en enkel idé: att göra det lättare för arbetstagare och företagare i Sverige att hitta rätt a-kassa.
                            Med över 20 olika a-kassor och hundratals yrkestitlar kan det vara svårt att veta vart man ska vända sig.
                        </p>
                        <p>
                            Vi tror på transparens och enkelhet. Därför har vi byggt en databas som matchar över 3000 yrken med rätt a-kassa,
                            så att du slipper gissa. Vi är helt oberoende och arbetar för att du ska få bästa möjliga beslutsunderlag.
                        </p>
                        <h3 className="text-xl font-semibold text-slate-900 mt-8">
                            Varför använda oss?
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-slate-600">
                            <li><strong>Helt gratis:</strong> Vår tjänst kostar ingenting för dig som användare.</li>
                            <li><strong>Oberoende:</strong> Vi är inte knutna till någon specifik fackförening eller a-kassa.</li>
                            <li><strong>Täckande:</strong> Vi listar alla Sveriges a-kassor.</li>
                        </ul>
                    </div>
                    <div className="relative h-96 lg:h-full min-h-[400px] overflow-hidden rounded-2xl shadow-xl">
                        <Image
                            src="/images/about-team.jpg"
                            alt="Människor som samtalar utomhus"
                            fill
                            className="object-cover object-center hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>

                {/* Team / Values Section could go here if requested, keeping it focused for now */}
            </div>

            {/* Contact Section */}
            <div className="bg-slate-50 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Kontakta oss</h2>
                        <p className="mt-2 text-lg leading-8 text-slate-600">
                            Har du frågor om vår tjänst, hittat fel i informationen eller vill komma i kontakt med oss av andra skäl?
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
                        <h3 className="text-xl font-semibold leading-7 text-slate-900">Kontaktuppgifter</h3>
                        <dl className="mt-4 space-y-6 text-base leading-7 text-slate-600">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">E-post</span>
                                    <svg className="h-7 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </dt>
                                <dd>
                                    <a href="mailto:kontakt@valjaakassa.se" className="hover:text-slate-900">kontakt@valjaakassa.se</a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Adress</span>
                                    <svg className="h-7 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </dt>
                                <dd>
                                    Välja A-kassa
                                    <br />
                                    Box 123 45
                                    <br />
                                    111 22 Stockholm
                                </dd>
                            </div>
                        </dl>
                        <div className="mt-8 border-t border-slate-100 pt-8">
                            <p className="text-sm text-slate-500">
                                Vi svarar oftast inom 24 timmar på helgfria vardagar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
