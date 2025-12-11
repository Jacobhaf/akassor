export interface Article {
  slug: string;
  title: string;
  summary: string;
  content: string; // HTML content or markdown
  image: string;
  publishedAt: string;
}

export const articles: Article[] = [
  {
    slug: "vad-ar-akassa",
    title: "Vad är a-kassa och hur fungerar den?",
    summary: "En heltäckande guide om det svenska trygghetssystemet. Lär dig skillnaden mellan grundförsäkring och inkomstbortfallsförsäkring, och hur du säkrar din ekonomiska framtid.",
    image: "/artiklar/akassa-grundguide.png",
    publishedAt: "2023-11-15",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Att bli medlem i en a-kassa är ett av de viktigaste stegen du kan ta för din ekonomiska trygghet. Men hur fungerar systemet egentligen, och vad är skillnaden på att bara "få pengar" och att ha en riktig inkomstförsäkring? Här går vi igenom allt du behöver veta.</p>

      <div class="bg-blue-50 p-8 rounded-2xl border border-blue-100 my-10 shadow-sm">
        <h3 class="text-blue-900 font-bold text-xl mb-4 mt-0 flex items-center">
          <span class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">i</span>
          Snabbfakta om A-kassa
        </h3>
        <ul class="space-y-3 mb-0 text-blue-800">
          <li class="flex items-start"><svg class="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <span>Du måste vara medlem i 12 månader för full inkomstbaserad ersättning.</span></li>
          <li class="flex items-start"><svg class="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <span>Ersättningen är upp till 80% av din lön (upp till ett tak).</span></li>
          <li class="flex items-start"><svg class="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <span>Du kan vara medlem även om du har jobb idag – det rekommenderas!</span></li>
        </ul>
      </div>

      <h2>Två delar av försäkringen</h2>
      <p>Den svenska arbetslöshetsförsäkringen består av två huvuddelar. Det är viktigt att förstå skillnaden, då det avgör hur mycket pengar du får om du blir av med jobbet.</p>
      
      <h3>1. Grundförsäkringen</h3>
      <p>Detta är en "bottenplatta" som gäller för alla som uppfyller arbetsvillkoret, oavsett om du är medlem i en a-kassa eller inte. Ersättningen är dock låg och baseras inte på din tidigare lön.</p>
      <ul>
        <li>Gäller från att du fyllt 20 år.</li>
        <li>Ger en lägre ersättning per dag.</li>
        <li>Utbetalas av Alfa-kassan.</li>
      </ul>

      <h3>2. Inkomstbortfallsförsäkringen (Medlemskap)</h3>
      <p>Detta är den del du får tillgång till genom att <strong>aktivt gå med</strong> i en a-kassa. Här baseras ersättningen på din faktiska lön, vilket gör att du kan behålla en betydligt större del av din levnadsstandard.</p>

      <div class="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500 my-8">
        <h4 class="text-amber-900 font-bold text-lg mt-0 mb-2">Viktigt att tänka på</h4>
        <p class="text-amber-800 mb-0">Vänta inte tills du tror att du ska bli arbetslös. Kvalificeringstiden är 12 månader, så gå med så fort du får ett jobb.</p>
      </div>

      <h2>Så här ansöker du om ersättning</h2>
      <p>Om olyckan är framme och du blir uppsagd, följ dessa steg för att inte missa någon ersättning:</p>
      <ol>
        <li><strong>Dag 1:</strong> Skriv in dig som arbetssökande på Arbetsförmedlingen. Detta är absolut kritiskt – gör du det inte första dagen får du ingen ersättning för den dagen.</li>
        <li><strong>Ansök hos din a-kassa:</strong> Logga in på din a-kassas "Mina Sidor" och fyll i ansökan om ersättning.</li>
        <li><strong>Skicka in intyg:</strong> Du behöver arbetsgivarintyg från din tidigare arbetsgivare. Be om detta så snart som möjligt.</li>
        <li><strong>Tidrapportera:</strong> Skicka in dina kassakort löpande varannan vecka.</li>
      </ol>
    `
  },
  {
    slug: "vilken-akassa-passar-mig",
    title: "Guide: Hitta rätt a-kassa för ditt yrke",
    summary: "Det finns över 20 olika a-kassor i Sverige. Vilken ska du välja? Vi hjälper dig att navigera i djungeln och hitta rätt kassa för din yrkeskategori.",
    image: "/artiklar/valja-ratt-akassa.png",
    publishedAt: "2023-11-20",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Att välja rätt a-kassa handlar inte bara om att betala en avgift. Det handlar om att välja en organisation som förstår din bransch och kan ge dig rätt stöd. Här är guiden som hjälper dig att välja rätt.</p>

      <div class="grid md:grid-cols-2 gap-6 my-10">
         <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 class="text-lg font-bold mt-0 mb-3 text-gray-900">Fördelar med specialist-kassa</h3>
            <p class="text-sm text-gray-600 mb-0">Handläggare som kan din bransch (t.ex. konstnärliga yrken eller säsongsanställningar) och koppling till fackliga inkomstförsäkringar.</p>
         </div>
         <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 class="text-lg font-bold mt-0 mb-3 text-gray-900">Fördelar med allmän kassa</h3>
            <p class="text-sm text-gray-600 mb-0">Ofta enklare om du byter bransch ofta eller har flera olika typer av jobb samtidigt. Alfa-kassan är öppen för alla.</p>
         </div>
      </div>

      <h2>Vanliga a-kassor per yrkesområde</h2>

      <h3>För Akademiker</h3>
      <p><strong>Akademikernas a-kassa (AEA)</strong> är det självklara valet om du har 180 högskolepoäng eller mer, eller studerar. Det är Sveriges största a-kassa med över 750 000 medlemmar. De är kända för låg avgift och effektiv handläggning.</p>

      <div class="bg-green-50 p-6 rounded-xl border border-green-100 my-6">
        <h4 class="text-green-900 font-bold mt-0 mb-2">Exempel på yrken för AEA:</h4>
        <p class="text-green-800 text-sm mb-0">Ingenjör, Lärare, Personalvetare, Ekonom, Systemutvecklare, Läkare.</p>
      </div>

      <h3>För Tjänstemän</h3>
      <p>Om du jobbar på kontor i privat sektor är <strong>Unionens a-kassa</strong> ofta rätt val. De organiserar allt från administratörer och säljare till IT-konsulter och chefer.</p>

      <h3>För Vård och Omsorg</h3>
      <p><strong>Kommunals a-kassa</strong> är störst inom kommunala yrken som undersköterska, barnskötare och personlig assistent.</p>

      <h3>För Egenföretagare</h3>
      <p>Som företagare har du specifika regler kring "vilande företag" för att få ersättning. <strong>Småföretagarnas a-kassa (Småa)</strong> är experter på detta och kan guida dig rätt så att du inte riskerar din ersättning.</p>

      <h2>Kan jag vara med i vilken a-kassa som helst?</h2>
      <p>Nej, de flesta a-kassor har stadgar som reglerar vem som får bli medlem. Om du byter bransch helt (t.ex. från lärare till snickare) måste du oftast byta a-kassa. Det är dock enkelt gjort och din intjänade medlemstid följer med dig.</p>
      
      <div class="bg-blue-600 text-white p-8 rounded-2xl my-10 shadow-lg text-center">
        <h3 class="text-white text-2xl font-bold mt-0 mb-4">Osäker på vilken du ska välja?</h3>
        <p class="text-blue-100 mb-6 text-lg">Använd vårt jämförelseverktyg för att hitta rätt kassa för just ditt yrke på 30 sekunder.</p>
        <a href="/jamfor" class="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors no-underline">Jämför a-kassor nu</a>
      </div>
    `
  },
  {
    slug: "ersattning-karens-villkor",
    title: "Hur mycket får jag i ersättning? (Belopp, Tak & Karens)",
    summary: "Vi dyker ner i detaljerna kring dagpenning, inkomsttak och hur 80%-regeln faktiskt fungerar i praktiken år 2025.",
    image: "/artiklar/ersattning-karens.png",
    publishedAt: "2023-11-20",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">När lönen försvinner är det a-kassan som ska betala hyran och maten. Men hur mycket får man egentligen ut? Vi reder ut begreppen kring tak, golv och karensdagar.</p>

      <div class="bg-white p-6 rounded-xl border shadow-lg my-8 ring-1 ring-gray-900/5">
        <h3 class="text-gray-900 font-bold text-xl mt-0 mb-4 border-b pb-4">Räkneexempel: Din ersättning</h3>
        <div class="space-y-4">
            <div class="flex justify-between items-center pb-2 border-b border-gray-100">
                <span class="text-gray-600">Månadslön innan skatt:</span>
                <span class="font-bold text-gray-900">33 000 kr</span>
            </div>
            <div class="flex justify-between items-center pb-2 border-b border-gray-100">
                <span class="text-gray-600">Ersättning (80%):</span>
                <span class="font-bold text-gray-900">26 400 kr</span>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-4 bg-gray-50 p-4 rounded-lg">
                <div>
                   <span class="text-xs text-gray-500 uppercase tracking-wide">Dagpenning</span>
                   <div class="font-bold text-lg text-blue-600">ca 1 200 kr</div>
                </div>
                <div>
                   <span class="text-xs text-gray-500 uppercase tracking-wide">Utbetalt/mån (efter skatt)</span>
                   <div class="font-bold text-lg text-green-600">ca 18-20 000 kr</div>
                </div>
            </div>
        </div>
        <p class="text-xs text-gray-500 mt-4 mb-0 italic">Detta är ett exempel. Exakt belopp beror på din skattetabell.</p>
      </div>

      <h2>Inkomsttaket – vad innebär det?</h2>
      <p>A-kassan har ett tak. Det innebär att du får 80% av din lön, men bara upp till en viss inkomstnivå. År 2024/2025 ligger taket på <strong>33 000 kr</strong> i månaden de första 100 dagarna.</p>
      
      <p>Tjänar du mer än 33 000 kr? Då får du ändå bara ut maxbeloppet (ca 26 400 kr före skatt). För att försäkra lönen över detta tak behöver du en <strong>inkomstförsäkring</strong>, som oftast ingår i fackmedlemskap eller kan tecknas separat.</p>

      <h2>Karensdagar</h2>
      <p>När du blir arbetslös får du inte ersättning direkt från dag 1. Du har en karensperiod på vanligtvis <strong>2 dagar</strong> (tidigare 6 dagar). Dessa dagar dras av från din ersättning, vilket innebär att din första utbetalning blir något lägre.</p>

      <h2>Ersättningstrappan</h2>
      <p>Ersättningen sänks över tid för att uppmuntra till jobbsökande:</p>
      <ul class="list-none pl-0 space-y-2 mt-4">
        <li class="flex items-center bg-gray-50 p-3 rounded-lg"><span class="font-bold w-32 text-blue-800">Dag 1-100:</span> <span>80% av lönen</span></li>
        <li class="flex items-center bg-gray-50 p-3 rounded-lg"><span class="font-bold w-32 text-blue-800">Dag 101-200:</span> <span>80% av lönen (men max 800 kr/dag)</span></li>
        <li class="flex items-center bg-gray-50 p-3 rounded-lg"><span class="font-bold w-32 text-blue-800">Dag 201-300:</span> <span>70% av lönen</span></li>
      </ul>
      
      <div class="bg-indigo-50 p-6 rounded-xl border border-indigo-100 my-8">
        <h3 class="text-indigo-900 font-bold mt-0 mb-2">Har du barn?</h3>
        <p class="text-indigo-800 mb-0">Om du har barn under 18 år förlängs din ersättningsperiod automatiskt med ytterligare 150 dagar (totalt 450 dagar). Ersättningen är 70% under dessa extragar.</p>
      </div>
    `
  }
];
