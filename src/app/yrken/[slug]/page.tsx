
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { yrken, akassor } from "@/data/database";
import { famousPeople } from "@/data/famousPeople";
import Link from "next/link";
import Image from "next/image";

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const yrke = yrken.find((y) => y.slug === params.slug);

    if (!yrke) {
        return {
            title: "Yrke hittades inte",
        };
    }

    return {
        title: `${yrke.name} a-kassa – Bästa val 2025 | Välja A-kassa`,
        description: `Jobbar du som ${yrke.name}? Här ser du vilken a-kassa som rekommenderas samt lön för ${yrke.name} 2025.`,
        alternates: {
            canonical: `/yrken/${yrke.slug}`,
        },
        openGraph: {
            title: `${yrke.name} a-kassa – Bästa val 2025 | Välja A-kassa`,
            description: `Jobbar du som ${yrke.name}? Här ser du vilken a-kassa som rekommenderas samt lön för ${yrke.name} 2025.`,
            url: `https://www.valjaakassa.se/yrken/${yrke.slug}`,
            images: [
                {
                    url: "/hero-poster.jpg",
                    width: 1200,
                    height: 630,
                    alt: `${yrke.name} a-kassa`,
                },
            ],
        },
    };
}

export function generateStaticParams() {
    return yrken.map((yrke) => ({
        slug: yrke.slug,
    }));
}

export default function YrkePage({ params }: Props) {
    const yrke = yrken.find((y) => y.slug === params.slug);

    if (!yrke) {
        notFound();
    }

    const akassa = akassor.find((a) => a.id === yrke.recommendedAkassaId);

    if (!akassa) {
        // Fallback if no specific akassa is found (shouldn't happen with valid data)
        return notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* Header */}
                {/* Hero Header */}
                <div className="relative bg-[#0B1B3F] text-white overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-20">
                        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                            <Image
                                src="/assets/images/hero-yrken.png"
                                alt="Profession Hero"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                    <div className="relative z-10 px-8 py-12 sm:py-16">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                            {yrke.name} a-kassa – vilken a-kassa ska jag välja 2025?
                        </h1>
                        <p className="text-blue-100 text-lg sm:text-xl max-w-2xl leading-relaxed mb-8">
                            Jobbar du som {yrke.name} och undrar vilken a-kassa du ska välja?
                            Här går vi igenom vilken a-kassa som rekommenderas för {yrke.name}{" "}
                            och varför, hur ersättningen fungerar och ungefär vad en {yrke.name}{" "}
                            tjänar 2025.
                        </p>
                        <div className="mt-8">
                            <Link
                                href={`/yrken/${yrke.slug}/checklista`}
                                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all transform hover:scale-105"
                            >
                                <span className="text-xl">📋</span> Se checklista för {yrke.name} →
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="p-8 sm:p-12 space-y-12">
                    {/* Recommendation Section */}
                    <section className="bg-green-50 rounded-xl p-8 border border-green-100">
                        <span className="inline-block px-3 py-1 bg-green-200 text-green-800 text-xs font-bold uppercase tracking-wide rounded-full mb-4">
                            Rekommenderad a-kassa
                        </span>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            För dig som arbetar som {yrke.name} rekommenderas oftast{" "}
                            {akassa.name}
                        </h2>
                        <p className="text-gray-700 mb-6">
                            Denna a-kassa är inriktad mot{" "}
                            {akassa.primaryIndustries.join(", ")} vilket stämmer väl överens
                            med arbetsmarknaden för {yrke.name}.
                        </p>

                        {akassa.relatedFack && (
                            <div className="mb-6 rounded-lg bg-green-100 p-4 text-green-800">
                                <h3 className="font-semibold mb-1">Fackförbund för {yrke.name}</h3>
                                <p className="text-sm">
                                    Många som är med i denna a-kassa är också med i fackförbundet <strong>{akassa.relatedFack}</strong>.
                                    Att vara med i facket kan ge extra inkomstförsäkring utöver a-kassan.
                                </p>
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href={`/akassa/${akassa.slug}`}
                                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800 transition-colors"
                            >
                                Läs mer om {akassa.name}
                            </Link>
                            <a
                                href={akassa.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex justify-center items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                            >
                                Gå till {akassa.name}s hemsida
                            </a>
                        </div>
                    </section>

                    {/* Short Answer */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">
                            Vilken a-kassa är bäst för {yrke.name}?
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Det korta svaret är att <strong>{akassa.name}</strong> i de flesta
                            fall är det naturliga valet för {yrke.name}.
                        </p>
                    </section>

                    {/* Salary Info (Simulated) */}
                    <section className="prose prose-green max-w-none">
                        <h2>Vad tjänar en {yrke.name} 2025?</h2>
                        <p>
                            Lönen för en {yrke.name} kan variera beroende på erfarenhet,
                            arbetsgivare och var i landet du arbetar. Generellt sett ligger
                            månadslönen ofta mellan <strong>25 000 och 45 000 kronor</strong>{" "}
                            i månaden. Faktorer som påverkar din lön är bland annat om du
                            arbetar inom privat eller offentlig sektor, samt om det finns
                            kollektivavtal på arbetsplatsen.
                        </p>

                        <h2>Vad gör en {yrke.name}?</h2>
                        <p>
                            Som {yrke.name} har du en viktig roll. Arbetsuppgifterna varierar
                            men innefattar ofta ansvar för specifika processer eller
                            människor. Det är ett yrke som kräver både kunskap och engagemang.
                        </p>
                        <p>
                            Vanliga arbetsgivare för en {yrke.name} kan vara kommuner, regioner
                            eller privata företag inom sektorn.
                        </p>

                        <h2>Mer om yrket och a-kassa</h2>
                        <p>
                            Att vara medlem i en a-kassa som {yrke.name} är en billig
                            försäkring för din inkomst. {akassa.name} har god insikt i din
                            bransch och kan ge råd och stöd om du skulle bli arbetslös.
                        </p>
                        <p>
                            För att gå med i a-kassan behöver du oftast bara fylla i en
                            ansökan på deras hemsida. Det tar bara några minuter och ger dig
                            en stor trygghet i arbetslivet.
                        </p>

                        {famousPeople[yrke.slug] && (
                            <>
                                <h3>Kända personer som arbetat som {yrke.name}</h3>
                                <ul>
                                    {famousPeople[yrke.slug].map((person, index) => (
                                        <li key={index}>
                                            <strong>{person.name}</strong> – {person.description}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </section>

                    {/* Related Resources */}
                    <section className="bg-blue-50 rounded-xl p-6 border border-blue-100 my-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Relaterade resurser</h2>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href={`/yrken/${yrke.slug}/checklista`}
                                    className="group flex items-center gap-3 text-blue-700 hover:text-blue-900 transition-colors"
                                >
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xl group-hover:bg-blue-200">
                                        📋
                                    </span>
                                    <span className="font-medium underline decoration-blue-300 underline-offset-4 group-hover:decoration-blue-900">
                                        Checklista: Så gör du om du blir arbetslös som {yrke.name}
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </section>

                    {/* FAQ */}
                    <section className="border-t border-gray-100 pt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">
                            Vanliga frågor för {yrke.name}
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Måste en {yrke.name} vara med i a-kassa?
                                </h3>
                                <p className="text-gray-600">
                                    Nej, det är inget lagkrav, men det rekommenderas starkt för
                                    att skydda din inkomst.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Vilken a-kassa ger bäst skydd för {yrke.name}?
                                </h3>
                                <p className="text-gray-600">
                                    {akassa.name} rekommenderas eftersom de organiserar många
                                    inom ditt yrkesområde. Ersättningsnivåerna är dock desamma i
                                    alla a-kassor (baserat på din lön och taket i försäkringen).
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Kan jag byta a-kassa om jag byter yrke från {yrke.name}?
                                </h3>
                                <p className="text-gray-600">
                                    Ja, om du byter bransch bör du se över om du ska byta a-kassa
                                    till en som bättre passar ditt nya yrke. Du får tillgodoräkna
                                    dig din tidigare medlemstid.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
