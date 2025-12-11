"use client";

import { useState } from "react";
import Link from "next/link";
import { Yrke } from "@/types";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Props {
    yrken: Yrke[];
    initialCount?: number;
}

export default function ExpandableYrkenList({ yrken, initialCount = 20 }: Props) {
    const [isExpanded, setIsExpanded] = useState(false);

    if (yrken.length === 0) return null;

    const visibleYrken = isExpanded ? yrken : yrken.slice(0, initialCount);
    const hasMore = yrken.length > initialCount;

    return (
        <div className="mt-4">
            <div className="flex flex-wrap gap-2">
                {visibleYrken.map((yrke) => (
                    <Link
                        key={yrke.slug}
                        href={`/yrken/${yrke.slug}`}
                        className="inline-block px-3 py-1 bg-white text-blue-600 text-sm font-medium rounded-full border border-blue-200 hover:border-blue-400 transition-colors hover:bg-blue-50"
                    >
                        {yrke.name}
                    </Link>
                ))}
            </div>

            {hasMore && (
                <div className="mt-4 flex justify-center">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors bg-blue-100/50 hover:bg-blue-100 px-4 py-2 rounded-lg"
                    >
                        {isExpanded ? (
                            <>
                                Visa färre yrken <ChevronUp className="h-4 w-4" />
                            </>
                        ) : (
                            <>
                                Se alla yrken ({yrken.length}) <ChevronDown className="h-4 w-4" />
                            </>
                        )}
                    </button>
                </div>
            )}
        </div>
    );
}
