import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FaqAccordion from '@/components/FaqAccordion';
import JsonLd from '@/components/JsonLd';
import { akassor } from '@/data/database';

export const metadata = {
    title: "Gå ur a-kassa – Avsluta medlemskap & regler 2026",
    description: "Ska du gå ur a-kassan? Läs vår guide om hur du avslutar medlemskapet korrekt, konsekvenser du bör känna till och vad som gäller för 2026.",
};

export default function GaUrAkassaPage() {
    const topExitGuides = [
        "aea",
        "unionen",
        "kommunal",
        "ifmetall",
        "la",
        "alfa"
    ];

    const exitGuides = topExitGuides
        .map(id => akassor.find(a => a.id === id))
        .filter((a): a is typeof akassor[0] => a !== undefined);

    const faqItems = [
        {
            question: "Hur avslutar jag mitt medlemskap i a-kassan?",
            answer: "För att avsluta ditt medlemskap behöver du kontakta din a-kassa direkt. De flesta a-kassor erbjuder möjlighet att avsluta medlemskapet via:\n\n* Mina sidor på a-kassans webbplats\n* Ett digitalt formulär eller e-post\n* I vissa fall via brev\n\nUppsägningen gäller vanligtvis från och med det datum a-kassan registrerar avslutet."
        },
        {
            question: "Kan jag avsluta a-kassan när som helst?",
            answer: "Ja, medlemskap i a-kassa är frivilligt och kan avslutas när som helst. Tänk på att du efter avslut:\n\n* inte längre omfattas av a-kassans ersättningsskydd\n* kan behöva uppfylla ett nytt medlemsvillkor om du går med igen"
        },
        {
            question: "Behöver jag avsluta a-kassan om jag byter jobb?",
            answer: "Nej. A-kassan är inte kopplad till din arbetsgivare utan till dig som person. Du kan behålla samma a-kassa även om du byter arbetsplats.\n\nEtt byte eller avslut är endast aktuellt om du:\n\n* byter yrkesområde och vill tillhöra en annan a-kassa\n* inte längre vill vara medlem i någon a-kassa"
        },
        {
            question: "Vad händer om jag avslutar a-kassan och senare blir arbetslös?",
            answer: "Om du inte är medlem i en a-kassa när du blir arbetslös har du normalt inte rätt till inkomstbaserad ersättning. För att få full ersättning igen behöver du vanligtvis:\n\n* vara medlem i minst 12 månader\n* uppfylla arbetsvillkoret"
        },
        {
            question: "Kan jag avsluta min a-kassa och gå med i en annan?",
            answer: "Ja. Om du vill byta a-kassa är det viktigt att inte avsluta ditt nuvarande medlemskap själv först. Ansök istället om medlemskap i den nya a-kassan, som då sköter överflyttningen så att din medlemstid kan räknas vidare."
        },
        {
            question: "Får jag tillbaka medlemsavgiften om jag avslutar?",
            answer: "Nej. Medlemsavgiften betalas normalt månadsvis och återbetalas vanligtvis inte, även om du avslutar ditt medlemskap mitt i en betalningsperiod."
        },
        {
            question: "Påverkas min inkomstförsäkring om jag avslutar a-kassan?",
            answer: "Ja. De flesta inkomstförsäkringar kräver att du är medlem i en a-kassa. Om du avslutar a-kassan kan även inkomstförsäkringen upphöra att gälla."
        },
        {
            question: "När kan det vara olämpligt att avsluta a-kassan?",
            answer: "Det kan innebära en ekonomisk risk att avsluta a-kassan om du exempelvis:\n\n* har en tidsbegränsad anställning\n* arbetar som konsult eller egenföretagare\n* befinner dig i en osäker arbetsmarknadssituation\n\nA-kassan är grunden för ersättning vid arbetslöshet."
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer.replace(/\n\n/g, ' ').replace(/\*/g, '')
            }
        }))
    };

    return (
        <main className="bg-white">
            <JsonLd data={faqSchema} />
            {/* Hero Section */}
            <section className="relative bg-[#0B1B3F] text-white py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="/images/content/leaving_akassa_hero.png"
                        alt="Person som funderar på att gå ur a-kassa"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        Gå ur a-kassan – Tänk på detta innan du avslutar
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Att avsluta sitt medlemskap kan få ekonomiska konsekvenser. Här reder vi ut vad som gäller.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 px-4 max-w-4xl mx-auto sm:px-6 lg:px-8">

                {/* Specific Guides Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifika guider för att lämna din a-kassa</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {exitGuides.map(akassa => (
                            <Link
                                key={akassa.id}
                                href={`/akassa/${akassa.slug}/ga-ur-a-kassa`}
                                className="p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-red-200 hover:bg-red-50 transition-all text-center font-bold text-slate-800"
                            >
                                Gå ur {akassa.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Intro Text */}
                <div className="prose prose-lg max-w-none text-gray-700">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">Att tänka på innan du går ur a-kassan</h3>
                    <p className="mb-8 leading-relaxed">
                        Innan du väljer att <strong>gå ur a-kassan</strong> eller <strong>avsluta a-kassa</strong> är det viktigt
                        att känna till hur beslutet kan påverka din framtida ersättning. I vissa situationer kan ett avslutat
                        medlemskap innebära att ersättningen blir lägre eller uteblir helt.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h4 className="text-xl font-bold text-blue-900 mb-3">Får du aktivitetsstöd?</h4>
                            <p className="text-blue-800">
                                Om du avslutar ditt medlemskap i a-kassan under en period då du får aktivitetsstöd från
                                Försäkringskassan kan nivån på aktivitetsstödet påverkas negativt, eftersom stödet ofta
                                baseras på din a-kasseersättning.
                            </p>
                        </div>

                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                            <h4 className="text-xl font-bold text-green-900 mb-3">Ska du starta företag?</h4>
                            <p className="text-green-800">
                                Många tror att man automatiskt måste <strong>avsluta a-kassan</strong> när man startar företag,
                                men även företagare kan i vissa fall ha rätt till arbetslöshetsersättning. Därför kan det vara
                                klokt att ta reda på vad som gäller innan du lämnar a-kassan.
                            </p>
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-8 mb-16">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-1">
                                <h4 className="text-2xl font-bold text-gray-900 mb-3">Ska du börja studera?</h4>
                                <p className="leading-relaxed">
                                    Om du går ur a-kassan i samband med studier kan det innebära att din ersättning blir lägre
                                    om du blir arbetslös efter avslutade studier. Medlemskapet kan påverka framtida rätt till ersättning.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-1">
                                <h4 className="text-2xl font-bold text-gray-900 mb-3">Är du föräldraledig?</h4>
                                <p className="leading-relaxed">
                                    Att <strong>avsluta a-kassa</strong> under föräldraledighet kan påverka vilken ersättning du har rätt till
                                    om du blir arbetslös efter att föräldraledigheten är slut.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-1">
                                <h4 className="text-2xl font-bold text-gray-900 mb-3">Närmar du dig pension?</h4>
                                <p className="leading-relaxed">
                                    Medlemskap i a-kassan avslutas normalt automatiskt i samband med pensionering.
                                    Om du vill gå ur a-kassan tidigare än så behöver du själv begära utträde.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* How to Leave Section with Image */}
                    <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-16">
                        <div className="grid md:grid-cols-2 gap-0">
                            <div className="relative h-64 md:h-auto min-h-[300px]">
                                <Image
                                    src="/images/content/contact_akassa_support.png"
                                    alt="Kontakta a-kassan via mobil för att avsluta medlemskap"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-8 md:p-12 flex flex-col justify-center">

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gör så här för att avsluta medlemskapet</h3>
                                <p className="mb-4 text-gray-700">
                                    Det lättaste sättet att avsluta ditt medlemskap är oftast att logga in i "Mitt medlemskap" (eller motsvarande e-tjänst hos din a-kassa) och klicka på länken för att avsluta medlemskap. Den finns vanligtvis under frågor och svar eller inställningar i inloggat läge. Det går också ofta bra att skicka en begäran om utträde via post.
                                </p>
                                <p className="mb-4 text-gray-700">
                                    När du har avslutat ditt medlemskap får du ett beslut av a-kassan, ofta direkt i deras digitala tjänst.
                                </p>

                                <h4 className="text-xl font-bold text-gray-900 mb-3">Medlemskapet avslutas i slutet av månaden</h4>
                                <p className="text-gray-700">
                                    Vanligtvis avslutas ditt medlemskap i slutet av den månaden du skickat in din ansökan om att avsluta medlemskapet. Vill du avsluta medlemskapet tidigare än så bör du kontakta din a-kassa så kan de ofta hjälpa dig med det. Det går inte att avsluta ditt medlemskap retroaktivt. Det betyder att a-kassan behöver ta emot din ansökan om att avsluta innan det datum du vill gå ur.
                                </p>
                                <div className="mt-6">
                                    <Link
                                        href="/akassor"
                                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800"
                                    >
                                        Hitta kontaktuppgifter till din a-kassa →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="bg-white border-t border-gray-100 pt-12 pb-12">
                        <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">Vanliga frågor om att avsluta a-kassa</h3>
                        <FaqAccordion items={faqItems} />
                    </div>
                </div>
            </section>
        </main >
    );
}
