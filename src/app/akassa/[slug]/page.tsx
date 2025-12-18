import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { akassor, yrken } from "@/data/database";
import { akassor as logoData } from "@/data/akassor";
import Link from "next/link";
import Image from "next/image";
import ExpandableYrkenList from "@/components/ExpandableYrkenList";

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const akassa = akassor.find((a) => a.slug === params.slug) || akassor.find((a) => a.id === params.slug);

    if (!akassa) {
        return {
            title: "A-kassa hittades inte",
        };
    }

    return {
        title: `${akassa.name} – avgift, villkor och yrken 2026 | Välja A-kassa`,
        description: `Ta reda på om ${akassa.name} är rätt a-kassa för dig. Avgift, medlemskrav och vilka yrken som omfattas 2026.`,
    };
}

export function generateStaticParams() {
    return akassor.map((akassa) => ({
        slug: akassa.slug,
    }));
}

export default function AkassaPage({ params }: Props) {
    let akassa = akassor.find((a) => a.slug === params.slug);

    if (!akassa) {
        // Try finding by ID (short slug) for backward compatibility
        const byId = akassor.find((a) => a.id === params.slug);
        if (byId) {
            redirect(`/akassa/${byId.slug}`);
        }
        notFound();
    }

    // Find related professions
    const relatedYrken = yrken.filter(
        (y) => y.recommendedAkassaId === akassa.id
    );

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* Header */}
                {/* Hero Header */}
                <div className="relative bg-[#0B1B3F] text-white overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0 opacity-20">
                        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                            <Image
                                src="/assets/images/hero-akassor.png"
                                alt="A-kassa Hero"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    <div className="relative z-10 px-8 py-12 sm:py-16">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                            {(() => {
                                const logoInfo = logoData.find((l) => l.slug === akassa.id);
                                const logoUrl = logoInfo?.logo;

                                if (logoUrl) {
                                    return (
                                        <div className="relative w-24 h-24 bg-white rounded-xl shadow-lg flex-shrink-0 p-2">
                                            <Image
                                                src={logoUrl}
                                                alt={`${akassa.name} logotyp`}
                                                fill
                                                className="object-contain p-2"
                                                sizes="96px"
                                            />
                                        </div>
                                    );
                                }
                                return null;
                            })()}
                            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                                {akassa.name} – avgift, villkor och vilka yrken som passar 2026
                            </h1>
                        </div>
                        <p className="text-blue-100 text-lg max-w-2xl mb-8 leading-relaxed">
                            {akassa.name} är en a-kassa för{" "}
                            {akassa.primaryIndustries.join(", ")}. Här går vi igenom
                            medlemskrav, avgifter och vilka yrken som brukar ha nytta av att gå
                            med i just {akassa.name}.
                        </p>
                        <div>
                            <a
                                href={akassa.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                            >
                                Se om {akassa.name} passar dig
                            </a>
                        </div>
                    </div>
                </div>

                <div className="p-8 sm:p-12 space-y-12">
                    {/* Quick Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-gray-100 pb-12">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Kontakt</h2>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    <span className="font-medium w-24 shrink-0">Hemsida:</span>
                                    <a
                                        href={akassa.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline break-all"
                                    >
                                        {akassa.website}
                                    </a>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-medium w-24 shrink-0">Telefon:</span>
                                    <span>{akassa.phone || "Saknas"}</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-medium w-24 shrink-0">E-post:</span>
                                    <span>{akassa.email || "Saknas"}</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">
                                Medlemskap & Avgift
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Medlemsavgiften i {akassa.name} är{" "}
                                <span className="font-semibold text-gray-900">
                                    {akassa.membershipFee}
                                </span>
                                . Avgiften kan ändras över tid, men nivån ligger normalt i linje
                                med andra a-kassor inom {akassa.primaryIndustries[0]}.
                            </p>
                        </div>
                    </div>

                    {/* Typical Jobs */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Typiska yrken för {akassa.name}
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Typiska yrken som ofta är medlemmar i {akassa.name} är{" "}
                            {akassa.exampleJobs.join(", ")}. Om du arbetar som{" "}
                            {akassa.exampleJobs[0]} eller inom liknande roll kan det vara värt
                            att se närmare på denna a-kassa.
                        </p>
                        <div className="bg-blue-50 rounded-xl p-6">
                            <p className="text-blue-800 font-medium mb-4">
                                Jobbar du som någon av dessa eller inom ett liknande område? Då
                                är chansen stor att {akassa.name} är rätt a-kassa för dig.
                            </p>
                            {relatedYrken.length > 0 && (
                                <ExpandableYrkenList yrken={relatedYrken} initialCount={10} />
                            )}
                        </div>
                    </section>

                    {/* SEO Content (Simulated) */}
                    <section className="prose prose-blue max-w-none">
                        <h2>Om {akassa.name}</h2>
                        <p>
                            {akassa.name} är en specialiserad a-kassa som vänder sig till dig
                            som arbetar inom {akassa.primaryIndustries.join(", ")}. Genom att
                            samla medlemmar från liknande branscher kan de erbjuda en
                            service och kunskap som är skräddarsydd för just din
                            arbetssituation.
                        </p>
                        <h3>Varför välja {akassa.name}?</h3>
                        <p>
                            Att välja rätt a-kassa handlar om trygghet. {akassa.name} har
                            lång erfarenhet av villkoren för {akassa.exampleJobs[0]} och
                            andra yrkesgrupper inom deras verksamhetsområde. De förstår de
                            specifika utmaningar och möjligheter som finns på din
                            arbetsmarknad.
                        </p>
                        <h3>Ansökan och medlemskap</h3>
                        <p>
                            Att bli medlem är enkelt och görs oftast direkt via deras hemsida.
                            Grundkravet är att du arbetar eller har arbetat inom deras
                            verksamhetsområde. Avgiften på {akassa.membershipFee} ger dig
                            tillgång till inkomstbaserad ersättning om du skulle bli
                            arbetslös, förutsatt att du uppfyller arbetsvillkoret.
                        </p>
                    </section>

                    {/* FAQ */}
                    <section className="border-t border-gray-100 pt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">
                            Vanliga frågor om {akassa.name}
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Är {akassa.name} rätt a-kassa för mig om jag jobbar som{" "}
                                    {akassa.exampleJobs[0]}?
                                </h3>
                                <p className="text-gray-600">
                                    Ja, {akassa.name} är specifikt inriktad mot bland annat{" "}
                                    {akassa.exampleJobs[0]} och är därför ett mycket bra val. De
                                    har god kännedom om branschen.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Vilka medlemskrav har {akassa.name}?
                                </h3>
                                <p className="text-gray-600">
                                    Huvudregeln är att du ska arbeta inom deras verksamhetsområde
                                    ({akassa.primaryIndustries[0]}). Vissa a-kassor accepterar
                                    även studenter eller företagare inom branschen.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Hur mycket kostar {akassa.name} 2026?
                                </h3>
                                <p className="text-gray-600">
                                    Just nu är medlemsavgiften {akassa.membershipFee}. Kontrollera
                                    alltid på deras hemsida för den absolut senaste informationen.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
