import React from 'react';
import Link from 'next/link';
import CvWizard from '@/components/cv-wizard/CvWizard';

export const metadata = {
    title: "AI CV-Byggare & Personligt Brev | Gratis Verktyg",
    description: "Skapa ett proffsigt CV och personligt brev på några minuter med vår AI-tjänst. Anpassat för svenska arbetsmarknaden.",
};

export default function CvBuilderPage() {
    return (
        <main className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-4 transition-colors"
                    >
                        ← Tillbaka till startsidan
                    </Link>
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-4">
                        Bygg ditt dröm-CV med <span className="text-blue-600">AI</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-500">
                        Fyll i dina uppgifter, klistra in jobbannonsen du vill söka, och låt vår AI skapa ett skräddarsytt CV och personligt brev åt dig.
                    </p>
                </div>

                {/* Wizard Container */}
                <CvWizard />

                {/* FAQ / Info Section */}
                <div className="mt-20 max-w-3xl mx-auto prose prose-blue text-gray-500">
                    <h2 className="text-center text-gray-800">Hur fungerar det?</h2>
                    <div className="grid md:grid-cols-3 gap-8 not-prose mt-8">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                            <h3 className="font-semibold text-gray-900 mb-2">Dina fakta</h3>
                            <p className="text-sm">Du fyller i dina erfarenheter och utbildningar. Vi sparar inget permanent.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                            <h3 className="font-semibold text-gray-900 mb-2">AI-magi</h3>
                            <p className="text-sm">Vår AI analyserar jobbannonsen och matchar dina meriter för att maximera dina chanser.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                            <h3 className="font-semibold text-gray-900 mb-2">Ladda ner</h3>
                            <p className="text-sm">Du får snygga PDF-filer redo att skickas till arbetsgivaren.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
