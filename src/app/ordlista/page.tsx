import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Book, Search, ArrowRight, HelpCircle, Info, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'A-kassa Ordlista & Begrepp 2026 – Allt från A till Ö',
    description:
        'Osäker på orden? Läs vår a-kassa ordlista för att förstå begrepp som arbetsvillkor, ramtid, karensdagar och inkomstförsäkring. Enkel guide till a-kassans språk.',
};

export default function AkassaGlossaryPage() {
    const terms = [
        {
            term: 'A-kassa',
            definition:
                'A-kassa är en förkortning av arbetslöshetskassa. Det är en organisation som betalar ut ersättning till medlemmar som blir arbetslösa, förutsatt att de uppfyller specifika villkor.',
        },
        {
            term: 'Arbetsvillkor',
            definition:
                'Ett krav på hur mycket du måste ha arbetat under en viss period (ramtid) innan du blev arbetslös för att ha rätt till ersättning. Vanligtvis krävs minst 6 månaders arbete med minst 80 timmar per månad.',
        },
        {
            term: 'Avstängning',
            definition:
                'Om du säger upp dig själv utan giltigt skäl eller missköter ditt arbetssökande kan du bli avstängd från rätten till ersättning under en viss period, ofta 45 dagar.',
        },
        {
            term: 'Dagpenning',
            definition:
                'Den summa pengar du får utbetald per dag från a-kassan. Dagpenningen baseras på din tidigare genomsnittliga inkomst.',
        },
        {
            term: 'Ersättningsperiod',
            definition:
                'Den period du kan få ersättning från a-kassan. En ersättningsperiod består oftast av 300 dagar (fem dagar per vecka). Föräldrar med barn under 18 år kan få ytterligare 150 dagar.',
        },
        {
            term: 'Grundbelopp',
            definition:
                'En lägre ersättningsnivå för dig som uppfyller arbetsvillkoret men inte har varit medlem i en a-kassa tillräckligt länge (oftast 12 månader) för att få inkomstbaserad ersättning.',
        },
        {
            term: 'Inkomstbaserad ersättning',
            definition:
                'Ersättning som baseras på din tidigare lön, upp till ett tak. Kräver att du varit medlem i a-kassan i minst 12 månader och uppfyller arbetsvillkoret.',
        },
        {
            term: 'Inkomstförsäkring',
            definition:
                'En tilläggsförsäkring som kan ge dig högre ersättning än enbart a-kassa. Oftast täcker den lön över a-kassans tak, så att du kan få upp till 80% av hela din tidigare lön.',
            link: { text: 'Läs mer om inkomstförsäkring', url: '/inkomstforsakring' },
        },
        {
            term: 'Karensdagar',
            definition:
                'De första dagarna av din arbetslöshet då du inte får någon ersättning. Just nu är karensen oftast 6 dagar, men det dras som ett avdrag på den första utbetalningen istället för väntedagar.',
        },
        {
            term: 'Kassakort',
            definition:
                'Den tidrapport du fyller i (oftast digitalt) för att redovisa din aktivitet, sjukdom eller arbete till a-kassan så att de kan betala ut rätt ersättning.',
        },
        {
            term: 'Medlemsvillkor',
            definition:
                'Kravet på att du ska ha varit medlem i a-kassan en viss tid (oftast 12 månader) för att få full, inkomstbaserad ersättning.',
        },
        {
            term: 'Ramtid',
            definition:
                'Den period (oftast 12 månader) bakåt i tiden som a-kassan granskar för att se om du uppfyller arbetsvillkoret. Tid som inte räknas med, t.ex. sjukdom eller studier, kallas överhoppningsbar tid.',
        },
        {
            term: 'Tak i a-kassan',
            definition:
                'Den högsta inkomst som a-kassan baserar sin ersättning på. Om du tjänar mer än taket får du inte ersättning för den överskjutande delen, om du inte har en inkomstförsäkring.',
        },
        {
            term: 'Överhoppningsbar tid',
            definition:
                'Tid som inte räknas in i ramtiden, exempelvis heltidsstudier, föräldraledighet eller sjukdom. Det gör att a-kassan kan titta längre tillbaka i tiden för att hitta ditt arbetsvillkor.',
        },
    ];

    const faqs = [
        {
            q: "Vad är skillnaden på a-kassa och fackförbund?",
            a: "A-kassan är en ekonomisk försäkring vid arbetslöshet. Fackförbundet är en organisation som arbetar med dina rättigheter på arbetsplatsen, löneförhandlingar och kan erbjuda inkomstförsäkring som tillägg."
        },
        {
            q: "Behöver jag förstå alla dessa begrepp?",
            a: "Det underlättar när du ska kommunicera med a-kassan eller läsa ditt beslut om ersättning. De viktigaste att ha koll på är Arbetsvillkor och Karensdagar."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.a
            }
        }))
    };

    return (
        <main className="bg-slate-50 min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Section */}
            <section className="relative bg-[#0B1B3F] text-white py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="/assets/images/hero-yrken.png"
                        alt="Ordlista och begrepp"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight uppercase">
                            A-kassa: Ordlista & Begrepp
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed font-medium">
                            Från Arbetsvillkor till Överhoppningsbar tid. Vi förklarar de svåra orden inom arbetslöshetsförsäkringen så att du kan känna dig trygg i din kommunikation med a-kassan.
                        </p>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 -mt-10 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Summary Block */}
                        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100">
                            <div className="grid gap-6">
                                {terms.map((item, index) => (
                                    <div key={index} id={item.term.toLowerCase().replace(/\s+/g, '-')} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-md group">
                                        <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                                            <Book className="w-5 h-5 text-blue-600" />
                                            {item.term}
                                        </h2>
                                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                                            {item.definition}
                                        </p>
                                        {item.link && (
                                            <div className="mt-4">
                                                <Link href={item.link.url} className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:underline">
                                                    {item.link.text} <ChevronRight className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <HelpCircle className="w-8 h-8 text-blue-600" />
                                Vanliga frågor om a-kasseord
                            </h2>
                            <div className="space-y-6">
                                {faqs.map((f, i) => (
                                    <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <h3 className="font-bold text-slate-900 mb-2">{f.q}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{f.a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 sticky top-24">
                            <div className="relative mb-8">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Sök begrepp..."
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                                />
                            </div>

                            <h3 className="text-lg font-bold mb-6 text-slate-900">Viktigaste begreppen</h3>
                            <div className="space-y-4">
                                {['Arbetsvillkor', 'Medlemsvillkor', 'Ramtid', 'Karensdagar'].map(term => (
                                    <Link key={term} href={`#${term.toLowerCase()}`} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-blue-50 transition-all group">
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700">{term}</span>
                                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500" />
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-10 pt-8 border-t border-slate-100">
                                <h4 className="text-sm font-bold mb-4">Läs även:</h4>
                                <div className="space-y-3">
                                    <Link href="/akassa-regler" className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600">
                                        <ChevronRight className="w-3 h-3" /> Alla regler & villkor
                                    </Link>
                                    <Link href="/byta-a-kassa" className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600">
                                        <ChevronRight className="w-3 h-3" /> Så byter du kassa
                                    </Link>
                                </div>
                            </div>

                            <div className="mt-10 pt-8 border-t border-slate-100">
                                <Link href="/jamfor" className="block w-full text-center bg-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-500 transition-all shadow-md">
                                    Jämför a-kassor
                                </Link>
                            </div>
                        </div>

                        <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
                            <Info className="w-8 h-8 text-blue-600 mb-4" />
                            <h3 className="text-lg font-bold text-blue-900 mb-3">Saknar du ett ord?</h3>
                            <p className="text-sm text-blue-800 leading-relaxed">
                                Vi arbetar ständigt med att göra a-kassans språk mer begripligt. Om det är något ord du funderar över som saknas här är du välkommen att kontakta oss.
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
