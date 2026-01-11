import { checklists } from "@/data/checklists";
import { yrken } from "@/data/database";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const checklist = checklists[params.slug];
    const profession = yrken.find((y) => y.slug === params.slug);

    if (!checklist && !profession) return {};

    const name = checklist ? checklist.professionName : profession?.name || "";

    return {
        title: `Checklista för arbetslös ${name} – så får du rätt ersättning`,
        description: `Komplett checklista för arbetslös ${name}. Följ våra 4 enkla steg för att maximera din ersättning och undvika problem med a-kassan. Läs guiden här.`,
        openGraph: {
            title: `Checklista: Arbetslös som ${name}? Gör så här.`,
            description: `Vår guide för dig som arbetar som ${name} och blivit arbetslös. Maximera din a-kasseersättning.`,
            type: 'article',
            url: `https://www.valjaakassa.se/yrken/${params.slug}/checklista`,
        }
    };
}

export default function ChecklistPage({ params }: Props) {
    let checklist = checklists[params.slug];
    const profession = yrken.find((y) => y.slug === params.slug);

    if (!profession) {
        return notFound();
    }

    // Fallback if no specific checklist exists
    if (!checklist) {
        checklist = {
            slug: profession.slug,
            professionName: profession.name,
            step2List: [
                "Arbetsgivarintyg från din arbetsgivare",
                "Anställningsbevis",
                "Uppsägningsbesked"
            ],
            step3Reason: `För en ${profession.name.toLowerCase()} är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.`,
            step4Questions: `Många ${profession.name.toLowerCase()} undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden.`
        };
    }

    return (
        <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
            <Link
                href={`/yrken/${params.slug}`}
                className="mb-8 inline-block text-blue-600 hover:text-blue-800 hover:underline"
            >
                ← Se mer om yrket {checklist.professionName} här
            </Link>

            <h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Checklista för arbetslös {checklist.professionName} – så får du rätt ersättning från a-kassan
            </h1>

            <div className="prose prose-lg prose-blue max-w-none">
                <p className="lead text-xl text-gray-600">
                    Har du blivit arbetslös som <strong>{checklist.professionName.toLowerCase()}</strong>? Här hittar du en tydlig checklista som hjälper dig att snabbt göra rätt saker för att få ersättning från a-kassan utan onödiga avbrott. Följ stegen nedan redan från din <strong>första arbetslösa dag</strong>.
                </p>

                <div className="my-8 space-y-8">
                    {/* Step 1 */}
                    <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                        <h2 className="mt-0 text-2xl font-semibold text-gray-900">1. Skriv in dig hos Arbetsförmedlingen direkt</h2>
                        <p>
                            Som arbetslös <strong>{checklist.professionName.toLowerCase()}</strong> måste du skriva in dig hos Arbetsförmedlingen samma dag du står utan arbete.
                            Du får inte ersättning för dagar du inte varit inskriven.
                        </p>
                        <a
                            href="https://arbetsformedlingen.se/for-arbetssokande/inskrivning"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center rounded-lg bg-green-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-green-700"
                        >
                            Skriv in dig som arbetssökande hos Arbetsförmedlingen
                        </a>
                    </section>

                    {/* Step 2 */}
                    <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                        <h2 className="mt-0 text-2xl font-semibold text-gray-900">2. Logga in i Mina sidor hos din a-kassa</h2>
                        <p>För att handlägga ditt ärende behöver a-kassan specifika uppgifter från dig. För en {checklist.professionName.toLowerCase()} innebär detta oftast:</p>
                        <ul className="list-disc pl-5">
                            {checklist.step2List.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <Link
                            href="/akassor"
                            className="mt-4 inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-700"
                        >
                            Hitta din a-kassa
                        </Link>
                    </section>

                    {/* Step 3 */}
                    <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                        <h2 className="mt-0 text-2xl font-semibold text-gray-900">3. Begär arbetsgivarintyg</h2>
                        <p>{checklist.step3Reason}</p>
                        <p className="mt-2 text-sm text-gray-500 italic">Observera att arbetsgivarintyg inte är samma sak som anställningsbevis.</p>
                        <div className="mt-4">
                            <span className="inline-flex items-center rounded-lg bg-gray-100 px-6 py-3 text-base font-semibold text-gray-700">
                                Begär arbetsgivarintyg via din a-kassa (Mina sidor)
                            </span>
                        </div>
                    </section>

                    {/* Step 4 */}
                    <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                        <h2 className="mt-0 text-2xl font-semibold text-gray-900">4. Kontakta din a-kassa om du har frågor</h2>
                        <p>{checklist.step4Questions}</p>
                        <p>Om du är osäker, kontakta din a-kassa direkt för att undvika felaktiga utbetalningar.</p>
                        <Link
                            href={profession?.recommendedAkassaId ? `/akassa/${profession.recommendedAkassaId}` : "/akassor"}
                            className="mt-4 inline-flex items-center rounded-lg bg-white border-2 border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 transition-colors hover:bg-blue-50"
                        >
                            Kontakta din a-kassa
                        </Link>
                    </section>
                </div>

                <h2 className="text-2xl font-bold text-gray-900">Sammanfattning</h2>
                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Steg</th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Vad ska du göra?</th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Varför det är viktigt</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            <tr>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">1</td>
                                <td className="px-6 py-4 text-sm text-gray-500">Skriv in dig på Arbetsförmedlingen första dagen</td>
                                <td className="px-6 py-4 text-sm text-gray-500">Du får bara ersättning för dagar du varit inskriven</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">2</td>
                                <td className="px-6 py-4 text-sm text-gray-500">Logga in i a-kassans Mina sidor</td>
                                <td className="px-6 py-4 text-sm text-gray-500">Ser vilka intyg och uppgifter som behövs</td>
                            </tr>
                            <tr>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">3</td>
                                <td className="px-6 py-4 text-sm text-gray-500">Begär arbetsgivarintyg</td>
                                <td className="px-6 py-4 text-sm text-gray-500">Krävs för att räkna ut ersättningen</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">4</td>
                                <td className="px-6 py-4 text-sm text-gray-500">Kontakta din a-kassa vid frågor</td>
                                <td className="px-6 py-4 text-sm text-gray-500">Ger snabb och korrekt handläggning</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-8 border-t pt-8">
                    <Link
                        href={`/yrken/${params.slug}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                        ← Tillbaka till yrkessidan för {checklist.professionName}
                    </Link>
                </div>


            </div>
        </main>
    );
}

export async function generateStaticParams() {
    return yrken.map((yrke) => ({
        slug: yrke.slug,
    }));
}
