import { akassor, yrken } from "@/data/database";
import { articles } from "@/data/articles";
import Search from "@/components/Search";
import YrkeCard from "@/components/YrkeCard";
import AkassorGrid from "@/components/AkassorGrid";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ChevronRight, Shield, Search as SearchIcon, ArrowLeftRight, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Välj rätt a-kassa 2026 – jämför efter yrke | Välja A-kassa",
    description: "Hitta rätt a-kassa för ditt yrke. Jämför, läs guider och byt utan glapp. En oberoende och gratis guide förenklar ditt val för 2026.",
    openGraph: {
        title: "Välj rätt a-kassa 2026 – jämför efter yrke",
        description: "Hitta rätt a-kassa för ditt yrke. Jämför, läs guider och byt utan glapp. En oberoende och gratis guide.",
        url: "https://www.valjaakassa.se",
        images: [
            {
                url: "/hero-poster.jpg",
                width: 1200,
                height: 630,
                alt: "Jämför a-kassor",
            },
        ],
    },
};

export default function Home() {
    const targetYrkenNames = [
        "Lärare",
        "Sjuksköterska",
        "Undersköterska",
        "Elektriker",
        "Snickare",
        "Ekonom"
    ];

    const popularYrken = targetYrkenNames
        .map(name => yrken.find(y => y.name === name))
        .filter((y): y is typeof yrken[0] => y !== undefined);

    const faqs = [
        {
            q: "Vad är en a-kassa?",
            a: "En a-kassa (arbetslöshetskassa) är en organisation som betalar ut ersättning till medlemmar som blir arbetslösa. Syftet är att ge ekonomisk trygghet under tiden du söker nytt jobb. För att få full ersättning baserad på din tidigare inkomst krävs oftast att du varit medlem i minst 12 månader och uppfyller ett arbetsvillkor."
        },
        {
            q: "Måste jag vara med i a-kassan innan jag blir arbetslös?",
            a: "Ja, för att ha rätt till den inkomstbaserade ersättningen (upp till 80% av din lön) måste du ha varit medlem i en a-kassa i minst 12 månader innan du blir arbetslös. Om du inte är medlem eller har varit medlem en kortare tid kan du i vissa fall få en lägre grundersättning, men den är betydligt lägre."
        },
        {
            q: "Hur mycket kostar det att vara med i a-kassan?",
            a: "Medlemsavgiften varierar mellan olika a-kassor, men ligger vanligtvis mellan 110 och 200 kronor per månad. Avgiften finansierar en del av den ersättning som betalas ut till arbetslösa medlemmar. Det är en billig försäkring för din inkomst jämfört med den trygghet den ger."
        },
        {
            q: "Kan jag byta a-kassa när jag vill?",
            a: "Ja, du kan byta a-kassa när som helst. Det är vanligt att byta om man byter yrke eller bransch till en som täcks bättre av en annan kassa. Det viktigaste är att se till att det inte blir något glapp mellan medlemskapen, så att du behåller din intjänade tid."
        },
        {
            q: "Tappar jag dagar om jag byter a-kassa?",
            a: "Nej, så länge du gör bytet utan glapp (alltså att du blir medlem i den nya kassan dagen efter att du lämnat den gamla) så får du tillgodoräkna dig din tidigare medlemstid. Det betyder att du inte behöver börja om från noll hos din nya a-kassa."
        },
        {
            q: "Vad är skillnaden mellan a-kassa och inkomstförsäkring?",
            a: "A-kassan har ett tak för hur mycket ersättning du kan få (ca 26 400 kr före skatt). Om du tjänar mer än så ger a-kassan inte 80% av hela din lön. En inkomstförsäkring kompletterar a-kassan så att du kan få 80% av din faktiska lön även om du tjänar över taket."
        },
        {
            q: "Vilken a-kassa ska egenföretagare välja?",
            a: "Det finns flera a-kassor som välkomnar egenföretagare. Vissa är nischade mot specifika branscher, medan till exempel SMÅA (Småföretagarnas A-kassa) är särskilt inriktad på just företagare oavsett bransch. Även breda a-kassor som Alfa-kassan eller Unionen kan vara alternativ beroende på verksamhetens art."
        },
        {
            q: "Gäller a-kassa om jag jobbar deltid?",
            a: "Ja, a-kassan gäller även för dig som jobbar deltid. Om du blir arbetslös från din deltidsanställning kan du få ersättning, och du kan även få så kallad deltidsersättning om du jobbar deltid men vill jobba mer. Det finns dock begränsningar för hur många veckor du kan få deltidsersättning."
        },
        {
            q: "Hur länge måste jag vara medlem för att få ersättning?",
            a: "För att få inkomstbaserad ersättning krävs normalt 12 månaders sammanhängande medlemskap. Du måste också ha arbetat en viss mängd under det senaste året (arbetsvillkoret). Om du uppfyller arbetsvillkoret men inte varit medlem i 12 månader kan du ansöka om grundersättning."
        },
        {
            q: "Är valjaakassa.se en a-kassa?",
            a: "Nej, valjaakassa.se är en oberoende informationssida och jämförelsetjänst. Vi hjälper dig att hitta rätt a-kassa genom att sammanställa fakta, avgifter och rekommendationer. Vi administrerar inga medlemskap själva – när du bestämt dig guidar vi dig till respektive a-kassas ansökningssida."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans">
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-[#0B1B3F] py-24 sm:py-32">
                <div className="absolute inset-0 -z-10 h-full w-full">
                    <Image
                        src="/assets/images/hero-home.png"
                        alt="Hero background"
                        fill
                        className="object-cover object-center opacity-20"
                        priority
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
                    <div className="mx-auto max-w-3xl">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                            Välj rätt a-kassa – snabbt, enkelt och tryggt
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-blue-100 max-w-2xl mx-auto">
                            Att välja rätt a-kassa kan kännas krångligt – men det behöver det inte vara. På valjaakassa.se hjälper vi dig hitta vilken a-kassa som passar ditt yrke och din situation. Jämför och välj med trygghet – helt gratis.
                        </p>
                        <div className="mt-10 mb-8 w-full max-w-lg mx-auto bg-white/10 backdrop-blur-md p-1 rounded-2xl border border-white/20 shadow-2xl">
                            <Search />
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 mt-8">
                            <div className="flex items-center gap-2 text-blue-200 text-sm">
                                <Shield className="w-5 h-5 text-green-400" />
                                <span>Oberoende jämförelse</span>
                            </div>
                            <div className="flex items-center gap-2 text-blue-200 text-sm">
                                <Shield className="w-5 h-5 text-green-400" />
                                <span>Uppdaterade avgifter 2026</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popular Professions Section (Börja här) */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
                            Börja här – välj ditt yrke
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Välj yrke och se vilken a-kassa som vanligtvis passar bäst. Du kan alltid läsa mer och jämföra innan du bestämmer dig.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 text-left">
                        {popularYrken.map((yrke) => {
                            const recommendedAkassa = akassor.find(
                                (a) => a.id === yrke.recommendedAkassaId
                            );
                            return (
                                <YrkeCard
                                    key={yrke.slug}
                                    yrke={yrke}
                                    akassa={recommendedAkassa}
                                />
                            );
                        })}
                    </div>
                    <div className="mt-16 text-center">
                        <Link
                            href="/yrken"
                            className="inline-flex items-center group font-bold text-blue-600 hover:text-blue-700 transition-colors"
                        >
                            Alla yrken <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Så fungerar det */}
            <section className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Så fungerar det</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                                <SearchIcon className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-xl mb-3">1. Välj yrke eller se lista</h3>
                            <p className="text-slate-600 leading-relaxed">Hitta ditt yrke för att se skräddarsydda rekommendationer eller bläddra bland alla Sveriges a-kassor.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                                <SearchIcon className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-xl mb-3">2. Jämför avgifter & villkor</h3>
                            <p className="text-slate-600 leading-relaxed">Läs om avgifter, villkor och vem kassan passar för. Vi hjälper dig att förstå skillnaderna så du väljer rätt.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                                <ArrowLeftRight className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-xl mb-3">3. Gå med eller byt</h3>
                            <p className="text-slate-600 leading-relaxed">Gå med direkt hos den valda a-kassan. Vi guidar dig även genom processen att byta helt utan krångel eller glapp.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Content Section 1 */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Varför behöver man vara med i en a-kassa?</h2>
                    <div className="prose prose-lg prose-blue text-slate-600">
                        <p>
                            En a-kassa är grundbulten i den svenska trygghetsmodellen på arbetsmarknaden. I praktiken fungerar den som en försäkring för din inkomst. Genom att betala en låg månadsavgift säkrar du rätten till ekonomisk ersättning om du skulle bli arbetslös. Detta ger dig ett nödvändigt andrum för att kunna fokusera på att hitta ett nytt arbete utan att behöva oroa dig för dina fasta utgifter som hyra och mat.
                        </p>
                        <p>
                            Det är viktigt att förstå att a-kassan inte fungerar som en akut försäkring du kan teckna när du väl förlorat jobbet. För att ha rätt till full ersättning baserat på din tidigare lön (upp till 80%) krävs det oftast att du har varit medlem i minst 12 månader. Därför är det ett av de viktigaste besluten du kan fatta för din ekonomiska stabilitet att gå med så tidigt som möjligt i arbetslivet, eller omedelbart när du byter karriärsbana.
                        </p>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-20 mb-8">Vilken a-kassa ska jag välja?</h2>
                    <div className="prose prose-lg prose-blue text-slate-600">
                        <p>
                            Valet av a-kassa baseras oftast på vilket yrkesområde eller vilken bransch du arbetar inom. I Sverige är många a-kassor historiskt kopplade till specifika fackförbund och yrkesgrupper, vilket betyder att de har expertis inom just din bransch. Till exempel finns det specifika kassor för lärare, vårdförbund, elektriker och byggnadsarbetare.
                        </p>
                        <p>
                            Samtidigt finns det mer generella a-kassor som är öppna för alla yrkeskategorier, oavsett utbildning eller sektor. Vissa fokuserar mer på akademiker, medan andra välkomnar alla anställda och egenföretagare. Det som är absolut viktigast när du väljer är att kontrollera att a-kassan faktiskt accepterar din yrkesinriktning och att deras villkor matchar din nuvarande situation. Kom ihåg att du alltid kan byta kassa om du byter jobb – vi hjälper dig att göra det valet tryggt och enkelt genom att presentera all information på ett ställe.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                            <HelpCircle className="w-8 h-8 text-blue-400" />
                            Vanliga frågor om att välja a-kassa
                        </h2>
                        <p className="text-slate-400">Här har vi samlat de vanligaste frågorna för att hjälpa dig navigera rätt.</p>
                    </div>
                    <div className="space-y-8">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                <h3 className="font-bold text-lg mb-3 text-blue-300">{faq.q}</h3>
                                <p className="text-slate-300 leading-relaxed text-sm lg:text-base">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Relaterade guider */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">Relaterade guider</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            { title: "Byta a-kassa", href: "/byta-a-kassa" },
                            { title: "Inkomstförsäkring", href: "/inkomstforsakring" },
                            { title: "A-kassa regler 2026", href: "/akassa-regler" },
                            { title: "Karens och ersättning", href: "/aktivitetsstod" },
                            { title: "A-kassa för studenter", href: "/artiklar/a-kassa-for-studenter" },
                            { title: "A-kassa för egenföretagare", href: "/artiklar/a-kassa-for-egenforetagare-och-foretagare" }
                        ].map((guide, i) => (
                            <Link
                                key={i}
                                href={guide.href}
                                className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all text-center font-bold text-slate-800"
                            >
                                {guide.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Grid of A-kassor as fallback/secondary */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Alla a-kassor på ett ställe</h2>
                        <p className="text-lg text-gray-600">Hitta källan till din trygghet bland Sveriges alla kassor.</p>
                    </div>
                    <AkassorGrid />
                </div>
            </section>
        </div>
    );
}
