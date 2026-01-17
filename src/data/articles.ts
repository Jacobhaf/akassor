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
      <p class="lead text-xl text-gray-600 mb-8">Att navigera i reglerna kring a-kassa som student kan vara utmanande, men det är ett av de mest strategiska besluten du kan fatta för din framtida ekonomiska trygghet. Denna artikel förklarar hur medlemskap under studietiden fungerar, när du kan få ersättning och hur du planerar för livet efter examen. Vi guidar dig genom allt från överhoppningsbar tid till valet av rätt a-kassa.</p>

      <div class="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-12">
        <h3 class="text-xl font-bold text-slate-900 mb-4 mt-0">Snabb sammanfattning: A-kassa som student</h3>
        <ul class="list-disc pl-5 space-y-2 mb-0">
          <li><strong>Gå med tidigt:</strong> Du bör ansöka om medlemskap så fort du börjar jobba extra för att börja räkna medlemstid.</li>
          <li><strong>Efter examen:</strong> Medlemskap under studierna gör det enklare att få inkomstbaserad ersättning direkt efter studier.</li>
          <li><strong>Ersättning under studier:</strong> Det är oftast inte möjligt att få a-kassa samtidigt som man studerar på heltid.</li>
          <li><strong>CSN:</strong> Studiestöd och a-kassa går normalt inte att kombinera då du inte anses stå till arbetsmarknadens förfogande.</li>
          <li><strong>Fortsätt vara medlem:</strong> Gå aldrig ur a-kassan under studietiden; ett avbrott nollställer din intjänade medlemstid.</li>
        </ul>
      </div>

      <h2>Kan man gå med i a-kassan som student?</h2>
      <p>Många studenter lever i tron att a-kassan bara är till för dem som har fasta jobb och en lång karriär bakom sig. Sanningen är dock att de svenska a-kassorna är utformade för att ge trygghet åt alla som är verksamma på arbetsmarknaden – även på deltid eller under studieperioder. Frågan "kan jag bli medlem?" besvaras oftast med ett ja, så länge du har någon form av arbetsanknytning.</p>
      
      <p>För att bli medlem i en a-kassa krävs det normalt att du har arbetat, eller arbetar just nu. Om du har ett extrajobb på kvällar eller helger, ett sommarjobb i bagaget eller nyligen har avslutat en anställning har du den grund som krävs för att kunna <strong>gå med i a-kassa under studier</strong>. Arbetskravet för medlemskap är ofta mycket lägre än vad många tror; det räcker i många fall med att du arbetar minst en timme per månad i den bransch a-kassan täcker.</p>

      <p>Det är dock viktigt att förstå skillnaden mellan de olika typerna av a-kassor. Vissa är nischade mot specifika yrkesgrupper, medan andra är breda och välkomnar alla. Om man aldrig någonsin har jobbat en enda timme i hela sitt liv kan det vara svårt att bli medlem i de mer nischade a-kassorna initialt. I sådana fall kan Alfa-kassan vara ett alternativ då de inte kräver medlemskap i ett fackförbund eller specifik branschtillhörighet på samma sätt.</p>

      <p>Kom även ihåg att medlemskapet är en investering. Även om du bara jobbar några timmar i månaden, så börjar klockan ticka för ditt medlemsvillkor från den dag du går med. Detta är avgörande för vad som händer den dagen din utbildning är slut och du kliver ut i den verkliga arbetsmarknaden.</p>

      <h2>Varför är det smart att gå med så tidigt som möjligt?</h2>
      <p>Tid är den viktigaste faktorn när det gäller arbetslöshetsförsäkringen. I det svenska systemet finns det nämligen något som heter <em>medlemsvillkor</em>. För att du ska ha rätt till ersättning som baseras na din tidigare inkomst (upp till 80 % av din lön) måste du ha varit medlem i en a-kassa i minst 12 sammanhängande månader innan du blir arbetslös.</p>

      <p>Här ser vi den största fördelen med att välja en <strong>a-kassa för studenter</strong> i god tid. Om du går med redan under första eller andra året på din utbildning, har du garanterat passerat 12-månadersgränsen när du tar din examen. Skulle det visa sig att arbetsmarknaden är tuff och det tar några månader att få det där första drömjobbet, kan du då få en betydligt högre ersättning än om du inte varit medlem.</p>

      <p>Om du däremot väntar med att gå med tills du har fått ditt examensbevis i handen och märker att jobbsökandet drar ut på tiden, då är det för sent för att få den inkomstbaserade ersättningen direkt. Du kommer då att hamna på den så kallade grundersättningen, vilken är väsentligt lägre och sällan räcker för att täcka normala levnadskostnader utanför studentbudgeten.</p>

      <p>Det handlar alltså om enkel logik: genom att betala en liten summa varje månad under studietiden försäkrar du din framtida lön. Ett längre medlemskap ger dig den trygghet som krävs för att du ska kunna söka rätt jobb efter examen i lugn och ro, istället för att tvingas ta första bästa jobb bara för att ekonomin kärvar.</p>

      <h2>Det här gäller om du vill få a-kassa efter studier</h2>
      <p>När examensdagen passerat och studierna är avslutade börjar din nya tillvaro som arbetssökande. Det är i detta skede som din <strong>a-kassa efter studier</strong> blir din ekonomiska livlina. För att faktiskt få ut pengar räcker det dock inte bara med att ha varit medlem; du måste också uppfylla ett <em>inkomstvillkor</em> eller <em>arbetsvillkor</em>.</p>

      <p>Detta villkor innebär att du ska ha arbetat i viss omfattning under de senaste 12 månaderna innan du blev arbetslös. För en student som har suttit i föreläsningssalar i tre eller fem år låter detta som ett oöverstigligt hinder. Men här kommer reglerna om <em>överhoppningsbar tid</em> in i bilden, vilket är en av de viktigaste reglerna att känna till för akademiker och yrkesstuderande.</p>

      <p>Överhoppningsbar tid innebär att a-kassan kan "hoppa över" tiden du har studerat när de räknar på din arbetstid. De tittar istället på vad du gjorde innan du började plugga. Här är de viktigaste punkterna att ha koll på:</p>
      <ul class="list-disc list-inside ml-4 space-y-2 mb-6">
        <li><strong>Ramtid:</strong> Den period (normalt de senaste 12 månaderna) som a-kassan granskar för att se om du arbetat tillräckligt mycket.</li>
        <li><strong>Studier som undantag:</strong> Om du har studerat på heltid och utbildningen gett rätt till studiestöd (CSN), kan hela studieperioden hoppas över i ramtiden. Detta gäller oftast för studier upp till fem år.</li>
        <li><strong>Arbete innan studier:</strong> Om du hade ett jobb innan du började plugga kan den inkomsten ligga till grund för din ersättning efter examen, förutsatt att du varit medlem i a-kassan hela tiden.</li>
        <li><strong>Extrajobbets betydelse:</strong> Allt arbete du utför under studietiden kan också räknas med. Om du har jobbat extra kan det antingen hjälpa dig att uppfylla arbetsvillkoret eller i vissa fall bidra till att höja din genomsnittliga inkomst som ersättningen beräknas på.</li>
      </ul>

      <p>Genom att utnyttja reglerna om överhoppningsbar tid kan du alltså få en ersättning som baseras på din lön innan studierna, trots att du inte har arbetat heltid på flera år. Detta är en enorm fördel som gör att du inte behöver börja på noll ekonomiskt bara för att du har valt att utbilda dig.</p>

      <h2>Vilken a-kassa ska man välja som student?</h2>
      <p>Valet av a-kassa är ofta det första steget mot ett professionellt medlemskap. När du funderar på <strong>vilken a-kassa ska jag välja som student</strong> bör du titta på din framtida yrkesroll. Sverige har en lång tradition av branschspecifika a-kassor som har djup kunskap om precis de villkor som gäller inom sina respektive områden.</p>

      <p>Fördelen med att välja en a-kassa kopplad till ditt studieämne är att de förstår din bakgrund. De vet vilka examina som leder till vilka jobb och hur arbetsmarknaden ser ut för just dig. Om du studerar till sjuksköterska är det naturligt att titta på en a-kassa för vårdpersonal, och om du siktar på en karriär inom teknik eller ekonomi finns det kassor som specialiserat sig på akademiker och ingenjörer.</p>

      <p>Det finns dock situationer där en mer generell eller fristående a-kassa är ett bättre val. Det kan gälla om:</p>
      <ul class="list-disc list-inside ml-4 space-y-2 mb-6">
        <li>Du läser en mycket bred utbildning och inte vet vilken bransch du kommer hamna i.</li>
        <li>Du planerar att arbeta som frilansare eller egenföretagare efter examen.</li>
        <li>Du prioriterar en enkel medlemskapsprocess utan koppling till fackliga organisationer.</li>
      </ul>

      <p>Många studenter väljer Akademikernas a-kassa (AEA) på grund av dess bredd mot alla med högskolepoäng, men det finns många andra alternativ. Många a-kassor har dessutom mycket fördelaktiga studenterbjudanden, ibland så låga som 0 kronor under en begränsad tid, för att locka framtidens arbetskraft. Det viktigaste är att du faktiskt tar beslutet och går med.</p>

      <p>Använd sökfunktionen nedan för att se vilka a-kassor som passar ditt yrke.</p>

      <h2>Kan man få a-kassa samtidigt som man studerar?</h2>
      <p>Frågan <strong>kan man få a-kassa som student</strong> är en av de mest sökta, men också en av de mest missförstådda. Det generella svaret är ett tydligt nej. Syftet med a-kassan är att ersätta inkomstbortfall vid ofrivillig arbetslöshet för personer som är redo att ta ett jobb direkt. Som heltidsstudent anses du inte stå till arbetsmarknadens förfogande eftersom dina studier tar upp din tid.</p>

      <p>Det finns dock sällsynta undantag där man kan kombinera studier med ersättning. Dessa undantag är strikt reglerade och kräver nästan alltid att studierna inte hindrar dig från att söka och ta jobb. Här är de vanligaste scenarierna:</p>
      <ul class="list-disc list-inside ml-4 space-y-2 mb-6">
        <li><strong>Deltidsstudier med låg omfattning:</strong> Om du studerar på högst 50 % och kan visa att studierna inte hindrar dig från att ta ett heltidsjobb, kan a-kassan i vissa fall ge sitt godkännande.</li>
        <li><strong>Arbetsmarknadsutbildningar:</strong> Vissa utbildningar som anvisas av Arbetsförmedlingen för att du lättare ska få jobb kan ibland kombineras med aktivitetsstöd eller a-kassa.</li>
        <li><strong>Tidigare etablerat mönster:</strong> Om du har arbetat heltid under en längre tid samtidigt som du studerat på fritiden, kan du i vissa fall få fortsätta med detta under en begränsad period om du blir av med jobbet.</li>
      </ul>

      <p>Det är dock förenat med stora risker att försöka kombinera studier och a-kassa utan ett skriftligt godkännande från din kassa. Kontrollerna är noggranna och följderna av felaktiga utbetalningar kan bli kännbara.</p>

      <div class="bg-red-50 border-l-4 border-red-500 p-6 my-8">
        <p class="text-red-900 font-bold m-0 text-lg">Viktig varning: CSN och a-kassa</p>
        <p class="text-red-800 m-0 mt-2">Det är absolut förbjudet att uppbära full ersättning från a-kassan samtidigt som du får studiestöd (bidrag eller lån) från CSN för heltidsstudier. Detta ses som ett allvarligt regelbrott. Om du studerar med CSN räknas du per definition som studerande och inte som arbetssökande.</p>
      </div>

      <h2>Kan man pausa a-kassan för att studera?</h2>
      <p>Livet följer inte alltid en rak linje, och ibland dyker en utbildningsmöjlighet upp mitt i en period av arbetslöshet. Om du redan får ersättning från a-kassan och väljer att börja studera, kommer din ersättning att pausas. Det betyder inte att du förlorar dina resterande dagar i ersättningsperioden, de ligger kvar och kan användas senare om du skulle bli arbetslös igen efter studierna.</p>

      <p>Det absolut mest kritiska felet många studenter gör är att de väljer att gå ur a-kassan under studieperioden för att spara några hundralappar per år. Detta är ett misstag som kan kosta tiotusentals kronor i slutändan. Om du lämnar kassan och får ett glapp i ditt medlemskap, nollställs din intjänade medlemstid. Du måste då börja om från dag ett när du går med igen, och du får vänta ett helt år innan du återigen har rätt till inkomstbaserad ersättning.</p>

      <p>Att pausa utbetalningen av ersättning är helt normalt, men pausa aldrig ditt medlemskap. Genom att fortsätta betala medlemsavgiften behåller du din plats i systemet, din rätt till inkomstbasrad ersättning och du säkrar att din tid innan studierna kan användas genom reglerna om överhoppningsbar tid. A-kassan för studenter är din brygga mellan utbildning och ett tryggt yrkesliv.</p>

      <p>Sammanfattningsvis: Se a-kassan som en del av din studieplanering. Gå med så fort du kan, välj en kassa som passar din framtida bransch, och stanna kvar som medlem genom hela utbildningen. Det ger dig den bästa möjliga starten på din karriär efter examen.</p>
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
          <h4 class="font-bold text-red-700 mb-2">❌ För långt</h4>
          <p class="text-sm text-red-900">Håll det till max 2 sidor. Rekryterare skumläser snabbt.</p>
        </div>
        <div class="border border-red-100 bg-red-50 p-4 rounded-xl">
          <h4 class="font-bold text-red-700 mb-2">❌ Stavfel</h4>
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
