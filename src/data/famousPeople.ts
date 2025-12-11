export interface FamousPerson {
    name: string;
    description: string;
}

export const famousPeople: Record<string, FamousPerson[]> = {
    "administrator": [
        { name: "Angela Merkel", description: "arbetade som administrativ forskningsledare." },
        { name: "Indra Nooyi", description: "började karriären i administrativa roller innan hon blev CEO." }
    ],
    "banktjansteman": [
        { name: "Ray Kroc", description: "arbetade med finansiella och bankrelaterade uppgifter." },
        { name: "Warren Buffett", description: "arbetade inom finans/bank i unga år." }
    ],
    "barnskotare": [
        { name: "Julia Roberts", description: "arbetade som barnflicka." },
        { name: "Halle Berry", description: "arbetade som nanny." }
    ],
    "bussforare": [
        { name: "Alec Guinness", description: "körde buss i London." },
        { name: "James Cameron", description: "körde buss innan filmkarriären." }
    ],
    "butikssaljare": [
        { name: "Megan Fox", description: "arbetade i butik." },
        { name: "Barack Obama", description: "arbetade i Baskin Robbins." }
    ],
    "byggnadsarbetare": [
        { name: "Ozzy Osbourne", description: "arbetade inom bygg." },
        { name: "Arnold Schwarzenegger", description: "arbetade som murare." }
    ],
    "ekonom": [
        { name: "Sheryl Sandberg", description: "ekonom och tidigare CFO." },
        { name: "Elena Lagadinova", description: "välkänd ekonom." }
    ],
    "elektriker": [
        { name: "George Harrison", description: "elektrikerlärling." },
        { name: "Vernon Presley", description: "elektriker." }
    ],
    "forskollarare": [
        { name: "Tina Fey", description: "arbetade med barngrupper." },
        { name: "Hugh Jackman", description: "var lärare för barn." }
    ],
    "frisor": [
        { name: "Sharon Osbourne", description: "arbetade i frisörverksamhet." },
        { name: "Madonna", description: "frisörassistent." }
    ],
    "ingenjor": [
        { name: "Rowan Atkinson", description: "elingenjör." },
        { name: "Herbert Hoover", description: "gruvingenjör." }
    ],
    "it-konsult": [
        { name: "Larry Ellison", description: "teknisk IT-konsult." },
        { name: "Satya Nadella", description: "teknisk rådgivare." }
    ],
    "journalist": [
        { name: "Oprah Winfrey", description: "TV-journalist." },
        { name: "Anderson Cooper", description: "CNN-journalist." }
    ],
    "kock": [
        { name: "Jamie Oliver", description: "professionell kock." },
        { name: "Gordon Ramsay", description: "världsberömd kock." }
    ],
    "lagerarbetare": [
        { name: "Matthew McConaughey", description: "lagerarbetare." },
        { name: "Tom Hardy", description: "distributionslager." }
    ],
    "larare": [
        { name: "Sylvester Stallone", description: "idrottslärare." },
        { name: "J.K. Rowling", description: "engelsklärare." }
    ],
    "lastbilschauffor": [
        { name: "Richard Pryor", description: "körde lastbil." },
        { name: "Sean Connery", description: "lastbilschaufför." }
    ],
    "lokalvardare": [
        { name: "Jennifer Aniston", description: "städare." },
        { name: "Jim Carrey", description: "lokalvårdare." }
    ],
    "lokforare": [
        { name: "Patricia Quinn", description: "arbetade inom järnvägen." },
        { name: "Pete Waterman", description: "lokförare." }
    ],
    "montor": [
        { name: "Eminem", description: "fabriksmonterare." },
        { name: "Michael Caine", description: "montör och packare." }
    ],
    "projektledare": [
        { name: "Marissa Mayer", description: "ledde Google-projekt." },
        { name: "Elon Musk", description: "projektledde tekniska projekt." }
    ],
    "saljare": [
        { name: "Dwayne Johnson", description: "telefonsäljare." },
        { name: "Steve Jobs", description: "tekniksäljare." }
    ],
    "serveringspersonal": [
        { name: "Jennifer Lopez", description: "servitris." },
        { name: "Lady Gaga", description: "servitris i New York." }
    ],
    "sjukskoterska": [
        { name: "Mary Seacole", description: "historisk sjuksköterska." },
        { name: "Florence Nightingale", description: "modern sjuksköterskas grundare." }
    ],
    "snickare": [
        { name: "Nick Offerman", description: "professionell snickare." },
        { name: "Harrison Ford", description: "snickare i Hollywood." }
    ],
    "socialsekreterare": [
        { name: "Alice Walker", description: "arbetade inom socialtjänst." },
        { name: "Jill Biden", description: "arbetade inom sociala program." }
    ],
    "svetsare": [
        { name: "Eric Church", description: "svetsare." },
        { name: "Weldon Myrick", description: "svetsare." }
    ],
    "taxichauffor": [
        { name: "Robert De Niro", description: "körde taxi periodvis." },
        { name: "Danny DeVito", description: "taxichaufför." }
    ],
    "underskoterska": [
        { name: "Naomi Judd", description: "vårdbiträde." },
        { name: "Whoopi Goldberg", description: "undersköterska." }
    ],
    "verktygsmakare": [
        { name: "Billy Connolly", description: "verktygsarbetare." },
        { name: "Paul Teutul Sr.", description: "verktygsmakare." }
    ],
    "systemutvecklare": [
        { name: "Mark Zuckerberg", description: "arbetade som systemutvecklare innan Facebook." },
        { name: "Linus Torvalds", description: "systemutvecklare bakom Linux." }
    ],
    "webbutvecklare": [
        { name: "Jack Dorsey", description: "programmerade och byggde tidiga versioner av Twitter." },
        { name: "Evan You", description: "webbutvecklare som skapade Vue.js." }
    ],
    "hr-specialist": [
        { name: "Laszlo Bock", description: "tidigare HR-chef på Google, började i HR-specialistroller." },
        { name: "Pat Wadors", description: "arbetade som HR-specialist innan hon blev HR-chef på LinkedIn." }
    ],
    "hr-chef": [
        { name: "Sheryl Sandberg", description: "arbetade inom HR-ledning tidigt i karriären." },
        { name: "Mary Barra", description: "hade chefsroller inom HR innan hon blev CEO för General Motors." }
    ],
    "personalvetare": [
        { name: "Susan Wojcicki", description: "började sin karriär med personal- och organisationsinriktade roller." },
        { name: "Anne Mulcahy", description: "arbetade med personalfrågor innan hon blev VD för Xerox." }
    ],
    "receptionist-kontor": [
        { name: "Jennifer Aniston", description: "receptionist innan skådespelarkarriären tog fart." },
        { name: "Courteney Cox", description: "arbetade som receptionist i sina tidiga år." }
    ],
    "kontorist": [
        { name: "J.K. Rowling", description: "arbetade som kontorsassistent och sekreterare." },
        { name: "Harper Lee", description: "var kontorsassistent innan hon blev författare." }
    ],
    "brevsorterare": [
        { name: "Charles Bukowski", description: "arbetade på US Postal Service med sortering." },
        { name: "Faulkner McCord", description: "verklig brevbärare och sorterare som blev känd genom dokumentärer." }
    ],
    "tandhygienist": [
        { name: "Paige Hathaway", description: "arbetade som tandhygienist innan hon blev fitnessprofil." },
        { name: "Whitney Rose", description: "realityprofil som arbetat deltid som tandhygienist." }
    ],
    "tandskoterska": [
        { name: "Carol Smillie", description: "arbetade som dental assistant innan hon blev programledare." },
        { name: "Melanie Brown (Mel B)", description: "jobbade kort som dental assistant innan Spice Girls." }
    ],
    "tandlakare": [
        { name: "Zahi Hawass", description: "arbetade som tandläkare tidigt innan han blev arkeologiprofessor." },
        { name: "Paul Revere", description: "amerikan och faktiskt utbildad samt arbetande tandläkare." }
    ],
    "vardcentraladministrator": [
        { name: "Sarah Huckabee Sanders", description: "arbetade som administrativ assistent i vårdmiljö i unga år." },
        { name: "Joanne Rowling (J.K. Rowling)", description: "arbetade administrativt på klinik tidigt i karriären." }
    ],
    "apotekstekniker": [
        { name: "Chris Rock", description: "jobbade på ett apotek som tekniker under sin ungdom." },
        { name: "Taye Diggs", description: "arbetade som apotekstekniker innan skådespeleriet tog fart." }
    ],
    "apotekare": [
        { name: "Agatha Christie", description: "utbildad apotekare och arbetade under WW1." },
        { name: "Hubert Humphrey", description: "amerikansk vicepresident, utbildad farmaceut & apotekare." }
    ],
    "butiksledare": [
        { name: "Howard Schultz", description: "jobbade sig upp från butiksgolv till ledare innan Starbucks-expansionen." },
        { name: "Sam Walton", description: "började i butik och blev butikschef innan han grundade Walmart." }
    ],
    "e-handelslogistiker": [
        { name: "Tobias Lütke", description: "arbetade med logistiska och operativa delar innan han byggde Shopify." },
        { name: "Jeff Bezos", description: "utvecklade logistiska system i sina tidiga Amazonår." }
    ],
    "chauffor-latt-lastbil": [
        { name: "Jason Statham", description: "körde varutransporter före skådespeleriet." },
        { name: "George Clooney", description: "jobbade som transportchaufför i unga år." }
    ],
    "behorig-elektriker-service": [
        { name: "Elvis Presley", description: "utbildade sig till elektriker och arbetade kort innan musiken." },
        { name: "Rowan Atkinson", description: "hade elektrikerutbildning och jobbat tekniskt innan comedykarriären." }
    ],
    "vaktare": [
        { name: "Sylvester Stallone", description: "arbetade som säkerhetsvakt i början av sin karriär." },
        { name: "Liam Neeson", description: "jobbade som dörrvakt/väktare innan filmsuccén." }
    ],
    "kundtjanstmedarbetare": [
        { name: "Chris Pratt", description: "jobbade i kundtjänst och som telefonist innan acting." },
        { name: "Nicki Minaj", description: "arbetade i kundservice tidigt i karriären." }
    ],
    "telefonsaljare": [
        { name: "Johnny Depp", description: "arbetade som telefonförsäljare innan sin filmkarriär." },
        { name: "Jennifer Aniston", description: "jobbade med telemarketing tidigt." }
    ],
    "hr-administrator": [
        { name: "Indra Nooyi", description: "började med HR-nära administrativa roller innan PepsiCo-karriären." },
        { name: "Marissa Mayer", description: "hade HR-administrativa och personalrelaterade uppgifter i Googles tidiga fas." }
    ],
    "arbetsledare-industri": [
        { name: "Henry Ford", description: "arbetade som arbetsledare innan han blev industripionjär." },
        { name: "Lee Iacocca", description: "började som arbetsledare innan han blev Ford-chef." }
    ],
    "maskinforare-bygg-anlaggning": [
        { name: "Jeremy Renner", description: "utbildad maskinförare och har drivit byggmaskiner." },
        { name: "Arnold Schwarzenegger", description: "har arbetat med anläggningsmaskiner i tidiga år." }
    ],
    "tradgardsarbetare": [
        { name: "Bob Ross", description: "trädgårdsarbetare innan hans militära och konstkarriär." },
        { name: "George Harrison", description: "älskade trädgårdsarbete och arbetade deltid med det även före Beatles." }
    ],
    "kallskanka": [
        { name: "Gordon Ramsay", description: "arbetade som kallskänka/commis i starten av sin kockutbildning." },
        { name: "Anthony Bourdain", description: "hade kallskänksroller innan han blev kökschef." }
    ],
    "servicetekniker-maskiner": [
        { name: "Michael Dell", description: "reparerade datorer och maskiner innan Dell grundades." },
        { name: "Steve Jobs", description: "arbetade som tekniker/servicereparatör på Atari." }
    ],
    "produktionstekniker": [
        { name: "Elon Musk", description: "arbetade med produktionsoptimering i sina tidiga ingenjörsroller." },
        { name: "Tim Cook", description: "expert på produktionskedjor och började som produktionsteknikrelaterad analytiker." }
    ],
    "brandman": [
        { name: "Steve Buscemi", description: "verklig brandman som återvände för att hjälpa vid 9/11." },
        { name: "Paul Rudd", description: "deltidsbrandman i unga år." }
    ],
    "larmoperator-112": [
        { name: "Kathy Burke", description: "arbetade som emergency call operator innan skådespelarkarriären." },
        { name: "Renee Zellweger", description: "hade ett tidigt jobb som telefonoperatör i krislarmcentral." }
    ]
};
