import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AkassaComparison from "@/components/comparison/AkassaComparison";
import { Search, ListChecks, DollarSign, ShieldCheck, HelpCircle, Info, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Jämför a-kassor 2026 – hitta bästa a-kassan | Välja A-kassa",
    description:
        "Jämför a-kassor och hitta den som passar ditt yrke bäst. Se avgifter, handläggningstider, villkor och regler för 2026. Din guide till rätt a-kassa.",
};

export default function JamforPage() {
    const faqs = [
        {
            q: "Vad ska jag jämföra mellan a-kassorna?",
            a: "Det viktigaste att jämföra är medlemsavgift, handläggningstid och om a-kassan är specialiserad på din bransch. Eftersom alla följer samma lagar väljer du främst utefter pris och service."
        },
        {
            q: "Är det stor skillnad på avgiften?",
            a: "De flesta kassor kostar mellan 100 och 170 kr per månad. Det skiljer alltså några hundralappar per år mellan den billigaste och dyraste kassan."
        },
        {
            q: "Måste jag välja den a-kassa som facket rekommenderar?",
            a: "Nej, du har rätt att välja vilken a-kassa du vill så länge du uppfyller deras krav för medlemskap (oftast att du jobbar inom deras område)."
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
                        src="/images/content/jamfor_hero_real.png"
                        alt="Jämför a-kassa"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight uppercase">
                            Jämför A-kassor 2026
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed font-medium">
                            Vi hjälper dig att hitta den mest prisvärda och trygga lösningen för just ditt yrke. Jämför avgifter, villkor och handläggningstider på ett ställe.
                        </p>
                    </div>
                </div>
            </section>

            {/* Comparison Tool Section */}
            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-30 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 border border-slate-100">
                    <AkassaComparison />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Summary Block */}
                        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 prose prose-lg prose-blue max-w-none text-slate-600">
                            <h2 className="text-slate-900">Så jämför du a-kassor rätt</h2>
                            <p>
                                När du ska jämföra a-kassa är det lätt att bara stirra sig blind på medlemsavgiften. Men eftersom a-kassan är din viktigaste försäkring vid arbetslöshet finns det fler faktorer som spelar roll för din totala trygghet.
                            </p>
                            <div className="not-prose grid md:grid-cols-3 gap-6 my-10">
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                    <DollarSign className="w-8 h-8 text-green-600 mb-4" />
                                    <h3 className="font-bold text-slate-900 mb-2">Avgift</h3>
                                    <p className="text-xs text-slate-500">Vad kostar medlemskapet per månad? De flesta ligger mellan 100-170 kr.</p>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                    <ListChecks className="w-8 h-8 text-blue-600 mb-4" />
                                    <h3 className="font-bold text-slate-900 mb-2">Bransch</h3>
                                    <p className="text-xs text-slate-500">Är kassan expert på ditt yrke? Det kan ge snabbare handläggning.</p>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                    <ShieldCheck className="w-8 h-8 text-orange-600 mb-4" />
                                    <h3 className="font-bold text-slate-900 mb-2">Trygghet</h3>
                                    <p className="text-xs text-slate-500">Hur ser kopplingen till fackförbund och inkomstförsäkring ut?</p>
                                </div>
                            </div>
                            <p>
                                Vi rekommenderar att du först filtrerar fram de a-kassor som är relevanta för din yrkesgrupp. Använd sökfältet i jämförelseverktyget ovan för att se de kassor som matchar din profil.
                            </p>
                        </section>

                        {/* Detailed Steps */}
                        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 space-y-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Vad ska jag tänka på vid valet?</h2>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">1. Medlemsavgift</h3>
                                <p className="text-slate-600">Priset är oftast det som skiljer mest. Eftersom ersättningsnivåerna styrs av lag lönar det sig ofta att välja en prisvärd kassa, så länge de täcker ditt yrkesområde.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">2. Handläggningstider</h3>
                                <p className="text-slate-600">När du blir arbetslös vill du ha pengarna snabbt. Vissa kassor har kortare väntetider än andra, vilket kan vara avgörande för din ekonomi under de första månaderna.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">3. Facklig koppling</h3>
                                <p className="text-slate-600">Är du redan med i ett fackförbund? Då är det oftast smartast att välja den a-kassa som de samarbetar med, då det underlättar kommunikationen och utbetalning av inkomstförsäkring.</p>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <HelpCircle className="w-8 h-8 text-blue-600" />
                                Vanliga frågor om jämförelsen
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
                        <div className="bg-[#0B1B3F] text-white rounded-3xl p-8 shadow-xl sticky top-24">
                            <h3 className="text-xl font-bold mb-6">Redo att välja?</h3>
                            <p className="text-sm text-blue-100 mb-8 leading-relaxed">
                                Använd filtret ovan för att hitta de mest populära a-kassorna för din bransch. När du hittat rätt kan du klicka dig vidare för att göra din ansökan direkt.
                            </p>
                            <div className="space-y-4">
                                <Link href="/akassor" className="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all group">
                                    <span className="text-sm font-medium">Se alla a-kassor</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link href="/yrken" className="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all group">
                                    <span className="text-sm font-medium">Hitta via yrke</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
                            <Info className="w-8 h-8 text-blue-600 mb-4" />
                            <h3 className="text-lg font-bold text-blue-900 mb-3">Viktigt för 2026</h3>
                            <p className="text-sm text-blue-800 leading-relaxed">
                                Kom ihåg att nya regler gäller från oktober 2026. Jämför gärna hur de olika kassorna hanterar övergången och vilka digitala verktyg de erbjuder för att förenkla för dig som medlem.
                            </p>
                            <Link href="/akassa-regler" className="inline-block mt-4 text-sm font-bold text-blue-600 hover:underline">
                                Läs om nya reglerna &rarr;
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
