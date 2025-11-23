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
        summary: "En grundläggande guide om arbetslöshetsförsäkringen, vem som kan gå med och hur du får ersättning.",
        image: "/artiklar/akassa-guide.jpg",
        publishedAt: "2023-11-15",
        content: `
      <h2>Vad är en a-kassa?</h2>
      <p>A-kassa står för arbetslöshetskassa. Det är en försäkring som ger dig ekonomisk trygghet om du skulle bli arbetslös. I Sverige är a-kassan statsstödd men drivs av olika föreningar, ofta kopplade till fackförbund.</p>
      
      <h2>Vem kan gå med?</h2>
      <p>De flesta a-kassor är öppna för specifika yrkesgrupper, men det finns också a-kassor som är öppna för alla, till exempel Alfa-kassan. För att bli medlem måste du oftast ha arbetat en viss tid i Sverige.</p>
      
      <h2>Hur får jag ersättning?</h2>
      <p>För att få ersättning måste du uppfylla arbetsvillkoret och medlemsvillkoret. Det innebär oftast att du ska ha varit medlem i minst 12 månader och arbetat en viss mängd timmar under det senaste året.</p>
    `
    },
    {
        slug: "vilken-akassa-passar-mig",
        title: "Vilken a-kassa passar olika yrken?",
        summary: "Hitta rätt a-kassa baserat på din bransch. Vi listar de vanligaste a-kassorna för olika yrkesgrupper.",
        image: "/artiklar/yrkes-guide.jpg",
        publishedAt: "2023-11-20",
        content: `
      <h2>Hitta rätt i djungeln</h2>
      <p>Det finns över 20 olika a-kassor i Sverige. Vissa är specialiserade på akademiker, andra på byggnadsarbetare, och vissa på egenföretagare.</p>
      
      <h3>Akademikernas a-kassa</h3>
      <p>Passar dig som har en högskoleutbildning eller studerar. Det är Sveriges största a-kassa.</p>
      
      <h3>Unionens a-kassa</h3>
      <p>För dig som är tjänsteman i privat sektor. En av de största och mest populära a-kassorna.</p>
      
      <h3>Småföretagarnas a-kassa</h3>
      <p>Specialiserad för dig som driver eget företag eller är företagsledare.</p>
    `
    },
    {
        slug: "ersattning-karens-villkor",
        title: "Så här funkar ersättning, karens och medlemsvillkor",
        summary: "Vi reder ut begreppen kring dagpenning, karensdagar och vad som krävs för att få full ersättning.",
        image: "/artiklar/ersattning.jpg",
        publishedAt: "2023-11-25",
        content: `
      <h2>Hur mycket får jag?</h2>
      <p>Ersättningen baseras på din tidigare inkomst. Taket för ersättningen höjdes under pandemin och ligger kvar på en högre nivå. Som mest kan du få ca 80% av din lön upp till ett visst tak.</p>
      
      <h2>Karensdagar</h2>
      <p>När du blir arbetslös har du oftast några karensdagar i början då du inte får någon ersättning. Detta fungerar som en självrisk.</p>
      
      <h2>Medlemsvillkoret</h2>
      <p>För att få inkomstbaserad ersättning måste du ha varit medlem i a-kassan i minst 12 sammanhängande månader.</p>
    `
    },
    {
        slug: "vanliga-misstag",
        title: "Vanliga misstag kring a-kassa och anställningsformer",
        summary: "Missar du att byta a-kassa när du byter bransch? Eller glömmer du att anmäla dig till Arbetsförmedlingen? Här är fällorna att undvika.",
        image: "/artiklar/misstag.jpg",
        publishedAt: "2023-11-30",
        content: `
      <h2>1. Glömma att anmäla sig till Arbetsförmedlingen</h2>
      <p>Detta är det absolut vanligaste misstaget. Du måste skriva in dig på Arbetsförmedlingen din <strong>första</strong> arbetslösa dag för att få ersättning.</p>
      
      <h2>2. Glapp i medlemskapet</h2>
      <p>Om du byter a-kassa, se till att det inte blir något glapp. Begär utträde och inträde i direkt anslutning till varandra.</p>
      
      <h2>3. Inte skicka in tidrapporter i tid</h2>
      <p>För att få ut dina pengar måste du kassakort (tidrapporter) skickas in löpande. Slarv med detta leder till försenad utbetalning.</p>
    `
    },
    {
        slug: "ekonomi-kris-akassa",
        title: "När ekonomin rasar efter jobbförlust – därför är a-kassan så viktig",
        summary: "Att förlora jobbet kan vara en ekonomisk chock. A-kassan är ditt första skyddsnät, men ibland räcker det inte till. Så här hanterar du en ekonomisk kris.",
        image: "/artiklar/ekonomi-kris.jpg",
        publishedAt: "2023-12-05",
        content: `
      <h2>En ekonomisk chock</h2>
      <p>Att bli av med jobbet innebär ofta att inkomsten halveras eller försvinner helt under en period. Utan a-kassa står många helt utan skyddsnät och tvingas leva på besparingar eller försörjningsstöd.</p>
      
      <h2>A-kassan som krockkudde</h2>
      <p>A-kassan är till för att ge dig tid att ställa om. Den täcker en del av inkomstbortfallet och ger dig möjlighet att söka nya jobb utan att behöva sälja hus och hem direkt.</p>
      
      <h2>Om krisen ändå är framme</h2>
      <p>Ibland räcker inte a-kassan till, eller så har man dragit på sig kostnader som är svåra att hantera med en lägre inkomst. Obetalda räkningar kan snabbt växa till stora skulder hos Kronofogden.</p>
      
      <div class="bg-red-50 border-l-4 border-red-500 p-4 my-6">
        <h3 class="text-red-800 font-bold text-lg mb-2">Har du hamnat i ekonomisk knipa?</h3>
        <p class="text-red-700 mb-4">
          Om du har svårt att betala dina skulder eller känner att ekonomin håller på att krascha, vänta inte med att söka hjälp. Ju tidigare du agerar, desto större chans har du att vända situationen.
        </p>
        <a 
          href="https://skuldregistret.se/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition-colors"
        >
          Få hjälp hos Skuldregistret.se &rarr;
        </a>
      </div>
      
      <p>Kom ihåg att du inte är ensam. Många hamnar i ekonomiska svårigheter någon gång i livet. Det viktiga är att ta tag i problemen och inte stoppa huvudet i sanden.</p>
    `
    }
];
