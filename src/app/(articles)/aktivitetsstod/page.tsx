import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Aktivitetsstöd – belopp, utbetalning & a-kassa | valjaakassa.se",
    keywords: ["aktivitetsstod", "aktivitetsstöd belopp", "a-kassa aktivitetsstöd", "ersättning arbetsförmedlingen", "aktivitetsstöd utbetalning"],
    alternates: {
        canonical: "https://www.valjaakassa.se/aktivitetsstod",
    },
    openGraph: {
        title: "Aktivitetsstöd – belopp, utbetalning & a-kassa | valjaakassa.se",
        description: "Hur mycket är aktivitetsstöd? När betalas det ut och hur påverkar a-kassa ersättningen? Få full koll och välj rätt a-kassa.",
        url: "https://www.valjaakassa.se/aktivitetsstod",
        type: "article",
        images: [
            {
                url: "/images/content/aktivitetsstod.png",
                width: 1200,
                height: 630,
                alt: "Aktivitetsstöd och a-kassa guide",
            },
        ],
    },
};

export default function AktivitetsstodPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-[#0B1B3F] text-white py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="/images/content/aktivitetsstod.png"
                        alt="Aktivitetsstöd och a-kassa – hur ersättningen fungerar i praktiken"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        Aktivitetsstöd – hur mycket får man, när betalas det ut och hur påverkar a-kassa?
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Den här guiden ger dig snabba svar, fördjupning och visar varför a-kassa är avgörande.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 px-4 max-w-4xl mx-auto sm:px-6 lg:px-8">
                <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="lead text-xl text-gray-600 mb-8">
                        Aktivitetsstöd är en ersättning för dig som är inskriven hos Arbetsförmedlingen och deltar i ett arbetsmarknadspolitiskt program. Många söker på aktivitetsstöd, aktivitetsstöd belopp, aktivitetsstöd hur mycket och ersättning från Arbetsförmedlingen – ofta för att förstå hur ekonomin påverkas och hur man kan få så hög ersättning som möjligt.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vad är aktivitetsstöd?</h2>
                    <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 mb-8">
                        <p className="font-medium m-0">
                            Aktivitetsstöd är en ersättning från Försäkringskassan till personer som deltar i program via Arbetsförmedlingen, till exempel praktik, arbetsmarknadsutbildning eller jobb- och utvecklingsgarantin.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Hur mycket får man i aktivitetsstöd?</h2>
                    <p>
                        Hur mycket du får i aktivitetsstöd beror i första hand på om du är med i en a-kassa eller inte.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                        <li><strong>Med a-kassa:</strong> Baseras ersättningen på din tidigare lön, upp till 80% av lönen (max 1 200 kr per dag).</li>
                        <li><strong>Utan a-kassa:</strong> Får du ett lägre grundbelopp, som lägst 223 kr per dag (om du är 25 år eller äldre).</li>
                    </ul>
                    <p>
                        Det är därför sökfraser som ”hur mycket får man i aktivitetsstöd” och ”aktivitetsstöd per dag” är bland de vanligaste i Sverige. Skillnaden kan vara stor.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">Aktivitetsstöd och a-kassa – därför hänger allt ihop</h3>
                    <p>
                        Många tror att aktivitetsstöd är ett helt fristående bidrag, men i praktiken är a-kassa ofta grunden för hur hög ersättningen blir.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 my-8">
                        <div className="bg-green-50 p-6 rounded-lg text-center">
                            <h4 className="font-bold text-green-900 text-lg mb-2">Har du a-kassa</h4>
                            <p className="text-green-800 text-2xl font-bold">→ Högre aktivitetsstöd</p>
                        </div>
                        <div className="bg-red-50 p-6 rounded-lg text-center">
                            <h4 className="font-bold text-red-900 text-lg mb-2">Saknar du a-kassa</h4>
                            <p className="text-red-800 text-2xl font-bold">→ Betydligt lägre ersättning</p>
                        </div>
                    </div>
                    <p className="font-semibold text-gray-900 mb-6">
                        👉 Att välja rätt a-kassa i tid kan innebära tusentals kronor mer per månad.
                    </p>
                    <p>
                        På <Link href="/" className="text-blue-600 hover:underline">valjaakassa.se</Link> kan du jämföra a-kassor och se vilken som passar ditt yrke och din situation.
                    </p>

                    <div className="my-8 bg-gray-50 p-8 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold mb-4">Vilken a-kassa ska du välja?</h3>
                        <p className="mb-6 text-gray-600">Jämför alla a-kassor och hitta den bästa för dig.</p>
                        <Link
                            href="/jamfor"
                            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
                        >
                            Jämför a-kassor nu
                        </Link>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vem betalar ut aktivitetsstöd?</h2>
                    <p>
                        Aktivitetsstöd betalas ut av <strong>Försäkringskassan</strong>, men för att ha rätt till det måste du vara inskriven på och anvisad till ett program via <Link href="https://arbetsformedlingen.se" className="text-blue-600 hover:underline" target="_blank" rel="nofollow">Arbetsförmedlingen</Link>. Du måste också rapportera dina aktiviteter till Arbetsförmedlingen varje månad.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">När betalas aktivitetsstöd ut?</h2>
                    <p>
                        Utbetalning sker månadsvis i efterskott, efter att du har skickat in din aktivitetsrapport till Arbetsförmedlingen och ansökt om utbetalning hos Försäkringskassan. Utbetalningen kommer oftast den 26:e i månaden.
                    </p>
                    <p>
                        Förseningar beror ofta på:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                        <li>Sen rapportering av aktiviteter</li>
                        <li>Ofullständiga uppgifter i ansökan</li>
                        <li>Tekniska problem hos myndigheterna</li>
                    </ul>
                    <p>
                        Därför är sökfraser som ”aktivitetsstöd utbetalning” eller ”när kommer pengarna från försäkringskassan” mycket vanliga.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Är aktivitetsstöd skattepliktigt?</h2>
                    <p>
                        Ja. Aktivitetsstöd är skattepliktig inkomst och pensionsgrundande, precis som:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                        <li><Link href="/artiklar/vad-ar-akassa" className="text-blue-600 hover:underline">A-kassa</Link></li>
                        <li><Link href="/artiklar/ersattning-karens-villkor" className="text-blue-600 hover:underline">Arbetslöshetsersättning</Link></li>
                        <li>Sjukpenning</li>
                    </ul>
                    <p>
                        Försäkringskassan drar vanligtvis preliminär skatt innan utbetalningen sätts in på ditt konto.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Aktivitetsstöd vid praktik och studier</h2>
                    <p>
                        Du kan få aktivitetsstöd vid flera olika typer av program:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                        <li><strong>Praktik:</strong> Arbetspraktik via Arbetsförmedlingen ger rätt till aktivitetsstöd.</li>
                        <li><strong>Arbetsmarknadsutbildning:</strong> Yrkesutbildningar som Arbetsförmedlingen köper in.</li>
                        <li><strong>Studier:</strong> Vissa studier kan ge rätt till aktivitetsstöd om de är godkända som en del av din handlingsplan (t.ex. SFI eller kortare utbildningar).</li>
                    </ul>
                    <p>
                        Detta förklarar vanliga sökningar som ”aktivitetsstöd praktik” och ”aktivitetsstöd studier”.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Aktivitetsstöd eller aktivitetsersättning – vad är skillnaden?</h2>
                    <p>
                        Dessa två begrepp blandas ofta ihop, men de gäller helt olika situationer:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                        <li><strong>Aktivitetsstöd:</strong> För arbetssökande som deltar i program via Arbetsförmedlingen.</li>
                        <li><strong>Aktivitetsersättning:</strong> För unga (19–29 år) med nedsatt arbetsförmåga på grund av sjukdom eller funktionsnedsättning.</li>
                    </ul>
                    <p>
                        Båda betalas ut av Försäkringskassan, men orsakerna till att man får dem är olika.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Andra ersättningar som ofta jämförs</h2>
                    <p>
                        Den som söker aktivitetsstöd söker ofta även information om liknande ersättningar:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                        <li><Link href="/vad-ar-a-kassa" className="text-blue-600 hover:underline">A-kassa</Link></li>
                        <li><Link href="/arbetsloshetsersattning" className="text-blue-600 hover:underline">Arbetslöshetsersättning</Link></li>
                        <li>Etableringsersättning (för nyanlända)</li>
                        <li>Försörjningsstöd (ekonomiskt bistånd från kommunen)</li>
                        <li>Sjukpenning och sjukersättning</li>
                    </ul>
                    <p>
                        Gemensamt för många av dessa är att ersättningsnivån för arbetssökande ofta påverkas av om du är medlem i en a-kassa eller inte.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför val av a-kassa är avgörande</h2>
                    <p>
                        Många upptäcker för sent att både <strong>aktivitetsstöd</strong>, <strong>ersättning från Arbetsförmedlingen</strong> och <strong>arbetslöshetsersättning</strong> blir lägre om man står utan a-kassa.
                    </p>
                    <p className="font-semibold text-gray-900 mt-4 mb-2">
                        👉 På <Link href="/" className="text-blue-600 hover:underline">valjaakassa.se</Link> kan du:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-8">
                        <li><Link href="/jamfor" className="text-blue-600 hover:underline">Jämföra a-kassor</Link></li>
                        <li>Se villkor och ersättningsnivåer</li>
                        <li>Välja rätt a-kassa innan det är för sent</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Snabba svar – FAQ</h2>
                    <div className="space-y-6">
                        <div>
                            <h4 className="font-bold text-lg text-gray-900 mb-2">Kan man få aktivitetsstöd utan a-kassa?</h4>
                            <p className="text-gray-700">Ja, men ersättningen blir då betydligt lägre (grundbelopp), jämfört med om du har en inkomstbaserad ersättning via a-kassan.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-gray-900 mb-2">Är aktivitetsstöd samma sak som bidrag?</h4>
                            <p className="text-gray-700">Nej, det räknas som en skattepliktig och pensionsgrundande ersättning kopplad till att du deltar i ett arbetsmarknadspolitiskt program.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-gray-900 mb-2">Påverkar aktivitetsstöd framtida a-kassa?</h4>
                            <p className="text-gray-700">Ja, dagar med aktivitetsstöd kan jämställas med a-kassedagar i vissa fall, och ditt medlemskap i a-kassan under tiden är viktigt för att skydda din SGI (sjukpenninggrundande inkomst) och framtida ersättning.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
