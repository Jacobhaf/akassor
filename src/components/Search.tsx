"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search as SearchIcon } from "lucide-react";
import { yrken } from "@/data/database";
import { Yrke } from "@/types";

export default function Search() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Yrke[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        if (query.length > 1) {
            const filtered = yrken.filter((yrke) =>
                yrke.name.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filtered.slice(0, 5)); // Limit to 5 results
            setIsOpen(true);
        } else {
            setResults([]);
            setIsOpen(false);
        }
    }, [query]);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (slug: string) => {
        router.push(`/yrken/${slug}`);
        setIsOpen(false);
        setQuery("");
    };

    return (
        <div ref={wrapperRef} className="relative w-full max-w-lg mx-auto">
            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                    type="text"
                    className="block w-full rounded-lg border-0 py-4 pl-10 pr-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    placeholder="Vad jobbar du som? (t.ex. Lärare, Snickare...)"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => query.length > 1 && setIsOpen(true)}
                />
            </div>

            {isOpen && results.length > 0 && (
                <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {results.map((yrke) => (
                        <li
                            key={yrke.slug}
                            className="relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-blue-50"
                            onClick={() => handleSelect(yrke.slug)}
                        >
                            <span className="block truncate font-medium">{yrke.name}</span>
                        </li>
                    ))}
                </ul>
            )}

            {isOpen && query.length > 1 && results.length === 0 && (
                <div className="absolute z-10 mt-1 w-full rounded-md bg-white py-4 text-center text-sm text-gray-500 shadow-lg ring-1 ring-black ring-opacity-5">
                    Inga yrken hittades.
                </div>
            )}
        </div>
    );
}
