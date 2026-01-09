"use client";

import React from 'react';
import { GeneratorSettings } from '@/lib/cv/schemas';
import { Sparkles, Loader2 } from 'lucide-react';

interface Props {
    settings: GeneratorSettings;
    update: (data: Partial<GeneratorSettings>) => void;
    onGenerate: () => void;
    isGenerating: boolean;
}

export default function JobContextStep({ settings, update, onGenerate, isGenerating }: Props) {
    return (
        <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Vad söker du för jobb?</h2>
                <p className="text-gray-500">Vi anpassar ditt CV och personliga brev efter jobbet.</p>
            </div>

            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Jobbtitel / Roll</label>
                    <input
                        type="text"
                        value={settings.jobRole || ""}
                        onChange={(e) => update({ jobRole: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="T.ex. Projektledare"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Klistra in jobbannons (Rekommenderas)</label>
                    <textarea
                        value={settings.jobDescription || ""}
                        onChange={(e) => update({ jobDescription: e.target.value })}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                        placeholder="Klistra in hela annonstexten här..."
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Ton</label>
                        <select
                            value={settings.tone}
                            onChange={(e) => update({ tone: e.target.value as any })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                        >
                            <option value="formal">Formell & Professionell</option>
                            <option value="warm">Varm & Personlig</option>
                            <option value="direct">Rak & Prestationsinriktad</option>
                            <option value="sales">Säljande & Drivande</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mall</label>
                        <select
                            value={settings.template}
                            onChange={(e) => update({ template: e.target.value as any })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                        >
                            <option value="modern">Modern (Snygg layout)</option>
                            <option value="ats">ATS-vänlig (Enkel text)</option>
                        </select>
                    </div>
                </div>

                <div className="pt-6">
                    <button
                        onClick={onGenerate}
                        disabled={isGenerating || !settings.jobRole}
                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-1 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                        {isGenerating ? (
                            <>
                                <Loader2 className="animate-spin mr-2" />
                                Genererar dokument...
                            </>
                        ) : (
                            <>
                                <Sparkles className="mr-2" />
                                Skapa CV & Personligt Brev
                            </>
                        )}
                    </button>
                    <p className="text-center text-xs text-gray-400 mt-4">
                        Genom att klicka på knappen godkänner du att vi behandlar dina uppgifter för att skapa dokumentet.
                        Vi sparar inget permanent.
                    </p>
                </div>
            </div>
        </div>
    );
}
