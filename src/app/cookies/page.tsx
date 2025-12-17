import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Om kakor (cookies) | Välja A-kassa',
    description:
        'Läs om hur vi använder kakor (cookies) på Valjaakassa.se för att förbättra din upplevelse och analysera trafik.',
};

export default function CookiesPage() {
    return (
        <div className="container mx-auto max-w-4xl px-4 py-12">
            {/* Hero Section */}
            <div className="mb-12 text-center">
                <h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                    Om kakor (cookies)
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
                    Vi värnar om din integritet. Här förklarar vi vad kakor är, hur vi använder dem och hur du kan styra vilka kakor som sparas.
                </p>
            </div>

            <article className="prose prose-lg prose-blue mx-auto max-w-none rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">

                <h2 className="text-[#003B5C] mt-0">Vad är en kaka?</h2>
                <p>
                    En kaka (cookie) är en liten textfil som webbplatsen du besöker ber att få spara på din enhet (dator, surfplatta eller mobil). Kakan fungerar som ett tekniskt stöd som möjliggör olika funktioner och förbättrar din användarupplevelse.
                </p>
                <p>
                    Enligt <em>Lagen om elektronisk kommunikation</em> ska alla besökare på en webbplats få information om att webbplatsen innehåller kakor, vad de används till och hur de kan undvikas. Du som besökare ska också ge ditt samtycke till att kakor används.
                </p>

                <h2 className="text-[#003B5C]">Så använder vi kakor</h2>
                <p>
                    På <strong>valjaakassa.se</strong> strävar vi efter att samla in så lite data som möjligt. Vi använder två typer av kakor för att säkerställa att hemsidan fungerar bra och för att förstå hur den används.
                </p>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-6">
                        <h3 className="mt-0 text-lg font-bold text-blue-900">1. Nödvändiga kakor</h3>
                        <p className="mb-0 text-sm text-gray-700">
                            Dessa kakor är tekniskt nödvändiga för att webbplatsen ska fungera säkert och korrekt. De sparar inga personuppgifter och används till exempel för att komma ihåg dina val i cookiemenyn. Dessa går inte att stänga av.
                        </p>
                    </div>

                    <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-6">
                        <h3 className="mt-0 text-lg font-bold text-blue-900">2. Analys-kakor</h3>
                        <p className="mb-0 text-sm text-gray-700">
                            Vi använder anonymiserad statistik (genom Google Analytics) för att se hur många som besöker oss och vilka sidor som är populärast. Detta hjälper oss att förbättra innehållet.
                            <br /><br />
                            <strong>Exempel på kakor:</strong> _ga, _gid.
                        </p>
                    </div>
                </div>

                <h2 className="text-[#003B5C]">Dina val och inställningar</h2>
                <p>
                    Du bestämmer själv över dina kakor. När du besöker vår hemsida för första gången får du välja vilka kategorier du vill godkänna.
                </p>
                <p>
                    <strong>Ångra eller ändra ditt val:</strong><br />
                    Du kan när som helst ändra dina inställningar genom att klicka på den lilla runda cookie-ikonen längst ner i hörnet på skärmen.
                </p>
                <p>
                    Du kan också ställa in din webbläsare så att den automatiskt nekar kakor eller informerar dig varje gång en webbplats vill spara en kaka. Se webbläsarens hjälpsidor för instruktioner.
                </p>

                <div className="mt-10 rounded-xl bg-[#003B5C] p-8 text-center text-white">
                    <h3 className="mt-0 mb-4 text-xl font-bold text-white">Har du frågor?</h3>
                    <p className="text-blue-100 mb-6">
                        Vi är transparenta med hur vi arbetar. Om du undrar något om våra kakor eller vår integritetspolicy är du varmt välkommen att höra av dig.
                    </p>
                    <a
                        href="mailto:info@valjaakassa.se"
                        className="inline-flex items-center rounded-lg bg-white px-6 py-2.5 font-semibold text-[#003B5C] transition-colors hover:bg-blue-50"
                    >
                        ✉️ info@valjaakassa.se
                    </a>
                </div>

                <div className="mt-8 border-t pt-8 flex justify-center">
                    <Link href="/" className="font-medium text-blue-600 hover:text-blue-800 hover:underline">
                        ← Tillbaka till startsidan
                    </Link>
                </div>
            </article>
        </div>
    );
}
