import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#0B1B3F] text-white overflow-hidden font-sans">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-green-400 to-blue-500 opacity-80"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

            <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                {/* Logo & Intro Section */}
                <div className="mb-12 border-b border-white/5 pb-12">
                    <Link href="/" className="inline-block mb-6">
                        <div className="relative h-16 w-56 md:h-20 md:w-72 transition-opacity hover:opacity-90">
                            <Image
                                src="/logo-valja-akassa-white.png"
                                alt="Välja A-kassa Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                    </Link>
                    <p className="max-w-2xl text-blue-200/60 text-sm leading-relaxed">
                        valjaakassa.se är Sveriges ledande oberoende guide för a-kassa och inkomstförsäkring. Vi hjälper dig att navigera i regelverket och hitta den tryggaste lösningen för just din karriär och bransch.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Column 1: A-kassa */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-6">
                            A-kassa & Försäkring
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/akassor" className="text-blue-200/70 hover:text-white transition-colors text-sm">
                                    Alla a-kassor
                                </Link>
                            </li>
                            <li>
                                <Link href="/yrken" className="text-blue-200/70 hover:text-white transition-colors text-sm">
                                    Hitta via yrke
                                </Link>
                            </li>
                            <li>
                                <Link href="/inkomstforsakring" className="text-blue-200/70 hover:text-white transition-colors text-sm">
                                    Inkomstförsäkring
                                </Link>
                            </li>
                            <li>
                                <Link href="/byta-a-kassa" className="text-blue-200/70 hover:text-white transition-colors text-sm">
                                    Byta a-kassa
                                </Link>
                            </li>
                            <li>
                                <Link href="/akassa-egenforetagare" className="text-blue-200/70 hover:text-white transition-colors text-sm">
                                    A-kassa som företagare
                                </Link>
                            </li>
                            <li>
                                <Link href="/ga-ur-a-kassa" className="text-blue-200/70 hover:text-white transition-colors text-sm">
                                    Gå ur a-kassa
                                </Link>
                            </li>
                            <li>
                                <Link href="/jamfor" className="text-blue-200/70 hover:text-white transition-colors text-sm font-semibold">
                                    Jämför a-kassa
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: Guider & Regler */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-6">
                            Kunskapscenter
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/akassa-regler" className="text-blue-200/70 hover:text-white transition-colors text-sm">
                                    Regler & villkor 2026
                                </Link>
                            </li>
                            <li>
                                <Link href="/ordlista" className="text-blue-200/70 hover:text-white transition-colors text-sm">
                                    Ordlista & begrepp
                                </Link>
                            </li>
                            <li>
                                <Link href="/friskvardsbidrag" className="text-blue-200/70 hover:text-white transition-colors text-sm">
                                    Friskvårdsbidrag guide
                                </Link>
                            </li>
                            <li>
                                <Link href="/artiklar" className="text-blue-200/70 hover:text-white transition-colors text-sm font-semibold">
                                    Alla guider & artiklar
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Karriärverktyg */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-6">
                            Karriärverktyg
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/hur-bra-ar-mitt-cv" className="text-blue-200/70 hover:text-white transition-colors text-sm">
                                    Granska mitt CV
                                </Link>
                            </li>
                            <li>
                                <Link href="/artiklar/hur-skriver-man-ett-bra-cv" className="text-blue-200/70 hover:text-white transition-colors text-sm font-semibold">
                                    Guide: Skriva CV
                                </Link>
                            </li>
                            <li>
                                <Link href="/vanliga-fragor" className="text-blue-200/70 hover:text-white transition-colors text-sm">
                                    Vanliga frågor
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Företaget */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-6">
                            Om & Kontakt
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/om-oss" className="text-blue-200/70 hover:text-white transition-colors text-sm">
                                    Om Välja A-kassa
                                </Link>
                            </li>
                            <li>
                                <Link href="/kontakt" className="text-blue-200/70 hover:text-white transition-colors text-sm">
                                    Kontakta oss
                                </Link>
                            </li>
                            <li>
                                <Link href="/integritetspolicy" className="text-blue-200/70 hover:text-white transition-colors text-sm">
                                    Integritetspolicy
                                </Link>
                            </li>
                            <li>
                                <Link href="/cookies" className="text-blue-200/70 hover:text-white transition-colors text-sm">
                                    Cookiepolicy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-center md:text-left">
                            <p className="text-blue-200/50 text-xs mb-2">
                                &copy; {currentYear} Välja a-kassa. Alla rättigheter förbehållna.
                            </p>
                            <p className="text-blue-200/40 text-[10px] italic max-w-md">
                                valjaakassa.se är en oberoende informationskanal. Vi är inte en myndighet eller en a-kassa. All information tillhandahålls i informationssyfte och vi rekommenderar alltid att du kontrollerar aktuella villkor hos din specifika a-kassa.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <Link href="/sitemap" className="text-blue-200/40 hover:text-white text-[10px] transition-colors underline">
                                Sidkarta
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
