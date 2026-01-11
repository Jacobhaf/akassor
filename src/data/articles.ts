export interface Article {
  slug: string;
  title: string;
  summary: string;
  content: string; // HTML content or markdown
  image: string;
  publishedAt: string;
  faq?: {
    question: string;
    answer: string;
  }[];
}

const rawArticles: Article[] = [
  {
    slug: "bingohall-lon-okning",
    title: "Så mycket höjs lönen för anställda på bingohallar",
    summary: "Anställda på bingohallar har fått ett nytt kollektivavtal som innebär tydliga förbättringar – både när det gäller lön och ersättning för arbetstid. För dig som arbetar inom bingoverksamhet är avtalet en viktig signal.",
    image: "/artiklar/bingohall-salary.jpg",
    publishedAt: "2025-12-29",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Anställda på bingohallar har fått ett nytt kollektivavtal som innebär tydliga förbättringar – både när det gäller lön och ersättning för arbetstid. För dig som arbetar inom bingoverksamhet, eller funderar på att göra det, är avtalet en viktig signal om villkoren i branschen.</p>

      <h2>Nytt kollektivavtal klart</h2>
      <p>Det är Hotell- och restaurangfacket (HRF) som har tecknat ett nytt kollektivavtal med arbetsgivarorganisationen Almega. Avtalet gäller anställda på bingohallar som omfattas av Almegas medlemsföretag och innebär att 2025 års avtalsrörelse nu är avslutad för branschen.</p>

      <h2>Löneökning med totalt 1 920 kronor</h2>
      <p>Det nya avtalet sträcker sig över två år och ger sammanlagda löneökningar på 1 920 kronor:</p>
      <ul class="space-y-2 mb-6">
        <li class="flex items-center"><span class="font-bold w-20 text-green-700">År 1:</span> +1 000 kronor</li>
        <li class="flex items-center"><span class="font-bold w-20 text-green-700">År 2:</span> +920 kronor</li>
      </ul>
      <p>Utöver detta höjs ersättningar som ob-tillägg och semesterersättning med 3,4 procent första året och 3,0 procent andra året.</p>

      <h2>Mertid ger övertidsersättning</h2>
      <p>En av de största förändringarna i avtalet är att deltidsanställda får övertidsersättning när de arbetar mertid. Regeln börjar gälla från och med 1 juli 2026.</p>

      <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 my-6 italic">
        "Det blir samma upplägg som i många andra avtal. Jobbar man mertid så är det övertidsersättning som gäller."
        <div class="not-italic text-sm font-bold mt-2 text-blue-900">– Emil Bäckström, ombudsman på Hotell- och restaurangfacket</div>
      </div>

      <p>Det finns dock ett undantag. Om en deltidsanställd går in som vikarie, exempelvis vid sjukdom eller semester, gäller ordinarie lön även om arbetstiden ökar.</p>

      <h2>Förhandlingar med både vinster och eftergifter</h2>
      <p>Fackliga företrädare beskriver förhandlingarna som utdragna. Evelina Frehse, som arbetar på Idrottens Bingo i Linköping och deltog i förhandlingsdelegationen, menar att resultatet är blandat:</p>

      <div class="bg-gray-50 p-6 rounded-xl border border-gray-200 my-6">
         <p class="mb-0 italic">"Övertidsersättning för mertid är ju bra. Då kan mertid inte nyttjas på samma sätt. Det negativa är att allmän visstid blev kvar."</p>
      </div>

      <p>För att få igenom övertidsersättningen tvingades HRF acceptera en förändring som arbetsgivarsidan drivit: gränsen för när rast måste ges höjs från fem till sex timmars arbete.</p>

      <h2>Allmän visstid finns kvar</h2>
      <p>Ett annat resultat av förhandlingarna är att anställningsformen allmän visstid fortsätter att gälla inom bingoavtalet. I många andra branscher har den ersatts av särskild visstid, som ger snabbare väg till tillsvidareanställning.</p>

      <p>– Allmän visstid finns inte längre i lagen, men Almega menar att den kan finnas kvar genom kollektivavtal. För att få bort den hade vi behövt betala ett högt pris, säger Emil Bäckström.</p>

      <h2>Vill du veta mer om bingoarbete?</h2>
      <p>För dig som är nyfiken på hur det är att arbeta på bingohall, vilka arbetsgivare som finns och hur verksamheten fungerar i praktiken kan du läsa mer hos <a href="https://dinbingohall.se" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">dinbingohall.se</a> – en sajt med fokus på bingohallar runt om i Sverige.</p>

      <p class="text-sm text-gray-500 mt-8 pt-4 border-t">På valjaakassa.se fortsätter vi att följa utvecklingen av kollektivavtal och arbetsvillkor, så att du kan göra informerade val kring jobb, a-kassa och trygghet i arbetslivet.</p>
    `
  },
  {
    slug: "vad-ar-akassa",
    title: "Vad är a-kassa och hur fungerar den?",
    summary: "En heltäckande guide om det svenska trygghetssystemet. Lär dig skillnaden mellan grundförsäkring och inkomstbortfallsförsäkring, och hur du säkrar din ekonomiska framtid.",
    image: "/artiklar/guide-person.png",
    publishedAt: "2023-11-15",
    content: `
      <p class="lead text-xl text-gray-600 mb-8"><a href="/jamfor" class="text-blue-600 hover:underline">Att bli medlem i en a-kassa</a> är ett av de viktigaste stegen du kan ta för din ekonomiska trygghet. Men hur fungerar systemet egentligen, och vad är skillnaden på att bara "få pengar" och att ha en riktig inkomstförsäkring? Här går vi igenom allt du behöver veta.</p>

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
        <li>Utbetalas oftast av <a href="/akassa/alfa" class="text-blue-600 hover:underline">Alfa-kassan</a> om du inte är medlem någonstans.</li>
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
      <p><strong><a href="/akassa/aea" class="text-blue-600 hover:underline">Akademikernas a-kassa (AEA)</a></strong> är det självklara valet om du har 180 högskolepoäng eller mer, eller studerar. Det är Sveriges största a-kassa med över 750 000 medlemmar. De är kända för låg avgift och effektiv handläggning.</p>

      <div class="bg-green-50 p-6 rounded-xl border border-green-100 my-6">
        <h4 class="text-green-900 font-bold mt-0 mb-2">Exempel på yrken för AEA:</h4>
        <p class="text-green-800 text-sm mb-0">Ingenjör, Lärare, Personalvetare, Ekonom, Systemutvecklare, Läkare.</p>
      </div>

      <h3>För Tjänstemän</h3>
      <p>Om du jobbar på kontor i privat sektor är <strong><a href="/akassa/unionen" class="text-blue-600 hover:underline">Unionens a-kassa</a></strong> ofta rätt val. De organiserar allt från administratörer och säljare till IT-konsulter och chefer.</p>

      <h3>För Vård och Omsorg</h3>
      <p><strong><a href="/akassa/kommunal" class="text-blue-600 hover:underline">Kommunals a-kassa</a></strong> är störst inom kommunala yrken som undersköterska, barnskötare och personlig assistent.</p>

      <h3>För Egenföretagare</h3>
      <p>Som företagare har du specifika regler kring "vilande företag" för att få ersättning. <strong><a href="/akassa/smaa" class="text-blue-600 hover:underline">Småföretagarnas a-kassa (Småa)</a></strong> är experter på detta och kan guida dig rätt så att du inte riskerar din ersättning.</p>

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
    summary: "Vi dyker ner i detaljerna kring dagpenning, inkomsttak och hur 80%-regeln faktiskt fungerar i praktiken år 2026.",
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
      <p>A-kassan har ett tak. Det innebär att du får 80% av din lön, men bara upp till en viss inkomstnivå. År 2025/2026 ligger taket på <strong>33 000 kr</strong> i månaden de första 100 dagarna.</p>
      
      <p>Tjänar du mer än 33 000 kr? Då får du ändå bara ut maxbeloppet (ca 26 400 kr före skatt). För att försäkra lönen över detta tak behöver du en <strong><a href="/inkomstforsakring" class="text-blue-600 hover:underline">inkomstförsäkring</a></strong>, som oftast ingår i fackmedlemskap eller kan tecknas separat.</p>

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
    title: "Nya regler för a-kassan 2026 – Det här gäller nu",
    summary: "Det sker förändringar i a-kassan under 2026. Vi går igenom vad det nya systemet innebär för dig, din plånbok och din trygghet.",
    image: "/artiklar/rules-2025.png",
    publishedAt: "2024-12-15",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Arbetslöshetsförsäkringen är under ständig utredning och förändring. För 2026 ligger fokus på att göra försäkringen mer träffsäker men också att öka drivkrafterna till arbete. Här är en genomgång av de viktigaste förändringarna du behöver ha koll på.</p>

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
        <p>Om förslaget går igenom fullt ut innebär det att det blir ännu viktigare att ha en <strong><a href="/inkomstforsakring" class="text-blue-600 hover:underline">privat inkomstförsäkring</a></strong> eller facklig försäkring som täcker upp när den statliga a-kassan trappas ner efter de första 100 dagarna.</p>
      </div>

      <h2>Höjda tak och inflation</h2>
      <p>Taken i a-kassan har justerats uppåt de senaste åren för att möta inflationen, men många kritiker menar att det inte räcker. Under 2026 förväntas debatten om nivåerna fortsätta, särskilt i ljuset av ökade levnadskostnader.</p>
    `
  },
  {
    slug: "inflationen-och-akassa-2025",
    title: "Så påverkar inflationen din ersättning 2026",
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
      <p>Det bästa sättet att skydda sig mot att kalkylen spricker är att ha en <a href="/inkomstforsakring" class="text-blue-600 hover:underline">inkomstförsäkring</a>. Den garanterar ofta upp till 80% av din faktiska lön, oavsett taket i a-kassan. Många fackförbund har dessutom förhandlat fram bra villkor som justeras bättre över tid.</p>
      
      <div class="bg-red-50 p-6 rounded-xl border border-red-100 my-6">
         <h4 class="text-red-900 font-bold mt-0 mb-2">Tips!</h4>
         <p class="text-red-800 mb-0">Se över dina fasta utgifter. Om du lever på marginalen med din nuvarande lön, kommer a-kassans grundnivå vara en chock. Att betala 100-200 kr extra i månaden för en tilläggsförsäkring kan vara din bästa investering.</p>
      </div>
    `
  },
  {
    slug: "byta-karriar-2025-trygghet",
    title: "Byta bransch 2026? Så behåller du din SGI och a-kassa",
    summary: "Funderar du på att sadla om? Det är viktigt att du inte hamnar mellan stolarna. Här är checklistan för att byta jobb säkert utan att nollställa din ersättning.",
    image: "/artiklar/career-switch.png",
    publishedAt: "2025-02-01",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Att byta karriär är spännande, men det finns fallgropar. En av de vanligaste frågorna vi får är: "Vad händer med min a-kassa om jag säger upp mig själv?" eller "Förlorar jag min SGI om jag börjar plugga?".</p>

      <h2>Säga upp sig själv – karens</h2>
      <p>Om du säger upp dig själv utan "giltigt skäl" (som t.ex. sjukdom eller mobbning) blir du avstängd från a-kassan i <strong>45 ersättningsdagar</strong>. Det motsvarar ungefär 9-10 veckor utan ersättning. Planera din ekonomi för detta glapp!</p>

      <h2>Byta a-kassa utan glapp</h2>
      <p>Om du byter från att vara lärare till att bli ingenjör ska du byta från <a href="/akassa/la" class="text-blue-600 hover:underline">Lärarnas a-kassa</a> till <a href="/akassa/aea" class="text-blue-600 hover:underline">Akademikernas a-kassa</a>. <br><strong>Gör så här:</strong></p>
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
    slug: "a-kassa-for-gigarbetare-och-frilansare",
    title: "A-kassa för frilansare och gig-jobbare 2026 – så funkar det",
    summary: "Arbetsmarknaden förändras snabbt. Allt fler väljer friheten som giggare eller konsult, men trygghetssystemen släpar efter. Här är den ultimata guiden för dig som vill säkra din inkomst som frilansare 2026.",
    image: "/artiklar/digital-nomad.png",
    publishedAt: "2025-02-20",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Gig-ekonomin är här för att stanna. År 2026 beräknas över 20% av arbetskraften ha någon form av inkomst från gig eller frilansuppdrag. Men det svenska a-kassesystemet är i grunden byggt för traditionella anställningar. Det betyder inte att du står utan skydd – men du måste veta exakt hur reglerna fungerar för att inte gå miste om ersättning.</p>

      <h2>Tre sätt att vara frilansare – tre olika regler</h2>
      <p>Det första du måste reda ut är <em>hur</em> du frilansar. A-kassan gör stor skillnad på om du betraktas som anställd eller företagare.</p>

      <div class="space-y-6 my-8">
        <div class="bg-white p-6 rounded-xl border-l-4 border-blue-500 shadow-sm">
            <h3 class="text-blue-900 font-bold text-lg mt-0 mb-2">1. Egenanställd (Giggare)</h3>
            <p class="text-gray-700 mb-2"><strong>Vad är det?</strong> Du fakturerar via bolag som Frilans Finans, Cool Company eller Gigapay. Du har ingen F-skatt.</p>
            <p class="text-gray-700"><strong>A-kassans syn:</strong> Du räknas normalt som <strong>anställd</strong>. Det är bra! Det betyder att du kan stämpla upp till heltid om du får färre uppdrag, precis som en timanställd. <br><span class="text-sm italic">Varning: Vissa a-kassor kan bedöma dig som "självständig uppdragstagare" om du är för oberoende, vilket kan likställas med företagare.</span></p>
        </div>

        <div class="bg-white p-6 rounded-xl border-l-4 border-purple-500 shadow-sm">
            <h3 class="text-purple-900 font-bold text-lg mt-0 mb-2">2. Enskild Firma</h3>
            <p class="text-gray-700 mb-2"><strong>Vad är det?</strong> Du har F-skatt och driver verksamheten i eget namn.</p>
            <p class="text-gray-700"><strong>A-kassans syn:</strong> Du är <strong>företagare</strong>. Huvudregeln är att du inte kan få a-kassa så länge verksamheten är igång. För att få ersättning måste du ofta lägga företaget "vilande" (pausa verksamheten helt) eller avregistrera F-skatten.</p>
        </div>

        <div class="bg-white p-6 rounded-xl border-l-4 border-emerald-500 shadow-sm">
            <h3 class="text-emerald-900 font-bold text-lg mt-0 mb-2">3. Aktiebolag</h3>
            <p class="text-gray-700 mb-2"><strong>Vad är det?</strong> Du är anställd i ditt eget aktiebolag.</p>
            <p class="text-gray-700"><strong>A-kassans syn:</strong> Du räknas som <strong>företagare</strong> om du eller din familj äger en väsentlig del av bolaget och du har inflytande över driften. Samma regler om "vilande företag" gäller oftast här.</p>
        </div>
      </div>

      <h2>Arbetsvillkoret för giggare</h2>
      <p>För att få a-kassa måste du uppfylla arbetsvillkoret (jobbat ca halvtid i 6 månader). För frilansare kan detta vara klurigt:</p>
      <ul class="list-disc pl-5 space-y-2 mb-6">
        <li><strong>Samla timmar:</strong> Alla små uppdrag räknas! Spara alla lönespecifikationer från dina egenanställningsbolag.</li>
        <li><strong>Kreativa yrken:</strong> För vissa konstnärliga yrken finns särskilda regler där man räknar om inkomst till arbetad tid ("schablonisering"), vilket kan hjälpa dig att nå villkoret.</li>
      </ul>

      <div class="bg-amber-50 p-6 rounded-xl border border-amber-200 my-8">
        <h4 class="text-amber-900 font-bold mt-0 mb-2 text-lg">Varning för ”kombinatörsfällan”</h4>
        <p class="text-amber-800 mb-4">
            Många kombinerar en deltidsanställning med att fakturera vid sidan av. Inom arbetslöshetsförsäkringen betraktas detta som att vara kombinatör. Om du förlorar din anställning kan din näringsverksamhet påverka rätten till a-kassa, även om företaget bara bedrivs i liten omfattning.
        </p>
        <p class="text-amber-800">
            Reglerna har delvis mjukats upp, men för att få behålla en verksamhet samtidigt som du får ersättning krävs ofta att den bedöms som bisyssla. Det innebär bland annat att den ska ha bedrivits vid sidan av heltidsarbete under minst 12 månader före arbetslösheten och inte ha utökats därefter.
        </p>
      </div>

      <h2>Vilken a-kassa ska jag välja 2026?</h2>
      <p>Det är avgörande att du väljer en a-kassa som förstår din situation.</p>
      
      <h3>För dig med eget företag (F-skatt/AB)</h3>
      <p>Här är <strong><a href="/akassa/smaa" class="text-blue-600 hover:underline">Småföretagarnas a-kassa (Småa)</a></strong> det absolut starkaste kortet. De är specialister på regler kring vilande företag, familjeföretagande och entreprenörskap. De förstår att en företagare inte alltid har en "chef" att få intyg ifrån.</p>

      <h3>För dig som är Egenanställd/Giggare</h3>
      <p>Om du främst fakturerar via faktureringstjänster kan <strong><a href="/akassa/unionen" class="text-blue-600 hover:underline">Unionens a-kassa</a></strong> vara ett bra val. De är Sveriges största a-kassa för privata tjänstemän och är vana vid moderna anställningsformer. Även <strong><a href="/akassa/alfa" class="text-blue-600 hover:underline">Alfa-kassan</a></strong> är ett alternativ som är öppet för alla yrkesgrupper.</p>

      <h3>För Kulturella och Kreativa yrken</h3>
      <p>Jobbar du inom media, teater, musik eller formgivning? Då är <strong><a href="/akassa/kultur" class="text-blue-600 hover:underline">Kulturarbetarnas a-kassa</a></strong> eller <strong>Journalisternas a-kassa</strong> ofta bäst. De har specifik kunskap om projektanställningar, upphovsrättsliga ersättningar och stipendier.</p>

      <h2>Checklista för frilansare</h2>
      <ol class="list-decimal pl-5 space-y-3 mt-4 mb-8">
        <li><strong>Dokumentera allt:</strong> Spara alla avtal, fakturor och tidsrapporter. Du är din egen HR-avdelning.</li>
        <li><strong>Ta ut lön!</strong> Om du har AB, kom ihåg att din a-kassa baseras på din <em>utbetalda lön</em>, inte bolagets vinst. Tar du bara utdelning får du 0 kr i a-kassa.</li>
        <li><strong>Gå med i rätt tid:</strong> Vänta inte tills uppdragen sinar. Gå med i a-kassan nu när du har inkomst.</li>
        <li><strong>Skaffa inkomstförsäkring:</strong> Som frilansare varierar inkomsten. En privat inkomstförsäkring kan ge dig trygghet baserat på dina bästa inkomstår.</li>
      </ol>
    `,
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
        <li><strong><a href="/akassa/alfa" class="text-blue-600 hover:underline">Alfa-kassan</a>:</strong> Om du inte är medlem någonstans kan du ändå söka grundersättning hos Alfa-kassan om du uppfyller arbetsvillkoret.</li>
        <li><strong>Facket:</strong> Gå med i facket (t.ex. <a href="/akassa/unionen" class="text-blue-600 hover:underline">Unionen</a>, Sveriges Ingenjörer). De har ofta karriärtjänster, CV-granskning och inkomstförsäkring som ingår för framtiden.</li>
      </ol>
    `
  },
  {
    slug: "chat-noir-kollektivavtal",
    title: "Chat Noir, strippklubb och kollektivavtal – därför är facket viktigt",
    summary: "Strippklubben Chat Noir har fått kollektivavtal. Ett exempel på varför facket och kollektivavtal är viktiga för trygghet och arbetsvillkor.",
    image: "/artiklar/chat-noir-kollektivavtal.png",
    publishedAt: "2026-01-11",
    faq: [
      {
        question: "Vad gör man som strippa?",
        answer: "Som strippa arbetar man med underhållning, ofta genom scenframträdanden och dans där avklädning är en del av showen. Arbetsuppgifterna kan även innefatta publikinteraktion och servering. Det är grundläggande att allt arbete sker friviligt och utifrån överenskomna villkor."
      },
      {
        question: "Vad tjänar man som strippa?",
        answer: "Inkomsten varierar kraftigt beroende på arbetsgivare, arbetstider samt vilken ersättningsmodell som tillämpas, exempelvis en kombination av fast lön och provision eller enbart dricks. Alla inkomster är skattepliktiga och ska redovisas korrekt."
      },
      {
        question: "Är det lagligt att jobba som strippa i Sverige?",
        answer: "Ja, striptease är lagligt i Sverige. Verksamheten måste dock följa svensk lagstiftning, vilket innebär att den ska vara helt frivillig och inte får innefatta köp eller försäljning av sexuella tjänster."
      },
      {
        question: "Har strippor rätt till kollektivavtal?",
        answer: "Anställda har rätt till kollektivavtal om arbetsgivaren tecknat ett sådant med ett fackförbund. Detta reglerar minimilöner, ob-tillägg, försäkringar och pension. För egenföretagare gäller andra regler."
      },
      {
        question: "Kan man vara med i facket som strippa?",
        answer: "Ja, det går att vara med i facket. Om du är anställd kan du gå med i det förbund som organiserar din arbetsplats (ofta Hotell- och restaurangfacket). Som egenföretagare kan du ansluta dig till en organisation för företagare eller specifika intresseorganisationer."
      },
      {
        question: "Har man rätt till a-kassa om man jobbar som strippa?",
        answer: "Ja, principen är densamma som för andra yrken. För att få ersättning måste du vara medlem i en a-kassa, uppfylla arbetsvillkoret och ha haft en beskattad inkomst som ligger till grund för ersättningen."
      }
    ],
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Efter flera års avslag har Hotell- och restaurangfacket (HRF) nu tecknat kollektivavtal med strippklubben Chat Noir i Göteborg. Beslutet markerar ett tydligt skifte i hur fackförbund ser på sitt ansvar: även verksamheter som kan uppfattas som kontroversiella omfattas av svensk arbetsrätt – så länge de är lagliga.</p>

      <h2>Från nej till ja – vad har förändrats?</h2>
      <p>Redan 2019 ansökte arbetsgivaren om kollektivavtal, men fick då avslag med hänvisning till att striptease inte låg inom HRF:s verksamhetsområde. Sedan dess har både arbetsgivare och anställda återigen vänt sig till facket. Efter en ny genomgång av arbetsplatsen, där HRF varit på plats och dokumenterat arbetsuppgifter och villkor, landade man i ett nytt beslut: kollektivavtal tecknas för de anställda som faktiskt omfattas av förbundets ansvarsområde.</p>

      <p>Det innebär att personal inom exempelvis servering, bar och garderob nu omfattas av kollektivavtal – precis som på teatrar, restauranger och andra nöjesverksamheter. Däremot omfattas inte de som uppträder på scenen, eftersom de inte är anställda av bolaget.</p>

      <h2>Varför är kollektivavtal viktigt?</h2>
      <p>Ett kollektivavtal reglerar bland annat:</p>
      <ul class="space-y-2 mb-6">
        <li class="flex items-center"><span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>löner och ersättningar</li>
        <li class="flex items-center"><span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>arbetstider och ob-tillägg</li>
        <li class="flex items-center"><span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>försäkringar och pension</li>
        <li class="flex items-center"><span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>arbetsmiljö och inflytande</li>
      </ul>
      <p>När ett avtal finns på plats ökar också insynen i verksamheten och möjligheten för facket att påverka arbetsvillkoren. HRF betonar att deras roll är att ta ansvar för de anställdas trygghet – inte att värdera branschen i sig. Så länge verksamheten är laglig är det fackets uppgift att företräda sina medlemmar.</p>

      <h2>Kollektivavtal kan möjliggöra nattarbete</h2>
      <p>Beslutet får även praktiska konsekvenser. Enligt svensk lag krävs kollektivavtal eller särskilt undantag för nattarbete. För Chat Noir innebär avtalet att verksamheten nu kan ha nattpersonal på ett lagligt sätt, något som tidigare varit ett hinder.</p>

      <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 my-6">
        <h3 class="text-blue-900 font-bold text-lg mt-0 mb-2">Ett bredare fackligt ansvar</h3>
        <p class="text-blue-800 mb-0">Fallet visar tydligt att facket inte bara är till för ”traditionella” arbetsplatser. Kollektivavtal spelar en avgörande roll även i mindre vanliga eller ifrågasatta branscher – just för att säkerställa att anställda inte står utan skydd.</p>
      </div>

      <p class="text-gray-700 italic mb-12">För dig som arbetar inom hotell, restaurang, nöje eller service är detta en påminnelse om varför fackligt medlemskap och rätt a-kassa är viktiga delar av din trygghet på arbetsmarknaden.</p>

      <hr class="border-gray-200 my-12" />

      <h2 class="text-2xl font-bold mb-6">FAQ: Att arbeta som strippa i Sverige</h2>

      <div class="space-y-8">
        <div>
           <h3 class="text-lg font-bold text-gray-900 mb-2">Vad gör man som strippa?</h3>
           <p class="text-gray-700">Som strippa arbetar man med underhållning, ofta genom scenframträdanden och dans där avklädning är en del av showen. Arbetsuppgifterna kan även innefatta publikinteraktion och servering. Det är grundläggande att allt arbete sker frivilligt och utifrån överenskomna villkor.</p>
        </div>

        <div>
           <h3 class="text-lg font-bold text-gray-900 mb-2">Vad tjänar man som strippa?</h3>
           <p class="text-gray-700">Inkomsten varierar kraftigt beroende på arbetsgivare, arbetstider samt vilken ersättningsmodell som tillämpas, exempelvis en kombination av fast lön och provision eller enbart dricks. Alla inkomster är skattepliktiga och ska redovisas korrekt.</p>
        </div>

        <div>
           <h3 class="text-lg font-bold text-gray-900 mb-2">Är det lagligt att jobba som strippa i Sverige?</h3>
           <p class="text-gray-700">Ja, striptease är lagligt i Sverige. Verksamheten måste dock följa svensk lagstiftning, vilket innebär att den ska vara helt frivillig och inte får innefatta köp eller försäljning av sexuella tjänster.</p>
        </div>

        <div>
           <h3 class="text-lg font-bold text-gray-900 mb-2">Har strippor rätt till kollektivavtal?</h3>
           <p class="text-gray-700">Anställda har rätt till kollektivavtal om arbetsgivaren tecknat ett sådant med ett fackförbund. Detta reglerar minimilöner, ob-tillägg, försäkringar och pension. För egenföretagare gäller andra regler.</p>
        </div>

        <div>
           <h3 class="text-lg font-bold text-gray-900 mb-2">Kan man vara med i facket som strippa?</h3>
           <p class="text-gray-700">Ja, det går att vara med i facket. Om du är anställd kan du gå med i det förbund som organiserar din arbetsplats (ofta Hotell- och restaurangfacket). Som egenföretagare kan du ansluta dig till en organisation för företagare eller specifika intresseorganisationer.</p>
        </div>

        <div>
           <h3 class="text-lg font-bold text-gray-900 mb-2">Har man rätt till a-kassa om man jobbar som strippa?</h3>
           <p class="text-gray-700">Ja, principen är densamma som för andra yrken. För att få ersättning måste du vara medlem i en a-kassa, uppfylla arbetsvillkoret och ha haft en beskattad inkomst som ligger till grund för ersättningen.</p>
        </div>
      </div>

      <div class="bg-gray-50 p-6 rounded-xl mt-8">
        <p class="text-sm text-gray-600 mb-0">Att ha tydliga anställningsavtal och rätt försäkringsskydd är avgörande för tryggheten i arbetslivet, oavsett bransch. Genom fackligt medlemskap och a-kassa skapar man en stabilare grund för sin ekonomi och arbetsmiljö.</p>
      </div>
    `
  },
  {
    slug: "arbetslos-utan-akassa",
    title: "Arbetslös utan a-kassa – ersättning och stöd när a-kassan tar slut",
    summary: "Arbetslös utan a-kassa? Läs vilken ersättning du kan få, vad som händer när a-kassan går ut och vilket ekonomiskt stöd som finns.",
    image: "/artiklar/arbetslos-utan-akassa.png",
    publishedAt: "2026-01-12",
    faq: [
      {
        question: "Vad händer om man är arbetslös utan a-kassa?",
        answer: "Om du är arbetslös utan att vara medlem i en a-kassa (eller inte uppfyller kraven) kan du inte få inkomstbaserad ersättning. Du kan däremot ha rätt till grundersättning från Alfa-kassan om du uppfyller arbetsvillkoret. I sista hand kan du behöva söka ekonomiskt bistånd hos kommunen."
      },
      {
        question: "Finns det ersättning om man inte är med i a-kassan?",
        answer: "Ja, du kan ha rätt till grundersättning. Den betalas oftast ut av Alfa-kassan och kräver att du har arbetat en viss tid innan arbetslösheten. Ersättningsnivån är dock betydligt lägre än den inkomstbaserade a-kassan."
      },
      {
        question: "Vad händer när a-kassan går ut?",
        answer: "När dina 300 (eller 450) ersättningsdagar är slut upphör a-kassan. Då kan du bli anvisad till jobb- och utvecklingsgarantin via Arbetsförmedlingen, där du kan få aktivitetsstöd från Försäkringskassan. Har du inget sådant skydd kan försörjningsstöd bli aktuellt."
      },
      {
        question: "Kan man få ekonomiskt bistånd som arbetslös?",
        answer: "Ja, om du helt saknar egna medel och inkomster kan du ansöka om ekonomiskt bistånd (socialbidrag) hos din kommun. Det är en behovsprövad insats som fungerar som ett yttersta skyddsnät och kräver att du står till arbetsmarknadens förfogande."
      },
      {
        question: "Måste man vara inskriven på Arbetsförmedlingen?",
        answer: "Ja, att vara inskriven på Arbetsförmedlingen är i princip alltid ett grundkrav för att få någon form av ersättning vid arbetslöshet, oavsett om det gäller a-kassa, aktivitetsstöd eller ekonomiskt bistånd."
      },
      {
        question: "Kan man gå med i a-kassa när man redan är arbetslös?",
        answer: "Ja, du kan bli medlem i en a-kassa när som helst, även som arbetslös. Dock krävs det normalt att du har varit medlem i minst 12 månader innan du kan få inkomstbaserad ersättning, så medlemskapet hjälper oftast för framtida trygghet snarare än akut."
      }
    ],
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Att stå utan inkomst skapar snabbt oro. Många söker varje dag efter svar på vad som gäller när man är arbetslös utan a-kassa eller när dagarna med ersättning är slut. Här reder vi ut vilka alternativ som finns för din försörjning.</p>

      <h2>Kan man vara arbetslös utan a-kassa?</h2>
      <p>Ja, eftersom a-kassan är en frivillig försäkring i Sverige är det många som står utanför systemet. Det kan handla om att man glömt att gå med, inte arbetat tillräckligt länge för att kvalificera sig, eller att man nyss kommit ut på arbetsmarknaden. Att vara arbetslös utan a-kassa innebär att du inte har rätt till den inkomstbaserade ersättningen som kan ge upp till 80 procent av din lön via <a href="/akassa/aea" class="text-blue-600 hover:underline">Akademikernas a-kassa</a>, <a href="/akassa/unionen" class="text-blue-600 hover:underline">Unionens a-kassa</a> eller andra förbund.</p>

      <h2>Ersättning när du är arbetslös utan a-kassa</h2>
      <p>Även om du inte är medlem i en a-kassa kan du ha rätt till viss ersättning, men villkoren är annorlunda.</p>

      <h3>Grundersättning via Alfa-kassan</h3>
      <p>För dig som inte är medlem i någon kassa, eller inte varit medlem tillräckligt länge, finns grundersättningen. Den administreras av <a href="/akassa/alfa" class="text-blue-600 hover:underline">Alfa-kassan</a>.</p>
      <ul class="space-y-2 mb-6">
        <li class="flex items-start"><span class="w-2 h-2 mt-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span><span><strong>Krav på arbetsvillkor:</strong> Du måste ha arbetat minst 6 månader det senaste året, eller minst 480 timmar under en sammanhängande period av 6 kalendermånader.</span></li>
        <li class="flex items-start"><span class="w-2 h-2 mt-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span><span><strong>Inskrivning:</strong> Du måste vara inskriven på Arbetsförmedlingen från din första arbetslösa dag.</span></li>
        <li class="flex items-start"><span class="w-2 h-2 mt-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span><span><strong>Ersättningsnivå:</strong> Grundersättningen är betydligt lägre än den inkomstbaserade ersättningen och baseras på hur mycket du arbetat tidigare, inte din lön.</span></li>
      </ul>

      <p>Läs mer om <a href="/artiklar/vad-ar-akassa" class="text-blue-600 hover:underline">skillnaden mellan grundförsäkring och inkomstbortfallsförsäkring här</a>.</p>

      <h2>Om du inte har rätt till a-kassa</h2>
      <p>Om du inte uppfyller arbetsvillkoret för grundersättning och saknar egna besparingar är det yttersta skyddsnätet <strong>ekonomiskt bistånd</strong> (tidigare kallat socialbidrag). Detta söker du hos socialtjänsten i din kommun.</p>

      <h3>Viktigt att veta om försörjningsstöd:</h3>
      <ul class="list-disc pl-5 space-y-2 mb-6">
        <li><strong>Behovsprövning:</strong> Socialtjänsten gör en noggrann utredning av din och din eventuella partners ekonomi. Har ni tillgångar (sparade pengar, bil, hus) krävs oftast att dessa används först.</li>
        <li><strong>Krav på aktivitet:</strong> För att få bistånd måste du vara aktivt arbetssökande och delta i de aktiviteter som kommunen eller Arbetsförmedlingen anvisar.</li>
        <li><strong>Yttersta gränsen:</strong> Biståndet ska täcka skäliga kostnader för livsuppehälle såsom hyra, el och mat. Nivån bestäms av riksnormen.</li>
      </ul>

      <p>Mer information om skillnaderna hittar du i vår guide om <a href="/jamfor" class="text-blue-600 hover:underline">a-kassa vs andra ersättningar</a>.</p>

      <h2>Vad händer när a-kassan går ut?</h2>
      <p>En vanlig fråga är vad som sker när ersättningsdagarna (normalt 300 dagar) tar slut. Om du fortfarande är arbetslös då upphör din rätt till a-kassa, men det betyder inte att du lämnas helt utan stöd.</p>

      <h3>Jobb- och utvecklingsgarantin</h3>
      <p>Du kan bli anvisad till <strong>jobb- och utvecklingsgarantin</strong> av Arbetsförmedlingen. Det är ett program med syfte att ge dig extra stöd att hitta jobb. När du deltar i programmet får du inte a-kassa, utan istället <strong>aktivitetsstöd</strong> som betalas ut av Försäkringskassan.</p>
      
      <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 my-6">
         <h4 class="text-blue-900 font-bold mt-0 mb-2">Ersättningsnivå i garantin</h4>
         <p class="text-blue-800 mb-0">Nivån på aktivitetsstödet baseras ofta på din tidigare a-kassa, men kan trappas ned över tid. Det är viktigt att du sköter din tidrapportering och deltar i programmet för att inte förlora ersättningen.</p>
      </div>

      <h2>Krav och ansvar som arbetslös</h2>
      <p>Oavsett om du får a-kassa, grundersättning eller försörjningsstöd har du skyldigheter.</p>
      <ul class="space-y-2 mb-6">
         <li class="flex items-center"><span class="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2"></span>Du ska vara aktivt arbetssökande.</li>
         <li class="flex items-center"><span class="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2"></span>Du ska delta i planerade möten och aktiviteter.</li>
         <li class="flex items-center"><span class="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2"></span>Du ska tacka ja till lämpliga jobb.</li>
      </ul>
      <p>Missköter du detta kan all ersättning dras in, vilket snabbt leder till en akut ekonomisk situation.</p>

      <h2>Sammanfattning</h2>
      <p>Skillnaden i trygghet mellan att ha en a-kassa och att stå utan är stor. Som medlem i en a-kassa är din lön försäkrad, medan du utan a-kassa är hänvisad till grundbelopp eller behovsprövat bistånd. Är du idag i arbete rekommenderar vi starkt att du ser över ditt skydd och <a href="/jamfor" class="text-blue-600 hover:underline">jämför a-kassor</a> för att hitta en som passar ditt yrke. Det är en liten kostnad för en stor trygghet.</p>

      <hr class="border-gray-200 my-12" />

      <h2 class="text-2xl font-bold mb-6">FAQ: Arbetslös utan a-kassa och ersättning</h2>

      <div class="space-y-8">
        <div>
           <h3 class="text-lg font-bold text-gray-900 mb-2">Vad händer om man är arbetslös utan a-kassa?</h3>
           <p class="text-gray-700">Om du är arbetslös utan att vara medlem i en a-kassa (eller inte uppfyller kraven) kan du inte få inkomstbaserad ersättning. Du kan däremot ha rätt till grundersättning från Alfa-kassan om du uppfyller arbetsvillkoret. I sista hand kan du behöva söka ekonomiskt bistånd hos kommunen.</p>
        </div>

        <div>
           <h3 class="text-lg font-bold text-gray-900 mb-2">Finns det ersättning om man inte är med i a-kassan?</h3>
           <p class="text-gray-700">Ja, du kan ha rätt till grundersättning. Den betalas oftast ut av Alfa-kassan och kräver att du har arbetat en viss tid innan arbetslösheten. Ersättningsnivån är dock betydligt lägre än den inkomstbaserade a-kassan.</p>
        </div>

        <div>
           <h3 class="text-lg font-bold text-gray-900 mb-2">Vad händer när a-kassan går ut?</h3>
           <p class="text-gray-700">När dina 300 (eller 450) ersättningsdagar är slut upphör a-kassan. Då kan du bli anvisad till jobb- och utvecklingsgarantin via Arbetsförmedlingen, där du kan få aktivitetsstöd från Försäkringskassan. Har du inget sådant skydd kan försörjningsstöd bli aktuellt.</p>
        </div>

        <div>
           <h3 class="text-lg font-bold text-gray-900 mb-2">Kan man få ekonomiskt bistånd som arbetslös?</h3>
           <p class="text-gray-700">Ja, om du helt saknar egna medel och inkomster kan du ansöka om ekonomiskt bistånd (socialbidrag) hos din kommun. Det är en behovsprövad insats som fungerar som ett yttersta skyddsnät och kräver att du står till arbetsmarknadens förfogande.</p>
        </div>

        <div>
           <h3 class="text-lg font-bold text-gray-900 mb-2">Måste man vara inskriven på Arbetsförmedlingen?</h3>
           <p class="text-gray-700">Ja, att vara inskriven på Arbetsförmedlingen är i princip alltid ett grundkrav för de flesta ersättningar vid arbetslöshet, oavsett om det gäller a-kassa, aktivitetsstöd eller ekonomiskt bistånd.</p>
        </div>

        <div>
           <h3 class="text-lg font-bold text-gray-900 mb-2">Kan man gå med i a-kassa när man redan är arbetslös?</h3>
           <p class="text-gray-700">Ja, du kan bli medlem i en a-kassa när som helst, även som arbetslös. Dock krävs det normalt att du har varit medlem i minst 12 månader innan du kan få inkomstbaserad ersättning, så medlemskapet hjälper oftast för framtida trygghet snarare än akut.</p>
        </div>
      </div>

      <div class="bg-gray-50 p-6 rounded-xl mt-8">
        <p class="text-sm text-gray-600 mb-0">Att stå utan a-kassa innebär stor osäkerhet. Det är därför viktigt att känna till sina rättigheter och vilka alternativ som finns. För framtida trygghet är medlemskap i en a-kassa den enskilt viktigaste åtgärden du kan vidta för din privatekonomi.</p>
      </div>
  },
  {
    slug: "hur-skriver-man-ett-bra-cv",
    title: "Hur skriver man ett bra CV? Komplett guide 2026",
    summary: "Lär dig hur du skriver ett bra CV 2026. Struktur, exempel, vanliga misstag och FAQ – allt du behöver för att öka chansen till intervju.",
    image: "/artiklar/skriva-cv-guide.png",
    publishedAt: "2026-01-29",
    faq: [
      {
        question: "Hur skriver man ett CV för Arbetsförmedlingen?",
        answer: "När du skriver CV för Arbetsförmedlingen gäller samma grundprinciper som annars: tydlighet och relevans. Det är extra viktigt att dina kompetenser matchar de yrkeskoder och nyckelord som används i deras system för att du ska bli sökbar för rätt jobb."
      },
      {
        question: "Kan ChatGPT skriva ett CV?",
        answer: "AI-verktyg som ChatGPT kan vara till stor hjälp för att skapa struktur, föreslå formuleringar och rätta texten. Kom dock ihåg att du alltid måste faktagranska innehållet och sätta din personliga prägel på det. Ett 100% AI-genererat CV kan ibland kännas opersonligt."
      },
      {
        question: "Vad ska man aldrig skriva i sitt CV?",
        answer: "Undvik osanna uppgifter, irrelevanta privatlivsdetaljer (som politisk åsikt, religion eller personnummer) och klichéer som inte backas upp av bevis."
      },
      {
        question: "Hur långt ska ett CV vara?",
        answer: "En bra tumregel är 1–2 sidor. Om du har mycket lång erfarenhet kan det vara längre, men sträva alltid efter att hålla det relevant och koncist. Ingen rekryterare vill läsa en roman."
      },
      {
        question: "Vad är 7-sekundersregeln i ett CV?",
        answer: "Det refererar till studier som visar att rekryterare i snitt lägger cirka 7 sekunder på den första granskningen av ett CV. Därför är struktur, tydliga rubriker och en stark sammanfattning avgörande."
      }
    ],
    content: `
      < p class= "lead text-xl text-gray-600 mb-8" > Ett bra CV är din viktigaste nyckel till arbetsmarknaden.Men att sammanfatta hela sitt yrkesliv på några få sidor är ofta svårare än man tror.I denna guide går vi igenom exakt hur du bygger ett CV som tar dig till intervjun.</p>

        < div class= "flex items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100" >
          <span>Publicerad: 29 januari 2026</ span >
  <span class="text-gray-300" >| </span>
  < span class= "font-medium text-blue-600" > Guide </span>
  </div>

  < h2 > Vad är ett bra CV ? </h2>
    < p > Förkortningen CV står för < em > Curriculum Vitae < /em>, vilket betyder "levnadslopp". Men missta det inte för en biografi. Ett bra CV är ett <strong>säljdokument</strong >.Syftet är inte att berätta allt du någonsin gjort, utan att visa varför du är rätt person för just det jobb du söker.</p>

    < p > Ett modernt CV ska vara: </p>
  < ul class= "space-y-2 mb-6" >
  <li class="flex items-center" > <span class="w-2 h-2 bg-green-500 rounded-full mr-3" > </span>Tydligt och lättläst</li >
  <li class="flex items-center" > <span class="w-2 h-2 bg-green-500 rounded-full mr-3" > </span>Relevant för tjänsten</li >
  <li class="flex items-center" > <span class="w-2 h-2 bg-green-500 rounded-full mr-3" > </span>Max 1–2 sidor långt</li >
  </ul>

  < h2 > Grundläggande struktur för ett CV </h2>
  < p > Även om designen kan variera, förväntar sig svenska arbetsgivare en viss struktur.Här är delarna du bör ha med: </p>

  < h3 > 1. Kontaktuppgifter </h3>
  < p > Placera detta högst upp.Inkludera namn, telefonnummer, privat e - postadress och gärna en länk till din LinkedIn - profil. < br > <strong>OBS: </strong> Du behöver <em>inte</em > skriva ditt fullständiga personnummer eller din exakta hemadress i de flesta fall.</p>

  < h3 > 2. Sammanfattning(Profiltext) </h3>
  < p > Inled med 3–5 rader som sammanfattar vem du är, vad du kan och vad du vill.Tänk på detta som din "hiss-pitch".</p>
  < div class= "bg-gray-50 p-4 rounded-lg italic text-gray-600 my-4 border-l-4 border-blue-400" >
  "Driven redovisningsekonom med 5 års erfarenhet av löpande bokföring och bokslut. Expert på Excel och Visma. Söker nu nya utmaningar inom controlling..."
  </div>

  < h3 > 3. Arbetslivserfarenhet </h3>
  < p > Detta är CV: ts hjärta.Lista dina jobb i < strong > omvänd kronologisk ordning < /strong> (senaste jobbet först). För varje roll, ange:</p >
  <ul>
  <li>Titel och Företag </li>
  < li > Tidsperiod(t.ex.jan 2020 – pågående) </li>
  < li > 1–3 punkter om vad du < em > åstadkom < /em>, inte bara vad du gjorde.</li >
  </ul>

  < h3 > 4. Utbildning </h3>
  < p > Även här gäller omvänd kronologisk ordning.Ange skola, utbildningens namn och examensår.Har du akademisk examen behöver du oftast inte ta med gymnasiet.</p>

  < h3 > 5. Färdigheter & IT - kunskaper </h3>
  < p > Lista konkreta kompetenser.Det kan vara språk(Svenska: Modersmål, Engelska: Flytande), programvara(Office - paketet, Photoshop) eller certifikat(Körkort B, Truckkort).</p>

  < h2 > Hur skriver man ett bra CV ? 5 expert - tips </h2>
  < p > Många stirrar sig blinda på layouten, men innehållet är kung.Här är vad proffsen tittar på: </p>

  < h3 > Anpassa ALLTID efter jobbet </h3>
  < p > Det absolut vanligaste misstaget är att skicka samma "standard-CV" till alla jobb.Läs annonsen noga.Vilka ord använder de ? Om de söker efter "kundfokus" och "flexibilitet", se till att dessa ord(eller exempel på dem) finns med i ditt CV.</p>

  < h3 > Fokusera på resultat </h3>
  < p > Istället för att bara skriva "Ansvarig för försäljning", skriv "Ökade försäljningen med 20% under första året".Siffror bygger förtroende.</p>

  < h3 > Språket är viktigt </h3>
  < p > Använd ett enkelt, aktivt och korrekt språk.Stavfel drar ner intrycket direkt.Be alltid någon annan korrekturläsa ditt CV innan du skickar det.</p>

  < h2 > 10 enkla steg till ett bra CV </h2>
  < ol class= "list-decimal pl-5 space-y-3 mb-8" >
  <li>Börja med en stark sammanfattning.</li>
  < li > Anpassa innehållet för varje unik ansökan.</li>
  < li > Lista din erfarenhet i omvänd kronologisk ordning.</li>
  < li > Fokusera på dina prestationer, inte bara arbetsuppgifter.</li>
  < li > Rensa bort gamla eller irrelevanta extrajobb.</li>
  < li > Använd ett aktivt språk(t.ex. "Ledde", "Skapade", "Utvecklade").</li>
  < li > Håll det kort! Max 2 sidor.</li>
  < li > Använd en ren och luftig layout med tydliga rubriker.</li>
  < li > Lägg till ett professionellt foto om du vill(frivilligt i Sverige).</li>
  < li > Korrekturläs, korrekturläs, korrekturläs.</li>
  </ol>

  < h2 > Hur ska ett CV se ut 2026 ? </h2>
    < p > Trender kommer och går.För 2026 ser vi en tydlig återgång till det enkla och funktionella.Rekryterare använder ofta digitala verktyg(ATS) för att skanna CV: n, vilket gör att krångliga layouter med mycket grafik kan ställa till det.</p>

  < div class= "bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 my-6" >
  <h3 class="text-blue-900 font-bold text-lg mt-0 mb-2" > 7 - sekundersregeln </h3>
  < p class= "text-blue-800 mb-0" > Kom ihåg att en rekryterare i snitt lägger < strong > 7 sekunder < /strong> på den första titten. Är ditt CV svårläst åker det i papperskorgen. Tydlighet vinner över "snygg design".</p >
  </div>

  < p class= "text-gray-700 italic mb-8" > Behöver du mer hjälp ? Kika gärna på våra guider om < a href = "/artiklar/vad-ar-akassa" class= "text-blue-600 hover:underline" > a - kassa < /a> och inkomstförsäkring för att säkra din ekonomi medan du söker drömjobbet.</p >

  <div class="bg-gray-50 p-6 rounded-xl mt-12 mb-12" >
  <h3 class="text-xl font-bold mb-4" > Sammanfattning </h3>
  < p > Ditt CV är ditt personliga marknadsföringsverktyg.Genom att vara tydlig, relevant och resultatinriktad ökar du dina chanser markant.Lycka till med jobbsökandet! </p>
  </div>

  < hr class= "border-gray-200 my-12" />

  <h2 class="text-2xl font-bold mb-6" > FAQ: Vanliga frågor om att skriva CV </h2>

  < div class= "space-y-8" >
  <div>
  <h3 class="text-lg font-bold text-gray-900 mb-2" > Hur skriver man ett CV för Arbetsförmedlingen ? </h3>
    < p class= "text-gray-700" > När du skriver CV för Arbetsförmedlingen gäller samma grundprinciper som annars: tydlighet och relevans.Det är extra viktigt att dina kompetenser matchar de yrkeskoder och nyckelord som används i deras system för att du ska bli sökbar för rätt jobb.</p>
    </div>

    < div >
  <h3 class="text-lg font-bold text-gray-900 mb-2" > Kan ChatGPT skriva ett CV ? </h3>
    < p class= "text-gray-700" > AI - verktyg som ChatGPT kan vara till stor hjälp för att skapa struktur, föreslå formuleringar och rätta texten.Kom dock ihåg att du alltid måste faktagranska innehållet och sätta din personliga prägel på det.Ett 100 % AI - genererat CV kan ibland kännas opersonligt.</p>
    </div>

    < div >
  <h3 class="text-lg font-bold text-gray-900 mb-2" > Vad ska man aldrig skriva i sitt CV ? </h3>
    < p class= "text-gray-700" > Undvik osanna uppgifter, irrelevanta privatlivsdetaljer(som politisk åsikt, religion eller personnummer) och klichéer som inte backas upp av bevis.</p>
    </div>

    < div >
  <h3 class="text-lg font-bold text-gray-900 mb-2" > Hur långt ska ett CV vara ? </h3>
    < p class= "text-gray-700" > En bra tumregel är 1–2 sidor.Om du har mycket lång erfarenhet kan det vara längre, men sträva alltid efter att hålla det relevant och koncist.Ingen rekryterare vill läsa en roman.</p>
    </div>

    < div >
  <h3 class="text-lg font-bold text-gray-900 mb-2" > Vad är 7 - sekundersregeln i ett CV ? </h3>
    < p class= "text-gray-700" > Det refererar till studier som visar att rekryterare i snitt lägger cirka 7 sekunder på den första granskningen av ett CV.Därför är struktur, tydliga rubriker och en stark sammanfattning avgörande.</p>
    </div>
  </div>
    `
  },
];

export const articles = rawArticles.sort((a, b) =>
  new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);
