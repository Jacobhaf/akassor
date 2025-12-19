"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu, X, ArrowRight } from "lucide-react";
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
                    <div className="fixed inset-y-0 right-0 z-50 w-full bg-[#fcfcfc] px-6 py-6 shadow-2xl md:hidden md:max-w-sm sm:max-w-sm overflow-y-auto">
                        <div className="flex items-center justify-between mb-8">
                            <div className="relative h-10 w-32">
                                <Image
                                    src="/logo-valja-akassa-white.png"
                                    alt="Välja A-kassa Logo"
                                    fill
                                    className="object-contain object-left invert brightness-0"
                                />
                            </div>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-900 hover:bg-gray-100 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="sr-only">Stäng meny</span>
                                <X className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>

                        <div className="flex flex-col space-y-2">
                            {/* Main Navigation Items */}


                            <Link href="/akassor" onClick={() => setIsMenuOpen(false)} className="group py-4 border-b border-gray-100">
                                <div className="flex items-center gap-3 mb-1">
                                    <ArrowRight className="h-4 w-4 text-gray-900 transition-transform group-hover:translate-x-1" />
                                    <span className="text-lg font-bold text-gray-900">Alla a-kassor</span>
                                </div>
                                <p className="pl-7 text-sm text-gray-500 font-medium">Jämför villkor och priser</p>
                            </Link>

                            <Link href="/yrken" onClick={() => setIsMenuOpen(false)} className="group py-4 border-b border-gray-100">
                                <div className="flex items-center gap-3 mb-1">
                                    <ArrowRight className="h-4 w-4 text-gray-900 transition-transform group-hover:translate-x-1" />
                                    <span className="text-lg font-bold text-gray-900">Hitta via yrke</span>
                                </div>
                                <p className="pl-7 text-sm text-gray-500 font-medium">Se a-kassor för ditt jobb</p>
                            </Link>

                            <Link href="/inkomstforsakring" onClick={() => setIsMenuOpen(false)} className="group py-4 border-b border-gray-100">
                                <div className="flex items-center gap-3 mb-1">
                                    <ArrowRight className="h-4 w-4 text-gray-900 transition-transform group-hover:translate-x-1" />
                                    <span className="text-lg font-bold text-gray-900">Inkomstförsäkring</span>
                                </div>
                                <p className="pl-7 text-sm text-gray-500 font-medium">Extra trygghet vid arbetslöshet</p>
                            </Link>

                            <Link href="/ga-ur-a-kassa" onClick={() => setIsMenuOpen(false)} className="group py-4 border-b border-gray-100">
                                <div className="flex items-center gap-3 mb-1">
                                    <ArrowRight className="h-4 w-4 text-gray-900 transition-transform group-hover:translate-x-1" />
                                    <span className="text-lg font-bold text-gray-900">Gå ur A-kassa</span>
                                </div>
                                <p className="pl-7 text-sm text-gray-500 font-medium">Regler för att avsluta a-kassa</p>
                            </Link>


                        </div>

                        {/* Secondary Links */}
                        <div className="mt-8 flex flex-col space-y-4 px-2">
                            <Link href="/om-oss" className="text-base font-medium text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Om oss</Link>
                            <Link href="/integritetspolicy" className="text-base font-medium text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Integritetspolicy</Link>
                            <Link href="/cookies" className="text-base font-medium text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Cookies</Link>
                            <Link href="/kontakt" className="text-base font-medium text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Kontakt</Link>
                        </div>

                        {/* Social */}
                        <div className="mt-12 px-2 pb-8">
                            <a href="#" className="inline-flex items-center text-gray-400 hover:text-gray-900 transition-colors">
                                <span className="sr-only">Twitter</span>
                                <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                            </a>
                            <div className="mt-4 text-xs font-bold uppercase tracking-wider text-gray-400">
                                Välja A-kassa
                            </div>
                        </div>
                    </div>
                </>,
                document.body
            )}
        </header >
    );
}
