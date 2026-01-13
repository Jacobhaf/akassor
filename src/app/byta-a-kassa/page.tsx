import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, AlertTriangle, RefreshCw, ArrowRight, HelpCircle, ShieldCheck, Mail, Info } from "lucide-react";

export const metadata: Metadata = {
    title: "Byta a-kassa 2026 – Guide för att byta utan avbrott",
    description: "Vill du byta a-kassa? Vi guidar dig steg för steg så du kan byta utan avbrott, behålla din ersättning och göra bytet smidigt och tryggt 2026.",
};

export default function BytaAkassaPage() {
    const faqs = [
        {
            q: "Hur lång tid tar det att byta a-kassa?",
            a: "Själva ansökan i den nya a-kassan tar bara några minuter. Bytet sker oftast vid ett månadsskifte. Det är viktigt att ansöka i god tid, gärna i början av månaden innan du vill att medlemskapet ska börja gälla."
        },
        {
            q: "Kan jag behålla min ersättningsperiod vid byte?",
            a: "Ja, din intjänade tid och din pågående ersättningsperiod följer med så länge det inte uppstår ett glapp mellan medlemskapen. Om du har ett glapp på en dag eller mer nollställs din arbetslöshetsförsäkring."
        },
        {
            q: "Kostade det något att byta?",
            a: "Nej, det kostar inget extra att byta a-kassa utöver den vanliga medlemsavgiften i den nya kassan."
        },
        {
            q: "Vad är ett 'glapp' och varför är det farligt?",
            a: "Ett glapp uppstår om du inte är medlem i någon a-kassa under en period, även om det bara rör sig om en dag. Eftersom vissa förmåner baseras på sammanhängande medlemstid (oftast 12 månader) kan ett glapp innebära att du förlorar rätten till inkomstbaserad ersättning."
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
                        src="/images/content/byta_akassa_hero_real.png"
                        alt="Byta a-kassa guide"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
                            Byta a-kassa – Guide för ett tryggt byte (2026)
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed font-medium">
                            Behåll din trygghet och intjänade tid. Vi förklarar steg för steg hur du byter a-kassa utan avbrott eller risk för sämre villkor.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/jamfor" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-2xl shadow-lg transition-all flex items-center gap-2">
                                Jämför och välj ny kassa <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 -mt-10 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Summary Block */}
                        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 prose prose-lg prose-blue max-w-none text-slate-600">
                            <h2 className="text-slate-900">Varför byta a-kassa?</h2>
                            <p>
                                Det finns flera skäl till att man kan vilja byta a-kassa. De vanligaste anledningarna är att man byter bransch, att man vill ha en lägre medlemsavgift, eller att man vill ha en kassa som erbjuder bättre service och djupare branschkunskap.
                            </p>
                            <p>
                                Oavsett anledning är det viktigt att bytet görs på rätt sätt. Målet är alltid att upprätthålla ett <strong>oavbrutet medlemskap</strong>. Det innebär att du ska vara medlem i din nya kassa från och med den första dagen i månaden efter att ditt medlemskap i den gamla kassan upphörde.
                            </p>
                        </section>

                        {/* Step by Step */}
                        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100">
                            <h2 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
                                <RefreshCw className="w-8 h-8 text-blue-600" />
                                Så byter du a-kassa – steg för steg
                            </h2>
                            <div className="space-y-8">
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">1</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Hitta din nya a-kassa</h3>
                                        <p className="text-slate-600">Börja med att ta reda på vilken a-kassa som passar bäst för ditt nuvarande yrke eller din bransch. Använd gärna vår <Link href="/jamfor" className="text-blue-600 underline">jämförelsefunktion</Link>.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">2</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Ansök om medlemskap</h3>
                                        <p className="text-slate-600">Gör din ansökan online via den nya a-kassans webbplats. Om möjligt, välj alternativet att ge dem fullmakt att hämta dina uppgifter från den gamla kassan.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">3</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Begär utträde</h3>
                                        <p className="text-slate-600">Kontakta din nuvarande a-kassa och begär utträde. Var noga med att utträdesdatumet stämmer överens med inträdesdatumet i den nya kassan (oftast sista dagen i månaden).</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">4</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Säkerställ obruten tid</h3>
                                        <p className="text-slate-600">Dubbelkolla att din ansökan har gått igenom och att du inte har fått något glapp i ditt medlemskap. Spara alla bekräftelser du får digitalt.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Common Mistakes */}
                        <section className="bg-red-50 rounded-3xl p-8 sm:p-12 border border-red-100">
                            <h2 className="text-2xl font-bold text-red-900 mb-8 flex items-center gap-3">
                                <AlertTriangle className="w-8 h-8 text-red-600" />
                                Vanliga misstag vid byte
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8 text-red-800">
                                <div className="bg-white/50 p-6 rounded-2xl border border-red-100">
                                    <h3 className="font-bold mb-2">Att missa utträdet</h3>
                                    <p className="text-sm">Många tror att det räcker med att gå med i den nya kassan. Man måste aktivt begära utträde ur den gamla för att slippa dubbla avgifter.</p>
                                </div>
                                <div className="bg-white/50 p-6 rounded-2xl border border-red-100">
                                    <h3 className="font-bold mb-2">Uppsägning utan ny kassa</h3>
                                    <p className="text-sm">Säg aldrig upp din nuvarande a-kassa innan du har fått bekräftelse eller åtminstone skickat in ansökan till den nya.</p>
                                </div>
                                <div className="bg-white/50 p-6 rounded-2xl border border-red-100">
                                    <h3 className="font-bold mb-2">Att inte betala sista fakturan</h3>
                                    <p className="text-sm">Obetalda avgifter i den gamla kassan kan i värsta fall leda till att ditt medlemskap avslutas i förtid, vilket skapar ett glapp.</p>
                                </div>
                                <div className="bg-white/50 p-6 rounded-2xl border border-red-100">
                                    <h3 className="font-bold mb-2">Glömma inkomstförsäkringen</h3>
                                    <p className="text-sm">Om du har inkomstförsäkring via din nuvarande a-kassa eller fack – kolla vad som händer med den vid ett byte.</p>
                                </div>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <HelpCircle className="w-8 h-8 text-blue-600" />
                                Vanliga frågor om a-kassebyte
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
                            <h3 className="text-lg font-bold mb-6 text-slate-900">Snabbfakta om byte</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <ShieldCheck className="w-6 h-6 text-green-500 shrink-0" />
                                    <div>
                                        <p className="text-sm font-bold text-slate-800">Riskfritt om rätt gjort</p>
                                        <p className="text-xs text-slate-500 mt-1">Du behåller all tid du tjänat in hos din tidigare kassa.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                                    <div>
                                        <p className="text-sm font-bold text-slate-800">Digitalt med BankID</p>
                                        <p className="text-xs text-slate-500 mt-1">De flesta byten kan genomföras helt digitalt på 5 minuter.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Mail className="w-6 h-6 text-orange-500 shrink-0" />
                                    <div>
                                        <p className="text-sm font-bold text-slate-800">Få hjälp med pappersarbetet</p>
                                        <p className="text-xs text-slate-500 mt-1">Många kassor sköter kontakten med din gamla kassa via fullmakt.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 pt-8 border-t border-slate-100">
                                <Link href="/jamfor" className="block w-full text-center bg-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-500 transition-all shadow-md">
                                    Hitta ny a-kassa
                                </Link>
                            </div>
                        </div>

                        <div className="bg-amber-50 rounded-3xl p-8 border border-amber-100">
                            <Info className="w-8 h-8 text-amber-600 mb-4" />
                            <h3 className="text-lg font-bold text-amber-900 mb-3">Viktigt för arbetslösa</h3>
                            <p className="text-sm text-amber-800 leading-relaxed">
                                Om du redan är arbetslös kan du fortfarande byta a-kassa. Din ersättning flyttas över till den nya kassan, men var beredd på att det kan krävas en ny ansökan om ersättning i den nya kassan.
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
