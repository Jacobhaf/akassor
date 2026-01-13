import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Calendar, Briefcase, Info, HelpCircle, ArrowRight, Gavel, FileText } from 'lucide-react';

export const metadata: Metadata = {
    title: 'A-kassa Regler 2026 – Ersättning, Villkor & Karensdagar',
    description:
        'Läs om a-kassans regler, arbetsvillkor, ramtid, karensdagar och ersättning. En enkel guide till hur a-kassan fungerar och vad som gäller för dig 2026.',
};

export default function AkassaReglerPage() {
    const faqs = [
        {
            q: 'Vad krävs för att få a-kassa?',
            a: 'För att få ersättning måste du vara arbetslös, inskriven på Arbetsförmedlingen, aktivt söka jobb samt uppfylla medlems- och arbetsvillkoret.'
        },
        {
            q: 'Vad är skillnaden på medlemsvillkor och arbetsvillkor?',
            a: 'Medlemsvillkoret handlar om hur länge du varit med i kassan (oftast 12 månader), medan arbetsvillkoret handlar om hur mycket du jobbat innan du blev arbetslös.'
        },
        {
            q: 'Hur många karensdagar har a-kassan?',
            a: 'Vanligtvis har a-kassan 6 karensdagar. Det är dagar du är arbetslös men inte får betalt för, vilket fungerar som en självrisk.'
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
                        src="/assets/images/hero-akassor.png"
                        alt="Regler och villkor för a-kassa"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight uppercase">
                            A-kassa: Regler & Villkor 2026
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed font-medium">
                            Att förstå a-kassans regelverk kan vara utmanande. Vi bryter ner de viktigaste kraven, från arbetsvillkor till karensdagar, så att du vet exakt vad som gäller.
                        </p>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 -mt-10 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Summary Block */}
                        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 prose prose-lg prose-blue max-w-none text-slate-600">
                            <h2 className="text-slate-900">De tre grundpelarna i a-kasseförsäkringen</h2>
                            <p>
                                För att ha rätt till ersättning från en a-kassa i Sverige finns det tre grundläggande krav som du måste uppfylla. Dessa är utformade för att säkerställa att försäkringen går till personer som faktiskt står till arbetsmarknadens förfogande.
                            </p>
                            <ol>
                                <li><strong>Medlemsvillkoret:</strong> Du ska ha varit medlem i en a-kassa i minst 12 månader för att få inkomstbaserad ersättning.</li>
                                <li><strong>Arbetsvillkoret:</strong> Du ska ha arbetat i en viss omfattning under det senaste året.</li>
                                <li><strong>Allmänna villkor:</strong> Du ska vara arbetsför, inskriven på Arbetsförmedlingen och aktivt söka jobb.</li>
                            </ol>
                        </section>

                        {/* Detailed Rules */}
                        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100">
                            <h2 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
                                <Gavel className="w-8 h-8 text-blue-600" />
                                Arbetsvillkoret i detalj
                            </h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Arbetsvillkoret är ofta den del som upplevs som mest komplex. För att uppfylla det under 2026 krävs normalt att du under de senaste 12 månaderna (ramtiden) har:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h3 className="font-bold text-slate-900 mb-2">Huvudregeln</h3>
                                    <p className="text-sm text-slate-600">Arbetat minst 60 timmar per månad i minst sex sammanhängande månader.</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h3 className="font-bold text-slate-900 mb-2">Alternativregeln</h3>
                                    <p className="text-sm text-slate-600">Arbetat minst 420 timmar under en sammanhängande period av sex månader (minst 40h varje månad).</p>
                                </div>
                            </div>
                            <div className="mt-10 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                <h4 className="font-bold text-blue-900 flex items-center gap-2 mb-2">
                                    <Info className="w-5 h-5" /> Överhoppningsbar tid
                                </h4>
                                <p className="text-sm text-blue-800">
                                    Om du varit sjuk, föräldraledig eller studerat kan denna tid "hoppas över" när ramtiden beräknas, vilket gör att a-kassan kan titta längre tillbaka än 12 månader.
                                </p>
                            </div>
                        </section>

                        {/* Karens & Ersättning */}
                        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8">Karensdagar och utbetalning</h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed">
                                <p>
                                    När du blir arbetslös börjar din ersättningsperiod med <strong>6 karensdagar</strong>. Dessa dagar fungerar som en självrisk och under dessa får du ingen ersättning. Karensdagarna dras av från din första utbetalning.
                                </p>
                                <p>
                                    En ersättningsperiod är totalt <strong>300 dagar</strong>. Om du har barn under 18 år förlängs perioden automatiskt till 450 dagar. Du får ersättning för max 5 dagar per vecka.
                                </p>
                            </div>
                            <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">
                                <div className="p-4">
                                    <div className="text-3xl font-bold text-blue-600 mb-1">80%</div>
                                    <div className="text-xs font-bold uppercase tracking-wide text-slate-500">Av lönen (dag 1-100)</div>
                                </div>
                                <div className="p-4 border-x border-slate-100">
                                    <div className="text-3xl font-bold text-blue-600 mb-1">70%</div>
                                    <div className="text-xs font-bold uppercase tracking-wide text-slate-500">Av lönen (dag 101-300)</div>
                                </div>
                                <div className="p-4">
                                    <div className="text-3xl font-bold text-blue-600 mb-1">1 200 kr</div>
                                    <div className="text-xs font-bold uppercase tracking-wide text-slate-500">Maxbelopp per dag</div>
                                </div>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <HelpCircle className="w-8 h-8 text-blue-600" />
                                Vanliga frågor om reglerna
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
                            <h3 className="text-lg font-bold mb-6 text-slate-900">Viktiga dokument</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <FileText className="w-6 h-6 text-blue-500 shrink-0" />
                                    <div>
                                        <p className="text-sm font-bold text-slate-800">Arbetsgivarintyg</p>
                                        <p className="text-xs text-slate-500 mt-1">Det viktigaste dokumentet för att styrka ditt arbetsvillkor.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Calendar className="w-6 h-6 text-orange-500 shrink-0" />
                                    <div>
                                        <p className="text-sm font-bold text-slate-800">Tidrapporter</p>
                                        <p className="text-xs text-slate-500 mt-1">Måste skickas in löpande för att utbetalning ska ske.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 pt-10 border-t border-slate-100">
                                <h4 className="text-sm font-bold mb-4">Relaterat:</h4>
                                <div className="space-y-3">
                                    <Link href="/ordlista" className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600">
                                        <ArrowRight className="w-3 h-3" /> Ordlista & begrepp
                                    </Link>
                                    <Link href="/inkomstforsakring" className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600">
                                        <ArrowRight className="w-3 h-3" /> Inkomstförsäkring guide
                                    </Link>
                                    <Link href="/byta-a-kassa" className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600">
                                        <ArrowRight className="w-3 h-3" /> Så byter du a-kassa
                                    </Link>
                                </div>
                            </div>

                            <div className="mt-10 pt-8 border-t border-slate-100">
                                <Link href="/akassor" className="block w-full text-center bg-[#0B1B3F] text-white font-bold py-3 px-6 rounded-xl hover:bg-slate-800 transition-all shadow-md uppercase text-sm tracking-wider">
                                    Se alla a-kassor
                                </Link>
                            </div>
                        </div>

                        <div className="bg-blue-600 text-white rounded-3xl p-8 shadow-xl">
                            <ShieldCheck className="w-8 h-8 mb-4 text-blue-200" />
                            <h3 className="text-lg font-bold mb-3">Rättssäkerhet</h3>
                            <p className="text-sm text-blue-100 leading-relaxed">
                                A-kassans beslut kan alltid överklagas. Om du anser att ett beslut är felaktigt har du rätt att begära omprövning och i sista hand vända dig till Förvaltningsrätten.
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
