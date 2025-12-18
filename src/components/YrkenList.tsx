"use client";

import { useState } from "react";
import { Yrke, Akassa } from "@/types";
import YrkeCard from "./YrkeCard";


interface Props {
    yrken: Yrke[];
    akassor: Akassa[];
}

const POPULAR_SLUGS = [
    "butikssaljare",
    "lagerarbetare",
    "underskoterska",
    "sjukskoterska",
    "larare",
    "barnskotare",
    "snickare",
    "lokalvardare",
    "lastbilschauffor",
    "elektriker",
    "kock",
    "frisor",
    "ingenjor",
    "ekonom",
    "polis",
    "projektledare"
];

export default function YrkenList({ yrken, akassor }: Props) {
    const [showAll, setShowAll] = useState(false);

    // Filter out popular ones
    const popularYrken = yrken.filter(y => POPULAR_SLUGS.includes(y.slug));

    // Get the rest, sorted alphabetically
    const otherYrken = yrken
        .filter(y => !POPULAR_SLUGS.includes(y.slug))
        .sort((a, b) => a.name.localeCompare(b.name));

    // Combine: Popular first, to ensure they appear in the top grid
    const allOrdered = [...popularYrken, ...otherYrken];

    // Show 16 initially (4x4), or all if expanded
    const displayedYrken = showAll ? allOrdered : allOrdered.slice(0, 16);

    return (
        <div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {displayedYrken.map((yrke) => {
                    const recommendedAkassa = akassor.find(
                        (a) => a.id === yrke.recommendedAkassaId
                    );
                    return (
                        <YrkeCard
                            key={yrke.slug}
                            yrke={yrke}
                            akassa={recommendedAkassa}
                        />
                    );
                })}
            </div>

            {!showAll && (
                <div className="mt-12 flex justify-center">
                    <button
                        onClick={() => setShowAll(true)}
                        className="rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all transform hover:scale-105"
                    >
                        Se alla yrken
                    </button>
                </div>
            )}
        </div>
    );
}
