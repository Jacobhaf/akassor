"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import clsx from "clsx";

interface FaqItem {
    question: string;
    answer: React.ReactNode; // Flexible to accept strings or JSX
}

interface FaqAccordionProps {
    items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4 max-w-2xl mx-auto">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={clsx(
                        "rounded-xl border transition-all duration-200 overflow-hidden",
                        openIndex === index
                            ? "bg-blue-50 border-blue-200 shadow-sm"
                            : "bg-white border-gray-200 hover:border-blue-100"
                    )}
                >
                    <button
                        onClick={() => toggle(index)}
                        className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                        aria-expanded={openIndex === index}
                    >
                        <span className={clsx("font-bold text-lg", openIndex === index ? "text-blue-900" : "text-gray-900")}>
                            {item.question}
                        </span>
                        {openIndex === index ? (
                            <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                    </button>
                    <div
                        className={clsx(
                            "transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden",
                            openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                        )}
                    >
                        <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                            {/* Render answer as-is if object, or paragraphs if string has newlines */}
                            {typeof item.answer === 'string' ? (
                                <div className="prose prose-blue max-w-none">
                                    {item.answer.split('\n\n').map((paragraph, i) => (
                                        <div key={i}>
                                            {paragraph.trim().startsWith('*') ? (
                                                <ul className="list-disc pl-5 space-y-1 mb-4">
                                                    {paragraph.split('\n').map((line, j) => (
                                                        <li key={j}>{line.replace('*', '').trim()}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="mb-4 last:mb-0">{paragraph}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                item.answer
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
