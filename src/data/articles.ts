export interface Article {
  slug: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  publishedAt: string;
  faq?: {
    question: string;
    answer: string;
  }[];
}

const rawArticles: Article[] = [
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
    slug: "byta-akassa-guide",
    title: "Byta a-kassa: Så gör du för att inte förlora din medlemsperiod",
    summary: "Planerar du att byta yrke eller bransch? Här är den kompletta guiden för hur du byter a-kassa smidigt utan att riskera glapp i din försäkringsperiod.",
    image: "/artiklar/byta-akassa.png",
    publishedAt: "2024-02-20",
    content: `
      <h2>Att tänka på vid byte av a-kassa</h2>
      <p>Många tror att det är krångligt att byta a-kassa, men faktum är att det är ganska enkelt. Det viktigaste är att du inte får något glapp mellan dina medlemskap.</p>
    `
  },
  {
    slug: "sa-fungerar-grundersattningen",
    title: "Grundbelopp eller inkomstbaserad ersättning? Vi förklarar skillnaden",
    summary: "Har du inte varit medlem i a-kassan tillräckligt länge? Du kan fortfarande ha rätt till grundersättning. Vi går igenom villkoren och beloppen för 2024.",
    image: "/artiklar/ersattning-regler.png",
    publishedAt: "2023-12-10",
    content: `
      <h2>Grundersättning vs Inkomstbaserad ersättning</h2>
      <p>Förer att få inkomstbaserad ersättning (upp till 80% av din lön) krävs det oftast att du varit medlem i a-kassan i minst 12 månader.</p>
    `
  },
  {
    slug: "akassa-utanfor-sverige",
    title: "Arbeta utomlands: Vad händer med din a-kassa inom EU/EES?",
    summary: "Ska du jobba i ett annat EU-land? Här är allt du behöver veta om hur du tar med dig din försäkringsperiod och hur du skyddar din ersättning vid hemkomst.",
    image: "/artiklar/utland-jobb.png",
    publishedAt: "2023-11-05",
    content: `
      <h2>Regler inom EU/EES</h2>
      <p>Tack vare EU-regler kan du ofta tillgodoräkna dig tid du arbetat i andra medlemsländer när du ansöker om a-kassa i Sverige.</p>
    `
  },
  {
    slug: "studera-med-akassa",
    title: "Kan man studera och samtidigt få a-kassa? Här är reglerna",
    summary: "Huvudregeln är att du ska stå till arbetsmarknadens förfogande, men det finns undantag. Lär dig i vilka fall du kan plugga på deltid med bibehållen ersättning.",
    image: "/artiklar/studier-akassa.png",
    publishedAt: "2024-01-15",
    content: `
      <h2>Studier och arbetslöshet</h2>
      <p>Att studera samtidigt som man får a-kassa är i grunden inte tillåtet eftersom man då inte kan ta ett heltidsjobb direkt.</p>
    `
  },
  {
    slug: "arbetslos-utan-akassa",
    title: "Arbetslös utan a-kassa? Här är alternativen och stödet som finns",
    summary: "Står du utanför a-kassan och har blivit av med jobbet? Vi förklarar vad Alfa-kassan är och hur du kan söka ekonomiskt bistånd via socialtjänsten.",
    image: "/artiklar/stod-guide.png",
    publishedAt: "2024-01-25",
    faq: [
      {
        question: "Vad är Alfa-kassan?",
        answer: "Alfa-kassan är en fristående a-kassa som inte är bunden till något specifikt fackförbund eller yrkesområde. De administrerar den grundersättning som även icke-medlemmar kan ha rätt till."
      },
      {
        question: "Kan man få a-kassa direkt om man går med nu?",
        answer: "Nej, för att få den inkomstbaserade ersättningen krävs normalt 12 månaders medlemskap. Du kan dock ha rätt till grundersättning om du uppfyller arbetsvillkoret."
      }
    ],
    content: `
      <p class="lead text-xl text-gray-600 mb-8">Att bli arbetslös utan att vara med i en a-kassa kan kännas skrämmande, men det finns stödsystem i Sverige som fungerar som ett skyddsnät även för dig.</p>
      <h2>Alternativen när a-kassan saknas</h2>
      <p>Det första du bör undersöka är om du har rätt till grundersättning via Alfa-kassan.</p>
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
        question: "Vad är viktigast i ett CV?",
        answer: "Tydlighet och relevans. Visa vad du har uppnått i tidigare roller."
      }
    ],
    content: `
      <h2>Hur skriver man ett bra CV?</h2>
      <p>Ett bra CV är din viktigaste nyckel till arbetsmarknaden. Men att sammanfatta hela sitt yrkesliv på några få sidor är ofta svårare än man tror. I denna guide går vi igenom exakt hur du bygger ett CV som tar dig till intervjun.</p>
      <h3>Struktur</h3>
      <ul>
        <li>Kontaktuppgifter</li>
        <li>Profiltext</li>
        <li>Arbetslivserfarenhet</li>
      </ul>
    `
  }
];

export const articles = rawArticles.sort((a, b) =>
  new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);
