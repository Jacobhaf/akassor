import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Friskvårdsbidrag 2026 – Regler för avdrag & aktiebolag',
    description:
        'Guide om friskvård och avdrag för 2026. Se vad som gäller för aktiebolag, enskild firma och anställda. Företaget betalar exklusive moms vid godkänd friskvård.',
};

export default function FriskvardsbidragPage() {
    const faqSchema = [
        {
            '@type': 'Question',
            name: 'Är friskvård avdragsgillt i aktiebolag?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ja, för anställda (inklusive ägare som tar ut lön) är friskvårdsbidraget en avdragsgill kostnad för bolaget och en skattefri förmån för den anställde upp till 5 000 kr/år.',
            },
        },
        {
            '@type': 'Question',
            name: 'Är friskvård avdragsgillt i enskild firma?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Nej, du kan inte göra avdrag för din egen friskvård i en enskild firma. Däremot kan du göra avdrag för dina anställdas friskvård om du har personal.',
            },
        },
        {
            '@type': 'Question',
            name: 'Kan företaget dra av momsen på friskvård?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ja, om friskvården är en godkänd skattefri förmån får företaget lyfta hela momsen. Det innebär att kostnaden för bolaget blir priset exklusive moms.',
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
                    Är friskvård avdragsgillt?
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
                    Ja, friskvård är avdragsgillt i Sverige – men bara under vissa
                    förutsättningar. Här går vi igenom reglerna för arbetsgivare,
                    anställda och olika företagsformer.
                </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-12">
                {/* Main Content */}
                <div className="lg:col-span-8">
                    <article className="prose prose-lg prose-blue max-w-none rounded-2xl bg-white p-8 shadow-sm">

                        {/* Summary Box */}
                        <div className="not-prose mb-8 rounded-xl bg-green-50 p-6 text-green-900 ring-1 ring-green-100">
                            <h3 className="mb-3 text-lg font-bold">Snabb sammanfattning</h3>
                            <div className="overflow-hidden rounded-lg border border-green-200">
                                <table className="min-w-full divide-y divide-green-200 bg-white text-sm">
                                    <thead className="bg-green-100">
                                        <tr>
                                            <th className="px-4 py-2 text-left font-semibold">Situation</th>
                                            <th className="px-4 py-2 text-left font-semibold">Avdragsgillt?</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-green-100">
                                        <tr>
                                            <td className="px-4 py-2">Arbetsgivare (för personal)</td>
                                            <td className="px-4 py-2 font-semibold text-green-700">Ja</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">Aktiebolag (ägare med lön)</td>
                                            <td className="px-4 py-2 font-semibold text-green-700">Ja</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">Anställd (förmån)</td>
                                            <td className="px-4 py-2 font-semibold text-green-700">Skattefritt &lt; 5000 kr</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">Enskild firma (ägare)</td>
                                            <td className="px-4 py-2 font-semibold text-red-600">Nej</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">Privatperson</td>
                                            <td className="px-4 py-2 font-semibold text-red-600">Nej</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <h2 className="text-[#003B5C]">För arbetsgivare & Aktiebolag</h2>
                        <p>
                            Friskvård är <strong>avdragsgillt</strong> för företaget och en{' '}
                            <strong>skattefri förmån</strong> för den anställde om det uppfyller
                            Skatteverkets krav:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Det ska vara av &quot;enklare slag&quot; (t.ex. gym, massage, yoga).</li>
                            <li>Det ska erbjudas till <strong>hela personalen</strong>.</li>
                            <li>
                                Maxbeloppet är <strong>5 000 kronor</strong> per anställd och år
                                (inklusive moms).
                            </li>
                        </ul>
                        <p>
                            Om du driver ett <strong>Aktiebolag</strong> och tar ut lön räknas du som anställd. Då kan bolaget betala din träning skattefritt och dra av kostnaden.
                        </p>

                        <h2 className="text-[#003B5C]">Momsavdrag på friskvård</h2>
                        <p>
                            När friskvården är godkänd och avdragsgill får företaget lyfta
                            (dra av) hela momsen. Det innebär att kostnaden för bolaget i
                            praktiken blir priset <strong>exklusive moms</strong>.
                        </p>
                        <div className="rounded-lg bg-gray-50 p-4 border border-gray-200 text-sm">
                            <p className="font-semibold mb-1">Räkneexempel – Gymkort:</p>
                            <p>Pris: 4 000 kr + moms (25%) = 5 000 kr</p>
                            <ul className="mt-2 list-none space-y-1 pl-0 text-gray-600">
                                <li><strong>Företaget betalar:</strong> 5 000 kr till gymmet.</li>
                                <li><strong>Företaget får tillbaka:</strong> 1 000 kr i moms.</li>
                                <li><strong>Kostnad i bolaget:</strong> 4 000 kr.</li>
                                <li><strong>Den anställde betalar:</strong> 0 kr (skattefritt).</li>
                            </ul>
                        </div>

                        <h2 className="text-[#003B5C]">För Enskild firma</h2>
                        <p>
                            Om du driver en <strong>inskild firma</strong> får du tyvärr{' '}
                            <span className="font-semibold text-red-600">inte</span> göra avdrag för din
                            egen friskvård. Du räknas inte som anställd i skattemässig mening.
                        </p>
                        <p>
                            Däremot, om du har <strong>anställda</strong> i din enskilda firma,
                            har du rätt att göra avdrag för <em>deras</em> friskvård enligt
                            samma regler som ovan.
                        </p>

                        <h3 className="text-[#003B5C]">Vad räknas som godkänd friskvård?</h3>
                        <p>Exempel på aktiviteter som Skatteverket godkänner:</p>
                        <div className="grid grid-cols-2 gap-4 text-sm font-medium text-gray-700">
                            <div className="bg-blue-50/50 p-3 rounded-lg">🏋️ Gym & Styrketräning</div>
                            <div className="bg-blue-50/50 p-3 rounded-lg">💆 Massage & Naprapat</div>
                            <div className="bg-blue-50/50 p-3 rounded-lg">🧘 Yoga & Mindfulness</div>
                            <div className="bg-blue-50/50 p-3 rounded-lg">🎾 Padel, Tennis, Golf</div>
                            <div className="bg-blue-50/50 p-3 rounded-lg">🏇 Ridning</div>
                            <div className="bg-blue-50/50 p-3 rounded-lg">🧗 Klättring & Simning</div>
                        </div>

                    </article>

                    {/* CTA Section */}
                    <div className="mt-8 rounded-xl bg-[#003B5C] p-8 text-center text-white shadow-lg">
                        <h3 className="mb-4 text-2xl font-bold">Är du företagare?</h3>
                        <p className="mb-6 text-blue-100">
                            Glöm inte att även trygga din inkomst. Som företagare är det extra viktigt att välja rätt a-kassa.
                        </p>
                        <Link
                            href="/akassa-egenforetagare"
                            className="inline-block rounded-lg bg-white px-8 py-3 font-bold text-[#003B5C] transition-transform hover:scale-105"
                        >
                            Läs om a-kassa för företagare
                        </Link>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="sticky top-24 space-y-6">

                        {/* Related Concepts */}
                        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                            <h3 className="mb-4 text-lg font-bold text-gray-900 border-b pb-2">
                                Läs mer
                            </h3>
                            <nav className="flex flex-col space-y-3">
                                <Link
                                    href="/akassa-egenforetagare"
                                    className="group flex items-center justify-between text-gray-600 hover:text-[#003B5C]"
                                >
                                    <span>A-kassa för företagare</span>
                                    <span className="text-gray-300 group-hover:text-blue-500">→</span>
                                </Link>
                                <Link
                                    href="/akassa-regler"
                                    className="group flex items-center justify-between text-gray-600 hover:text-[#003B5C]"
                                >
                                    <span>A-kassa regler</span>
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

                    </div>
                </div>
            </div>
        </div>
    );
}
