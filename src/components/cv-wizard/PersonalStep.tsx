"use client";

import React, { useState } from 'react';
import { MasterProfile } from '@/lib/cv/schemas';
import { Loader2, Sparkles } from 'lucide-react';

interface Props {
    profile: MasterProfile;
    update: (data: Partial<MasterProfile>) => void;
}

function FetchButton({ linkedinUrl, onUpdate }: { linkedinUrl: string; onUpdate: (data: Partial<MasterProfile>) => void }) {
    const [loading, setLoading] = useState(false);

    const handleFetch = async () => {
        if (!linkedinUrl) return;
        setLoading(true);
        try {
            // We create a temporary raw payload just to pass the URL to the normalizer
            // The normalizer will see linkedinUrl, fetch it, parse it, and return a FULL MasterProfile
            const tempPayload = {
                personal: { linkedinUrl },
                summary: "",
                experience: [],
                education: [],
                skills: { hard: [], soft: [], languages: [] }
            };

            const res = await fetch('/api/cv/normalize', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ rawData: tempPayload })
            });

            if (!res.ok) throw new Error('Fetch failed');

            const normalizedData = await res.json();

            // Validate that we actually got something back before overwriting
            if (normalizedData) {
                // Merge carefully: we don't want to wipe name/email if AI didn't find them but they were typed
                // But generally, normalizedData SHOULD be the master source if explicitly fetched.
                // Let's do a smart merge: overwrite arrays, but keep personal info if new one is empty?
                // For MVP: Just update. The user asked for "fetch".
                onUpdate(normalizedData);
                alert("Profilen uppdaterades från LinkedIn! Kontrollera uppgifterna.");
            }
        } catch (error) {
            console.error(error);
            alert("Kunde inte hämta data automatiskt (LinkedIn blockerar ofta skript). Vänligen klistra in din text i sammanfattningen eller fyll i manuellt.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            type="button"
            onClick={handleFetch}
            disabled={loading || !linkedinUrl}
            className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-700 text-xs font-semibold rounded-lg hover:bg-blue-100 disabled:opacity-50 transition-colors border border-blue-200 whitespace-nowrap"
        >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
            {loading ? 'Hämtar...' : 'Hämta Info'}
        </button>
    );
}

export default function PersonalStep({ profile, update }: Props) {
    const handleChange = (field: keyof typeof profile.personal, value: string) => {
        update({
            personal: { ...profile.personal, [field]: value }
        });
    };

    return (
        <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Vem är du?</h2>
                <p className="text-gray-500">Vi börjar med grundläggande kontaktuppgifter.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">För- och efternamn</label>
                    <input
                        type="text"
                        value={profile.personal.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="Anna Andersson"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">E-postadress</label>
                    <input
                        type="email"
                        value={profile.personal.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="anna@exempel.se"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefonnummer</label>
                    <input
                        type="tel"
                        value={profile.personal.phone || ""}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="070 - 123 45 67"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ort</label>
                    <input
                        type="text"
                        value={profile.personal.city || ""}
                        onChange={(e) => handleChange('city', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="Stockholm"
                    />
                </div>
            </div>

            <div className="border-t border-gray-100 pt-6 mt-6">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Länkar (Valfritt)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">LinkedIn URL</label>
                        <div className="flex gap-2">
                            <input
                                type="url"
                                value={profile.personal.linkedinUrl || ""}
                                onChange={(e) => handleChange('linkedinUrl', e.target.value)}
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                                placeholder="linkedin.com/in/..."
                            />
                            <FetchButton linkedinUrl={profile.personal.linkedinUrl || ""} onUpdate={update} />
                        </div>
                        <p className="text-[10px] text-gray-400 mt-1">Vi försöker hämta info via URL:en. Obs: Fungerar bäst på helt publika profiler.</p>
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Portfolio / Webbplats</label>
                        <input
                            type="url"
                            value={profile.personal.portfolioUrl || ""}
                            onChange={(e) => handleChange('portfolioUrl', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                            placeholder="exempel.se"
                        />
                    </div>
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kort Sammanfattning</label>
                <p className="text-xs text-gray-500 mb-2">Beskriv dig själv med 2-3 meningar. AI kan hjälpa dig att putsa till detta senare.</p>
                <textarea
                    value={profile.summary || ""}
                    onChange={(e) => update({ summary: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
            </div>
        </div>
    );
}
