export interface ChecklistContent {
    slug: string;
    professionName: string; // e.g., "Administratör"
    step2List: string[]; // List of items to submit
    step3Reason: string; // Why employer certificate is important for this profession
    step4Questions: string; // Typical questions
}

export const checklists: Record<string, ChecklistContent> = {
    "administrator": {
        slug: "administrator",
        professionName: "Administratör",
        step2List: [
            "Tidrapporter för dina arbetade timmar",
            "Intyg om eventuella bisysslor eller extrajobb",
            "Uppsägningsbesked eller anställningsavtal"
        ],
        step3Reason: "För administratörer är det viktigt att alla olika anställningsformer (t.ex. visstid, projekt) redovisas korrekt för att fastställa din arbetstid och lön.",
        step4Questions: "Många administratörer undrar hur ersättningen påverkas av deltidsarbete eller korta projektanställningar under arbetslösheten."
    },
    "banktjansteman": {
        slug: "banktjansteman",
        professionName: "Banktjänsteman",
        step2List: [
            "Arbetsgivarintyg från din bank/finansarbetsgivare",
            "Information om eventuella avgångsvederlag eller slutlön",
            "Kopia på uppsägningsbeskedet"
        ],
        step3Reason: "Banktjänstemän har ofta förmåner eller avgångsvederlag som måste granskas för att avgöra när a-kassan kan börja betalas ut.",
        step4Questions: "Vanliga frågor rör hur provisioner eller bonusar påverkar den a-kassegrundande inkomsten och om avgångsvederlag skjuter på ersättningen."
    },
    "barnskotare": {
        slug: "barnskotare",
        professionName: "Barnskötare",
        step2List: [
            "Arbetsgivarintyg från kommunen eller förskolan",
            "Schema eller tidrapporter om du arbetat timmar",
            "Övriga intyg om du haft flera arbetsgivare (t.ex. vid vikariat)"
        ],
        step3Reason: "Som barnskötare med varierande arbetstider eller vikariat är arbetsgivarintyget avgörande för att bevisa hur mycket du faktiskt arbetat.",
        step4Questions: "Många frågar hur timvikariat påverkar " + "dagar med ersättning och hur man fyller i tidrapporterna korrekt vid delvis arbete."
    },
    "bussforare": {
        slug: "bussforare",
        professionName: "Bussförare",
        step2List: [
            "Kopia på ditt körkort och yrkeskompetensbevis (YKB) vid behov",
            "Arbetsgivarintyg från trafikbolaget",
            "Uppgifter om schemalagd arbetstid"
        ],
        step3Reason: "För bussförare med skiftarbete och ob-tillägg är intyget viktigt för att räkna med alla tillägg i den a-kassegrundande inkomsten.",
        step4Questions: "Vanliga frågor handlar om hur delade turer och sovande jour påverkar arbetstidsmåttet och därmed ersättningen."
    },
    "butikssaljare": {
        slug: "butikssaljare",
        professionName: "Butikssäljare",
        step2List: [
            "Arbetsgivarintyg för samtliga butiker du arbetat i",
            "Anställningsbevis för extraarbeten",
            "Lönespecifikationer om intyg saknas"
        ],
        step3Reason: "Butikssäljare har ofta ob-tillägg och mertid som måste styrkas för att du ska få rätt ersättningsnivå baserad på din faktiska inkomst.",
        step4Questions: "Frågor gäller ofta hur man redovisar extra timmar vid behovsanställning och hur det påverkar a-kassan."
    },
    "byggnadsarbetare": {
        slug: "byggnadsarbetare",
        professionName: "Byggnadsarbetare",
        step2List: [
            "Arbetsgivarintyg från byggföretaget",
            "Kopia på yrkesbevis om det efterfrågas",
            "Uppgifter om ackordslön om tillämpligt"
        ],
        step3Reason: "För byggnadsarbetare med ackordslön eller olika tillägg är arbetsgivarintyget helt avgörande för att din snittlön ska bli korrekt beräknad.",
        step4Questions: "Frågor handlar ofta om hur permitteringar, väderhinder eller säsongsvariationer i byggbranschen hanteras av a-kassan."
    },
    "ekonom": {
        slug: "ekonom",
        professionName: "Ekonom",
        step2List: [
            "Arbetsgivarintyg",
            "Eventuella konsultavtal om du haft eget",
            "Avgångsvederlagsavtal"
        ],
        step3Reason: "Ekonomer har ibland bonusar eller andra rörliga lönedelar. Arbetsgivarintyget säkerställer att all skattepliktig inkomst räknas med.",
        step4Questions: "Många ekonomer undrar hur eget företagande (även vilande) påverkar rätten till a-kassa och om man får ta uppdrag under tiden."
    },
    "elektriker": {
        slug: "elektriker",
        professionName: "Elektriker",
        step2List: [
            "Arbetsgivarintyg",
            "Kopia på ECY-certifikat kan behövas",
            "Reseräkningar om traktamente ingår i lön"
        ],
        step3Reason: "Elektriker har ofta traktamenten och resetillägg. Det är viktigt att skilja på kostnadsersättningar och lön på intyget.",
        step4Questions: "Vanliga frågor gäller hur arbete på annan ort (traktamente) påverkar ersättningen och hur man redovisar restid."
    },
    "forskollarare": {
        slug: "forskollarare",
        professionName: "Förskollärare",
        step2List: [
            "Lärarlegitimation (kopia)",
            "Arbetsgivarintyg från kommun eller privat huvudman",
            "Intyg om ferielön om du jobbat i skola"
        ],
        step3Reason: "För förskollärare är det viktigt att rätt anställningsform och sysselsättningsgrad framgår, särskilt om du haft ferietjänst eller uppehållstjänst.",
        step4Questions: "Frågor rör ofta skillnaden mellan ferielön och vanlig semesterersättning och hur det påverkar a-kassan under sommaren."
    },
    "frisor": {
        slug: "frisor",
        professionName: "Frisör",
        step2List: [
            "Arbetsgivarintyg om du varit anställd",
            "Intyg om hyrstol om du varit egenföretagare",
            "Avregistreringsbevis för företag om du avslutat det"
        ],
        step3Reason: "Frisörer jobbar ofta på provision eller hyrstol. Intyget måste tydligt visa din faktiska bruttoinkomst och om du varit anställd eller företagare.",
        step4Questions: "Den vanligaste frågan är hur man hanterar övergången från att ha hyrt stol (företagare) till att bli arbetssökande."
    },
    "ingenjor": {
        slug: "ingenjor",
        professionName: "Ingenjör",
        step2List: [
            "Arbetsgivarintyg",
            "Examensbevis (kan efterfrågas)",
            "Kopia på uppsägningsavtal vid varsel"
        ],
        step3Reason: "Ingenjörer har ofta rörliga lönedelar eller bonusar. Arbetsgivarintyget måste specificera dessa separat så att din dagpenning baseras på total inkomst.",
        step4Questions: "Frågor rör ofta avgångsvederlag vid varsel och om man får studera eller vidareutbilda sig med bibehållen a-kassa."
    },
    "it-konsult": {
        slug: "it-konsult",
        professionName: "IT-konsult",
        step2List: [
            "Arbetsgivarintyg",
            "Intyg om avveckling av eget företag (om relevant)",
            "Uppdragskontrakt om du varit underkonsult"
        ],
        step3Reason: "Många IT-konsulter växlar mellan anställning och eget företag. Intygen måste tydligt visa när du varit vad för att du ska bedömas rätt.",
        step4Questions: "Det vanligaste är frågor kring 'vilande företag' – om man får ha sitt bolag kvar registrerat men inaktivt under arbetslösheten."
    },
    "journalist": {
        slug: "journalist",
        professionName: "Journalist",
        step2List: [
            "Arbetsgivarintyg för anställningar",
            "Lista på sålda frilansartiklar/arvoden",
            "Presskort (identifikation)"
        ],
        step3Reason: "För journalister med en blandning av anställning och frilans (arvoden) är det avgörande att varje uppdrags ersättning och tidsåtgång redovisas.",
        step4Questions: "Frågor gäller ofta hur man hanterar royalty-inkomster kontra arbetade timmar och om man får skriva enstaka artiklar som arbetslös."
    },
    "kock": {
        slug: "kock",
        professionName: "Kock",
        step2List: [
            "Arbetsgivarintyg från alla restauranger du jobbat på",
            "Schema för ob-tillägg",
            "Intyg för extra vid behov-anställning"
        ],
        step3Reason: "Kockar har ofta obekväm arbetstid och dricks (som sällan är a-kassegrundande, men lön är). Intyget säkrar att all lön och OB räknas med.",
        step4Questions: "Vanliga frågor rör hur man fyller i kassakort för delade turer och om dricks räknas in i den a-kassegrundande inkomsten (oftast nej)."
    },
    "lagerarbetare": {
        slug: "lagerarbetare",
        professionName: "Lagerarbetare",
        step2List: [
            "Arbetsgivarintyg",
            "Intyg för skift- eller nattarbete",
            "Anställningsbevis för bemanningsuppdrag"
        ],
        step3Reason: "Lagerarbete sker ofta via bemanning eller på obekväma tider. Arbetsgivarintyget behövs för att visa snittarbetstiden inklusive övertid.",
        step4Questions: "Många undrar hur det fungerar om man är anställd av ett bemanningsföretag men saknar uppdrag (garantilön vs a-kassa)."
    },
    "larare": {
        slug: "larare",
        professionName: "Lärare",
        step2List: [
            "Lärarlegitimation (om ej inlämnad)",
            "Arbetsgivarintyg för terminerna",
            "Intyg gällande ferietjänst eller uppehållstjänst"
        ],
        step3Reason: "Lärares ferielön och arbetstid (45,5 h/vecka under termin) gör att arbetsgivarintyget måste fyllas i mycket noggrant för korrekt SGI och a-kassa.",
        step4Questions: "Frågor handlar nästan alltid om 'glappet' på sommaren – om man får a-kassa mellan vår- och hösttermin om anställningen upphör."
    },
    "lastbilschauffor": {
        slug: "lastbilschauffor",
        professionName: "Lastbilschaufför",
        step2List: [
            "Kopia på YKB och körkort",
            "Arbetsgivarintyg från åkeriet",
            "Intyg på traktamenten"
        ],
        step3Reason: "Lastbilschaufförer har ofta traktamenten (skattefria) som inte är a-kassegrundande, medan lönedelen är det. Detta måste särskiljas tydligt.",
        step4Questions: "Många frågar om hur man hanterar väntetid och sovande jour i lastbilen när man fyller i sina kassakort."
    },
    "lokalvardare": {
        slug: "lokalvardare",
        professionName: "Lokalvårdare",
        step2List: [
            "Arbetsgivarintyg från alla städbolag",
            "Anställningsbevis för extrajobb",
            "Tidrapporter för timanställning"
        ],
        step3Reason: "Många lokalvårdare har flera deltidsjobb samtidigt. Arbetsgivarintyg från samtliga arbetsgivare krävs för att 'lägga ihop' tiden till en heltid.",
        step4Questions: "Vanligt är frågor om hur man gör om man blir av med ett av två deltidsjobb (stämpla upp)."
    },
    "lokforare": {
        slug: "lokforare",
        professionName: "Lokförare",
        step2List: [
            "Arbetsgivarintyg från tågoperatören",
            "Schema som visar skiftgång",
            "Eventuellt intyg om säkerhetsklassning"
        ],
        step3Reason: "Lokförare har oregelbundna arbetstider och nattarbete. Intyget säkerställer att all ob-ersättning och tillägg räknas med i lönen.",
        step4Questions: "Frågor rör ofta hur man redovisar jourtid eller beredskap i hemmet på kassakorten."
    },
    "montor": {
        slug: "montor",
        professionName: "Montör",
        step2List: [
            "Arbetsgivarintyg från industrin/fabriken",
            "Intyg om skiftform (2-skift, 3-skift etc.)",
            "Information om eventuellt ackord"
        ],
        step3Reason: "För montörer inom industrin med skiftgång eller produktionsbonusar (ackord) är det viktigt att snittinkomsten speglar alla tillägg.",
        step4Questions: "Många undrar hur konjunkturvarsel och korttidspermittering påverkar rätten till a-kassa och ersättningsnivån."
    },
    "projektledare": {
        slug: "projektledare",
        professionName: "Projektledare",
        step2List: [
            "Arbetsgivarintyg för projektanställningar",
            "Kopia på kontrakt för specifika projekt",
            "Intyg om bonusar eller slutvederlag"
        ],
        step3Reason: "Projektledare har ofta tidsbegränsade anställningar. Det är viktigt att intyget täcker även 'glapp' mellan projekt om anställningen löpt på.",
        step4Questions: "Frågor gäller ofta hur avgångsvederlag eller 'outplacement'-stöd påverkar när a-kassan kan börja betalas ut."
    },
    "saljare": {
        slug: "saljare",
        professionName: "Säljare",
        step2List: [
            "Arbetsgivarintyg med tydlig specifikation av provision",
            "Lönespecifikationer för de senaste 12 månaderna",
            "Eventuellt intyg om tjänstebilsvärde"
        ],
        step3Reason: "För säljare består lönen ofta av en stor rörlig del (provision). Arbetsgivarintyget måste visa den totala bruttolönen, inte bara grundlönen.",
        step4Questions: "Många säljare undrar hur provision som betalas ut i efterskott (när man är arbetslös) påverkar ersättningen."
    },
    "serveringspersonal": {
        slug: "serveringspersonal",
        professionName: "Serveringspersonal",
        step2List: [
            "Arbetsgivarintyg från alla restauranger/krogar",
            "Intyg för extrajobb och eventuella catering-uppdrag",
            "Tidrapporter för timanställning"
        ],
        step3Reason: "Branschen har många timanställningar och extrajobb. Du måste samla intyg från ALLA arbetsgivare för att få ihop till ett arbetsvillkor.",
        step4Questions: "Vanligaste frågan är om dricks räknas in i a-kassan (oftast gör den inte det) och hur man stämplar vid delat skift."
    },
    "sjukskoterska": {
        slug: "sjukskoterska",
        professionName: "Sjuksköterska",
        step2List: [
            "Legitimationsbevis (HOSP)",
            "Arbetsgivarintyg från region, kommun eller bemanningsbolag",
            "Intyg på all ob-ersättning"
        ],
        step3Reason: "Sjuksköterskor har mycket OB och övertid. Arbetsgivarintyget måste specificera detta så du inte får för låg dagpenning baserat på bara grundlön.",
        step4Questions: "Frågor handlar ofta om hur det fungerar om man 'hoppar in' extra via bemanningsföretag samtidigt som man stämplar."
    },
    "snickare": {
        slug: "snickare",
        professionName: "Snickare",
        step2List: [
            "Arbetsgivarintyg från byggfirma",
            "Yrkesbevis",
            "Information om resetillägg och verktygsersättning"
        ],
        step3Reason: "Snickare har ofta ackord, reseersättningar och traktamenten. Det är viktigt att bara den skattepliktiga lönen ligger till grund för ersättningen.",
        step4Questions: "Många frågar om hur säsongsvariationer (vinteruppehåll) hanteras och om man får bygga på sitt eget hus med a-kassa."
    },
    "socialsekreterare": {
        slug: "socialsekreterare",
        professionName: "Socialsekreterare",
        step2List: [
            "Examensbevis (socionom)",
            "Arbetsgivarintyg från kommun/stadsdelsförvaltning",
            "Anställningsbevis"
        ],
        step3Reason: "Socialsekreterare byter ibland mellan kommuner eller går över till bemanningsföretag. Intygen måste täcka hela perioden för att undvika glapp i a-kassegrundande tid.",
        step4Questions: "Frågor rör ofta karenstid om man sagt upp sig själv på grund av hög arbetsbelastning (giltig anledning prövas alltid individuellt)."
    },
    "svetsare": {
        slug: "svetsare",
        professionName: "Svetsare",
        step2List: [
            "Arbetsgivarintyg från verkstad/industri",
            "Svetslicenser (kopia)",
            "Intyg om skiftgång och OB"
        ],
        step3Reason: "Svetsare har ofta specialtillägg eller arbetar på traktamente vid reserjobb. Det är viktigt att lön och kostnadsersättning särskiljs på intyget.",
        step4Questions: "Många svetsare arbetar periodvis ('stoppjobb') och undrar hur man stämplar däremellan utan att förlora sin SGI."
    },
    "taxichauffor": {
        slug: "taxichauffor",
        professionName: "Taxichaufför",
        step2List: [
            "Taxiförarlegitimation (kopia)",
            "Arbetsgivarintyg från åkeriet",
            "Lönespecifikationer som visar provision"
        ],
        step3Reason: "Taxichaufförer har nästan alltid provisionslön. Arbetsgivarintyget måste visa hur mycket du faktiskt tjänat per månad, inte bara procenten.",
        step4Questions: "Den absolut vanligaste frågan är hur a-kassan beräknas när inkomsten varierar kraftigt från månad till månad."
    },
    "underskoterska": {
        slug: "underskoterska",
        professionName: "Undersköterska",
        step2List: [
            "Arbetsgivarintyg från kommun/landsting/privat vårdgivare",
            "Tidrapporter för timvikariat (LAS-dagar)",
            "Intyg om OB-ersättning"
        ],
        step3Reason: "Många undersköterskor har 'staplade' vikariat. Arbetsgivarintyget är beviset för att du jobbat tillräckligt mycket för att få a-kassa.",
        step4Questions: "Frågor rör ofta hur många timmar man får jobba extra utan att a-kassan dras in och hur man fyller i deltidsarbete."
    },
    "verktygsmakare": {
        slug: "verktygsmakare",
        professionName: "Verktygsmakare",
        step2List: [
            "Arbetsgivarintyg från industrin",
            "Yrkesbevis eller utbildningsbevis",
            "Information om skiftform"
        ],
        step3Reason: "Som specialist inom industrin har verktygsmakare ofta högre lön och tillägg. Intyget säkerställer att du når taket i a-kassan om du har rätt till det.",
        step4Questions: "Vanliga frågor gäller permitteringar inom fordonsindustrin och hur det samspelar med a-kassa."
    },
    "account-manager": {
        slug: "account-manager",
        professionName: "Account manager",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en account manager är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många account manager undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "administrator-stat": {
        slug: "administrator-stat",
        professionName: "Administratör stat",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en administratör stat är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många administratör stat undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "arkivarie": {
        slug: "arkivarie",
        professionName: "Arkivarie",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en arkivarie är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många arkivarie undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "avdelningschef": {
        slug: "avdelningschef",
        professionName: "Avdelningschef",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en avdelningschef är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många avdelningschef undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "bageriarbetare": {
        slug: "bageriarbetare",
        professionName: "Bageriarbetare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en bageriarbetare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många bageriarbetare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "behandlingsassistent": {
        slug: "behandlingsassistent",
        professionName: "Behandlingsassistent",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en behandlingsassistent är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många behandlingsassistent undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "betongarbetare": {
        slug: "betongarbetare",
        professionName: "Betongarbetare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en betongarbetare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många betongarbetare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "bistandshandlaggare": {
        slug: "bistandshandlaggare",
        professionName: "Biståndshandläggare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en biståndshandläggare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många biståndshandläggare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "brevbarare": {
        slug: "brevbarare",
        professionName: "Brevbärare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en brevbärare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många brevbärare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "butiksbitrade": {
        slug: "butiksbitrade",
        professionName: "Butiksbiträde",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en butiksbiträde är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många butiksbiträde undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "butiksagare": {
        slug: "butiksagare",
        professionName: "Butiksägare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en butiksägare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många butiksägare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "cateringpersonal": {
        slug: "cateringpersonal",
        professionName: "Cateringpersonal",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en cateringpersonal är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många cateringpersonal undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "data-och-it-montor": {
        slug: "data-och-it-montor",
        professionName: "Data- och IT-montör",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en data- och it-montör är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många data- och it-montör undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "distriktschef-lantbruk": {
        slug: "distriktschef-lantbruk",
        professionName: "Distriktschef lantbruk",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en distriktschef lantbruk är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många distriktschef lantbruk undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "enhetschef": {
        slug: "enhetschef",
        professionName: "Enhetschef",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en enhetschef är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många enhetschef undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "ensamforetagare": {
        slug: "ensamforetagare",
        professionName: "Ensamföretagare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en ensamföretagare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många ensamföretagare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "familjeforetagare-handel": {
        slug: "familjeforetagare-handel",
        professionName: "Familjeföretagare handel",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en familjeföretagare handel är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många familjeföretagare handel undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "fastighetsskotare": {
        slug: "fastighetsskotare",
        professionName: "Fastighetsskötare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en fastighetsskötare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många fastighetsskötare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "finansanalytiker": {
        slug: "finansanalytiker",
        professionName: "Finansanalytiker",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en finansanalytiker är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många finansanalytiker undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "flygmekaniker": {
        slug: "flygmekaniker",
        professionName: "Flygmekaniker",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en flygmekaniker är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många flygmekaniker undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "fotograf": {
        slug: "fotograf",
        professionName: "Fotograf",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en fotograf är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många fotograf undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "frilansskribent": {
        slug: "frilansskribent",
        professionName: "Frilansskribent",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en frilansskribent är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många frilansskribent undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "faltsaljare": {
        slug: "faltsaljare",
        professionName: "Fältsäljare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en fältsäljare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många fältsäljare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "forpackningsarbetare": {
        slug: "forpackningsarbetare",
        professionName: "Förpackningsarbetare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en förpackningsarbetare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många förpackningsarbetare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "forsakringsradgivare": {
        slug: "forsakringsradgivare",
        professionName: "Försäkringsrådgivare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en försäkringsrådgivare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många försäkringsrådgivare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "foretagsradgivare": {
        slug: "foretagsradgivare",
        professionName: "Företagsrådgivare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en företagsrådgivare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många företagsrådgivare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "forvaltningschef": {
        slug: "forvaltningschef",
        professionName: "Förvaltningschef",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en förvaltningschef är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många förvaltningschef undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "godsmagasinspersonal": {
        slug: "godsmagasinspersonal",
        professionName: "Godsmagasinspersonal",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en godsmagasinspersonal är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många godsmagasinspersonal undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "golvlaggare": {
        slug: "golvlaggare",
        professionName: "Golvläggare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en golvläggare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många golvläggare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "grundskollarare": {
        slug: "grundskollarare",
        professionName: "Grundskollärare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en grundskollärare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många grundskollärare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "gymnasielarare": {
        slug: "gymnasielarare",
        professionName: "Gymnasielärare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en gymnasielärare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många gymnasielärare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "hamnarbetare": {
        slug: "hamnarbetare",
        professionName: "Hamnarbetare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en hamnarbetare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många hamnarbetare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "handelsforetagare": {
        slug: "handelsforetagare",
        professionName: "Handelsföretagare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en handelsföretagare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många handelsföretagare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "handlaggare-myndighet": {
        slug: "handlaggare-myndighet",
        professionName: "Handläggare myndighet",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en handläggare myndighet är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många handläggare myndighet undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "hissmontor": {
        slug: "hissmontor",
        professionName: "Hissmontör",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en hissmontör är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många hissmontör undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "hotellreceptionist": {
        slug: "hotellreceptionist",
        professionName: "Hotellreceptionist",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en hotellreceptionist är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många hotellreceptionist undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "hotellstadare": {
        slug: "hotellstadare",
        professionName: "Hotellstädare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en hotellstädare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många hotellstädare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "industriarbetare": {
        slug: "industriarbetare",
        professionName: "Industriarbetare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en industriarbetare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många industriarbetare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "it-support-offentlig-sektor": {
        slug: "it-support-offentlig-sektor",
        professionName: "IT-support offentlig sektor",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en it-support offentlig sektor är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många it-support offentlig sektor undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "kartongtillverkare": {
        slug: "kartongtillverkare",
        professionName: "Kartongtillverkare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en kartongtillverkare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många kartongtillverkare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "kassapersonal": {
        slug: "kassapersonal",
        professionName: "Kassapersonal",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en kassapersonal är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många kassapersonal undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "kemiindustriarbetare": {
        slug: "kemiindustriarbetare",
        professionName: "Kemiindustriarbetare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en kemiindustriarbetare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många kemiindustriarbetare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "konditor": {
        slug: "konditor",
        professionName: "Konditor",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en konditor är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många konditor undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "konsult": {
        slug: "konsult",
        professionName: "Konsult",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en konsult är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många konsult undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "kraftverksoperator": {
        slug: "kraftverksoperator",
        professionName: "Kraftverksoperatör",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en kraftverksoperatör är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många kraftverksoperatör undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "kriminalvardare": {
        slug: "kriminalvardare",
        professionName: "Kriminalvårdare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en kriminalvårdare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många kriminalvårdare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "kulturarbetare": {
        slug: "kulturarbetare",
        professionName: "Kulturarbetare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en kulturarbetare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många kulturarbetare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "kundansvarig": {
        slug: "kundansvarig",
        professionName: "Kundansvarig",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en kundansvarig är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många kundansvarig undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "kundradgivare": {
        slug: "kundradgivare",
        professionName: "Kundrådgivare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en kundrådgivare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många kundrådgivare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "kurator": {
        slug: "kurator",
        professionName: "Kurator",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en kurator är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många kurator undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "kokspersonal": {
        slug: "kokspersonal",
        professionName: "Kökspersonal",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en kökspersonal är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många kökspersonal undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "lagerpersonal": {
        slug: "lagerpersonal",
        professionName: "Lagerpersonal",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en lagerpersonal är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många lagerpersonal undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "lantbrukskonsulent": {
        slug: "lantbrukskonsulent",
        professionName: "Lantbrukskonsulent",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en lantbrukskonsulent är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många lantbrukskonsulent undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "larmtekniker": {
        slug: "larmtekniker",
        professionName: "Larmtekniker",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en larmtekniker är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många larmtekniker undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "lastare": {
        slug: "lastare",
        professionName: "Lastare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en lastare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många lastare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "livsmedelsindustriarbetare": {
        slug: "livsmedelsindustriarbetare",
        professionName: "Livsmedelsindustriarbetare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en livsmedelsindustriarbetare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många livsmedelsindustriarbetare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "logistikforetagare": {
        slug: "logistikforetagare",
        professionName: "Logistikföretagare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en logistikföretagare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många logistikföretagare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "logistikoperator": {
        slug: "logistikoperator",
        professionName: "Logistikoperatör",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en logistikoperatör är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många logistikoperatör undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "lakemedelsoperator": {
        slug: "lakemedelsoperator",
        professionName: "Läkemedelsoperatör",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en läkemedelsoperatör är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många läkemedelsoperatör undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "marknadsforare": {
        slug: "marknadsforare",
        professionName: "Marknadsförare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en marknadsförare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många marknadsförare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "massaarbetare": {
        slug: "massaarbetare",
        professionName: "Massaarbetare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en massaarbetare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många massaarbetare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "matros": {
        slug: "matros",
        professionName: "Matros",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en matros är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många matros undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "mejeriarbetare": {
        slug: "mejeriarbetare",
        professionName: "Mejeriarbetare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en mejeriarbetare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många mejeriarbetare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "murare": {
        slug: "murare",
        professionName: "Murare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en murare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många murare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "malare": {
        slug: "malare",
        professionName: "Målare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en målare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många målare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "pappersmaskinsoperator": {
        slug: "pappersmaskinsoperator",
        professionName: "Pappersmaskinsoperatör",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en pappersmaskinsoperatör är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många pappersmaskinsoperatör undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "pappersskarare": {
        slug: "pappersskarare",
        professionName: "Pappersskärare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en pappersskärare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många pappersskärare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "personalhandlaggare": {
        slug: "personalhandlaggare",
        professionName: "Personalhandläggare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en personalhandläggare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många personalhandläggare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "produktionsledare-skog": {
        slug: "produktionsledare-skog",
        professionName: "Produktionsledare skog",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en produktionsledare skog är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många produktionsledare skog undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "redaktor": {
        slug: "redaktor",
        professionName: "Redaktör",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en redaktör är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många redaktör undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "rektor": {
        slug: "rektor",
        professionName: "Rektor",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en rektor är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många rektor undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "restaurangagare": {
        slug: "restaurangagare",
        professionName: "Restaurangägare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en restaurangägare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många restaurangägare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "sanerare": {
        slug: "sanerare",
        professionName: "Sanerare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en sanerare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många sanerare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "servicearbetare": {
        slug: "servicearbetare",
        professionName: "Servicearbetare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en servicearbetare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många servicearbetare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "serviceforetagare": {
        slug: "serviceforetagare",
        professionName: "Serviceföretagare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en serviceföretagare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många serviceföretagare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "skogskonsulent": {
        slug: "skogskonsulent",
        professionName: "Skogskonsulent",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en skogskonsulent är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många skogskonsulent undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "skogsmaskinforare": {
        slug: "skogsmaskinforare",
        professionName: "Skogsmaskinförare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en skogsmaskinförare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många skogsmaskinförare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "slaktare": {
        slug: "slaktare",
        professionName: "Slaktare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en slaktare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många slaktare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "studie-och-yrkesvagledare": {
        slug: "studie-och-yrkesvagledare",
        professionName: "Studie- och yrkesvägledare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en studie- och yrkesvägledare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många studie- och yrkesvägledare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "sagverksarbetare": {
        slug: "sagverksarbetare",
        professionName: "Sågverksarbetare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en sågverksarbetare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många sågverksarbetare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "saljare-tjansteman": {
        slug: "saljare-tjansteman",
        professionName: "Säljare tjänstemän",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en säljare tjänstemän är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många säljare tjänstemän undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "taxiforetagare": {
        slug: "taxiforetagare",
        professionName: "Taxiföretagare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en taxiföretagare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många taxiföretagare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "teamledare": {
        slug: "teamledare",
        professionName: "Teamledare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en teamledare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många teamledare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "terminalarbetare": {
        slug: "terminalarbetare",
        professionName: "Terminalarbetare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en terminalarbetare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många terminalarbetare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "tjansteman": {
        slug: "tjansteman",
        professionName: "Tjänsteman",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en tjänsteman är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många tjänsteman undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "tryckare": {
        slug: "tryckare",
        professionName: "Tryckare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en tryckare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många tryckare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "tryckpappersarbetare": {
        slug: "tryckpappersarbetare",
        professionName: "Tryckpappersarbetare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en tryckpappersarbetare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många tryckpappersarbetare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "trahusmontor": {
        slug: "trahusmontor",
        professionName: "Trähusmontör",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en trähusmontör är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många trähusmontör undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "vd": {
        slug: "vd",
        professionName: "VD",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en vd är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många vd undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "virkeskopare": {
        slug: "virkeskopare",
        professionName: "Virkesköpare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en virkesköpare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många virkesköpare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "vvs-arbetare": {
        slug: "vvs-arbetare",
        professionName: "VVS-arbetare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en vvs-arbetare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många vvs-arbetare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "vvs-montor": {
        slug: "vvs-montor",
        professionName: "VVS-montör",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en vvs-montör är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många vvs-montör undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "aldreomsorgspersonal": {
        slug: "aldreomsorgspersonal",
        professionName: "Äldreomsorgspersonal",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en äldreomsorgspersonal är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många äldreomsorgspersonal undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "oversattare": {
        slug: "oversattare",
        professionName: "Översättare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en översättare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många översättare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },

    "systemutvecklare": {
        slug: "systemutvecklare",
        professionName: "Systemutvecklare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en systemutvecklare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många systemutvecklare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "webbutvecklare": {
        slug: "webbutvecklare",
        professionName: "Webbutvecklare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en webbutvecklare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många webbutvecklare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "hr-specialist": {
        slug: "hr-specialist",
        professionName: "HR-specialist",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en hr-specialist är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många hr-specialist undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "hr-chef": {
        slug: "hr-chef",
        professionName: "HR-chef",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en hr-chef är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många hr-chef undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "personalvetare": {
        slug: "personalvetare",
        professionName: "Personalvetare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en personalvetare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många personalvetare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "receptionist-kontor": {
        slug: "receptionist-kontor",
        professionName: "Receptionist (kontor)",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en receptionist (kontor) är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många receptionist (kontor) undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "kontorist": {
        slug: "kontorist",
        professionName: "Kontorist",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en kontorist är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många kontorist undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "brevsorterare": {
        slug: "brevsorterare",
        professionName: "Brevsorterare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en brevsorterare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många brevsorterare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "tandhygienist": {
        slug: "tandhygienist",
        professionName: "Tandhygienist",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en tandhygienist är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många tandhygienist undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "tandskoterska": {
        slug: "tandskoterska",
        professionName: "Tandsköterska",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en tandsköterska är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många tandsköterska undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "tandlakare": {
        slug: "tandlakare",
        professionName: "Tandläkare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en tandläkare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många tandläkare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "vardcentraladministrator": {
        slug: "vardcentraladministrator",
        professionName: "Vårdcentraladministratör",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en vårdcentraladministratör är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många vårdcentraladministratör undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "apotekstekniker": {
        slug: "apotekstekniker",
        professionName: "Apotekstekniker",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en apotekstekniker är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många apotekstekniker undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "apotekare": {
        slug: "apotekare",
        professionName: "Apotekare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en apotekare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många apotekare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "butiksledare": {
        slug: "butiksledare",
        professionName: "Butiksledare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en butiksledare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många butiksledare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "e-handelslogistiker": {
        slug: "e-handelslogistiker",
        professionName: "E-handelslogistiker",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en e-handelslogistiker är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många e-handelslogistiker undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "chauffor-latt-lastbil": {
        slug: "chauffor-latt-lastbil",
        professionName: "Chaufför lätt lastbil",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en chaufför lätt lastbil är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många chaufför lätt lastbil undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "behorig-elektriker-service": {
        slug: "behorig-elektriker-service",
        professionName: "Behörig elektriker-service",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en behörig elektriker-service är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många behörig elektriker-service undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "vaktare": {
        slug: "vaktare",
        professionName: "Väktare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en väktare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många väktare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "kundtjanstmedarbetare": {
        slug: "kundtjanstmedarbetare",
        professionName: "Kundtjänstmedarbetare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en kundtjänstmedarbetare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många kundtjänstmedarbetare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "telefonsaljare": {
        slug: "telefonsaljare",
        professionName: "Telefonsäljare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en telefonsäljare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många telefonsäljare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "hr-administrator": {
        slug: "hr-administrator",
        professionName: "HR-administratör",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en hr-administratör är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många hr-administratör undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "arbetsledare-industri": {
        slug: "arbetsledare-industri",
        professionName: "Arbetsledare industri",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en arbetsledare industri är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många arbetsledare industri undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "maskinforare-bygg-anlaggning": {
        slug: "maskinforare-bygg-anlaggning",
        professionName: "Maskinförare (bygg/anläggning)",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en maskinförare (bygg/anläggning) är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många maskinförare (bygg/anläggning) undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "tradgardsarbetare": {
        slug: "tradgardsarbetare",
        professionName: "Trädgårdsarbetare",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en trädgårdsarbetare är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många trädgårdsarbetare undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "kallskanka": {
        slug: "kallskanka",
        professionName: "Kallskänka",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en kallskänka är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många kallskänka undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "servicetekniker-maskiner": {
        slug: "servicetekniker-maskiner",
        professionName: "Servicetekniker maskiner",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en servicetekniker maskiner är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många servicetekniker maskiner undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "produktionstekniker": {
        slug: "produktionstekniker",
        professionName: "Produktionstekniker",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en produktionstekniker är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många produktionstekniker undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "brandman": {
        slug: "brandman",
        professionName: "Brandman",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en brandman är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många brandman undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
    "larmoperator-112": {
        slug: "larmoperator-112",
        professionName: "Larmoperatör (112)",
        step2List: [
            "Arbetsgivarintyg från din arbetsgivare",
            "Anställningsbevis",
            "Uppsägningsbesked"
        ],
        step3Reason: "För en larmoperatör (112) är det viktigt att arbetsgivarintyget är korrekt ifyllt för att din a-kassa ska kunna besluta om rätt ersättning.",
        step4Questions: "Många larmoperatör (112) undrar hur handläggningstiden påverkas om intyg saknas och vad som gäller under väntetiden."
    },
};
