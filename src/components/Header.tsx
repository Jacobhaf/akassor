"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu, X, ArrowRight, Scale, LayoutGrid, Briefcase, ShieldCheck, RefreshCw, UserMinus, Info, FileText, BookOpen, Book, HeartPulse, Banknote, HelpCircle, Shield, Cookie, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // Assuming utils exists, otherwise I'll mock className joining

// Helper component for Nav Links
function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active: boolean }) {
    return (
        <Link
            href={href}
            className={cn(
                "relative text-sm font-medium transition-colors hover:text-white",
                active ? "text-white" : "text-blue-200/80"
            )}
        >
            {children}
            {active && (
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)] rounded-full" />
            )}
            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white/20 opacity-0 transition-opacity hover:opacity-100" />
        </Link>
    );
}

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path: string) => pathname === path;

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0B1B3F]/90 backdrop-blur-xl">
            <div className="mx-auto flex h-20 md:h-32 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 relative z-50">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center group" onClick={() => setIsMenuOpen(false)}>
                        <div className="relative h-24 w-80 md:h-36 md:w-[35rem] transition-transform group-hover:scale-105">
                            <Image
                                src="/logo-valja-akassa-white.png"
                                alt="Välja A-kassa Logo"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">

                    <NavLink href="/akassor" active={isActive("/akassor")}>A-kassor</NavLink>
                    <NavLink href="/yrken" active={isActive("/yrken")}>Yrken</NavLink>
                    <NavLink href="/inkomstforsakring" active={isActive("/inkomstforsakring")}>Inkomstförsäkring</NavLink>
                    <NavLink href="/ga-ur-a-kassa" active={isActive("/ga-ur-a-kassa")}>Gå ur A-kassa</NavLink>

                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center ml-8">
                    <Link
                        href="/jamfor"
                        className="rounded-lg bg-blue-600 px-5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                    >
                        Jämför a-kassor
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:bg-white/10 transition-colors"
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Öppna huvudmenyn</span>
                        {isMenuOpen ? (
                            <X className="h-8 w-8" aria-hidden="true" />
                        ) : (
                            <Menu className="h-8 w-8" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>

            {/* Premium Mobile Menu Overlay */}
            {isMenuOpen && mounted && createPortal(
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
                        onClick={() => setIsMenuOpen(false)}
                    />

                    {/* Drawer */}
                    <div className="fixed inset-y-0 right-0 z-50 w-full bg-[#0B1B3F] p-0 shadow-2xl md:hidden md:max-w-sm sm:max-w-sm flex flex-col overflow-y-auto">

                        {/* Section 1: Header (White Background) */}
                        <div className="bg-white px-4 pt-2 pb-6 shrink-0 relative">
                            {/* Close Button (Moved Up & Smaller) */}
                            <button
                                type="button"
                                className="absolute top-3 right-3 rounded-md p-2 text-[#0B1B3F] hover:bg-gray-100 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="sr-only">Stäng meny</span>
                                <X className="h-6 w-6" aria-hidden="true" />
                            </button>

                            {/* Logo & CTA (Moved Down) */}
                            <div className="mt-8 flex items-center justify-between gap-2">
                                <div className="relative h-24 w-48 sm:h-28 sm:w-64">
                                    <Image
                                        src="/logo-valja-akassa-white.png"
                                        alt="Välja A-kassa Logo"
                                        fill
                                        className="object-contain object-left invert"
                                    />
                                </div>

                                <Link
                                    href="/jamfor"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="rounded-md bg-blue-600 px-3 py-2 text-sm font-bold text-white shadow-sm hover:bg-blue-500 whitespace-nowrap"
                                >
                                    Jämför a-kassor
                                </Link>
                            </div>
                        </div>

                        {/* Section 2: Main Navigation (Dark Background) */}
                        <div className="flex-1 px-6 pt-6 pb-2 space-y-2">
                            <Link href="/akassor" onClick={() => setIsMenuOpen(false)} className="group py-4 border-b border-white/10 block">
                                <div className="flex items-center gap-3 mb-1">
                                    <LayoutGrid className="h-5 w-5 text-blue-300 transition-transform group-hover:scale-110" />
                                    <span className="text-lg font-bold text-white">Alla a-kassor</span>
                                </div>
                                <p className="pl-8 text-sm text-blue-200/80 font-medium">Jämför villkor och priser</p>
                            </Link>

                            <Link href="/yrken" onClick={() => setIsMenuOpen(false)} className="group py-4 border-b border-white/10 block">
                                <div className="flex items-center gap-3 mb-1">
                                    <Briefcase className="h-5 w-5 text-blue-300 transition-transform group-hover:scale-110" />
                                    <span className="text-lg font-bold text-white">Hitta via yrke</span>
                                </div>
                                <p className="pl-8 text-sm text-blue-200/80 font-medium">Se a-kassor för ditt jobb</p>
                            </Link>

                            <Link href="/inkomstforsakring" onClick={() => setIsMenuOpen(false)} className="group py-4 border-b border-white/10 block">
                                <div className="flex items-center gap-3 mb-1">
                                    <ShieldCheck className="h-5 w-5 text-blue-300 transition-transform group-hover:scale-110" />
                                    <span className="text-lg font-bold text-white">Inkomstförsäkring</span>
                                </div>
                                <p className="pl-8 text-sm text-blue-200/80 font-medium">Extra trygghet vid arbetslöshet</p>
                            </Link>

                            <Link href="/byta-a-kassa" onClick={() => setIsMenuOpen(false)} className="group py-4 border-b border-white/10 block">
                                <div className="flex items-center gap-3 mb-1">
                                    <RefreshCw className="h-5 w-5 text-blue-300 transition-transform group-hover:scale-110" />
                                    <span className="text-lg font-bold text-white">Byta a-kassa</span>
                                </div>
                                <p className="pl-8 text-sm text-blue-200/80 font-medium">Guide för att byta smidigt</p>
                            </Link>

                            <Link href="/ga-ur-a-kassa" onClick={() => setIsMenuOpen(false)} className="group py-4 border-b border-white/10 block">
                                <div className="flex items-center gap-3 mb-1">
                                    <UserMinus className="h-5 w-5 text-blue-300 transition-transform group-hover:scale-110" />
                                    <span className="text-lg font-bold text-white">Gå ur A-kassa</span>
                                </div>
                                <p className="pl-8 text-sm text-blue-200/80 font-medium">Regler för att avsluta a-kassa</p>
                            </Link>
                        </div>

                        {/* Section 3: Footer (White Background) */}
                        <div className="bg-white px-6 pt-4 pb-8 shrink-0">
                            {/* Secondary Links */}
                            <div className="flex flex-col space-y-4">
                                <details className="group">
                                    <summary className="flex cursor-pointer items-center justify-between py-2 text-base font-bold text-[#0B1B3F] list-none pr-5 hover:text-blue-600 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <Info className="h-5 w-5 text-blue-600" />
                                            Mer om Välja A-kassa
                                        </div>
                                        <span className="transition delay-150 group-open:rotate-180 text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="mt-2 space-y-2 pl-4 border-l-2 border-gray-200 ml-3">
                                        <Link href="/om-oss" className="flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                                            <Info className="h-4 w-4" /> Om oss
                                        </Link>
                                        <Link href="/artiklar" className="flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                                            <FileText className="h-4 w-4" /> Artiklar & Guider
                                        </Link>
                                        <Link href="/akassa-regler" className="flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                                            <BookOpen className="h-4 w-4" /> A-kassa regler
                                        </Link>
                                        <Link href="/ordlista" className="flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                                            <Book className="h-4 w-4" /> A-kassa ordlista
                                        </Link>
                                        <Link href="/friskvardsbidrag" className="flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                                            <HeartPulse className="h-4 w-4" /> Friskvårdsbidrag
                                        </Link>
                                        <Link href="/aktivitetsstod" className="flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                                            <Banknote className="h-4 w-4" /> Aktivitetsstöd
                                        </Link>
                                        <Link href="/vanliga-fragor" className="flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                                            <HelpCircle className="h-4 w-4" /> Vanliga frågor
                                        </Link>
                                    </div>
                                </details>
                                <Link href="/integritetspolicy" className="flex items-center gap-3 py-2 text-base font-bold text-[#0B1B3F] hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                                    <Shield className="h-5 w-5 text-blue-600" /> Integritetspolicy
                                </Link>
                                <Link href="/cookies" className="flex items-center gap-3 py-2 text-base font-bold text-[#0B1B3F] hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                                    <Cookie className="h-5 w-5 text-blue-600" /> Cookies
                                </Link>
                                <Link href="/kontakt" className="flex items-center gap-3 py-2 text-base font-bold text-[#0B1B3F] hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                                    <Phone className="h-5 w-5 text-blue-600" /> Kontakt
                                </Link>
                            </div>

                            {/* Social */}
                            <div className="mt-8 pb-4 pl-1">
                                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                                    <span className="sr-only">Twitter</span>
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                                </a>
                                <div className="mt-4 text-xs font-bold uppercase tracking-wider text-blue-900">
                                    Välja A-kassa
                                </div>
                            </div>
                        </div>
                    </div>
                </>,
                document.body
            )}
        </header >
    );
}
