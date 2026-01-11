import type { Metadata } from 'next';
import { CvAnalyzer } from '@/components/cv-analysis/CvAnalyzer';

export const metadata: Metadata = {
    title: 'Gratis CV-granskning med AI (2026) – Få feedback på sekunder',
    description: 'Ladda upp ditt CV för en omedelbar AI-analys. Vi granskar struktur, innehåll och språk helt gratis. Se ditt betyg och få konkreta tips för att lyckas på intervjun.',
    keywords: ['gratis cv-granskning', 'cv analys ai', 'få feedback på cv', 'cv hjälp online', 'granska cv gratis'],
    openGraph: {
        title: 'Hur bra är ditt CV? Testa vår gratis AI-granskning idag',
        description: 'Få professionell feedback på ditt CV och personliga brev på sekunder. Helt gratis tjänst från Välja A-kassa.',
        type: 'website',
    }
};

export default function AnalyzeCvPage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Hero Section */}
            <div className="bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/10 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900"></div>

                <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-200 text-sm font-medium mb-8 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Nyhet: AI-driven CV-analys
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                        Hur bra är ditt <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">CV?</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
                        Låt vår avancerade AI granska ditt CV och personliga brev. <br className="hidden md:block" />
                        Du får betyg, konkreta förbättringsförslag och feedback på sekunder.
                    </p>
                </div>
            </div>

            {/* Main Application Area */}
            <div className="container mx-auto px-4 -mt-16 md:-mt-20 relative z-20">
                <CvAnalyzer />

                {/* Info Section */}
                <div className="max-w-5xl mx-auto mt-24 grid md:grid-cols-3 gap-8">
                    {/* Features */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-3xl mb-6">🤖</div>
                        <h3 className="font-bold text-xl text-slate-900 mb-3">Smart AI-analys</h3>
                        <p className="text-slate-600 leading-relaxed">Vi använder avancerad AI-teknik för att skanna och utvärdera ditt CV precis som en professionell rekryterare gör.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center text-3xl mb-6">🎯</div>
                        <h3 className="font-bold text-xl text-slate-900 mb-3">Konkreta tips</h3>
                        <p className="text-slate-600 leading-relaxed">Du får inte bara ett betyg, utan tydliga och handfasta instruktioner om vad du bör ändra för att öka dina chanser.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center text-3xl mb-6">🔒</div>
                        <h3 className="font-bold text-xl text-slate-900 mb-3">Säkert & Privat</h3>
                        <p className="text-slate-600 leading-relaxed">Integritet först. Dina uppladdade dokument sparas aldrig permanent på våra servrar och delas aldrig med någon annan.</p>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto mt-16 text-center text-slate-500 text-sm border-t border-slate-200 pt-8">
                    <p>
                        Observera: Denna tjänst drivs av artificiell intelligens och ger automatiserad feedback.
                        Bedömningen är vägledande och utgör ingen garanti för anställning eller intervju.
                        Du ansvarar alltid själv för att informationen i ditt CV är korrekt och sanningsenlig.
                    </p>
                </div>
            </div>
        </div>
    );
}
