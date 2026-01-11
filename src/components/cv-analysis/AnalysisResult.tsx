'use client';

import { CvAnalysis } from '@/lib/cv/schemas';
import { ChevronDown, ChevronUp, RefreshCcw, Sparkles, Lightbulb, FileText, Layout, Target, Languages, Mail, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

function ScoreBar({ score }: { score: number }) {
    const percentage = score * 10;
    const barColor = score >= 8 ? 'bg-green-500' : score >= 5 ? 'bg-yellow-500' : 'bg-orange-500';

    return (
        <div className="w-full h-2 bg-slate-100 rounded-full mt-2 overflow-hidden">
            <div
                className={cn("h-full transition-all duration-1000 ease-out rounded-full", barColor)}
                style={{ width: `${percentage}%` }}
            />
        </div>
    );
}

function SectionCard({ title, data, icon: Icon }: { title: string, data: any, icon: any }) {
    const [isOpen, setIsOpen] = useState(false);
    const score = data.score;

    const themeColor = score >= 8 ? 'text-green-600' : score >= 5 ? 'text-yellow-600' : 'text-orange-600';
    const borderClass = score >= 8 ? 'border-green-100' : score >= 5 ? 'border-yellow-100' : 'border-orange-100';
    const bgClass = score >= 8 ? 'bg-green-50/50' : score >= 5 ? 'bg-yellow-50/50' : 'bg-orange-50/50';

    return (
        <div className={cn("bg-white rounded-2xl border overflow-hidden transition-all duration-300", borderClass, isOpen ? "shadow-lg ring-1 ring-slate-100" : "shadow-sm")}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-slate-50 transition-colors"
            >
                <div className="flex-1 pr-4">
                    <div className="flex items-center gap-4 mb-2">
                        <div className={cn("p-2 rounded-lg", bgClass)}>
                            <Icon className={cn("w-5 h-5", themeColor)} />
                        </div>
                        <h3 className="font-bold text-lg text-slate-800">{title}</h3>
                    </div>
                    <ScoreBar score={score} />
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden sm:block text-right">
                        <p className="text-sm font-bold text-slate-900">{score}/10</p>
                        <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Poäng</p>
                    </div>
                    <div className={cn("p-2 rounded-full transition-transform duration-300", isOpen ? "rotate-180 bg-slate-100" : "")}>
                        <ChevronDown className="text-slate-400 w-5 h-5" />
                    </div>
                </div>
            </button>

            {isOpen && (
                <div className="px-6 pb-6 pt-2 animate-in slide-in-from-top-2 duration-300">
                    <div className="p-5 bg-slate-50 rounded-2xl text-slate-700 italic border-l-4 border-blue-500/30 leading-relaxed text-[15px]">
                        "{data.feedback}"
                    </div>

                    <div className="mt-8">
                        <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
                            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                            Konkreta förbättringsförslag
                        </h4>
                        <ul className="grid gap-3">
                            {data.improvements.map((imp: string, i: number) => (
                                <li key={i} className="flex items-start gap-4 p-4 bg-white border border-slate-100 rounded-xl shadow-sm group hover:border-blue-100 transition-colors">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] font-black mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        {i + 1}
                                    </div>
                                    <span className="text-slate-700 text-sm leading-relaxed font-medium">{imp}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export function AnalysisResult({ analysis, onReset }: { analysis: CvAnalysis; onReset: () => void }) {
    const overallScore = analysis.overall.score;
    const strokeColor = overallScore >= 8 ? "#22c55e" : overallScore >= 5 ? "#eab308" : "#f97316";

    return (
        <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
            {/* Header Score Card */}
            <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-2xl shadow-blue-900/5 border border-slate-100 text-center relative overflow-hidden print:shadow-none print:border-none">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

                <div className="relative z-10">
                    <div className="flex justify-between items-center mb-10 print:hidden">
                        <button onClick={onReset} className="text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-2 text-sm font-bold">
                            <X className="w-4 h-4" /> Starta om
                        </button>
                        <button onClick={() => window.print()} className="bg-slate-50 hover:bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-xs font-bold transition-all border border-slate-200 flex items-center gap-2">
                            Ladda ner som PDF
                        </button>
                    </div>

                    <h2 className="text-3xl font-black text-slate-900 mb-2">Din CV-analys är klar!</h2>
                    <p className="text-slate-400 mb-10 font-medium tracking-wide">Baserat på svensk rekryteringsstandard</p>

                    <div className="inline-flex flex-col items-center justify-center relative mb-12">
                        <svg className="w-56 h-56 transform -rotate-90 text-slate-100">
                            <circle cx="112" cy="112" r="95" stroke="currentColor" strokeWidth="14" fill="none" />
                            <circle
                                cx="112" cy="112" r="95"
                                stroke={strokeColor}
                                strokeWidth="14"
                                fill="none"
                                strokeLinecap="round"
                                strokeDasharray="597"
                                strokeDashoffset={597 - (597 * overallScore) / 10}
                                className="transition-all duration-1000 ease-out"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center flex-col pt-2">
                            <span className="text-7xl font-black text-slate-900 tracking-tighter">{overallScore}</span>
                            <span className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] mt-1">av 10 poäng</span>
                        </div>
                    </div>

                    <div className="max-w-2xl mx-auto bg-gradient-to-br from-blue-50/50 to-white p-8 rounded-[2rem] border border-blue-100/50 shadow-sm relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Sparkles className="w-12 h-12 text-blue-600" />
                        </div>
                        <div className="flex items-start gap-5 text-left">
                            <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-200">
                                <Sparkles className="w-6 h-6 flex-shrink-0" />
                            </div>
                            <div>
                                <h4 className="font-black text-slate-900 text-base mb-2 uppercase tracking-tight">Sammanfattande omdöme</h4>
                                <p className="text-slate-600 leading-relaxed text-base font-medium">
                                    "{analysis.overall.feedback}"
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Detailed Sections */}
            <div className="space-y-4">
                <SectionCard
                    title="Innehåll & Relevans"
                    data={analysis.content}
                    icon={FileText}
                />
                <SectionCard
                    title="Struktur & Layout"
                    data={analysis.structure}
                    icon={Layout}
                />
                <SectionCard
                    title="Anpassning & Sälj"
                    data={analysis.adaptation}
                    icon={Target}
                />
                <SectionCard
                    title="Språk & Tonalitet"
                    data={analysis.language}
                    icon={Languages}
                />
                {analysis.coverLetter && (
                    <SectionCard
                        title="Personligt Brev"
                        data={analysis.coverLetter}
                        icon={Mail}
                    />
                )}
            </div>

            <div className="bg-indigo-900 rounded-[2rem] p-10 text-white relative overflow-hidden print:hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-left">
                        <h3 className="text-2xl font-bold mb-2">Behöver du mer hjälp?</h3>
                        <p className="text-indigo-200 max-w-md font-medium text-sm leading-relaxed">
                            Använd vår CV-byggare för att skapa ett helt nytt CV optimerat med AI från grunden, baserat på denna feedback.
                        </p>
                    </div>
                    <Link
                        href="/verktyg/cv-byggare"
                        className="bg-white text-indigo-900 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-indigo-50 transition-all hover:scale-105 shadow-xl shadow-black/20"
                    >
                        Gå till CV-byggaren
                    </Link>
                </div>
            </div>

            <div className="text-center pt-8 border-t border-slate-100 print:hidden">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">Redo att prova igen?</p>
                <button
                    onClick={onReset}
                    className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-3xl font-black text-sm uppercase tracking-[0.15em] transition-all hover:border-blue-600 hover:text-blue-600 hover:shadow-2xl hover:shadow-blue-900/10"
                >
                    <RefreshCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                    Granska ett nytt dokument
                </button>
            </div>
        </div>
    );
}
