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

      <p>De flesta fackförbund erbjuder en inkomstförsäkring som ingår i medlemskapet, men det går även att teckna privata alternativ om du väljer att stå utanför facket men ändå vill ha tryggheten.</p>
    `
  },
  {
    slug: "inflation-akassa-paverkan",
    title: "Inflationens effekt på a-kassan – så mycket minskar din ersättning",
    summary: "Inflation urholkar värdet av din ersättning. Vi förklarar varför taket i a-kassan blir allt viktigare att bevaka under tider med hög inflation.",
    image: "/artiklar/inflation.png",
    publishedAt: "2025-01-10",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Inflation urholkar värdet av våra pengar. Det gäller lönen, men i allra högsta grad också ersättningen från a-kassan. Om taket i a-kassan ligger stilla medan priserna ökar, får du som arbetslös reellt sett mindre pengar att röra dig med för varje månad som går.</p>
      
      <h2>Reallönesänkning för arbetslösa</h2>
      <p>När inflationen ligger på höga nivåer (t.ex. 5-10%) minskar köpkraften drastiskt. Taket i a-kassan (26 400 kr före skatt) har inte indexerats automatiskt i takt med inflationen historiskt sett. Detta skapar ett växande glapp mellan vad det kostar att leva och den ersättning man får.</p>

      <h2>Inkomstförsäkring blir viktigare</h2>
      <p>I tider av hög inflation blir en inkomstförsäkring ännu mer central. Eftersom den baseras på din faktiska lön vid ansökningstillfället (eller den lön du försäkrat), skyddar den dig mot att "fastna" i a-kassans låga tak.</p>

      <h3>3 tips för att skydda din ekonomi:</h3>
      <ul class="list-disc list-inside ml-4 space-y-2 mb-6">
        <li>Se över din inkomstförsäkring – täcker den din nuvarande lön efter senaste lönehöjningen?</li>
        <li>Håll koll på a-kassans regler – riksdagen kan besluta om tillfälliga höjningar av taket.</li>
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
      <p class="lead text-xl text-gray-600 mb-8">Att byta karriär är spännande, men det finns fallgropar. En av de vanligaste frågorna vi får är: "Vad händer med min a-kassa om jag säger upp mig själv för att studera eller börja på nytt?"</p>
      
      <h2>Säga upp sig själv – karensregler</h2>
      <p>Om du säger upp dig själv utan vad a-kassan anser vara ett "giltigt skäl" blir du avstängd från ersättning i <strong>45 ersättningsdagar</strong>. Det motsvarar ungefär 9-10 veckor utan en enda krona. Det är därför livsviktigt att ha en plan och en ekonomisk buffert innan du tar steget.</p>

      <h2>Behåll din SGI (Sjukpenninggrundande inkomst)</h2>
      <p>För att inte nollställa din SGI hos Försäkringskassan måste du se till att skydda den. Om du slutar jobba för att studera med CSN är din SGI oftast skyddad, men om du bara tar en paus utan ersättning kan den nollställas.</p>

      <h3>Checklista för karriärbytare:</h3>
      <ul class="list-disc list-inside ml-4 space-y-2 mb-6">
        <li><strong>Avsluta inte medlemskapet:</strong> Behåll ditt medlemskap i a-kassan även under studietid eller mellan jobb.</li>
        <li><strong>Anmäl dig på Arbetsförmedlingen:</strong> Gör detta första dagen du är utan jobb, även om du har karens.</li>
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
      <p class="lead text-xl text-gray-600 mb-8">Gig-ekonomin växer lavinartat, men det svenska trygghetssystemet bygger fortfarande i mångt och mycket på den traditionella tillsvidareanställningen. Som frilansare eller gig-arbetare måste du vara extra vaksam för att inte hamna i kläm.</p>
      
      <h2>Anställd eller Företagare i a-kassans ögon?</h2>
      <p>Räknas du som anställd (t.ex. via egenanställningsföretag som Frilans Finans) eller driver du ett eget aktiebolag? Reglerna skiljer sig åt markant:</p>
      <ul class="list-disc list-inside ml-4 space-y-2 mb-6">
        <li><strong>Egenanställda:</strong> Ses ofta som anställda, men a-kassan granskar varje uppdrag.</li>
        <li><strong>Företagare:</strong> För att få ersättning måste företaget oftast vara vilande (ingen aktivitet alls).</li>
      </ul>

      <h2>A-kassor som förstår gig-ekonomin</h2>
      <p>Vissa a-kassor har specialiserat sig på flexibla arbetsformer. Om du arbetar inom media, IT eller som konsult kan det vara smart att välja en kassa som har vana av att hantera medlemmar med många korta uppdrag istället för en fast anställning.</p>
    `
  },
  {
    slug: "student-till-jobb-guide",
    title: "Från examen till anställning – din guide till a-kassan",
    summary: "Grattis till examen! Men vad händer om du inte får jobb direkt? Så här kvalificerar du dig för a-kassa som nyexaminerad.",
    image: "/artiklar/student.png",
    publishedAt: "2025-06-05",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Som student har du oftast levt på CSN. När du tar examen står du inför ett glapp innan första lönen kommer in på kontot. Kan du få a-kassa direkt efter examen?</p>
      
      <h2>Grundregeln: Du måste ha arbetat tidigare</h2>
      <p>A-kassa baseras på arbete, inte studier. För att få ersättning måste du uppfylla det så kallade <strong>arbetsvillkoret</strong>. Det innebär att du ska ha arbetat minst 60 timmar per månad i sex månader under det senaste året.</p>

      <h2>Överhoppningsbar tid – din räddning</h2>
      <p>Studier räknas ofta som "överhoppningsbar tid". Det betyder att a-kassan kan titta på vad du gjorde <em>innan</em> du började plugga (upp till 5 år tillbaka). Om du jobbade extra under sommaren eller innan studierna kan du ha rätt till ersättning baserat på det.</p>

      <h3>Viktigt att göra som nyexaminerad:</h3>
      <ol class="list-decimal list-inside ml-4 space-y-2 mb-6">
        <li>Anmäl dig på Arbetsförmedlingen första dagen efter examen.</li>
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
      <p>Genom avtalet omfattas nu personal i bar, kök och servering av samma trygghet som gäller på övriga svenska krogar. Det handlar om avtalsenliga löner, försäkringar och – viktigast av allt i detta sammanhang – rätt till tjänstepension och tydliga underlag för a-kassa.</p>

      <h2>Ett erkännande av branschen</h2>
      <p>Att fackförbundet väljer att teckna avtal innebär att verksamheten ses som en reguljär arbetsplats med krav på schyssta villkor. Tidigare har personalen stått utanför det skyddsnät som kollektivavtal ger, vilket gjort det svårare att styrka inkomst och arbetstid vid eventuell arbetslöshet.</p>
    `
  },
  {
    slug: "arbetslos-utan-akassa",
    title: "Arbetslös utan a-kassa? Här är alternativen och stödet som finns",
    summary: "Står du utanför a-kassan och har blivit av med jobbet? Vi förklarar vad Alfa-kassan är och hur du kan söka ekonomiskt bistånd.",
    image: "/artiklar/arbetslos-utan-akassa.png",
    publishedAt: "2024-01-25",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Står du utanför a-kassan och har blivit av med jobbet? Det är en tuff situation, men du är inte helt utan alternativ. Här går vi igenom vad som gäller för dig som inte är medlem i en a-kassa.</p>
      
      <h2>Alfa-kassan: Grundersättning för alla</h2>
      <p>Även om du inte är medlem i någon specifik a-kassa kan du ansöka om <strong>grundersättning</strong> hos Alfa-kassan. För att få detta måste du uppfylla arbetsvillkoret och vara över 20 år. Grundersättningen är betydligt lägre än den inkomstbaserade (max ca 11 220 kr/månad före skatt), men det är en viktig hjälp.</p>

      <h2>Ekonomiskt bistånd (Försörjningsstöd)</h2>
      <p>Om ersättningen från Alfa-kassan inte räcker, eller om du inte uppfyller kraven för den, kan du vända dig till socialtjänsten i din kommun för att ansöka om ekonomiskt bistånd. De ställer krav på att du är inskriven på Arbetsförmedlingen och aktivt söker jobb.</p>

      <h3>Gör detta direkt:</h3>
      <ul class="list-disc list-inside ml-4 space-y-2 mb-6">
        <li>Skriv in dig på Arbetsförmedlingen första dagen.</li>
        <li>Kontakta Alfa-kassan för att se om du har rätt till grundersättning.</li>
        <li>Gå med i en a-kassa idag – det hjälper inte för din nuvarande situation, men skyddar dig inför framtiden.</li>
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
      <p class="lead text-xl text-gray-600 mb-8">Planerar du att byta yrke eller har du fått nytt jobb i en annan bransch? Att byta a-kassa är enkelt, men det finns en kritisk detalj: du får aldrig ha ett glapp mellan medlemskapen.</p>
      
      <h2>Byta a-kassa sömlöst – steg för steg</h2>
      <p>För att behålla din intjänade tid (vilket är avgörande för att få inkomstbaserad ersättning) måste du ha varit medlem i en a-kassa i 12 månader utan avbrott. Så här gör du ett godkänt byte:</p>
      
      <ol class="list-decimal list-inside ml-4 space-y-2 mb-6">
        <li><strong>Ansök till den nya kassan:</strong> Gör detta först. Ange vilket datum du vill bli medlem (oftast den 1:a i nästa månad).</li>
        <li><strong>Ge fullmakt:</strong> De flesta a-kassor kan hjälpa dig att avsluta den gamla kassan automatiskt om du ger dem fullmakt.</li>
        <li><strong>Dubbelkolla datumen:</strong> Se till att utträdet ur den gamla kassan sker sista dagen i månaden och inträdet i den nya sker första dagen i nästa månad.</li>
      </ol>

      <h2>Vad händer om jag glömmer betala eller får glapp?</h2>
      <p>Om du får ens en dags glapp mellan dina medlemskap nollställs din medlemsperiod. Det innebär att du måste vara medlem i 12 nya månader innan du har rätt till inkomstbaserad ersättning igen. Var därför extremt noggrann.</p>
    `
  }
];

export const articles = rawArticles.sort((a, b) =>
  new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);
