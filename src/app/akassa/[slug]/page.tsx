import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { akassor, yrken } from "@/data/database";
import { akassor as logoData } from "@/data/akassor";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, HelpCircle, Briefcase, RefreshCw, ArrowRight, ShieldCheck, Info, ExternalLink } from "lucide-react";

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
        title: `${akassa.name} 2026 – avgift, villkor och yrken | Välja A-kassa`,
        description: `Läs om ${akassa.name}, vem den passar för och hur medlemskap fungerar. Jämför avgifter och få tips för att byta utan glapp för 2026.`,
    };
}

export function generateStaticParams() {
    return akassor.map((akassa) => ({
        slug: akassa.slug,
    }));
}

export default function AkassaPage({ params }: Props) {
    const akassa = akassor.find((a) => a.slug === params.slug);

    if (!akassa) {
        const byId = akassor.find((a) => a.id === params.slug);
        if (byId) {
            redirect(`/akassa/${byId.slug}`);
        }
        notFound();
    }

    const relatedYrken = yrken.filter(
        (y) => y.recommendedAkassaId === akassa.id
    ).slice(0, 12);

    const alternatives = akassor
        .filter(a => a.id !== akassa.id && a.primaryIndustries.some(ind => akassa.primaryIndustries.includes(ind)))
        .slice(0, 3);

    const faqs = [
        {
            q: `Vem kan bli medlem i ${akassa.name}?`,
            a: `Du kan bli medlem i ${akassa.name} om du arbetar eller har din senast avslutade anställning inom deras verksamhetsområde: ${akassa.primaryIndustries.join(", ")}. Vissa a-kassor accepterar även studenter och företagare.`
        },
        {
            q: `Hur lång tid tar det att bli medlem?`,
            a: `Själva ansökan tar bara några minuter att fylla i online. Handläggningstiden för att bekräfta ditt medlemskap varierar men du brukar få besked inom några dagar. Ditt medlemskap räknas från den första dagen i den månad ansökan kommer in.`
        },
        {
            q: `Kan jag vara med om jag studerar?`,
            a: `Många a-kassor, inklusive ${akassa.name}, tillåter medlemskap för studenter om studierna syftar till arbete inom deras område eller om du jobbar extra vid sidan av studierna. Kontrollera alltid de exakta reglerna på deras hemsida.`
        },
        {
            q: `Kan jag vara med i ${akassa.name} som egenföretagare?`,
            a: `Om ${akassa.name} täcker branschen du är verksam i som företagare kan du i de flesta fall bli medlem. De har särskilda regler för hur din ersättning beräknas baserat på företagets resultat.`
        },
        {
            q: `Vad händer om jag byter jobb?`,
            a: `Om du byter jobb men stannar kvar inom samma bransch kan du oftast vara kvar i samma a-kassa. Om du däremot byter till en helt annan bransch kan det vara läge att byta a-kassa till en som passar ditt nya område bättre.`
        },
        {
            q: `Behöver jag vara med i facket också?`,
            a: `Nej, det är frivilligt. A-kassan ger det lagstadgade inkomstskyddet. Fackmedlemskap ger dock ofta extra förmåner som inkomstförsäkring, juridisk hjälp vid tvister med arbetsgivaren och karriärstöd.`
        }
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-[#0B1B3F] py-20 sm:py-24">
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
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                        {(() => {
                            const logoInfo = logoData.find((l) => l.slug === akassa.id);
                            const logoUrl = logoInfo?.logo;
                            if (logoUrl) {
                                return (
                                    <div className="relative w-32 h-32 bg-white rounded-3xl shadow-2xl flex-shrink-0 p-4 border border-white/20">
                                        <Image src={logoUrl} alt={`${akassa.name} logotyp`} fill className="object-contain p-4" sizes="128px" />
                                    </div>
                                );
                            }
                            return null;
                        })()}
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-4">
                                {akassa.name} – avgift, villkor och vilka yrken den passar (2026)
                            </h1>
                            <p className="text-xl leading-8 text-blue-100 max-w-2xl font-medium">
                                {akassa.name} är en a-kassa som riktar sig till dig som arbetar inom {akassa.primaryIndustries.join(", ")}. Här får du en snabb överblick över vem den passar för, vad du bör tänka på innan du går med och hur du kan jämföra med andra alternativ. Målet är att du ska kunna fatta ett tryggt beslut och välja den a-kassa som passar din situation bäst.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 -mt-10 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Summary Info */}
                        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 prose prose-lg prose-blue max-w-none text-slate-600">
                            <h2 className="text-slate-900">Vem passar {akassa.name} för?</h2>
                            <p>
                                {akassa.name} är primärt utformad för personer verksamma inom yrken som {akassa.exampleJobs.slice(0, 3).join(", ")}. Valet av a-kassa beror oftast på vilken bransch du tillhör, och {akassa.name} har de system och den branschkunskap som krävs för att snabbt kunna hantera din ansökan korrekt. Oavsett om du arbetar inom den privata sektorn eller inom kommun och region, kan denna kassa erbjuda ett tryggt skydd.
                            </p>
                            <p>
                                Medlemmarna i {akassa.name} utmärker sig ofta genom att de har liknande utbildningsbakgrund eller yrkesroller. Det gör att handläggarna har god kännedom om vanliga anställningsformer och avtal inom området. Kom ihåg att du alltid kan läsa de exakta medlemsvillkoren på deras egen webbplats för att vara helt säker på att din specifika roll omfattas.
                            </p>

                            <h2 className="text-slate-900">Avgift och medlemskap</h2>
                            <p>
                                Medlemsavgiften i {akassa.name} är för närvarande {akassa.membershipFee}. Denna avgift används för att finansiera administrationskostnader och en stor del av den faktiska arbetslöshetsersättningen. Det är viktigt att förstå att även om avgiften är en faktor i ditt val, är tryggheten i att ha en stabil kassa som förstår ditt yrke ofta värd mer i längden.
                            </p>
                            <p>
                                Som medlem har du tillgång till ekonomiskt stöd vid arbetslöshet enligt de lagar som reglerar den svenska arbetslöshetsförsäkringen. Tänk på att medlemsavgiften kan justeras över tid beroende på arbetsmarknadsläget, och det är alltid bra att regelbundet se över att man har rätt försäkringsskydd.
                            </p>
                        </section>

                        {/* How to join */}
                        <section className="bg-blue-600 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <ExternalLink className="w-32 h-32" />
                            </div>
                            <h2 className="text-3xl font-bold mb-8 relative z-10">Så går du med i {akassa.name}</h2>
                            <div className="space-y-6 relative z-10">
                                {[
                                    `Kontrollera att den passar ditt yrke (${akassa.primaryIndustries[0]})`,
                                    "Gå till ansökningssidan på deras hemsida",
                                    "Fyll i dina person- och anställningsuppgifter digitalt",
                                    "Om du byter kassa – ansök till denna innan du lämnar din gamla",
                                    "Spara din bekräftelse på medlemskapet"
                                ].map((step, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                                        <span className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold">{i + 1}</span>
                                        <span className="font-medium">{step}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-12">
                                <a href={akassa.website} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all shadow-2xl">
                                    Ansök direkt här <ExternalLink className="inline ml-2 w-5 h-5" />
                                </a>
                            </div>
                        </section>

                        {/* Change Akassa */}
                        <section className="bg-slate-100 rounded-3xl p-8 sm:p-12 border border-slate-200 prose prose-lg prose-slate max-w-none text-slate-700">
                            <h2 className="text-slate-900">Byta till {akassa.name} – så undviker du glapp</h2>
                            <p>
                                Funderar du på att byta från din nuvarande a-kassa till {akassa.name}? Det är en enkel process, men det kräver lite planering för att du ska behålla din intjänade medlemstid. Om du har ett glapp på bara en dag mellan två medlemskap räknas din tid hos din gamla kassa inte längre, vilket kan påverka din ersättningsnivå.
                            </p>
                            <p>
                                Det säkraste sättet är att först ansöka om medlemskap i {akassa.name}. När du har blivit godkänd och fått ett startdatum kan du avsluta ditt gamla medlemskap på ett sådant sätt att det ena tar vid där det andra slutar. Vi har en komplett guide som förklarar exakt hur du ska gå tillväga för att <Link href="/byta-a-kassa" className="text-blue-600 font-bold underline">byta a-kassa smidigt</Link>.
                            </p>
                        </section>

                        {/* FAQ */}
                        <section className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <HelpCircle className="w-8 h-8 text-blue-600" />
                                Vanliga frågor om {akassa.name}
                            </h2>
                            <div className="grid md:grid-cols-1 gap-6">
                                {faqs.map((faq, i) => (
                                    <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 sticky top-24">
                            <h3 className="text-lg font-bold mb-6 text-slate-900">Passar dessa yrken:</h3>
                            <div className="flex flex-col gap-3">
                                {relatedYrken.map(y => (
                                    <Link key={y.slug} href={`/yrken/${y.slug}`} className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl hover:bg-blue-50 transition-all group">
                                        <Briefcase className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700">{y.name}</span>
                                    </Link>
                                ))}
                            </div>

                            {alternatives.length > 0 && (
                                <div className="mt-10 pt-10 border-t border-slate-100">
                                    <h3 className="text-lg font-bold mb-6 text-slate-900">Alternativa kassor:</h3>
                                    <div className="space-y-4">
                                        {alternatives.map(a => (
                                            <Link key={a.slug} href={`/akassa/${a.slug}`} className="block group">
                                                <div className="font-bold text-slate-800 group-hover:text-blue-600">{a.name}</div>
                                                <div className="text-xs text-slate-500 line-clamp-1 italic">Passar också yrken inom {a.primaryIndustries[0].toLowerCase()}.</div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="mt-10 pt-10 border-t border-slate-100">
                                <Link href="/byta-a-kassa" className="flex items-center gap-2 text-blue-600 font-bold text-sm hover:underline">
                                    <RefreshCw className="w-4 h-4" /> Så byter du till {akassa.name}
                                </Link>
                                <Link href={`/akassa/${akassa.slug}/ga-ur-a-kassa`} className="flex items-center gap-2 text-slate-500 font-medium text-sm hover:text-red-600 transition-colors mt-4">
                                    <ArrowRight className="w-4 h-4" /> Gå ur {akassa.name}
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
