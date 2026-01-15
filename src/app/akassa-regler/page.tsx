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

                        {/* Aktivitetsstöd Rules Update 2025 */}
                        <section id="aktivitetsstod-2025" className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100">
                            <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                                <div className="flex-1">
                                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                        Ändrade regler för aktivitetsstöd från 1 oktober 2025
                                    </h2>
                                    <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed">
                                        <p>
                                            Den 1 oktober 2025 började en ny lag om arbetslöshetsförsäkring att gälla. Samtidigt förändrades reglerna för dig som deltar i Arbetsförmedlingens program och får aktivitetsstöd. Det här kan påverka hur ersättningen beräknas och vilket lägsta belopp du kan få per dag.
                                        </p>
                                        <p className="mt-4">
                                            <Link href="/aktivitetsstod" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline">
                                                Läs även: Aktivitetsstöd – regler och nivåer
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 aspect-[4/3] relative rounded-2xl overflow-hidden shadow-md bg-slate-100">
                                    <Image
                                        src="/assets/images/aktivitetsstod-akassa-regler-2026.jpg"
                                        alt="Regler för aktivitetsstöd och a-kassa från 1 oktober 2025"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <div className="space-y-10">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">Aktivitetsstöd efter 1 oktober 2025 – lägsta belopp</h3>
                                    <div className="text-slate-600 space-y-4">
                                        <p>Om du inte uppfyller ett inkomstvillkor hos a-kassan kan du få aktivitetsstöd med grundbelopp. Grundbeloppet är 365 kronor per dag.</p>
                                        <p>Om du har ersättningsdagar kvar enligt de äldre reglerna fortsätter de äldre reglerna att gälla tills dagarna är slut. Då kan du som lägst få 510 kronor per dag.</p>
                                        <p>När dina ersättningsdagar enligt äldre regler är förbrukade kan du enligt övergångsbestämmelser få aktivitetsstöd med inkomstbaserat belopp. Då kan du som lägst få:</p>
                                        <ul className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2 list-none">
                                            <li className="flex justify-between items-center border-b border-slate-200 pb-2">
                                                <span className="font-medium">1 oktober – 31 december 2025</span>
                                                <span className="font-bold text-blue-600 text-lg">462 kr/dag</span>
                                            </li>
                                            <li className="flex justify-between items-center border-b border-slate-200 py-2">
                                                <span className="font-medium">1 januari – 31 mars 2026</span>
                                                <span className="font-bold text-blue-600 text-lg">415 kr/dag</span>
                                            </li>
                                            <li className="flex justify-between items-center pt-2">
                                                <span className="font-medium">Från och med 1 april 2026</span>
                                                <span className="font-bold text-blue-600 text-lg">365 kr/dag</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">Om du uppfyller inkomstvillkoret</h3>
                                    <div className="text-slate-600 space-y-4 leading-relaxed">
                                        <p>
                                            Om du uppfyller ett inkomstvillkor kan du få aktivitetsstöd med inkomstbaserat belopp. Ersättningen påverkas bland annat av hur många ersättningsdagar du har förbrukat, din ersättningsgrundande inkomst, antal tilldelade ersättningsdagar och ersättningsnivån första dagen i en ersättningsperiod.
                                        </p>
                                        <p>
                                            En ersättningsdag kan förbrukas antingen med arbetslöshetsersättning eller aktivitetsstöd med inkomstbaserat belopp. Aktivitetsstödet kan trappas ned under tiden du deltar i program, men lägsta belopp är 365 kronor per dag.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <h3 className="text-lg font-bold text-slate-900 mb-3">Ersättningsgrundande inkomst (EGI)</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            Den ersättningsgrundande inkomsten beräknas utifrån hur stor inkomst du haft under en viss period. Den kan som högst vara 34 000 kronor i månaden före skatt.
                                        </p>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <h3 className="text-lg font-bold text-slate-900 mb-3">Ersättningsdagar och ersättningsnivå</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            Antalet ersättningsdagar baseras på din tidigare inkomst och kan vara 66, 100, 200 eller 300 dagar.
                                        </p>
                                        <p className="text-sm text-slate-600 leading-relaxed mt-3">
                                            Ersättningsnivån baseras på hur länge du varit medlem i en a-kassa och kan vara 50, 60 eller 80 procent i början av ersättningsperioden. Ersättningsnivån trappas därefter ned stegvis, men ersättningen kan inte bli lägre än 365 kronor per dag.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
                                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                                        <Info className="w-6 h-6" />
                                        Hur räknas aktivitetsstöd med inkomstbaserat belopp ut?
                                    </h3>
                                    <div className="text-blue-800 space-y-4">
                                        <p>
                                            Aktivitetsstöd med inkomstbaserat belopp beräknas utifrån den ersättningsgrundande inkomsten dividerat med 22 och den ersättningsnivå som a-kassan bestämmer.
                                        </p>
                                        <p className="text-sm font-medium">
                                            Om du har frågor om din ersättningsgrundande inkomst kan du kontakta din a-kassa. Tänk på att a-kassan inte kan svara på frågor om själva aktivitetsstödet.
                                        </p>
                                    </div>
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
                                    <Link href="/aktivitetsstod" className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600">
                                        <ArrowRight className="w-3 h-3" /> Aktivitetsstöd regler
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
