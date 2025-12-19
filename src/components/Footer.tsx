import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#0B1B3F] text-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-green-400 to-blue-500 opacity-80"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

            <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center mb-8 inline-block">
                            <div className="relative h-20 w-72 md:h-32 md:w-[30rem] transition-opacity hover:opacity-90">
                                <Image
                                    src="/logo-valja-akassa-white.png"
                                    alt="Välja A-kassa Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Sveriges guide till a-kassor. Vi hjälper dig att hitta rätt a-kassa baserat på ditt yrke. Jämför enkelt, tryggt och kostnadsfritt.
                        </p>
                        <div className="flex space-x-4">
                            {/* Placeholder Social Icons */}
                            <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all cursor-pointer">
                                <span className="sr-only">Facebook</span>
                                <svg fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
                            </div>
                            <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all cursor-pointer">
                                <span className="sr-only">Twitter</span>
                                <svg fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-6">
                            Utforska
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/akassor" className="group flex items-center text-gray-300 hover:text-white transition-colors">
                                    <span className="h-px w-0 bg-blue-400 mr-0 transition-all group-hover:w-4 group-hover:mr-2"></span>
                                    <span>Alla a-kassor</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/yrken" className="group flex items-center text-gray-300 hover:text-white transition-colors">
                                    <span className="h-px w-0 bg-blue-400 mr-0 transition-all group-hover:w-4 group-hover:mr-2"></span>
                                    <span>Hitta via yrke</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/inkomstforsakring" className="group flex items-center text-gray-300 hover:text-white transition-colors">
                                    <span className="h-px w-0 bg-blue-400 mr-0 transition-all group-hover:w-4 group-hover:mr-2"></span>
                                    <span>Inkomstförsäkring</span>
                                </Link>
                            </li>

                            <li>
                                <Link href="/artiklar" className="group flex items-center text-gray-300 hover:text-white transition-colors">
                                    <span className="h-px w-0 bg-blue-400 mr-0 transition-all group-hover:w-4 group-hover:mr-2"></span>
                                    <span>Artiklar & Guider</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Other Links */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-6">
                            Om tjänsten
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/om-oss" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                                    Om oss
                                </Link>
                            </li>
                            <li>
                                <Link href="/akassa-regler" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                                    A-kassa regler
                                </Link>
                            </li>
                            <li>
                                <Link href="/ordlista" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                                    A-kassa ordlista
                                </Link>
                            </li>
                            <li>
                                <Link href="/friskvardsbidrag" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                                    Friskvårdsbidrag
                                </Link>
                            </li>

                            <li>
                                <Link href="/kontakt" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                                    Kontakta oss
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact / Value */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-6">
                            Kontakt
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Har du frågor eller funderingar? Vi finns här för att hjälpa dig göra rätt val.
                        </p>
                        <a
                            href="mailto:info@valjaakassa.se"
                            className="inline-flex items-center justify-center w-full px-4 py-3 border border-white/20 rounded-lg text-sm font-medium text-white hover:bg-white/10 transition-colors group"
                        >
                            <span className="mr-2">✉️</span> info@valjaakassa.se
                        </a>
                        <p className="mt-6 text-xs text-gray-500">
                            Välja a-kassa är en oberoende jämförelsetjänst.
                        </p>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500 text-center md:text-left">
                        &copy; {currentYear} Välja a-kassa. Alla rättigheter förbehållna.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="/integritetspolicy" className="text-xs text-gray-500 hover:text-white transition-colors">
                            Integritetspolicy
                        </Link>
                        <Link href="/cookies" className="text-xs text-gray-500 hover:text-white transition-colors">
                            Cookies
                        </Link>
                        <Link href="/sitemap" className="text-xs text-gray-500 hover:text-white transition-colors">
                            Sidkarta
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
