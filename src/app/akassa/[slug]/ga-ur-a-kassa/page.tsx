
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { akassor } from "@/data/database";
import Link from "next/link";
import Image from "next/image";
import FaqAccordion from "@/components/FaqAccordion";

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const akassa = akassor.find((a) => a.slug === params.slug) || akassor.find((a) => a.id === params.slug);

    if (!akassa) {
        return {
            title: "A-kassa hittades inte",
        };
    }

    return {
        title: `Gå ur ${akassa.name} – Avsluta medlemskap & Regler 2026`,
        description: `Ska du gå ur ${akassa.name}? Läs vår guide om hur du avslutar medlemskapet korrekt hos ${akassa.name}, vad du bör tänka på och konsekvenser.`,
    };
}

export function generateStaticParams() {
    return akassor.map((akassa) => ({
        slug: akassa.slug,
    }));
}

export default function LeaveAkassaPage({ params }: Props) {
    let akassa = akassor.find((a) => a.slug === params.slug);

    if (!akassa) {
        // Try finding by ID (short slug) for backward compatibility
        const byId = akassor.find((a) => a.id === params.slug);
        if (byId) {
            redirect(`/akassa/${byId.slug}/ga-ur-a-kassa`);
        }
        notFound();
    }

    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-[#0B1B3F] text-white py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="/images/content/leaving_akassa_hero.png"
                        alt={`Person som funderar på att gå ur ${akassa.name}`}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        Gå ur {akassa.name} – så kan du avsluta {akassa.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Att avsluta sitt medlemskap i {akassa.name} är ett stort beslut. Här går vi igenom hur du gör och vad du bör tänka på.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 px-4 max-w-4xl mx-auto sm:px-6 lg:px-8">
                <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="lead text-xl text-gray-600 mb-8">
                        Att <strong>gå ur {akassa.name}</strong> eller <strong>avsluta {akassa.name}</strong> kan bli aktuellt om din
                        arbetssituation förändras, om du börjar studera, startar företag eller helt enkelt inte
                        längre vill vara medlem. Innan du fattar beslut är det viktigt att förstå vad ett avslut
                        av medlemskapet innebär.
                    </p>

                    <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 mb-8">
                        <p className="text-red-900 font-medium m-0">
                            När du väljer att <strong>avsluta {akassa.name}</strong> förlorar du normalt rätten till ersättning
                            från a-kassan vid arbetslöshet. Det kan därför få konsekvenser för din ekonomiska trygghet
                            om du senare skulle bli utan arbete.
                        </p>
                    </div>


                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Gör så här för att avsluta medlemskapet</h2>

                    <div className="my-8 relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-md">
                        <Image
                            src="/images/content/bankid_signin.png"
                            alt="Logga in med BankID för att avsluta a-kassa"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <p>
                        Det lättaste sättet att avsluta ditt medlemskap hos {akassa.name} är att logga in i Mitt medlemskap och klicka på länken Avsluta medlemskap. Den finns under frågor och svar på startsidan i e-tjänsten. Det går också bra att skicka en begäran om utträde via post.
                    </p>

                    <p>
                        När du har avslutat ditt medlemskap får du ett beslut av {akassa.name} i Mitt medlemskap.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Medlemskapet avslutas i slutet av månaden</h3>
                    <p>
                        Vanligtvis avslutas ditt medlemskap i slutet av den månaden du skickat in din ansökan om att avsluta medlemskapet. Vill du avsluta medlemskapet tidigare än så är du välkommen att kontakta {akassa.name} så kan de hjälpa dig med det. Det går inte att avsluta ditt medlemskap retroaktivt. Det betyder att {akassa.name} behöver ta emot din ansökan om att avsluta.
                    </p>

                    <div className="my-8">
                        <a
                            href={akassa.website}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
                        >
                            Till {akassa.name}s hemsida för att avsluta →
                        </a>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Viktigt att tänka på innan du avslutar {akassa.name}</h2>

                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <ul className="space-y-4 m-0 p-0 list-none">
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5"></span>
                                <div><strong>Du kan förlora rätten till arbetslöshetsersättning</strong></div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5"></span>
                                <div><strong>Det kan ta lång tid att kvalificera sig igen om du går med på nytt</strong></div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5"></span>
                                <div><strong>Ersättningsnivån kan bli lägre i framtiden</strong></div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                                <div>Särskilda regler kan gälla vid studier, företagande eller föräldraledighet</div>
                            </li>
                        </ul>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vanliga frågor om att gå ur {akassa.name}</h3>

                    <FaqAccordion items={[
                        {
                            question: `Hur gör jag för att gå ur ${akassa.name}?`,
                            answer: `För att gå ur ${akassa.name} behöver du kontakta a-kassan direkt. Det görs oftast via:\n\n* Mina sidor på ${akassa.name}s webbplats\n* Ett digitalt formulär eller e-post\n* I vissa fall via brev\n\nUppsägningen gäller normalt från den dag a-kassan registrerar avslutet.`
                        },
                        {
                            question: `Kan jag gå ur ${akassa.name} när som helst?`,
                            answer: `Ja, medlemskap i a-kassa är frivilligt och kan avslutas när som helst. När du lämnar ${akassa.name} upphör ditt medlemskap och rätten till ersättning från a-kassan.`
                        },
                        {
                            question: `Behöver jag gå ur ${akassa.name} om jag byter jobb?`,
                            answer: `Nej. A-kassan är inte kopplad till din arbetsgivare utan till dig som person. Du kan vara kvar i ${akassa.name} även om du byter arbetsplats.\n\nEtt byte av a-kassa kan vara aktuellt om du byter yrkesområde och vill tillhöra en annan a-kassa.`
                        },
                        {
                            question: `Vad händer om jag går ur ${akassa.name} och blir arbetslös?`,
                            answer: `Om du inte är medlem i en a-kassa när du blir arbetslös har du normalt inte rätt till inkomstbaserad ersättning. För att få full ersättning igen behöver du vanligtvis:\n\n* vara medlem i en a-kassa i minst 12 månader\n* uppfylla arbetsvillkoret`
                        },
                        {
                            question: `Kan jag gå ur ${akassa.name} och byta till en annan a-kassa?`,
                            answer: `Ja. Om du vill byta a-kassa är det viktigt att inte själv avsluta medlemskapet i ${akassa.name} först. Ansök istället om medlemskap i den nya a-kassan. Den nya a-kassan sköter då överflyttningen så att din medlemstid kan räknas vidare.`
                        },
                        {
                            question: `Får jag tillbaka avgiften om jag går ur ${akassa.name}?`,
                            answer: `Nej. Medlemsavgiften betalas normalt månadsvis och återbetalas vanligtvis inte, även om du avslutar medlemskapet mitt i en betalningsperiod.`
                        },
                        {
                            question: `Påverkas inkomstförsäkringen om jag går ur ${akassa.name}?`,
                            answer: `Ja. De flesta inkomstförsäkringar kräver att du är medlem i en a-kassa. Om du går ur ${akassa.name} kan även eventuell inkomstförsäkring upphöra att gälla.`
                        },
                        {
                            question: `När kan det vara olämpligt att gå ur ${akassa.name}?`,
                            answer: `Det kan innebära en ekonomisk risk att stå utan a-kassa om du exempelvis:\n\n* har en tidsbegränsad anställning\n* arbetar som konsult eller egenföretagare\n* befinner dig i en osäker arbetssituation\n\nA-kassan är grunden för ersättning vid arbetslöshet.`
                        }
                    ]} />

                    <div className="mt-12 p-6 bg-blue-50 rounded-xl text-center">
                        <p className="text-blue-900 font-medium text-lg mb-4">
                            Sammanfattningsvis bör beslutet att <strong>avsluta {akassa.name}</strong> vara väl genomtänkt och
                            anpassat efter din nuvarande och framtida situation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center items-center">
                            <Link href={`/akassa/${akassa.slug}`} className="text-blue-600 font-semibold hover:underline">
                                Läs mer om {akassa.name}
                            </Link>

                            <Link href="/jamfor" className="text-blue-600 font-semibold hover:underline">
                                Jämför andra a-kassor här
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
