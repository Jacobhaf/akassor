import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Byta a-kassa 2026 – Guide för att byta utan avbrott",
    description: "Vill du byta a-kassa? Vi guidar dig steg för steg så du kan byta utan avbrott, behålla din ersättning och göra bytet smidigt och tryggt.",
};

export default function BytaAkassaPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-[#0B1B3F] text-white py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="/images/content/byta_akassa_hero_real.png"
                        alt="Person som byter a-kassa vid köksbordet"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        Byta a-kassa – Så ändrar du utan avbrott
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Behåll din intjänade tid och trygghet när du byter a-kassa.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 px-4 max-w-3xl mx-auto sm:px-6 lg:px-8">
                <div className="prose prose-lg max-w-none text-gray-700">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Byta a-kassa – så gör du ett tryggt byte utan avbrott</h2>

                    <p>
                        Att <strong>byta a-kassa</strong> är enkelt och kan vara aktuellt om du byter yrke,
                        inte är nöjd med din nuvarande a-kassa eller vill tillhöra en kassa som bättre
                        matchar din bransch. Det viktigaste är att bytet sker utan avbrott i medlemstiden,
                        så att du behåller din intjänade rätt till ersättning.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Byt a-kassa utan att förlora medlemstid</h3>

                    <p>
                        För att behålla din medlemstid måste medlemskapet i den nya a-kassan börja
                        direkt när medlemskapet i den gamla avslutas. Vanligtvis innebär det att du
                        går ur din nuvarande a-kassa den sista dagen i en månad och blir medlem i den
                        nya från och med den första dagen i nästa månad.
                    </p>

                    <p>
                        Många a-kassor kan hjälpa till med hela bytet. Om du ger fullmakt i din ansökan
                        ser den nya a-kassan till att avsluta ditt gamla medlemskap och hämta uppgifter
                        om din tidigare medlemstid.
                    </p>

                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
                        <h3 className="text-xl font-bold text-blue-900 mb-4 mt-0">Så byter du a-kassa – steg för steg</h3>
                        <ul className="list-disc pl-5 space-y-2 text-blue-800 m-0">
                            <li>Ansök om medlemskap i den nya a-kassan (oftast från den 1:a i en månad)</li>
                            <li>Begär utträde ur din nuvarande a-kassa sista dagen i månaden</li>
                            <li>Skicka in ansökningar i god tid – utträde kan inte ske retroaktivt</li>
                            <li>Säkerställ att det inte uppstår något glapp mellan medlemskapen</li>
                        </ul>
                    </div>

                    <div className="my-10 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/content/byta_akassa_step_real.png"
                            alt="Närbild på händer som signerar dokument digitalt"
                            width={1000}
                            height={500}
                            className="w-full h-64 object-cover object-center sm:h-80"
                        />
                        <div className="bg-gray-50 p-4 text-center text-sm text-gray-500 italic">
                            Många a-kassor hanterar hela bytet åt dig digitalt via BankID.
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Viktigt att tillhöra rätt a-kassa</h3>

                    <p>
                        Om du tillfälligt utför andra arbetsuppgifter än normalt behöver du vanligtvis
                        inte byta a-kassa. Vid ett permanent branschbyte bör du däremot överväga att
                        byta till en a-kassa som är anpassad efter ditt nya yrkesområde.
                    </p>

                    <p>
                        Om du skulle vara medlem i “fel” a-kassa vid arbetslöshet kan du oftast ändå
                        få ersättning, men rätt a-kassa kan underlätta handläggning och service.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Byta a-kassa när du är arbetslös</h3>

                    <p>
                        Det går att <strong>byta a-kassa även under pågående ersättningsperiod</strong>.
                        Du ansöker då om medlemskap i den nya a-kassan och skickar även in en ny
                        ersättningsansökan dit. När bytet är klart tar den nya a-kassan över
                        utbetalningarna.
                    </p>

                    <p>
                        Kom ihåg att informera Arbetsförmedlingen om att du har bytt a-kassa
                        och att skicka tidrapporter till rätt a-kassa från och med bytdatumet.
                    </p>

                    <div className="my-12 relative rounded-2xl overflow-hidden shadow-xl aspect-video sm:aspect-[21/9]">
                        <Image
                            src="/images/content/byta_akassa_career_real.png"
                            alt="Självsäker person på väg mot nya karriärmål"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                            <p className="text-white font-medium text-lg">
                                Ett byte av a-kassa kan vara startskottet för nästa steg i karriären.
                            </p>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vanliga frågor om att byta a-kassa</h3>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-bold text-lg text-gray-900 mb-2">Vad händer om jag är med i fel a-kassa?</h4>
                            <p className="text-gray-700">
                                Du kan oftast få ersättning ändå, men det är rekommenderat att tillhöra
                                en a-kassa som passar din bransch.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-gray-900 mb-2">Hur ändras a-kassan?</h4>
                            <p className="text-gray-700">
                                Din ersättningsperiod och intjänade medlemstid följer normalt med,
                                förutsatt att bytet sker utan avbrott.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-gray-900 mb-2">Hur ändrar man a-kassa?</h4>
                            <p className="text-gray-700">
                                Du ansöker om medlemskap i en ny a-kassa och begär utträde ur den gamla,
                                helst med hjälp av fullmakt.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-gray-900 mb-2">Måste jag byta a-kassa om jag byter bransch?</h4>
                            <p className="text-gray-700">
                                Nej, men vid ett permanent byte är det ofta fördelaktigt att byta till
                                en a-kassa som är inriktad på ditt nya yrkesområde.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-gray-900 mb-2">Kan man välja vilken a-kassa som helst?</h4>
                            <p className="text-gray-700">
                                Ja, men du bör välja en a-kassa som motsvarar ditt nuvarande eller
                                senaste yrke.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-100">
                        <p className="mb-4">
                            Om du istället funderar på att avsluta ditt medlemskap helt kan du läsa mer om{" "}
                            <Link href="/ga-ur-a-kassa" className="text-blue-600 font-semibold hover:underline">
                                hur du går ur a-kassan
                            </Link>{" "}
                            och vad som är viktigt att tänka på innan du lämnar din nuvarande a-kassa.
                        </p>

                        <p>
                            Är du osäker på vilken a-kassa som passar din yrkesroll bäst rekommenderar vi att du
                            använder vår guide för att{" "}
                            <Link href="/jamfor" className="text-blue-600 font-semibold hover:underline">
                                välja a-kassa
                            </Link>{" "}
                            utifrån bransch, arbetsform och framtida behov.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
