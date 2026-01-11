'use client';

import { useState, useRef, useEffect } from 'react';
import { CvAnalysis } from '@/lib/cv/schemas';
import { Upload, FileText, Check, AlertCircle, Loader2, FileType, X, Plus } from 'lucide-react';
import { AnalysisResult } from './AnalysisResult';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

export function CvAnalyzer() {
    const [file, setFile] = useState<File | null>(null);
    const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [loadingStep, setLoadingStep] = useState(0);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<CvAnalysis | null>(null);
    const [consent, setConsent] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const cvInputRef = useRef<HTMLInputElement>(null);
    const clInputRef = useRef<HTMLInputElement>(null);

    const loadingSteps = [
        "Läser in dokument...",
        "Analyserar struktur och layout...",
        "Granskar innehåll och relevans...",
        "Utvärderar språk och formuleringar...",
        "Sammanställer feedback..."
    ];

    useEffect(() => {
        if (loading) {
            const interval = setInterval(() => {
                setLoadingStep((prev) => (prev + 1) % loadingSteps.length);
            }, 2500);
            return () => clearInterval(interval);
        } else {
            setLoadingStep(0);
        }
    }, [loading]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'cv' | 'coverLetter') => {
        if (e.target.files && e.target.files[0]) {
            if (type === 'cv') setFile(e.target.files[0]);
            else setCoverLetterFile(e.target.files[0]);
            setError(null);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            // Basic logic: assume first file is CV.
            // Ideally we'd check file types or have separate drop zones.
            // For simplicity, let's just take the first file as CV if none is set, or try to be smart.
            const droppedFile = e.dataTransfer.files[0];

            // Check extension
            const ext = droppedFile.name.split('.').pop()?.toLowerCase();
            if (['pdf', 'docx', 'doc', 'txt'].includes(ext || '')) {
                if (!file) setFile(droppedFile);
                else if (!coverLetterFile) setCoverLetterFile(droppedFile);
                else setFile(droppedFile); // Overwrite CV
                setError(null);
            } else {
                setError("Endast PDF, Word eller textfiler stöds.");
            }
        }
    };

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!file) {
            setError("Du måste ladda upp ett CV.");
            return;
        }
        if (!consent) {
            setError("Du måste godkänna villkoren för att fortsätta.");
            return;
        }

        setLoading(true);
        setError(null);

        if (file.size === 0) {
            setError("Filen verkar vara tom. Kontrollera att du valt rätt fil.");
            return;
        }

        const formData = new FormData();
        formData.append('cv', file);
        if (coverLetterFile) {
            if (coverLetterFile.size === 0) {
                setError("Det personliga brevet verkar vara tomt.");
                return;
            }
            formData.append('coverLetter', coverLetterFile);
        }

        try {
            console.log("Starting analysis for files:", { cv: file.name, size: file.size });
            const res = await fetch('/api/cv/analyze', {
                method: 'POST',
                body: formData
            });

            // Read as text first to avoid 'Unexpected end of JSON input'
            const responseText = await res.text();
            let data;
            try {
                data = JSON.parse(responseText);
            } catch (e) {
                console.error("Failed to parse JSON. Raw response:", responseText);
                throw new Error(`Servern svarade med ett oväntat format (${res.status}). Det beror troligen på en timeout på servern. Försök med en kortare fil.`);
            }

            console.log("Received response data:", data);

            if (!res.ok) {
                console.error("API error response:", data);
                throw new Error(data.error || 'Något gick fel vid analysen.');
            }

            setResult(data);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (err: any) {
            console.error("Caught error in handleSubmit:", err);
            setError(err.message || "Ett oväntat fel uppstod. Försök igen.");
        } finally {
            setLoading(false);
        }
    }

    if (result) {
        return <AnalysisResult analysis={result} onReset={() => {
            setResult(null);
            setFile(null);
            setCoverLetterFile(null);
            setConsent(false);
        }} />;
    }

    return (
        <div className="max-w-3xl mx-auto">
            <div className={cn(
                "bg-white rounded-3xl shadow-xl shadow-slate-200/50 border overflow-hidden transition-all duration-300 relative",
                isDragging ? "border-blue-500 ring-4 ring-blue-500/10 scale-[1.01]" : "border-slate-200"
            )}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                {loading && (
                    <div className="absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-300">
                        <div className="relative mb-8">
                            <div className="w-20 h-20 rounded-full border-4 border-slate-100 border-t-blue-600 animate-spin"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Loader2 className="w-8 h-8 text-blue-600 animate-pulse" />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">Analyserar ditt CV</h3>
                        <p className="text-slate-500 min-h-[1.5em] transition-all duration-500">
                            {loadingSteps[loadingStep]}
                        </p>
                    </div>
                )}

                <div className="p-8 md:p-12">
                    <form onSubmit={handleSubmit} className="space-y-10">

                        {/* File Upload Section */}
                        <div className="space-y-6">
                            {/* CV Upload */}
                            <div>
                                <label className="block text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-sm">1</span>
                                    Ladda upp ditt CV <span className="text-red-500">*</span>
                                </label>

                                {!file ? (
                                    <div
                                        onClick={() => cvInputRef.current?.click()}
                                        className="border-2 border-dashed border-slate-300 rounded-2xl p-10 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 transition-all group"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-sm">
                                            <Upload className="w-7 h-7 text-slate-400 group-hover:text-blue-500 transition-colors" />
                                        </div>
                                        <p className="text-lg font-medium text-slate-700 mb-1 group-hover:text-blue-700">Klicka för att välja fil</p>
                                        <p className="text-sm text-slate-400">PDF eller Word (docx)</p>
                                    </div>
                                ) : (
                                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex items-center justify-between group animate-in slide-in-from-bottom-2">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                                                <FileText className="w-6 h-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-slate-900 truncate max-w-[200px] md:max-w-xs">{file.name}</p>
                                                <p className="text-xs text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setFile(null)}
                                            className="p-2 hover:bg-white rounded-full transition-colors text-slate-400 hover:text-red-500"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>
                                )}
                                <input
                                    ref={cvInputRef}
                                    type="file"
                                    accept=".pdf,.docx,.doc,.txt"
                                    className="hidden"
                                    onChange={(e) => handleFileChange(e, 'cv')}
                                />
                            </div>

                            {/* Cover Letter Upload */}
                            <div>
                                <label className="block text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center text-sm">2</span>
                                    Personligt brev <span className="text-sm font-normal text-slate-400 ml-1">(Frivilligt)</span>
                                </label>

                                {!coverLetterFile ? (
                                    <div
                                        onClick={() => clInputRef.current?.click()}
                                        className="border border-dashed border-slate-300 rounded-2xl p-6 text-center cursor-pointer hover:border-indigo-500 hover:bg-indigo-50/30 transition-all flex items-center justify-center gap-4 group"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                                            <Plus className="w-5 h-5 text-slate-400 group-hover:text-indigo-600" />
                                        </div>
                                        <div className="text-left">
                                            <p className="font-medium text-slate-700 group-hover:text-indigo-700">Lägg till personligt brev</p>
                                            <p className="text-xs text-slate-400">PDF eller Word</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 flex items-center justify-between group animate-in slide-in-from-bottom-2">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                                                <FileText className="w-6 h-6 text-indigo-600" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-slate-900 truncate max-w-[200px] md:max-w-xs">{coverLetterFile.name}</p>
                                                <p className="text-xs text-slate-500">{(coverLetterFile.size / 1024 / 1024).toFixed(2)} MB</p>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setCoverLetterFile(null)}
                                            className="p-2 hover:bg-white rounded-full transition-colors text-slate-400 hover:text-red-500"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>
                                )}
                                <input
                                    ref={clInputRef}
                                    type="file"
                                    accept=".pdf,.docx,.doc,.txt"
                                    className="hidden"
                                    onChange={(e) => handleFileChange(e, 'coverLetter')}
                                />
                            </div>
                        </div>

                        {/* Consent */}
                        <div className="pt-2 border-t border-slate-100">
                            <label className="flex items-start gap-4 cursor-pointer group p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
                                <div className="relative flex items-center mt-0.5">
                                    <input
                                        type="checkbox"
                                        checked={consent}
                                        onChange={(e) => setConsent(e.target.checked)}
                                        className="peer sr-only "
                                    />
                                    <div className="w-5 h-5 border-2 border-slate-300 rounded md:rounded-md peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all flex items-center justify-center">
                                        <Check className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" strokeWidth={3} />
                                    </div>
                                </div>
                                <div className="text-sm text-slate-600 leading-relaxed">
                                    Jag godkänner att mitt CV granskas av Välja A-kassas digitala CV-expert. Jag förstår att analysen sker automatiskt och att mitt underlag behandlas säkert och under sekretess.
                                </div>
                            </label>
                        </div>

                        {error && (
                            <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-start gap-3 border border-red-100 animate-in fade-in">
                                <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                <p className="text-sm font-medium">{error}</p>
                            </div>
                        )}

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={!file || !consent || loading}
                                className={cn(
                                    "w-full py-4 px-6 rounded-xl font-bold text-lg shadow-lg shadow-blue-900/10 transition-all duration-300 transform",
                                    !file || !consent || loading
                                        ? "bg-slate-100 text-slate-400 cursor-not-allowed shadow-none scale-100"
                                        : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
                                )}
                            >
                                {loading ? 'Analyserar...' : 'Analysera mitt CV'}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Footer of card */}
                <div className="bg-slate-50 p-6 text-center border-t border-slate-100">
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Stödda format: PDF, DOCX</p>
                </div>
            </div>
        </div>
    );
}
