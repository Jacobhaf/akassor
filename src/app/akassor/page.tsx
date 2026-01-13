import AkassorGrid from "@/components/AkassorGrid";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2, HelpCircle, Briefcase, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
    title: "Alla a-kassor 2026 – lista och jämförelse | Välja A-kassa",
    description: "Se en översikt över Sveriges alla a-kassor för 2026. Välj efter yrke och bransch, jämför avgifter och hitta rätt kassa för din trygghet.",
    openGraph: {
        title: "Alla a-kassor 2026 – lista och jämförelse",
        description: "Se en översikt över Sveriges a-kassor. Välj efter yrke och bransch, jämför alternativ och hitta rätt a-kassa snabbt.",
        url: "https://www.valjaakassa.se/akassor",
        images: [
            {
                url: "/hero-poster.jpg",
                width: 1200,
                height: 630,
                alt: "Alla a-kassor - Välja A-kassa",
            },
        ],
    },
};

export default function AkassorPage() {
    const faqs = [
        {
            q: "Hur många a-kassor finns det i Sverige?",
            a: "Det finns för närvarande 24 olika a-kassor i Sverige. Många är inriktade på specifika yrken eller branscher, medan ett fåtal är öppna för alla oavsett yrke."
        },
        {
            q: "Skiljer sig ersättningen mellan olika a-kassor?",
            a: "Nej, själva reglerna för hur mycket ersättning du kan få är lagstadgade och samma för alla a-kassor. Det som skiljer dem åt är främst medlemsavgiften, vem de vänder sig till och deras expertis inom olika yrkesområden."
        },
        {
            q: "Kan jag vara medlem i flera a-kassor samtidigt?",
            a: "Nej, du kan bara vara medlem i en a-kassa åt gången. Om du jobbar inom flera områden bör du välja den kassa som bäst matchar din huvudsakliga sysselsättning."
        },
        {
            q: "Vad kostar det att vara medlem?",
            a: "Avgiften varierar mellan ca 110 kr och 200 kr per månad. Avgiften kan ändras över tid beroende på hur arbetslösheten ser ut inom a-kassans medlemsgrupp."
        },
        {
            q: "Måste jag vara med i facket för att vara med i a-kassan?",
            a: "Nej, fackförbund och a-kassa är två separata saker. Du kan välja att bara vara med i a-kassan, men många väljer att vara med i båda för fullständigt stöd och extra inkomstförsäkring."
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-[#0B1B3F] py-24 sm:py-32">
                <div className="absolute inset-0 -z-10 h-full w-full">
                    <Image
                        src="/assets/images/hero-akassor.png"
                        alt="Hero background"
                        fill
                        className="object-cover object-center opacity-20"
                        priority
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="mx-auto max-w-3xl">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                            Alla a-kassor i Sverige (2026)
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-blue-100">
                            Här hittar du en aktuell översikt över Sveriges a-kassor. Välj a-kassa utifrån ditt yrke, din bransch eller din situation – och jämför innan du går med.
                        </p>
                    </div>
                </div>
            </div>

            {/* Intro Content */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto prose prose-lg prose-blue text-slate-600">
                    <h2 className="text-gray-900 font-bold">Så väljer du rätt a-kassa</h2>
                    <p>Att välja rätt kassa handlar om mer än bara lägsta avgift. Det handlar om att hitta en samarbetspartner som förstår din bransch och dina arbetsvillkor. Här är fem punkter att utgå ifrån:</p>
                    <ul className="space-y-4 my-8 list-none pl-0">
                        <li className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 shrink-0" />
                            <div><strong>Utgå från yrke/bransch:</strong> De flesta kassor är specialiserade på vissa yrkesgrupper.</div>
                        </li>
                        <li className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 shrink-0" />
                            <div><strong>Kontrollera sysselsättning:</strong> Se till att a-kassan passar din anställningsform (t.ex. timanställd, fast eller egenföretagare).</div>
                        </li>
                        <li className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 shrink-0" />
                            <div><strong>Se medlemsavgiften:</strong> Jämför vad det kostar per månad.</div>
                        </li>
                        <li className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 shrink-0" />
                            <div><strong>Läs om medlemskapet:</strong> Förstå vad kassan erbjuder utöver grundersättningen.</div>
                        </li>
                        <li className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 shrink-0" />
                            <div><strong>Vid byte:</strong> Gör bytet utan glapp för att behålla din intjänade medlemstid.</div>
                        </li>
                    </ul>

                    <h2 className="text-gray-900 font-bold mt-16">Vanliga typer av a-kassor</h2>
                    <div className="grid md:grid-cols-3 gap-8 my-10 not-prose">
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h3 className="font-bold text-slate-900 mb-3">Branschkopplade</h3>
                            <p className="text-sm text-slate-600">Specialiserade på specifika yrken som lärare, byggnadsarbetare eller sjuksköterskor.</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h3 className="font-bold text-slate-900 mb-3">Breda a-kassor</h3>
                            <p className="text-sm text-slate-600">Öppna för de flesta yrkeskategorier oavsett bransch eller utbildningsnivå.</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h3 className="font-bold text-slate-900 mb-3">För företagare</h3>
                            <p className="text-sm text-slate-600">Inriktade på de särskilda regler och behov som finns för egenföretagare.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid Section */}
            <div className="bg-slate-50 py-20 px-6 border-y border-slate-200">
                <div className="max-w-7xl mx-auto">
                    <AkassorGrid />
                </div>
            </div>

            {/* FAQ Section */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center gap-3">
                        <HelpCircle className="w-8 h-8 text-blue-600" />
                        Vanliga frågor om a-kassor
                    </h2>
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                                <h3 className="font-bold text-lg mb-3 text-slate-900">{faq.q}</h3>
                                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer Links Hub */}
            <section className="bg-slate-900 text-white py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-2xl font-bold mb-8">Hittade du inte rätt?</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/yrken" className="flex items-center gap-2 bg-white/10 px-6 py-4 rounded-xl hover:bg-white/20 transition-all font-bold group">
                            <Briefcase className="w-5 h-5 text-blue-400" />
                            Hitta via yrke
                        </Link>
                        <Link href="/byta-a-kassa" className="flex items-center gap-2 bg-white/10 px-6 py-4 rounded-xl hover:bg-white/20 transition-all font-bold group">
                            <RefreshCw className="w-5 h-5 text-green-400" />
                            Byta a-kassa
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
