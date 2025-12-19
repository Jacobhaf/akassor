export const metadata = {
    title: "Integritetspolicy | Välja A-kassa",
    description: "Läs om hur Välja A-kassa hanterar dina personuppgifter.",
    openGraph: {
        title: "Integritetspolicy | Välja A-kassa",
        description: "Läs om hur Välja A-kassa hanterar dina personuppgifter.",
        url: "https://www.valjaakassa.se/integritetspolicy",
        images: [
            {
                url: "/hero-poster.jpg",
                width: 1200,
                height: 630,
                alt: "Integritetspolicy - A-kassa Portal",
            },
        ],
    },
};

import Image from "next/image";

// ... (existing metadata)

export default function IntegritetspolicyPage() {
    return (
        <main>
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-[#0B1B3F] py-24 sm:py-32">
                <div className="absolute inset-0 -z-10 h-full w-full">
                    <Image
                        src="/assets/images/hero-generic.png"
                        alt="Hero background"
                        fill
                        className="object-cover object-center opacity-20"
                        priority
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Integritetspolicy
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-blue-100">
                            Information om hur vi hanterar dina personuppgifter och cookies.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">

                <div className="prose prose-lg text-gray-600">
                    <p>
                        Din personliga integritet är viktig för oss. Information som vi på valjaakassa.se samlar in om dig syftar till att göra din användarupplevelse hos oss bättre. Med den här informationen kan vi också svara på meddelanden bättre, samt använda oss av den i marknadsföringssyfte.
                    </p>
                    <p>
                        Vi registrerar bara uppgifter som går att koppla till dig som fysisk person om du själv aktivt ger oss de uppgifterna, till exempel genom att mejla oss eller lämna feedback. Vi uppmanar dock aldrig dig att lämna några personuppgifter utöver mejladress och namn. Några andra uppgifter är inte av värde för oss.
                    </p>
                    <p>
                        Ansvarig för personuppgifter hos oss är Välja A-kassa. Vi driver sajten och ansvarar för personuppgifterna och ser till att alla regler och lagar inom området följs.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Hur definieras en personuppgift?</h3>
                    <p>
                        En personuppgift är en uppgift som kan identifiera dig som fysisk person. Det kan till exempel röra sig om namn, adress, personnummer och e-postadress med mera. Ip-adresser och andra krypterade och elektroniska informationsuppgifter om dig räknas endast som personuppgift om de kan kopplas till dig som fysisk person.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Personuppgifter registreras inte aktivt hos valjaakassa.se</h3>
                    <p>
                        Vi på valjaakassa.se samlar inte in dina personuppgifter, utan behandlar bara dem som du själv har valt att dela med dig av till oss. Det sker som sagt om du har valt att ange dem i samband med till exempel feedback och mejl. För att lämna exempelvis feedback behöver du dock inte ange privata uppgifter, och vi avråder dig också att göra det.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Så behandlar vi dina personuppgifter</h3>
                    <p>
                        Personuppgifter som vi får in via mejl sparas säkert hos vår e-postleverantör, som vi använder för att svara på mejl. Vi tar bort personuppgifterna när vi har svarat på mejlet eller avslutat ärendet.
                    </p>
                    <p>
                        Om du skickar in feedback på någon av våra texter sparas den informationen i vårt system. Det finns inget behov av att lämna personuppgifter när du ger oss feedback, men om du ändå har gjort det raderar vi dem så fort vi har behandlat feedbacken.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Din användardata registreras anonymt</h3>
                    <p>
                        Den information vi sparar om dig handlar om hur du använder dig av vår sajt. Detta sker via cookies och analysverktyg. Vi får exempelvis reda på när du besöker vår sajt, hur du använder den och viss teknisk information. Eftersom vi inte kan härleda informationen till dig som fysisk person räknas den inte heller som personuppgifter. Så här definieras i stället dessa uppgifter:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Information om plats</strong> – Din ungefärliga geografiska position registreras när du besöker valjaakassa.se. Detta sker med hjälp av din IP-adress. Med hjälp av detta kan sajten förbättras och utvecklas och annonseringen kan bättre anpassas efter din position.</li>
                        <li><strong>Användarens beteende</strong> – Det här visar hur du använder dig av sajten valjaakassa.se. Vilka sidor besöker du? När besöker du dem? Hur länge på ett ungefär stannar du kvar på sidorna?</li>
                        <li><strong>Tekniska data</strong> – Med teknisk information menas att vi samlar in information om via vilka enheter du besöker oss, till exempel IP-adress, webbläsare och operativsystem.</li>
                    </ul>
                    <p>
                        Vi använder oss av cookies på valjaakassa.se. Det gör vi för att din upplevelse av vår sajt ska vara så bra som möjligt. Du kan läsa mer om detta i vår <a href="/cookies" className="text-blue-600 hover:underline">cookiepolicy</a>.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Säker lagring av personuppgifter och användardata</h3>
                    <p>
                        Om du väljer att dela med dig av personuppgifter till oss kan vi försäkra dig om att dessa lagras på ett säkert sätt, och inte längre än vad som behövs. Vi vidtar omedelbart åtgärder om vi misstänker eller upptäcker att någon del av säkerheten har brustit. Inga personuppgifter hos oss delas till, överlåts till eller säljs till en tredje part.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Insamlingen av personuppgifterna kan ändras, raderas eller blockeras av dig</h3>
                    <p>
                        Du får när du vill ta del av och göra ändringar eller radera de personuppgifter som vi har samlat in om dig. Om du vill ändra eller radera någon uppgift är det smidigast att kontakta oss via e-post.
                    </p>
                    <p>
                        valjaakassa.se samlar in och analyserar användardata via analysverktyg (t.ex. Google Analytics). Om du skulle vilja blockera den datainsamlingen gör du det med hjälp av inställningar i din webbläsare eller specifika tillägg (t.ex. Google Analytics Opt-Out). På sajten kan vi också komma att använda oss av annonsering.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Annonsering hos oss</h3>
                    <p>
                        Den här sajtens ägare är aktiv inom olika affiliateprogram. Meningen med det är att genom annonsering och länkning till annonsörer kunna generera intäkter. Det här sker på olika sätt; dels genom direkta samarbeten med annonsörer och dels genom olika program för affiliatemarknadsföring.
                    </p>
                </div>
            </div>
        </main>
    );
}
