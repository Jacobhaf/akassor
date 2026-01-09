"use client";

import React from 'react';
import { MasterProfile } from '@/lib/cv/schemas';

interface Props {
    profile: MasterProfile;
    update: (data: Partial<MasterProfile>) => void;
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
                        <input
                            type="url"
                            value={profile.personal.linkedinUrl || ""}
                            onChange={(e) => handleChange('linkedinUrl', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                            placeholder="linkedin.com/in/..."
                        />
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
