import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'A-kassa Ordlista & Begrepp – Förklaringar A-Ö',
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
            term: 'Arbetslös',
            definition:
                'Att vara arbetslös innebär att du saknar arbete men kan och vill arbeta. För att få ersättning från a-kassa måste du vara inskriven på Arbetsförmedlingen och aktivt söka jobb.',
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

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Vad är a kassa',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A kassa är en försäkring som ger ersättning om du blir arbetslös och uppfyller medlems och arbetsvillkor.',
                },
            },
            {
                '@type': 'Question',
                name: 'Vad betyder arbetsvillkoret i a kassan',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Arbetsvillkoret är kravet på hur mycket du måste ha arbetat under en viss period för att ha rätt till ersättning.',
                },
            },
            {
                '@type': 'Question',
                name: 'Vad är karensdagar',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Karensdagar är de första dagarna av arbetslösheten då ingen ersättning betalas ut från a kassan.',
                },
            },
            {
                '@type': 'Question',
                name: 'Vad är ramtid',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ramtid är den period bakåt i tiden som a kassan granskar för att se om du uppfyller arbetsvillkoret.',
                },
            },
            {
                '@type': 'Question',
                name: 'Vad är skillnaden mellan grundbelopp och inkomstrelaterad ersättning',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Grundbeloppet är en fast ersättning för den som inte varit medlem tillräckligt länge medan inkomstrelaterad ersättning baseras på tidigare lön.',
                },
            },
            {
                '@type': 'Question',
                name: 'Vad är inkomstförsäkring',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Inkomstförsäkring är ett tillägg som ger ersättning över a kassans tak och ingår ofta via fackförbund.',
                },
            },
        ],
    };

    return (
        <div className="container mx-auto max-w-4xl px-4 py-8 sm:py-12">
            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Hero / Header */}
            <div className="mb-12 text-center">
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    A-kassa ordlista – Förklaring av viktiga begrepp
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-gray-600">
                    Att förstå reglerna kring a-kassa kan vara svårt. Det finns många begrepp som arbetsvillkor, ramtid, och karensdagar som påverkar din ersättning. Här förklarar vi vanliga ord och uttryck inom a-kassa enkelt och tydligt.
                </p>
            </div>

            {/* Main Content */}
            <div className="grid gap-12 lg:grid-cols-3">
                {/* Glossary Section */}
                <div className="lg:col-span-2">
                    <div className="space-y-8">
                        {terms.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                            >
                                <h2 className="mb-2 text-xl font-semibold text-[#003B5C]">
                                    {item.term}
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    {item.definition}
                                </p>
                                {item.link && (
                                    <div className="mt-3">
                                        <Link
                                            href={item.link.url}
                                            className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 hover:underline"
                                        >
                                            {item.link.text}
                                            <svg
                                                className="ml-1 h-4 w-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar / CTA Section */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 space-y-8">
                        {/* Quick Links */}
                        <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                            <h3 className="mb-4 text-lg font-bold text-gray-900">
                                Hitta rätt direkt
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        href="/akassor"
                                        className="flex items-center text-gray-700 hover:text-[#005B8C]"
                                    >
                                        <span className="mr-2 text-blue-500">→</span>
                                        Jämför a-kassor
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/akassor"
                                        className="flex items-center text-gray-700 hover:text-[#005B8C]"
                                    >
                                        <span className="mr-2 text-blue-500">→</span>
                                        Välja a-kassa
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/inkomstforsakring"
                                        className="flex items-center text-gray-700 hover:text-[#005B8C]"
                                    >
                                        <span className="mr-2 text-blue-500">→</span>
                                        Inkomstförsäkring
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* CTA Card */}
                        <div className="rounded-xl bg-[#003B5C] p-6 text-white shadow-lg">
                            <h3 className="mb-3 text-xl font-bold">
                                Jämför a-kassa enkelt
                            </h3>
                            <p className="mb-6 text-blue-100">
                                Osäker på vilken a-kassa du ska välja? Använd vår guide för att hitta rätt.
                            </p>
                            <Link
                                href="/akassor"
                                className="block w-full rounded-lg bg-white px-4 py-3 text-center font-semibold text-[#003B5C] transition-colors hover:bg-blue-50"
                            >
                                Hitta din a-kassa
                            </Link>
                        </div>

                        {/* Profession Links */}
                        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                            <h3 className="mb-4 text-lg font-bold text-gray-900">
                                A-kassa för yrken
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <Link
                                        href="/akassa-underskoterska"
                                        className="text-gray-600 hover:text-[#005B8C] hover:underline"
                                    >
                                        Undersköterska
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/akassa-larare"
                                        className="text-gray-600 hover:text-[#005B8C] hover:underline"
                                    >
                                        Lärare
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/akassa-egenforetagare"
                                        className="text-gray-600 hover:text-[#005B8C] hover:underline"
                                    >
                                        Egenföretagare
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Content / Call to Action */}
            <div className="mt-16 rounded-2xl bg-gradient-to-br from-blue-50 to-white p-8 text-center ring-1 ring-gray-100">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                    Redo att välja a-kassa?
                </h2>
                <p className="mb-8 mx-auto max-w-2xl text-gray-600">
                    Nu när du har koll på begreppen är det lättare att fatta rätt beslut. Jämför Sveriges a-kassor och se vilken som passar just ditt yrke och din situation bäst.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <Link
                        href="/jamfor"
                        className="rounded-lg bg-[#003B5C] px-8 py-3 font-semibold text-white shadow-lg transition-all hover:bg-[#002840] hover:shadow-xl"
                    >
                        Jämför a-kassor
                    </Link>
                    <Link
                        href="/akassa-regler"
                        className="rounded-lg bg-white px-8 py-3 font-semibold text-[#003B5C] shadow-md ring-1 ring-gray-200 transition-all hover:bg-gray-50"
                    >
                        Läs om a-kassans regler
                    </Link>
                </div>
            </div>
        </div>
    );
}
