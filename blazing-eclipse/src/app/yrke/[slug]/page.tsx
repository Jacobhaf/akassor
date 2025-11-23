import { Metadata } from "next";
import { notFound } from "next/navigation";
import { yrken, akassor } from "@/data/database";
import Link from "next/link";

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
        title: `${yrke.name} a-kassa – vilken a-kassa ska jag välja 2025?`,
        description: `Jobbar du som ${yrke.name}? Här ser du vilken a-kassa som rekommenderas samt lön för ${yrke.name} 2025.`,
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
                <div className="bg-green-700 px-8 py-10 text-white">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                        {yrke.name} a-kassa – vilken a-kassa ska jag välja 2025?
                    </h1>
                    <p className="text-green-100 text-lg max-w-2xl">
                        Jobbar du som {yrke.name} och undrar vilken a-kassa du ska välja?
                        Här går vi igenom vilken a-kassa som rekommenderas för {yrke.name}{" "}
                        och varför, hur ersättningen fungerar och ungefär vad en {yrke.name}{" "}
                        tjänar 2025.
                    </p>
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
