import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TrendingUp, Clock, ShieldAlert, Briefcase, ChevronRight, HelpCircle, ShieldCheck, CheckCircle2, Info } from "lucide-react";
import { akassor as logoData } from "@/data/akassor";

export const metadata = {
    title: "Inkomstförsäkring – komplett guide med a-kassa & fackförbund 2026",
    description: "Lär dig hur inkomstförsäkring fungerar med a-kassan. När lönar det sig, vilka villkor gäller och hur ser det ut hos Unionen, Akademikernas m.fl.?",
};

export default function InkomstforsakringPage() {
    const comparisonData = [
        { name: "Unionen", maxSalary: "60 000 kr", maxDays: "150 dagar", cost: "50-235 kr", slug: "unionen" },
        { name: "Akademikernas (SSR/Sveriges Ingenjörer)", maxSalary: "100 000 kr", maxDays: "140-150 dagar", cost: "65-265 kr", slug: "aea" },
        { name: "Kommunal", maxSalary: "45 000 kr", maxDays: "150 dagar", cost: "138-495 kr", slug: "kommunal" },
        { name: "Vision", maxSalary: "100 000 kr", maxDays: "160 dagar", cost: "47-260 kr", slug: "vision" }
    ];

    const faqs = [
        {
            q: "Måste jag vara med i a-kassan för att få inkomstförsäkring?",
            a: "Ja, det är ett absolut krav. Inkomstförsäkringen betalas bara ut som ett komplement till ersättningen från din a-kassa. Utan a-kassa finns ingen bas att fylla på."
        },
        {
            q: "Vad är kvalifikationstid för inkomstförsäkring?",
            a: "De flesta försäkringar kräver att du varit medlem i 12 månader innan du blir arbetslös för att du ska ha rätt till ersättning. Vissa tillåter att du tillgodoräknar dig tid från en tidigare inkomstförsäkring."
        },
        {
            q: "Täcker försäkringen om jag säger upp mig själv?",
            a: "Normalt inte. De flesta inkomstförsäkringar gäller endast vid ofrivillig arbetslöshet, alltså vid uppsägning på grund av arbetsbrist eller liknande."
        }
    ];

    return (
        <main className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-[#0B1B3F] text-white py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="/images/content/inkomstforsakring-hero-woman.jpg"
                        alt="Inkomstförsäkring guide"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
                            Inkomstförsäkring – Extra trygghet för din lön
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed font-medium">
                            När a-kassans tak inte räcker till. Vi guidar dig genom marknadens inkomstförsäkringar så att du kan behålla upp till 80% av din lön vid arbetslöshet.
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
                            <h2 className="text-slate-900">När behöver man en inkomstförsäkring?</h2>
                            <p>
                                A-kassan har ett tak för hur mycket ersättning man kan få per dag. Under 2026 ligger detta tak på en nivå som motsvarar en månadslön på ungefär 33 000 – 34 000 kr före skatt. Om du tjänar mer än så, kommer din ersättning från a-kassan att bli lägre än 80 % av din faktiska lön.
                            </p>
                            <p>
                                Det är här <strong>inkomstförsäkringen</strong> kommer in. Den fyller på glappet mellan a-kassans tak och din faktiska lön, så att du kan få ut runt 80 % av hela din tidigare lön. För dig med högre fasta kostnader kan detta vara skillnaden mellan att kunna bo kvar i sitt hem eller tvingas till drastiska förändringar.
                            </p>

                            <h2 className="text-slate-900">Tre vanliga sätt att teckna försäkringen</h2>
                            <p>
                                Det finns tre huvudvägar till en inkomstförsäkring:
                            </p>
                            <ol>
                                <li><strong>Via fackförbundet:</strong> Det absolut vanligaste. Försäkringen ingår ofta i medlemsavgiften till facket.</li>
                                <li><strong>Via privat försäkringsbolag:</strong> Om du inte vill vara med i facket kan du teckna en fristående inkomstförsäkring privat.</li>
                                <li><strong>Gruppförsäkring:</strong> Vissa andra organisationer eller gruppavtal kan erbjuda liknande lösningar.</li>
                            </ol>
                        </section>

                        {/* Comparison Table */}
                        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 overflow-hidden">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <TrendingUp className="w-8 h-8 text-blue-600" />
                                Jämför inkomstförsäkringar 2026
                            </h2>
                            <div className="overflow-x-auto -mx-8 sm:-mx-12 px-8 sm:px-12">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b border-slate-100">
                                            <th className="py-4 font-bold text-slate-900">Aktör / Fack</th>
                                            <th className="py-4 font-bold text-slate-900">Maxlön</th>
                                            <th className="py-4 font-bold text-slate-900">Maxdagar</th>
                                            <th className="py-4 font-bold text-slate-900"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {comparisonData.map((item, i) => (
                                            <tr key={i} className="hover:bg-slate-50 transition-colors group">
                                                <td className="py-6 pr-4">
                                                    <div className="font-bold text-slate-900">{item.name}</div>
                                                    <div className="text-xs text-slate-500 mt-1">Ingår oftast i medlemskapet</div>
                                                </td>
                                                <td className="py-6 pr-4 text-slate-600">{item.maxSalary}</td>
                                                <td className="py-6 pr-4 text-slate-600">{item.maxDays}</td>
                                                <td className="py-6 text-right">
                                                    <Link href={`/akassa/${item.slug}`} className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 group-hover:underline">
                                                        Läs mer <ChevronRight className="w-4 h-4" />
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Key Requirements */}
                        <section className="bg-blue-600 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
                            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <ShieldCheck className="w-8 h-8" />
                                Viktiga krav för att få ersättning
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold mb-2">Medlem i a-kasse</h3>
                                    <p className="text-sm opacity-90">Du måste alltid vara medlem i en svensk a-kassa. Inkomstförsäkringen är ett tillägg, inte en ersättning för a-kassan.</p>
                                </div>
                                <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold mb-2">12 månaders medlemskap</h3>
                                    <p className="text-sm opacity-90">Majoriteten av alla inkomstförsäkringar kräver att du varit ansluten i minst ett år innan du blir arbetssökande.</p>
                                </div>
                                <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold mb-2">Ofrivillig uppsägning</h3>
                                    <p className="text-sm opacity-90">Om du själv väljer att sluta utan godtagbara skäl riskerar du att inte få någon ersättning alls från försäkringen.</p>
                                </div>
                                <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold mb-2">A-kassans grundkrav</h3>
                                    <p className="text-sm opacity-90">Du måste uppfylla a-kassans arbetsvillkor och vara inskriven på Arbetsförmedlingen.</p>
                                </div>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <HelpCircle className="w-8 h-8 text-blue-600" />
                                Vanliga frågor om inkomstförsäkring
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
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                                <h3 className="text-lg font-bold mb-6 text-slate-900">Är det värt det?</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="p-2 bg-blue-50 rounded-lg shrink-0">
                                            <TrendingUp className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-800">För dig med hög lön</p>
                                            <p className="text-xs text-slate-500 mt-1">Tjänar du över 34 000 kr? Då ger a-kassan bara en bråkdel av din lön utan tillägg.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="p-2 bg-green-50 rounded-lg shrink-0">
                                            <ShieldAlert className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-800">Trygghet för familjen</p>
                                            <p className="text-xs text-slate-500 mt-1">Säkra din förmåga att betala bolån och fasta avgifter även vid omställning.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="p-2 bg-purple-50 rounded-lg shrink-0">
                                            <Clock className="w-6 h-6 text-purple-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-800">Längre ersättning</p>
                                            <p className="text-xs text-slate-500 mt-1">Få 80% lön under en längre tid än vad a-kassan ensam erbjuder.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10 pt-8 border-t border-slate-100">
                                    <Link href="/jamfor" className="block w-full text-center bg-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-500 transition-all shadow-md">
                                        Jämför a-kassor nu
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-amber-50 rounded-3xl p-8 border border-amber-100 shadow-sm transition-transform hover:scale-[1.02]">
                                <div className="flex items-center gap-3 mb-4">
                                    <Info className="w-6 h-6 text-amber-600 shrink-0" />
                                    <h3 className="text-lg font-bold text-amber-900 mb-0 leading-tight">Privat inkomstförsäkring</h3>
                                </div>
                                <p className="text-sm text-amber-800 leading-relaxed mb-4">
                                    Som egenföretagare kan du också ha inkomstförsäkring. Det finns specifika lösningar via exempelvis <strong>Unionen Egenföretagare</strong> eller <strong>SmåA</strong> som är anpassade för dina behov.
                                </p>
                                <p className="text-xs text-amber-700/70 italic">
                                    Fungerar på samma sätt som för anställda men med anpassade villkor för företagare.
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
