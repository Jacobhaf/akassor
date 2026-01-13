import Image from "next/image";
import { yrken, akassor } from "@/data/database";
import Search from "@/components/Search";
import YrkenList from "@/components/YrkenList";
import { Briefcase, Info, CheckCircle, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Alla yrken – Hitta rätt a-kassa för ditt jobb | Välja A-kassa",
    description: "Guide till rätt a-kassa baserat på ditt yrke. Vi listar över 100 yrken och matchar dem med rekommenderade a-kassor för 2026. Hitta din bransch här.",
    openGraph: {
        title: "Alla yrken – Hitta rätt a-kassa för ditt jobb | Välja A-kassa",
        description: "Guide till rätt a-kassa baserat på ditt yrke. Vi listar över 100 yrken och matchar dem med rekommenderade a-kassor för 2026.",
        url: "https://www.valjaakassa.se/yrken",
        images: [
            {
                url: "/assets/images/hero-yrken.png",
                width: 1200,
                height: 630,
                alt: "Hitta a-kassa för yrke - Välja A-kassa",
            },
        ],
    },
};

export default function YrkenPage() {
    const faqs = [
        {
            q: "Varför matchas vissa yrken mot specifika a-kassor?",
            a: "A-kassor är ofta specialiserade på vissa branscher eller utbildningsnivåer. Genom att välja en kassa som förstår ditt yrke får du ofta bättre service och snabbare handläggning eftersom de känner till dina anställningsvillkor."
        },
        {
            q: "Kan jag välja en annan a-kassa än den rekommenderade?",
            a: "Ja, det finns ofta flera alternativ. Vissa a-kassor är dock begränsade till specifika yrkesgrupper, medan andra (som Alfa-kassan) är öppna för alla."
        },
        {
            q: "Vad händer om mitt yrke saknas i listan?",
            a: "Vi utökar ständigt vår lista. Om du inte hittar ditt exakta yrke, leta efter en liknande roll eller kontakta oss för vägledning."
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
            <div className="relative isolate overflow-hidden bg-[#0B1B3F] py-24 sm:py-32">
                <div className="absolute inset-0 -z-10 h-full w-full">
                    <Image
                        src="/assets/images/hero-yrken.png"
                        alt="Yrken och karriär"
                        fill
                        className="object-cover object-center opacity-20"
                        priority
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                            Hitta rätt a-kassa för ditt yrke
                        </h1>
                        <p className="text-xl leading-8 text-blue-100 font-medium">
                            Olika branscher har olika behov. Vi hjälper dig att hitta den a-kassa som har bäst koll på dina villkor och regler för 2026.
                        </p>
                        <div className="mt-10 max-w-md">
                            <Search />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Content Section */}
                    <div className="lg:col-span-2 space-y-12">
                        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 prose prose-lg prose-blue max-w-none text-slate-600">
                            <h2 className="text-slate-900">Varför är yrkesvalet viktigt för din a-kassa?</h2>
                            <p>
                                I Sverige är a-kassesystemet delvis uppbyggt kring branscher och yrkesgrupper. Även om det finns a-kassor som är öppna för alla, har de flesta en stark koppling till ett specifikt område, som till exempel läraryrket, vården eller byggbranschen.
                            </p>
                            <p>
                                När du väljer en a-kassa som är inriktad på just ditt yrke får du flera fördelar. Handläggarna förstår dina anställningsformer, vare sig du är timanställd, konsult eller fast anställd. De har också koll på de kollektivavtal som ofta styr dina villkor, vilket kan vara avgörande vid en eventuell arbetslöshet.
                            </p>

                            <h2 className="text-slate-900">Så hittar du rätt</h2>
                            <p>
                                Vi har kategoriserat över 100 olika yrken för att göra det enkelt för dig. Du kan antingen söka direkt efter din yrkestitel i sökfältet ovan eller bläddra i listan nedan. Varje yrkessida innehåller detaljerad information om:
                            </p>
                            <ul className="list-disc pl-5">
                                <li>Rekommenderad a-kassa för yrket</li>
                                <li>Huvudsakliga arbetsområden och branschkopplingar</li>
                                <li>Tips för dig som vill byta eller gå med för första gången</li>
                                <li>Länkar till relevanta inkomstförsäkringar</li>
                            </ul>
                        </section>

                        <section>
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                                    <Briefcase className="w-6 h-6 text-blue-600" />
                                    Utforska yrken
                                </h2>
                            </div>
                            <YrkenList yrken={yrken} akassor={akassor} />
                        </section>

                        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <HelpCircle className="w-8 h-8 text-blue-600" />
                                Vanliga frågor om yrken & a-kassa
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
                            <h3 className="text-xl font-bold mb-6">Expert-tips</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <CheckCircle className="w-6 h-6 text-green-400 shrink-0" />
                                    <p className="text-sm text-blue-100">Välj en kassa som matchar ditt huvudyrke för snabbare handläggning.</p>
                                </div>
                                <div className="flex gap-4">
                                    <CheckCircle className="w-6 h-6 text-green-400 shrink-0" />
                                    <p className="text-sm text-blue-100">Kombinera med fackligt medlemskap för extra trygghet och inkomstförsäkring.</p>
                                </div>
                                <div className="flex gap-4">
                                    <CheckCircle className="w-6 h-6 text-green-400 shrink-0" />
                                    <p className="text-sm text-blue-100">Glöm inte att medlemskapet i a-kassan är grunden för all ersättning.</p>
                                </div>
                            </div>
                            <div className="mt-10 pt-8 border-t border-white/10">
                                <Link href="/jamfor" className="block text-center bg-white text-[#0B1B3F] font-bold py-3 px-6 rounded-xl hover:bg-slate-100 transition-all shadow-lg">
                                    Jämför alla kassor
                                </Link>
                            </div>
                        </div>

                        <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
                            <Info className="w-8 h-8 text-blue-600 mb-4" />
                            <h3 className="text-lg font-bold text-blue-900 mb-3">Hittar du inte ditt yrke?</h3>
                            <p className="text-sm text-blue-800 leading-relaxed mb-6">
                                Vi uppdaterar ständigt vår databas för att inkludera fler yrkestitlar och branscher. Om din titel saknas kan du ofta hitta rätt genom att titta på den bransch du tillhör.
                            </p>
                            <Link href="/kontakt" className="text-sm font-bold text-blue-600 hover:underline">
                                Kontakta oss för hjälp &rarr;
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
