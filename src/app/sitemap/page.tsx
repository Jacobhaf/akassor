import Link from "next/link";
import { Metadata } from "next";
import { yrken, akassor } from "@/data/database";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
    title: "Sidkarta | Välja A-kassa",
    description: "Översikt över alla sidor på Välja A-kassa.",
};

export default function SitemapPage() {
    return (
        <div className="bg-white py-12 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 mb-12">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Sidkarta
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        En komplett översikt över allt innehåll på Välja A-kassa.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Huvudsidor */}
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">Huvudsidor</h2>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-gray-600 hover:text-blue-600 hover:underline">Hem</Link></li>
                            <li><Link href="/jamfor" className="text-gray-600 hover:text-blue-600 hover:underline">Jämför a-kassa</Link></li>
                            <li><Link href="/akassor" className="text-gray-600 hover:text-blue-600 hover:underline">Alla a-kassor</Link></li>
                            <li><Link href="/yrken" className="text-gray-600 hover:text-blue-600 hover:underline">Alla yrken</Link></li>
                            <li><Link href="/inkomstforsakring" className="text-gray-600 hover:text-blue-600 hover:underline">Inkomstförsäkring</Link></li>
                            <li><Link href="/aktivitetsstod" className="text-gray-600 hover:text-blue-600 hover:underline">Aktivitetsstöd & Karens</Link></li>
                            <li><Link href="/akassa-egenforetagare" className="text-gray-600 hover:text-blue-600 hover:underline">A-kassa för egenföretagare</Link></li>
                            <li><Link href="/vanliga-fragor" className="text-gray-600 hover:text-blue-600 hover:underline">Vanliga frågor</Link></li>
                            <li><Link href="/akassa-regler" className="text-gray-600 hover:text-blue-600 hover:underline">A-kassa regler</Link></li>
                            <li><Link href="/byta-a-kassa" className="text-gray-600 hover:text-blue-600 hover:underline">Byta a-kassa</Link></li>
                            <li><Link href="/ga-ur-a-kassa" className="text-gray-600 hover:text-blue-600 hover:underline">Gå ur a-kassa</Link></li>
                            <li><Link href="/ordlista" className="text-gray-600 hover:text-blue-600 hover:underline">Ordlista</Link></li>
                            <li><Link href="/friskvardsbidrag" className="text-gray-600 hover:text-blue-600 hover:underline">Friskvårdsbidrag</Link></li>
                            <li><Link href="/artiklar" className="text-gray-600 hover:text-blue-600 hover:underline">Artiklar</Link></li>
                        </ul>
                    </div>

                    {/* Verktyg */}
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">Verktyg</h2>
                        <ul className="space-y-3">
                            <li><Link href="/hur-bra-ar-mitt-cv" className="text-gray-600 hover:text-blue-600 hover:underline">Hur bra är mitt CV?</Link></li>
                            <li><Link href="/verktyg/cv-byggare" className="text-gray-600 hover:text-blue-600 hover:underline">AI CV-Byggare</Link></li>
                        </ul>
                        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-6 border-b pb-2">Om oss</h2>
                        <ul className="space-y-3">
                            <li><Link href="/om-oss" className="text-gray-600 hover:text-blue-600 hover:underline">Om oss</Link></li>
                            <li><Link href="/kontakt" className="text-gray-600 hover:text-blue-600 hover:underline">Kontakt</Link></li>
                            <li><Link href="/integritetspolicy" className="text-gray-600 hover:text-blue-600 hover:underline">Integritetspolicy</Link></li>
                            <li><Link href="/cookies" className="text-gray-600 hover:text-blue-600 hover:underline">Cookies</Link></li>
                        </ul>
                    </div>

                    {/* Artiklar */}
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">Artiklar</h2>
                        <ul className="space-y-3">
                            {articles.map((article) => (
                                <li key={article.slug}>
                                    <Link href={`/artiklar/${article.slug}`} className="text-gray-600 hover:text-blue-600 hover:underline">
                                        {article.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* A-kassor */}
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">A-kassor</h2>
                        <ul className="space-y-4">
                            {akassor.map((akassa) => (
                                <li key={akassa.slug} className="flex flex-col gap-1">
                                    <Link href={`/akassa/${akassa.slug}`} className="font-medium text-gray-900 hover:text-blue-600 hover:underline">
                                        {akassa.name}
                                    </Link>
                                    <Link href={`/akassa/${akassa.slug}/ga-ur-a-kassa`} className="text-sm text-gray-500 hover:text-blue-600 hover:underline">
                                        Gå ur {akassa.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Yrken och Checklistor */}
                    <div className="lg:col-span-3">
                        <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">Yrken & Checklistor</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {yrken.map((yrke) => (
                                <div key={yrke.slug} className="mb-4">
                                    <Link
                                        href={`/yrken/${yrke.slug}`}
                                        className="font-medium text-gray-900 hover:text-blue-600 hover:underline block mb-1"
                                    >
                                        {yrke.name}
                                    </Link>
                                    <Link
                                        href={`/yrken/${yrke.slug}/checklista`}
                                        className="text-sm text-gray-500 hover:text-blue-600 hover:underline flex items-center gap-1"
                                    >
                                        <span className="text-xs">📋</span> Checklista
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
