"use client";

import React from 'react';
import { MasterProfile } from '@/lib/cv/schemas';
import { Plus, Trash2 } from 'lucide-react';

interface Props {
    profile: MasterProfile;
    update: (data: Partial<MasterProfile>) => void;
}

export default function EducationSkillsStep({ profile, update }: Props) {
    const addEducation = () => {
        update({
            education: [
                ...profile.education,
                {
                    id: Math.random().toString(36).substr(2, 9),
                    school: "",
                    degree: "",
                    startDate: "",
                    endDate: ""
                }
            ]
        });
    };

    const removeEducation = (index: number) => {
        const newEdu = [...profile.education];
        newEdu.splice(index, 1);
        update({ education: newEdu });
    };

    const updateEdu = (index: number, field: string, value: any) => {
        const newEdu = [...profile.education];
        newEdu[index] = { ...newEdu[index], [field]: value };
        update({ education: newEdu });
    };

    const handleSkillsChange = (val: string) => {
        // Simple comma separated for MVP simplicity in UI, parsed to array on save effectively
        // But here we store as array in state directly if we want.
        // Let's keep it simple string input for UI -> array split.
        update({
            skills: {
                ...profile.skills,
                hard: val.split(',').map(s => s.trim()).filter(Boolean)
            }
        });
    };

    return (
        <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Utbildning & Kompetens</h2>
            </div>

            <div className="space-y-8">

                {/* Education Section */}
                <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Utbildning</h3>
                    <div className="space-y-4">
                        {profile.education.map((edu, idx) => (
                            <div key={edu.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200 relative group flex gap-4 items-start">
                                <div className="flex-1 grid md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        value={edu.school}
                                        onChange={(e) => updateEdu(idx, 'school', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                                        placeholder="Skola / Universitet"
                                    />
                                    <input
                                        type="text"
                                        value={edu.degree}
                                        onChange={(e) => updateEdu(idx, 'degree', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                                        placeholder="Examen (t.ex. Civilingenjör)"
                                    />
                                    <input
                                        type="text"
                                        value={edu.startDate}
                                        onChange={(e) => updateEdu(idx, 'startDate', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                                        placeholder="Startår"
                                    />
                                    <input
                                        type="text"
                                        value={edu.endDate || ""}
                                        onChange={(e) => updateEdu(idx, 'endDate', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                                        placeholder="Slutår"
                                    />
                                </div>
                                <button
                                    onClick={() => removeEducation(idx)}
                                    className="text-gray-400 hover:text-red-500 p-2"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        ))}
                        <button
                            onClick={addEducation}
                            className="text-sm text-blue-600 font-medium flex items-center hover:underline"
                        >
                            <Plus size={16} className="mr-1" /> Lägg till utbildning
                        </button>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="border-t border-gray-100 pt-8">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Kompetenser</h3>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Hårda kompetenser / Verktyg (separera med komma)</label>
                        <textarea
                            value={profile.skills.hard.join(", ")}
                            onChange={(e) => handleSkillsChange(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Excel, Project Management, React, Körkort B..."
                            rows={3}
                        />
                        <p className="text-xs text-gray-500 mt-2">
                            Skriv in allt du kan. AI:n kommer att välja ut de mest relevanta kompetenserna för varje jobb du söker.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
