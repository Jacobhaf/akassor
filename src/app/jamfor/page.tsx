import type { Metadata } from "next";
import Image from "next/image";
import AkassaComparison from "@/components/comparison/AkassaComparison";

export const metadata: Metadata = {
    title: "Jämför a-kassor 2026 – hitta bästa a-kassan | Välja A-kassa",
    description:
        "Jämför a-kassor och hitta den som passar ditt yrke bäst. Se avgifter, handläggningstider, villkor och regler för 2026. Din guide till rätt a-kassa.",
};

export default function JamforPage() {
    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Header Section */}
            <div className="bg-[#0B1B3F] py-16 text-center text-white">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Jämför a-kassa – hitta den bästa a-kassan för ditt yrke
                </h1>
                <p className="mt-4 text-lg text-blue-100">
                    Jämför priser, villkor och hitta den tryggaste lösningen för dig.
                </p>
            </div>

            <div className="mx-auto max-w-5xl px-4 -mt-8">
                {/* Comparison Tool Card */}
                <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-10 mb-16">
                    <AkassaComparison />
                </div>

                {/* SEO Article Content */}
                <div className="prose prose-lg prose-slate mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm">
                    <div className="mb-10 rounded-xl overflow-hidden shadow-md">
                        <Image
                            src="/images/content/jamfor_hero_real.png"
                            alt="Människor som jämför alternativ på laptop"
                            width={1000}
                            height={563} // 16:9 ratio
                            className="w-full object-cover h-auto m-0"
                            priority
                        />
                        <p className="text-center text-sm text-gray-500 mt-2 italic">
                            Jämför a-kassa - Hitta den bästa A-kassan för dig
                        </p>
                    </div>

                    <section className="space-y-12">
                        {/* 1. Så jämför du a-kassor */}
                        <article>
                            <h2 className="text-2xl font-bold text-gray-900">
                                1. Så jämför du a-kassor – steg för steg
                            </h2>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6">
                                Steg 1: Välj a-kassor efter ditt yrke
                            </h3>
                            <p>
                                Det första du ska göra är att filtrera fram de a-kassor som riktar sig till din yrkesgrupp.
                                Skriv in din yrkestitel i tabellen längst upp på sidan – även liknande titlar fungerar – så får du automatiskt fram vilka a-kassor som accepterar just din typ av tjänst.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6">
                                Steg 2: Kontrollera bransch och inriktning
                            </h3>
                            <p>
                                När du har en lista över möjliga a-kassor är nästa steg att läsa på om vilken bransch de riktar sig till.
                                Vissa a-kassor välkomnar breda yrkesgrupper som administratörer, medan andra främst vänder sig till offentlig sektor eller privat sektor.
                            </p>
                            <p>
                                Se till att medlemsbeskrivningen stämmer överens med din arbetssituation.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6">
                                Steg 3: Jämför medlemsavgift och villkor
                            </h3>
                            <p>
                                När du valt ut de a-kassor som är relevanta för ditt yrke kan du jämföra:
                            </p>
                            <ul>
                                <li>Medlemsavgift per månad</li>
                                <li>Handläggningstid vid arbetslöshet</li>
                                <li>Kundtjänstens tillgänglighet</li>
                                <li>Eventuella kopplingar till fackförbund</li>
                            </ul>
                            <p>
                                Eftersom alla a-kassor följer samma lagar och regler är pris och service ofta det som skiljer dem mest åt.
                            </p>
                        </article>

                        {/* 2. Vad ska jag jämföra */}
                        <article>
                            <h2 className="text-2xl font-bold text-gray-900">
                                2. Vad ska jag jämföra mellan a-kassorna?
                            </h2>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6">Medlemsavgift</h3>
                            <p>
                                De flesta a-kassor kostar mellan 100 och 170 kr per månad. Välj inte bara den billigaste – värdera även service och tillgänglighet.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6">Handläggningstid</h3>
                            <p>
                                Handläggningstiden påverkar hur snabbt du kan få ersättning när du blivit arbetslös. Om genomsnittstider finns publicerade är det mycket värdefull information.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6">Kundservice och support</h3>
                            <p>
                                En lättillgänglig kundtjänst kan vara avgörande när du behöver hjälp med regler och ansökan. Titta gärna på omdömen och vilka kontaktvägar som erbjuds.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6">Koppling till fackförbund</h3>
                            <p>
                                Du måste inte välja den a-kassa som ditt fackförbund rekommenderar, men det kan vara fördelaktigt. Vissa inkomstförsäkringar gäller endast om du är medlem i en specifik a-kassa.
                            </p>
                        </article>

                        {/* 3. Vad kostar det */}
                        <article>
                            <h2 className="text-2xl font-bold text-gray-900">
                                3. Vad kostar det att vara med i en a-kassa?
                            </h2>
                            <p>
                                De flesta medlemmar betalar mellan 100 och 170 kronor i månaden.
                                Avgiften är densamma oavsett om du arbetar eller är arbetslös, och alla medlemmar betalar samma belopp.
                            </p>
                            <p>
                                Se medlemskapet som en försäkring: du betalar en låg summa för trygghet den dag något oväntat händer.
                            </p>
                        </article>

                        {/* 4. Nya regler 2026 */}
                        <article>
                            <h2 className="text-2xl font-bold text-gray-900">
                                4. Nya regler 2026 – så påverkar de dig
                            </h2>
                            <p>
                                Den 1 oktober 2026 infördes nya regler för arbetslöshetsförsäkringen. Den största förändringen är att du nu kvalificerar dig med tidigare inkomst i stället för arbetad tid.
                            </p>
                            <p>För att få ersättning måste du:</p>
                            <ul>
                                <li>vara minst 20 år</li>
                                <li>vara inskriven hos Arbetsförmedlingen</li>
                                <li>aktivt söka jobb</li>
                                <li>kunna ta passande arbete</li>
                                <li>aktivitetsrapportera varje månad</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6">Övergångsregler</h3>
                            <p>
                                Har du påbörjat din ersättningsperiod före 30 september 2026 gäller de gamla reglerna för den perioden.
                            </p>
                        </article>

                        {/* 5. Inkomstvillkoret */}
                        <article>
                            <h2 className="text-2xl font-bold text-gray-900">
                                5. Inkomstvillkoret – så kvalificerar du dig
                            </h2>
                            <p>
                                Du måste uppfylla ett inkomstvillkor under en 12-månadersperiod, den så kallade ramtiden.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6">Huvudregeln</h3>
                            <ul>
                                <li>Minst 120 000 kr brutto totalt under ramtiden</li>
                                <li>Minst 11 000 kr per månad i fyra av dessa månader</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6">Alternativregeln</h3>
                            <ul>
                                <li>Fyra sammanhängande månader med minst 11 000 kr i månadsinkomst</li>
                                <li>Ger max 66 ersättningsdagar</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6">Företagare</h3>
                            <p>
                                Egenföretagare följer samma regler, baserat på inkomster med egenavgifter.
                            </p>
                        </article>

                        {/* 6. Medlemskapets längd */}
                        <article>
                            <h2 className="text-2xl font-bold text-gray-900">
                                6. Medlemskapets längd styr ersättningsnivån
                            </h2>
                            <p>
                                Hur länge du varit medlem i en a-kassa avgör hur mycket ersättning du kan få:
                            </p>
                            <ul>
                                <li>12 månader eller mer: upp till 80 procent</li>
                                <li>6–11 månader: upp till 60 procent</li>
                                <li>0–5 månader: upp till 50 procent</li>
                            </ul>
                            <p>
                                A-kassan ersätter högst 80 procent av en inkomst upp till 34 000 kr per månad.
                                Har du högre lön behövs en inkomstförsäkring för full ersättning.
                            </p>
                        </article>

                        {/* 7. Så trappas ersättningen ner */}
                        <article>
                            <h2 className="text-2xl font-bold text-gray-900">
                                7. Så trappas ersättningen ner
                            </h2>
                            <p>Ersättningen minskar stegvis enligt följande:</p>
                            <ul>
                                <li>Dag 1–100: 80 procent</li>
                                <li>Dag 101–200: 70 procent</li>
                                <li>Dag 201–300: 65 procent</li>
                            </ul>
                        </article>

                        {/* 8. Hur länge får man ersättning? */}
                        <article>
                            <h2 className="text-2xl font-bold text-gray-900">
                                8. Hur länge får man ersättning?
                            </h2>
                            <p>
                                Hur lång ersättningsperiod du får beror på hur många månader du tjänat minst 11 000 kr under ramtiden.
                            </p>
                            <ul>
                                <li>Maximal ersättningsperiod: 300 dagar</li>
                                <li>Alternativregeln: 66 dagar</li>
                            </ul>
                            <p>
                                Som helt arbetslös får du ersättning för cirka 22 dagar per månad.
                            </p>
                        </article>

                        {/* 9. Högsta möjliga ersättning */}
                        <article>
                            <h2 className="text-2xl font-bold text-gray-900">
                                9. Högsta möjliga ersättning
                            </h2>
                            <p>
                                De första 100 dagarna kan du få:
                            </p>
                            <ul>
                                <li>upp till 27 200 kr brutto per månad (80 procent av 34 000)</li>
                            </ul>
                            <p>
                                Därefter trappas ersättningen ner enligt reglerna ovan.
                            </p>
                        </article>

                        {/* Sammanfattning */}
                        <div className="bg-blue-50 p-6 rounded-xl not-prose border border-blue-100 mt-12">
                            <h2 className="text-xl font-bold text-blue-900 mb-4">
                                Sammanfattning – så jämför du a-kassor
                            </h2>
                            <ul className="list-disc pl-5 space-y-2 text-blue-800">
                                <li>Skriv in ditt yrke i tabellen för att se vilka a-kassor du kan gå med i.</li>
                                <li>Läs på om bransch och inriktning.</li>
                                <li>Jämför pris, handläggningstid och kundservice.</li>
                                <li>Ta hänsyn till fackförbundets inkomstförsäkring om du har en.</li>
                                <li>Välj den a-kassa som ger bäst trygghet för din situation.</li>
                            </ul>
                        </div>

                    </section>
                </div>
            </div>
        </main>
    );
}
