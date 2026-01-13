import { Metadata } from "next";
import { notFound } from "next/navigation";
import { yrken, akassor } from "@/data/database";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, HelpCircle, Briefcase, RefreshCw, ArrowRight, ShieldCheck, Info } from "lucide-react";

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
        title: `A-kassa för ${yrke.name} 2026 – vilken ska du välja?`,
        description: `Se vilken a-kassa som passar ${yrke.name}. Jämför alternativ, läs tips och byt a-kassa utan glapp. Gratis oberoende guide för 2026.`,
        alternates: {
            canonical: `/yrken/${yrke.slug}`,
        },
        openGraph: {
            title: `A-kassa för ${yrke.name} 2026 – vilken ska du välja?`,
            description: `Se vilken a-kassa som passar ${yrke.name}. Jämför alternativ, läs tips och byt a-kassa utan glapp. Gratis guide.`,
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
        return notFound();
    }

    // Related professions - same category or just next ones
    const relatedYrken = yrken
        .filter(y => y.slug !== yrke.slug)
        .slice(0, 6);

    const faqs = [
        {
            q: `Vilken a-kassa passar ${yrke.name}?`,
            a: `Den a-kassa som oftast rekommenderas för ${yrke.name} är ${akassa.name}. Detta beror på att de har stor erfarenhet av branschen och organiserar många som arbetar inom liknande områden. Du kan dock välja en annan kassa om du uppfyller deras medlemsvillkor.`
        },
        {
            q: "Can jag byta a-kassa om jag byter jobb?",
            a: "Ja, det är absolut möjligt att byta a-kassa. Om du byter jobb till en helt annan bransch kan det vara klokt att se över om en annan kassa passar bättre. Kom ihåg att göra bytet utan glapp för att behålla din intjänade medlemstid."
        },
        {
            q: "Behöver jag vara med i facket också?",
            a: "Det är frivilligt att vara med i både facket och a-kassan. A-kassan ger dig den grundläggande ekonomiska tryggheten, medan facket kan erbjuda juridisk hjälp, lönerådgivning och ofta en kompletterande inkomstförsäkring som ger mer pengar om du tjänar över a-kassans tak."
        },
        {
            q: "Vad gäller om jag jobbar deltid?",
            a: "Som deltidsarbetande har du samma rätt till a-kassa som heltidsanställda, förutsatt att du uppfyller arbetsvillkor och medlemsvillkor. Ersättningen baseras då på din genomsnittliga arbetstid och inkomst före arbetslösheten."
        },
        {
            q: "Vad gäller om jag är timanställd?",
            a: "Även timanställda kan vara med i a-kassan. Din rätt till ersättning beräknas på hur mycket du har arbetat totalt under det senaste året. Var noga med att spara dina arbetsgivarintyg som visar exakt hur många timmar du jobbat."
        }
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-[#0B1B3F] py-20 sm:py-24">
                <div className="absolute inset-0 -z-10 h-full w-full">
                    <Image
                        src="/assets/images/hero-yrken.png"
                        alt="Hero background"
                        fill
                        className="object-cover object-center opacity-20"
                        priority
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                        A-kassa för {yrke.name} 2026 – vilken ska du välja?
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-blue-100 max-w-3xl mx-auto">
                        Om du jobbar som {yrke.name} är det viktigt att vara med i en a-kassa som passar din bransch och din typ av anställning. Här visar vi vilken a-kassa som oftast är mest relevant för yrket, vilka alternativ som kan fungera och vad du ska tänka på om du byter. Målet är att du ska kunna välja tryggt och enkelt – utan att behöva läsa igenom massor av regler.
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 -mt-10 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Recommendation Box */}
                        <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-green-100 rounded-full">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Rekommenderad a-kassa för {yrke.name}</h2>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8">
                                <div className="text-3xl font-black text-blue-600 mb-2">{akassa.name}</div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {akassa.primaryIndustries.slice(0, 3).map(ind => (
                                        <span key={ind} className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">
                                            {ind}
                                        </span>
                                    ))}
                                </div>
                                <ul className="space-y-2 text-slate-700 font-medium">
                                    <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-blue-500" /> Specialistkunskap inom din bransch</li>
                                    <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-blue-500" /> Smidig digital ansökan</li>
                                    <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-blue-500" /> Trygg hantering av din personinformation</li>
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={akassa.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg"
                                >
                                    Gå med i {akassa.name}
                                </a>
                                <Link
                                    href={`/akassa/${akassa.slug}`}
                                    className="bg-white text-slate-700 border border-slate-300 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all font-sans"
                                >
                                    Läs recension
                                </Link>
                            </div>
                        </section>

                        {/* Why this akassa */}
                        <section className="prose prose-lg prose-blue max-w-none bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-100 text-slate-600">
                            <h2 className="text-slate-900">Varför passar {akassa.name} för {yrke.name}?</h2>
                            <p>
                                Att välja {akassa.name} när man arbetar som {yrke.name} är ett val som ger trygghet eftersom kassan har djup förståelse för de specifika villkor som råder inom din sektor. Vanliga arbetsgivare för en {yrke.name} kan vara allt från kommuner och regioner till privata företag, och oavsett var du är anställd behöver din a-kassa kunna hantera dina inkomstuppgifter korrekt.
                            </p>
                            <p>
                                Kopplingen mellan yrket {yrke.name} och {akassa.name} bygger på att kassan organiserar en stor del av yrkeskåren, vilket innebär att deras handläggare vet precis vilka intyg och underlag som krävs vid en eventuell arbetslöshet. Detta kan korta ner väntetiderna och säkerställa att du får rätt ersättning från första dagen. Oavsett om du har en fast anställning, jobbar på timmar eller har ett vikariat, så är en branschinriktad kassa ofta det tryggaste valet.
                            </p>

                            <h2 className="text-slate-900">Vad kostar a-kassa för {yrke.name}?</h2>
                            <p>
                                Medlemsavgiften för att vara med i {akassa.name} varierar, men ligger generellt sett på en nivå som motsvarar en mycket billig försäkring för din lön. Det är viktigt att komma ihåg att kostnaden inte bör vara den enda faktorn när du väljer. Att a-kassan har rätt kompetens för att bedöma din rätt till ersättning som {yrke.name} är minst lika viktigt för din långsiktiga trygghet.
                            </p>
                            <p>
                                En del väljer en a-kassa enbart baserat på priset, men för en {yrke.name} kan det löna sig att välja en kassa som har kollektivavtalskännedom och bra samarbete med de fackförbund som finns inom din bransch. På så sätt får du en helhet i ditt försäkringsskydd som täcker både den lagstadgade delen och eventuella tilläggsförsäkringar.
                            </p>

                            <h2 className="text-slate-900">Om du vill byta a-kassa</h2>
                            <p>
                                Du kan byta a-kassa när som helst under året. Många väljer att byta om de får ett nytt jobb som {yrke.name} men tidigare har tillhört en kassa för en helt annan bransch. Det viktigaste vid ett byte är att du aldrig får ha ett glapp mellan medlemskapen. Ansök alltid om medlemskap i den nya kassan innan du säger upp ditt gamla.
                            </p>
                            <p>
                                Att undvika glapp är avgörande eftersom din rätt till inkomstbaserad ersättning bygger på att du har varit medlem i en a-kassa under de senaste 12 månaderna utan avbrott. Om du byter smidigt flyttas din medlemstid med dig till den nya kassan, och du behåller ditt intjänade skydd. Vi rekommenderar att du kontaktar den nya a-kassan för att få hjälp med att sköta övergången så säkert som möjligt.
                            </p>
                        </section>

                        {/* FAQ */}
                        <section className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <HelpCircle className="w-8 h-8 text-blue-600" />
                                Vanliga frågor om a-kassa för {yrke.name}
                            </h2>
                            <div className="space-y-6">
                                {faqs.map((faq, i) => (
                                    <div key={i} className="border-b border-slate-100 pb-6 last:border-0">
                                        <h3 className="font-bold text-lg text-slate-900 mb-2">{faq.q}</h3>
                                        <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        {/* Summary Info */}
                        <div className="bg-slate-900 text-white rounded-3xl p-8 sticky top-24">
                            <ShieldCheck className="w-10 h-10 text-green-400 mb-6" />
                            <h3 className="text-xl font-bold mb-4">Snabbfakta: {yrke.name}</h3>
                            <div className="space-y-4 text-sm text-slate-300">
                                <div className="border-b border-white/10 pb-2">
                                    <span className="block text-slate-500 uppercase text-[10px] font-bold tracking-widest">Primär a-kassa</span>
                                    {akassa.name}
                                </div>
                                <div className="border-b border-white/10 pb-2">
                                    <span className="block text-slate-500 uppercase text-[10px] font-bold tracking-widest">Typ av anställning</span>
                                    Fast, vikariat, timmar
                                </div>
                                <div>
                                    <span className="block text-slate-500 uppercase text-[10px] font-bold tracking-widest">Status 2026</span>
                                    Uppdaterad och aktiv
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10">
                                <h4 className="font-bold text-sm mb-4">Relaterade yrken</h4>
                                <div className="flex flex-col gap-2">
                                    {relatedYrken.map(y => (
                                        <Link key={y.slug} href={`/yrken/${y.slug}`} className="text-sm text-blue-400 hover:text-white transition-colors">
                                            {y.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10">
                                <h4 className="font-bold text-sm mb-4">Relaterade guider</h4>
                                <div className="flex flex-col gap-2">
                                    <Link href={`/yrken/${yrke.slug}/checklista`} className="text-sm text-blue-400 font-bold hover:text-white underline decoration-blue-400/30 underline-offset-4">Checklista för {yrke.name}</Link>
                                    <Link href="/byta-a-kassa" className="text-sm text-slate-400 hover:text-white">Byta a-kassa</Link>
                                    <Link href="/inkomstforsakring" className="text-sm text-slate-400 hover:text-white">Inkomstförsäkring</Link>
                                    <Link href="/akassa-regler" className="text-sm text-slate-400 hover:text-white">A-kassa regler</Link>
                                    <Link href="/aktivitetsstod" className="text-sm text-slate-400 hover:text-white">Ersättning & karens</Link>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
