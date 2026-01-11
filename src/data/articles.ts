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
      <p>Det nya avtalet sträcker sig över två år och ger sammanlagda löneökningar på 1 920 kronor:</p>
      <ul class="space-y-2 mb-6">
        <li class="flex items-center"><span class="font-bold w-20 text-green-700">År 1:</span> +1 000 kronor</li>
        <li class="flex items-center"><span class="font-bold w-20 text-green-700">År 2:</span> +920 kronor</li>
      </ul>
    `
  },
  {
    slug: "darfor-behover-du-en-inkomstforsakring",
    title: "Därför behöver du en inkomstförsäkring som komplement till a-kassan",
    summary: "A-kassan har ett tak för hur mycket ersättning du kan få. Lär dig hur en inkomstförsäkring kan säkra upp till 80% av din faktiska lön om du blir arbetslös.",
    image: "/artiklar/inkomstforsakring-guide.png",
    publishedAt: "2024-03-15",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">För många räcker inte den vanliga a-kassan till för att täcka de fasta utgifterna vid en eventuell arbetslöshet. Det är här inkomstförsäkringen kommer in i bilden.</p>
      <h2>Vad är en inkomstförsäkring?</h2>
      <p>En inkomstförsäkring är en försäkring som kompletterar ersättningen från a-kassan. Medan a-kassan har ett tak (för närvarande 26 400 kr per månad före skatt de första 100 dagarna), kan en inkomstförsäkring täcka upp till 80 % av din faktiska lön, även om du tjänar betydligt mer än taket.</p>
    `
  },
  {
    slug: "inflation-akassa-paverkan",
    title: "Inflationens effekt på a-kassan – så mycket minskar din ersättning",
    summary: "Inflation urholkar värdet av din ersättning. Vi förklarar varför taket i a-kassan blir allt viktigare att bevaka under tider med hög inflation.",
    image: "/artiklar/inflation.png",
    publishedAt: "2025-01-10",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Inflation urholkar värdet av våra pengar. Det gäller lönen, men i allra högsta grad också ersättningen från a-kassan. Om taket i a-kassan ligger stilla medan priserna ökar, får du som arbetslös reellt sett mindre pengar att röra dig med.</p>
      <h2>Reallönesänkning för arbetslösa</h2>
      <p>När inflationen ligger på 5-10% minskar köpkraften drastiskt. Taket i a-kassan (26 400 kr före skatt) har inte indexerats i takt med inflationen historiskt sett.</p>
    `
  },
  {
    slug: "byta-karriar-2025-trygghet",
    title: "Byta bransch 2026? Så behåller du din SGI och a-kassa",
    summary: "Funderar du på att sadla om? Det är viktigt att du inte hamnar mellan stolarna. Här är checklistan för att byta jobb säkert utan att nollställa din ersättning.",
    image: "/artiklar/career-switch.png",
    publishedAt: "2025-02-01",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Att byta karriär är spännande, men det finns fallgropar. En av de vanligaste frågorna vi får är: "Vad händer med min a-kassa om jag säger upp mig själv?"</p>
      <h2>Säga upp sig själv – karens</h2>
      <p>Om du säger upp dig själv utan "giltigt skäl" blir du avstängd från a-kassan i <strong>45 ersättningsdagar</strong>. Det motsvarar ungefär 9-10 veckor utan ersättning.</p>
    `
  },
  {
    slug: "a-kassa-for-gigarbetare-och-frilansare",
    title: "A-kassa för frilansare och gig-jobbare – så funkar det 2026",
    summary: "Arbetsmarknaden förändras och allt fler jobbar projektbaserat. Här är guiden för dig som är giggare, konsult eller egenanställd.",
    image: "/artiklar/digital-nomad.png",
    publishedAt: "2025-02-20",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Gig-ekonomin växer, men det svenska trygghetssystemet bygger fortfarande på den traditionella tillsvidareanställningen. Som frilansare måste du vara extra smart.</p>
      <h2>Anställd eller Företagare?</h2>
      <p>Räknas du som anställd (t.ex. via Frilans Finans) eller driver du ett eget AB? Reglerna skiljer sig åt markant.</p>
    `
  },
  {
    slug: "student-till-jobb-guide",
    title: "Från examen till anställning – din guide till a-kassan",
    summary: "Grattis till examen! Men vad händer om du inte får jobb direkt? Så här kvalificerar du dig för a-kassa som nyexaminerad.",
    image: "/artiklar/student.png",
    publishedAt: "2025-06-05",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Som student har du ofta levt på CSN. När du tar examen står du inför ett glapp innan första lönen. Kan du få a-kassa direkt?</p>
      <h2>Grundregeln: Du måste ha jobbat</h2>
      <p>A-kassa baseras på arbete, inte studier. För att få ersättning måste du uppfylla arbetsvillkoret.</p>
    `
  },
  {
    slug: "chat-noir-kollektivavtal",
    title: "Historiskt kollektivavtal för Chat Noir i Göteborg",
    summary: "Efter flera års avslag har Hotell- och restaurangfacket nu tecknat kollektivavtal med strippklubben Chat Noir. Ett viktigt steg för arbetsrätten.",
    image: "/artiklar/chat-noir.jpg",
    publishedAt: "2025-12-20",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">HRF har nu tecknat kollektivavtal med Chat Noir. Det innebär att personal inom servering och bar nu omfattas av samma trygghet som i resten av branschen.</p>
    `
  },
  {
    slug: "arbetslos-utan-akassa",
    title: "Arbetslös utan a-kassa? Här är alternativen och stödet som finns",
    summary: "Står du utanför a-kassan och har blivit av med jobbet? Vi förklarar vad Alfa-kassan är och hur du kan söka ekonomiskt bistånd.",
    image: "/artiklar/stod-guide.png",
    publishedAt: "2024-01-25",
    content: `
      <h2>Alternativen när a-kassan saknas</h2>
      <p>Det första du bör undersöka är om du har rätt till grundersättning via Alfa-kassan. Om inte, finns det andra vägar för ekonomiskt stöd.</p>
    `
  },
  {
    slug: "byta-akassa-guide",
    title: "Byta a-kassa: Så gör du för att inte förlora din medlemsperiod",
    summary: "Planerar du att byta yrke? Här är guiden för hur du byter a-kassa smidigt utan att riskera glapp i din försäkringsperiod.",
    image: "/artiklar/byta-akassa.png",
    publishedAt: "2024-02-20",
    content: `
      <h2>Byta a-kassa sömlöst</h2>
      <p>Det viktigaste vid ett byte är oavbrutet medlemskap. Se till att du blir medlem i den nya kassan i direkt anslutning till att du lämnar den gamla.</p>
    `
  }
];

export const articles = rawArticles.sort((a, b) =>
  new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);
