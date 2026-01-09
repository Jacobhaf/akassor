"use client";

import React from 'react';
import { MasterProfile, ExperienceSchema } from '@/lib/cv/schemas';
import { Plus, Trash2 } from 'lucide-react';

interface Props {
    profile: MasterProfile;
    update: (data: Partial<MasterProfile>) => void;
}

export default function ExperienceStep({ profile, update }: Props) {
    const addExperience = () => {
        update({
            experience: [
                ...profile.experience,
                {
                    id: Math.random().toString(36).substr(2, 9),
                    title: "",
                    company: "",
                    startDate: "",
                    isCurrent: false,
                    achievements: []
                }
            ]
        });
    };

    const removeExperience = (index: number) => {
        const newExp = [...profile.experience];
        newExp.splice(index, 1);
        update({ experience: newExp });
    };

    const updateItem = (index: number, field: string, value: any) => {
        const newExp = [...profile.experience];
        newExp[index] = { ...newExp[index], [field]: value };
        update({ experience: newExp });
    };

    return (
        <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Arbetslivserfarenhet</h2>
                <p className="text-gray-500">Lista dina senaste jobb. Detaljer är bra, men fokusera på vad du åstadkommit.</p>
            </div>

            <div className="space-y-6">
                {profile.experience.map((exp, idx) => (
                    <div key={exp.id} className="bg-gray-50 p-6 rounded-xl border border-gray-200 relative group">
                        <button
                            onClick={() => removeExperience(idx)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <Trash2 size={18} />
                        </button>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Titel</label>
                                <input
                                    type="text"
                                    value={exp.title}
                                    onChange={(e) => updateItem(idx, 'title', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 outline-none"
                                    placeholder="Butikschef"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Företag</label>
                                <input
                                    type="text"
                                    value={exp.company}
                                    onChange={(e) => updateItem(idx, 'company', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 outline-none"
                                    placeholder="Företaget AB"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4 mb-4">
                            <div>
                                <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Startdatum</label>
                                <input
                                    type="text"
                                    value={exp.startDate}
                                    onChange={(e) => updateItem(idx, 'startDate', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 outline-none"
                                    placeholder="2020-01"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Slutdatum</label>
                                <input
                                    type="text"
                                    value={exp.endDate || ""}
                                    disabled={exp.isCurrent}
                                    onChange={(e) => updateItem(idx, 'endDate', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 outline-none disabled:bg-gray-100"
                                    placeholder={exp.isCurrent ? "Pågående" : "2023-05"}
                                />
                            </div>
                            <div className="flex items-center pt-6">
                                <input
                                    type="checkbox"
                                    id={`current-${idx}`}
                                    checked={exp.isCurrent}
                                    onChange={(e) => updateItem(idx, 'isCurrent', e.target.checked)}
                                    className="mr-2 h-4 w-4 text-blue-600 rounded border-gray-300"
                                />
                                <label htmlFor={`current-${idx}`} className="text-sm text-gray-700">Nuvarande jobb</label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Beskrivning / Ansvar</label>
                            <textarea
                                value={exp.description || ""}
                                onChange={(e) => updateItem(idx, 'description', e.target.value)}
                                rows={3}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-sm"
                                placeholder="Beskriv vad du gjorde..."
                            />
                        </div>
                    </div>
                ))}

                <button
                    onClick={addExperience}
                    className="w-full py-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center justify-center font-medium"
                >
                    <Plus size={20} className="mr-2" />
                    Lägg till arbete
                </button>
            </div>
        </div>
    );
}
