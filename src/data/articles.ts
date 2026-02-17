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
  metaTitle?: string;
  metaDescription?: string;
}

const rawArticles: Article[] = [
  {
    slug: "bakgrundskontroll-vid-jobbsokning",
    title: "Bakgrundskontroll vid jobbsökning – komplett guide till vad arbetsgivare faktiskt ser",
    summary: "Lär dig vad en bakgrundskontroll innebär, vad arbetsgivare får kontrollera, vilka rättigheter du har och hur du kan ligga steget före i rekryteringen.",
    image: "/assets/images/bakgrundskontroll-arbetsgivare.jpg",
    publishedAt: "2026-02-17",
    metaTitle: "Bakgrundskontroll vid jobbsökning – vad ser arbetsgivare? Guide 2026",
    metaDescription: "Komplett guide om bakgrundskontroller vid jobbsökning. Lär dig vad arbetsgivare får kontrollera, dina rättigheter och hur du förbereder dig.",
    faq: [
      {
        question: "Vad är en bakgrundskontroll?",
        answer: "En bakgrundskontroll är en strukturerad verifiering av uppgifter om en arbetssökande. Målet är att säkerställa att kandidaten är den personen den utger sig för att vara och att det inte finns riskfaktorer kopplade till rollen."
      },
      {
        question: "Får arbetsgivare göra bakgrundskontroller utan att berätta det?",
        answer: "Nej. Transparens är en central del av dataskyddslagstiftningen. Du ska normalt informeras om kontrollen, förstå syftet och veta vilka uppgifter som behandlas. I många fall krävs dessutom ett aktivt samtycke."
      },
      {
        question: "Vad kontrolleras i en bakgrundskontroll?",
        answer: "Vanligtvis kontrolleras arbetslivserfarenhet, utbildning och meriter, ekonomisk information (vid ekonomiskt ansvar), offentliga register och i vissa fall brottsrelaterad information. Kontrollen ska vara relevant för tjänsten."
      },
      {
        question: "Är belastningsregister och bakgrundskontroll samma sak?",
        answer: "Nej. Belastningsregister hanteras av Polisen och visar fällande domar, medan en bakgrundskontroll ger en bred helhetsbild som verifierar meriter, kan inkludera ekonomi och bekräftar uppgifter i CV."
      },
      {
        question: "Bör jag göra en bakgrundskontroll på mig själv?",
        answer: "Ja, särskilt om du söker konkurrensutsatta tjänster. Du undviker överraskningar, kan rätta felaktiga uppgifter, signalerar professionalism och minskar stress genom att veta vad arbetsgivaren ser."
      }
    ],
    content: `
      <p class="text-lg leading-relaxed text-slate-700 mb-8">
        Att arbetsgivare genomför bakgrundskontroller har gått från att vara relativt ovanligt till att bli en etablerad del av många rekryteringsprocesser. I takt med att felrekryteringar blivit dyrare och säkerhetskraven högre vill företag fatta mer välgrundade beslut redan innan ett anställningsavtal skrivs på.
      </p>

      <p>För dig som söker jobb innebär det här att din profil granskas mer noggrant än tidigare — men också att du har större möjlighet att själv förbereda dig.</p>

      <p>I den här guiden går vi igenom vad en bakgrundskontroll innebär, vad arbetsgivare får kontrollera, vilka rättigheter du har och hur du kan ligga steget före i rekryteringen.</p>

      <h2 class="text-2xl font-semibold text-slate-900 mb-4 mt-12">Vad är en bakgrundskontroll?</h2>
      <p>En bakgrundskontroll är en strukturerad verifiering av uppgifter om en arbetssökande. Målet är att säkerställa att kandidaten är den personen den utger sig för att vara och att det inte finns riskfaktorer kopplade till rollen.</p>

      <p>Kontrollerna kan vara enkla eller omfattande beroende på tjänst, ansvarsnivå och bransch.</p>

      <div class="border-l-2 border-slate-300 pl-6 my-8">
        <p class="font-medium text-slate-900 mb-3">Vanligtvis handlar det om att bekräfta tre saker:</p>
        <ul class="space-y-2 text-slate-700">
          <li>• Att din arbetshistorik stämmer</li>
          <li>• Att dina meriter är korrekta</li>
          <li>• Att det inte finns ekonomiska eller juridiska omständigheter som kan påverka din lämplighet</li>
        </ul>
      </div>

      <p>För arbetsgivaren handlar detta i grunden om riskhantering. En felrekrytering kan bli mycket kostsam — både ekonomiskt och organisatoriskt.</p>

      <p>För kandidaten handlar det istället om transparens och trovärdighet.</p>

      <p>Den som vill veta vilka uppgifter som kan bli synliga för en arbetsgivare kan med fördel själv beställa en kontroll via <a href="https://belastningsregistret.se" target="_blank" rel="noopener" class="text-blue-600 hover:underline">Belastningsregistret.se</a>, där relevanta uppgifter sammanställs digitalt inför exempelvis en rekryteringsprocess.</p>

      <h2 class="text-2xl font-semibold text-slate-900 mb-4 mt-12">Varför gör arbetsgivare bakgrundskontroller?</h2>
      <p>Det finns flera tydliga skäl till att bakgrundskontroller blivit standard i många organisationer.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div class="border border-slate-200 rounded-lg p-5">
          <h3 class="font-semibold text-slate-900 mb-2">Minskad risk för felrekrytering</h3>
          <p class="text-slate-600 text-sm">Att anställa fel person kan leda till produktionsbortfall, konflikter och i värsta fall säkerhetsproblem.</p>
        </div>
        <div class="border border-slate-200 rounded-lg p-5">
          <h3 class="font-semibold text-slate-900 mb-2">Skydd av känslig information</h3>
          <p class="text-slate-600 text-sm">Roller inom ekonomi, IT, HR och ledning innebär ofta tillgång till affärskritisk data.</p>
        </div>
        <div class="border border-slate-200 rounded-lg p-5">
          <h3 class="font-semibold text-slate-900 mb-2">Lagkrav i vissa yrken</h3>
          <p class="text-slate-600 text-sm">Vissa verksamheter måste enligt lag kontrollera belastningsregister, särskilt när arbetet involverar barn eller utsatta grupper.</p>
        </div>
        <div class="border border-slate-200 rounded-lg p-5">
          <h3 class="font-semibold text-slate-900 mb-2">Ökat fokus på säkerhet</h3>
          <p class="text-slate-600 text-sm">Hotbilden mot företag har förändrats. Interna risker tas i dag på större allvar.</p>
        </div>
      </div>

      <p>Det betyder dock inte att arbetsgivare fritt kan kontrollera vad som helst — varje kontroll måste vara relevant och proportionerlig.</p>

      <h2 class="text-2xl font-semibold text-slate-900 mb-4 mt-12">Vad kontrolleras i en bakgrundskontroll?</h2>
      <p>Exakt innehåll varierar, men några områden är betydligt vanligare än andra.</p>

      <h3 class="text-lg font-semibold text-slate-900 mb-3 mt-8">Arbetslivserfarenhet</h3>
      <p>Arbetsgivaren kan verifiera tidigare anställningar, titlar och tidsperioder. I vissa fall kontaktas även referenser.</p>

      <h3 class="text-lg font-semibold text-slate-900 mb-3 mt-8">Utbildning och meriter</h3>
      <p>Examensbevis och certifieringar kontrolleras för att säkerställa att kompetensen matchar rollen.</p>

      <h3 class="text-lg font-semibold text-slate-900 mb-3 mt-8">Ekonomisk information</h3>
      <p>Främst aktuellt vid ekonomiskt ansvar. Kreditupplysningar kan visa betalningsanmärkningar eller stora skulder.</p>

      <h3 class="text-lg font-semibold text-slate-900 mb-3 mt-8">Offentliga register</h3>
      <p>Folkbokföring, bolagsengagemang och ibland rättsliga processer kan förekomma.</p>

      <h3 class="text-lg font-semibold text-slate-900 mb-3 mt-8">Brottsrelaterad information</h3>
      <p>Detta kräver nästan alltid samtycke och är ofta strikt reglerat.</p>

      <div class="bg-slate-50 border border-slate-200 rounded-lg p-6 my-8">
        <p class="text-slate-700 mb-0">En viktig princip är att kontrollen ska vara <strong class="text-slate-900">relevant för tjänsten</strong>. En omfattande ekonomisk kontroll för ett extrajobb är exempelvis svår att motivera.</p>
      </div>

      <h2 class="text-2xl font-semibold text-slate-900 mb-4 mt-12">Får arbetsgivare göra bakgrundskontroller utan att berätta det?</h2>
      <p class="text-xl font-semibold text-slate-900 mb-4">Kort sagt — nej.</p>

      <p>Transparens är en central del av dataskyddslagstiftningen.</p>

      <p>Du ska normalt:</p>
      <ul class="list-disc list-inside ml-4 space-y-1 mb-6 text-slate-700">
        <li>Informeras om kontrollen</li>
        <li>Förstå syftet</li>
        <li>Veta vilka uppgifter som behandlas</li>
      </ul>

      <p>I många fall krävs dessutom ett aktivt samtycke.</p>

      <h3 class="text-lg font-semibold text-slate-900 mb-3 mt-8">Berättigat intresse – vad betyder det?</h3>
      <p>I vissa situationer kan arbetsgivaren luta sig mot den juridiska grunden "berättigat intresse". Det innebär att behovet av kontroll väger tyngre än integritetsintrånget.</p>

      <p>Men även då gäller tydliga krav:</p>
      <ul class="list-disc list-inside ml-4 space-y-1 mb-6 text-slate-700">
        <li>Kontrollen måste vara nödvändig</li>
        <li>Den ska vara proportionerlig</li>
        <li>Din integritet ska respekteras</li>
      </ul>

      <p>Det är alltså inte en genväg för obegränsad granskning. Du har dessutom alltid rätt att avbryta din ansökan om du inte vill bli kontrollerad.</p>

      <h2 class="text-2xl font-semibold text-slate-900 mb-4 mt-12">Belastningsregister och bakgrundskontroll – inte samma sak</h2>
      <p>Många tror att dessa begrepp betyder samma sak, men skillnaden är stor.</p>

      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="border border-slate-200 rounded-lg p-6">
          <h3 class="font-semibold text-slate-900 mb-4">Belastningsregister</h3>
          <ul class="space-y-2 text-slate-700 text-sm">
            <li>• Hanteras av Polisen</li>
            <li>• Visar fällande domar</li>
            <li>• Är oftast avsett för personligt bruk</li>
            <li>• Få arbetsgivare får kräva det</li>
          </ul>
        </div>
        <div class="border border-slate-200 rounded-lg p-6">
          <h3 class="font-semibold text-slate-900 mb-4">Bakgrundskontroll</h3>
          <ul class="space-y-2 text-slate-700 text-sm">
            <li>• Ger en bred helhetsbild</li>
            <li>• Verifierar meriter</li>
            <li>• Kan inkludera ekonomi</li>
            <li>• Bekräftar uppgifter i CV</li>
          </ul>
        </div>
      </div>

      <p>Det betyder att en kandidat utan brottshistorik fortfarande kan falla på felaktiga meriter — och tvärtom. Rekryterare tittar nästan alltid på helheten.</p>

      <h2 class="text-2xl font-semibold text-slate-900 mb-4 mt-12">Så går en digital bakgrundskontroll till</h2>
      <p>Teknikutvecklingen har gjort processen både snabb och tillförlitlig. Vanligtvis sker följande:</p>

      <div class="space-y-4 my-8">
        <div class="flex gap-4 items-start">
          <div class="flex-shrink-0 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-semibold">1</div>
          <div>
            <h3 class="font-semibold text-slate-900 mb-1">Samtycke</h3>
            <p class="text-slate-600 text-sm">Du godkänner kontrollen digitalt.</p>
          </div>
        </div>
        <div class="flex gap-4 items-start">
          <div class="flex-shrink-0 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-semibold">2</div>
          <div>
            <h3 class="font-semibold text-slate-900 mb-1">Datainsamling</h3>
            <p class="text-slate-600 text-sm">Information hämtas från relevanta databaser och register.</p>
          </div>
        </div>
        <div class="flex gap-4 items-start">
          <div class="flex-shrink-0 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-semibold">3</div>
          <div>
            <h3 class="font-semibold text-slate-900 mb-1">Verifiering</h3>
            <p class="text-slate-600 text-sm">Uppgifter jämförs och granskas.</p>
          </div>
        </div>
        <div class="flex gap-4 items-start">
          <div class="flex-shrink-0 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-semibold">4</div>
          <div>
            <h3 class="font-semibold text-slate-900 mb-1">Rapport</h3>
            <p class="text-slate-600 text-sm">Arbetsgivaren får en strukturerad sammanställning.</p>
          </div>
        </div>
      </div>

      <p>Seriösa aktörer arbetar med höga säkerhetsstandarder och följer GDPR. Du har ofta rätt att begära insyn i resultatet.</p>

      <h2 class="text-2xl font-semibold text-slate-900 mb-4 mt-12">Bör du göra en bakgrundskontroll på dig själv?</h2>
      <p class="text-lg font-semibold text-slate-900 mb-6">Det korta svaret: ja — särskilt om du söker konkurrensutsatta tjänster.</p>

      <div class="border-l-2 border-slate-300 pl-6 my-8">
        <p class="font-medium text-slate-900 mb-4">Fördelarna är flera:</p>
        <ul class="space-y-3 text-slate-700">
          <li>
            <strong class="text-slate-900">Du undviker överraskningar</strong><br/>
            <span class="text-sm">Felaktiga uppgifter förekommer oftare än man tror.</span>
          </li>
          <li>
            <strong class="text-slate-900">Du kan rätta misstag</strong><br/>
            <span class="text-sm">Till exempel fel folkbokföringsadress eller gamla skulduppgifter.</span>
          </li>
          <li>
            <strong class="text-slate-900">Du signalerar professionalism</strong><br/>
            <span class="text-sm">Förberedda kandidater uppfattas ofta som mer seriösa.</span>
          </li>
          <li>
            <strong class="text-slate-900">Du minskar stress</strong><br/>
            <span class="text-sm">Att veta vad arbetsgivaren ser skapar trygghet.</span>
          </li>
        </ul>
      </div>

      <p>Arbetsmarknaden blir allt mer transparent — och kandidater som anpassar sig till det har ett tydligt försprång.</p>

      <h2 class="text-2xl font-semibold text-slate-900 mb-4 mt-12">Påverkar bakgrundskontrollen dina jobbchanser?</h2>
      <p>Ja, men inte automatiskt negativt. Faktum är att många kandidater stärks av processen.</p>

      <p>Det som ofta väger tungt är:</p>
      <ul class="list-disc list-inside ml-4 space-y-1 mb-6 text-slate-700">
        <li>Konsistens i din historik</li>
        <li>Stabil ekonomi (när relevant)</li>
        <li>Tydliga meriter</li>
        <li>Ärlighet</li>
      </ul>

      <p>Rekryterare förstår att människor inte är perfekta. Det som däremot kan skapa oro är motsägelser eller försök att dölja information.</p>

      <p class="text-lg font-medium text-slate-900 mt-6">Transparens bygger förtroende.</p>

      <h2 class="text-2xl font-semibold text-slate-900 mb-4 mt-12">Hur länge sparas uppgifterna?</h2>
      <p>Enligt dataskyddsregler ska personuppgifter inte lagras längre än nödvändigt.</p>

      <p>I praktiken innebär det ofta:</p>
      <ul class="list-disc list-inside ml-4 space-y-1 mb-6 text-slate-700">
        <li>Under rekryteringsprocessen</li>
        <li>Kort därefter vid avslutad process</li>
      </ul>

      <p>Organisationer måste kunna motivera lagringen och radera uppgifter när behovet upphör.</p>

      <h2 class="text-2xl font-semibold text-slate-900 mb-4 mt-12">Framtiden: bakgrundskontroller blir allt vanligare</h2>
      <p>Mycket tyder på att bakgrundskontroller kommer fortsätta öka — inte minska.</p>

      <p>Drivkrafterna är tydliga:</p>
      <ul class="list-disc list-inside ml-4 space-y-1 mb-6 text-slate-700">
        <li>Digital tillgång till data</li>
        <li>Högre säkerhetskrav</li>
        <li>Mer komplex arbetsmarknad</li>
        <li>Ökat ansvar i många roller</li>
      </ul>

      <p>Samtidigt blir kandidater mer medvetna och proaktiva. Rekrytering är inte längre en envägskontroll — utan en process där båda parter söker trygghet.</p>

      <div class="bg-slate-900 rounded-lg p-8 my-12 text-white">
        <h3 class="text-white text-2xl font-semibold mb-4">Sammanfattning</h3>
        <p class="text-slate-300 mb-6">Bakgrundskontroller är i dag en naturlig del av arbetsmarknaden. För arbetsgivare handlar det om riskminimering. För dig som kandidat handlar det om att vara förberedd.</p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-white/10 rounded-lg p-4">
            <p class="font-semibold mb-1">Kontroller måste vara relevanta</p>
            <p class="text-slate-300 text-sm">Arbetsgivaren får inte kontrollera vad som helst</p>
          </div>
          <div class="bg-white/10 rounded-lg p-4">
            <p class="font-semibold mb-1">Du ska informeras</p>
            <p class="text-slate-300 text-sm">Transparens är en grundläggande rättighet</p>
          </div>
          <div class="bg-white/10 rounded-lg p-4">
            <p class="font-semibold mb-1">Samtycke krävs ofta</p>
            <p class="text-slate-300 text-sm">Särskilt för känsliga uppgifter</p>
          </div>
          <div class="bg-white/10 rounded-lg p-4">
            <p class="font-semibold mb-1">Du har rättigheter</p>
            <p class="text-slate-300 text-sm">Rätt till insyn och rättelse</p>
          </div>
        </div>
      </div>

      <p class="text-lg text-slate-700 italic">Den som förstår hur processen fungerar har betydligt bättre förutsättningar att lyckas i sin nästa rekrytering.</p>
    `
  },
  {
    slug: "a-kassa-for-studenter",
    title: "A-kassa för studenter",
    summary: "Kan man gå med i a-kassa som student? Här får du koll på reglerna, medlemskap, a-kassa efter examen och om du kan få ersättning under studier.",
    image: "/artiklar/a-kassa-for-studenter.jpg",
    publishedAt: "2026-01-17",
    metaTitle: "A-kassa för studenter – regler, medlemskap & a-kassa efter studier",
    metaDescription: "Kan man gå med i a-kassa som student? Här får du koll på reglerna, medlemskap, a-kassa efter examen och om du kan få ersättning under studier.",
    faq: [
      {
        question: "Kan man gå med i a-kassan som student?",
        answer: "Ja, i många fall kan du gå med i a-kassan som student – särskilt om du jobbar extra samtidigt som du studerar eller om du har jobbat och fått lön innan du började studera. Om du aldrig har arbetat alls kan vissa a-kassor kräva att du först får jobberfarenhet innan du kan bli medlem."
      },
      {
        question: "Varför är det bra att gå med i a-kassan så tidigt som möjligt?",
        answer: "Det kan vara smart att bli medlem så tidigt som möjligt eftersom medlemskapet ofta behöver ha pågått under en längre tid för att du ska kunna få högsta möjliga ersättning om du blir arbetslös efter studierna. Ju tidigare du går med, desto bättre kan du hinna uppfylla medlemsvillkoren."
      },
      {
        question: "Kan jag få a-kassa efter studier?",
        answer: "Ja, du kan få a-kassa om du blir arbetslös efter studierna, men du behöver uppfylla villkoren som a-kassan ställer – exempelvis att du haft inkomster och arbetat tillräckligt under en viss period innan du blev arbetslös. A-kassan tittar vanligtvis på en ramtid bakåt i tiden för att bedöma om du uppfyller villkoren."
      },
      {
        question: "Vad menas med ramtid och överhoppningsbar tid?",
        answer: "Ramtid är den period som a-kassan normalt räknar bakåt för att se om du har arbetat och haft tillräckliga inkomster. Studier på heltid kan i många fall räknas som överhoppningsbar tid, vilket innebär att a-kassan kan hoppa över studietiden och istället räkna på inkomster från månaderna före studierna."
      },
      {
        question: "Vilken a-kassa ska jag välja som student?",
        answer: "Som student är det oftast bäst att välja den a-kassa som passar branschen eller yrket du utbildar dig till. Om du läser en bred utbildning eller är osäker på vilket yrke du kommer jobba inom kan du jämföra flera alternativ eller välja en fristående a-kassa."
      },
      {
        question: "Kan man få a-kassa samtidigt som man studerar?",
        answer: "Generellt kan du inte få a-kassa samtidigt som du studerar, eftersom du normalt inte räknas som fullt tillgänglig för arbetsmarknaden. Det kan dock finnas undantag i vissa situationer, exempelvis vid deltidsstudier eller vissa arbetsmarknadsinsatser. Reglerna kan variera och a-kassan gör alltid en individuell bedömning."
      },
      {
        question: "Kan jag få a-kassa om jag får CSN?",
        answer: "Om du får studiestöd från CSN räknas du vanligtvis som studerande och då kan du normalt inte få a-kassa samtidigt. Det beror på att du inte anses stå helt till arbetsmarknadens förfogande när du studerar med studiestöd."
      },
      {
        question: "Kan man pausa a-kassan för att studera?",
        answer: "Ja, om du börjar studera kan du i vissa fall ta ett uppehåll från att söka ersättning. Det är viktigt att du fortsätter vara medlem i a-kassan under hela studieperioden om du vill behålla ditt medlemskap och inte riskera att börja om från början med medlemstiden."
      }
    ],
    content: `
      <p class="text-xl leading-relaxed text-slate-600 mb-12 italic border-l-4 border-blue-500 pl-6">
        Att navigera i reglerna kring a-kassa som student kan vara utmanande, men det är ett av de mest strategiska besluten du kan fatta för din framtida ekonomiska trygghet. Denna artikel förklarar hur medlemskap under studietiden fungerar, när du kan få ersättning och hur du planerar för livet efter examen.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm not-prose">
        <div class="space-y-3">
          <h3 class="text-lg font-bold text-slate-900 mb-0 flex items-center gap-2">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
            Gå med tidigt
          </h3>
          <p class="text-slate-600 text-sm leading-relaxed mb-0">Ansök om medlemskap så fort du börjar jobba extra. Varje månad som medlem räknas mot de 12 månader som krävs för inkomstbaserad ersättning.</p>
        </div>
        <div class="space-y-3">
          <h3 class="text-lg font-bold text-slate-900 mb-0 flex items-center gap-2">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">2</span>
            Behåll medlemskapet
          </h3>
          <p class="text-slate-600 text-sm leading-relaxed mb-0">Gå aldrig ur under studietiden. Ett glapp på bara en dag kan nollställa din intjänade tid och kosta dig rätten till full ersättning.</p>
        </div>
        <div class="space-y-3">
          <h3 class="text-lg font-bold text-slate-900 mb-0 flex items-center gap-2">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">3</span>
            Studier är överhoppningsbara
          </h3>
          <p class="text-slate-600 text-sm leading-relaxed mb-0">Fullföljda studier kan hoppas över i ramtiden. Det betyder att a-kassan kan titta på vad du gjorde innan du började plugga för att ge ersättning.</p>
        </div>
        <div class="space-y-3">
          <h3 class="text-lg font-bold text-slate-900 mb-0 flex items-center gap-2">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">4</span>
            Varning för CSN
          </h3>
          <p class="text-slate-600 text-sm leading-relaxed mb-0">Du kan normalt inte få både CSN och a-kassa samtidigt. Som heltidsstudent anses du inte stå till arbetsmarknadens förfogande.</p>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-slate-900 mb-6">Kan man gå med i a-kassan som student?</h2>
      <p>Många studenter lever i tron att a-kassan bara är till för dem som har fasta jobb och en lång karriär bakom sig. Sanningen är dock att de svenska a-kassorna är utformade för att ge trygghet åt alla som är verksamma på arbetsmarknaden – även på deltid eller under studieperioder. Frågan "kan jag bli medlem?" besvaras oftast med ett ja, så länge du har någon form av arbetsanknytning.</p>
      
      <p>För att bli medlem i en a-kassa krävs det normalt att du har arbetat, eller arbetar just nu. Om du har ett extrajobb på kvällar eller helger, ett sommarjobb i bagaget eller nyligen har avslutat en anställning har du den grund som krävs för att kunna <strong>gå med i a-kassa under studier</strong>. Arbetskravet för medlemskap är ofta mycket lägre än vad många tror.</p>

      <div class="bg-blue-50 border-l-4 border-blue-600 p-8 my-12 rounded-r-2xl shadow-sm">
        <p class="text-blue-900 font-bold mb-4 text-xl">Pro-tip för studenter:</p>
        <p class="text-blue-800 text-lg leading-relaxed m-0">Även om du bara jobbar några timmar i månaden, så börjar klockan ticka för ditt medlemsvillkor från den dag du går med. Detta är avgörande för vad som händer den dagen din utbildning är slut.</p>
      </div>

      <h2 class="text-3xl font-bold text-slate-900 mb-6">Varför är det smart att gå med så tidigt som möjligt?</h2>
      <p>Tid är den viktigaste faktorn när det gäller arbetslöshetsförsäkringen. I det svenska systemet finns det nämligen något som heter <em>medlemsvillkor</em>. För att du ska ha rätt till ersättning som baseras på din tidigare inkomst (upp till 80 % av din lön) måste du ha varit medlem i en a-kassa i minst 12 sammanhängande månader innan du blir arbetslös.</p>

      <p>Här ser vi den största fördelen med att välja en <strong>a-kassa för studenter</strong> i god tid. Om du går med redan under första eller andra året på din utbildning, har du garanterat passerat 12-månadersgränsen när du tar din examen.</p>

      <div class="flex flex-col md:flex-row gap-8 my-16 not-prose">
        <div class="flex-1 bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
          <h4 class="font-bold text-blue-600 mb-4 uppercase tracking-wider text-xs">Scenario A: Gått med tidigt</h4>
          <p class="text-2xl font-bold text-slate-900 mb-4">80% ersättning</p>
          <p class="text-sm text-slate-500 leading-relaxed">Du har varit medlem >12 månader. Du får ersättning baserat på din lön innan studierna eller ditt extrajobb.</p>
        </div>
        <div class="flex-1 bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
          <h4 class="font-bold text-slate-400 mb-4 uppercase tracking-wider text-xs">Scenario B: Glömt gå med</h4>
          <p class="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            Grundersättning
            <span class="text-sm font-normal text-red-500 underline">Lågt belopp</span>
          </p>
          <p class="text-sm text-slate-500 leading-relaxed">Du får endast grundbeloppet från Alfa-kassan (ca 11 220 kr/mån) eftersom du saknar medlemstid.</p>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-slate-900 mb-6">Studier är överhoppningsbara</h2>
      <p>När examensdagen passerat och studierna är avslutade börjar din nya tillvaro som arbetssökande. Det är i detta scened som din <strong>a-kassa efter studier</strong> blir din ekonomiska livlina. För att faktiskt få ut pengar räcker det dock inte bara med att ha varit medlem; du måste också uppfylla ett <em>inkomstvillkor</em> eller <em>arbetsvillkor</em>.</p>

      <p>Detta villkor innebär att du ska ha arbetat i viss omfattning under de senaste 12 månaderna innan du blev arbetslös. Men tack vare reglerna om <em>överhoppningsbar tid</em>, kan a-kassan "hoppa över" tiden du har studerat när de räknar på din arbetstid.</p>

      <div class="bg-slate-900 rounded-3xl p-10 my-16 text-white text-center shadow-xl">
        <h3 class="text-white text-3xl mb-6">Bygg din framtida trygghet idag</h3>
        <p class="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Se a-kassan som en del av din studieplanering. Gå med så fort du kan, välj en kassa som passar din framtida bransch, och stanna kvar som medlem genom hela utbildningen.</p>
        <div class="bg-white/10 h-px w-24 mx-auto mb-10"></div>
        <p class="text-blue-400 font-bold uppercase tracking-[0.2em] text-sm">Välja A-kassa Redaktionen</p>
      </div>
    `
  },
  {
    slug: "hur-skriver-man-ett-bra-cv",
    title: "Hur skriver man ett bra CV? Komplett guide 2026",
    summary: "Lär dig hur du skriver ett bra CV 2026. Struktur, exempel, vanliga misstag och FAQ – allt du behöver för att öka chansen till intervju.",
    image: "/artiklar/skriva-cv-guide.png",
    publishedAt: "2026-01-29",
    faq: [
      {
        question: "Vad är ett bra CV?",
        answer: "Ett bra CV är tydligt, relevant för tjänsten och oftast max 1-2 sidor långt. Det ska fungera som ett säljdokument som visar varför du är rätt för jobbet."
      },
      {
        question: "Ska man ha med foto på sitt CV?",
        answer: "I Sverige är det vanligt och ofta positivt med ett professionellt foto, men det är absolut inget krav."
      },
      {
        question: "Hur långt ska ett CV vara?",
        answer: "Sikta på 1-2 sidor. Om du har mycket erfarenhet, fokusera på de senaste och mest relevanta rollerna."
      }
    ],
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Ett bra CV är din viktigaste nyckel till arbetsmarknaden. Men att sammanfatta hela sitt yrkesliv på några få sidor är ofta svårare än man tror. I denna guide går vi igenom exakt hur du bygger ett CV som tar dig till intervjun.</p>

      <div class="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
        <span>Publicerad: 29 januari 2026</span>
        <span class="text-gray-300">|</span>
        <span class="font-medium text-blue-600">Guide</span>
      </div>

      <h2>Vad är ett bra CV?</h2>
      <p>Förkortningen CV står för <em>Curriculum Vitae</em>, vilket betyder "levnadslopp". Men missta det inte för en biografi. Ett bra CV är ett <strong>säljdokument</strong>. Syftet är inte att berätta allt du någonsin gjort, utan att visa varför du är rätt person för just det jobb du söker.</p>

      <p>Ett modernt CV ska vara:</p>
      <ul class="space-y-2 mb-6">
        <li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Tydligt och lättläst</li>
        <li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Relevant för tjänsten</li>
        <li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Max 1–2 sidor långt</li>
      </ul>

      <h2>Grundläggande struktur för ett CV</h2>
      <p>Även om designen kan variera, förväntar sig svenska arbetsgivare en viss struktur. Här är delarna du bör ha med:</p>
      
      <h3>1. Kontaktuppgifter</h3> 
      <p>Namn, telefonnummer, e-post och eventuellt länk till LinkedIn. Du behöver inte skriva ut hela din hemadress eller personnummer.</p>

      <h3>2. Sammanfattning (Profiltext)</h3>
      <p>Inled med 2-3 meningar som beskriver vem du är och vad du kan bidra med. Detta är din "hiss-pitch".</p>
      <div class="bg-blue-50 p-4 rounded-lg text-sm text-blue-800 mb-4">
        <strong>Exempel:</strong> "Engagerad butikssäljare med 5 års erfarenhet av kundservice och lagerhantering. Brinner för att ge kunden en upplevelse i världsklass."
      </div>

      <h3>3. Arbetslivserfarenhet</h3>
      <p>Listas i <strong>omvänd kronologisk ordning</strong> (senaste jobbet först). För varje roll, ange:</p>
      <ul class="list-disc list-inside ml-4 space-y-1 mb-4">
        <li>Titel & Arbetsgivare</li>
        <li>Tidsperiod</li>
        <li><strong>Resultat och ansvar</strong></li>
      </ul>

      <h2>5 vanliga misstag att undvika</h2>
      <div class="grid md:grid-cols-2 gap-4 mb-8">
        <div class="border border-red-100 bg-red-50 p-4 rounded-xl">
          <h4 class="font-bold text-red-700 mb-2">För långt</h4>
          <p class="text-sm text-red-900">Håll det till max 2 sidor. Rekryterare skumläser snabbt.</p>
        </div>
        <div class="border border-red-100 bg-red-50 p-4 rounded-xl">
          <h4 class="font-bold text-red-700 mb-2">Stavfel</h4>
          <p class="text-sm text-red-900">Ger ett slarvigt intryck. Läs igenom noga!</p>
        </div>
      </div>

      <div class="bg-indigo-900 text-white p-8 rounded-2xl text-center mt-12">
        <h3 class="text-2xl font-bold mb-4 text-white">Vill du veta hur bra ditt CV är?</h3>
        <p class="mb-6 opacity-90">Vår nya AI-tjänst granskar ditt CV på sekunder och ger dig konkreta förbättringsförslag. Helt gratis.</p>
        <a href="/hur-bra-ar-mitt-cv" class="inline-block bg-white text-indigo-900 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors">Testa CV-analys nu</a>
      </div>
    `
  },
  {
    slug: "bingohall-lon-okning",
    title: "Så mycket höjs lönen för anställda på bingohallar 2026",
    summary: "Anställda på bingohallar har fått ett nytt kollektivavtal som innebär tydliga förbättringar – både när det gäller lön och ersättning för arbetstid.",
    image: "/artiklar/bingohall-salary.jpg",
    publishedAt: "2025-12-29",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Anställda på bingohallar har fått ett nytt kollektivavtal som innebär tydliga förbättringar – både när det gäller lön och ersättning för arbetstid. För dig som arbetar inom bingoverksamhet, eller funderar på att göra det, är avtalet en viktig signal om villkoren i branschen.</p>

      <h2>Löneökning med totalt 1 920 kronor</h2>
      <p>Det nya avtalet sträcker sig över två år och ger sammanlagda löneökningar på 1 920 kronor för heltidsanställda. Fördelningen ser ut enligt följande:</p>
      <ul class="space-y-2 mb-6">
        <li class="flex items-center"><span class="font-bold w-24 text-green-700">1 apr 2025:</span> +1 000 kronor/månad</li>
        <li class="flex items-center"><span class="font-bold w-24 text-green-700">1 apr 2026:</span> +920 kronor/månad</li>
      </ul>

      <h2>Bättre villkor för arbetstid och OB</h2>
      <p>Utöver de rena löneökningarna innehåller avtalet även justeringar i ersättningen för obekväm arbetstid (OB). Eftersom många bingohallar har öppet sent på kvällar och helger är detta en betydande del av den faktiska inkomsten för personalen.</p>
      
      <h3>Viktiga punkter i avtalet:</h3>
      <ul class="list-disc list-inside ml-4 space-y-2 mb-6">
        <li>Höjda lägstalöner för nyanställda.</li>
        <li>Tydligare regler kring schemaläggning och framförhållning.</li>
        <li>Förbättrat försäkringsskydd vid sjukdom och arbetsskada.</li>
      </ul>

      <p>För dig som är anställd innebär detta inte bara mer pengar i plånboken, utan också en högre SGI (Sjukpenninggrundande inkomst), vilket i sin tur kan påverka din framtida ersättning från a-kassan om du skulle bli arbetslös.</p>
    `
  },
  {
    slug: "darfor-behover-du-en-inkomstforsakring",
    title: "Därför behöver du en inkomstförsäkring som komplement till a-kassan",
    summary: "A-kassan har ett tak för hur mycket ersättning du kan få. Lär dig hur en inkomstförsäkring kan säkra upp till 80% av din faktiska lön om du blir arbetslös.",
    image: "/artiklar/inkomstforsakring-guide.png",
    publishedAt: "2024-03-15",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">För många räcker inte den vanliga a-kassan till för att täcka de fasta utgifterna vid en eventuell arbetslöshet. Det är här inkomstförsäkringen kommer in i bilden – ett komplement som kan rädda din privata ekonomi.</p>
      
      <h2>Vad är en inkomstförsäkring?</h2>
      <p>En inkomstförsäkring är en försäkring som kompletterar ersättningen från a-kassan. Medan a-kassan har ett tak (för närvarande 26 400 kr per månad före skatt de första 100 dagarna), kan en inkomstförsäkring täcka upp till 80 % av din faktiska lön, även om du tjänar betydligt mer än taket.</p>

      <h2>Varför räcker inte a-kassan?</h2>
      <p>A-kassans tak innebär att alla som tjänar mer än ca 33 000 kr i månaden får en ersättning som är lägre än 80 % av deras lön. För en person som tjänar 45 000 kr innebär det ett enormt inkomsttapp om inkomstförsäkring saknas.</p>

      <h3>Fördelar med inkomstförsäkring:</h3>
      <ul class="list-disc list-inside ml-4 space-y-2 mb-6">
        <li><strong>Behåll din livsstil:</strong> Få ut upp till 80 % av din lön upp till extremt höga belopp (ofta 100 000 kr+).</li>
        <li><strong>Trygghet för familjen:</strong> Slipp oroa dig för att behöva sälja bostaden vid tillfällig arbetslöshet.</li>
        <li><strong>Karriärstöd:</strong> Ofta ingår coaching och hjälp att hitta nytt jobb.</li>
      </ul>

      <p>De flesta fackförbund erbjuder en inkomstförsäkring som ingår i medlemskapet, men det går även att teckna privata alternativ om du väljer att står utanför facket men ändå vill ha tryggheten.</p>
    `
  },
  {
    slug: "inflation-akassa-paverkan",
    title: "Inflationens effekt na a-kassan – så mycket minskar din ersättning",
    summary: "Inflation urholkar värdet av din ersättning. Vi förklarar varför taket i a-kassan blir allt viktigare att bevaka under tider med hög inflation.",
    image: "/artiklar/inflation.png",
    publishedAt: "2025-01-10",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Inflation urholkar värdet av våra pengar. Det gäller lönen, men i allra högsta grad också ersättningen från a-kassan. Om taket i a-kassan ligger stilla medan priserna ökar, får du som arbetslös reellt sett mindre pengar att röra dig med för varje månad som går.</p>
      
      <h2>Reallönesänkning för arbetslösa</h2>
      <p>När inflationen ligger na höga nivåer (t.ex. 5-10%) minskar köpkraften drastiskt. Taket i a-kassan (26 400 kr före skatt) har inte indexerats automatiskt i takt med inflationen historiskt sett. Detta skapar ett växande glapp mellan vad det kostar att leva och den ersättning man får.</p>

      <h2>Inkomstförsäkring blir viktigare</h2>
      <p>I tider av hög inflation blir en inkomstförsäkring ännu mer central. Eftersom den baseras na din faktiska lön vid ansökningstillfället (eller den lön du försäkrat), skyddar den dig mot att "fastna" i a-kassans låga tak.</p>

      <h3>3 tips för att skydda din ekonomi:</h3>
      <ul class="list-disc list-inside ml-4 space-y-2 mb-6">
        <li>Se över din inkomstförsäkring – täcker den din nuvarande lön efter senaste lönehöjningen?</li>
        <li>Håll koll na a-kassans regler – riksdagen kan besluta om tillfälliga höjningar av taket.</li>
        <li>Bygg en buffert – a-kassan bör aldrig vara din enda livlina.</li>
      </ul>
    `
  },
  {
    slug: "byta-karriar-2025-trygghet",
    title: "Byta bransch 2026? Så behåller du din SGI och a-kassa",
    summary: "Funderar du på att sadla om? Det är viktigt att du inte hamnar mellan stolarna. Här är checklistan för att byta jobb säkert utan att nollställa din ersättning.",
    image: "/artiklar/career-switch.png",
    publishedAt: "2025-02-01",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Att byta karriär är spännande, med det finns fallgropar. En av de vanligaste frågorna vi får är: "Vad händer med min a-kassa om jag säger upp mig själv för att studera eller börja na nytt?"</p>
      
      <h2>Säga upp mig själv – karensregler</h2>
      <p>Om du säger upp dig själv utan vad a-kassan anser vara ett "giltigt skäl" blir du avstängd från ersättning i <strong>45 ersättningsdagar</strong>. Det motsvarar ungefär 9-10 veckor utan en enda krona. Det är därför livsviktigt att ha en plan och en ekonomisk buffert innan du tar steget.</p>

      <h2>Behåll din SGI (Sjukpenninggrundande inkomst)</h2>
      <p>För att inte nollställa din SGI hos Försäkringskassan måste du se till att skydda den. Om du slutar jobba för att studera med CSN är din SGI oftast skyddad, med om du bara tar en paus utan ersättning kan den nollställas.</p>

      <h3>Checklista för karriärbytare:</h3>
      <ul class="list-disc list-inside ml-4 space-y-2 mb-6">
        <li><strong>Avsluta inte medlemskapet:</strong> Behåll ditt medlemskap i a-kassan även under studietid eller mellan jobb.</li>
        <li><strong>Anmäl dig na Arbetsförmedlingen:</strong> Gör detta första dagen du är utan jobb, även om du har karens.</li>
        <li><strong>Kolla ombytesskydd:</strong> Vissa kollektivavtal har omställningsstöd som kan hjälpa dig ekonomiskt.</li>
      </ul>
    `
  },
  {
    slug: "a-kassa-for-gigarbetare-och-frilansare",
    title: "A-kassa för frilansare och gig-jobbare – så funkar det 2026",
    summary: "Arbetsmarknaden förändras och allt fler jobbar projektbaserat. Här är guiden för dig som är giggare, konsult eller egenanställd.",
    image: "/artiklar/digital-nomad.png",
    publishedAt: "2025-02-20",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Gig-ekonomin växer lavinartat, med det svenska trygghetssystemet bygger fortfarande i mångt och mycket na den traditionella tillsvidareanställningen. Som frilansare eller gig-arbetare måste du vara extra vaksam för att inte hamna i kläm.</p>
      
      <h2>Anställd eller Företagare i a-kassans ögon?</h2>
      <p>Räknas du som anställd (t.ex. via egenanställningsföretag som Frilans Finans) eller driver du ett eget aktiebolag? Reglerna skiljer sig åt markant:</p>
      <ul class="list-disc list-inside ml-4 space-y-2 mb-6">
        <li><strong>Egenanställda:</strong> Ses ofta som anställda, med a-kassan granskar varje uppdrag.</li>
        <li><strong>Företagare:</strong> För att få ersättning måste företaget oftast vara vilande (ingen aktivitet alls).</li>
      </ul>

      <h2>A-kassor som förstår gig-ekonomin</h2>
      <p>Vissa a-kassor har specialiserat sig na flexibla arbetsformer. Om du arbetar inom media, IT eller som konsult kan det vara smart att välja en kassa som har vana av att hantera medlemmar med many korta uppdrag istället för en fast anställning.</p>
    `
  },
  {
    slug: "student-till-jobb-guide",
    title: "Från examen till anställning – din guide till a-kassan",
    summary: "Grattis till examen! Men vad händer om du inte får jobb direkt? Så här kvalificerar du dig för a-kassa som nyexaminerad.",
    image: "/artiklar/student.png",
    publishedAt: "2025-06-05",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Som student har du oftast levt na CSN. När du tar examen står du inför ett glapp innan första lönen kommer in na kontot. Kan du få a-kassa direkt efter examen?</p>
      
      <h2>Grundregeln: Du måste ha arbetat tidigare</h2>
      <p>A-kassa baseras na arbete, inte studier. För att få ersättning måste du uppfylla det så kallade <strong>arbetsvillkoret</strong>. Det innebär att du ska ha arbetat minst 60 timmar per månad i sex månader under det senaste året.</p>

      <h2>Överhoppningsbar tid – din räddning</h2>
      <p>Studier räknas ofta som "överhoppningsbar tid". Det betyder att a-kassan kan titta na vad du gjorde <em>innan</em> du började plugga (upp till 5 år tillbaka). Om du jobbade extra under sommaren eller innan studierna kan du ha rätt till ersättning baserat na det.</p>

      <h3>Viktigt att göra som nyexaminerad:</h3>
      <ol class="list-decimal list-inside ml-4 space-y-2 mb-6">
        <li>Anmäl dig na Arbetsförmedlingen första dagen efter examen.</li>
        <li>Skicka in arbetsintyg från tidigare arbetsgivare till din a-kassa.</li>
        <li>Ansök om ersättning även om du är osäker – det skadar aldrig att pröva.</li>
      </ol>
    `
  },
  {
    slug: "chat-noir-kollektivavtal",
    title: "Historiskt kollektivavtal för Chat Noir i Göteborg",
    summary: "Efter flera års avslag har Hotell- och restaurangfacket nu tecknat kollektivavtal med strippklubben Chat Noir. Ett viktigt steg för arbetsrätten.",
    image: "/artiklar/chat-noir-kollektivavtal.png",
    publishedAt: "2025-12-20",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Hotell- och restaurangfacket (HRF) har nu tecknat ett historiskt kollektivavtal med Chat Noir i Göteborg. Detta beslut markerar en viktig vändpunkt för arbetsrätten inom nattklubbs- och underhållningsbranschen.</p>
      
      <h2>Vad innebär detta för personalen?</h2>
      <p>Genom avtalet omfattas nu personal i bar, kök och servering av samma trygghet som gäller na övriga svenska krogar. Det handlar om avtalsenliga löner, försäkringar och – viktigast av allt i detta sammanhang – rätt till tjänstepension och tydliga underlag för a-kassa.</p>

      <h2>Ett erkännande av branschen</h2>
      <p>Att fackförbundet väljer att teckna avtal innebär att verksamheten ses som en reguljär arbetsplats med krav na schyssta villkor. Tidigare har personalen stått utanför det skyddsnät som kollektivavtal ger, vilket gjort det svårare att styrka inkomst och arbetstid vid eventuell arbetslöshet.</p>
    `
  },
  {
    slug: "arbetslos-utan-akassa",
    title: "Arbetslös utan a-kassa? Här är alternativen och stödet som finns",
    summary: "Står du utanför a-kassan och har blivit av med jobbet? Vi förklarar vad Alfa-kassan är och hur du kan söka ekonomiskt bistånd.",
    image: "/artiklar/arbetslos-utan-akassa.png",
    publishedAt: "2024-01-25",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Står du utanför a-kassan och har blivit av med jobbet? Det är en tuff situation, med du är inte helt utan alternativ. Här går vi igenom vad som gäller för dig som inte är medlem i en a-kassa.</p>
      
      <h2>Alfa-kassan: Grundersättning för alla</h2>
      <p>Även om du inte är medlem i någon specifik a-kassa kan du ansöka om <strong>grundersättning</strong> hos Alfa-kassan. För att få detta måste du uppfylla arbetsvillkoret och vara över 20 år. Grundersättningen är betydligt lägre än den inkomstbaserade (max ca 11 220 kr/månad före skatt), med det är en viktig hjälp.</p>

      <h2>Ekonomiskt bistånd (Försörjningsstöd)</h2>
      <p>Om ersättningen från Alfa-kassan inte räcker, eller om du inte uppfyller kraven för den, kan du vända dig till socialtjänsten i din kommun för att ansöka om ekonomiskt bistånd. De ställer krav na att du är inskriven na Arbetsförmedlingen och aktivt söker jobb.</p>

      <h3>Gör detta direkt:</h3>
      <ul class="list-disc list-inside ml-4 space-y-2 mb-6">
        <li>Skriv in dig na Arbetsförmedlingen första dagen.</li>
        <li>Kontakta Alfa-kassan för att se om du har rätt till grundersättning.</li>
        <li>Gå med i en a-kassa idag – det hjälper inte för din nuvarande situation, med skyddar dig inför framtiden.</li>
      </ul>
    `
  },
  {
    slug: "byta-akassa-guide",
    title: "Byta a-kassa: Så gör du för att inte förlora din medlemsperiod",
    summary: "Planerar du att byta yrke? Här är guiden för hur du byter a-kassa smidigt utan att riskera glapp i din försäkringsperiod.",
    image: "/artiklar/byta-akassa.png",
    publishedAt: "2024-02-20",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Planerar du att byta yrke eller har du fått nytt jobb i en annan bransch? Att byta a-kassa är enkelt, med det finns en kritisk detalj: du får aldrig ha ett glapp mellan medlemskapen.</p>
      
      <h2>Byta a-kassa sömlöst – steg för steg</h2>
      <p>För att behålla din intjänade tid (vilket är avgörande för att få inkomstbaserad ersättning) måste du ha varit medlem i en a-kassa i 12 månader utan avbrott. Så här gör du ett godkänt byte:</p>
      
      <ol class="list-decimal list-inside ml-4 space-y-2 mb-6">
        <li><strong>Ansök till den nya kassan:</strong> Gör detta först. Ange vilket datum du vill bli medlem (oftast den 1:a i nästa månad).</li>
        <li><strong>Ge fullmakt:</strong> De flesta a-kassor kan hjälpa dig att avsluta den gamla kassan automatiskt om du ger dem fullmakt.</li>
        <li><strong>Dubbelkolla datumen:</strong> Se till att utträdet ur den gamla kassan sker sista dagen i månaden och inträdet i den nya sker första dagen i nästa månad.</li>
      </ol>

      <h2>Vad händer om jag glömmer betala eller får glapp?</h2>
      <p>Om du får ens en dags glapp mellan dina medlemskap nollställs din medlemsperiod. Det innebär att du måste vara medlem i 12 nya månader innan du har rätt till inkomstbasrad ersättning igen. Var därför extremt noggrann.</p>
    `
  }
];

export const articles = rawArticles.sort((a, b) =>
  new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);
