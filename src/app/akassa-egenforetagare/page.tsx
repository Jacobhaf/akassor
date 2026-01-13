import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, Info, ArrowRight, HelpCircle, ShieldCheck, RefreshCw, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
    title: "A-kassa för egenföretagare 2026 – guide och tips",
    description: "Läs hur a-kassa fungerar för egenföretagare. Jämför alternativ, se vad du ska tänka på och byt a-kassa utan glapp. Gratis guide.",
};

export default function AkassaEgenforetagarePage() {
    const faqs = [
        {
            q: "Är a-kassa för egenföretagare annorunda än för anställda?",
            a: "Ja, ofta. Reglerna kan vara mer detaljerade eftersom du kan behöva visa hur verksamheten bedrivs och om den är vilande eller avslutad när du söker ersättning."
        },
        {
            q: "Kan jag få a-kassa om jag driver företag vid sidan av en anställning?",
            a: "Det kan vara möjligt, men det beror på din situation. Det är viktigt att läsa villkoren och förstå hur din anställning och din verksamhet påverkar ersättningen."
        },
        {
            q: "Måste jag lägga ner företaget för att få ersättning?",
            a: "In vissa fall kan du behöva avsluta eller pausa verksamheten. Exakt vad som gäller kan variera, så kontrollera alltid vad din a-kassa kräver."
        },
        {
            q: "När är det bäst att gå med i en a-kassa?",
            a: "Det är ofta bäst att gå med så tidigt som möjligt. A-kassa är ett skydd som fungerar bäst när det redan finns på plats innan du behöver det."
        },
        {
            q: "Kan jag byta a-kassa om jag byter bransch?",
            a: "Ja. Om du går från en bransch till en annan kan det vara rimligt att byta till en a-kassa som matchar din nya situation bättre."
        },
        {
            q: "Är valjaakassa.se en a-kassa?",
            a: "Nej. valjaakassa.se är en oberoende guide som hjälper dig jämföra och välja rätt a-kassa. Själva medlemskapet tecknar du alltid hos den a-kassa du väljer."
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
                        src="/images/content/akassa-egenforetagare-hero.png"
                        alt="Egenföretagare arbetar vid laptop"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight uppercase">
                            A-kassa för egenföretagare 2026 – så väljer du rätt
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed font-medium">
                            Trygghet för dig som driver eget. Vi guidar dig genom regler, villkor och val av a-kassa för ett hållbart företagande.
                        </p>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 -mt-10 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        <article className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 prose prose-lg prose-blue max-w-none text-slate-600">
                            <p>
                                Att vara egenföretagare innebär frihet, men också större ansvar om inkomsten plötsligt minskar. Därför är det extra viktigt att se över vilken a-kassa som passar dig som driver eget. Här får du en tydlig guide till hur a-kassa fungerar för egenföretagare, vad du bör tänka på innan du går med och hur du jämför olika alternativ.
                            </p>

                            <h2 className="text-slate-900">Kan egenföretagare få a-kassa?</h2>
                            <p>
                                Ja, egenföretagare kan ha rätt till a-kassa, men reglerna kan vara mer komplexa än för anställda. För att kunna få ersättning behöver du vanligtvis uppfylla både medlemsvillkor och arbetsvillkor, och du kan även behöva visa att din verksamhet är avslutad eller vilande beroende på situation.
                            </p>
                            <p>
                                Det viktiga är att du väljer en a-kassa som fungerar för din typ av företagande och att du förstår vilka krav som kan gälla om du någon gång behöver söka ersättning.
                            </p>

                            <h2 className="text-slate-900">Vilken a-kassa ska egenföretagare välja?</h2>
                            <p>
                                Det finns inte ett enda svar som passar alla, eftersom egenföretagare kan se väldigt olika ut. Du kan till exempel vara konsult med uppdrag hos olika kunder, frilansare med varierande inkomster, hantverkare med egen firma, e-handlare eller butiksägare, eller deltidare som kombinerar anställning med egen verksamhet.
                            </p>
                            <p>
                                För många egenföretagare är det viktigaste att välja en a-kassa som är tydlig med villkor kring företagande, passar din bransch eller din yrkesinriktning och har information som är lätt att förstå när det gäller vilande eller avslutat företag.
                            </p>
                            <p>
                                Om du både är anställd och driver företag vid sidan av kan det vara extra viktigt att läsa på om hur kombinationen påverkar ersättningen.
                            </p>

                            <h2 className="text-slate-900">Viktigt att känna till som egenföretagare</h2>
                            <p>
                                Som egenföretagare kan du behöva ta hänsyn till fler saker än en vanlig anställd. Här är några exempel på sådant som ofta spelar roll.
                            </p>

                            <h3 className="text-slate-900">Du kan behöva visa att verksamheten upphör</h3>
                            <p>
                                I många fall krävs det att verksamheten bedöms vara avslutad eller vilande för att du ska kunna få ersättning. Exakt vad som gäller varierar beroende på situation och hur ditt företag är upplagt.
                            </p>

                            <h3 className="text-slate-900">Inkomsten kan variera</h3>
                            <p>
                                Om du har ojämna inkomster kan det påverka hur du planerar din trygghet. A-kassa kan vara ett viktigt grundskydd, men det är också vanligt att egenföretagare ser över andra skydd, som buffert eller inkomstförsäkring.
                            </p>

                            <h3 className="text-slate-900">Du behöver vara medlem i tid</h3>
                            <p>
                                Precis som för anställda är det vanligt att du behöver vara medlem en tid för att kunna få full nytta av a-kassan. Därför är det smart att gå med innan du hamnar i en svår situation.
                            </p>

                            <h2 className="text-slate-900">Vad kostar a-kassa för egenföretagare?</h2>
                            <p>
                                Avgiften för a-kassa skiljer sig mellan olika a-kassor. För dig som egenföretagare är det lätt att fastna på priset, men det är ofta minst lika viktigt att välja en a-kassa som passar din yrkesinriktning eller bransch, har tydlig information om företagande och gör det enkelt att förstå vad som gäller vid ansökan.
                            </p>
                            <p>
                                A-kassan är i grunden en trygghet vid inkomstbortfall, så det är värt att prioritera rätt val framför att bara välja billigast.
                            </p>

                            <h2 className="text-slate-900">A-kassa och inkomstförsäkring för egenföretagare</h2>
                            <p>
                                Många som driver eget undrar om a-kassa räcker, eller om man även behöver en <Link href="/inkomstforsakring">inkomstförsäkring</Link>.
                            </p>
                            <p>
                                A-kassa är grunden för tryggheten vid arbetslöshet. Inkomstförsäkring kan i vissa fall ge ett extra skydd utöver a-kassan.
                            </p>
                            <p>
                                Hur relevant inkomstförsäkring är beror bland annat på din inkomstivå och hur din företagssituation ser ut. Många väljer att först se till att a-kassan är på plats och sedan utvärdera om extra skydd behövs.
                            </p>

                            <h2 className="text-slate-900">Om du vill byta a-kassa som egenföretagare</h2>
                            <p>
                                Du kan byta a-kassa även som egenföretagare. Det viktigaste är att göra bytet på rätt sätt så att du undviker glapp i medlemskapet.
                            </p>
                            <p>
                                En bra tumregel är att du ansöker till den nya a-kassan först, inväntar bekräftelse och avslutar den gamla när bytet är klart. Läs mer i vår guide om att <Link href="/byta-a-kassa">byta a-kassa</Link>.
                            </p>

                            <h2 className="text-slate-900 text-2xl font-bold mb-8">Vanliga frågor om a-kassa för egenföretagare</h2>
                            <div className="not-prose space-y-6">
                                {faqs.map((f, i) => (
                                    <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <h3 className="font-bold text-slate-900 mb-2">{f.q}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{f.a}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-slate-900 mt-12">Sammanfattning – så väljer du rätt a-kassa som egenföretagare</h2>
                            <p>
                                För att välja rätt a-kassa som egenföretagare är det smart att välja en a-kassa som passar din bransch eller yrkesinriktning, läsa vad som gäller om verksamheten måste vara vilande eller avslutad, se a-kassan som ett grundskydd för din ekonomi och byta a-kassa på rätt sätt om du behöver.
                            </p>
                            <p>
                                Vill du ha en snabb rekommendation kan du gå till yrkessidorna och välja det område som bäst matchar din verksamhet.
                            </p>
                        </article>

                        {/* Bottom Links */}
                        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100">
                            <h2 className="text-xl font-bold text-slate-900 mb-6">Läs mer:</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Link href="/yrken" className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md transition-all group">
                                    <span className="text-slate-700 font-medium group-hover:text-blue-600">A-kassa efter yrke</span>
                                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                                </Link>
                                <Link href="/akassor" className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md transition-all group">
                                    <span className="text-slate-700 font-medium group-hover:text-blue-600">Alla a-kassor</span>
                                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                                </Link>
                                <Link href="/byta-a-kassa" className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md transition-all group">
                                    <span className="text-slate-700 font-medium group-hover:text-blue-600">Byta a-kassa</span>
                                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                                </Link>
                                <Link href="/inkomstforsakring" className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md transition-all group">
                                    <span className="text-slate-700 font-medium group-hover:text-blue-600">Inkomstförsäkring</span>
                                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                                </Link>
                                <Link href="/jamfor" className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md transition-all group">
                                    <span className="text-slate-700 font-medium group-hover:text-blue-600">Hur vi jämför a-kassor</span>
                                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                                </Link>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 sticky top-24">
                            <h3 className="text-lg font-bold mb-6 text-slate-900">Snabbfakta för dig</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="p-2 bg-blue-50 rounded-lg shrink-0">
                                        <Briefcase className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-800">Passar alla bolagsformer</p>
                                        <p className="text-xs text-slate-500 mt-1">Oavsett om du har AB, enskild firma eller är frilans.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="p-2 bg-green-50 rounded-lg shrink-0">
                                        <ShieldCheck className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-800">Ekonomisk trygghet</p>
                                        <p className="text-xs text-slate-500 mt-1">Ett viktigt grundskydd om marknaden förändras.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="p-2 bg-purple-50 rounded-lg shrink-0">
                                        <RefreshCw className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-800">Enkelt att byta</p>
                                        <p className="text-xs text-slate-500 mt-1">Du behåller din intjänade tid vid ett korrekt byte.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 pt-8 border-t border-slate-100">
                                <Link href="/jamfor" className="block w-full text-center bg-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-500 transition-all shadow-md">
                                    Hitta rätt a-kassa nu
                                </Link>
                            </div>
                        </div>

                        <div className="bg-amber-50 rounded-3xl p-8 border border-amber-100">
                            <Info className="w-8 h-8 text-amber-600 mb-4" />
                            <h3 className="text-lg font-bold text-amber-900 mb-3">Tänk på ramtiden</h3>
                            <p className="text-sm text-amber-800 leading-relaxed">
                                För att få ersättning baseras din dagpenning ofta på din genomsnittliga inkomst de senaste 12 månaderna. Se till att ha dina papper i ordning.
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
