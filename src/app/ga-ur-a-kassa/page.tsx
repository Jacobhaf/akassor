
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: "Gå ur a-kassa – Avsluta medlemskap & regler 2026 | Välja A-kassa",
    description: "Ska du gå ur a-kassan? Läs vår guide om hur du avslutar medlemskapet korrekt, konsekvenser du bör känna till och vad som gäller för 2026.",
};

export default function GaUrAkassaPage() {
    return (
        <main className="bg-white">
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
                    <div className="bg-white border-t border-gray-100 pt-12">
                        <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">Vanliga frågor om att avsluta a-kassa</h3>
                        <ul className="space-y-4 max-w-2xl mx-auto">
                            <li className="flex gap-4 p-4 rounded-lg bg-gray-50">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">?</span>
                                <span className="font-medium text-gray-800">Det finns normalt ingen uppsägningstid för medlemskap i a-kassan</span>
                            </li>
                            <li className="flex gap-4 p-4 rounded-lg bg-gray-50">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">?</span>
                                <span className="font-medium text-gray-800">Medlemskapet kan inte avslutas retroaktivt</span>
                            </li>
                            <li className="flex gap-4 p-4 rounded-lg bg-gray-50">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">?</span>
                                <span className="font-medium text-gray-800">Ersättning kan påverkas om du avslutar medlemskapet vid fel tidpunkt</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>
        </main>
    );
}
