import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'A-kassa Regler 2026 – Ersättning, Villkor & Karensdagar | Välja A-kassa',
    description:
        'Läs om a-kassans regler, arbetsvillkor, ramtid, karensdagar och ersättning. En enkel guide till hur a-kassan fungerar och vad som gäller för dig 2026.',
};

export default function AkassaReglerPage() {
    const faqSchema = [
        {
            '@type': 'Question',
            name: 'Vad krävs för att få a-kassa?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'För att få ersättning måste du vara arbetslös, inskriven på Arbetsförmedlingen, aktivt söka jobb samt uppfylla medlems- och arbetsvillkoret.',
            },
        },
        {
            '@type': 'Question',
            name: 'Vad är skillnaden på medlemsvillkor och arbetsvillkor?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Medlemsvillkoret handlar om hur länge du varit med i kassan (oftast 12 månader), medan arbetsvillkoret handlar om hur mycket du jobbat innan du blev arbetslös.',
            },
        },
        {
            '@type': 'Question',
            name: 'Hur många karensdagar har a-kassan?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Vanligtvis har a-kassan 6 karensdagar. Det är dagar du är arbetslös men inte får betalt för, vilket fungerar som en självrisk.',
            },
        },
    ];

    return (
        <div className="container mx-auto max-w-4xl px-4 py-8 sm:py-12">
            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: faqSchema,
                    }),
                }}
            />

            {/* Hero Section */}
            <div className="mb-12 text-center">
                <h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                    A-kassa regler och villkor
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
                    För att få ersättning från a-kassan måste vissa regler och villkor vara
                    uppfyllda. Här förklarar vi hur det fungerar, vilka krav som gäller och
                    vad som påverkar din ersättning.
                </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-12">
                {/* Main Content Column */}
                <div className="lg:col-span-8">
                    <article className="prose prose-lg prose-blue max-w-none rounded-2xl bg-white p-8 shadow-sm">

                        {/* Intro Box */}
                        <div className="not-prose mb-8 rounded-xl bg-blue-50 p-6 text-blue-900">
                            <h3 className="mb-2 text-lg font-bold">Vad krävs för att få a-kassa?</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Vara arbetslös och aktivt söka arbete</li>
                                <li>Vara anmäld hos Arbetsförmedlingen</li>
                                <li>Uppfylla medlemsvillkor och arbetsvillkor</li>
                                <li>Skicka in tidrapporter (kassakort) i tid</li>
                            </ul>
                        </div>

                        <h2 className="text-[#003B5C]">Medlemsvillkor</h2>
                        <p>
                            För att få den inkomstbaserade ersättningen (som baseras på din lön)
                            måste du normalt ha varit medlem i en a-kassa i minst{' '}
                            <strong>tolv månader</strong>. Detta kallas för medlemsvillkoret.
                        </p>
                        <p>
                            Om du inte har varit medlem tillräckligt länge, men ändå uppfyller
                            arbetsvillkoret, kan du ha rätt till en lägre ersättning som kallas
                            för <strong>grundbelopp</strong>.
                        </p>

                        <h2 className="text-[#003B5C]">Arbetsvillkoret</h2>
                        <p>
                            <Link href="/ordlista" className="font-medium text-blue-700 hover:underline">
                                Arbetsvillkoret
                            </Link>{' '}
                            är själva kärnan i a-kassans regler. Det innebär att du måste ha
                            arbetat i en viss omfattning innan du blev arbetslös.
                        </p>
                        <p>Generellt krävs att du under de senaste 12 månaderna har arbetat:</p>
                        <ul>
                            <li>Minst 6 månader med minst 80 timmar/månad, eller</li>
                            <li>
                                Minst 480 timmar totalt under 6 sammanhängande månader, med minst
                                50 timmar varje månad.
                            </li>
                        </ul>

                        <h2 className="text-[#003B5C]">Ramtid</h2>
                        <p>
                            A-kassan tittar bakåt i tiden för att se om du uppfyller
                            arbetsvillkoret. Denna period kallas för{' '}
                            <Link href="/ordlista" className="font-medium text-blue-700 hover:underline">
                                ramtid
                            </Link>
                            , och är normalt de senaste 12 månaderna.
                        </p>
                        <p>
                            Om du har varit sjuk, föräldraledig eller studerat på heltid kan den
                            tiden räknas som &quot;överhoppningsbar tid&quot;, vilket gör att
                            a-kassan kan titta längre tillbaka i tiden för att hitta ditt
                            arbete.
                        </p>

                        <h2 className="text-[#003B5C]">Karensdagar</h2>
                        <p>
                            Innan du börjar få ersättning utbetald har a-kassan{' '}
                            <strong>karensdagar</strong>. Det är oftast 6 dagar i början av
                            arbetslösheten då du inte får någon ersättning. Karensdagarna
                            fungerar som en slags självrisk.
                        </p>

                        <h2 className="text-[#003B5C]">Ersättningsnivå och ersättningsdagar</h2>
                        <p>
                            Du får normalt ersättning i <strong>300 dagar</strong>. Om du har
                            barn under 18 år kan du få ersättning i ytterligare 150 dagar (totalt
                            450 dagar).
                        </p>
                        <p>Din ersättning baseras på:</p>
                        <ul>
                            <li>Din tidigare genomsnittliga inkomst</li>
                            <li>Din genomsnittliga arbetstid</li>
                            <li>Om du har en extra <Link href="/inkomstforsakring" className="font-medium text-blue-700 hover:underline">inkomstförsäkring</Link></li>
                        </ul>

                        <h2 className="text-[#003B5C]">Vanliga frågor om reglerna</h2>

                        <div className="space-y-4 not-prose">
                            {faqSchema.map((faq, i) => (
                                <div key={i} className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                                    <h4 className="font-semibold text-gray-900">{faq.name}</h4>
                                    <p className="mt-1 text-gray-700">{faq.acceptedAnswer.text}</p>
                                </div>
                            ))}
                        </div>

                        <h3 className="mt-8 text-[#003B5C]">Vad händer om du säger upp dig själv?</h3>
                        <p>
                            Om du säger upp dig själv utan giltigt skäl (som exempelvis hälsoskäl
                            eller mobbning) kan du bli avstängd från ersättning i oftast 45
                            ersättningsdagar. Det innebär att du får vänta längre innan du får
                            pengar.
                        </p>

                    </article>

                    {/* Bottom CTA in Content */}
                    <div className="mt-8 rounded-xl bg-[#003B5C] p-8 text-center text-white shadow-lg">
                        <h3 className="mb-4 text-2xl font-bold">Dags att välja a-kassa?</h3>
                        <p className="mb-6 text-blue-100">
                            Nu när du har koll på reglerna kan du enkelt jämföra och hitta den bästa a-kassan för ditt yrke.
                        </p>
                        <Link
                            href="/jamfor"
                            className="inline-block rounded-lg bg-white px-8 py-3 font-bold text-[#003B5C] transition-transform hover:scale-105"
                        >
                            Jämför a-kassor nu
                        </Link>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 space-y-8">

                    {/* Sticky Sidebar Container */}
                    <div className="sticky top-24 space-y-6">

                        {/* Related Concepts Card */}
                        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                            <h3 className="mb-4 text-lg font-bold text-gray-900 border-b pb-2">
                                Viktiga begrepp
                            </h3>
                            <nav className="flex flex-col space-y-3">
                                <Link
                                    href="/ordlista"
                                    className="group flex items-center justify-between text-gray-600 hover:text-[#003B5C]"
                                >
                                    <span>Ramtid</span>
                                    <span className="text-gray-300 group-hover:text-blue-500">→</span>
                                </Link>
                                <Link
                                    href="/ordlista"
                                    className="group flex items-center justify-between text-gray-600 hover:text-[#003B5C]"
                                >
                                    <span>Arbetsvillkor</span>
                                    <span className="text-gray-300 group-hover:text-blue-500">→</span>
                                </Link>
                                <Link
                                    href="/inkomstforsakring"
                                    className="group flex items-center justify-between text-gray-600 hover:text-[#003B5C]"
                                >
                                    <span>Inkomstförsäkring</span>
                                    <span className="text-gray-300 group-hover:text-blue-500">→</span>
                                </Link>
                            </nav>
                        </div>

                        {/* Compare CTA */}
                        <div className="rounded-xl bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm ring-1 ring-blue-100">
                            <h3 className="mb-2 text-lg font-bold text-[#003B5C]">
                                Vilken a-kassa passar dig?
                            </h3>
                            <p className="mb-4 text-sm text-gray-600">
                                Vi hjälper dig hitta rätt a-kassa baserat på ditt yrke.
                            </p>
                            <Link
                                href="/akassor"
                                className="block w-full rounded-lg bg-[#003B5C] py-2.5 text-center text-sm font-semibold text-white shadow-md hover:bg-[#002840]"
                            >
                                Hitta din a-kassa
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
