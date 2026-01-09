"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { GeneratedDocuments, MasterProfile, GeneratorSettings } from '@/lib/cv/schemas';
import { CvPdf, CoverLetterPdf } from './PdfDocument';

// Dynamic import for PDF Viewer to avoid SSR issues
const PDFViewer = dynamic(
    () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
    {
        ssr: false,
        loading: () => <div className="h-[600px] flex items-center justify-center bg-gray-100 text-gray-400">Laddar förhandsgranskning...</div>,
    }
);
// Dynamic import for Download Link
const PDFDownloadLink = dynamic(
    () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
    { ssr: false }
);

interface Props {
    documents: GeneratedDocuments | null;
    profile: MasterProfile;
    settings: GeneratorSettings;
}

export default function DocumentPreview({ documents, profile, settings }: Props) {
    const [activeTab, setActiveTab] = useState<'cv' | 'coverLetter'>('cv');

    if (!documents) return <div>Inget dokument genererat än.</div>;

    return (
        <div className="h-full flex flex-col animate-in fade-in zoom-in-95 duration-500">
            <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-2">
                    <button
                        onClick={() => setActiveTab('cv')}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'cv' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                        CV Preview
                    </button>
                    <button
                        onClick={() => setActiveTab('coverLetter')}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'coverLetter' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                        Personligt Brev
                    </button>
                </div>

                <div className="flex space-x-3">
                    <PDFDownloadLink
                        document={<CvPdf data={documents} profile={profile} settings={settings} />}
                        fileName={`CV_${profile.personal.name.replace(/\s+/g, '_')}.pdf`}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 shadow-sm flex items-center"
                    >
                        {/* @ts-ignore */}
                        {({ loading }) => (loading ? 'Förbereder PDF...' : 'Ladda ner CV')}
                    </PDFDownloadLink>

                    <PDFDownloadLink
                        document={<CoverLetterPdf data={documents} profile={profile} settings={settings} />}
                        fileName={`Brev_${profile.personal.name.replace(/\s+/g, '_')}.pdf`}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 shadow-sm flex items-center"
                    >
                        {/* @ts-ignore */}
                        {({ loading }) => (loading ? 'Förbereder...' : 'Ladda ner Brev')}
                    </PDFDownloadLink>
                </div>
            </div>

            <div className="flex-1 bg-gray-50 rounded-xl overflow-hidden border border-gray-200 shadow-inner">
                {activeTab === 'cv' ? (
                    <PDFViewer width="100%" height="600px" className="border-none">
                        <CvPdf data={documents} profile={profile} settings={settings} />
                    </PDFViewer>
                ) : (
                    <PDFViewer width="100%" height="600px" className="border-none">
                        <CoverLetterPdf data={documents} profile={profile} settings={settings} />
                    </PDFViewer>
                )}
            </div>

            <div className="mt-4 text-center text-sm text-gray-500">
                Tips: Om PDF-visaren inte laddar kan du använda "Ladda ner"-knapparna direkt.
            </div>
        </div>
    );
}
