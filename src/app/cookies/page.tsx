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
            <div className="mb-12 text-center">
                <h1 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                    Om kakor (cookies)
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-gray-600">
                    Här förklarar vi vad kakor är, vilka vi använder och hur du kan
                    hantera dina inställningar.
                </p>
            </div>

            <article className="prose prose-lg prose-blue mx-auto max-w-none rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
                <h3>Vad är kakor?</h3>
                <p>
                    En kaka (cookie) är en liten textfil som webbplatsen du besöker begär
                    att få spara på din dator, surfplatta eller mobiltelefon. Kakor
                    används på de flesta webbplatser för att ge besökaren tillgång till
                    olika funktioner och för att vi ska kunna analysera hur webbplatsen
                    används.
                </p>

                <h3>Vilka typer av kakor använder vi?</h3>
                <p>
                    På <strong>valjaakassa.se</strong> använder vi två kategorier av
                    kakor:
                </p>

                <h4>1. Nödvändiga kakor</h4>
                <p>
                    Dessa kakor krävs för att webbplatsens grundläggande funktioner ska
                    fungera. Utan dessa kan vi inte garantera att webbplatsen fungerar som
                    tänkt. De sparar inga personuppgifter som kan spåra dig.
                </p>

                <h4>2. Analys-kakor</h4>
                <p>
                    Vi använder anonymiserad statistik för att förstå hur besökare
                    interagerar med webbplatsen. Detta hjälper oss att förbättra innehållet
                    och användarupplevelsen. Vi använder Google Analytics för detta
                    ändamål.
                </p>
                <ul>
                    <li>
                        <strong>_ga</strong> & <strong>_gid</strong>: Används för att skilja
                        på unika besökare (anonymiserat) och analysera besöksstatistik.
                    </li>
                </ul>

                <h3>Hantera dina inställningar</h3>
                <p>
                    Du kan när som helst ändra dina inställningar för kakor genom att
                    klicka på den lilla ikonen för kak-inställningar längst ner i hörnet
                    på skärmen.
                </p>
                <p>
                    Du kan också ställa in din webbläsare så att du automatiskt nekar till
                    lagring av kakor eller informeras varje gång en webbplats begär att få
                    lagra en kaka. Genom webbläsaren kan du också radera tidigare lagrade
                    kakor.
                </p>

                <div className="mt-8 rounded-lg bg-blue-50 p-6">
                    <h4 className="mt-0 text-[#003B5C]">Har du framgor?</h4>
                    <p className="mb-0 text-sm">
                        Om du har frågor om vår användning av kakor är du välkommen att
                        kontakta oss på{' '}
                        <a
                            href="mailto:info@valjaakassa.se"
                            className="font-semibold text-blue-700 hover:underline"
                        >
                            info@valjaakassa.se
                        </a>
                        .
                    </p>
                </div>

                <div className="mt-8 border-t pt-8">
                    <Link href="/" className="text-blue-600 hover:text-blue-800 hover:underline">
                        ← Tillbaka till startsidan
                    </Link>
                </div>
            </article>
        </div>
    );
}
