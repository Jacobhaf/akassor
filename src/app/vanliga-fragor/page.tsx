import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// Let's implement a simple disclosure component inline to avoid dependency issues if Accordion doesn't exist or isn't exported as expected.
// Actually, I'll use a simple HTML details/summary approach for SEO and simplicity, or a stateful component if client side.
// Since this is a server component by default, and I want interactivity, I should make a client component part or use standard details/summary which works without JS mostly but styling is better with JS.
// I'll make the whole page content a client component or just standard static HTML for FAQ which is great for SEO.
// Let's use simple semantic HTML for FAQs with styles.

export const metadata: Metadata = {
    title: "Vanliga frågor och svar om a-kassa | Välja A-kassa",
    description: "Hitta svar på dina frågor om a-kassa, ersättning, regler och medlemskap. Vi samlar allt du behöver veta på ett ställe.",
};

const faqData = [
    {
        category: "Få hjälp med a-kassan",
        questions: [
            { q: "Hur hänger a-kassan och facket ihop?", a: "A-kassan och facket är separata organisationer. Du kan vara medlem i a-kassan utan att vara med i facket." },
            { q: "Vad är Arbetsförmedlingens roll för a-kassan?", a: "Arbetsförmedlingen kontrollerar att du är aktivt arbetssökande och rapporterar detta till a-kassan." },
            { q: "Vad är Sveriges a-kassor?", a: "Sveriges a-kassor är en samarbetsorganisation för landets a-kassor och företräder dem nationellt." },
            { q: "Vilken är Försäkringskassans roll vid arbetslöshet?", a: "Försäkringskassan ansvarar för exempelvis aktivitetsstöd och sjukpenning, inte för a-kasseersättning." },
        ]
    },
    {
        category: "Arbetsrätt",
        questions: [
            { q: "Hur fungerar hyvling av arbetstid?", a: "Hyvling innebär att arbetsgivaren minskar din arbetstid. Det kan påverka din rätt till a-kassa." },
        ]
    },
    {
        category: "Avgifter",
        questions: [
            { q: "Betalar man skatt på a-kassa?", a: "Ja, a-kassa räknas som skattepliktig inkomst." },
            { q: "Kan man betala a-kassan med autogiro?", a: "Ja, de flesta a-kassor erbjuder betalning via autogiro." },
            { q: "Vad kostar a-kassa?", a: "Avgiften varierar men ligger oftast mellan 100–160 kronor per månad." },
        ]
    },
    {
        category: "Ersättning",
        questions: [
            { q: "Hur gör jag om jag är arbetslös utan a-kassa?", a: "Du kan ansöka om medlemskap men har normalt inte rätt till ersättning direkt." },
            { q: "När får man pengar från a-kassan?", a: "Utbetalning sker vanligtvis veckovis eller varannan vecka efter godkänd tidrapport." },
            { q: "Vad är dagpenning för a-kassa?", a: "Dagpenning är den ersättning du får per ersättningsdag från a-kassan." },
            { q: "Vad är en tidrapport?", a: "En tidrapport är en redovisning av arbetad tid, frånvaro och arbetssökande." },
            { q: "Vad gör jag om jag får avslag från a-kassan?", a: "Du kan begära omprövning och därefter överklaga beslutet." },
            { q: "Vilken ersättning kan jag få från a-kassa?", a: "Maxbeloppet är normalt 80 % av din tidigare inkomst upp till ett fast tak." },
            { q: "Vad är aktivitetsstöd?", a: "Aktivitetsstöd är en ersättning från Försäkringskassan som du kan få om du deltar i ett arbetsmarknadspolitiskt program via Arbetsförmedlingen." },
            { q: "Får man a-kassa vid konkurs?", a: "Ja, om din arbetsgivare går i konkurs kan du få ersättning via den statliga lönegarantin först, och därefter a-kassa." },
            { q: "Hur påverkas a-kassan av avgångsvederlag?", a: "Avgångsvederlag räknas ofta som lön, vilket innebär att du inte kan få a-kassa under den tid vederlaget täcker." },
        ]
    },
    {
        category: "Ersättning i kombination med andra inkomster",
        questions: [
            { q: "Kan jag få a-kassa om jag arbetar deltid?", a: "Ja, under vissa förutsättningar och med begränsat antal deltidsdagar (normalt max 60 veckor)." },
            { q: "Kan jag få a-kassa om jag har CSN?", a: "Nej, heltidsstudier med CSN ger normalt inte rätt till a-kassa. Studier måste vara avslutade eller avbrutna." },
            { q: "Kan jag få a-kassa om jag har pension?", a: "Det beror på typ av pension och ålder. Tjänstepension kan påverka ersättningen, medan allmän pension vid 66 år avslutar a-kasserätten." },
            { q: "Kan jag driva företag vid sidan av?", a: "Ja, om det är en godkänd bisyssla som du haft vid sidan av ditt heltidsarbete i minst 12 månader kan du få behålla den." },
        ]
    },
    {
        category: "Ersättning vid olika anställningsformer",
        questions: [
            { q: "Kan jag få a-kassa mellan två jobb?", a: "Ja, om du uppfyller arbetsvillkoret och är inskriven hos Arbetsförmedlingen från första dagen." },
            { q: "Kan jag få a-kassa om jag blivit uppsagd?", a: "Ja, om uppsägningen inte skett på egen begäran eller på grund av misskötsel." },
            { q: "Kan jag få a-kassa som timanställd?", a: "Ja, om du uppfyller arbetsvillkoret genom att ha arbetat tillräckligt många timmar under ramtiden." },
            { q: "Kan jag få a-kassa vid egen uppsägning?", a: "Ja, men du får normalt en avstängning på 45 ersättningsdagar (karens) innan utbetalning kan ske." },
            { q: "Kan jag stämpla på helgen?", a: "Nej, a-kassa betalas normalt ut för arbetslösa vardagar. Helger är ersättningsfria." }
        ]
    },
    {
        category: "Ersättning vid sjukdom & barn",
        questions: [
            { q: "Får jag a-kassa när jag är föräldraledig?", a: "Nej, då ska du ta ut föräldrapenning från Försäkringskassan. Du kan inte få a-kassa samtidigt." },
            { q: "Får jag a-kassa om jag är sjukskriven?", a: "Nej, är du sjuk och inte kan söka arbete ska du sjukanmäla dig och ansöka om sjukpenning." },
            { q: "Påverkar a-kassan min SGI?", a: "Ja, om du inte är korrekt inskriven hos Arbetsförmedlingen och a-kassan kan din SGI (Sjukpenninggrundande inkomst) nollas." },
        ]
    },
    {
        category: "Gå med i a-kassan",
        questions: [
            { q: "Vilken a-kassa ska jag välja?", a: "Välj en a-kassa som passar ditt yrke eller din bransch. Vi hjälper dig att hitta rätt." },
            { q: "Vilken åldersgräns gäller för a-kassa?", a: "Du kan vara medlem till och med månaden innan du fyller 66 år. Inträde måste oftast ske innan 64 år." },
            { q: "Behöver jag skicka in kassakort?", a: "Kassakort är numer digitala tidrapporter som du fyller i via a-kassans ”Mina sidor”." },
        ]
    },
    {
        category: "Villkor & krav",
        questions: [
            { q: "Är a-kassan obligatorisk?", a: "Nej, medlemskap i a-kassa är frivilligt i Sverige." },
            { q: "Hur många karensdagar är det för a-kassa?", a: "Normalt är det sex karensdagar (dagar utan ersättning) i början av en ersättningsperiod." },
            { q: "Kan man få a-kassa retroaktivt?", a: "Nej, ersättning betalas inte ut retroaktivt för tid innan du var medlem eller inskriven." },
            { q: "Krävs arbetsgivarintyg för att få a-kassa?", a: "Ja, arbetsgivarintyg krävs för att styrka all arbetad tid och inkomst under de senaste 12 månaderna." },
            { q: "Vad är skillnaden mellan a-kassa och inkomstförsäkring?", a: "A-kassan är den grundläggande statliga försäkringen med tak. Inkomstförsäkring är en privat tilläggsförsäkring som kan ge högre ersättning." },
            { q: "Vad krävs för att få a-kassa?", a: "Du måste vara medlem, uppfylla arbetsvillkoret (arbetat tillräckligt mycket) och vara inskriven på Arbetsförmedlingen." },
            { q: "Vad är ett arbetsvillkor?", a: "För att få a-kassa måste du ha arbetat minst 80 timmar/månad i 6 månader, eller minst 480 timmar under 6 sammanhängande månader (med minst 50 timmar varje månad)." },
            { q: "Vad gäller vid utlandsarbete?", a: "Arbete inom EU/EES kan ofta tillgodoräknas om du har intyg (U1). Regler varierar för länd utanför EU." },
            { q: "Vad händer om jag missar en tidrapport?", a: "Om du inte skickar in tidrapporten i tid kan utbetalningen försenas. Vid upprepad misskötsamhet kan rätten till ersättning ifrågasättas." }
        ]
    },
];

export default function FAQPage() {
    return (
        <main className="bg-white min-h-screen pb-20">
            {/* Hero Section - Non-AI feeling */}
            <div className="relative isolate overflow-hidden bg-[#0B1B3F] py-24 sm:py-32">
                <div className="absolute inset-0 -z-10 h-full w-full">
                    <Image
                        src="/images/content/faq_hero_real.png"
                        alt="Kundservice medarbetare som hjälper till via telefon"
                        fill
                        className="object-cover object-center opacity-30"
                        priority
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Vanliga frågor & svar
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-blue-100">
                            Här har vi samlat de vanligaste frågorna om a-kassa, ersättning och medlemskap. Hitta svaret på din fråga nedan.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">

                {/* Search Header placeholder (Visual only if keeping simple) */}
                {/* FAQ List */}
                <div className="space-y-16">
                    {faqData.map((section, idx) => (
                        <div key={idx} className="scroll-mt-24" id={section.category.toLowerCase().replace(/ /g, '-')}>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                                {section.category}
                            </h2>
                            <dl className="space-y-6 divide-y divide-gray-100">
                                {section.questions.map((item, qIdx) => (
                                    <div key={qIdx} className="pt-6 sm:first:pt-0">
                                        <dt className="text-lg font-semibold leading-7 text-gray-900">
                                            {item.q}
                                        </dt>
                                        <dd className="mt-2 text-base leading-7 text-gray-600">
                                            {item.a}
                                        </dd>
                                    </div>
                                ))}
                            </dl>

                            {/* Insert Image in the middle (e.g., after 3rd section) */}
                            {idx === 2 && (
                                <div className="mt-12 mb-8 rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src="/images/content/faq_content_real.png"
                                        alt="Händer som räknar på miniräknare"
                                        width={1000}
                                        height={600}
                                        className="w-full h-64 object-cover sm:h-80"
                                    />
                                    <div className="bg-blue-50 p-4 text-center">
                                        <p className="text-blue-900 font-medium text-sm">
                                            Behöver du räkna ut din ersättning? <Link href="/inkomstforsakring" className="underline hover:text-blue-700">Läs mer om ersättningsnivåer</Link>
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-16 bg-[#0B1B3F] rounded-2xl p-8 sm:p-12 text-center text-white">
                    <h2 className="text-2xl font-bold mb-4">Hittade du inte svaret du sökte?</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        Om du har specifika frågor om ditt medlemskap eller ersättning bör du kontakta din a-kassa direkt.
                        Vi hjälper dig att hitta rätt kontaktuppgifter.
                    </p>
                    <Link
                        href="/akassor"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#0B1B3F] bg-white hover:bg-gray-50 transition-colors"
                    >
                        Hitta din a-kassa
                    </Link>
                </div>

            </div>
        </main>
    );
}
