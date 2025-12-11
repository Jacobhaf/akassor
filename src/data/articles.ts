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
    image: "/artiklar/guide-person.png",
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
        <li>Ger en lägre ersättning per dag (max 510 kr/dag före skatt).</li>
        <li>Utbetalas oftast av Alfa-kassan om du inte är medlem någonstans.</li>
      </ul>

      <h3>2. Inkomstbortfallsförsäkringen (Medlemskap)</h3>
      <p>Detta är den del du får tillgång till genom att <strong>aktivt gå med</strong> i en a-kassa. Här baseras ersättningen på din faktiska lön, vilket gör att du kan behålla en betydligt större del av din levnadsstandard (upp till 80% av lönen).</p>

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

      <h2>Vanliga missförstånd</h2>
      <p>Många tror att a-kassan sker automatiskt via skatten eller facket. Så är det oftast inte. A-kassan är en separat organisation. Även om du betalar det via ditt fackförbundsautodrag, så är det viktigt att dubbelkolla att du faktiskt är medlem i a-kassan också.</p>
    `
  },
  {
    slug: "vilken-akassa-passar-mig",
    title: "Guide: Hitta rätt a-kassa för ditt yrke",
    summary: "Det finns över 20 olika a-kassor i Sverige. Vilken ska du välja? Vi hjälper dig att navigera i djungeln och hitta rätt kassa för din yrkeskategori.",
    image: "/artiklar/career-guide.png",
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
    image: "/artiklar/money-calculator.png",
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
        <li class="flex items-center bg-gray-50 p-3 rounded-lg"><span class="font-bold w-32 text-blue-800">Dag 101-200:</span> <span>80% av lönen (men max 1000 kr/dag)</span></li>
        <li class="flex items-center bg-gray-50 p-3 rounded-lg"><span class="font-bold w-32 text-blue-800">Dag 201-300:</span> <span>70% av lönen</span></li>
      </ul>
      
      <div class="bg-indigo-50 p-6 rounded-xl border border-indigo-100 my-8">
        <h3 class="text-indigo-900 font-bold mt-0 mb-2">Har du barn?</h3>
        <p class="text-indigo-800 mb-0">Om du har barn under 18 år förlängs din ersättningsperiod automatiskt med ytterligare 150 dagar (totalt 450 dagar). Ersättningen är 70% under dessa extragar.</p>
      </div>
    `
  },
  {
    slug: "nya-regler-akassa-2025",
    title: "Nya regler för a-kassan 2025 – Det här gäller nu",
    summary: "Det sker förändringar i a-kassan under 2025. Vi går igenom vad det nya systemet innebär för dig, din plånbok och din trygghet.",
    image: "/artiklar/rules-2025.png",
    publishedAt: "2024-12-15",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Arbetslöshetsförsäkringen är under ständig utredning och förändring. För 2025 ligger fokus på att göra försäkringen mer träffsäker men också att öka drivkrafterna till arbete. Här är en genomgång av de viktigaste förändringarna du behöver ha koll på.</p>

      <h2>Inkomstbaserad a-kassa</h2>
      <p>Ett av de största förslagen som diskuterats under lång tid är övergången till en helt inkomstbaserad arbetslöshetsförsäkring. Istället för att räkna på arbetad tid (timmar), baseras rätten till ersättning på din inkomst.</p>
      <ul>
        <li>Det blir enklare att kvalificera sig för dig som har haft oregelbundna arbetstider men bra lön.</li>
        <li>Systemet blir mindre byråkratiskt då uppgifterna hämtas direkt från Skatteverket istället för från krångliga arbetsgivarintyg.</li>
      </ul>

      <h2>Nedtrappning av ersättningen</h2>
      <p>Förslagen innebär också en tydligare nedtrappning av ersättningen. Tanken är att ersättningen ska vara hög i början av arbetslösheten för att ge trygghet, men sedan sjunka snabbare.</p>
      
      <div class="bg-gray-100 p-6 rounded-lg my-6">
        <h4 class="font-bold mb-2">Vad innebär det för mig?</h4>
        <p>Om förslaget går igenom fullt ut innebär det att det blir ännu viktigare att ha en <strong>privat inkomstförsäkring</strong> eller facklig försäkring som täcker upp när den statliga a-kassan trappas ner efter de första 100 dagarna.</p>
      </div>

      <h2>Höjda tak och inflation</h2>
      <p>Taken i a-kassan har justerats uppåt de senaste åren för att möta inflationen, men många kritiker menar att det inte räcker. Under 2025 förväntas debatten om nivåerna fortsätta, särskilt i ljuset av ökade levnadskostnader.</p>
    `
  },
  {
    slug: "inflationen-och-akassa-2025",
    title: "Så påverkar inflationen din ersättning 2025",
    summary: "Matpriserna stiger och hyrorna går upp. Hänger a-kassan med? Vi tittar på hur köpkraften påverkas och varför en inkomstförsäkring är viktigare än någonsin.",
    image: "/artiklar/inflation.png",
    publishedAt: "2025-01-10",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Inflation urholkar värdet av våra pengar. Det gäller lönen, men i allra högsta grad också ersättningen från a-kassan. Om taket i a-kassan ligger stilla medan priserna ökar, får du som arbetslös reellt sett mindre pengar att röra dig med.</p>

      <h2>Reallönesänkning för arbetslösa</h2>
      <p>När inflationen ligger på 5-10% minskar köpkraften drastiskt. Taket i a-kassan (26 400 kr före skatt) har inte indexerats i takt med inflationen historiskt sett. Det betyder att för varje år som går utan höjning, blir a-kassan "sämre".</p>

      <h3>Räkneexempel: Förlust i köpkraft</h3>
      <p>Om din a-kassa ger dig 20 000 kr ut efter skatt, och inflationen är 5%, så kan du köpa varor för 19 000 kr "i dagens värde" om ett år. På några år kan detta göra stor skillnad i plånboken för den som är långtidsarbetslös.</p>

      <h2>Inkomstförsäkring som skydd</h2>
      <p>Det bästa sättet att skydda sig mot att kalkylen spricker är att ha en inkomstförsäkring. Den garanterar ofta upp till 80% av din faktiska lön, oavsett taket i a-kassan. Många fackförbund har dessutom förhandlat fram bra villkor som justeras bättre över tid.</p>
      
      <div class="bg-red-50 p-6 rounded-xl border border-red-100 my-6">
         <h4 class="text-red-900 font-bold mt-0 mb-2">Tips!</h4>
         <p class="text-red-800 mb-0">Se över dina fasta utgifter. Om du lever på marginalen med din nuvarande lön, kommer a-kassans grundnivå vara en chock. Att betala 100-200 kr extra i månaden för en tilläggsförsäkring kan vara din bästa investering.</p>
      </div>
    `
  },
  {
    slug: "byta-karriar-2025-trygghet",
    title: "Byta bransch 2025? Så behåller du din SGI och a-kassa",
    summary: "Funderar du på att sadla om? Det är viktigt att du inte hamnar mellan stolarna. Här är checklistan för att byta jobb säkert utan att nollställa din ersättning.",
    image: "/artiklar/career-switch.png",
    publishedAt: "2025-02-01",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Att byta karriär är spännande, men det finns fallgropar. En av de vanligaste frågorna vi får är: "Vad händer med min a-kassa om jag säger upp mig själv?" eller "Förlorar jag min SGI om jag börjar plugga?".</p>

      <h2>Säga upp sig själv – karens</h2>
      <p>Om du säger upp dig själv utan "giltigt skäl" (som t.ex. sjukdom eller mobbning) blir du avstängd från a-kassan i <strong>45 ersättningsdagar</strong>. Det motsvarar ungefär 9-10 veckor utan ersättning. Planera din ekonomi för detta glapp!</p>

      <h2>Byta a-kassa utan glapp</h2>
      <p>Om du byter från att vara lärare till att bli ingenjör ska du byta från Lärarnas a-kassa till Akademikernas a-kassa. <br><strong>Gör så här:</strong></p>
      <ol>
        <li>Ansök om medlemskap i den NYA kassan.</li>
        <li>Begär utträde ur den GAMLA kassan tidigast samma månad som du går med i den nya.</li>
        <li><strong>Viktigast:</strong> Se till att det inte blir en enda dags glapp. Byt vid ett månadsskifte.</li>
      </ol>

      <div class="bg-green-50 p-6 rounded-xl border border-green-100 my-6">
        <h4 class="text-green-900 font-bold mb-2">TIPS: Oavbrutet medlemskap</h4>
        <p class="mb-0">Om du har ett glapp i medlemskapet måste du börja om din kvalificeringstid på 12 månader. Det får inte hända! Byt kassa sömlöst.</p>
      </div>

      <h2>Skydda SGI vid studier</h2>
      <p>Om du slutar jobba för att plugga måste du ha studiestöd från CSN för att skydda din SGI (Sjukpenninggrundande inkomst) och din vilande a-kassa. Studerar du utan CSN riskerar du att nollas.</p>
    `
  },
  {
    slug: "a-kassa-for-frilansare-2025",
    title: "A-kassa för frilansare och gig-jobbare – så funkar det",
    summary: "Arbetsmarknaden förändras och allt fler jobbar projektbaserat. Men a-kassan hänger inte alltid med. Här är guiden för dig som är giggare eller konsult.",
    image: "/artiklar/digital-nomad.png",
    publishedAt: "2025-02-20",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Gig-ekonomin växer, men det svenska trygghetssystemet bygger fortfarande på den traditionella tillsvidareanställningen. Som frilansare eller "giggare" måste du vara extra smart för att få samma trygghet.</p>

      <h2>Anställd eller Företagare?</h2>
      <div class="space-y-4 my-6">
        <div class="border-l-4 border-blue-500 pl-4">
            <h4 class="font-bold">Egenanställd (via Faktureringsbolag)</h4>
            <p>Räknas oftast som anställd. A-kassan bedömer dig som en anställd som arbetar per timme. Du måste samla intyg från ditt egenanställningsföretag (t.ex. Cool Company, Frilans Finans).</p>
        </div>
        <div class="border-l-4 border-purple-500 pl-4">
            <h4 class="font-bold">Eget bolag (F-skatt)</h4>
            <p>Du räknas som företagare. För att få a-kassa måste du ofta lägga företaget "vilande" – du får alltså inte göra NÅGOT i bolaget, inte ens svara på mail, under tiden du lyfter ersättning.</p>
        </div>
      </div>

      <h2>Kombinatören – det svåra mellanläget</h2>
      <p>Många har en anställning på 50% och driver eget vid sidan av. Detta kallas att vara kombinatör. A-kassorna har särskilda regler här. Om du blir arbetslös från din anställning kan du ibland få fyllnadsmarkering, men ofta krävs att du pausar din bisyssla (företaget) för att få full ersättning. Kolla alltid med din specifika a-kassa i förväg.</p>

      <h3>Småföretagarnas a-kassa</h3>
      <p>För dig som driver eget eller frilansar är <strong>Småa</strong> ofta det bästa valet då de har bäst koll på dessa speciella villkor.</p>
    `
  },
  {
    slug: "student-till-jobb-guide",
    title: "Från examen till anställning – din guide till a-kassan",
    summary: "Grattis till examen! Nu börjar arbetslivet. Men vad händer om du inte får jobb direkt? Så här kvalificerar du dig för a-kassa som nyexaminerad.",
    image: "/artiklar/student.png",
    publishedAt: "2025-06-05",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Som student har du ofta levt på CSN och kanske jobbat extra. När du tar examen står du inför ett glapp innan första riktiga lönen kommer. Kan du få a-kassa direkt?</p>

      <h2>Grundregeln: Du måste ha jobbat</h2>
      <p>A-kassa baseras på arbete, inte studier. För att få ersättning måste du uppfylla <strong>arbetsvillkoret</strong>. Det innebär i korthet:</p>
      <ul>
        <li>Du ska ha jobbat minst 6 månader...</li>
        <li>...minst 60 timmar per månad...</li>
        <li>...under de senaste 12 månaderna.</li>
      </ul>
      <p>Detta är kruxet för många studenter som bara jobbat lite extra på helger.</p>

      <h2>Studentvillkoret (Alternativregeln)</h2>
      <p>Det finns dock ett litet undantag eller snarare en hjälp: Du får hoppa över studietiden. A-kassan kan titta på hur mycket du jobbade <em>innan</em> eller <em>bredvid</em> studierna, upp till 5 år tillbaka, om du har avslutat heltidsstudier.</p>

      <h3>Gå med i a-kassan direkt!</h3>
      <p>Om du inte redan är medlem, gå med IDAG. De flesta a-kassor har en "studentrabatt" eller mycket låg avgift (t.ex. 100-140 kr/mån). Även om du inte får ersättning dag 1, börjar du tjäna in din medlemstid (12 månader) för att få den högre inkomstbaserade ersättningen så fort du börjar jobba och får en lön.</p>

      <h2>Tips för nyexaminerade</h2>
      <ol>
        <li><strong>Alfa-kassan:</strong> Om du inte är medlem någonstans kan du ändå söka grundersättning hos Alfa-kassan om du uppfyller arbetsvillkoret.</li>
        <li><strong>Facket:</strong> Gå med i facket (t.ex. Unionen, Sveriges Ingenjörer). De har ofta karriärtjänster, CV-granskning och inkomstförsäkring som ingår för framtiden.</li>
      </ol>
    `
  }
];
