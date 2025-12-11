
"use client";

import { useState, useMemo, useEffect } from "react";
import { Akassa, EmployerType } from "@/types";
import { akassor } from "@/data/database";
import AkassaCard from "./AkassaCard";
import FilterBar from "./FilterBar";
import SortDropdown, { SortOrder } from "./SortDropdown";
import { Search as SearchIcon } from "lucide-react";

interface Props {
    initialProfession?: string;
    embedded?: boolean;
}

export default function AkassaComparison({ initialProfession = "", embedded = false }: Props) {
    const [searchQuery, setSearchQuery] = useState(initialProfession);
    const [selectedTypes, setSelectedTypes] = useState<EmployerType[]>([]);
    const [sortOrder, setSortOrder] = useState<SortOrder>("relevance");

    // Initialize search if prop changes
    useEffect(() => {
        if (initialProfession) {
            setSearchQuery(initialProfession);
        }
    }, [initialProfession]);

    // Handle Reset
    const handleReset = () => {
        setSearchQuery("");
        setSelectedTypes([]);
        setSortOrder("relevance");
    };

    // Toggle Filter
    const handleToggleType = (type: EmployerType) => {
        setSelectedTypes((prev) =>
            prev.includes(type)
                ? prev.filter((t) => t !== type)
                : [...prev, type]
        );
    };

    // Filter and Sort Logic
    const filteredAndSortedAkassor = useMemo(() => {
        let result = [...akassor];

        // 1. Filter by Employer Type
        if (selectedTypes.length > 0) {
            result = result.filter((a) =>
                a.employerTypes.some((type) => selectedTypes.includes(type))
            );
        }

        // 2. Score for Search (Relevance)
        const query = searchQuery.toLowerCase().trim();
        const scoredResult = result.map((a) => {
            let score = 0;
            if (query) {
                // Exact match in jobs
                if (a.exampleJobs.some((job) => job.toLowerCase() === query)) {
                    score = 100;
                }
                // Partial match in jobs
                else if (a.exampleJobs.some((job) => job.toLowerCase().includes(query))) {
                    score = 50;
                }
                // Match in industries
                else if (a.primaryIndustries.some((ind) => ind.toLowerCase().includes(query))) {
                    score = 25;
                }
            }
            return { ...a, score };
        });

        // 3. Filter out non-matches IF searching? 
        // User didn't explicitly say to hide non-matches, but "Relevans" sort implies ranking.
        // However, usually if you search "Snickare", you ONLY want to see construction unions.
        // Let's hide zero-score items IF there is a query.
        let finalResult = query
            ? scoredResult.filter((a) => a.score > 0)
            : scoredResult;

        // 4. Sort
        finalResult.sort((a, b) => {
            if (sortOrder === "relevance") {
                // Priority 1: Match Score
                if (a.score !== b.score) return b.score - a.score;
                // Priority 2: Partner
                if (a.partner !== b.partner) return a.partner ? -1 : 1;
                // Priority 3: Price (Low to High) - User said members desc? 
                // User said: "Relevans ... Members (desc) ... partner ... lowest price"
                // Let's follow user: Match -> Members -> Partner -> Price
                // Wait, User said: "Match score ... Members (desc) ... partner = true gets priority ... lowest price".
                // This hierarchy is a bit mixed. Let's do: Match > Partner > Members > Price? 
                // "Match score for selected profession" -> "Members desc" -> "partner priority".
                // Usually Match is #1. Then Partner. Then Members.

                // My interpretation:
                // 1. Match Score
                // 2. Partner (if score equal)
                // 3. Members (desc)
                // 4. Price (asc)

                if (a.score !== b.score) return b.score - a.score;
                if (a.partner !== b.partner) return a.partner ? -1 : 1; // True first
                // if (a.members !== b.members) return b.members - a.members; // Members desc
                // Let's stick to simple "Partner > Price" for relevance usually?
                // User said "Members (desc)". Okay.
                return b.members - a.members;
            } else if (sortOrder === "popular") {
                return b.members - a.members;
            } else if (sortOrder === "price") {
                return a.pricePerMonth - b.pricePerMonth;
            }
            return 0;
        });

        return finalResult;
    }, [searchQuery, selectedTypes, sortOrder]);

    return (
        <div className={`mx-auto w-full ${embedded ? "" : "max-w-4xl"}`}>
            {/* Search Section */}
            <div className={`mb-8 ${embedded ? "hidden" : "block"}`}>
                <div className="relative">
                    <label
                        htmlFor="profession-search"
                        className="mb-2 block text-sm font-semibold text-gray-900"
                    >
                        Vad jobbar du med?
                    </label>
                    <div className="relative">
                        <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                            id="profession-search"
                            type="text"
                            placeholder="Skriv in ditt yrke (t.ex. Lärare, Snickare)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full rounded-xl border border-gray-300 py-3.5 pl-11 pr-4 text-gray-900 shadow-sm transition-colors focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                    </div>
                </div>
            </div>

            {/* Filter & Sort Bar */}
            <div className="mb-6 space-y-4">
                <FilterBar
                    selectedTypes={selectedTypes}
                    onToggleType={handleToggleType}
                    onReset={handleReset}
                />

                <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                        Visar <strong>{filteredAndSortedAkassor.length}</strong> a-kassor
                    </p>
                    <SortDropdown value={sortOrder} onChange={setSortOrder} />
                </div>
            </div>

            {/* List */}
            <div className="space-y-4">
                {filteredAndSortedAkassor.map((akassa) => (
                    <AkassaCard key={akassa.id} akassa={akassa} />
                ))}

                {filteredAndSortedAkassor.length === 0 && (
                    <div className="bg-gray-50 rounded-xl p-12 text-center text-gray-500">
                        Inga a-kassor matchade din sökning. Försök med ett annat yrke eller rensa filtret.
                    </div>
                )}
            </div>
        </div>
    );
}
