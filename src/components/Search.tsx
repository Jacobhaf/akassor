"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { akassor, yrken } from "@/data/database";
import { Search as SearchIcon } from "lucide-react";

export default function Search() {
    const router = useRouter();
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const filteredResults = useMemo(() => {
        if (!query) return { yrken: [], akassor: [] };

        const lowerQuery = query.toLowerCase();

        const matchedYrken = yrken.filter((y) =>
            y.name.toLowerCase().includes(lowerQuery)
        );
        const matchedAkassor = akassor.filter((a) =>
            a.name.toLowerCase().includes(lowerQuery)
        );

        return { yrken: matchedYrken, akassor: matchedAkassor };
    }, [query]);

    const handleSelect = (path: string) => {
        router.push(path);
        setIsOpen(false);
        setQuery("");
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm"
                    placeholder="Sök på ditt yrke (t.ex. lärare) eller en a-kassa..."
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setIsOpen(true);
                    }}
                    onFocus={() => setIsOpen(true)}
                    onBlur={() => setTimeout(() => setIsOpen(false), 200)}
                />
            </div>

            {isOpen &&
                (filteredResults.yrken.length > 0 ||
                    filteredResults.akassor.length > 0) && (
                    <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-96 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                        {filteredResults.yrken.length > 0 && (
                            <>
                                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50">
                                    Yrken
                                </div>
                                {filteredResults.yrken.map((yrke) => (
                                    <div
                                        key={yrke.slug}
                                        className="cursor-pointer select-none relative py-2 pl-4 pr-9 hover:bg-blue-50"
                                        onClick={() => handleSelect(`/yrke/${yrke.slug}`)}
                                    >
                                        <span className="font-medium block truncate">
                                            {yrke.name}
                                        </span>
                                    </div>
                                ))}
                            </>
                        )}

                        {filteredResults.akassor.length > 0 && (
                            <>
                                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50 border-t border-gray-100">
                                    A-kassor
                                </div>
                                {filteredResults.akassor.map((akassa) => (
                                    <div
                                        key={akassa.id}
                                        className="cursor-pointer select-none relative py-2 pl-4 pr-9 hover:bg-blue-50"
                                        onClick={() => handleSelect(`/akassa/${akassa.slug}`)}
                                    >
                                        <span className="font-medium block truncate">
                                            {akassa.name}
                                        </span>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                )}
        </div>
    );
}
