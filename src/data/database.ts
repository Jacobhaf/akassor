import { Akassa, Yrke } from "@/types";

export const akassor: Akassa[] = [
    {
        id: "aea",
        members: 760000,
        pricePerMonth: 130,
        employerTypes: ["privat_borsnoterat", "kommun_region", "myndighet", "eget_foretag"],
        partner: true,
        maxCompPerMonth: 26400,
        name: "Akademikernas a-kassa",
        relatedFack: "Saco (t.ex. Sveriges Ingenjörer, Akavia)",
        shortName: "AEA",
        slug: "akademikernas-a-kassa",
        website: "https://www.aea.se",
        phone: "08-412 33 00",
        email: "registrator@aea.se",
        primaryIndustries: [
            "Akademiker med minst 180 hp eller kandidatexamen",
            "Studenter med mål 180 hp",
            "Saco-medlemmar",
            "Vårdförbundet-medlemmar",
        ],
        membershipFee: "100 kr/mån",
        exampleJobs: [
            "Systemutvecklare",
            "Webbutvecklare",
            "HR-specialist",
            "HR-chef",
            "Personalvetare",
            "Tandhygienist",
            "Tandläkare",
            "Apotekare",
            "Lärare",
            "Ingenjörer",
            "Sjuksköterskor",
            "IT-konsulter",
            "Ekonomer",
        ],
    },
    {
        id: "alfa",
        members: 160000,
        pricePerMonth: 170,
        employerTypes: ["privat_borsnoterat", "kommun_region", "myndighet", "eget_foretag"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Alfa-kassan",
        slug: "alfa-kassan",
        website: "https://www.alfakassan.se",
        phone: "0771-55 00 99",
        email: "post@alfakassan.se",
        primaryIndustries: [
            "Alla branscher",
            "Anställda",
            "Företagare oavsett yrke",
        ],
        membershipFee: "130 kr/mån",
        exampleJobs: [
            "Lagerarbetare",
            "Butiksbiträden",
            "Administratörer",
            "Byggnadsarbetare",
            "Kockar",
        ],
    },
    {
        id: "seko",
        members: 110000,
        pricePerMonth: 149,
        employerTypes: ["privat_borsnoterat", "myndighet"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Seko a-kassa",
        relatedFack: "Seko",
        slug: "seko-akassa",
        website: "https://www.sekosakassa.se",
        phone: "020-67 80 00",
        email: "akassan@seko.se",
        primaryIndustries: [
            "Post",
            "Tele och data",
            "Järnväg",
            "Sjöfart",
            "Energi",
            "Försvar",
            "Statsförvaltning",
        ],
        membershipFee: "149 kr/mån",
        exampleJobs: [
            "Brevsorterare",
            "Lokförare",
            "Brevbärare",
            "Matroser",
            "VVS-montörer",
            "Kriminalvårdare",
        ],
    },
    {
        id: "vision",
        members: 78000,
        pricePerMonth: 150,
        employerTypes: ["kommun_region", "myndighet"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Vision a-kassa",
        relatedFack: "Vision",
        slug: "vision-akassa",
        website: "https://www.akassanvision.se",
        phone: "0771-773 800",
        email: "info@akassanvision.se",
        primaryIndustries: [
            "Administration i kommun och region",
            "Vård skola omsorg",
            "Svenska kyrkan",
        ],
        membershipFee: "115 kr/mån",
        exampleJobs: [
            "Tandsköterska",
            "Vårdcentraladministratör",
            "Socialsekreterare",
            "Biståndshandläggare",
            "Kuratorer",
            "Förvaltningschefer",
            "Behandlingsassistenter",
        ],
    },
    {
        id: "byggnads",
        members: 130000,
        pricePerMonth: 110,
        employerTypes: ["privat_borsnoterat"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Byggnads a-kassa",
        relatedFack: "Byggnads",
        slug: "byggnads-akassa",
        website: "https://www.byggnadsakassa.se",
        phone: "010-601 18 00",
        email: "a-kassan@byggnads.se",
        primaryIndustries: [
            "Byggnadsarbetare",
            "Målare",
            "Småföretagare i måleri",
        ],
        membershipFee: "110 kr/mån med fack, 119 kr/mån utan",
        exampleJobs: [
            "Maskinförare (bygg/anläggning)",
            "Snickare",
            "Betongarbetare",
            "Murare",
            "Målare",
            "Golvläggare",
        ],
    },
    {
        id: "eak",
        members: 25000,
        pricePerMonth: 100,
        employerTypes: ["privat_borsnoterat"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Elektrikernas a-kassa",
        relatedFack: "Elektrikerförbundet",
        slug: "elektrikernas-akassa",
        website: "https://www.elektrikernasakassa.se",
        phone: "0771-469 100",
        email: "eak@sef.se",
        primaryIndustries: [
            "Elteknik",
            "Starkström",
            "Svagström",
            "Hiss",
            "Data",
            "Larm",
            "Energi",
        ],
        membershipFee: "100 kr/mån",
        exampleJobs: [
            "Behörig elektriker-service",
            "Elektriker",
            "Larmtekniker",
            "Hissmontörer",
            "Data- och IT-montörer",
            "Kraftverksoperatörer",
        ],
    },
    {
        id: "fastighets",
        members: 28000,
        pricePerMonth: 115,
        employerTypes: ["privat_borsnoterat"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Fastighets a-kassa",
        relatedFack: "Fastighets",
        slug: "fastighets-akassa",
        website: "https://www.fastighetsakassa.se",
        phone: "08-696 11 50",
        email: "a-kassan.fk@fastighets.se",
        primaryIndustries: [
            "Lokalvård",
            "Fastighetsskötsel",
            "Fönsterputs",
            "VVS",
            "Sanering",
        ],
        membershipFee: "115 kr/mån",
        exampleJobs: [
            "Lokalvårdare",
            "Fastighetsskötare",
            "Fönsterputsare",
            "VVS-arbetare",
            "Sanerare",
        ],
    },
    {
        id: "ffak",
        members: 35000,
        pricePerMonth: 115,
        employerTypes: ["privat_borsnoterat", "eget_foretag"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Finans- och försäkringsbranschens a-kassa",
        relatedFack: "Finansförbundet / FTF",
        slug: "finans-och-forsakringskassan",
        website: "https://www.ffakassan.se",
        phone: "08-791 17 50",
        email: "fragor@ffakassan.se",
        primaryIndustries: [
            "Finans",
            "Försäkring",
            "Tjänstemän",
            "Företagare i finans och försäkring",
        ],
        membershipFee: "115 kr/mån",
        exampleJobs: [
            "Banktjänstemän",
            "Försäkringsrådgivare",
            "Finansanalytiker",
            "Kundrådgivare",
            "Företagsrådgivare",
        ],
    },
    {
        id: "gs",
        members: 50000,
        pricePerMonth: 150,
        employerTypes: ["privat_borsnoterat"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "GS a-kassa",
        relatedFack: "GS Facket",
        slug: "gs-akassa",
        website: "https://www.gsakassa.se",
        phone: "010-470 68 00",
        email: "kontakt@gsakassa.se",
        primaryIndustries: [
            "Grafisk industri",
            "Träindustri",
            "Skogsbruk",
            "Tryckerier",
            "Förlag",
            "Sågverk",
        ],
        membershipFee: "1,6% av lön (max 493 kr/mån)",
        exampleJobs: [
            "Sågverksarbetare",
            "Tryckare",
            "Skogsmaskinförare",
            "Trähusmontörer",
            "Förpackningsarbetare",
        ],
    },
    {
        id: "hamn",
        members: 3000,
        pricePerMonth: 145,
        employerTypes: ["privat_borsnoterat"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Hamnarbetarnas a-kassa",
        relatedFack: "Hamnarbetarförbundet",
        slug: "hamnarbetarnas-akassa",
        website: "https://hamnakassa.se",
        phone: "031-51 54 11",
        email: "kontakt@hamnakassa.se",
        primaryIndustries: ["Hamn", "Stuveri", "Magasin", "Godsterminaler"],
        membershipFee: "145 kr/mån",
        exampleJobs: [
            "Hamnarbetare",
            "Terminalarbetare",
            "Godsmagasinspersonal",
            "Lastare",
            "Logistikoperatörer",
        ],
    },
    {
        id: "handels",
        members: 184000,
        pricePerMonth: 165,
        employerTypes: ["privat_borsnoterat"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Handels a-kassa",
        relatedFack: "Handels",
        slug: "handels-akassa",
        website: "https://www.handels.se/akassan",
        phone: "0771-666 444",
        email: "akassan@handels.se",
        primaryIndustries: [
            "Detaljhandel",
            "Partihandel",
            "Folkrörelse",
            "Frisörer",
            "Kultur",
            "Yrkesfiskare",
        ],
        membershipFee: "132 kr/mån",
        exampleJobs: [
            "Butiksledare",
            "E-handelslogistiker",
            "Butikssäljare",
            "Lagerarbetare",
            "Frisörer",
            "Kassapersonal",
            "Kulturarbetare",
        ],
    },
    {
        id: "hrak",
        members: 80000,
        pricePerMonth: 130,
        employerTypes: ["privat_borsnoterat"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Hotell- och restaurang a-kassa",
        relatedFack: "Hotell- och restaurangfacket",
        slug: "hrak",
        website: "https://www.hrak.se",
        phone: "0771-435 060",
        email: "akassan@hrak.se",
        primaryIndustries: [
            "Hotell",
            "Restaurang",
            "Kafé",
            "Spa",
            "Catering",
            "Nöjesföretag",
        ],
        membershipFee: "130 kr/mån",
        exampleJobs: [
            "Kallskänka",
            "Kockar",
            "Serveringspersonal",
            "Hotellreceptionister",
            "Hotellstädare",
            "Cateringpersonal",
        ],
    },
    {
        id: "ifmetall",
        members: 270000,
        pricePerMonth: 154,
        employerTypes: ["privat_borsnoterat"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "IF Metalls a-kassa",
        relatedFack: "IF Metall",
        slug: "if-metalls-akassa",
        website: "https://www.ifmetall.se/akassan",
        phone: "",
        email: "akassan@ifmetall.se",
        primaryIndustries: [
            "Verkstadsindustri",
            "Läkemedelsindustri",
            "Stålindustri",
            "Kemiindustri",
        ],
        membershipFee: "106 kr/mån med fack, 116 kr/mån utan",
        exampleJobs: [
            "Arbetsledare industri",
            "Produktionstekniker",
            "Verktygsmakare",
            "Svetsare",
            "Montörer",
            "Läkemedelsoperatörer",
            "Kemiindustriarbetare",
        ],
    },
    {
        id: "journalist",
        members: 15000,
        pricePerMonth: 135,
        employerTypes: ["privat_borsnoterat", "eget_foretag"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Journalisternas a-kassa",
        relatedFack: "Journalistförbundet",
        slug: "journalisternas-akassa",
        website: "https://www.journalisternas-akassa.se",
        phone: "08-613 75 60",
        email: "medlemakassan@sjf.se",
        primaryIndustries: [
            "Journalister anställda",
            "Journalister frilans",
            "Journalister företagare",
        ],
        membershipFee: "135 kr/mån",
        exampleJobs: [
            "Journalister",
            "Fotografer",
            "Redaktörer",
            "Översättare",
            "Frilansskribenter",
        ],
    },
    {
        id: "kommunal",
        members: 600000,
        pricePerMonth: 140,
        employerTypes: ["kommun_region", "privat_borsnoterat"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Kommunals a-kassa",
        relatedFack: "Kommunal",
        slug: "kommunals-akassa",
        website: "https://www.kommunalsakassa.se",
        phone: "010-442 75 00",
        email: "",
        primaryIndustries: [
            "Kommun",
            "Landsting och region",
            "Vård",
            "Skola",
            "Omsorg",
            "Räddningstjänst",
            "Park",
        ],
        membershipFee: "102 kr/mån med fack, 105 kr/mån utan",
        exampleJobs: [
            "Trädgårdsarbetare",
            "Brandman",
            "Undersköterskor",
            "Barnskötare",
            "Kökspersonal",
            "Bussförare",
            "Äldreomsorgspersonal",
        ],
    },
    {
        id: "ledarna",
        members: 90000,
        pricePerMonth: 115,
        employerTypes: ["privat_borsnoterat", "kommun_region", "myndighet", "eget_foretag"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Ledarnas a-kassa",
        relatedFack: "Ledarna",
        slug: "ledarnas-akassa",
        website: "https://www.ledarnasakassa.se",
        phone: "08-509 319 00",
        email: "akassan@ledarnasakassa.se",
        primaryIndustries: [
            "Chefer",
            "Ledande befattningar",
            "Familjemedlemmar i företag",
        ],
        membershipFee: "115 kr/mån",
        exampleJobs: [
            "Avdelningschefer",
            "Projektledare",
            "Enhetschefer",
            "VD:ar",
            "Teamledare",
        ],
    },
    {
        id: "livs",
        members: 25000,
        pricePerMonth: 112,
        employerTypes: ["privat_borsnoterat"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Livs a-kassa",
        relatedFack: "Livsmedelsarbetareförbundet",
        slug: "livs-akassa",
        website: "https://www.livs-akassa.se",
        phone: "08-796 29 90",
        email: "akassa@livs.se",
        primaryIndustries: ["Livsmedelsindustri"],
        membershipFee: "112 kr/mån",
        exampleJobs: [
            "Livsmedelsindustriarbetare",
            "Bageriarbetare",
            "Slaktare",
            "Konditorer",
            "Mejeriarbetare",
        ],
    },
    {
        id: "la",
        members: 200000,
        pricePerMonth: 110,
        employerTypes: ["kommun_region", "privat_borsnoterat", "myndighet"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Lärarnas a-kassa",
        relatedFack: "Sveriges Lärare",
        slug: "lararnas-akassa",
        website: "https://www.lararnasakassa.nu",
        phone: "08-737 65 00",
        email: "",
        primaryIndustries: [
            "Utbildning",
            "Lärare",
            "Fritidspedagoger",
            "Vägledare",
        ],
        membershipFee: "110 kr/mån",
        exampleJobs: [
            "Grundskollärare",
            "Förskollärare",
            "Gymnasielärare",
            "Studie- och yrkesvägledare",
            "Rektorer",
        ],
    },
    {
        id: "pappers",
        members: 14000,
        pricePerMonth: 129,
        employerTypes: ["privat_borsnoterat"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Pappers a-kassa",
        relatedFack: "Pappers",
        slug: "pappers-akassa",
        website: "https://www.pappersakassa.se",
        phone: "08-796 61 00",
        email: "ersattningakassan@pappers.se",
        primaryIndustries: ["Pappersindustri", "Massindustri", "Kartongindustri"],
        membershipFee: "129 kr/mån",
        exampleJobs: [
            "Pappersmaskinsoperatörer",
            "Massaarbetare",
            "Kartongtillverkare",
            "Pappersskärare",
            "Tryckpappersarbetare",
        ],
    },
    {
        id: "slak",
        members: 8000,
        pricePerMonth: 140,
        employerTypes: ["privat_borsnoterat", "eget_foretag"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "SLAK",
        relatedFack: "Naturvetarna / Unionen",
        slug: "slak-akassa",
        website: "https://slf-facket.se",
        phone: "08-408 099 65",
        email: "slak@slf.a.se",
        primaryIndustries: [
            "Skogssektorn",
            "Lantbruk",
            "Miljösektorn",
            "Tjänstemän",
            "Egenföretagare",
        ],
        membershipFee: "1% av lön (max 252 kr/mån)",
        exampleJobs: [
            "Skogskonsulenter",
            "Virkesköpare",
            "Lantbrukskonsulenter",
            "Produktionsledare skog",
            "Distriktschefer lantbruk",
        ],
    },
    {
        id: "smaa",
        members: 120000,
        pricePerMonth: 128,
        employerTypes: ["eget_foretag"],
        partner: true,
        maxCompPerMonth: 26400,
        name: "Småföretagarnas a-kassa",
        relatedFack: "Småföretagarnas Riksförbund",
        slug: "smaforetagarnas-akassa",
        website: "https://www.smakassa.se",
        phone: "08-723 44 00",
        email: "info@smakassa.se",
        primaryIndustries: [
            "Småföretagare",
            "Ägare",
            "VD",
            "Familjemedlemmar i företag",
        ],
        membershipFee: "128 kr/mån",
        exampleJobs: [
            "Ensamföretagare",
            "Butiksägare",
            "Konsulter",
            "Restaurangägare",
            "Taxiföretagare",
        ],
    },
    {
        id: "sts",
        members: 70000,
        pricePerMonth: 110,
        employerTypes: ["myndighet", "privat_borsnoterat"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "STs a-kassa",
        relatedFack: "Fackförbundet ST",
        slug: "sts-akassa",
        website: "https://www.stsakassa.se",
        phone: "08-517 590 00",
        email: "ersattning@stsakassa.se",
        primaryIndustries: ["Stat", "Kommun", "Skattefinansierad service"],
        membershipFee: "110 kr/mån",
        exampleJobs: [
            "Larmoperatör (112)",
            "Administratörer stat",
            "Handläggare myndigheter",
            "Arkivarier",
            "IT-support offentlig sektor",
            "Personalhandläggare",
        ],
    },
    {
        id: "sha",
        members: 20000,
        pricePerMonth: 129,
        employerTypes: ["eget_foretag"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Svensk Handels a-kassa",
        relatedFack: "Svensk Handel / Företagarna",
        slug: "svensk-handels-akassa",
        website: "https://www.akassan.com",
        phone: "08-506 471 00",
        email: "",
        primaryIndustries: [
            "Företagare i handel",
            "Service",
            "Tillverkning",
            "Jordbruk",
        ],
        membershipFee: "129 kr/mån",
        exampleJobs: [
            "Handelsföretagare",
            "Butiksägare",
            "Serviceföretagare",
            "Familjeföretagare handel",
            "Logistikföretagare",
        ],
    },
    {
        id: "saak",
        members: 9500,
        pricePerMonth: 145,
        employerTypes: ["privat_borsnoterat", "eget_foretag"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Sveriges arbetares a-kassa",
        relatedFack: "SAC Syndikalisterna",
        slug: "saak",
        website: "https://www.saak.se",
        phone: "08-545 912 50",
        email: "kontakt@saak.se",
        primaryIndustries: [
            "Alla branscher",
            "Anställda",
            "Egenföretagare utan anställda",
        ],
        membershipFee: "135 kr/mån",
        exampleJobs: [
            "Industriarbetare",
            "Tjänstemän",
            "Lagerpersonal",
            "Byggnadsarbetare",
            "Servicearbetare",
        ],
    },
    {
        id: "saljarnas",
        members: 40000,
        pricePerMonth: 130,
        employerTypes: ["privat_borsnoterat", "eget_foretag"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Säljarnas a-kassa",
        relatedFack: "Säljarnas Riksförbund",
        slug: "saljarnas-akassa",
        website: "https://www.saljarnas-akassa.se",
        phone: "08-617 02 60",
        email: "info@saljarnas-akassa.se",
        primaryIndustries: [
            "Säljare av varor",
            "Säljare av tjänster",
            "Anställda säljare",
            "Egenföretagare säljare",
        ],
        membershipFee: "130 kr/mån",
        exampleJobs: [
            "Fältsäljare",
            "Butikssäljare",
            "Marknadsförare",
            "Account managers",
            "Kundansvariga",
        ],
    },
    {
        id: "transport",
        members: 60000,
        pricePerMonth: 120,
        employerTypes: ["privat_borsnoterat"],
        partner: false,
        maxCompPerMonth: 26400,
        name: "Transports a-kassa",
        relatedFack: "Transport",
        slug: "transports-akassa",
        website: "https://www.transportsakassa.se",
        phone: "0771-40 30 01",
        email: "",
        primaryIndustries: ["Transportverksamhet"],
        membershipFee: "120 kr/mån",
        exampleJobs: [
            "Chaufför lätt lastbil",
            "Väktare",
            "Lastbilschaufförer",
            "Bussförare",
            "Terminalarbetare",
            "Taxichaufförer",
            "Flygmekaniker",
        ],
    },
    {
        id: "unionen",
        members: 750000,
        pricePerMonth: 160,
        employerTypes: ["privat_borsnoterat", "eget_foretag"],
        partner: true,
        maxCompPerMonth: 26400,
        name: "Unionens a-kassa",
        relatedFack: "Unionen",
        slug: "unionens-akassa",
        website: "https://www.unionensakassa.se",
        phone: "0770-77 77 88",
        email: "",
        primaryIndustries: [
            "Tjänstemän i teknik",
            "Handel",
            "Transport",
            "Ideella organisationer",
            "Media",
            "Apotek",
        ],
        membershipFee: "Ca 120 kr/mån",
        exampleJobs: [
            "Receptionist (kontor)",
            "Kontorist",
            "Apotekstekniker",
            "Kundtjänstmedarbetare",
            "Telefonsäljare",
            "HR-administratör",
            "Servicetekniker maskiner",
            "Ingenjörer",
            "Ekonomer",
            "Säljare tjänstemän",
            "IT-konsulter",
            "Projektledare",
        ],
    },
];
export const yrken: Yrke[] = [
    {
        "slug": "a-kassehandlaggare",
        "name": "A-kassehandläggare",
        "searchPhrase": "a-kassehandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "administrativ-chef",
        "name": "Administrativ chef",
        "searchPhrase": "administrativ chef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "administrator",
        "name": "Administratör",
        "searchPhrase": "administratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ambassador",
        "name": "Ambassadör",
        "searchPhrase": "ambassadör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "antagningshandlaggare",
        "name": "Antagningshandläggare",
        "searchPhrase": "antagningshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsformedlare",
        "name": "Arbetsförmedlare",
        "searchPhrase": "arbetsförmedlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetskonsulent",
        "name": "Arbetskonsulent",
        "searchPhrase": "arbetskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arkiverare",
        "name": "Arkiverare",
        "searchPhrase": "arkiverare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avdelningsansvarig",
        "name": "Avdelningsansvarig",
        "searchPhrase": "avdelningsansvarig a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avdelningschef",
        "name": "Avdelningschef",
        "searchPhrase": "avdelningschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avtalsansvarig",
        "name": "Avtalsansvarig",
        "searchPhrase": "avtalsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bemanningsassistent",
        "name": "Bemanningsassistent",
        "searchPhrase": "bemanningsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bemanningsplanerare",
        "name": "Bemanningsplanerare",
        "searchPhrase": "bemanningsplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "besoksbokare",
        "name": "Besöksbokare",
        "searchPhrase": "besöksbokare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bostadsformedlare",
        "name": "Bostadsförmedlare",
        "searchPhrase": "bostadsförmedlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "byrasekreterare",
        "name": "Byråsekreterare",
        "searchPhrase": "byråsekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ceo",
        "name": "CEO",
        "searchPhrase": "ceo a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefsarkivarie",
        "name": "Chefsarkivarie",
        "searchPhrase": "chefsarkivarie a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefssekreterare",
        "name": "Chefssekreterare",
        "searchPhrase": "chefssekreterare a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "contract-manager",
        "name": "Contract manager",
        "searchPhrase": "contract manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dokumentator",
        "name": "Dokumentatör",
        "searchPhrase": "dokumentatör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "enhetschef",
        "name": "Enhetschef",
        "searchPhrase": "enhetschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "executive-assistant",
        "name": "Executive assistant",
        "searchPhrase": "executive assistant a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "facility-manager",
        "name": "Facility manager",
        "searchPhrase": "facility manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "foreningskonsulent",
        "name": "Föreningskonsulent",
        "searchPhrase": "föreningskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "foretagskonsult",
        "name": "Företagskonsult",
        "searchPhrase": "företagskonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "foretagsledare",
        "name": "Företagsledare",
        "searchPhrase": "företagsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forvaltningsassistent",
        "name": "Förvaltningsassistent",
        "searchPhrase": "förvaltningsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "generaldirektor",
        "name": "Generaldirektör",
        "searchPhrase": "generaldirektör a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "generalsekreterare",
        "name": "Generalsekreterare",
        "searchPhrase": "generalsekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "headhunter",
        "name": "Headhunter",
        "searchPhrase": "headhunter a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hotellreceptionist",
        "name": "Hotellreceptionist",
        "searchPhrase": "hotellreceptionist a-kassa",
        "recommendedAkassaId": "hrak",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "hr-assistent",
        "name": "HR-assistent",
        "searchPhrase": "hr-assistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hr-chef",
        "name": "HR-chef",
        "searchPhrase": "hr-chef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hr-konsult",
        "name": "HR-konsult",
        "searchPhrase": "hr-konsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hr-specialist",
        "name": "HR-specialist",
        "searchPhrase": "hr-specialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hyresforhandlare",
        "name": "Hyresförhandlare",
        "searchPhrase": "hyresförhandlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "intendent",
        "name": "Intendent",
        "searchPhrase": "intendent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "jobbcoach",
        "name": "Jobbcoach",
        "searchPhrase": "jobbcoach a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kanslist",
        "name": "Kanslist",
        "searchPhrase": "kanslist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kassachef",
        "name": "Kassachef",
        "searchPhrase": "kassachef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kommunsekreterare",
        "name": "Kommunsekreterare",
        "searchPhrase": "kommunsekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kommunvagledare",
        "name": "Kommunvägledare",
        "searchPhrase": "kommunvägledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kompetensutvecklare",
        "name": "Kompetensutvecklare",
        "searchPhrase": "kompetensutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "koncernchef",
        "name": "Koncernchef",
        "searchPhrase": "koncernchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "konsultchef",
        "name": "Konsultchef",
        "searchPhrase": "konsultchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "konsumentvagledare",
        "name": "Konsumentvägledare",
        "searchPhrase": "konsumentvägledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kontorist",
        "name": "Kontorist",
        "searchPhrase": "kontorist a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kontorsassistent",
        "name": "Kontorsassistent",
        "searchPhrase": "kontorsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "koordinator",
        "name": "Koordinator",
        "searchPhrase": "koordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kulturchef",
        "name": "Kulturchef",
        "searchPhrase": "kulturchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kundmottagare",
        "name": "Kundmottagare",
        "searchPhrase": "kundmottagare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kundserviceansvarig",
        "name": "Kundserviceansvarig",
        "searchPhrase": "kundserviceansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "kundtjanstmedarbetare",
        "name": "Kundtjänstmedarbetare",
        "searchPhrase": "kundtjänstmedarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kundvard",
        "name": "Kundvärd",
        "searchPhrase": "kundvärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kursadministrator",
        "name": "Kursadministratör",
        "searchPhrase": "kursadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "leveranskoordinator",
        "name": "Leveranskoordinator",
        "searchPhrase": "leveranskoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lansassessor",
        "name": "Länsassessor",
        "searchPhrase": "länsassessor a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "loneansvarig",
        "name": "Löneansvarig",
        "searchPhrase": "löneansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "loneassistent",
        "name": "Löneassistent",
        "searchPhrase": "löneassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lonehandlaggare",
        "name": "Lönehandläggare",
        "searchPhrase": "lönehandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lonespecialist",
        "name": "Lönespecialist",
        "searchPhrase": "lönespecialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "managementkonsult",
        "name": "Managementkonsult",
        "searchPhrase": "managementkonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "metodutvecklare",
        "name": "Metodutvecklare",
        "searchPhrase": "metodutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "motesbokare",
        "name": "Mötesbokare",
        "searchPhrase": "mötesbokare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "namndsekreterare",
        "name": "Nämndsekreterare",
        "searchPhrase": "nämndsekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "naringslivschef",
        "name": "Näringslivschef",
        "searchPhrase": "näringslivschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "naringslivsutvecklare",
        "name": "Näringslivsutvecklare",
        "searchPhrase": "näringslivsutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "omradeschef",
        "name": "Områdeschef",
        "searchPhrase": "områdeschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ordermottagare",
        "name": "Ordermottagare",
        "searchPhrase": "ordermottagare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "organisationskonsult",
        "name": "Organisationskonsult",
        "searchPhrase": "organisationskonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "organisationsutvecklare",
        "name": "Organisationsutvecklare",
        "searchPhrase": "organisationsutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "patentassistent",
        "name": "Patentassistent",
        "searchPhrase": "patentassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "personaladministrator",
        "name": "Personaladministratör",
        "searchPhrase": "personaladministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "personalansvarig",
        "name": "Personalansvarig",
        "searchPhrase": "personalansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "personalchef",
        "name": "Personalchef",
        "searchPhrase": "personalchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "personalassistent",
        "name": "Personalassistent",
        "searchPhrase": "personalassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "personaldirektor",
        "name": "Personaldirektör",
        "searchPhrase": "personaldirektör a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "personalhandlaggare",
        "name": "Personalhandläggare",
        "searchPhrase": "personalhandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "personalledare",
        "name": "Personalledare",
        "searchPhrase": "personalledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "personalsekreterare",
        "name": "Personalsekreterare",
        "searchPhrase": "personalsekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "personalstrateg",
        "name": "Personalstrateg",
        "searchPhrase": "personalstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "personalutvecklare",
        "name": "Personalutvecklare",
        "searchPhrase": "personalutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "personalvetare",
        "name": "Personalvetare",
        "searchPhrase": "personalvetare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "planeringssekreterare",
        "name": "Planeringssekreterare",
        "searchPhrase": "planeringssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "platschef",
        "name": "Platschef",
        "searchPhrase": "platschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "processledare",
        "name": "Processledare",
        "searchPhrase": "processledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "produktionsassistent",
        "name": "Produktionsassistent",
        "searchPhrase": "produktionsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "produktionschef",
        "name": "Produktionschef",
        "searchPhrase": "produktionschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "projektadministrator",
        "name": "Projektadministratör",
        "searchPhrase": "projektadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "projektassistent",
        "name": "Projektassistent",
        "searchPhrase": "projektassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "projektkoordinator",
        "name": "Projektkoordinator",
        "searchPhrase": "projektkoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "projektledare",
        "name": "Projektledare",
        "searchPhrase": "projektledare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "receptionist",
        "name": "Receptionist",
        "searchPhrase": "receptionist a-kassa",
        "recommendedAkassaId": "hrak",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "regionschef",
        "name": "Regionschef",
        "searchPhrase": "regionschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "registrator",
        "name": "Registrator",
        "searchPhrase": "registrator a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "rekryterare",
        "name": "Rekryterare",
        "searchPhrase": "rekryterare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "rekryteringsansvarig",
        "name": "Rekryteringsansvarig",
        "searchPhrase": "rekryteringsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "rekryteringskonsult",
        "name": "Rekryteringskonsult",
        "searchPhrase": "rekryteringskonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "reservdelsadministrator",
        "name": "Reservdelsadministratör",
        "searchPhrase": "reservdelsadministratör a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "resurskonsult",
        "name": "Resurskonsult",
        "searchPhrase": "resurskonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "samhallsplanerare",
        "name": "Samhällsplanerare",
        "searchPhrase": "samhällsplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "samhallsvagledare",
        "name": "Samhällsvägledare",
        "searchPhrase": "samhällsvägledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "schemalaggare",
        "name": "Schemaläggare",
        "searchPhrase": "schemaläggare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sekreterare",
        "name": "Sekreterare",
        "searchPhrase": "sekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "servicehandlaggare",
        "name": "Servicehandläggare",
        "searchPhrase": "servicehandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "serviceradgivare",
        "name": "Servicerådgivare",
        "searchPhrase": "servicerådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "skattehandlaggare",
        "name": "Skattehandläggare",
        "searchPhrase": "skattehandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skyddsombud",
        "name": "Skyddsombud",
        "searchPhrase": "skyddsombud a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "socialassistent",
        "name": "Socialassistent",
        "searchPhrase": "socialassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "socialbidragshandlaggare",
        "name": "Socialbidragshandläggare",
        "searchPhrase": "socialbidragshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "systemforvaltare",
        "name": "Systemförvaltare",
        "searchPhrase": "systemförvaltare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "telefonintervjuare",
        "name": "Telefonintervjuare",
        "searchPhrase": "telefonintervjuare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "telefonist",
        "name": "Telefonist",
        "searchPhrase": "telefonist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tillsynsman",
        "name": "Tillsynsman",
        "searchPhrase": "tillsynsman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "transkriberare",
        "name": "Transkriberare",
        "searchPhrase": "transkriberare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utredare",
        "name": "Utredare",
        "searchPhrase": "utredare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utredningssekreterare",
        "name": "Utredningssekreterare",
        "searchPhrase": "utredningssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vagnparkscontroller",
        "name": "Vagnparkscontroller",
        "searchPhrase": "vagnparkscontroller a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vd-assistent",
        "name": "VD-assistent",
        "searchPhrase": "vd-assistent a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vd",
        "name": "VD",
        "searchPhrase": "vd a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "verksamhetschef",
        "name": "Verksamhetschef",
        "searchPhrase": "verksamhetschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "verksamhetskonsult",
        "name": "Verksamhetskonsult",
        "searchPhrase": "verksamhetskonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "verksamhetsutvecklare",
        "name": "Verksamhetsutvecklare",
        "searchPhrase": "verksamhetsutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "verkstallande-direktor",
        "name": "Verkställande direktör",
        "searchPhrase": "verkställande direktör a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "visumhandlaggare",
        "name": "Visumhandläggare",
        "searchPhrase": "visumhandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vaxeltelefonist",
        "name": "Växeltelefonist",
        "searchPhrase": "växeltelefonist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avgiftshandlaggare",
        "name": "Avgiftshandläggare",
        "searchPhrase": "avgiftshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "administrativ-assistent",
        "name": "Administrativ assistent",
        "searchPhrase": "administrativ assistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "backofficepersonal",
        "name": "Backofficepersonal",
        "searchPhrase": "backofficepersonal a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "office-manager",
        "name": "Office manager",
        "searchPhrase": "office manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hr-generalist",
        "name": "HR-generalist",
        "searchPhrase": "hr-generalist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teamchef",
        "name": "Teamchef",
        "searchPhrase": "teamchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sekretesshandlaggare",
        "name": "Sekretesshandläggare",
        "searchPhrase": "sekretesshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "administrativ-handlaggare",
        "name": "Administrativ handläggare",
        "searchPhrase": "administrativ handläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "administrativ-koordinator",
        "name": "Administrativ koordinator",
        "searchPhrase": "administrativ koordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "affarsenhetschef",
        "name": "Affärsenhetschef",
        "searchPhrase": "affärsenhetschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "affarsforestandare",
        "name": "Affärsföreståndare",
        "searchPhrase": "affärsföreståndare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "affarsforvaltare",
        "name": "Affärsförvaltare",
        "searchPhrase": "affärsförvaltare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "affarskoordinator",
        "name": "Affärskoordinator",
        "searchPhrase": "affärskoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "affarsomradesassistent",
        "name": "Affärsområdesassistent",
        "searchPhrase": "affärsområdesassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "affarsomradeschef",
        "name": "Affärsområdeschef",
        "searchPhrase": "affärsområdeschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utbildningssamordnare",
        "name": "Utbildningssamordnare",
        "searchPhrase": "utbildningssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "alkoholhandlaggare",
        "name": "Alkoholhandläggare",
        "searchPhrase": "alkoholhandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "alkoholinspektor",
        "name": "Alkoholinspektör",
        "searchPhrase": "alkoholinspektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avtalshandlaggare",
        "name": "Avtalshandläggare",
        "searchPhrase": "avtalshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gymvard",
        "name": "Gymvärd",
        "searchPhrase": "gymvärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "regulatory-compliance-manager",
        "name": "Regulatory compliance manager",
        "searchPhrase": "regulatory compliance manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "statstjansteman",
        "name": "Statstjänsteman",
        "searchPhrase": "statstjänsteman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "uppdragschef",
        "name": "Uppdragschef",
        "searchPhrase": "uppdragschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gruppchef",
        "name": "Gruppchef",
        "searchPhrase": "gruppchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hr-koordinator",
        "name": "HR-koordinator",
        "searchPhrase": "hr-koordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "informationssakerhetssamordnare",
        "name": "Informationssäkerhetssamordnare",
        "searchPhrase": "informationssäkerhetssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "general-manager",
        "name": "General manager",
        "searchPhrase": "general manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "distriktschef",
        "name": "Distriktschef",
        "searchPhrase": "distriktschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "folkrorelseutvecklare",
        "name": "Folkrörelseutvecklare",
        "searchPhrase": "folkrörelseutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "project-quality-lead",
        "name": "Project quality lead",
        "searchPhrase": "project quality lead a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chattagent",
        "name": "Chattagent",
        "searchPhrase": "chattagent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "interimschef",
        "name": "Interimschef",
        "searchPhrase": "interimschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "produktchef",
        "name": "Produktchef",
        "searchPhrase": "produktchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kvalitetsutvecklare",
        "name": "Kvalitetsutvecklare",
        "searchPhrase": "kvalitetsutvecklare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "handlaggare",
        "name": "Handläggare",
        "searchPhrase": "handläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "domstolshandlaggare",
        "name": "Domstolshandläggare",
        "searchPhrase": "domstolshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forvaltningskoordinator",
        "name": "Förvaltningskoordinator",
        "searchPhrase": "förvaltningskoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "serviceplanerare",
        "name": "Serviceplanerare",
        "searchPhrase": "serviceplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "dokumentationsansvarig",
        "name": "Dokumentationsansvarig",
        "searchPhrase": "dokumentationsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "live-agent",
        "name": "Live agent",
        "searchPhrase": "live agent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "personalplanerare",
        "name": "Personalplanerare",
        "searchPhrase": "personalplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ambassadorassistent",
        "name": "Ambassadörassistent",
        "searchPhrase": "ambassadörassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "egenforetagare",
        "name": "Egenföretagare",
        "searchPhrase": "egenföretagare a-kassa",
        "recommendedAkassaId": "smaa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "foretagare",
        "name": "Företagare",
        "searchPhrase": "företagare a-kassa",
        "recommendedAkassaId": "smaa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "konsult",
        "name": "Konsult",
        "searchPhrase": "konsult a-kassa",
        "recommendedAkassaId": "smaa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "smaforetagare",
        "name": "Småföretagare",
        "searchPhrase": "småföretagare a-kassa",
        "recommendedAkassaId": "smaa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "produktionskoordinator",
        "name": "Produktionskoordinator",
        "searchPhrase": "produktionskoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chief-commercial-officer",
        "name": "Chief commercial officer",
        "searchPhrase": "chief commercial officer a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "politisk-sekreterare",
        "name": "Politisk sekreterare",
        "searchPhrase": "politisk sekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "booking-coordinator",
        "name": "Booking coordinator",
        "searchPhrase": "booking coordinator a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "crew-coordinator",
        "name": "Crew coordinator",
        "searchPhrase": "crew coordinator a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "flygadministrator",
        "name": "Flygadministratör",
        "searchPhrase": "flygadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skoladministrator",
        "name": "Skoladministratör",
        "searchPhrase": "skoladministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hyresadministrator",
        "name": "Hyresadministratör",
        "searchPhrase": "hyresadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "process-manager",
        "name": "Process manager",
        "searchPhrase": "process manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utvecklingsledare",
        "name": "Utvecklingsledare",
        "searchPhrase": "utvecklingsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gruppledare",
        "name": "Gruppledare",
        "searchPhrase": "gruppledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "logistiksamordnare",
        "name": "Logistiksamordnare",
        "searchPhrase": "logistiksamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "filialchef",
        "name": "Filialchef",
        "searchPhrase": "filialchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bitradande-chef",
        "name": "Biträdande chef",
        "searchPhrase": "biträdande chef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "knowledge-manager",
        "name": "Knowledge manager",
        "searchPhrase": "knowledge manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "politisk-tjansteman",
        "name": "Politisk tjänsteman",
        "searchPhrase": "politisk tjänsteman a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "product-manager",
        "name": "Product manager",
        "searchPhrase": "product manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vagadministrator",
        "name": "Vågadministratör",
        "searchPhrase": "vågadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "telefonkommunikator",
        "name": "Telefonkommunikatör",
        "searchPhrase": "telefonkommunikatör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "compliance-officer",
        "name": "Compliance officer",
        "searchPhrase": "compliance officer a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forbundskoordinator",
        "name": "Förbundskoordinator",
        "searchPhrase": "förbundskoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fn-personal",
        "name": "FN-personal",
        "searchPhrase": "fn-personal a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avbrottsplanerare",
        "name": "Avbrottsplanerare",
        "searchPhrase": "avbrottsplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "quality-assurance-engineer",
        "name": "Quality assurance engineer",
        "searchPhrase": "quality assurance engineer a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "quality-assurance-manager",
        "name": "Quality assurance manager",
        "searchPhrase": "quality assurance manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "quality-assurance-specialist",
        "name": "Quality assurance specialist",
        "searchPhrase": "quality assurance specialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "produktagare",
        "name": "Produktägare",
        "searchPhrase": "produktägare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tullspecialist",
        "name": "Tullspecialist",
        "searchPhrase": "tullspecialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tullagent",
        "name": "Tullagent",
        "searchPhrase": "tullagent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pedagogisk-utvecklare",
        "name": "Pedagogisk utvecklare",
        "searchPhrase": "pedagogisk utvecklare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chief-operating-officer",
        "name": "Chief operating officer",
        "searchPhrase": "chief operating officer a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "anbudsassistent",
        "name": "Anbudsassistent",
        "searchPhrase": "anbudsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "servicemedarbetare",
        "name": "Servicemedarbetare",
        "searchPhrase": "servicemedarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "aktiveringsledare",
        "name": "Aktiveringsledare",
        "searchPhrase": "aktiveringsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "amanuens",
        "name": "Amanuens",
        "searchPhrase": "amanuens a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "besoksintervjuare",
        "name": "Besöksintervjuare",
        "searchPhrase": "besöksintervjuare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hr-administrator",
        "name": "HR-administratör",
        "searchPhrase": "hr-administratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefsassistent",
        "name": "Chefsassistent",
        "searchPhrase": "chefsassistent a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kontorsansvarig",
        "name": "Kontorsansvarig",
        "searchPhrase": "kontorsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "upphandlingschef",
        "name": "Upphandlingschef",
        "searchPhrase": "upphandlingschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "it-administrator",
        "name": "IT-administratör",
        "searchPhrase": "it-administratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "servicekoordinator",
        "name": "Servicekoordinator",
        "searchPhrase": "servicekoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "planchef",
        "name": "Planchef",
        "searchPhrase": "planchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "community-manager",
        "name": "Community manager",
        "searchPhrase": "community manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fastighetschef",
        "name": "Fastighetschef",
        "searchPhrase": "fastighetschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vardcentralchef",
        "name": "Vårdcentralchef",
        "searchPhrase": "vårdcentralchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "klareringshandlaggare",
        "name": "Klareringshandläggare",
        "searchPhrase": "klareringshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tillstandshandlaggare",
        "name": "Tillståndshandläggare",
        "searchPhrase": "tillståndshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "underrattelsehandlaggare",
        "name": "Underrättelsehandläggare",
        "searchPhrase": "underrättelsehandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fritidsintendent",
        "name": "Fritidsintendent",
        "searchPhrase": "fritidsintendent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "affarsutvecklingschef",
        "name": "Affärsutvecklingschef",
        "searchPhrase": "affärsutvecklingschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ersattningshandlaggare",
        "name": "Ersättningshandläggare",
        "searchPhrase": "ersättningshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kundservicemedarbetare",
        "name": "Kundservicemedarbetare",
        "searchPhrase": "kundservicemedarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "dokumentcontroller",
        "name": "Dokumentcontroller",
        "searchPhrase": "dokumentcontroller a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefsutvecklare",
        "name": "Chefsutvecklare",
        "searchPhrase": "chefsutvecklare a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "naringslivsstrateg",
        "name": "Näringslivsstrateg",
        "searchPhrase": "näringslivsstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kliniksamordnare",
        "name": "Kliniksamordnare",
        "searchPhrase": "kliniksamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "verksamhetssamordnare",
        "name": "Verksamhetssamordnare",
        "searchPhrase": "verksamhetssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "administrationssekreterare",
        "name": "Administrationssekreterare",
        "searchPhrase": "administrationssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "administrativ-diarieansvarig",
        "name": "Administrativ diarieansvarig",
        "searchPhrase": "administrativ diarieansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "administrativ-direktor",
        "name": "Administrativ direktör",
        "searchPhrase": "administrativ direktör a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "administrativ-enhetschef",
        "name": "Administrativ enhetschef",
        "searchPhrase": "administrativ enhetschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "administrativ-forvaltare",
        "name": "Administrativ förvaltare",
        "searchPhrase": "administrativ förvaltare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "administrativ-inkopare",
        "name": "Administrativ inköpare",
        "searchPhrase": "administrativ inköpare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "administrativ-konsulent",
        "name": "Administrativ konsulent",
        "searchPhrase": "administrativ konsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "administrativ-konsult",
        "name": "Administrativ konsult",
        "searchPhrase": "administrativ konsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "administrativ-ledare",
        "name": "Administrativ ledare",
        "searchPhrase": "administrativ ledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "administrativ-planerare",
        "name": "Administrativ planerare",
        "searchPhrase": "administrativ planerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "administrativ-samordnare",
        "name": "Administrativ samordnare",
        "searchPhrase": "administrativ samordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "administrativ-utvecklare",
        "name": "Administrativ utvecklare",
        "searchPhrase": "administrativ utvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "administrativt-ansvarig",
        "name": "Administrativt ansvarig",
        "searchPhrase": "administrativt ansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ansvarsbitrade",
        "name": "Ansvarsbiträde",
        "searchPhrase": "ansvarsbiträde a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetschef",
        "name": "Arbetschef",
        "searchPhrase": "arbetschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsforman",
        "name": "Arbetsförman",
        "searchPhrase": "arbetsförman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetslagsledare",
        "name": "Arbetslagsledare",
        "searchPhrase": "arbetslagsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsmarknadsansvarig",
        "name": "Arbetsmarknadsansvarig",
        "searchPhrase": "arbetsmarknadsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsmarknadsassistent",
        "name": "Arbetsmarknadsassistent",
        "searchPhrase": "arbetsmarknadsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsmarknadschef",
        "name": "Arbetsmarknadschef",
        "searchPhrase": "arbetsmarknadschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsmarknadscoach",
        "name": "Arbetsmarknadscoach",
        "searchPhrase": "arbetsmarknadscoach a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsmarknadshandlaggare",
        "name": "Arbetsmarknadshandläggare",
        "searchPhrase": "arbetsmarknadshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsmarknadslots",
        "name": "Arbetsmarknadslots",
        "searchPhrase": "arbetsmarknadslots a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsmarknadssamordnare",
        "name": "Arbetsmarknadssamordnare",
        "searchPhrase": "arbetsmarknadssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsmarknadssekreterare",
        "name": "Arbetsmarknadssekreterare",
        "searchPhrase": "arbetsmarknadssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsmarknadsstrateg",
        "name": "Arbetsmarknadsstrateg",
        "searchPhrase": "arbetsmarknadsstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsmiljoassistent",
        "name": "Arbetsmiljöassistent",
        "searchPhrase": "arbetsmiljöassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsmiljocontroller",
        "name": "Arbetsmiljöcontroller",
        "searchPhrase": "arbetsmiljöcontroller a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsmiljokonsulent",
        "name": "Arbetsmiljökonsulent",
        "searchPhrase": "arbetsmiljökonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsmiljosamordnare",
        "name": "Arbetsmiljösamordnare",
        "searchPhrase": "arbetsmiljösamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsmiljosekreterare",
        "name": "Arbetsmiljösekreterare",
        "searchPhrase": "arbetsmiljösekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsmiljotekniker",
        "name": "Arbetsmiljötekniker",
        "searchPhrase": "arbetsmiljötekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsmiljoutvecklare",
        "name": "Arbetsmiljöutvecklare",
        "searchPhrase": "arbetsmiljöutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsplanerare",
        "name": "Arbetsplanerare",
        "searchPhrase": "arbetsplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsplatssamordnare",
        "name": "Arbetsplatssamordnare",
        "searchPhrase": "arbetsplatssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "av-assistent",
        "name": "AV-assistent",
        "searchPhrase": "av-assistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "av-bitrade",
        "name": "AV-biträde",
        "searchPhrase": "av-biträde a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "av-chef",
        "name": "AV-chef",
        "searchPhrase": "av-chef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avdelningsassistent",
        "name": "Avdelningsassistent",
        "searchPhrase": "avdelningsassistent a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avdelningschefssekreterare",
        "name": "Avdelningschefssekreterare",
        "searchPhrase": "avdelningschefssekreterare a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avdelningsforestandare",
        "name": "Avdelningsföreståndare",
        "searchPhrase": "avdelningsföreståndare a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avdelningshandlaggare",
        "name": "Avdelningshandläggare",
        "searchPhrase": "avdelningshandläggare a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avdelningssamordnare",
        "name": "Avdelningssamordnare",
        "searchPhrase": "avdelningssamordnare a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avdelningssekreterare",
        "name": "Avdelningssekreterare",
        "searchPhrase": "avdelningssekreterare a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avgiftsadministrator",
        "name": "Avgiftsadministratör",
        "searchPhrase": "avgiftsadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avgiftsassistent",
        "name": "Avgiftsassistent",
        "searchPhrase": "avgiftsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avtalsassistent",
        "name": "Avtalsassistent",
        "searchPhrase": "avtalsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avtalssamordnare",
        "name": "Avtalssamordnare",
        "searchPhrase": "avtalssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avtalssekreterare",
        "name": "Avtalssekreterare",
        "searchPhrase": "avtalssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bemanningsadministrator",
        "name": "Bemanningsadministratör",
        "searchPhrase": "bemanningsadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bemanningsformedlare",
        "name": "Bemanningsförmedlare",
        "searchPhrase": "bemanningsförmedlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bemanningssamordnare",
        "name": "Bemanningssamordnare",
        "searchPhrase": "bemanningssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "beredningssekreterare",
        "name": "Beredningssekreterare",
        "searchPhrase": "beredningssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bestallare",
        "name": "Beställare",
        "searchPhrase": "beställare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bestallarsamordnare",
        "name": "Beställarsamordnare",
        "searchPhrase": "beställarsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bestallningsmottagare",
        "name": "Beställningsmottagare",
        "searchPhrase": "beställningsmottagare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bestallningsoperator",
        "name": "Beställningsoperatör",
        "searchPhrase": "beställningsoperatör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "besoksassistent",
        "name": "Besöksassistent",
        "searchPhrase": "besöksassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "besoksinformator",
        "name": "Besöksinformatör",
        "searchPhrase": "besöksinformatör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bidragshandlaggare",
        "name": "Bidragshandläggare",
        "searchPhrase": "bidragshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "blocksekreterare",
        "name": "Blocksekreterare",
        "searchPhrase": "blocksekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bokare",
        "name": "Bokare",
        "searchPhrase": "bokare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "borgarradssekreterare",
        "name": "Borgarrådssekreterare",
        "searchPhrase": "borgarrådssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bostadsadministrator",
        "name": "Bostadsadministratör",
        "searchPhrase": "bostadsadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bostadsassistent",
        "name": "Bostadsassistent",
        "searchPhrase": "bostadsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bostadschef",
        "name": "Bostadschef",
        "searchPhrase": "bostadschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bostadsforvaltare",
        "name": "Bostadsförvaltare",
        "searchPhrase": "bostadsförvaltare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bostadshandlaggare",
        "name": "Bostadshandläggare",
        "searchPhrase": "bostadshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bostadsingenjor",
        "name": "Bostadsingenjör",
        "searchPhrase": "bostadsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bostadskonsulent",
        "name": "Bostadskonsulent",
        "searchPhrase": "bostadskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bostadssamordnare",
        "name": "Bostadssamordnare",
        "searchPhrase": "bostadssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bostadssekreterare",
        "name": "Bostadssekreterare",
        "searchPhrase": "bostadssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bostadssocialhandlaggare",
        "name": "Bostadssocialhandläggare",
        "searchPhrase": "bostadssocialhandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bostadsuthyrare",
        "name": "Bostadsuthyrare",
        "searchPhrase": "bostadsuthyrare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bostadsvard",
        "name": "Bostadsvärd",
        "searchPhrase": "bostadsvärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bygglovingenjor",
        "name": "Bygglovingenjör",
        "searchPhrase": "bygglovingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "bygglovsadministrator",
        "name": "Bygglovsadministratör",
        "searchPhrase": "bygglovsadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "bygglovsassistent",
        "name": "Bygglovsassistent",
        "searchPhrase": "bygglovsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "bygglovschef",
        "name": "Bygglovschef",
        "searchPhrase": "bygglovschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "bygglovsekreterare",
        "name": "Bygglovsekreterare",
        "searchPhrase": "bygglovsekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "bygglovsgranskare",
        "name": "Bygglovsgranskare",
        "searchPhrase": "bygglovsgranskare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "bygglovskoordinator",
        "name": "Bygglovskoordinator",
        "searchPhrase": "bygglovskoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "bygglovstekniker",
        "name": "Bygglovstekniker",
        "searchPhrase": "bygglovstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "byggnadsnamndssekreterare",
        "name": "Byggnadsnämndssekreterare",
        "searchPhrase": "byggnadsnämndssekreterare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "byggnadssekreterare",
        "name": "Byggnadssekreterare",
        "searchPhrase": "byggnadssekreterare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "byraadministrator",
        "name": "Byråadministratör",
        "searchPhrase": "byråadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "byraassistent",
        "name": "Byråassistent",
        "searchPhrase": "byråassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "byrachef",
        "name": "Byråchef",
        "searchPhrase": "byråchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefsforestandare",
        "name": "Chefsföreståndare",
        "searchPhrase": "chefsföreståndare a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefsinformator",
        "name": "Chefsinformatör",
        "searchPhrase": "chefsinformatör a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefsinstruktor",
        "name": "Chefsinstruktör",
        "searchPhrase": "chefsinstruktör a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefskonsult",
        "name": "Chefskonsult",
        "searchPhrase": "chefskonsult a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefsresurs",
        "name": "Chefsresurs",
        "searchPhrase": "chefsresurs a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefsstod",
        "name": "Chefsstöd",
        "searchPhrase": "chefsstöd a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefstelefonist",
        "name": "Chefstelefonist",
        "searchPhrase": "chefstelefonist a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "delprojektledare",
        "name": "Delprojektledare",
        "searchPhrase": "delprojektledare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "direktionsassistent",
        "name": "Direktionsassistent",
        "searchPhrase": "direktionsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "direktorsassistent",
        "name": "Direktörsassistent",
        "searchPhrase": "direktörsassistent a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "direktorssekreterare",
        "name": "Direktörssekreterare",
        "searchPhrase": "direktörssekreterare a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "distriktsadministrator",
        "name": "Distriktsadministratör",
        "searchPhrase": "distriktsadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "distriktssekreterare",
        "name": "Distriktssekreterare",
        "searchPhrase": "distriktssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "divisionsassistent",
        "name": "Divisionsassistent",
        "searchPhrase": "divisionsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "divisionschef",
        "name": "Divisionschef",
        "searchPhrase": "divisionschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dokumentsekreterare",
        "name": "Dokumentsekreterare",
        "searchPhrase": "dokumentsekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "e-handelsadministrator",
        "name": "E-handelsadministratör",
        "searchPhrase": "e-handelsadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "enhetsadministrator",
        "name": "Enhetsadministratör",
        "searchPhrase": "enhetsadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "enhetsansvarig",
        "name": "Enhetsansvarig",
        "searchPhrase": "enhetsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "enhetsassistent",
        "name": "Enhetsassistent",
        "searchPhrase": "enhetsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "enhetsledare",
        "name": "Enhetsledare",
        "searchPhrase": "enhetsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "enhetssamordnare",
        "name": "Enhetssamordnare",
        "searchPhrase": "enhetssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "enhetssekreterare",
        "name": "Enhetssekreterare",
        "searchPhrase": "enhetssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "eu-expert",
        "name": "EU-expert",
        "searchPhrase": "eu-expert a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "eu-handlaggare",
        "name": "EU-handläggare",
        "searchPhrase": "eu-handläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "eu-koordinator",
        "name": "EU-koordinator",
        "searchPhrase": "eu-koordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "eu-samordnare",
        "name": "EU-samordnare",
        "searchPhrase": "eu-samordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "expeditionsbitrade",
        "name": "Expeditionsbiträde",
        "searchPhrase": "expeditionsbiträde a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "expeditionschef",
        "name": "Expeditionschef",
        "searchPhrase": "expeditionschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "expeditionsforestandare",
        "name": "Expeditionsföreståndare",
        "searchPhrase": "expeditionsföreståndare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "funktionsansvarig",
        "name": "Funktionsansvarig",
        "searchPhrase": "funktionsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "funktionschef",
        "name": "Funktionschef",
        "searchPhrase": "funktionschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "foretagskoordinator",
        "name": "Företagskoordinator",
        "searchPhrase": "företagskoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forhandlingschef",
        "name": "Förhandlingschef",
        "searchPhrase": "förhandlingschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forhandlingssekreterare",
        "name": "Förhandlingssekreterare",
        "searchPhrase": "förhandlingssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forradsadministrator",
        "name": "Förrådsadministratör",
        "searchPhrase": "förrådsadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gruppsamordnare",
        "name": "Gruppsamordnare",
        "searchPhrase": "gruppsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "informationsansvarig",
        "name": "Informationsansvarig",
        "searchPhrase": "informationsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "informationsassistent",
        "name": "Informationsassistent",
        "searchPhrase": "informationsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "informationschef",
        "name": "Informationschef",
        "searchPhrase": "informationschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "informationshandlaggare",
        "name": "Informationshandläggare",
        "searchPhrase": "informationshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "informationskonsult",
        "name": "Informationskonsult",
        "searchPhrase": "informationskonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "informationskoordinator",
        "name": "Informationskoordinator",
        "searchPhrase": "informationskoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "informationssamordnare",
        "name": "Informationssamordnare",
        "searchPhrase": "informationssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "informationssekreterare",
        "name": "Informationssekreterare",
        "searchPhrase": "informationssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "internationell-koordinator",
        "name": "Internationell koordinator",
        "searchPhrase": "internationell koordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "internationell-sekreterare",
        "name": "Internationell sekreterare",
        "searchPhrase": "internationell sekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "internservicechef",
        "name": "Internservicechef",
        "searchPhrase": "internservicechef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "inventeringsassistent",
        "name": "Inventeringsassistent",
        "searchPhrase": "inventeringsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "inventeringskonsult",
        "name": "Inventeringskonsult",
        "searchPhrase": "inventeringskonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "inventeringssamordnare",
        "name": "Inventeringssamordnare",
        "searchPhrase": "inventeringssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "inventeringssekreterare",
        "name": "Inventeringssekreterare",
        "searchPhrase": "inventeringssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kommundirektor",
        "name": "Kommundirektör",
        "searchPhrase": "kommundirektör a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kontaktsekreterare",
        "name": "Kontaktsekreterare",
        "searchPhrase": "kontaktsekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kontorschef",
        "name": "Kontorschef",
        "searchPhrase": "kontorschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kontorspersonal",
        "name": "Kontorspersonal",
        "searchPhrase": "kontorspersonal a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kontorssamordnare",
        "name": "Kontorssamordnare",
        "searchPhrase": "kontorssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kontorsserviceansvarig",
        "name": "Kontorsserviceansvarig",
        "searchPhrase": "kontorsserviceansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "landstingsradssekreterare",
        "name": "Landstingsrådssekreterare",
        "searchPhrase": "landstingsrådssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lantmaterihandlaggare",
        "name": "Lantmäterihandläggare",
        "searchPhrase": "lantmäterihandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ledamot",
        "name": "Ledamot",
        "searchPhrase": "ledamot a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ledningsassistent",
        "name": "Ledningsassistent",
        "searchPhrase": "ledningsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ledningscontroller",
        "name": "Ledningscontroller",
        "searchPhrase": "ledningscontroller a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ledningssamordnare",
        "name": "Ledningssamordnare",
        "searchPhrase": "ledningssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ledningssekreterare",
        "name": "Ledningssekreterare",
        "searchPhrase": "ledningssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "linjechef",
        "name": "Linjechef",
        "searchPhrase": "linjechef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lansassistent",
        "name": "Länsassistent",
        "searchPhrase": "länsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lanschef",
        "name": "Länschef",
        "searchPhrase": "länschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lanshandlaggare",
        "name": "Länshandläggare",
        "searchPhrase": "länshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lansplanerare",
        "name": "Länsplanerare",
        "searchPhrase": "länsplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lanssamordnare",
        "name": "Länssamordnare",
        "searchPhrase": "länssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lonechef",
        "name": "Lönechef",
        "searchPhrase": "lönechef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lonecontroller",
        "name": "Lönecontroller",
        "searchPhrase": "lönecontroller a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lonekoordinator",
        "name": "Lönekoordinator",
        "searchPhrase": "lönekoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lonesamordnare",
        "name": "Lönesamordnare",
        "searchPhrase": "lönesamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lonestrateg",
        "name": "Lönestrateg",
        "searchPhrase": "lönestrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lonestodjare",
        "name": "Lönestödjare",
        "searchPhrase": "lönestödjare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lonesupport",
        "name": "Lönesupport",
        "searchPhrase": "lönesupport a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "loneutvecklare",
        "name": "Löneutvecklare",
        "searchPhrase": "löneutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lonevagledare",
        "name": "Lönevägledare",
        "searchPhrase": "lönevägledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ma-administrator",
        "name": "Ma-administratör",
        "searchPhrase": "ma-administratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ma-assistent",
        "name": "Ma-assistent",
        "searchPhrase": "ma-assistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ma-chef",
        "name": "Ma-chef",
        "searchPhrase": "ma-chef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ma-handlaggare",
        "name": "Ma-handläggare",
        "searchPhrase": "ma-handläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ma-koordinator",
        "name": "Ma-koordinator",
        "searchPhrase": "ma-koordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "manager",
        "name": "Manager",
        "searchPhrase": "manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "marknadsadministrator",
        "name": "Marknadsadministratör",
        "searchPhrase": "marknadsadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "materialadministrator",
        "name": "Materialadministratör",
        "searchPhrase": "materialadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "materialsekreterare",
        "name": "Materialsekreterare",
        "searchPhrase": "materialsekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mediaadministrator",
        "name": "Mediaadministratör",
        "searchPhrase": "mediaadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "metodadministrator",
        "name": "Metodadministratör",
        "searchPhrase": "metodadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "metodsekreterare",
        "name": "Metodsekreterare",
        "searchPhrase": "metodsekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "myndighetsadministrator",
        "name": "Myndighetsadministratör",
        "searchPhrase": "myndighetsadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "myndighetsansvarig",
        "name": "Myndighetsansvarig",
        "searchPhrase": "myndighetsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "myndighetschef",
        "name": "Myndighetschef",
        "searchPhrase": "myndighetschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "myndighetshandlaggare",
        "name": "Myndighetshandläggare",
        "searchPhrase": "myndighetshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "myndighetssamordnare",
        "name": "Myndighetssamordnare",
        "searchPhrase": "myndighetssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "myndighetssekreterare",
        "name": "Myndighetssekreterare",
        "searchPhrase": "myndighetssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "naringslivsadministrator",
        "name": "Näringslivsadministratör",
        "searchPhrase": "näringslivsadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "naringslivsansvarig",
        "name": "Näringslivsansvarig",
        "searchPhrase": "näringslivsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "naringslivsassistent",
        "name": "Näringslivsassistent",
        "searchPhrase": "näringslivsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "naringslivshandlaggare",
        "name": "Näringslivshandläggare",
        "searchPhrase": "näringslivshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "naringslivskonsulent",
        "name": "Näringslivskonsulent",
        "searchPhrase": "näringslivskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "naringslivskoordinator",
        "name": "Näringslivskoordinator",
        "searchPhrase": "näringslivskoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "naringslivssamordnare",
        "name": "Näringslivssamordnare",
        "searchPhrase": "näringslivssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "omradesadministrator",
        "name": "Områdesadministratör",
        "searchPhrase": "områdesadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "omradesansvarig",
        "name": "Områdesansvarig",
        "searchPhrase": "områdesansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "omradeskoordinator",
        "name": "Områdeskoordinator",
        "searchPhrase": "områdeskoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "omradesledare",
        "name": "Områdesledare",
        "searchPhrase": "områdesledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "omradessamordnare",
        "name": "Områdessamordnare",
        "searchPhrase": "områdessamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "omradessekreterare",
        "name": "Områdessekreterare",
        "searchPhrase": "områdessekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "omradesstrateg",
        "name": "Områdesstrateg",
        "searchPhrase": "områdesstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "omradesutvecklare",
        "name": "Områdesutvecklare",
        "searchPhrase": "områdesutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "operativ-administrator",
        "name": "Operativ administratör",
        "searchPhrase": "operativ administratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "operativ-assistent",
        "name": "Operativ assistent",
        "searchPhrase": "operativ assistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "operativ-chef",
        "name": "Operativ chef",
        "searchPhrase": "operativ chef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "operativ-koordinator",
        "name": "Operativ koordinator",
        "searchPhrase": "operativ koordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "operativ-ledare",
        "name": "Operativ ledare",
        "searchPhrase": "operativ ledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "operativ-samordnare",
        "name": "Operativ samordnare",
        "searchPhrase": "operativ samordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "operativ-specialist",
        "name": "Operativ specialist",
        "searchPhrase": "operativ specialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "operativ-utvecklare",
        "name": "Operativ utvecklare",
        "searchPhrase": "operativ utvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "organisationsanalytiker",
        "name": "Organisationsanalytiker",
        "searchPhrase": "organisationsanalytiker a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "organisationschef",
        "name": "Organisationschef",
        "searchPhrase": "organisationschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "organisationskonsulent",
        "name": "Organisationskonsulent",
        "searchPhrase": "organisationskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "organisationsledare",
        "name": "Organisationsledare",
        "searchPhrase": "organisationsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "organisationspedagog",
        "name": "Organisationspedagog",
        "searchPhrase": "organisationspedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pa-administrator",
        "name": "PA-administratör",
        "searchPhrase": "pa-administratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pa-ansvarig",
        "name": "PA-ansvarig",
        "searchPhrase": "pa-ansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pa-assistent",
        "name": "PA-assistent",
        "searchPhrase": "pa-assistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pa-chef",
        "name": "PA-chef",
        "searchPhrase": "pa-chef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pa-controller",
        "name": "PA-controller",
        "searchPhrase": "pa-controller a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pa-konsulent",
        "name": "PA-konsulent",
        "searchPhrase": "pa-konsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pa-konsult",
        "name": "PA-konsult",
        "searchPhrase": "pa-konsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pa-ledare",
        "name": "PA-ledare",
        "searchPhrase": "pa-ledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pa-samordnare",
        "name": "PA-samordnare",
        "searchPhrase": "pa-samordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pa-specialist",
        "name": "PA-specialist",
        "searchPhrase": "pa-specialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pa-strateg",
        "name": "PA-strateg",
        "searchPhrase": "pa-strateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pa-utvecklare",
        "name": "PA-utvecklare",
        "searchPhrase": "pa-utvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "personalsamordnare",
        "name": "Personalsamordnare",
        "searchPhrase": "personalsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "personalspecialist",
        "name": "Personalspecialist",
        "searchPhrase": "personalspecialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "planassistent",
        "name": "Planassistent",
        "searchPhrase": "planassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "plansamordnare",
        "name": "Plansamordnare",
        "searchPhrase": "plansamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "plansekreterare",
        "name": "Plansekreterare",
        "searchPhrase": "plansekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "planstrateg",
        "name": "Planstrateg",
        "searchPhrase": "planstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "planutvecklare",
        "name": "Planutvecklare",
        "searchPhrase": "planutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "praktikkoordinator",
        "name": "Praktikkoordinator",
        "searchPhrase": "praktikkoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "praktiksamordnare",
        "name": "Praktiksamordnare",
        "searchPhrase": "praktiksamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "projektansvarig",
        "name": "Projektansvarig",
        "searchPhrase": "projektansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "projektchef",
        "name": "Projektchef",
        "searchPhrase": "projektchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "projektcontroller",
        "name": "Projektcontroller",
        "searchPhrase": "projektcontroller a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "projektplanerare",
        "name": "Projektplanerare",
        "searchPhrase": "projektplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "projektsamordnare",
        "name": "Projektsamordnare",
        "searchPhrase": "projektsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "projektspecialist",
        "name": "Projektspecialist",
        "searchPhrase": "projektspecialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "projektutvecklare",
        "name": "Projektutvecklare",
        "searchPhrase": "projektutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "receptionsansvarig",
        "name": "Receptionsansvarig",
        "searchPhrase": "receptionsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "rekryteringsassistent",
        "name": "Rekryteringsassistent",
        "searchPhrase": "rekryteringsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "rekryteringschef",
        "name": "Rekryteringschef",
        "searchPhrase": "rekryteringschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "riskcontroller",
        "name": "Riskcontroller",
        "searchPhrase": "riskcontroller a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "riskingenjor",
        "name": "Riskingenjör",
        "searchPhrase": "riskingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "riskkoordinator",
        "name": "Riskkoordinator",
        "searchPhrase": "riskkoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "riskledare",
        "name": "Riskledare",
        "searchPhrase": "riskledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "riskmanager",
        "name": "Riskmanager",
        "searchPhrase": "riskmanager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "riskradgivare",
        "name": "Riskrådgivare",
        "searchPhrase": "riskrådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "riskstrateg",
        "name": "Riskstrateg",
        "searchPhrase": "riskstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "samordnare",
        "name": "Samordnare",
        "searchPhrase": "samordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "samordningsansvarig",
        "name": "Samordningsansvarig",
        "searchPhrase": "samordningsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "samordningschef",
        "name": "Samordningschef",
        "searchPhrase": "samordningschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "samverkansansvarig",
        "name": "Samverkansansvarig",
        "searchPhrase": "samverkansansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "samverkansstrateg",
        "name": "Samverkansstrateg",
        "searchPhrase": "samverkansstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "schemaansvarig",
        "name": "Schemaansvarig",
        "searchPhrase": "schemaansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "specialistsekreterare",
        "name": "Specialistsekreterare",
        "searchPhrase": "specialistsekreterare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "stadssekreterare",
        "name": "Stadssekreterare",
        "searchPhrase": "stadssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "strategisk-planerare",
        "name": "Strategisk planerare",
        "searchPhrase": "strategisk planerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teamadministrator",
        "name": "Teamadministratör",
        "searchPhrase": "teamadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teamassistent",
        "name": "Teamassistent",
        "searchPhrase": "teamassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "trafikadministrator",
        "name": "Trafikadministratör",
        "searchPhrase": "trafikadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utvecklingsadministrator",
        "name": "Utvecklingsadministratör",
        "searchPhrase": "utvecklingsadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utvecklingsansvarig",
        "name": "Utvecklingsansvarig",
        "searchPhrase": "utvecklingsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utvecklingschef",
        "name": "Utvecklingschef",
        "searchPhrase": "utvecklingschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utvecklingskonsult",
        "name": "Utvecklingskonsult",
        "searchPhrase": "utvecklingskonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utvecklingssamordnare",
        "name": "Utvecklingssamordnare",
        "searchPhrase": "utvecklingssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utvecklingsstrateg",
        "name": "Utvecklingsstrateg",
        "searchPhrase": "utvecklingsstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utvecklingsutredare",
        "name": "Utvecklingsutredare",
        "searchPhrase": "utvecklingsutredare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "verksamhetsadministrator",
        "name": "Verksamhetsadministratör",
        "searchPhrase": "verksamhetsadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "verksamhetsansvarig",
        "name": "Verksamhetsansvarig",
        "searchPhrase": "verksamhetsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vice-verkstallande-direktor",
        "name": "Vice verkställande direktör",
        "searchPhrase": "vice verkställande direktör a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "oversiktsplanerare",
        "name": "Översiktsplanerare",
        "searchPhrase": "översiktsplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "oversattningssekreterare",
        "name": "Översättningssekreterare",
        "searchPhrase": "översättningssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "leveransadministrator",
        "name": "Leveransadministratör",
        "searchPhrase": "leveransadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forskningshandlaggare",
        "name": "Forskningshandläggare",
        "searchPhrase": "forskningshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "innovationsledare",
        "name": "Innovationsledare",
        "searchPhrase": "innovationsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "produktadministrator",
        "name": "Produktadministratör",
        "searchPhrase": "produktadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forandringsledare",
        "name": "Förändringsledare",
        "searchPhrase": "förändringsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "strategikonsult",
        "name": "Strategikonsult",
        "searchPhrase": "strategikonsult a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "digitaliseringssamordnare",
        "name": "Digitaliseringssamordnare",
        "searchPhrase": "digitaliseringssamordnare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kundtjansthandlaggare",
        "name": "Kundtjänsthandläggare",
        "searchPhrase": "kundtjänsthandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "logistikadministrator",
        "name": "Logistikadministratör",
        "searchPhrase": "logistikadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "apotekare",
        "name": "Apotekare",
        "searchPhrase": "apotekare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "apotekschef",
        "name": "Apotekschef",
        "searchPhrase": "apotekschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "apoteksassistent",
        "name": "Apoteksassistent",
        "searchPhrase": "apoteksassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "apotekstekniker",
        "name": "Apotekstekniker",
        "searchPhrase": "apotekstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefsfarmaceut",
        "name": "Chefsfarmaceut",
        "searchPhrase": "chefsfarmaceut a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "biomedicinsk-analytiker",
        "name": "Biomedicinsk analytiker",
        "searchPhrase": "biomedicinsk analytiker a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "farmakolog",
        "name": "Farmakolog",
        "searchPhrase": "farmakolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medicinsk-sekreterare",
        "name": "Medicinsk sekreterare",
        "searchPhrase": "medicinsk sekreterare a-kassa",
        "recommendedAkassaId": "vision",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medicinteknikingenjor",
        "name": "Medicinteknikingenjör",
        "searchPhrase": "medicinteknikingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "nutritionist",
        "name": "Nutritionist",
        "searchPhrase": "nutritionist a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "biomedicinsk-tekniker",
        "name": "Biomedicinsk tekniker",
        "searchPhrase": "biomedicinsk tekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medicinsk-vardadministrator",
        "name": "Medicinsk vårdadministratör",
        "searchPhrase": "medicinsk vårdadministratör a-kassa",
        "recommendedAkassaId": "vision",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "bokhandlare",
        "name": "Bokhandlare",
        "searchPhrase": "bokhandlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "butiksbitrade",
        "name": "Butiksbiträde",
        "searchPhrase": "butiksbiträde a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "butikschef",
        "name": "Butikschef",
        "searchPhrase": "butikschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "butikskommunikator",
        "name": "Butikskommunikatör",
        "searchPhrase": "butikskommunikatör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "butikssaljare",
        "name": "Butikssäljare",
        "searchPhrase": "butikssäljare a-kassa",
        "recommendedAkassaId": "handels",
        "image": "/images/professions/butikssaljare.png"
    },
    {
        "slug": "centrumledare",
        "name": "Centrumledare",
        "searchPhrase": "centrumledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "demonstrator",
        "name": "Demonstratör",
        "searchPhrase": "demonstratör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "expeditor",
        "name": "Expeditör",
        "searchPhrase": "expeditör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fiskhandlare",
        "name": "Fiskhandlare",
        "searchPhrase": "fiskhandlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "jordgubbsforsaljare",
        "name": "Jordgubbsförsäljare",
        "searchPhrase": "jordgubbsförsäljare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kassapersonal",
        "name": "Kassapersonal",
        "searchPhrase": "kassapersonal a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kassor",
        "name": "Kassör",
        "searchPhrase": "kassör a-kassa",
        "recommendedAkassaId": "handels",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kommunikator",
        "name": "Kommunikatör",
        "searchPhrase": "kommunikatör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "livsmedelstekniker",
        "name": "Livsmedelstekniker",
        "searchPhrase": "livsmedelstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mynthandlare",
        "name": "Mynthandlare",
        "searchPhrase": "mynthandlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "biografvard",
        "name": "Biografvärd",
        "searchPhrase": "biografvärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "butiksforestandare",
        "name": "Butiksföreståndare",
        "searchPhrase": "butiksföreståndare a-kassa",
        "recommendedAkassaId": "handels",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kopman",
        "name": "Köpman",
        "searchPhrase": "köpman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bensinstationsarbetare",
        "name": "Bensinstationsarbetare",
        "searchPhrase": "bensinstationsarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mackarbetare",
        "name": "Mackarbetare",
        "searchPhrase": "mackarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "godisplockare",
        "name": "Godisplockare",
        "searchPhrase": "godisplockare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gardinexpert",
        "name": "Gardinexpert",
        "searchPhrase": "gardinexpert a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "butiksmedarbetare",
        "name": "Butiksmedarbetare",
        "searchPhrase": "butiksmedarbetare a-kassa",
        "recommendedAkassaId": "handels",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "delikatessbitrade",
        "name": "Delikatessbiträde",
        "searchPhrase": "delikatessbiträde a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "livsmedelsassistent",
        "name": "Livsmedelsassistent",
        "searchPhrase": "livsmedelsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "livsmedelschef",
        "name": "Livsmedelschef",
        "searchPhrase": "livsmedelschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kioskbitrade",
        "name": "Kioskbiträde",
        "searchPhrase": "kioskbiträde a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "anlaggare",
        "name": "Anläggare",
        "searchPhrase": "anläggare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "anlaggningsarbetare",
        "name": "Anläggningsarbetare",
        "searchPhrase": "anläggningsarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "anlaggningsdykare",
        "name": "Anläggningsdykare",
        "searchPhrase": "anläggningsdykare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsledare",
        "name": "Arbetsledare",
        "searchPhrase": "arbetsledare a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "armerare",
        "name": "Armerare",
        "searchPhrase": "armerare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "asfaltlaggare",
        "name": "Asfaltläggare",
        "searchPhrase": "asfaltläggare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "balkongmontor",
        "name": "Balkongmontör",
        "searchPhrase": "balkongmontör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "belaggningsarbetare",
        "name": "Beläggningsarbetare",
        "searchPhrase": "beläggningsarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bergarbetare",
        "name": "Bergarbetare",
        "searchPhrase": "bergarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bergborrare",
        "name": "Bergborrare",
        "searchPhrase": "bergborrare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bergsingenjor",
        "name": "Bergsingenjör",
        "searchPhrase": "bergsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bergsprangare",
        "name": "Bergsprängare",
        "searchPhrase": "bergsprängare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "betongarbetare",
        "name": "Betongarbetare",
        "searchPhrase": "betongarbetare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "brunnsborrare",
        "name": "Brunnsborrare",
        "searchPhrase": "brunnsborrare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "byggledare",
        "name": "Byggledare",
        "searchPhrase": "byggledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "bygglovshandlaggare",
        "name": "Bygglovshandläggare",
        "searchPhrase": "bygglovshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "byggnadsarbetare",
        "name": "Byggnadsarbetare",
        "searchPhrase": "byggnadsarbetare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "byggnadsingenjor",
        "name": "Byggnadsingenjör",
        "searchPhrase": "byggnadsingenjör a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "byggnadsinspektor",
        "name": "Byggnadsinspektör",
        "searchPhrase": "byggnadsinspektör a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "byggnadskonstruktor",
        "name": "Byggnadskonstruktör",
        "searchPhrase": "byggnadskonstruktör a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "byggnadssnickare",
        "name": "Byggnadssnickare",
        "searchPhrase": "byggnadssnickare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "byggskadereglerare",
        "name": "Byggskadereglerare",
        "searchPhrase": "byggskadereglerare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "byggtekniker",
        "name": "Byggtekniker",
        "searchPhrase": "byggtekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "elementmontor",
        "name": "Elementmontör",
        "searchPhrase": "elementmontör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "energispecialist",
        "name": "Energispecialist",
        "searchPhrase": "energispecialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "entreprenadingenjor",
        "name": "Entreprenadingenjör",
        "searchPhrase": "entreprenadingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "exploateringsingenjor",
        "name": "Exploateringsingenjör",
        "searchPhrase": "exploateringsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fastighetsutvecklare",
        "name": "Fastighetsutvecklare",
        "searchPhrase": "fastighetsutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forradsarbetare",
        "name": "Förrådsarbetare",
        "searchPhrase": "förrådsarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gelbgjutare",
        "name": "Gelbgjutare",
        "searchPhrase": "gelbgjutare a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "geotekniker",
        "name": "Geotekniker",
        "searchPhrase": "geotekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "glasmastare",
        "name": "Glasmästare",
        "searchPhrase": "glasmästare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "golfbanearbetare",
        "name": "Golfbanearbetare",
        "searchPhrase": "golfbanearbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "golvlaggare",
        "name": "Golvläggare",
        "searchPhrase": "golvläggare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "golvslipare",
        "name": "Golvslipare",
        "searchPhrase": "golvslipare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "hissmontor",
        "name": "Hissmontör",
        "searchPhrase": "hissmontör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "haltagare",
        "name": "Håltagare",
        "searchPhrase": "håltagare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "industrimontor",
        "name": "Industrimontör",
        "searchPhrase": "industrimontör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "installationsledare",
        "name": "Installationsledare",
        "searchPhrase": "installationsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "installationssamordnare",
        "name": "Installationssamordnare",
        "searchPhrase": "installationssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "isolerare",
        "name": "Isolerare",
        "searchPhrase": "isolerare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kakelsattare",
        "name": "Kakelsättare",
        "searchPhrase": "kakelsättare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kakelugnsmakare",
        "name": "Kakelugnsmakare",
        "searchPhrase": "kakelugnsmakare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kalkylingenjor",
        "name": "Kalkylingenjör",
        "searchPhrase": "kalkylingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "konstruktor",
        "name": "Konstruktör",
        "searchPhrase": "konstruktör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kopparslagare",
        "name": "Kopparslagare",
        "searchPhrase": "kopparslagare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kranforare",
        "name": "Kranförare",
        "searchPhrase": "kranförare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "kylmontor",
        "name": "Kylmontör",
        "searchPhrase": "kylmontör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "lantmatare",
        "name": "Lantmätare",
        "searchPhrase": "lantmätare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "licenssvetsare",
        "name": "Licenssvetsare",
        "searchPhrase": "licenssvetsare a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "listmontor",
        "name": "Listmontör",
        "searchPhrase": "listmontör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "larling",
        "name": "Lärling",
        "searchPhrase": "lärling a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "maskinforare",
        "name": "Maskinförare",
        "searchPhrase": "maskinförare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "maskinuthyrare",
        "name": "Maskinuthyrare",
        "searchPhrase": "maskinuthyrare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mattlaggare",
        "name": "Mattläggare",
        "searchPhrase": "mattläggare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "montageledare",
        "name": "Montageledare",
        "searchPhrase": "montageledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "montor",
        "name": "Montör",
        "searchPhrase": "montör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "murare",
        "name": "Murare",
        "searchPhrase": "murare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "malare",
        "name": "Målare",
        "searchPhrase": "målare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "malarmastare",
        "name": "Målarmästare",
        "searchPhrase": "målarmästare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pappersskarare",
        "name": "Pappersskärare",
        "searchPhrase": "pappersskärare a-kassa",
        "recommendedAkassaId": "pappers",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "plattsattare",
        "name": "Plattsättare",
        "searchPhrase": "plattsättare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "platslagare",
        "name": "Plåtslagare",
        "searchPhrase": "plåtslagare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "repslagare",
        "name": "Repslagare",
        "searchPhrase": "repslagare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "rivningsarbetare",
        "name": "Rivningsarbetare",
        "searchPhrase": "rivningsarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "rorbockare",
        "name": "Rörbockare",
        "searchPhrase": "rörbockare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "rorlaggare",
        "name": "Rörläggare",
        "searchPhrase": "rörläggare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "rorsvetsare",
        "name": "Rörsvetsare",
        "searchPhrase": "rörsvetsare a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "sanerare",
        "name": "Sanerare",
        "searchPhrase": "sanerare a-kassa",
        "recommendedAkassaId": "fastighets",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skorstensfejare",
        "name": "Skorstensfejare",
        "searchPhrase": "skorstensfejare a-kassa",
        "recommendedAkassaId": "handels",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skorstensfejartekniker",
        "name": "Skorstensfejartekniker",
        "searchPhrase": "skorstensfejartekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "smahusmontor",
        "name": "Småhusmontör",
        "searchPhrase": "småhusmontör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "snickare",
        "name": "Snickare",
        "searchPhrase": "snickare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/images/professions/hantverkare.png"
    },
    {
        "slug": "stadsarkitekt",
        "name": "Stadsarkitekt",
        "searchPhrase": "stadsarkitekt a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "stensattare",
        "name": "Stensättare",
        "searchPhrase": "stensättare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "stallningsbyggare",
        "name": "Ställningsbyggare",
        "searchPhrase": "ställningsbyggare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "symaskinsreparator",
        "name": "Symaskinsreparatör",
        "searchPhrase": "symaskinsreparatör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sattare",
        "name": "Sättare",
        "searchPhrase": "sättare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ta-ingenjor",
        "name": "TA-ingenjör",
        "searchPhrase": "ta-ingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "takmontor",
        "name": "Takmontör",
        "searchPhrase": "takmontör a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "timmerman",
        "name": "Timmerman",
        "searchPhrase": "timmerman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tradgardsanlaggare",
        "name": "Trädgårdsanläggare",
        "searchPhrase": "trädgårdsanläggare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "undertaksmontor",
        "name": "Undertaksmontör",
        "searchPhrase": "undertaksmontör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "utsattare",
        "name": "Utsättare",
        "searchPhrase": "utsättare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ventilationsmontor",
        "name": "Ventilationsmontör",
        "searchPhrase": "ventilationsmontör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "ventilationstekniker",
        "name": "Ventilationstekniker",
        "searchPhrase": "ventilationstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vvs-isolerare",
        "name": "VVS-isolerare",
        "searchPhrase": "vvs-isolerare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vvs-montor",
        "name": "VVS-montör",
        "searchPhrase": "vvs-montör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "vagarbetare",
        "name": "Vägarbetare",
        "searchPhrase": "vägarbetare a-kassa",
        "recommendedAkassaId": "seko",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hantverkare",
        "name": "Hantverkare",
        "searchPhrase": "hantverkare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "solcellsmontor",
        "name": "Solcellsmontör",
        "searchPhrase": "solcellsmontör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "materialarbetare",
        "name": "Materialarbetare",
        "searchPhrase": "materialarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "faltgeotekniker",
        "name": "Fältgeotekniker",
        "searchPhrase": "fältgeotekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gravmaskinsforare",
        "name": "Grävmaskinsförare",
        "searchPhrase": "grävmaskinsförare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "vattenrorlaggare",
        "name": "Vattenrörläggare",
        "searchPhrase": "vattenrörläggare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "stangselmontor",
        "name": "Stängselmontör",
        "searchPhrase": "stängselmontör a-kassa",
        "recommendedAkassaId": "eak",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "solcellstekniker",
        "name": "Solcellstekniker",
        "searchPhrase": "solcellstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "markarbetare",
        "name": "Markarbetare",
        "searchPhrase": "markarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bilglastekniker",
        "name": "Bilglastekniker",
        "searchPhrase": "bilglastekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fogare",
        "name": "Fogare",
        "searchPhrase": "fogare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "rivare",
        "name": "Rivare",
        "searchPhrase": "rivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "byggarbetare",
        "name": "Byggarbetare",
        "searchPhrase": "byggarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "trappmontor",
        "name": "Trappmontör",
        "searchPhrase": "trappmontör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "sprinklermontor",
        "name": "Sprinklermontör",
        "searchPhrase": "sprinklermontör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "servicesnickare",
        "name": "Servicesnickare",
        "searchPhrase": "servicesnickare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "gipsarbetare",
        "name": "Gipsarbetare",
        "searchPhrase": "gipsarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tatskiktsarbetare",
        "name": "Tätskiktsarbetare",
        "searchPhrase": "tätskiktsarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "byggnadsvardare",
        "name": "Byggnadsvårdare",
        "searchPhrase": "byggnadsvårdare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "injekterare",
        "name": "Injekterare",
        "searchPhrase": "injekterare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mobelslipare",
        "name": "Möbelslipare",
        "searchPhrase": "möbelslipare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "grovarbetare",
        "name": "Grovarbetare",
        "searchPhrase": "grovarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "jarnvagstekniker",
        "name": "Järnvägstekniker",
        "searchPhrase": "järnvägstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "markanlaggare",
        "name": "Markanläggare",
        "searchPhrase": "markanläggare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "arbetsberedare",
        "name": "Arbetsberedare",
        "searchPhrase": "arbetsberedare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "belaggningsingenjor",
        "name": "Beläggningsingenjör",
        "searchPhrase": "beläggningsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "beredningsingenjor",
        "name": "Beredningsingenjör",
        "searchPhrase": "beredningsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "beredningssamordnare",
        "name": "Beredningssamordnare",
        "searchPhrase": "beredningssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "beredningstekniker",
        "name": "Beredningstekniker",
        "searchPhrase": "beredningstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "byggchef",
        "name": "Byggchef",
        "searchPhrase": "byggchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "byggingenjor",
        "name": "Byggingenjör",
        "searchPhrase": "byggingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "bygginspektor",
        "name": "Bygginspektör",
        "searchPhrase": "bygginspektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "byggkontrollant",
        "name": "Byggkontrollant",
        "searchPhrase": "byggkontrollant a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "byggnadsassistent",
        "name": "Byggnadsassistent",
        "searchPhrase": "byggnadsassistent a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "byggnadschef",
        "name": "Byggnadschef",
        "searchPhrase": "byggnadschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "byggnadskonsulent",
        "name": "Byggnadskonsulent",
        "searchPhrase": "byggnadskonsulent a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "byggnadstekniker",
        "name": "Byggnadstekniker",
        "searchPhrase": "byggnadstekniker a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "byggprojektledare",
        "name": "Byggprojektledare",
        "searchPhrase": "byggprojektledare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "byggsamordnare",
        "name": "Byggsamordnare",
        "searchPhrase": "byggsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "byggserviceingenjor",
        "name": "Byggserviceingenjör",
        "searchPhrase": "byggserviceingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "cad-ingenjor",
        "name": "CAD-ingenjör",
        "searchPhrase": "cad-ingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "cad-konstruktor",
        "name": "CAD-konstruktör",
        "searchPhrase": "cad-konstruktör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "cad-ritningsansvarig",
        "name": "CAD-ritningsansvarig",
        "searchPhrase": "cad-ritningsansvarig a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "cad-samordnare",
        "name": "CAD-samordnare",
        "searchPhrase": "cad-samordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dagvatteningenjor",
        "name": "Dagvatteningenjör",
        "searchPhrase": "dagvatteningenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dokumentationsingenjor",
        "name": "Dokumentationsingenjör",
        "searchPhrase": "dokumentationsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dokumentationstekniker",
        "name": "Dokumentationstekniker",
        "searchPhrase": "dokumentationstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "entreprenadchef",
        "name": "Entreprenadchef",
        "searchPhrase": "entreprenadchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "entreprenadledare",
        "name": "Entreprenadledare",
        "searchPhrase": "entreprenadledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "entreprenadtekniker",
        "name": "Entreprenadtekniker",
        "searchPhrase": "entreprenadtekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "exploateringschef",
        "name": "Exploateringschef",
        "searchPhrase": "exploateringschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "exploateringsekonom",
        "name": "Exploateringsekonom",
        "searchPhrase": "exploateringsekonom a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "exploateringshandlaggare",
        "name": "Exploateringshandläggare",
        "searchPhrase": "exploateringshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "exploateringssamordnare",
        "name": "Exploateringssamordnare",
        "searchPhrase": "exploateringssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gatubelysningsingenjor",
        "name": "Gatubelysningsingenjör",
        "searchPhrase": "gatubelysningsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gatuingenjor",
        "name": "Gatuingenjör",
        "searchPhrase": "gatuingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gatuinspektor",
        "name": "Gatuinspektör",
        "searchPhrase": "gatuinspektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kart--och-matningsingenjor",
        "name": "Kart- och mätningsingenjör",
        "searchPhrase": "kart- och mätningsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kontrollansvarig",
        "name": "Kontrollansvarig",
        "searchPhrase": "kontrollansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kontrollassistent",
        "name": "Kontrollassistent",
        "searchPhrase": "kontrollassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kontrollchef",
        "name": "Kontrollchef",
        "searchPhrase": "kontrollchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kontrollingenjor",
        "name": "Kontrollingenjör",
        "searchPhrase": "kontrollingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kontrollsamordnare",
        "name": "Kontrollsamordnare",
        "searchPhrase": "kontrollsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kontrolltekniker",
        "name": "Kontrolltekniker",
        "searchPhrase": "kontrolltekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lantmateriassistent",
        "name": "Lantmäteriassistent",
        "searchPhrase": "lantmäteriassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lantmaterichef",
        "name": "Lantmäterichef",
        "searchPhrase": "lantmäterichef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lokalplanerare",
        "name": "Lokalplanerare",
        "searchPhrase": "lokalplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "larlingsansvarig",
        "name": "Lärlingsansvarig",
        "searchPhrase": "lärlingsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "larlingshandledare",
        "name": "Lärlingshandledare",
        "searchPhrase": "lärlingshandledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "larlingskoordinator",
        "name": "Lärlingskoordinator",
        "searchPhrase": "lärlingskoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "larlingssamordnare",
        "name": "Lärlingssamordnare",
        "searchPhrase": "lärlingssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mark--och-exploateringschef",
        "name": "Mark- och exploateringschef",
        "searchPhrase": "mark- och exploateringschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "markanlaggningsarbetare",
        "name": "Markanläggningsarbetare",
        "searchPhrase": "markanläggningsarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "markanlaggningschef",
        "name": "Markanläggningschef",
        "searchPhrase": "markanläggningschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "markanlaggningskonsulent",
        "name": "Markanläggningskonsulent",
        "searchPhrase": "markanläggningskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "markanlaggningsplanerare",
        "name": "Markanläggningsplanerare",
        "searchPhrase": "markanläggningsplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "markanlaggningstekniker",
        "name": "Markanläggningstekniker",
        "searchPhrase": "markanläggningstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "markassistent",
        "name": "Markassistent",
        "searchPhrase": "markassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "markforvaltare",
        "name": "Markförvaltare",
        "searchPhrase": "markförvaltare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "markhandlaggare",
        "name": "Markhandläggare",
        "searchPhrase": "markhandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "markingenjor",
        "name": "Markingenjör",
        "searchPhrase": "markingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mbk-assistent",
        "name": "MBK-assistent",
        "searchPhrase": "mbk-assistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mbk-chef",
        "name": "MBK-chef",
        "searchPhrase": "mbk-chef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mbk-ingenjor",
        "name": "MBK-ingenjör",
        "searchPhrase": "mbk-ingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mbk-samordnare",
        "name": "MBK-samordnare",
        "searchPhrase": "mbk-samordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mbk-tekniker",
        "name": "MBK-tekniker",
        "searchPhrase": "mbk-tekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "modellsamordnare",
        "name": "Modellsamordnare",
        "searchPhrase": "modellsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "modellutvecklare",
        "name": "Modellutvecklare",
        "searchPhrase": "modellutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "planingenjor",
        "name": "Planingenjör",
        "searchPhrase": "planingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ritningshanterare",
        "name": "Ritningshanterare",
        "searchPhrase": "ritningshanterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "samhallsbyggnadschef",
        "name": "Samhällsbyggnadschef",
        "searchPhrase": "samhällsbyggnadschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "stadsbyggnadschef",
        "name": "Stadsbyggnadschef",
        "searchPhrase": "stadsbyggnadschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "stadsutvecklare",
        "name": "Stadsutvecklare",
        "searchPhrase": "stadsutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "va-ansvarig",
        "name": "VA-ansvarig",
        "searchPhrase": "va-ansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "va-chef",
        "name": "VA-chef",
        "searchPhrase": "va-chef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "va-samordnare",
        "name": "VA-samordnare",
        "searchPhrase": "va-samordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vatteningenjor",
        "name": "Vatteningenjör",
        "searchPhrase": "vatteningenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vattenstrateg",
        "name": "Vattenstrateg",
        "searchPhrase": "vattenstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vag--och-anlaggningsingenjor",
        "name": "Väg- och anläggningsingenjör",
        "searchPhrase": "väg- och anläggningsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vagingenjor",
        "name": "Vägingenjör",
        "searchPhrase": "vägingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vagmastare",
        "name": "Vägmästare",
        "searchPhrase": "vägmästare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "byggmastare",
        "name": "Byggmästare",
        "searchPhrase": "byggmästare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "anvandbarhetsdesigner",
        "name": "Användbarhetsdesigner",
        "searchPhrase": "användbarhetsdesigner a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "applikationsutvecklare",
        "name": "Applikationsutvecklare",
        "searchPhrase": "applikationsutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "configuration-manager",
        "name": "Configuration manager",
        "searchPhrase": "configuration manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "cto",
        "name": "CTO",
        "searchPhrase": "cto a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "databasadministrator",
        "name": "Databasadministratör",
        "searchPhrase": "databasadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dataingenjor",
        "name": "Dataingenjör",
        "searchPhrase": "dataingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "datakonsult",
        "name": "Datakonsult",
        "searchPhrase": "datakonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dataprogrammerare",
        "name": "Dataprogrammerare",
        "searchPhrase": "dataprogrammerare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "datasupport",
        "name": "Datasupport",
        "searchPhrase": "datasupport a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "datatekniker",
        "name": "Datatekniker",
        "searchPhrase": "datatekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "e-handelsansvarig",
        "name": "E-handelsansvarig",
        "searchPhrase": "e-handelsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "frontendutvecklare",
        "name": "Frontendutvecklare",
        "searchPhrase": "frontendutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "informationsarkitekt",
        "name": "Informationsarkitekt",
        "searchPhrase": "informationsarkitekt a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "interaktionsdesigner",
        "name": "Interaktionsdesigner",
        "searchPhrase": "interaktionsdesigner a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "internetmarknadsforare",
        "name": "Internetmarknadsförare",
        "searchPhrase": "internetmarknadsförare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "it-ansvarig",
        "name": "IT-ansvarig",
        "searchPhrase": "it-ansvarig a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "it-arkitekt",
        "name": "IT-arkitekt",
        "searchPhrase": "it-arkitekt a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "it-chef",
        "name": "IT-chef",
        "searchPhrase": "it-chef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "it-forensiker",
        "name": "IT-forensiker",
        "searchPhrase": "it-forensiker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "it-konsult",
        "name": "IT-konsult",
        "searchPhrase": "it-konsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "it-projektledare",
        "name": "IT-projektledare",
        "searchPhrase": "it-projektledare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "it-samordnare",
        "name": "IT-samordnare",
        "searchPhrase": "it-samordnare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "it-strateg",
        "name": "IT-strateg",
        "searchPhrase": "it-strateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "it-saljare",
        "name": "IT-säljare",
        "searchPhrase": "it-säljare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "it-tekniker",
        "name": "IT-tekniker",
        "searchPhrase": "it-tekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "javautvecklare",
        "name": "Javautvecklare",
        "searchPhrase": "javautvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kravanalytiker",
        "name": "Kravanalytiker",
        "searchPhrase": "kravanalytiker a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kvalitetsansvarig",
        "name": "Kvalitetsansvarig",
        "searchPhrase": "kvalitetsansvarig a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "losningsarkitekt",
        "name": "Lösningsarkitekt",
        "searchPhrase": "lösningsarkitekt a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mjukvaruingenjor",
        "name": "Mjukvaruingenjör",
        "searchPhrase": "mjukvaruingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mjukvarutestare",
        "name": "Mjukvarutestare",
        "searchPhrase": "mjukvarutestare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mjukvaruutvecklare",
        "name": "Mjukvaruutvecklare",
        "searchPhrase": "mjukvaruutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mobilreparator",
        "name": "Mobilreparatör",
        "searchPhrase": "mobilreparatör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mobiltekniker",
        "name": "Mobiltekniker",
        "searchPhrase": "mobiltekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "natverksadministrator",
        "name": "Nätverksadministratör",
        "searchPhrase": "nätverksadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "natverkstekniker",
        "name": "Nätverkstekniker",
        "searchPhrase": "nätverkstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "programmerare",
        "name": "Programmerare",
        "searchPhrase": "programmerare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "release-manager",
        "name": "Release manager",
        "searchPhrase": "release manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "speldesigner",
        "name": "Speldesigner",
        "searchPhrase": "speldesigner a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "spelutvecklare",
        "name": "Spelutvecklare",
        "searchPhrase": "spelutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "support",
        "name": "Support",
        "searchPhrase": "support a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "supporttekniker",
        "name": "Supporttekniker",
        "searchPhrase": "supporttekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "systemadministrator",
        "name": "Systemadministratör",
        "searchPhrase": "systemadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "systemansvarig",
        "name": "Systemansvarig",
        "searchPhrase": "systemansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "systemarkitekt",
        "name": "Systemarkitekt",
        "searchPhrase": "systemarkitekt a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "systemingenjor",
        "name": "Systemingenjör",
        "searchPhrase": "systemingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "systemintegrator",
        "name": "Systemintegratör",
        "searchPhrase": "systemintegratör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "systemspecialist",
        "name": "Systemspecialist",
        "searchPhrase": "systemspecialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "systemtekniker",
        "name": "Systemtekniker",
        "searchPhrase": "systemtekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "systemutvecklare",
        "name": "Systemutvecklare",
        "searchPhrase": "systemutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sakerhetskonsult",
        "name": "Säkerhetskonsult",
        "searchPhrase": "säkerhetskonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sokmotoroptimerare",
        "name": "Sökmotoroptimerare",
        "searchPhrase": "sökmotoroptimerare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teknikinformator",
        "name": "Teknikinformatör",
        "searchPhrase": "teknikinformatör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teknisk-chef",
        "name": "Teknisk chef",
        "searchPhrase": "teknisk chef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teknisk-forvaltare",
        "name": "Teknisk förvaltare",
        "searchPhrase": "teknisk förvaltare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teknisk-illustrator",
        "name": "Teknisk illustratör",
        "searchPhrase": "teknisk illustratör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teknisk-officer",
        "name": "Teknisk officer",
        "searchPhrase": "teknisk officer a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teleingenjor",
        "name": "Teleingenjör",
        "searchPhrase": "teleingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teletekniker",
        "name": "Teletekniker",
        "searchPhrase": "teletekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "webbadministrator",
        "name": "Webbadministratör",
        "searchPhrase": "webbadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "webbanalytiker",
        "name": "Webbanalytiker",
        "searchPhrase": "webbanalytiker a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "webbansvarig",
        "name": "Webbansvarig",
        "searchPhrase": "webbansvarig a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "webbdesigner",
        "name": "Webbdesigner",
        "searchPhrase": "webbdesigner a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "webbkoordinator",
        "name": "Webbkoordinator",
        "searchPhrase": "webbkoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "webbmaster",
        "name": "Webbmaster",
        "searchPhrase": "webbmaster a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "webbredaktor",
        "name": "Webbredaktör",
        "searchPhrase": "webbredaktör a-kassa",
        "recommendedAkassaId": "journalist",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "webbstrateg",
        "name": "Webbstrateg",
        "searchPhrase": "webbstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "webbutvecklare",
        "name": "Webbutvecklare",
        "searchPhrase": "webbutvecklare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "web-content-manager",
        "name": "Web content manager",
        "searchPhrase": "web content manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "data-analyst",
        "name": "Data analyst",
        "searchPhrase": "data analyst a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dataanalytiker",
        "name": "Dataanalytiker",
        "searchPhrase": "dataanalytiker a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "applikationskonsult",
        "name": "Applikationskonsult",
        "searchPhrase": "applikationskonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "informationssakerhetsspecialist",
        "name": "Informationssäkerhetsspecialist",
        "searchPhrase": "informationssäkerhetsspecialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "datasamordnare",
        "name": "Datasamordnare",
        "searchPhrase": "datasamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forvaltningsledare",
        "name": "Förvaltningsledare",
        "searchPhrase": "förvaltningsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "platform-solutions-consultant",
        "name": "Platform solutions consultant",
        "searchPhrase": "platform solutions consultant a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "it-support",
        "name": "IT-support",
        "searchPhrase": "it-support a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "datacentertekniker",
        "name": "Datacentertekniker",
        "searchPhrase": "datacentertekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "it-vard",
        "name": "IT-värd",
        "searchPhrase": "it-värd a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ict-engineer",
        "name": "ICT Engineer",
        "searchPhrase": "ict engineer a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "incident-manager",
        "name": "Incident manager",
        "searchPhrase": "incident manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "function-developer",
        "name": "Function developer",
        "searchPhrase": "function developer a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ui-designer",
        "name": "UI-designer",
        "searchPhrase": "ui-designer a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "it-sakerhetsanalytiker",
        "name": "IT-säkerhetsanalytiker",
        "searchPhrase": "it-säkerhetsanalytiker a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "it-sakerhetssamordnare",
        "name": "IT-säkerhetssamordnare",
        "searchPhrase": "it-säkerhetssamordnare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "it-sakerhetsspecialist",
        "name": "IT-säkerhetsspecialist",
        "searchPhrase": "it-säkerhetsspecialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "it-sakerhetstekniker",
        "name": "IT-säkerhetstekniker",
        "searchPhrase": "it-säkerhetstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "testutvecklare",
        "name": "Testutvecklare",
        "searchPhrase": "testutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "it-sakerhetsansvarig",
        "name": "IT-säkerhetsansvarig",
        "searchPhrase": "it-säkerhetsansvarig a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "cybersakerhetsansvarig",
        "name": "Cybersäkerhetsansvarig",
        "searchPhrase": "cybersäkerhetsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "verksamhetsarkitekt",
        "name": "Verksamhetsarkitekt",
        "searchPhrase": "verksamhetsarkitekt a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "qa-game-tester",
        "name": "QA game tester",
        "searchPhrase": "qa game tester a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "enterprisearkitekt",
        "name": "Enterprisearkitekt",
        "searchPhrase": "enterprisearkitekt a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "adb-administrator",
        "name": "ADB-administratör",
        "searchPhrase": "adb-administratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "adb-ansvarig",
        "name": "ADB-ansvarig",
        "searchPhrase": "adb-ansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "adb-assistent",
        "name": "ADB-assistent",
        "searchPhrase": "adb-assistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "adb-chef",
        "name": "ADB-chef",
        "searchPhrase": "adb-chef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "adb-handledare",
        "name": "ADB-handledare",
        "searchPhrase": "adb-handledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "adb-handlaggare",
        "name": "ADB-handläggare",
        "searchPhrase": "adb-handläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "adb-ingenjor",
        "name": "ADB-ingenjör",
        "searchPhrase": "adb-ingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "adb-konsult",
        "name": "ADB-konsult",
        "searchPhrase": "adb-konsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "adb-samordnare",
        "name": "ADB-samordnare",
        "searchPhrase": "adb-samordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "adb-sekreterare",
        "name": "ADB-sekreterare",
        "searchPhrase": "adb-sekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "adb-systemansvarig",
        "name": "ADB-systemansvarig",
        "searchPhrase": "adb-systemansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "adb-tekniker",
        "name": "ADB-tekniker",
        "searchPhrase": "adb-tekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "administrativ-it-utvecklare",
        "name": "Administrativ iT-utvecklare",
        "searchPhrase": "administrativ it-utvecklare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "applikationsansvarig",
        "name": "Applikationsansvarig",
        "searchPhrase": "applikationsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "applikationsprogrammerare",
        "name": "Applikationsprogrammerare",
        "searchPhrase": "applikationsprogrammerare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "applikationsspecialist",
        "name": "Applikationsspecialist",
        "searchPhrase": "applikationsspecialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bredbandstekniker",
        "name": "Bredbandstekniker",
        "searchPhrase": "bredbandstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "cad-tekniker",
        "name": "CAD-tekniker",
        "searchPhrase": "cad-tekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dataadministrator",
        "name": "Dataadministratör",
        "searchPhrase": "dataadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dataansvarig",
        "name": "Dataansvarig",
        "searchPhrase": "dataansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dataassistent",
        "name": "Dataassistent",
        "searchPhrase": "dataassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "databasarkitekt",
        "name": "Databasarkitekt",
        "searchPhrase": "databasarkitekt a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "databastekniker",
        "name": "Databastekniker",
        "searchPhrase": "databastekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "databeredare",
        "name": "Databeredare",
        "searchPhrase": "databeredare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "datachef",
        "name": "Datachef",
        "searchPhrase": "datachef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "datahandledare",
        "name": "Datahandledare",
        "searchPhrase": "datahandledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "datakonsulent",
        "name": "Datakonsulent",
        "searchPhrase": "datakonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dataoperator",
        "name": "Dataoperatör",
        "searchPhrase": "dataoperatör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "dataregistrator",
        "name": "Dataregistrator",
        "searchPhrase": "dataregistrator a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dataspecialist",
        "name": "Dataspecialist",
        "searchPhrase": "dataspecialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "datateknikerassistent",
        "name": "Datateknikerassistent",
        "searchPhrase": "datateknikerassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "datoringenjor",
        "name": "Datoringenjör",
        "searchPhrase": "datoringenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "distriktssupport",
        "name": "Distriktssupport",
        "searchPhrase": "distriktssupport a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gis-ansvarig",
        "name": "GIS-ansvarig",
        "searchPhrase": "gis-ansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gis-karttekniker",
        "name": "GIS-karttekniker",
        "searchPhrase": "gis-karttekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gis-samordnare",
        "name": "GIS-samordnare",
        "searchPhrase": "gis-samordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gis-tekniker",
        "name": "GIS-tekniker",
        "searchPhrase": "gis-tekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "informationssakerhetschef",
        "name": "Informationssäkerhetschef",
        "searchPhrase": "informationssäkerhetschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "it-assistent",
        "name": "IT-assistent",
        "searchPhrase": "it-assistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "it-driftansvarig",
        "name": "IT-driftansvarig",
        "searchPhrase": "it-driftansvarig a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "it-driftchef",
        "name": "IT-driftchef",
        "searchPhrase": "it-driftchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "it-ingenjor",
        "name": "IT-ingenjör",
        "searchPhrase": "it-ingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "it-koordinator",
        "name": "IT-koordinator",
        "searchPhrase": "it-koordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "it-supporttekniker",
        "name": "IT-supporttekniker",
        "searchPhrase": "it-supporttekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "it-systemtekniker",
        "name": "IT-systemtekniker",
        "searchPhrase": "it-systemtekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "it-utvecklare",
        "name": "IT-utvecklare",
        "searchPhrase": "it-utvecklare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "metodanalytiker",
        "name": "Metodanalytiker",
        "searchPhrase": "metodanalytiker a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "natverksansvarig",
        "name": "Nätverksansvarig",
        "searchPhrase": "nätverksansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "natverksarkitekt",
        "name": "Nätverksarkitekt",
        "searchPhrase": "nätverksarkitekt a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "natverksingenjor",
        "name": "Nätverksingenjör",
        "searchPhrase": "nätverksingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "natverkskonsult",
        "name": "Nätverkskonsult",
        "searchPhrase": "nätverkskonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "natverkskoordinator",
        "name": "Nätverkskoordinator",
        "searchPhrase": "nätverkskoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "natverksledare",
        "name": "Nätverksledare",
        "searchPhrase": "nätverksledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "natverksspecialist",
        "name": "Nätverksspecialist",
        "searchPhrase": "nätverksspecialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "natverkutvecklare",
        "name": "Nätverkutvecklare",
        "searchPhrase": "nätverkutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "omvarldsanalytiker",
        "name": "Omvärldsanalytiker",
        "searchPhrase": "omvärldsanalytiker a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "omvarldsbevakare",
        "name": "Omvärldsbevakare",
        "searchPhrase": "omvärldsbevakare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "omvarldsstrateg",
        "name": "Omvärldsstrateg",
        "searchPhrase": "omvärldsstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "systemanalytiker",
        "name": "Systemanalytiker",
        "searchPhrase": "systemanalytiker a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "systemkonsult",
        "name": "Systemkonsult",
        "searchPhrase": "systemkonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "systemsamordnare",
        "name": "Systemsamordnare",
        "searchPhrase": "systemsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sakerhetsansvarig",
        "name": "Säkerhetsansvarig",
        "searchPhrase": "säkerhetsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sakerhetscontroller",
        "name": "Säkerhetscontroller",
        "searchPhrase": "säkerhetscontroller a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sakerhetskoordinator",
        "name": "Säkerhetskoordinator",
        "searchPhrase": "säkerhetskoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sakerhetsstrateg",
        "name": "Säkerhetsstrateg",
        "searchPhrase": "säkerhetsstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sakerhetstekniker",
        "name": "Säkerhetstekniker",
        "searchPhrase": "säkerhetstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teknikansvarig",
        "name": "Teknikansvarig",
        "searchPhrase": "teknikansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teknikchef",
        "name": "Teknikchef",
        "searchPhrase": "teknikchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tekniksamordnare",
        "name": "Tekniksamordnare",
        "searchPhrase": "tekniksamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teknikspecialist",
        "name": "Teknikspecialist",
        "searchPhrase": "teknikspecialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teknisk-administrator",
        "name": "Teknisk administratör",
        "searchPhrase": "teknisk administratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teknisk-controller",
        "name": "Teknisk controller",
        "searchPhrase": "teknisk controller a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teknisk-samordnare",
        "name": "Teknisk samordnare",
        "searchPhrase": "teknisk samordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teknisk-specialist",
        "name": "Teknisk specialist",
        "searchPhrase": "teknisk specialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teknisk-utvecklare",
        "name": "Teknisk utvecklare",
        "searchPhrase": "teknisk utvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teleadministrator",
        "name": "Teleadministratör",
        "searchPhrase": "teleadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teleassistent",
        "name": "Teleassistent",
        "searchPhrase": "teleassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "telechef",
        "name": "Telechef",
        "searchPhrase": "telechef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "telekonsult",
        "name": "Telekonsult",
        "searchPhrase": "telekonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teleoperator",
        "name": "Teleoperatör",
        "searchPhrase": "teleoperatör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "telesamordnare",
        "name": "Telesamordnare",
        "searchPhrase": "telesamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "testansvarig",
        "name": "Testansvarig",
        "searchPhrase": "testansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "testledare",
        "name": "Testledare",
        "searchPhrase": "testledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "webbkommunikator",
        "name": "Webbkommunikatör",
        "searchPhrase": "webbkommunikatör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "webbtekniker",
        "name": "Webbtekniker",
        "searchPhrase": "webbtekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "affarsanalytiker",
        "name": "Affärsanalytiker",
        "searchPhrase": "affärsanalytiker a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "aktiemaklare",
        "name": "Aktiemäklare",
        "searchPhrase": "aktiemäklare a-kassa",
        "recommendedAkassaId": "ffak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "aktuarie",
        "name": "Aktuarie",
        "searchPhrase": "aktuarie a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "analytiker",
        "name": "Analytiker",
        "searchPhrase": "analytiker a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bankdirektor",
        "name": "Bankdirektör",
        "searchPhrase": "bankdirektör a-kassa",
        "recommendedAkassaId": "ffak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "banktjansteman",
        "name": "Banktjänsteman",
        "searchPhrase": "banktjänsteman a-kassa",
        "recommendedAkassaId": "ffak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bokforare",
        "name": "Bokförare",
        "searchPhrase": "bokförare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "bokhallare",
        "name": "Bokhållare",
        "searchPhrase": "bokhållare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "business-analyst",
        "name": "Business analyst",
        "searchPhrase": "business analyst a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "business-controller",
        "name": "Business controller",
        "searchPhrase": "business controller a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "borsmaklare",
        "name": "Börsmäklare",
        "searchPhrase": "börsmäklare a-kassa",
        "recommendedAkassaId": "ffak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "cfo",
        "name": "CFO",
        "searchPhrase": "cfo a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefsekonom",
        "name": "Chefsekonom",
        "searchPhrase": "chefsekonom a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefskronofogde",
        "name": "Chefskronofogde",
        "searchPhrase": "chefskronofogde a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "civilekonom",
        "name": "Civilekonom",
        "searchPhrase": "civilekonom a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "controller",
        "name": "Controller",
        "searchPhrase": "controller a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "credit-controller",
        "name": "Credit controller",
        "searchPhrase": "credit controller a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ekonom",
        "name": "Ekonom",
        "searchPhrase": "ekonom a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ekonomiansvarig",
        "name": "Ekonomiansvarig",
        "searchPhrase": "ekonomiansvarig a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ekonomiassistent",
        "name": "Ekonomiassistent",
        "searchPhrase": "ekonomiassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ekonomibitrade",
        "name": "Ekonomibiträde",
        "searchPhrase": "ekonomibiträde a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ekonomichef",
        "name": "Ekonomichef",
        "searchPhrase": "ekonomichef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ekonomihandlaggare",
        "name": "Ekonomihandläggare",
        "searchPhrase": "ekonomihandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ekonomikonsult",
        "name": "Ekonomikonsult",
        "searchPhrase": "ekonomikonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ekonomistrateg",
        "name": "Ekonomistrateg",
        "searchPhrase": "ekonomistrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fastighetsanalytiker",
        "name": "Fastighetsanalytiker",
        "searchPhrase": "fastighetsanalytiker a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fastighetsekonom",
        "name": "Fastighetsekonom",
        "searchPhrase": "fastighetsekonom a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fastighetsvarderare",
        "name": "Fastighetsvärderare",
        "searchPhrase": "fastighetsvärderare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "financial-controller",
        "name": "Financial controller",
        "searchPhrase": "financial controller a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "finansiell-radgivare",
        "name": "Finansiell rådgivare",
        "searchPhrase": "finansiell rådgivare a-kassa",
        "recommendedAkassaId": "ffak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fondforvaltare",
        "name": "Fondförvaltare",
        "searchPhrase": "fondförvaltare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fondkommissionar",
        "name": "Fondkommissionär",
        "searchPhrase": "fondkommissionär a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fondmaklare",
        "name": "Fondmäklare",
        "searchPhrase": "fondmäklare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "foretagsmaklare",
        "name": "Företagsmäklare",
        "searchPhrase": "företagsmäklare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "foretagsradgivare",
        "name": "Företagsrådgivare",
        "searchPhrase": "företagsrådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forsakringsformedlare",
        "name": "Försäkringsförmedlare",
        "searchPhrase": "försäkringsförmedlare a-kassa",
        "recommendedAkassaId": "ffak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forsakringshandlaggare",
        "name": "Försäkringshandläggare",
        "searchPhrase": "försäkringshandläggare a-kassa",
        "recommendedAkassaId": "ffak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forsakringsmaklare",
        "name": "Försäkringsmäklare",
        "searchPhrase": "försäkringsmäklare a-kassa",
        "recommendedAkassaId": "ffak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forsakringsradgivare",
        "name": "Försäkringsrådgivare",
        "searchPhrase": "försäkringsrådgivare a-kassa",
        "recommendedAkassaId": "ffak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forsakringsutredare",
        "name": "Försäkringsutredare",
        "searchPhrase": "försäkringsutredare a-kassa",
        "recommendedAkassaId": "ffak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "inkassohandlaggare",
        "name": "Inkassohandläggare",
        "searchPhrase": "inkassohandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "internrevisor",
        "name": "Internrevisor",
        "searchPhrase": "internrevisor a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "investment-manager",
        "name": "Investment manager",
        "searchPhrase": "investment manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "it-ekonom",
        "name": "IT-ekonom",
        "searchPhrase": "it-ekonom a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kamrer",
        "name": "Kamrer",
        "searchPhrase": "kamrer a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kapitalforvaltare",
        "name": "Kapitalförvaltare",
        "searchPhrase": "kapitalförvaltare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kreditgivare",
        "name": "Kreditgivare",
        "searchPhrase": "kreditgivare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kredithandlaggare",
        "name": "Kredithandläggare",
        "searchPhrase": "kredithandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kronofogde",
        "name": "Kronofogde",
        "searchPhrase": "kronofogde a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kronoinspektor",
        "name": "Kronoinspektör",
        "searchPhrase": "kronoinspektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kundansvarig",
        "name": "Kundansvarig",
        "searchPhrase": "kundansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kundradgivare",
        "name": "Kundrådgivare",
        "searchPhrase": "kundrådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "loneadministrator",
        "name": "Löneadministratör",
        "searchPhrase": "löneadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lonekonsult",
        "name": "Lönekonsult",
        "searchPhrase": "lönekonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "miljoekonom",
        "name": "Miljöekonom",
        "searchPhrase": "miljöekonom a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "nationalekonom",
        "name": "Nationalekonom",
        "searchPhrase": "nationalekonom a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "portfoljforvaltare",
        "name": "Portföljförvaltare",
        "searchPhrase": "portföljförvaltare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "privatradgivare",
        "name": "Privatrådgivare",
        "searchPhrase": "privatrådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "processkonsult",
        "name": "Processkonsult",
        "searchPhrase": "processkonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "redovisningsansvarig",
        "name": "Redovisningsansvarig",
        "searchPhrase": "redovisningsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "redovisningsekonom",
        "name": "Redovisningsekonom",
        "searchPhrase": "redovisningsekonom a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "redovisningskonsult",
        "name": "Redovisningskonsult",
        "searchPhrase": "redovisningskonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "redovisningsassistent",
        "name": "Redovisningsassistent",
        "searchPhrase": "redovisningsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "redovisningschef",
        "name": "Redovisningschef",
        "searchPhrase": "redovisningschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "revisor",
        "name": "Revisor",
        "searchPhrase": "revisor a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "revisorsassistent",
        "name": "Revisorsassistent",
        "searchPhrase": "revisorsassistent a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "riskanalytiker",
        "name": "Riskanalytiker",
        "searchPhrase": "riskanalytiker a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "radgivare",
        "name": "Rådgivare",
        "searchPhrase": "rådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skadereglerare",
        "name": "Skadereglerare",
        "searchPhrase": "skadereglerare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skatteombud",
        "name": "Skatteombud",
        "searchPhrase": "skatteombud a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skatterevisor",
        "name": "Skatterevisor",
        "searchPhrase": "skatterevisor a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "trader",
        "name": "Trader",
        "searchPhrase": "trader a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "treasury-assistant",
        "name": "Treasury assistant",
        "searchPhrase": "treasury assistant a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "valutahandlare",
        "name": "Valutahandlare",
        "searchPhrase": "valutahandlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "verksamhetscontroller",
        "name": "Verksamhetscontroller",
        "searchPhrase": "verksamhetscontroller a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vardepappersmaklare",
        "name": "Värdepappersmäklare",
        "searchPhrase": "värdepappersmäklare a-kassa",
        "recommendedAkassaId": "pappers",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "varderingsman",
        "name": "Värderingsman",
        "searchPhrase": "värderingsman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "affarscontroller",
        "name": "Affärscontroller",
        "searchPhrase": "affärscontroller a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "affarsomradesekonom",
        "name": "Affärsområdesekonom",
        "searchPhrase": "affärsområdesekonom a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "affarsradgivare",
        "name": "Affärsrådgivare",
        "searchPhrase": "affärsrådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pantlanare",
        "name": "Pantlånare",
        "searchPhrase": "pantlånare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "head-of-treasury",
        "name": "Head of treasury",
        "searchPhrase": "head of treasury a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "underwriter",
        "name": "Underwriter",
        "searchPhrase": "underwriter a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pensionshandlaggare",
        "name": "Pensionshandläggare",
        "searchPhrase": "pensionshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "laneformedlare",
        "name": "Låneförmedlare",
        "searchPhrase": "låneförmedlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "revisionsmedarbetare",
        "name": "Revisionsmedarbetare",
        "searchPhrase": "revisionsmedarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kreditanalytiker",
        "name": "Kreditanalytiker",
        "searchPhrase": "kreditanalytiker a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "investment-banker",
        "name": "Investment banker",
        "searchPhrase": "investment banker a-kassa",
        "recommendedAkassaId": "ffak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "aml-analytiker",
        "name": "AML-analytiker",
        "searchPhrase": "aml-analytiker a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "premiumradgivare",
        "name": "Premiumrådgivare",
        "searchPhrase": "premiumrådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "privatekonomisk-radgivare",
        "name": "Privatekonomisk rådgivare",
        "searchPhrase": "privatekonomisk rådgivare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "finansanalytiker",
        "name": "Finansanalytiker",
        "searchPhrase": "finansanalytiker a-kassa",
        "recommendedAkassaId": "ffak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bilskaderadgivare",
        "name": "Bilskaderådgivare",
        "searchPhrase": "bilskaderådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ekonomiadministrator",
        "name": "Ekonomiadministratör",
        "searchPhrase": "ekonomiadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bolanehandlaggare",
        "name": "Bolånehandläggare",
        "searchPhrase": "bolånehandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "privatmarknadschef",
        "name": "Privatmarknadschef",
        "searchPhrase": "privatmarknadschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tullrevisor",
        "name": "Tullrevisor",
        "searchPhrase": "tullrevisor a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "administrativ-controller",
        "name": "Administrativ controller",
        "searchPhrase": "administrativ controller a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avdelningsekonom",
        "name": "Avdelningsekonom",
        "searchPhrase": "avdelningsekonom a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bokforingsassistent",
        "name": "Bokföringsassistent",
        "searchPhrase": "bokföringsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "budget--och-skuldradgivare",
        "name": "Budget- och skuldrådgivare",
        "searchPhrase": "budget- och skuldrådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "budgetassistent",
        "name": "Budgetassistent",
        "searchPhrase": "budgetassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "budgetchef",
        "name": "Budgetchef",
        "searchPhrase": "budgetchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "budgetkamrer",
        "name": "Budgetkamrer",
        "searchPhrase": "budgetkamrer a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "budgetradgivare",
        "name": "Budgetrådgivare",
        "searchPhrase": "budgetrådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "budgetsekreterare",
        "name": "Budgetsekreterare",
        "searchPhrase": "budgetsekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "debiterare",
        "name": "Debiterare",
        "searchPhrase": "debiterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "debiteringsansvarig",
        "name": "Debiteringsansvarig",
        "searchPhrase": "debiteringsansvarig a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "debiteringsassistent",
        "name": "Debiteringsassistent",
        "searchPhrase": "debiteringsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "debiteringschef",
        "name": "Debiteringschef",
        "searchPhrase": "debiteringschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "debiteringsekonom",
        "name": "Debiteringsekonom",
        "searchPhrase": "debiteringsekonom a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "debiteringsforestandare",
        "name": "Debiteringsföreståndare",
        "searchPhrase": "debiteringsföreståndare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "debiteringshandlaggare",
        "name": "Debiteringshandläggare",
        "searchPhrase": "debiteringshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "distriktsekonom",
        "name": "Distriktsekonom",
        "searchPhrase": "distriktsekonom a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ekonomiarbetare",
        "name": "Ekonomiarbetare",
        "searchPhrase": "ekonomiarbetare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ekonomicontroller",
        "name": "Ekonomicontroller",
        "searchPhrase": "ekonomicontroller a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ekonomidirektor",
        "name": "Ekonomidirektör",
        "searchPhrase": "ekonomidirektör a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ekonomiforestandare",
        "name": "Ekonomiföreståndare",
        "searchPhrase": "ekonomiföreståndare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ekonomiintendent",
        "name": "Ekonomiintendent",
        "searchPhrase": "ekonomiintendent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ekonomikontorist",
        "name": "Ekonomikontorist",
        "searchPhrase": "ekonomikontorist a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ekonomipersonal",
        "name": "Ekonomipersonal",
        "searchPhrase": "ekonomipersonal a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ekonomisamordnare",
        "name": "Ekonomisamordnare",
        "searchPhrase": "ekonomisamordnare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ekonomisekreterare",
        "name": "Ekonomisekreterare",
        "searchPhrase": "ekonomisekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fakturaadministrator",
        "name": "Fakturaadministratör",
        "searchPhrase": "fakturaadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fakturahandlaggare",
        "name": "Fakturahandläggare",
        "searchPhrase": "fakturahandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "faktureringsassistent",
        "name": "Faktureringsassistent",
        "searchPhrase": "faktureringsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "finansadministrator",
        "name": "Finansadministratör",
        "searchPhrase": "finansadministratör a-kassa",
        "recommendedAkassaId": "ffak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "finansassistent",
        "name": "Finansassistent",
        "searchPhrase": "finansassistent a-kassa",
        "recommendedAkassaId": "ffak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "finanschef",
        "name": "Finanschef",
        "searchPhrase": "finanschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "finansekonom",
        "name": "Finansekonom",
        "searchPhrase": "finansekonom a-kassa",
        "recommendedAkassaId": "ffak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "finanssekreterare",
        "name": "Finanssekreterare",
        "searchPhrase": "finanssekreterare a-kassa",
        "recommendedAkassaId": "ffak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fondkamrer",
        "name": "Fondkamrer",
        "searchPhrase": "fondkamrer a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "laneansvarig",
        "name": "Låneansvarig",
        "searchPhrase": "låneansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lanechef",
        "name": "Lånechef",
        "searchPhrase": "lånechef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lanehandlaggare",
        "name": "Lånehandläggare",
        "searchPhrase": "lånehandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lanekonsulent",
        "name": "Lånekonsulent",
        "searchPhrase": "lånekonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lanekoordinator",
        "name": "Lånekoordinator",
        "searchPhrase": "lånekoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lanesamordnare",
        "name": "Lånesamordnare",
        "searchPhrase": "lånesamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lanesekreterare",
        "name": "Lånesekreterare",
        "searchPhrase": "lånesekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lanespecialist",
        "name": "Lånespecialist",
        "searchPhrase": "lånespecialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lanestodjare",
        "name": "Lånestödjare",
        "searchPhrase": "lånestödjare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "laneutredare",
        "name": "Låneutredare",
        "searchPhrase": "låneutredare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lanradgivare",
        "name": "Lånrådgivare",
        "searchPhrase": "lånrådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "marknadsekonom",
        "name": "Marknadsekonom",
        "searchPhrase": "marknadsekonom a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "projektekonom",
        "name": "Projektekonom",
        "searchPhrase": "projektekonom a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "revisionsassistent",
        "name": "Revisionsassistent",
        "searchPhrase": "revisionsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "revisionschef",
        "name": "Revisionschef",
        "searchPhrase": "revisionschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skattestrateg",
        "name": "Skattestrateg",
        "searchPhrase": "skattestrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "affars--och-ekonomispecialist",
        "name": "Affärs- och ekonomispecialist",
        "searchPhrase": "affärs- och ekonomispecialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "belysningstekniker",
        "name": "Belysningstekniker",
        "searchPhrase": "belysningstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "distributionselektriker",
        "name": "Distributionselektriker",
        "searchPhrase": "distributionselektriker a-kassa",
        "recommendedAkassaId": "eak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "elektriker",
        "name": "Elektriker",
        "searchPhrase": "elektriker a-kassa",
        "recommendedAkassaId": "eak",
        "image": "/images/professions/elektriker.png"
    },
    {
        "slug": "elingenjor",
        "name": "Elingenjör",
        "searchPhrase": "elingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "elinstallator",
        "name": "Elinstallatör",
        "searchPhrase": "elinstallatör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "elkonstruktor",
        "name": "Elkonstruktör",
        "searchPhrase": "elkonstruktör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "elkraftsingenjor",
        "name": "Elkraftsingenjör",
        "searchPhrase": "elkraftsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "elmontor",
        "name": "Elmontör",
        "searchPhrase": "elmontör a-kassa",
        "recommendedAkassaId": "eak",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "eltekniker",
        "name": "Eltekniker",
        "searchPhrase": "eltekniker a-kassa",
        "recommendedAkassaId": "eak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "energicontroller",
        "name": "Energicontroller",
        "searchPhrase": "energicontroller a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "energiexpert",
        "name": "Energiexpert",
        "searchPhrase": "energiexpert a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "energiingenjor",
        "name": "Energiingenjör",
        "searchPhrase": "energiingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "energiradgivare",
        "name": "Energirådgivare",
        "searchPhrase": "energirådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "energitekniker",
        "name": "Energitekniker",
        "searchPhrase": "energitekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fartygselektriker",
        "name": "Fartygselektriker",
        "searchPhrase": "fartygselektriker a-kassa",
        "recommendedAkassaId": "eak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "industrielektriker",
        "name": "Industrielektriker",
        "searchPhrase": "industrielektriker a-kassa",
        "recommendedAkassaId": "eak",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "installationselektriker",
        "name": "Installationselektriker",
        "searchPhrase": "installationselektriker a-kassa",
        "recommendedAkassaId": "eak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kabellaggare",
        "name": "Kabelläggare",
        "searchPhrase": "kabelläggare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kraftverksarbetare",
        "name": "Kraftverksarbetare",
        "searchPhrase": "kraftverksarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "serviceelektriker",
        "name": "Serviceelektriker",
        "searchPhrase": "serviceelektriker a-kassa",
        "recommendedAkassaId": "eak",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "elkonsult",
        "name": "Elkonsult",
        "searchPhrase": "elkonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "solcellsprojektor",
        "name": "Solcellsprojektör",
        "searchPhrase": "solcellsprojektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "elcentralsmontor",
        "name": "Elcentralsmontör",
        "searchPhrase": "elcentralsmontör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "sparvagnselektriker",
        "name": "Spårvagnselektriker",
        "searchPhrase": "spårvagnselektriker a-kassa",
        "recommendedAkassaId": "eak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "elektronikmontor",
        "name": "Elektronikmontör",
        "searchPhrase": "elektronikmontör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "bransleingenjor",
        "name": "Bränsleingenjör",
        "searchPhrase": "bränsleingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bransletekniker",
        "name": "Bränsletekniker",
        "searchPhrase": "bränsletekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "el--och-instrumentchef",
        "name": "El- och instrumentchef",
        "searchPhrase": "el- och instrumentchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "el--och-instrumenttekniker",
        "name": "El- och instrumenttekniker",
        "searchPhrase": "el- och instrumenttekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "el--och-styringenjor",
        "name": "El- och styringenjör",
        "searchPhrase": "el- och styringenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "elansvarig",
        "name": "Elansvarig",
        "searchPhrase": "elansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "elarbetsledare",
        "name": "Elarbetsledare",
        "searchPhrase": "elarbetsledare a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "elchef",
        "name": "Elchef",
        "searchPhrase": "elchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "eldriftansvarig",
        "name": "Eldriftansvarig",
        "searchPhrase": "eldriftansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "eldriftoperator",
        "name": "Eldriftoperatör",
        "searchPhrase": "eldriftoperatör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "elektroingenjor",
        "name": "Elektroingenjör",
        "searchPhrase": "elektroingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "elhandlare",
        "name": "Elhandlare",
        "searchPhrase": "elhandlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "elkonsulent",
        "name": "Elkonsulent",
        "searchPhrase": "elkonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "elnatschef",
        "name": "Elnätschef",
        "searchPhrase": "elnätschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "elnatstekniker",
        "name": "Elnätstekniker",
        "searchPhrase": "elnätstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "elsamordnare",
        "name": "Elsamordnare",
        "searchPhrase": "elsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "elsektionschef",
        "name": "Elsektionschef",
        "searchPhrase": "elsektionschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "elverkschef",
        "name": "Elverkschef",
        "searchPhrase": "elverkschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "energideklarant",
        "name": "Energideklarant",
        "searchPhrase": "energideklarant a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "energihandlaggare",
        "name": "Energihandläggare",
        "searchPhrase": "energihandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "energiinformator",
        "name": "Energiinformatör",
        "searchPhrase": "energiinformatör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "energikonsulent",
        "name": "Energikonsulent",
        "searchPhrase": "energikonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "energiledare",
        "name": "Energiledare",
        "searchPhrase": "energiledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "energioptimerare",
        "name": "Energioptimerare",
        "searchPhrase": "energioptimerare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "energiplanerare",
        "name": "Energiplanerare",
        "searchPhrase": "energiplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "energisamordnare",
        "name": "Energisamordnare",
        "searchPhrase": "energisamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "energisparradgivare",
        "name": "Energisparrådgivare",
        "searchPhrase": "energisparrådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "energiutvecklare",
        "name": "Energiutvecklare",
        "searchPhrase": "energiutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "energiverkschef",
        "name": "Energiverkschef",
        "searchPhrase": "energiverkschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fjarrvarmeingenjor",
        "name": "Fjärrvärmeingenjör",
        "searchPhrase": "fjärrvärmeingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fjarrvarmetekniker",
        "name": "Fjärrvärmetekniker",
        "searchPhrase": "fjärrvärmetekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ledningsingenjor",
        "name": "Ledningsingenjör",
        "searchPhrase": "ledningsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ledningsoperator",
        "name": "Ledningsoperatör",
        "searchPhrase": "ledningsoperatör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "ledningstekniker",
        "name": "Ledningstekniker",
        "searchPhrase": "ledningstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "signalingenjor",
        "name": "Signalingenjör",
        "searchPhrase": "signalingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vindkraftingenjor",
        "name": "Vindkraftingenjör",
        "searchPhrase": "vindkraftingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "varmeingenjor",
        "name": "Värmeingenjör",
        "searchPhrase": "värmeingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "varmetekniker",
        "name": "Värmetekniker",
        "searchPhrase": "värmetekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "varmeverksingenjor",
        "name": "Värmeverksingenjör",
        "searchPhrase": "värmeverksingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arkitekt",
        "name": "Arkitekt",
        "searchPhrase": "arkitekt a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "av-installator",
        "name": "AV-installatör",
        "searchPhrase": "av-installatör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "banforman",
        "name": "Banförman",
        "searchPhrase": "banförman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bovard",
        "name": "Bovärd",
        "searchPhrase": "bovärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dekormontor",
        "name": "Dekormontör",
        "searchPhrase": "dekormontör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "fastighetsansvarig",
        "name": "Fastighetsansvarig",
        "searchPhrase": "fastighetsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fastighetsformedlare",
        "name": "Fastighetsförmedlare",
        "searchPhrase": "fastighetsförmedlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fastighetsforvaltare",
        "name": "Fastighetsförvaltare",
        "searchPhrase": "fastighetsförvaltare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fastighetsingenjor",
        "name": "Fastighetsingenjör",
        "searchPhrase": "fastighetsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fastighetsreparator",
        "name": "Fastighetsreparatör",
        "searchPhrase": "fastighetsreparatör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fastighetsskotare",
        "name": "Fastighetsskötare",
        "searchPhrase": "fastighetsskötare a-kassa",
        "recommendedAkassaId": "fastighets",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fastighetstekniker",
        "name": "Fastighetstekniker",
        "searchPhrase": "fastighetstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fastighetsvard",
        "name": "Fastighetsvärd",
        "searchPhrase": "fastighetsvärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fastighetsagare",
        "name": "Fastighetsägare",
        "searchPhrase": "fastighetsägare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fiberinstallator",
        "name": "Fiberinstallatör",
        "searchPhrase": "fiberinstallatör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fibertekniker",
        "name": "Fibertekniker",
        "searchPhrase": "fibertekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fukttekniker",
        "name": "Fukttekniker",
        "searchPhrase": "fukttekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fonsterputsare",
        "name": "Fönsterputsare",
        "searchPhrase": "fönsterputsare a-kassa",
        "recommendedAkassaId": "fastighets",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fonsterrenoverare",
        "name": "Fönsterrenoverare",
        "searchPhrase": "fönsterrenoverare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forradsman",
        "name": "Förrådsman",
        "searchPhrase": "förrådsman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "greenkeeper",
        "name": "Greenkeeper",
        "searchPhrase": "greenkeeper a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hemhjalp",
        "name": "Hemhjälp",
        "searchPhrase": "hemhjälp a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hisstekniker",
        "name": "Hisstekniker",
        "searchPhrase": "hisstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hotellstadare",
        "name": "Hotellstädare",
        "searchPhrase": "hotellstädare a-kassa",
        "recommendedAkassaId": "hrak",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "husvard",
        "name": "Husvärd",
        "searchPhrase": "husvärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "idrottsplatsplanerare",
        "name": "Idrottsplatsplanerare",
        "searchPhrase": "idrottsplatsplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "inredningssnickare",
        "name": "Inredningssnickare",
        "searchPhrase": "inredningssnickare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "klottersanerare",
        "name": "Klottersanerare",
        "searchPhrase": "klottersanerare a-kassa",
        "recommendedAkassaId": "fastighets",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "konservator",
        "name": "Konservator",
        "searchPhrase": "konservator a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kyrkogardsarbetare",
        "name": "Kyrkogårdsarbetare",
        "searchPhrase": "kyrkogårdsarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kyrkogardsvaktmastare",
        "name": "Kyrkogårdsvaktmästare",
        "searchPhrase": "kyrkogårdsvaktmästare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "larmtekniker",
        "name": "Larmtekniker",
        "searchPhrase": "larmtekniker a-kassa",
        "recommendedAkassaId": "eak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "latrinhamtare",
        "name": "Latrinhämtare",
        "searchPhrase": "latrinhämtare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "liftskotare",
        "name": "Liftskötare",
        "searchPhrase": "liftskötare a-kassa",
        "recommendedAkassaId": "kommunal",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "lokalvardare",
        "name": "Lokalvårdare",
        "searchPhrase": "lokalvårdare a-kassa",
        "recommendedAkassaId": "fastighets",
        "image": "/images/professions/lokalvardare.png"
    },
    {
        "slug": "lassmed",
        "name": "Låssmed",
        "searchPhrase": "låssmed a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "portmontor",
        "name": "Portmontör",
        "searchPhrase": "portmontör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "portvakt",
        "name": "Portvakt",
        "searchPhrase": "portvakt a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "rammakare",
        "name": "Rammakare",
        "searchPhrase": "rammakare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "rulltrappstekniker",
        "name": "Rulltrappstekniker",
        "searchPhrase": "rulltrappstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "rormokare",
        "name": "Rörmokare",
        "searchPhrase": "rörmokare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "rormontor",
        "name": "Rörmontör",
        "searchPhrase": "rörmontör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "slamsugare",
        "name": "Slamsugare",
        "searchPhrase": "slamsugare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "snoskottare",
        "name": "Snöskottare",
        "searchPhrase": "snöskottare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sotare",
        "name": "Sotare",
        "searchPhrase": "sotare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "stenarbetare",
        "name": "Stenarbetare",
        "searchPhrase": "stenarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "stadare",
        "name": "Städare",
        "searchPhrase": "städare a-kassa",
        "recommendedAkassaId": "fastighets",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "stadkonsult",
        "name": "Städkonsult",
        "searchPhrase": "städkonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "stadledare",
        "name": "Städledare",
        "searchPhrase": "städledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "taklaggare",
        "name": "Takläggare",
        "searchPhrase": "takläggare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tapetserare",
        "name": "Tapetserare",
        "searchPhrase": "tapetserare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "telemontor",
        "name": "Telemontör",
        "searchPhrase": "telemontör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "tradgardsarkitekt",
        "name": "Trädgårdsarkitekt",
        "searchPhrase": "trädgårdsarkitekt a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tradgardsingenjor",
        "name": "Trädgårdsingenjör",
        "searchPhrase": "trädgårdsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tradgardsmastare",
        "name": "Trädgårdsmästare",
        "searchPhrase": "trädgårdsmästare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vaktmastare",
        "name": "Vaktmästare",
        "searchPhrase": "vaktmästare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vvs-konstruktor",
        "name": "VVS-konstruktör",
        "searchPhrase": "vvs-konstruktör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "overstaderska",
        "name": "Överstäderska",
        "searchPhrase": "överstäderska a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "reparator",
        "name": "Reparatör",
        "searchPhrase": "reparatör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hemservice",
        "name": "Hemservice",
        "searchPhrase": "hemservice a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "hushallsarbetare",
        "name": "Hushållsarbetare",
        "searchPhrase": "hushållsarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "miljovard",
        "name": "Miljövärd",
        "searchPhrase": "miljövärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tradgardsodlare",
        "name": "Trädgårdsodlare",
        "searchPhrase": "trädgårdsodlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fordonsvardare",
        "name": "Fordonsvårdare",
        "searchPhrase": "fordonsvårdare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "hisskonsult",
        "name": "Hisskonsult",
        "searchPhrase": "hisskonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "rornatstekniker",
        "name": "Rörnätstekniker",
        "searchPhrase": "rörnätstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "spoltekniker",
        "name": "Spoltekniker",
        "searchPhrase": "spoltekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "industriklattrare",
        "name": "Industriklättrare",
        "searchPhrase": "industriklättrare a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "kemtvattare",
        "name": "Kemtvättare",
        "searchPhrase": "kemtvättare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mark--och-exploateringsingenjor",
        "name": "Mark- och exploateringsingenjör",
        "searchPhrase": "mark- och exploateringsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sjukhusstadare",
        "name": "Sjukhusstädare",
        "searchPhrase": "sjukhusstädare a-kassa",
        "recommendedAkassaId": "fastighets",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hembitrade",
        "name": "Hembiträde",
        "searchPhrase": "hembiträde a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skotselarbetare",
        "name": "Skötselarbetare",
        "searchPhrase": "skötselarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "installationstekniker",
        "name": "Installationstekniker",
        "searchPhrase": "installationstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "servicekonsulent",
        "name": "Servicekonsulent",
        "searchPhrase": "servicekonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "kalibreringsingenjor",
        "name": "Kalibreringsingenjör",
        "searchPhrase": "kalibreringsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kalibreringstekniker",
        "name": "Kalibreringstekniker",
        "searchPhrase": "kalibreringstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "masttekniker",
        "name": "Masttekniker",
        "searchPhrase": "masttekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vitvaruinstallator",
        "name": "Vitvaruinstallatör",
        "searchPhrase": "vitvaruinstallatör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lastekniker",
        "name": "Låstekniker",
        "searchPhrase": "låstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "omradesvard",
        "name": "Områdesvärd",
        "searchPhrase": "områdesvärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "va-ingenjor",
        "name": "VA-ingenjör",
        "searchPhrase": "va-ingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "field-service-engineer",
        "name": "Field service engineer",
        "searchPhrase": "field service engineer a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "reliningstekniker",
        "name": "Reliningstekniker",
        "searchPhrase": "reliningstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bygglovsarkitekt",
        "name": "Bygglovsarkitekt",
        "searchPhrase": "bygglovsarkitekt a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "reptekniker",
        "name": "Reptekniker",
        "searchPhrase": "reptekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "depaarbetare",
        "name": "Depåarbetare",
        "searchPhrase": "depåarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "va-projektor",
        "name": "VA-projektör",
        "searchPhrase": "va-projektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ventilationsplatslagare",
        "name": "Ventilationsplåtslagare",
        "searchPhrase": "ventilationsplåtslagare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "abonnenthandlaggare",
        "name": "Abonnenthandläggare",
        "searchPhrase": "abonnenthandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "abonnentingenjor",
        "name": "Abonnentingenjör",
        "searchPhrase": "abonnentingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arkitektkonsulent",
        "name": "Arkitektkonsulent",
        "searchPhrase": "arkitektkonsulent a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "belysningsingenjor",
        "name": "Belysningsingenjör",
        "searchPhrase": "belysningsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "belysningsmastare",
        "name": "Belysningsmästare",
        "searchPhrase": "belysningsmästare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "biblioteksvaktmastare",
        "name": "Biblioteksvaktmästare",
        "searchPhrase": "biblioteksvaktmästare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "boendeutvecklare",
        "name": "Boendeutvecklare",
        "searchPhrase": "boendeutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "boserviceassistent",
        "name": "Boserviceassistent",
        "searchPhrase": "boserviceassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "bovardschef",
        "name": "Bovärdschef",
        "searchPhrase": "bovärdschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "drift--och-teknikchef",
        "name": "Drift- och teknikchef",
        "searchPhrase": "drift- och teknikchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "drift--och-underhallsadministrator",
        "name": "Drift- och underhållsadministratör",
        "searchPhrase": "drift- och underhållsadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "drift--och-underhallsingenjor",
        "name": "Drift- och underhållsingenjör",
        "searchPhrase": "drift- och underhållsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "drift--och-underhallstekniker",
        "name": "Drift- och underhållstekniker",
        "searchPhrase": "drift- och underhållstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "expeditionsassistent",
        "name": "Expeditionsassistent",
        "searchPhrase": "expeditionsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "expeditionsvaktmastare",
        "name": "Expeditionsvaktmästare",
        "searchPhrase": "expeditionsvaktmästare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fastighetsadministrator",
        "name": "Fastighetsadministratör",
        "searchPhrase": "fastighetsadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fastighetsassistent",
        "name": "Fastighetsassistent",
        "searchPhrase": "fastighetsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fastighetscontroller",
        "name": "Fastighetscontroller",
        "searchPhrase": "fastighetscontroller a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fastighetsdirektor",
        "name": "Fastighetsdirektör",
        "searchPhrase": "fastighetsdirektör a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fastighetsforman",
        "name": "Fastighetsförman",
        "searchPhrase": "fastighetsförman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fastighetsintendent",
        "name": "Fastighetsintendent",
        "searchPhrase": "fastighetsintendent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fastighetskoordinator",
        "name": "Fastighetskoordinator",
        "searchPhrase": "fastighetskoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fastighetssamordnare",
        "name": "Fastighetssamordnare",
        "searchPhrase": "fastighetssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fastighetssekreterare",
        "name": "Fastighetssekreterare",
        "searchPhrase": "fastighetssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fiberprojektor",
        "name": "Fiberprojektör",
        "searchPhrase": "fiberprojektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forvaltningsadministrator",
        "name": "Förvaltningsadministratör",
        "searchPhrase": "förvaltningsadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forvaltningschef",
        "name": "Förvaltningschef",
        "searchPhrase": "förvaltningschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forvaltningschefssekreterare",
        "name": "Förvaltningschefssekreterare",
        "searchPhrase": "förvaltningschefssekreterare a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forvaltningscontroller",
        "name": "Förvaltningscontroller",
        "searchPhrase": "förvaltningscontroller a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forvaltningsdirektor",
        "name": "Förvaltningsdirektör",
        "searchPhrase": "förvaltningsdirektör a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forvaltningsekonom",
        "name": "Förvaltningsekonom",
        "searchPhrase": "förvaltningsekonom a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forvaltningsingenjor",
        "name": "Förvaltningsingenjör",
        "searchPhrase": "förvaltningsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forvaltningsjurist",
        "name": "Förvaltningsjurist",
        "searchPhrase": "förvaltningsjurist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forvaltningssamordnare",
        "name": "Förvaltningssamordnare",
        "searchPhrase": "förvaltningssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forvaltningssekreterare",
        "name": "Förvaltningssekreterare",
        "searchPhrase": "förvaltningssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forvaltningsutvecklare",
        "name": "Förvaltningsutvecklare",
        "searchPhrase": "förvaltningsutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gatuforvaltare",
        "name": "Gatuförvaltare",
        "searchPhrase": "gatuförvaltare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "idrottsplatschef",
        "name": "Idrottsplatschef",
        "searchPhrase": "idrottsplatschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "idrottsplatsforman",
        "name": "Idrottsplatsförman",
        "searchPhrase": "idrottsplatsförman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "installationsansvarig",
        "name": "Installationsansvarig",
        "searchPhrase": "installationsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "installationschef",
        "name": "Installationschef",
        "searchPhrase": "installationschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "installationsingenjor",
        "name": "Installationsingenjör",
        "searchPhrase": "installationsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "institutionstekniker",
        "name": "Institutionstekniker",
        "searchPhrase": "institutionstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kontorsvaktmastare",
        "name": "Kontorsvaktmästare",
        "searchPhrase": "kontorsvaktmästare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lokalansvarig",
        "name": "Lokalansvarig",
        "searchPhrase": "lokalansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lokalarbetare",
        "name": "Lokalarbetare",
        "searchPhrase": "lokalarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lokalchef",
        "name": "Lokalchef",
        "searchPhrase": "lokalchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lokalstrateg",
        "name": "Lokalstrateg",
        "searchPhrase": "lokalstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lokalvardschef",
        "name": "Lokalvårdschef",
        "searchPhrase": "lokalvårdschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "lassystemansvarig",
        "name": "Låssystemansvarig",
        "searchPhrase": "låssystemansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lassystemhandlaggare",
        "name": "Låssystemhandläggare",
        "searchPhrase": "låssystemhandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lassystemkonsult",
        "name": "Låssystemkonsult",
        "searchPhrase": "låssystemkonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lasvagledare",
        "name": "Låsvägledare",
        "searchPhrase": "låsvägledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lagenhetsansvarig",
        "name": "Lägenhetsansvarig",
        "searchPhrase": "lägenhetsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lagenhetsforvaltare",
        "name": "Lägenhetsförvaltare",
        "searchPhrase": "lägenhetsförvaltare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lagenhetssamordnare",
        "name": "Lägenhetssamordnare",
        "searchPhrase": "lägenhetssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lagenhetsutvecklare",
        "name": "Lägenhetsutvecklare",
        "searchPhrase": "lägenhetsutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "parkkonsulent",
        "name": "Parkkonsulent",
        "searchPhrase": "parkkonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "parksamordnare",
        "name": "Parksamordnare",
        "searchPhrase": "parksamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "parksansvarig",
        "name": "Parksansvarig",
        "searchPhrase": "parksansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "parkstrateg",
        "name": "Parkstrateg",
        "searchPhrase": "parkstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "renhallningsansvarig",
        "name": "Renhållningsansvarig",
        "searchPhrase": "renhållningsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "renhallningschef",
        "name": "Renhållningschef",
        "searchPhrase": "renhållningschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skylttekniker",
        "name": "Skylttekniker",
        "searchPhrase": "skylttekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "styr--och-reglertekniker",
        "name": "Styr- och reglertekniker",
        "searchPhrase": "styr- och reglertekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tradgardsassistent",
        "name": "Trädgårdsassistent",
        "searchPhrase": "trädgårdsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "underhallsansvarig",
        "name": "Underhållsansvarig",
        "searchPhrase": "underhållsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "underhallschef",
        "name": "Underhållschef",
        "searchPhrase": "underhållschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vaktmastarchef",
        "name": "Vaktmästarchef",
        "searchPhrase": "vaktmästarchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vvs-ingenjor",
        "name": "VVS-ingenjör",
        "searchPhrase": "vvs-ingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vvs-inspektor",
        "name": "VVS-inspektör",
        "searchPhrase": "vvs-inspektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vvs-tekniker",
        "name": "VVS-tekniker",
        "searchPhrase": "vvs-tekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skolvaktmastare",
        "name": "Skolvaktmästare",
        "searchPhrase": "skolvaktmästare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "agronom",
        "name": "Agronom",
        "searchPhrase": "agronom a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "astronom",
        "name": "Astronom",
        "searchPhrase": "astronom a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "atomfysiker",
        "name": "Atomfysiker",
        "searchPhrase": "atomfysiker a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bioinformatiker",
        "name": "Bioinformatiker",
        "searchPhrase": "bioinformatiker a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "biokemist",
        "name": "Biokemist",
        "searchPhrase": "biokemist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "biolog",
        "name": "Biolog",
        "searchPhrase": "biolog a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "biotekniker",
        "name": "Biotekniker",
        "searchPhrase": "biotekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefsmikrobiolog",
        "name": "Chefsmikrobiolog",
        "searchPhrase": "chefsmikrobiolog a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forskarassistent",
        "name": "Forskarassistent",
        "searchPhrase": "forskarassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forskare",
        "name": "Forskare",
        "searchPhrase": "forskare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forskningsassistent",
        "name": "Forskningsassistent",
        "searchPhrase": "forskningsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forskningsingenjor",
        "name": "Forskningsingenjör",
        "searchPhrase": "forskningsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fou-chef",
        "name": "FOU-chef",
        "searchPhrase": "fou-chef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fysiker",
        "name": "Fysiker",
        "searchPhrase": "fysiker a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forsoksdjurstekniker",
        "name": "Försöksdjurstekniker",
        "searchPhrase": "försöksdjurstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "geofysiker",
        "name": "Geofysiker",
        "searchPhrase": "geofysiker a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "geolog",
        "name": "Geolog",
        "searchPhrase": "geolog a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kemiingenjor",
        "name": "Kemiingenjör",
        "searchPhrase": "kemiingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kemist",
        "name": "Kemist",
        "searchPhrase": "kemist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kulturgeograf",
        "name": "Kulturgeograf",
        "searchPhrase": "kulturgeograf a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "laboratorieassistent",
        "name": "Laboratorieassistent",
        "searchPhrase": "laboratorieassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "laboratorieingenjor",
        "name": "Laboratorieingenjör",
        "searchPhrase": "laboratorieingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "laboratorietekniker",
        "name": "Laboratorietekniker",
        "searchPhrase": "laboratorietekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "marinbiolog",
        "name": "Marinbiolog",
        "searchPhrase": "marinbiolog a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "matematiker",
        "name": "Matematiker",
        "searchPhrase": "matematiker a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "meteorolog",
        "name": "Meteorolog",
        "searchPhrase": "meteorolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mikrobiolog",
        "name": "Mikrobiolog",
        "searchPhrase": "mikrobiolog a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "miljovetare",
        "name": "Miljövetare",
        "searchPhrase": "miljövetare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "molekylarbiolog",
        "name": "Molekylärbiolog",
        "searchPhrase": "molekylärbiolog a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "toxikolog",
        "name": "Toxikolog",
        "searchPhrase": "toxikolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "laboratoriebitrade",
        "name": "Laboratoriebiträde",
        "searchPhrase": "laboratoriebiträde a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "laborant",
        "name": "Laborant",
        "searchPhrase": "laborant a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "livscykelanalytiker",
        "name": "Livscykelanalytiker",
        "searchPhrase": "livscykelanalytiker a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forensisk-laborant",
        "name": "Forensisk laborant",
        "searchPhrase": "forensisk laborant a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hallbarhetsstrateg",
        "name": "Hållbarhetsstrateg",
        "searchPhrase": "hållbarhetsstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sustainability-specialist",
        "name": "Sustainability specialist",
        "searchPhrase": "sustainability specialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "biomedicinare",
        "name": "Biomedicinare",
        "searchPhrase": "biomedicinare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "filolog",
        "name": "Filolog",
        "searchPhrase": "filolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teknisk-konsult",
        "name": "Teknisk konsult",
        "searchPhrase": "teknisk konsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "postdoktor",
        "name": "Postdoktor",
        "searchPhrase": "postdoktor a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forskningschef",
        "name": "Forskningschef",
        "searchPhrase": "forskningschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forskningshandledare",
        "name": "Forskningshandledare",
        "searchPhrase": "forskningshandledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forskningssekreterare",
        "name": "Forskningssekreterare",
        "searchPhrase": "forskningssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fou-assistent",
        "name": "FOU-assistent",
        "searchPhrase": "fou-assistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "labbassistent",
        "name": "Labbassistent",
        "searchPhrase": "labbassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "laboratorieansvarig",
        "name": "Laboratorieansvarig",
        "searchPhrase": "laboratorieansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "laboratoriechef",
        "name": "Laboratoriechef",
        "searchPhrase": "laboratoriechef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lakemedelsinspektor",
        "name": "Läkemedelsinspektör",
        "searchPhrase": "läkemedelsinspektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "samhallsanalytiker",
        "name": "Samhällsanalytiker",
        "searchPhrase": "samhällsanalytiker a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hallbarhetskonsult",
        "name": "Hållbarhetskonsult",
        "searchPhrase": "hållbarhetskonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "klinisk-provningsledare",
        "name": "Klinisk prövningsledare",
        "searchPhrase": "klinisk prövningsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "account-manager",
        "name": "Account manager",
        "searchPhrase": "account manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "affarsutvecklare",
        "name": "Affärsutvecklare",
        "searchPhrase": "affärsutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "annonssaljare",
        "name": "Annonssäljare",
        "searchPhrase": "annonssäljare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "auktionsforrattare",
        "name": "Auktionsförrättare",
        "searchPhrase": "auktionsförrättare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bilforsaljare",
        "name": "Bilförsäljare",
        "searchPhrase": "bilförsäljare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "biljettansvarig",
        "name": "Biljettansvarig",
        "searchPhrase": "biljettansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "batforsaljare",
        "name": "Båtförsäljare",
        "searchPhrase": "båtförsäljare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "callcenter-agent",
        "name": "Callcenter agent",
        "searchPhrase": "callcenter agent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "campaign-manager",
        "name": "Campaign manager",
        "searchPhrase": "campaign manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "eftermarknadskoordinator",
        "name": "Eftermarknadskoordinator",
        "searchPhrase": "eftermarknadskoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "exportsaljare",
        "name": "Exportsäljare",
        "searchPhrase": "exportsäljare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fastighetsmaklare",
        "name": "Fastighetsmäklare",
        "searchPhrase": "fastighetsmäklare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "faltsaljare",
        "name": "Fältsäljare",
        "searchPhrase": "fältsäljare a-kassa",
        "recommendedAkassaId": "saljarnas",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "foretagssaljare",
        "name": "Företagssäljare",
        "searchPhrase": "företagssäljare a-kassa",
        "recommendedAkassaId": "saljarnas",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forsaljningsassistent",
        "name": "Försäljningsassistent",
        "searchPhrase": "försäljningsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forsaljningsdirektor",
        "name": "Försäljningsdirektör",
        "searchPhrase": "försäljningsdirektör a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "guide",
        "name": "Guide",
        "searchPhrase": "guide a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "husvagnsforsaljare",
        "name": "Husvagnsförsäljare",
        "searchPhrase": "husvagnsförsäljare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "inkopare",
        "name": "Inköpare",
        "searchPhrase": "inköpare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "inkopsassistent",
        "name": "Inköpsassistent",
        "searchPhrase": "inköpsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "inkopschef",
        "name": "Inköpschef",
        "searchPhrase": "inköpschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "innesaljare",
        "name": "Innesäljare",
        "searchPhrase": "innesäljare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kalkylerare",
        "name": "Kalkylerare",
        "searchPhrase": "kalkylerare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "key-account-manager",
        "name": "Key account manager",
        "searchPhrase": "key account manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "konferensbokare",
        "name": "Konferensbokare",
        "searchPhrase": "konferensbokare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lakemedelskonsulent",
        "name": "Läkemedelskonsulent",
        "searchPhrase": "läkemedelskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "marknadsanalytiker",
        "name": "Marknadsanalytiker",
        "searchPhrase": "marknadsanalytiker a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "marknadsansvarig",
        "name": "Marknadsansvarig",
        "searchPhrase": "marknadsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "marknadsassistent",
        "name": "Marknadsassistent",
        "searchPhrase": "marknadsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "marknadschef",
        "name": "Marknadschef",
        "searchPhrase": "marknadschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "marknadsdirektor",
        "name": "Marknadsdirektör",
        "searchPhrase": "marknadsdirektör a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "marknadsforare",
        "name": "Marknadsförare",
        "searchPhrase": "marknadsförare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "marknadskommunikator",
        "name": "Marknadskommunikatör",
        "searchPhrase": "marknadskommunikatör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "marknadskoordinator",
        "name": "Marknadskoordinator",
        "searchPhrase": "marknadskoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "marknadsundersokare",
        "name": "Marknadsundersökare",
        "searchPhrase": "marknadsundersökare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mediaplanerare",
        "name": "Mediaplanerare",
        "searchPhrase": "mediaplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mediasaljare",
        "name": "Mediasäljare",
        "searchPhrase": "mediasäljare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "maklarassistent",
        "name": "Mäklarassistent",
        "searchPhrase": "mäklarassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "orderlaggare",
        "name": "Orderläggare",
        "searchPhrase": "orderläggare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "partneransvarig",
        "name": "Partneransvarig",
        "searchPhrase": "partneransvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pr-chef",
        "name": "PR-chef",
        "searchPhrase": "pr-chef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pr-konsult",
        "name": "PR-konsult",
        "searchPhrase": "pr-konsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "produktspecialist",
        "name": "Produktspecialist",
        "searchPhrase": "produktspecialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "produktutvecklare",
        "name": "Produktutvecklare",
        "searchPhrase": "produktutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "projektinkopare",
        "name": "Projektinköpare",
        "searchPhrase": "projektinköpare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "reklamutdelare",
        "name": "Reklamutdelare",
        "searchPhrase": "reklamutdelare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "resesaljare",
        "name": "Resesäljare",
        "searchPhrase": "resesäljare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sales-coordinator",
        "name": "Sales coordinator",
        "searchPhrase": "sales coordinator a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "supply-chain-manager",
        "name": "Supply chain manager",
        "searchPhrase": "supply chain manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "saljare",
        "name": "Säljare",
        "searchPhrase": "säljare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "saljassistent",
        "name": "Säljassistent",
        "searchPhrase": "säljassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "saljchef",
        "name": "Säljchef",
        "searchPhrase": "säljchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "saljcoach",
        "name": "Säljcoach",
        "searchPhrase": "säljcoach a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "saljkoordinator",
        "name": "Säljkoordinator",
        "searchPhrase": "säljkoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "saljstod",
        "name": "Säljstöd",
        "searchPhrase": "säljstöd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "saljsupport",
        "name": "Säljsupport",
        "searchPhrase": "säljsupport a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teamkoordinator",
        "name": "Teamkoordinator",
        "searchPhrase": "teamkoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teamledare",
        "name": "Teamledare",
        "searchPhrase": "teamledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teknisk-saljare",
        "name": "Teknisk säljare",
        "searchPhrase": "teknisk säljare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "telefonforsaljare",
        "name": "Telefonförsäljare",
        "searchPhrase": "telefonförsäljare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "upphandlare",
        "name": "Upphandlare",
        "searchPhrase": "upphandlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utesaljare",
        "name": "Utesäljare",
        "searchPhrase": "utesäljare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "uthyrare",
        "name": "Uthyrare",
        "searchPhrase": "uthyrare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "varumarkesassistent",
        "name": "Varumärkesassistent",
        "searchPhrase": "varumärkesassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forsaljare",
        "name": "Försäljare",
        "searchPhrase": "försäljare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "performance-marketing-specialist",
        "name": "Performance marketing specialist",
        "searchPhrase": "performance marketing specialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "customer-success-manager",
        "name": "Customer success manager",
        "searchPhrase": "customer success manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "supply-chain-analyst",
        "name": "Supply chain analyst",
        "searchPhrase": "supply chain analyst a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forsaljningschef",
        "name": "Försäljningschef",
        "searchPhrase": "försäljningschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "inkopsanalytiker",
        "name": "Inköpsanalytiker",
        "searchPhrase": "inköpsanalytiker a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hussaljare",
        "name": "Hussäljare",
        "searchPhrase": "hussäljare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kassabitrade",
        "name": "Kassabiträde",
        "searchPhrase": "kassabiträde a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "varumarkesstrateg",
        "name": "Varumärkesstrateg",
        "searchPhrase": "varumärkesstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "online-merchandiser",
        "name": "Online merchandiser",
        "searchPhrase": "online merchandiser a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "marketing-manager",
        "name": "Marketing manager",
        "searchPhrase": "marketing manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "inbound-sales-manager",
        "name": "Inbound sales manager",
        "searchPhrase": "inbound sales manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "saljande-distributor",
        "name": "Säljande distributör",
        "searchPhrase": "säljande distributör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "leveransspecialist",
        "name": "Leveransspecialist",
        "searchPhrase": "leveransspecialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "e-commerce-specialist",
        "name": "E-commerce specialist",
        "searchPhrase": "e-commerce specialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "global-account-executive",
        "name": "Global account executive",
        "searchPhrase": "global account executive a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hallvard",
        "name": "Hallvärd",
        "searchPhrase": "hallvärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "servicesaljare",
        "name": "Servicesäljare",
        "searchPhrase": "servicesäljare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "client-success-manager",
        "name": "Client success manager",
        "searchPhrase": "client success manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "moteskoordinator",
        "name": "Möteskoordinator",
        "searchPhrase": "möteskoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "annonsproducent",
        "name": "Annonsproducent",
        "searchPhrase": "annonsproducent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "marketing-automation-specialist",
        "name": "Marketing automation specialist",
        "searchPhrase": "marketing automation specialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "global-commodity-manager",
        "name": "Global commodity manager",
        "searchPhrase": "global commodity manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bilhandlare",
        "name": "Bilhandlare",
        "searchPhrase": "bilhandlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "seo-specialist",
        "name": "SEO-specialist",
        "searchPhrase": "seo-specialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "assisterande-butikschef",
        "name": "Assisterande butikschef",
        "searchPhrase": "assisterande butikschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "merchandiser",
        "name": "Merchandiser",
        "searchPhrase": "merchandiser a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "auktionsutropare",
        "name": "Auktionsutropare",
        "searchPhrase": "auktionsutropare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "digitaltryckare",
        "name": "Digitaltryckare",
        "searchPhrase": "digitaltryckare a-kassa",
        "recommendedAkassaId": "gs",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forradsinkopare",
        "name": "Förrådsinköpare",
        "searchPhrase": "förrådsinköpare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forsaljningsansvarig",
        "name": "Försäljningsansvarig",
        "searchPhrase": "försäljningsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forsaljningskoordinator",
        "name": "Försäljningskoordinator",
        "searchPhrase": "försäljningskoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forsaljningsstod",
        "name": "Försäljningsstöd",
        "searchPhrase": "försäljningsstöd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "inkopsadministrator",
        "name": "Inköpsadministratör",
        "searchPhrase": "inköpsadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "inkopsansvarig",
        "name": "Inköpsansvarig",
        "searchPhrase": "inköpsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "inkopskonsult",
        "name": "Inköpskonsult",
        "searchPhrase": "inköpskonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "inkopssamordnare",
        "name": "Inköpssamordnare",
        "searchPhrase": "inköpssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "inkopsstrateg",
        "name": "Inköpsstrateg",
        "searchPhrase": "inköpsstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kundassistent",
        "name": "Kundassistent",
        "searchPhrase": "kundassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kundchef",
        "name": "Kundchef",
        "searchPhrase": "kundchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kundhandlaggare",
        "name": "Kundhandläggare",
        "searchPhrase": "kundhandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kundkoordinator",
        "name": "Kundkoordinator",
        "searchPhrase": "kundkoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kundservicechef",
        "name": "Kundservicechef",
        "searchPhrase": "kundservicechef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "kundtjanstansvarig",
        "name": "Kundtjänstansvarig",
        "searchPhrase": "kundtjänstansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kundtjanstchef",
        "name": "Kundtjänstchef",
        "searchPhrase": "kundtjänstchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kundutvecklare",
        "name": "Kundutvecklare",
        "searchPhrase": "kundutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "marknads--och-kommunikationsansvarig",
        "name": "Marknads- och kommunikationsansvarig",
        "searchPhrase": "marknads- och kommunikationsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "marknadsforingsansvarig",
        "name": "Marknadsföringsansvarig",
        "searchPhrase": "marknadsföringsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "marknadsforingsassistent",
        "name": "Marknadsföringsassistent",
        "searchPhrase": "marknadsföringsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "marknadskonsulent",
        "name": "Marknadskonsulent",
        "searchPhrase": "marknadskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "marknadsplanerare",
        "name": "Marknadsplanerare",
        "searchPhrase": "marknadsplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "marknadssamordnare",
        "name": "Marknadssamordnare",
        "searchPhrase": "marknadssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "marknadssekreterare",
        "name": "Marknadssekreterare",
        "searchPhrase": "marknadssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "marknadsstrateg",
        "name": "Marknadsstrateg",
        "searchPhrase": "marknadsstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "marknadsutvecklare",
        "name": "Marknadsutvecklare",
        "searchPhrase": "marknadsutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "materialsaljare",
        "name": "Materialsäljare",
        "searchPhrase": "materialsäljare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "produktansvarig",
        "name": "Produktansvarig",
        "searchPhrase": "produktansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "reklamchef",
        "name": "Reklamchef",
        "searchPhrase": "reklamchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "relationschef",
        "name": "Relationschef",
        "searchPhrase": "relationschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "relationsstrateg",
        "name": "Relationsstrateg",
        "searchPhrase": "relationsstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "reservdelssaljare",
        "name": "Reservdelssäljare",
        "searchPhrase": "reservdelssäljare a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "logistikutvecklare",
        "name": "Logistikutvecklare",
        "searchPhrase": "logistikutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "attributmakare",
        "name": "Attributmakare",
        "searchPhrase": "attributmakare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bagare",
        "name": "Bagare",
        "searchPhrase": "bagare a-kassa",
        "recommendedAkassaId": "livs",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "buntmakare",
        "name": "Buntmakare",
        "searchPhrase": "buntmakare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ciselor",
        "name": "Ciselör",
        "searchPhrase": "ciselör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dekormalare",
        "name": "Dekormålare",
        "searchPhrase": "dekormålare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "dockmakare",
        "name": "Dockmakare",
        "searchPhrase": "dockmakare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "drejare",
        "name": "Drejare",
        "searchPhrase": "drejare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "finsnickare",
        "name": "Finsnickare",
        "searchPhrase": "finsnickare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "fiolbyggare",
        "name": "Fiolbyggare",
        "searchPhrase": "fiolbyggare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "florist",
        "name": "Florist",
        "searchPhrase": "florist a-kassa",
        "recommendedAkassaId": "handels",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "garvare",
        "name": "Garvare",
        "searchPhrase": "garvare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gemmolog",
        "name": "Gemmolog",
        "searchPhrase": "gemmolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gitarrbyggare",
        "name": "Gitarrbyggare",
        "searchPhrase": "gitarrbyggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "glasblasare",
        "name": "Glasblåsare",
        "searchPhrase": "glasblåsare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "glasmalare",
        "name": "Glasmålare",
        "searchPhrase": "glasmålare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "guldsmed",
        "name": "Guldsmed",
        "searchPhrase": "guldsmed a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hantverkspedagog",
        "name": "Hantverkspedagog",
        "searchPhrase": "hantverkspedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hattmakare",
        "name": "Hattmakare",
        "searchPhrase": "hattmakare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "juvelerare",
        "name": "Juvelerare",
        "searchPhrase": "juvelerare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kapellmakare",
        "name": "Kapellmakare",
        "searchPhrase": "kapellmakare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "keramiker",
        "name": "Keramiker",
        "searchPhrase": "keramiker a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "konditor",
        "name": "Konditor",
        "searchPhrase": "konditor a-kassa",
        "recommendedAkassaId": "livs",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "korgmakare",
        "name": "Korgmakare",
        "searchPhrase": "korgmakare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "krukmakare",
        "name": "Krukmakare",
        "searchPhrase": "krukmakare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "korsnar",
        "name": "Körsnär",
        "searchPhrase": "körsnär a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ladermakare",
        "name": "Lädermakare",
        "searchPhrase": "lädermakare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "modellbyggare",
        "name": "Modellbyggare",
        "searchPhrase": "modellbyggare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "modist",
        "name": "Modist",
        "searchPhrase": "modist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mobelsnickare",
        "name": "Möbelsnickare",
        "searchPhrase": "möbelsnickare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "orgelbyggare",
        "name": "Orgelbyggare",
        "searchPhrase": "orgelbyggare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "perukmakare",
        "name": "Perukmakare",
        "searchPhrase": "perukmakare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pianostammare",
        "name": "Pianostämmare",
        "searchPhrase": "pianostämmare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pizzabagare",
        "name": "Pizzabagare",
        "searchPhrase": "pizzabagare a-kassa",
        "recommendedAkassaId": "livs",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sadelmakare",
        "name": "Sadelmakare",
        "searchPhrase": "sadelmakare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "segelmakare",
        "name": "Segelmakare",
        "searchPhrase": "segelmakare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "silversmed",
        "name": "Silversmed",
        "searchPhrase": "silversmed a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skomakare",
        "name": "Skomakare",
        "searchPhrase": "skomakare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skraddare",
        "name": "Skräddare",
        "searchPhrase": "skräddare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skyltmakare",
        "name": "Skyltmakare",
        "searchPhrase": "skyltmakare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skarslipare",
        "name": "Skärslipare",
        "searchPhrase": "skärslipare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "smed",
        "name": "Smed",
        "searchPhrase": "smed a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "smyckesdesigner",
        "name": "Smyckesdesigner",
        "searchPhrase": "smyckesdesigner a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "stenhuggare",
        "name": "Stenhuggare",
        "searchPhrase": "stenhuggare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "stuckator",
        "name": "Stuckatör",
        "searchPhrase": "stuckatör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "styckare",
        "name": "Styckare",
        "searchPhrase": "styckare a-kassa",
        "recommendedAkassaId": "livs",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "trumlare",
        "name": "Trumlare",
        "searchPhrase": "trumlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "trasnidare",
        "name": "Träsnidare",
        "searchPhrase": "träsnidare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "typograf",
        "name": "Typograf",
        "searchPhrase": "typograf a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "urmakare",
        "name": "Urmakare",
        "searchPhrase": "urmakare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vinprovare",
        "name": "Vinprovare",
        "searchPhrase": "vinprovare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vavare",
        "name": "Vävare",
        "searchPhrase": "vävare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vaxtskotare",
        "name": "Växtskötare",
        "searchPhrase": "växtskötare a-kassa",
        "recommendedAkassaId": "kommunal",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "skylttillverkare",
        "name": "Skylttillverkare",
        "searchPhrase": "skylttillverkare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barista",
        "name": "Barista",
        "searchPhrase": "barista a-kassa",
        "recommendedAkassaId": "hrak",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "bartender",
        "name": "Bartender",
        "searchPhrase": "bartender a-kassa",
        "recommendedAkassaId": "hrak",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "cafebitrade",
        "name": "Cafébiträde",
        "searchPhrase": "cafébiträde a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "cafeforestandare",
        "name": "Caféföreståndare",
        "searchPhrase": "caféföreståndare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefshusfru",
        "name": "Chefshusfru",
        "searchPhrase": "chefshusfru a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefskock",
        "name": "Chefskock",
        "searchPhrase": "chefskock a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "croupier",
        "name": "Croupier",
        "searchPhrase": "croupier a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "diskare",
        "name": "Diskare",
        "searchPhrase": "diskare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "eventkoordinator",
        "name": "Eventkoordinator",
        "searchPhrase": "eventkoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "frukostvardinna",
        "name": "Frukostvärdinna",
        "searchPhrase": "frukostvärdinna a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "garderobiar",
        "name": "Garderobiär",
        "searchPhrase": "garderobiär a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gatukoksbitrade",
        "name": "Gatuköksbiträde",
        "searchPhrase": "gatuköksbiträde a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hotelldirektor",
        "name": "Hotelldirektör",
        "searchPhrase": "hotelldirektör a-kassa",
        "recommendedAkassaId": "hrak",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "hotellvardinna",
        "name": "Hotellvärdinna",
        "searchPhrase": "hotellvärdinna a-kassa",
        "recommendedAkassaId": "hrak",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "hovmastare",
        "name": "Hovmästare",
        "searchPhrase": "hovmästare a-kassa",
        "recommendedAkassaId": "hrak",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "husfru",
        "name": "Husfru",
        "searchPhrase": "husfru a-kassa",
        "recommendedAkassaId": "hrak",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "husmor",
        "name": "Husmor",
        "searchPhrase": "husmor a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kallskanka",
        "name": "Kallskänka",
        "searchPhrase": "kallskänka a-kassa",
        "recommendedAkassaId": "hrak",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "kock",
        "name": "Kock",
        "searchPhrase": "kock a-kassa",
        "recommendedAkassaId": "hrak",
        "image": "/images/professions/kock.png"
    },
    {
        "slug": "kokerska",
        "name": "Kokerska",
        "searchPhrase": "kokerska a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kostekonom",
        "name": "Kostekonom",
        "searchPhrase": "kostekonom a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kypare",
        "name": "Kypare",
        "searchPhrase": "kypare a-kassa",
        "recommendedAkassaId": "hrak",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "koksassistent",
        "name": "Köksassistent",
        "searchPhrase": "köksassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "koksbitrade",
        "name": "Köksbiträde",
        "searchPhrase": "köksbiträde a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kokschef",
        "name": "Kökschef",
        "searchPhrase": "kökschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "koksmastare",
        "name": "Köksmästare",
        "searchPhrase": "köksmästare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "maltidsbitrade",
        "name": "Måltidsbiträde",
        "searchPhrase": "måltidsbiträde a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "maltidspersonal",
        "name": "Måltidspersonal",
        "searchPhrase": "måltidspersonal a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "nattportier",
        "name": "Nattportier",
        "searchPhrase": "nattportier a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "restaurangansvarig",
        "name": "Restaurangansvarig",
        "searchPhrase": "restaurangansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "restaurangbitrade",
        "name": "Restaurangbiträde",
        "searchPhrase": "restaurangbiträde a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "revenue-manager",
        "name": "Revenue manager",
        "searchPhrase": "revenue manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "serveringsbitrade",
        "name": "Serveringsbiträde",
        "searchPhrase": "serveringsbiträde a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "servitris",
        "name": "Servitris",
        "searchPhrase": "servitris a-kassa",
        "recommendedAkassaId": "hrak",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "servitor",
        "name": "Servitör",
        "searchPhrase": "servitör a-kassa",
        "recommendedAkassaId": "hrak",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "skolmaltidsforestandare",
        "name": "Skolmåltidsföreståndare",
        "searchPhrase": "skolmåltidsföreståndare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sommelier",
        "name": "Sommelier",
        "searchPhrase": "sommelier a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "storkokskonsult",
        "name": "Storkökskonsult",
        "searchPhrase": "storkökskonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "storkokstekniker",
        "name": "Storkökstekniker",
        "searchPhrase": "storkökstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "restaurangchef",
        "name": "Restaurangchef",
        "searchPhrase": "restaurangchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hotellbokare",
        "name": "Hotellbokare",
        "searchPhrase": "hotellbokare a-kassa",
        "recommendedAkassaId": "hrak",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "naturguide",
        "name": "Naturguide",
        "searchPhrase": "naturguide a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "resekonsult",
        "name": "Resekonsult",
        "searchPhrase": "resekonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "reseledare",
        "name": "Reseledare",
        "searchPhrase": "reseledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "steward",
        "name": "Steward",
        "searchPhrase": "steward a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "turistguide",
        "name": "Turistguide",
        "searchPhrase": "turistguide a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "turistinformator",
        "name": "Turistinformatör",
        "searchPhrase": "turistinformatör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vardinna",
        "name": "Värdinna",
        "searchPhrase": "värdinna a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "evenemangsledare",
        "name": "Evenemangsledare",
        "searchPhrase": "evenemangsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fjalledare",
        "name": "Fjälledare",
        "searchPhrase": "fjälledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barchef",
        "name": "Barchef",
        "searchPhrase": "barchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "konferensansvarig",
        "name": "Konferensansvarig",
        "searchPhrase": "konferensansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "cafechef",
        "name": "Caféchef",
        "searchPhrase": "caféchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "parkvard",
        "name": "Parkvärd",
        "searchPhrase": "parkvärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "runner",
        "name": "Runner",
        "searchPhrase": "runner a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "batvardinna",
        "name": "Båtvärdinna",
        "searchPhrase": "båtvärdinna a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bingovard",
        "name": "Bingovärd",
        "searchPhrase": "bingovärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "liftvard",
        "name": "Liftvärd",
        "searchPhrase": "liftvärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "leklandsvard",
        "name": "Leklandsvärd",
        "searchPhrase": "leklandsvärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "destination-manager",
        "name": "Destination manager",
        "searchPhrase": "destination manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "konferensvardinna",
        "name": "Konferensvärdinna",
        "searchPhrase": "konferensvärdinna a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "konditoribitrade",
        "name": "Konditoribiträde",
        "searchPhrase": "konditoribiträde a-kassa",
        "recommendedAkassaId": "livs",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bageriarbetare",
        "name": "Bageriarbetare",
        "searchPhrase": "bageriarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bokningsansvarig",
        "name": "Bokningsansvarig",
        "searchPhrase": "bokningsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bokningsassistent",
        "name": "Bokningsassistent",
        "searchPhrase": "bokningsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bokningschef",
        "name": "Bokningschef",
        "searchPhrase": "bokningschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bokningskonsulent",
        "name": "Bokningskonsulent",
        "searchPhrase": "bokningskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bokningsplanerare",
        "name": "Bokningsplanerare",
        "searchPhrase": "bokningsplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "receptionschef",
        "name": "Receptionschef",
        "searchPhrase": "receptionschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "receptionssamordnare",
        "name": "Receptionssamordnare",
        "searchPhrase": "receptionssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "turistansvarig",
        "name": "Turistansvarig",
        "searchPhrase": "turistansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "turistchef",
        "name": "Turistchef",
        "searchPhrase": "turistchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "turistkonsult",
        "name": "Turistkonsult",
        "searchPhrase": "turistkonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "turistsamordnare",
        "name": "Turistsamordnare",
        "searchPhrase": "turistsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "turiststrateg",
        "name": "Turiststrateg",
        "searchPhrase": "turiststrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "turistutvecklare",
        "name": "Turistutvecklare",
        "searchPhrase": "turistutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skolmaltidsbitrade",
        "name": "Skolmåltidsbiträde",
        "searchPhrase": "skolmåltidsbiträde a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "anbudsingenjor",
        "name": "Anbudsingenjör",
        "searchPhrase": "anbudsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "anlaggningsingenjor",
        "name": "Anläggningsingenjör",
        "searchPhrase": "anläggningsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "automationsingenjor",
        "name": "Automationsingenjör",
        "searchPhrase": "automationsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "automationstekniker",
        "name": "Automationstekniker",
        "searchPhrase": "automationstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avsynare",
        "name": "Avsynare",
        "searchPhrase": "avsynare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "beredare",
        "name": "Beredare",
        "searchPhrase": "beredare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "berakningsingenjor",
        "name": "Beräkningsingenjör",
        "searchPhrase": "beräkningsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "betongindustriarbetare",
        "name": "Betongindustriarbetare",
        "searchPhrase": "betongindustriarbetare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "bilelektriker",
        "name": "Bilelektriker",
        "searchPhrase": "bilelektriker a-kassa",
        "recommendedAkassaId": "eak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "billackerare",
        "name": "Billackerare",
        "searchPhrase": "billackerare a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "biogastekniker",
        "name": "Biogastekniker",
        "searchPhrase": "biogastekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bokbindare",
        "name": "Bokbindare",
        "searchPhrase": "bokbindare a-kassa",
        "recommendedAkassaId": "gs",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bryggare",
        "name": "Bryggare",
        "searchPhrase": "bryggare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "cad-ritare",
        "name": "CAD-ritare",
        "searchPhrase": "cad-ritare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "charkuterist",
        "name": "Charkuterist",
        "searchPhrase": "charkuterist a-kassa",
        "recommendedAkassaId": "livs",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "civilingenjor",
        "name": "Civilingenjör",
        "searchPhrase": "civilingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "cnc-operator",
        "name": "CNC-operatör",
        "searchPhrase": "cnc-operatör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "cnc-tekniker",
        "name": "CNC-tekniker",
        "searchPhrase": "cnc-tekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "driftansvarig",
        "name": "Driftansvarig",
        "searchPhrase": "driftansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "driftingenjor",
        "name": "Driftingenjör",
        "searchPhrase": "driftingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "driftledare",
        "name": "Driftledare",
        "searchPhrase": "driftledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "driftoptimerare",
        "name": "Driftoptimerare",
        "searchPhrase": "driftoptimerare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "driftsattare",
        "name": "Driftsättare",
        "searchPhrase": "driftsättare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "drifttekniker",
        "name": "Drifttekniker",
        "searchPhrase": "drifttekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "finmekaniker",
        "name": "Finmekaniker",
        "searchPhrase": "finmekaniker a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "fordonsmontor",
        "name": "Fordonsmontör",
        "searchPhrase": "fordonsmontör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "forsaljningsingenjor",
        "name": "Försäljningsingenjör",
        "searchPhrase": "försäljningsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gis-ingenjor",
        "name": "GIS-ingenjör",
        "searchPhrase": "gis-ingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gjuteriarbetare",
        "name": "Gjuteriarbetare",
        "searchPhrase": "gjuteriarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "glasarbetare",
        "name": "Glasarbetare",
        "searchPhrase": "glasarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "granulerare",
        "name": "Granulerare",
        "searchPhrase": "granulerare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gruvarbetare",
        "name": "Gruvarbetare",
        "searchPhrase": "gruvarbetare a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "hjalpmedelstekniker",
        "name": "Hjälpmedelstekniker",
        "searchPhrase": "hjälpmedelstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hydraultekniker",
        "name": "Hydraultekniker",
        "searchPhrase": "hydraultekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hogskoleingenjor",
        "name": "Högskoleingenjör",
        "searchPhrase": "högskoleingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "industridesigner",
        "name": "Industridesigner",
        "searchPhrase": "industridesigner a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "industrilackerare",
        "name": "Industrilackerare",
        "searchPhrase": "industrilackerare a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "ingenjor",
        "name": "Ingenjör",
        "searchPhrase": "ingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/images/professions/ingenjor.png"
    },
    {
        "slug": "instrumenttekniker",
        "name": "Instrumenttekniker",
        "searchPhrase": "instrumenttekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kafferostare",
        "name": "Kafferostare",
        "searchPhrase": "kafferostare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kantbockare",
        "name": "Kantbockare",
        "searchPhrase": "kantbockare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kartingenjor",
        "name": "Kartingenjör",
        "searchPhrase": "kartingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "karttekniker",
        "name": "Karttekniker",
        "searchPhrase": "karttekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "konstruktionsledare",
        "name": "Konstruktionsledare",
        "searchPhrase": "konstruktionsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kontaktledningsmontor",
        "name": "Kontaktledningsmontör",
        "searchPhrase": "kontaktledningsmontör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "kopist",
        "name": "Kopist",
        "searchPhrase": "kopist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kvalitetsingenjor",
        "name": "Kvalitetsingenjör",
        "searchPhrase": "kvalitetsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kvalitetskontrollant",
        "name": "Kvalitetskontrollant",
        "searchPhrase": "kvalitetskontrollant a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kvalitetskoordinator",
        "name": "Kvalitetskoordinator",
        "searchPhrase": "kvalitetskoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kvalitetstekniker",
        "name": "Kvalitetstekniker",
        "searchPhrase": "kvalitetstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kyltekniker",
        "name": "Kyltekniker",
        "searchPhrase": "kyltekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lackerare",
        "name": "Lackerare",
        "searchPhrase": "lackerare a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "laseroperator",
        "name": "Laseroperatör",
        "searchPhrase": "laseroperatör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "linjemontor",
        "name": "Linjemontör",
        "searchPhrase": "linjemontör a-kassa",
        "recommendedAkassaId": "eak",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "livsmedelsarbetare",
        "name": "Livsmedelsarbetare",
        "searchPhrase": "livsmedelsarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "livsmedelsingenjor",
        "name": "Livsmedelsingenjör",
        "searchPhrase": "livsmedelsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "logistikingenjor",
        "name": "Logistikingenjör",
        "searchPhrase": "logistikingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "logistikkonsult",
        "name": "Logistikkonsult",
        "searchPhrase": "logistikkonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lokalsamordnare",
        "name": "Lokalsamordnare",
        "searchPhrase": "lokalsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "maskiningenjor",
        "name": "Maskiningenjör",
        "searchPhrase": "maskiningenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "maskinist",
        "name": "Maskinist",
        "searchPhrase": "maskinist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "maskinoperator",
        "name": "Maskinoperatör",
        "searchPhrase": "maskinoperatör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "maskinplanerare",
        "name": "Maskinplanerare",
        "searchPhrase": "maskinplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "maskinreparator",
        "name": "Maskinreparatör",
        "searchPhrase": "maskinreparatör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "maskinskotare",
        "name": "Maskinskötare",
        "searchPhrase": "maskinskötare a-kassa",
        "recommendedAkassaId": "kommunal",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "maskinstallare",
        "name": "Maskinställare",
        "searchPhrase": "maskinställare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "maskintekniker",
        "name": "Maskintekniker",
        "searchPhrase": "maskintekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "materialhanterare",
        "name": "Materialhanterare",
        "searchPhrase": "materialhanterare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "materialplanerare",
        "name": "Materialplanerare",
        "searchPhrase": "materialplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mejeriarbetare",
        "name": "Mejeriarbetare",
        "searchPhrase": "mejeriarbetare a-kassa",
        "recommendedAkassaId": "livs",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mekanikkonstruktor",
        "name": "Mekanikkonstruktör",
        "searchPhrase": "mekanikkonstruktör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mekatronikingenjor",
        "name": "Mekatronikingenjör",
        "searchPhrase": "mekatronikingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "metallarbetare",
        "name": "Metallarbetare",
        "searchPhrase": "metallarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "matningsingenjor",
        "name": "Mätningsingenjör",
        "searchPhrase": "mätningsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "matningstekniker",
        "name": "Mätningstekniker",
        "searchPhrase": "mätningstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "monsterkonstruktor",
        "name": "Mönsterkonstruktör",
        "searchPhrase": "mönsterkonstruktör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "nyanserare",
        "name": "Nyanserare",
        "searchPhrase": "nyanserare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "operator",
        "name": "Operatör",
        "searchPhrase": "operatör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "pappersbruksarbetare",
        "name": "Pappersbruksarbetare",
        "searchPhrase": "pappersbruksarbetare a-kassa",
        "recommendedAkassaId": "pappers",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "patentingenjor",
        "name": "Patentingenjör",
        "searchPhrase": "patentingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "planarkitekt",
        "name": "Planarkitekt",
        "searchPhrase": "planarkitekt a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "planeringsingenjor",
        "name": "Planeringsingenjör",
        "searchPhrase": "planeringsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "polymertekniker",
        "name": "Polymertekniker",
        "searchPhrase": "polymertekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "processingenjor",
        "name": "Processingenjör",
        "searchPhrase": "processingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "processoperator",
        "name": "Processoperatör",
        "searchPhrase": "processoperatör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "produktingenjor",
        "name": "Produktingenjör",
        "searchPhrase": "produktingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "produktionsingenjor",
        "name": "Produktionsingenjör",
        "searchPhrase": "produktionsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "produktionsledare",
        "name": "Produktionsledare",
        "searchPhrase": "produktionsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "produktionsplanerare",
        "name": "Produktionsplanerare",
        "searchPhrase": "produktionsplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "produktionstekniker",
        "name": "Produktionstekniker",
        "searchPhrase": "produktionstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "produkttekniker",
        "name": "Produkttekniker",
        "searchPhrase": "produkttekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "projektingenjor",
        "name": "Projektingenjör",
        "searchPhrase": "projektingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "projektor",
        "name": "Projektör",
        "searchPhrase": "projektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "provningstekniker",
        "name": "Provningstekniker",
        "searchPhrase": "provningstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pulverlackerare",
        "name": "Pulverlackerare",
        "searchPhrase": "pulverlackerare a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "robotoperator",
        "name": "Robotoperatör",
        "searchPhrase": "robotoperatör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "rymdingenjor",
        "name": "Rymdingenjör",
        "searchPhrase": "rymdingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "rattare",
        "name": "Rättare",
        "searchPhrase": "rättare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "serviceingenjor",
        "name": "Serviceingenjör",
        "searchPhrase": "serviceingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "serviceledare",
        "name": "Serviceledare",
        "searchPhrase": "serviceledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "servicetekniker",
        "name": "Servicetekniker",
        "searchPhrase": "servicetekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "signaltekniker",
        "name": "Signaltekniker",
        "searchPhrase": "signaltekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skiftledare",
        "name": "Skiftledare",
        "searchPhrase": "skiftledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "slaktare",
        "name": "Slaktare",
        "searchPhrase": "slaktare a-kassa",
        "recommendedAkassaId": "livs",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "stadsplanerare",
        "name": "Stadsplanerare",
        "searchPhrase": "stadsplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "stallare",
        "name": "Ställare",
        "searchPhrase": "ställare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "svarvare",
        "name": "Svarvare",
        "searchPhrase": "svarvare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "svetsare",
        "name": "Svetsare",
        "searchPhrase": "svetsare a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "sakerhetsingenjor",
        "name": "Säkerhetsingenjör",
        "searchPhrase": "säkerhetsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sommerska",
        "name": "Sömmerska",
        "searchPhrase": "sömmerska a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tekniker",
        "name": "Tekniker",
        "searchPhrase": "tekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teknikillustrator",
        "name": "Teknikillustratör",
        "searchPhrase": "teknikillustratör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "testingenjor",
        "name": "Testingenjör",
        "searchPhrase": "testingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "textilingenjor",
        "name": "Textilingenjör",
        "searchPhrase": "textilingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "traversforare",
        "name": "Traversförare",
        "searchPhrase": "traversförare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "tryckare",
        "name": "Tryckare",
        "searchPhrase": "tryckare a-kassa",
        "recommendedAkassaId": "gs",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "traindustriarbetare",
        "name": "Träindustriarbetare",
        "searchPhrase": "träindustriarbetare a-kassa",
        "recommendedAkassaId": "gs",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "tungmekaniker",
        "name": "Tungmekaniker",
        "searchPhrase": "tungmekaniker a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "tvattare",
        "name": "Tvättare",
        "searchPhrase": "tvättare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ugnsarbetare",
        "name": "Ugnsarbetare",
        "searchPhrase": "ugnsarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "underhallsingenjor",
        "name": "Underhållsingenjör",
        "searchPhrase": "underhållsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "underhallsmekaniker",
        "name": "Underhållsmekaniker",
        "searchPhrase": "underhållsmekaniker a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "underhallsplanerare",
        "name": "Underhållsplanerare",
        "searchPhrase": "underhållsplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "underhallstekniker",
        "name": "Underhållstekniker",
        "searchPhrase": "underhållstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "uppfinnare",
        "name": "Uppfinnare",
        "searchPhrase": "uppfinnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utredningsingenjor",
        "name": "Utredningsingenjör",
        "searchPhrase": "utredningsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utvecklingsingenjor",
        "name": "Utvecklingsingenjör",
        "searchPhrase": "utvecklingsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "va-tekniker",
        "name": "VA-tekniker",
        "searchPhrase": "va-tekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ventilationsingenjor",
        "name": "Ventilationsingenjör",
        "searchPhrase": "ventilationsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "verkmastare",
        "name": "Verkmästare",
        "searchPhrase": "verkmästare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "verkstadsarbetare",
        "name": "Verkstadsarbetare",
        "searchPhrase": "verkstadsarbetare a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "verkstadschef",
        "name": "Verkstadschef",
        "searchPhrase": "verkstadschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "verkstadstekniker",
        "name": "Verkstadstekniker",
        "searchPhrase": "verkstadstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "verktygsmakare",
        "name": "Verktygsmakare",
        "searchPhrase": "verktygsmakare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vagskotare",
        "name": "Vågskötare",
        "searchPhrase": "vågskötare a-kassa",
        "recommendedAkassaId": "kommunal",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "vindkraftstekniker",
        "name": "Vindkraftstekniker",
        "searchPhrase": "vindkraftstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ytbehandlare",
        "name": "Ytbehandlare",
        "searchPhrase": "ytbehandlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "elektronikingenjor",
        "name": "Elektronikingenjör",
        "searchPhrase": "elektronikingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "handpaketerare",
        "name": "Handpaketerare",
        "searchPhrase": "handpaketerare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "emballagehanterare",
        "name": "Emballagehanterare",
        "searchPhrase": "emballagehanterare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sammanbyggnadsmontor",
        "name": "Sammanbyggnadsmontör",
        "searchPhrase": "sammanbyggnadsmontör a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "borrchef",
        "name": "Borrchef",
        "searchPhrase": "borrchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "packare",
        "name": "Packare",
        "searchPhrase": "packare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utvecklingstekniker",
        "name": "Utvecklingstekniker",
        "searchPhrase": "utvecklingstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "produktionsmedarbetare",
        "name": "Produktionsmedarbetare",
        "searchPhrase": "produktionsmedarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "produktionsoperator",
        "name": "Produktionsoperatör",
        "searchPhrase": "produktionsoperatör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "aircraft-engineer",
        "name": "Aircraft engineer",
        "searchPhrase": "aircraft engineer a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fiskfileare",
        "name": "Fiskfiléare",
        "searchPhrase": "fiskfiléare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "apparattekniker",
        "name": "Apparattekniker",
        "searchPhrase": "apparattekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsingenjor",
        "name": "Arbetsingenjör",
        "searchPhrase": "arbetsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "automatikingenjor",
        "name": "Automatikingenjör",
        "searchPhrase": "automatikingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "automationselektriker",
        "name": "Automationselektriker",
        "searchPhrase": "automationselektriker a-kassa",
        "recommendedAkassaId": "eak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avdelningsingenjor",
        "name": "Avdelningsingenjör",
        "searchPhrase": "avdelningsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "drift--och-processtekniker",
        "name": "Drift- och processtekniker",
        "searchPhrase": "drift- och processtekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "driftadministrator",
        "name": "Driftadministratör",
        "searchPhrase": "driftadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "driftarbetare",
        "name": "Driftarbetare",
        "searchPhrase": "driftarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "driftarbetsledare",
        "name": "Driftarbetsledare",
        "searchPhrase": "driftarbetsledare a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "driftassistent",
        "name": "Driftassistent",
        "searchPhrase": "driftassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "driftavdelningschef",
        "name": "Driftavdelningschef",
        "searchPhrase": "driftavdelningschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "driftchef",
        "name": "Driftchef",
        "searchPhrase": "driftchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "driftcontroller",
        "name": "Driftcontroller",
        "searchPhrase": "driftcontroller a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "driftdirektor",
        "name": "Driftdirektör",
        "searchPhrase": "driftdirektör a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "driftelektriker",
        "name": "Driftelektriker",
        "searchPhrase": "driftelektriker a-kassa",
        "recommendedAkassaId": "eak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "driftforman",
        "name": "Driftförman",
        "searchPhrase": "driftförman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "driftinspektor",
        "name": "Driftinspektör",
        "searchPhrase": "driftinspektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "driftkemist",
        "name": "Driftkemist",
        "searchPhrase": "driftkemist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "driftledningsingenjor",
        "name": "Driftledningsingenjör",
        "searchPhrase": "driftledningsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "driftmaskinist",
        "name": "Driftmaskinist",
        "searchPhrase": "driftmaskinist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "driftmastare",
        "name": "Driftmästare",
        "searchPhrase": "driftmästare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "driftplanerare",
        "name": "Driftplanerare",
        "searchPhrase": "driftplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "driftreparator",
        "name": "Driftreparatör",
        "searchPhrase": "driftreparatör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "driftsamordnare",
        "name": "Driftsamordnare",
        "searchPhrase": "driftsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "faltingenjor",
        "name": "Fältingenjör",
        "searchPhrase": "fältingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "falttekniker",
        "name": "Fälttekniker",
        "searchPhrase": "fälttekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forradsansvarig",
        "name": "Förrådsansvarig",
        "searchPhrase": "förrådsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forradsassistent",
        "name": "Förrådsassistent",
        "searchPhrase": "förrådsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forradschef",
        "name": "Förrådschef",
        "searchPhrase": "förrådschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forradsforman",
        "name": "Förrådsförman",
        "searchPhrase": "förrådsförman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forradsforvaltare",
        "name": "Förrådsförvaltare",
        "searchPhrase": "förrådsförvaltare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forradstekniker",
        "name": "Förrådstekniker",
        "searchPhrase": "förrådstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gasmastare",
        "name": "gasmästare",
        "searchPhrase": "gasmästare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kvalitetsassistent",
        "name": "Kvalitetsassistent",
        "searchPhrase": "kvalitetsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kvalitetschef",
        "name": "Kvalitetschef",
        "searchPhrase": "kvalitetschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kvalitetscontroller",
        "name": "Kvalitetscontroller",
        "searchPhrase": "kvalitetscontroller a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kvalitetsledare",
        "name": "Kvalitetsledare",
        "searchPhrase": "kvalitetsledare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kvalitetssamordnare",
        "name": "Kvalitetssamordnare",
        "searchPhrase": "kvalitetssamordnare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kvalitetssakrare",
        "name": "Kvalitetssäkrare",
        "searchPhrase": "kvalitetssäkrare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lageransvarig",
        "name": "Lageransvarig",
        "searchPhrase": "lageransvarig a-kassa",
        "recommendedAkassaId": "handels",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lagerbitrade",
        "name": "Lagerbiträde",
        "searchPhrase": "lagerbiträde a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lagerforman",
        "name": "Lagerförman",
        "searchPhrase": "lagerförman a-kassa",
        "recommendedAkassaId": "handels",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lastillverkare",
        "name": "Låstillverkare",
        "searchPhrase": "låstillverkare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "magasinsforestandare",
        "name": "Magasinsföreståndare",
        "searchPhrase": "magasinsföreståndare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "materialansvarig",
        "name": "Materialansvarig",
        "searchPhrase": "materialansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "materialassistent",
        "name": "Materialassistent",
        "searchPhrase": "materialassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "materialchef",
        "name": "Materialchef",
        "searchPhrase": "materialchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "materialforvaltare",
        "name": "Materialförvaltare",
        "searchPhrase": "materialförvaltare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "materialkonsulent",
        "name": "Materialkonsulent",
        "searchPhrase": "materialkonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "materialsamordnare",
        "name": "Materialsamordnare",
        "searchPhrase": "materialsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "materialstrateg",
        "name": "Materialstrateg",
        "searchPhrase": "materialstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "processansvarig",
        "name": "Processansvarig",
        "searchPhrase": "processansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "processchef",
        "name": "Processchef",
        "searchPhrase": "processchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "processkoordinator",
        "name": "Processkoordinator",
        "searchPhrase": "processkoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "processtekniker",
        "name": "Processtekniker",
        "searchPhrase": "processtekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "processtutvecklare",
        "name": "Processtutvecklare",
        "searchPhrase": "processtutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "processtodjare",
        "name": "Processtödjare",
        "searchPhrase": "processtödjare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "produktionsansvarig",
        "name": "Produktionsansvarig",
        "searchPhrase": "produktionsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "produktionscontroller",
        "name": "Produktionscontroller",
        "searchPhrase": "produktionscontroller a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "produktionssamordnare",
        "name": "Produktionssamordnare",
        "searchPhrase": "produktionssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "produktionsstrateg",
        "name": "Produktionsstrateg",
        "searchPhrase": "produktionsstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "verkstadsingenjor",
        "name": "Verkstadsingenjör",
        "searchPhrase": "verkstadsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "verkstadsmekaniker",
        "name": "Verkstadsmekaniker",
        "searchPhrase": "verkstadsmekaniker a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "verkstadsmastare",
        "name": "Verkstadsmästare",
        "searchPhrase": "verkstadsmästare a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "overmontor",
        "name": "Övermontör",
        "searchPhrase": "övermontör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "kontrollrumsoperator",
        "name": "Kontrollrumsoperatör",
        "searchPhrase": "kontrollrumsoperatör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "finmontor",
        "name": "Finmontör",
        "searchPhrase": "finmontör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "advokat",
        "name": "Advokat",
        "searchPhrase": "advokat a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "advokatsekreterare",
        "name": "Advokatsekreterare",
        "searchPhrase": "advokatsekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "affarsjurist",
        "name": "Affärsjurist",
        "searchPhrase": "affärsjurist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsrattsjurist",
        "name": "Arbetsrättsjurist",
        "searchPhrase": "arbetsrättsjurist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bankjurist",
        "name": "Bankjurist",
        "searchPhrase": "bankjurist a-kassa",
        "recommendedAkassaId": "ffak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "beredningsjurist",
        "name": "Beredningsjurist",
        "searchPhrase": "beredningsjurist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bolagsjurist",
        "name": "Bolagsjurist",
        "searchPhrase": "bolagsjurist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "boutredningsman",
        "name": "Boutredningsman",
        "searchPhrase": "boutredningsman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefsjurist",
        "name": "Chefsjurist",
        "searchPhrase": "chefsjurist a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefsregistrator",
        "name": "Chefsregistrator",
        "searchPhrase": "chefsregistrator a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefsradman",
        "name": "Chefsrådman",
        "searchPhrase": "chefsrådman a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefsaklagare",
        "name": "Chefsåklagare",
        "searchPhrase": "chefsåklagare a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "domare",
        "name": "Domare",
        "searchPhrase": "domare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "domstolssekreterare",
        "name": "Domstolssekreterare",
        "searchPhrase": "domstolssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "domstolsvard",
        "name": "Domstolsvärd",
        "searchPhrase": "domstolsvärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "familjerattsjurist",
        "name": "Familjerättsjurist",
        "searchPhrase": "familjerättsjurist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fastighetsjurist",
        "name": "Fastighetsjurist",
        "searchPhrase": "fastighetsjurist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "foretagsjurist",
        "name": "Företagsjurist",
        "searchPhrase": "företagsjurist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forsakringsjurist",
        "name": "Försäkringsjurist",
        "searchPhrase": "försäkringsjurist a-kassa",
        "recommendedAkassaId": "ffak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hovrattsassessor",
        "name": "Hovrättsassessor",
        "searchPhrase": "hovrättsassessor a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hovrattsfiskal",
        "name": "Hovrättsfiskal",
        "searchPhrase": "hovrättsfiskal a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hovrattsrad",
        "name": "Hovrättsråd",
        "searchPhrase": "hovrättsråd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "juridisk-radgivare",
        "name": "Juridisk rådgivare",
        "searchPhrase": "juridisk rådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "jurist",
        "name": "Jurist",
        "searchPhrase": "jurist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "juristassistent",
        "name": "Juristassistent",
        "searchPhrase": "juristassistent a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "justitierad",
        "name": "Justitieråd",
        "searchPhrase": "justitieråd a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kammaraklagare",
        "name": "Kammaråklagare",
        "searchPhrase": "kammaråklagare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lagman",
        "name": "Lagman",
        "searchPhrase": "lagman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "miljojurist",
        "name": "Miljöjurist",
        "searchPhrase": "miljöjurist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "notarie",
        "name": "Notarie",
        "searchPhrase": "notarie a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "namndeman",
        "name": "Nämndeman",
        "searchPhrase": "nämndeman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ombudsman",
        "name": "Ombudsman",
        "searchPhrase": "ombudsman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "paralegal",
        "name": "Paralegal",
        "searchPhrase": "paralegal a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "riksaklagare",
        "name": "Riksåklagare",
        "searchPhrase": "riksåklagare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "radman",
        "name": "Rådman",
        "searchPhrase": "rådman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skattejurist",
        "name": "Skattejurist",
        "searchPhrase": "skattejurist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tingsfiskal",
        "name": "Tingsfiskal",
        "searchPhrase": "tingsfiskal a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tingsnotarie",
        "name": "Tingsnotarie",
        "searchPhrase": "tingsnotarie a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "aklagare",
        "name": "Åklagare",
        "searchPhrase": "åklagare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "overaklagare",
        "name": "Överåklagare",
        "searchPhrase": "överåklagare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "markforhandlare",
        "name": "Markförhandlare",
        "searchPhrase": "markförhandlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "juristsekreterare",
        "name": "Juristsekreterare",
        "searchPhrase": "juristsekreterare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "entreprenadjurist",
        "name": "Entreprenadjurist",
        "searchPhrase": "entreprenadjurist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "boutredare",
        "name": "Boutredare",
        "searchPhrase": "boutredare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "politiskt-sakkunnig",
        "name": "Politiskt sakkunnig",
        "searchPhrase": "politiskt sakkunnig a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tillsynshandlaggare",
        "name": "Tillsynshandläggare",
        "searchPhrase": "tillsynshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "overformyndarassistent",
        "name": "Överförmyndarassistent",
        "searchPhrase": "överförmyndarassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "overformyndarhandlaggare",
        "name": "Överförmyndarhandläggare",
        "searchPhrase": "överförmyndarhandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "overformyndarjurist",
        "name": "Överförmyndarjurist",
        "searchPhrase": "överförmyndarjurist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "overformyndarsekreterare",
        "name": "Överförmyndarsekreterare",
        "searchPhrase": "överförmyndarsekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fotterapeut",
        "name": "Fotterapeut",
        "searchPhrase": "fotterapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fotvardsterapeut",
        "name": "Fotvårdsterapeut",
        "searchPhrase": "fotvårdsterapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "frisor",
        "name": "Frisör",
        "searchPhrase": "frisör a-kassa",
        "recommendedAkassaId": "handels",
        "image": "/images/professions/frisor.png"
    },
    {
        "slug": "hudterapeut",
        "name": "Hudterapeut",
        "searchPhrase": "hudterapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hudvardsterapeut",
        "name": "Hudvårdsterapeut",
        "searchPhrase": "hudvårdsterapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "kosmetolog",
        "name": "Kosmetolog",
        "searchPhrase": "kosmetolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "laserterapeut",
        "name": "Laserterapeut",
        "searchPhrase": "laserterapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "makeup-artist",
        "name": "Makeup-artist",
        "searchPhrase": "makeup-artist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "manikyrist",
        "name": "Manikyrist",
        "searchPhrase": "manikyrist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "massageterapeut",
        "name": "Massageterapeut",
        "searchPhrase": "massageterapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "massor",
        "name": "Massör",
        "searchPhrase": "massör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "nagelteknolog",
        "name": "Nagelteknolog",
        "searchPhrase": "nagelteknolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "nagelterapeut",
        "name": "Nagelterapeut",
        "searchPhrase": "nagelterapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "spaterapeut",
        "name": "Spaterapeut",
        "searchPhrase": "spaterapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tatuerare",
        "name": "Tatuerare",
        "searchPhrase": "tatuerare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barberare",
        "name": "Barberare",
        "searchPhrase": "barberare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fransstylist",
        "name": "Fransstylist",
        "searchPhrase": "fransstylist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "nagelstylist",
        "name": "Nagelstylist",
        "searchPhrase": "nagelstylist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "badchef",
        "name": "Badchef",
        "searchPhrase": "badchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "3d-artist",
        "name": "3D-artist",
        "searchPhrase": "3d-artist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "3d-grafiker",
        "name": "3D-grafiker",
        "searchPhrase": "3d-grafiker a-kassa",
        "recommendedAkassaId": "gs",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "animator",
        "name": "Animatör",
        "searchPhrase": "animatör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "art-director",
        "name": "Art Director",
        "searchPhrase": "art director a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bildbehandlare",
        "name": "Bildbehandlare",
        "searchPhrase": "bildbehandlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bildproducent",
        "name": "Bildproducent",
        "searchPhrase": "bildproducent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bildredigerare",
        "name": "Bildredigerare",
        "searchPhrase": "bildredigerare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefsdekorator",
        "name": "Chefsdekoratör",
        "searchPhrase": "chefsdekoratör a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefsdesigner",
        "name": "Chefsdesigner",
        "searchPhrase": "chefsdesigner a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "copywriter",
        "name": "Copywriter",
        "searchPhrase": "copywriter a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "creative-director",
        "name": "Creative director",
        "searchPhrase": "creative director a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dekorator",
        "name": "Dekoratör",
        "searchPhrase": "dekoratör a-kassa",
        "recommendedAkassaId": "handels",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dekorsnickare",
        "name": "Dekorsnickare",
        "searchPhrase": "dekorsnickare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "designassistent",
        "name": "Designassistent",
        "searchPhrase": "designassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "designer",
        "name": "Designer",
        "searchPhrase": "designer a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "direktris",
        "name": "Direktris",
        "searchPhrase": "direktris a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fotomodell",
        "name": "Fotomodell",
        "searchPhrase": "fotomodell a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forpackningskonstruktor",
        "name": "Förpackningskonstruktör",
        "searchPhrase": "förpackningskonstruktör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "grafiker",
        "name": "Grafiker",
        "searchPhrase": "grafiker a-kassa",
        "recommendedAkassaId": "gs",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "grafisk-designer",
        "name": "Grafisk designer",
        "searchPhrase": "grafisk designer a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "grafisk-formgivare",
        "name": "Grafisk formgivare",
        "searchPhrase": "grafisk formgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "grafisk-produktionsledare",
        "name": "Grafisk produktionsledare",
        "searchPhrase": "grafisk produktionsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "illustrator",
        "name": "Illustratör",
        "searchPhrase": "illustratör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "inredare",
        "name": "Inredare",
        "searchPhrase": "inredare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "inredningsarkitekt",
        "name": "Inredningsarkitekt",
        "searchPhrase": "inredningsarkitekt a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "inredningsdesigner",
        "name": "Inredningsdesigner",
        "searchPhrase": "inredningsdesigner a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "inredningskonsult",
        "name": "Inredningskonsult",
        "searchPhrase": "inredningskonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kladdesigner",
        "name": "Kläddesigner",
        "searchPhrase": "kläddesigner a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "konstmodell",
        "name": "Konstmodell",
        "searchPhrase": "konstmodell a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "layoutare",
        "name": "Layoutare",
        "searchPhrase": "layoutare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mannekang",
        "name": "Mannekäng",
        "searchPhrase": "mannekäng a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "modefotograf",
        "name": "Modefotograf",
        "searchPhrase": "modefotograf a-kassa",
        "recommendedAkassaId": "journalist",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "modell",
        "name": "Modell",
        "searchPhrase": "modell a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "modeskapare",
        "name": "Modeskapare",
        "searchPhrase": "modeskapare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "originalare",
        "name": "Originalare",
        "searchPhrase": "originalare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "produktdesigner",
        "name": "Produktdesigner",
        "searchPhrase": "produktdesigner a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "produktformgivare",
        "name": "Produktformgivare",
        "searchPhrase": "produktformgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "redigerare",
        "name": "Redigerare",
        "searchPhrase": "redigerare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "rekvisitor",
        "name": "Rekvisitör",
        "searchPhrase": "rekvisitör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "screentryckare",
        "name": "Screentryckare",
        "searchPhrase": "screentryckare a-kassa",
        "recommendedAkassaId": "gs",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "stylist",
        "name": "Stylist",
        "searchPhrase": "stylist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ux-designer",
        "name": "UX-designer",
        "searchPhrase": "ux-designer a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "biografmaskinist",
        "name": "Biografmaskinist",
        "searchPhrase": "biografmaskinist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "filmfotograf",
        "name": "Filmfotograf",
        "searchPhrase": "filmfotograf a-kassa",
        "recommendedAkassaId": "journalist",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "filmklippare",
        "name": "Filmklippare",
        "searchPhrase": "filmklippare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "formbestammare",
        "name": "Formbestämmare",
        "searchPhrase": "formbestämmare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fotograf",
        "name": "Fotograf",
        "searchPhrase": "fotograf a-kassa",
        "recommendedAkassaId": "journalist",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "komiker",
        "name": "Komiker",
        "searchPhrase": "komiker a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kostymor",
        "name": "Kostymör",
        "searchPhrase": "kostymör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ljudtekniker",
        "name": "Ljudtekniker",
        "searchPhrase": "ljudtekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ljusdesigner",
        "name": "Ljusdesigner",
        "searchPhrase": "ljusdesigner a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ljustekniker",
        "name": "Ljustekniker",
        "searchPhrase": "ljustekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "manusforfattare",
        "name": "Manusförfattare",
        "searchPhrase": "manusförfattare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medieradgivare",
        "name": "Medierådgivare",
        "searchPhrase": "medierådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "nyhetsupplasare",
        "name": "Nyhetsuppläsare",
        "searchPhrase": "nyhetsuppläsare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "producent",
        "name": "Producent",
        "searchPhrase": "producent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "programledare",
        "name": "Programledare",
        "searchPhrase": "programledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "radiopratare",
        "name": "Radiopratare",
        "searchPhrase": "radiopratare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "radiotelegrafist",
        "name": "Radiotelegrafist",
        "searchPhrase": "radiotelegrafist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "regiassistent",
        "name": "Regiassistent",
        "searchPhrase": "regiassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "regissor",
        "name": "Regissör",
        "searchPhrase": "regissör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "researcher",
        "name": "Researcher",
        "searchPhrase": "researcher a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "retuschor",
        "name": "Retuschör",
        "searchPhrase": "retuschör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skadespelare",
        "name": "Skådespelare",
        "searchPhrase": "skådespelare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "statist",
        "name": "Statist",
        "searchPhrase": "statist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "stuntman",
        "name": "Stuntman",
        "searchPhrase": "stuntman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sufflor",
        "name": "Sufflör",
        "searchPhrase": "sufflör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tolk",
        "name": "Tolk",
        "searchPhrase": "tolk a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tv-chef",
        "name": "TV-chef",
        "searchPhrase": "tv-chef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "videoredigerare",
        "name": "Videoredigerare",
        "searchPhrase": "videoredigerare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "oversattare",
        "name": "Översättare",
        "searchPhrase": "översättare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefredaktor",
        "name": "Chefredaktör",
        "searchPhrase": "chefredaktör a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "content-manager",
        "name": "Content manager",
        "searchPhrase": "content manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "frilansfotograf",
        "name": "Frilansfotograf",
        "searchPhrase": "frilansfotograf a-kassa",
        "recommendedAkassaId": "journalist",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "frilansjournalist",
        "name": "Frilansjournalist",
        "searchPhrase": "frilansjournalist a-kassa",
        "recommendedAkassaId": "journalist",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forlagsredaktor",
        "name": "Förlagsredaktör",
        "searchPhrase": "förlagsredaktör a-kassa",
        "recommendedAkassaId": "journalist",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "intervjuare",
        "name": "Intervjuare",
        "searchPhrase": "intervjuare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "journalist",
        "name": "Journalist",
        "searchPhrase": "journalist a-kassa",
        "recommendedAkassaId": "journalist",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "korrekturlasare",
        "name": "Korrekturläsare",
        "searchPhrase": "korrekturläsare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mediebevakare",
        "name": "Mediebevakare",
        "searchPhrase": "mediebevakare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "naturfotograf",
        "name": "Naturfotograf",
        "searchPhrase": "naturfotograf a-kassa",
        "recommendedAkassaId": "journalist",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pressekreterare",
        "name": "Pressekreterare",
        "searchPhrase": "pressekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pressombudsman",
        "name": "Pressombudsman",
        "searchPhrase": "pressombudsman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "redaktionsassistent",
        "name": "Redaktionsassistent",
        "searchPhrase": "redaktionsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "redaktionssekreterare",
        "name": "Redaktionssekreterare",
        "searchPhrase": "redaktionssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "redaktor",
        "name": "Redaktör",
        "searchPhrase": "redaktör a-kassa",
        "recommendedAkassaId": "journalist",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skribent",
        "name": "Skribent",
        "searchPhrase": "skribent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "taltidningsredaktor",
        "name": "Taltidningsredaktör",
        "searchPhrase": "taltidningsredaktör a-kassa",
        "recommendedAkassaId": "journalist",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utrikeskorrespondent",
        "name": "Utrikeskorrespondent",
        "searchPhrase": "utrikeskorrespondent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "akustiker",
        "name": "Akustiker",
        "searchPhrase": "akustiker a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "antikvarie",
        "name": "Antikvarie",
        "searchPhrase": "antikvarie a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "antropolog",
        "name": "Antropolog",
        "searchPhrase": "antropolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arkivarie",
        "name": "Arkivarie",
        "searchPhrase": "arkivarie a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "artist",
        "name": "Artist",
        "searchPhrase": "artist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "artistbokare",
        "name": "Artistbokare",
        "searchPhrase": "artistbokare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "attributor",
        "name": "Attributör",
        "searchPhrase": "attributör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bibliotekarie",
        "name": "Bibliotekarie",
        "searchPhrase": "bibliotekarie a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "biblioteksassistent",
        "name": "Biblioteksassistent",
        "searchPhrase": "biblioteksassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bokningsagent",
        "name": "Bokningsagent",
        "searchPhrase": "bokningsagent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "byggnadsantikvarie",
        "name": "Byggnadsantikvarie",
        "searchPhrase": "byggnadsantikvarie a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "chefsbibliotekarie",
        "name": "Chefsbibliotekarie",
        "searchPhrase": "chefsbibliotekarie a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefsintendent",
        "name": "Chefsintendent",
        "searchPhrase": "chefsintendent a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefskonservator",
        "name": "Chefskonservator",
        "searchPhrase": "chefskonservator a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "cirkusartist",
        "name": "Cirkusartist",
        "searchPhrase": "cirkusartist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dansare",
        "name": "Dansare",
        "searchPhrase": "dansare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dirigent",
        "name": "Dirigent",
        "searchPhrase": "dirigent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dj",
        "name": "DJ",
        "searchPhrase": "dj a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "eventarrangor",
        "name": "Eventarrangör",
        "searchPhrase": "eventarrangör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "filosof",
        "name": "Filosof",
        "searchPhrase": "filosof a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forelasare",
        "name": "Föreläsare",
        "searchPhrase": "föreläsare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forfattare",
        "name": "Författare",
        "searchPhrase": "författare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "illusionist",
        "name": "Illusionist",
        "searchPhrase": "illusionist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "inspicient",
        "name": "Inspicient",
        "searchPhrase": "inspicient a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "instrumentmakare",
        "name": "Instrumentmakare",
        "searchPhrase": "instrumentmakare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "konferencier",
        "name": "Konferencier",
        "searchPhrase": "konferencier a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "konstpedagog",
        "name": "Konstpedagog",
        "searchPhrase": "konstpedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "koreograf",
        "name": "Koreograf",
        "searchPhrase": "koreograf a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kulturkonsulent",
        "name": "Kulturkonsulent",
        "searchPhrase": "kulturkonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kulturvetare",
        "name": "Kulturvetare",
        "searchPhrase": "kulturvetare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kasor",
        "name": "Kåsör",
        "searchPhrase": "kåsör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "litterar-agent",
        "name": "Litterär agent",
        "searchPhrase": "litterär agent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ljudingenjor",
        "name": "Ljudingenjör",
        "searchPhrase": "ljudingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lansantikvarie",
        "name": "Länsantikvarie",
        "searchPhrase": "länsantikvarie a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "maskor",
        "name": "Maskör",
        "searchPhrase": "maskör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "museichef",
        "name": "Museichef",
        "searchPhrase": "museichef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "museiintendent",
        "name": "Museiintendent",
        "searchPhrase": "museiintendent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "museitekniker",
        "name": "Museitekniker",
        "searchPhrase": "museitekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "museivard",
        "name": "Museivärd",
        "searchPhrase": "museivärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "musiker",
        "name": "Musiker",
        "searchPhrase": "musiker a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "scenmastare",
        "name": "Scenmästare",
        "searchPhrase": "scenmästare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "scenograf",
        "name": "Scenograf",
        "searchPhrase": "scenograf a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "scentekniker",
        "name": "Scentekniker",
        "searchPhrase": "scentekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sprakforskare",
        "name": "Språkforskare",
        "searchPhrase": "språkforskare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sprakkonsult",
        "name": "Språkkonsult",
        "searchPhrase": "språkkonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sprakvetare",
        "name": "Språkvetare",
        "searchPhrase": "språkvetare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "stenograf",
        "name": "Stenograf",
        "searchPhrase": "stenograf a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sangare",
        "name": "Sångare",
        "searchPhrase": "sångare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sangerska",
        "name": "Sångerska",
        "searchPhrase": "sångerska a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "textforfattare",
        "name": "Textförfattare",
        "searchPhrase": "textförfattare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vfx-artist",
        "name": "VFX-artist",
        "searchPhrase": "vfx-artist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "castare",
        "name": "Castare",
        "searchPhrase": "castare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "solistchef",
        "name": "Solistchef",
        "searchPhrase": "solistchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kulturassistent",
        "name": "Kulturassistent",
        "searchPhrase": "kulturassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kulturvard",
        "name": "Kulturvärd",
        "searchPhrase": "kulturvärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "content-creator",
        "name": "Content creator",
        "searchPhrase": "content creator a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "foremalsantikvarie",
        "name": "Föremålsantikvarie",
        "searchPhrase": "föremålsantikvarie a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "konsthallsvardinna",
        "name": "Konsthallsvärdinna",
        "searchPhrase": "konsthallsvärdinna a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dramaturg",
        "name": "Dramaturg",
        "searchPhrase": "dramaturg a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ljuddesigner",
        "name": "Ljuddesigner",
        "searchPhrase": "ljuddesigner a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "maskdesigner",
        "name": "Maskdesigner",
        "searchPhrase": "maskdesigner a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "videodesigner",
        "name": "Videodesigner",
        "searchPhrase": "videodesigner a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "konstnarlig-ledare",
        "name": "Konstnärlig ledare",
        "searchPhrase": "konstnärlig ledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kostymdesigner",
        "name": "Kostymdesigner",
        "searchPhrase": "kostymdesigner a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "musikalartist",
        "name": "Musikalartist",
        "searchPhrase": "musikalartist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sangsolist",
        "name": "Sångsolist",
        "searchPhrase": "sångsolist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kultursekreterare",
        "name": "Kultursekreterare",
        "searchPhrase": "kultursekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kommunikationsansvarig",
        "name": "Kommunikationsansvarig",
        "searchPhrase": "kommunikationsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "digital-producer",
        "name": "Digital producer",
        "searchPhrase": "digital producer a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "programchef",
        "name": "Programchef",
        "searchPhrase": "programchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "service-designer",
        "name": "Service designer",
        "searchPhrase": "service designer a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "kulturledare",
        "name": "Kulturledare",
        "searchPhrase": "kulturledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "publikvard",
        "name": "Publikvärd",
        "searchPhrase": "publikvärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "serietecknare",
        "name": "Serietecknare",
        "searchPhrase": "serietecknare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "konstnar",
        "name": "Konstnär",
        "searchPhrase": "konstnär a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "koksplanerare",
        "name": "Köksplanerare",
        "searchPhrase": "köksplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "social-media-manager",
        "name": "Social media manager",
        "searchPhrase": "social media manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "undertextare",
        "name": "Undertextare",
        "searchPhrase": "undertextare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ljudmixare",
        "name": "Ljudmixare",
        "searchPhrase": "ljudmixare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "inslagsproducent",
        "name": "Inslagsproducent",
        "searchPhrase": "inslagsproducent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teknisk-skribent",
        "name": "Teknisk skribent",
        "searchPhrase": "teknisk skribent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kompositor",
        "name": "Kompositör",
        "searchPhrase": "kompositör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arkivassistent",
        "name": "Arkivassistent",
        "searchPhrase": "arkivassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "grafisk-ingenjor",
        "name": "Grafisk ingenjör",
        "searchPhrase": "grafisk ingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "av-tekniker",
        "name": "AV-tekniker",
        "searchPhrase": "av-tekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "museiassistent",
        "name": "Museiassistent",
        "searchPhrase": "museiassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arenachef",
        "name": "Arenachef",
        "searchPhrase": "arenachef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arenaplanerare",
        "name": "Arenaplanerare",
        "searchPhrase": "arenaplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arkivansvarig",
        "name": "Arkivansvarig",
        "searchPhrase": "arkivansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arkivarbetare",
        "name": "Arkivarbetare",
        "searchPhrase": "arkivarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arkivbitrade",
        "name": "Arkivbiträde",
        "searchPhrase": "arkivbiträde a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arkivchef",
        "name": "Arkivchef",
        "searchPhrase": "arkivchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arkivforestandare",
        "name": "Arkivföreståndare",
        "searchPhrase": "arkivföreståndare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arkivhandlaggare",
        "name": "Arkivhandläggare",
        "searchPhrase": "arkivhandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arkivpedagog",
        "name": "Arkivpedagog",
        "searchPhrase": "arkivpedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arkivsamordnare",
        "name": "Arkivsamordnare",
        "searchPhrase": "arkivsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arkivsekreterare",
        "name": "Arkivsekreterare",
        "searchPhrase": "arkivsekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arkivtekniker",
        "name": "Arkivtekniker",
        "searchPhrase": "arkivtekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arkivtjansteman",
        "name": "Arkivtjänsteman",
        "searchPhrase": "arkivtjänsteman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arkivvardare",
        "name": "Arkivvårdare",
        "searchPhrase": "arkivvårdare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "arrangemangsansvarig",
        "name": "Arrangemangsansvarig",
        "searchPhrase": "arrangemangsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arrangemangschef",
        "name": "Arrangemangschef",
        "searchPhrase": "arrangemangschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arrangemangskonsulent",
        "name": "Arrangemangskonsulent",
        "searchPhrase": "arrangemangskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arrangemangsproducent",
        "name": "Arrangemangsproducent",
        "searchPhrase": "arrangemangsproducent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barnbibliotekarie",
        "name": "Barnbibliotekarie",
        "searchPhrase": "barnbibliotekarie a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barnkultursekreterare",
        "name": "Barnkultursekreterare",
        "searchPhrase": "barnkultursekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "biblioteksansvarig",
        "name": "Biblioteksansvarig",
        "searchPhrase": "biblioteksansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "biblioteksbitrade",
        "name": "Biblioteksbiträde",
        "searchPhrase": "biblioteksbiträde a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bibliotekschef",
        "name": "Bibliotekschef",
        "searchPhrase": "bibliotekschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "biblioteksekreterare",
        "name": "Biblioteksekreterare",
        "searchPhrase": "biblioteksekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "biblioteksintendent",
        "name": "Biblioteksintendent",
        "searchPhrase": "biblioteksintendent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bibliotekskanslist",
        "name": "Bibliotekskanslist",
        "searchPhrase": "bibliotekskanslist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bibliotekskonsulent",
        "name": "Bibliotekskonsulent",
        "searchPhrase": "bibliotekskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bibliotekspedagog",
        "name": "Bibliotekspedagog",
        "searchPhrase": "bibliotekspedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bibliotekstekniker",
        "name": "Bibliotekstekniker",
        "searchPhrase": "bibliotekstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "biblioteksvard",
        "name": "Biblioteksvärd",
        "searchPhrase": "biblioteksvärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "biblioteksvardinna",
        "name": "Biblioteksvärdinna",
        "searchPhrase": "biblioteksvärdinna a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bildarkivarie",
        "name": "Bildarkivarie",
        "searchPhrase": "bildarkivarie a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bildkonsulent",
        "name": "Bildkonsulent",
        "searchPhrase": "bildkonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bildredaktor",
        "name": "Bildredaktör",
        "searchPhrase": "bildredaktör a-kassa",
        "recommendedAkassaId": "journalist",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "biljettforsaljare",
        "name": "Biljettförsäljare",
        "searchPhrase": "biljettförsäljare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "biljettkassor",
        "name": "Biljettkassör",
        "searchPhrase": "biljettkassör a-kassa",
        "recommendedAkassaId": "handels",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bokbussforare",
        "name": "Bokbussförare",
        "searchPhrase": "bokbussförare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "bokonsulent",
        "name": "Bokonsulent",
        "searchPhrase": "bokonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "evenemangsansvarig",
        "name": "Evenemangsansvarig",
        "searchPhrase": "evenemangsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "evenemangschef",
        "name": "Evenemangschef",
        "searchPhrase": "evenemangschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "evenemangsinformator",
        "name": "Evenemangsinformatör",
        "searchPhrase": "evenemangsinformatör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "evenemangskonsulent",
        "name": "Evenemangskonsulent",
        "searchPhrase": "evenemangskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "evenemangsplanerare",
        "name": "Evenemangsplanerare",
        "searchPhrase": "evenemangsplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "evenemangssamordnare",
        "name": "Evenemangssamordnare",
        "searchPhrase": "evenemangssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "evenemangssekreterare",
        "name": "Evenemangssekreterare",
        "searchPhrase": "evenemangssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "evenemangstekniker",
        "name": "Evenemangstekniker",
        "searchPhrase": "evenemangstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "evenemangsutvecklare",
        "name": "Evenemangsutvecklare",
        "searchPhrase": "evenemangsutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "eventansvarig",
        "name": "Eventansvarig",
        "searchPhrase": "eventansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "filmkonsulent",
        "name": "Filmkonsulent",
        "searchPhrase": "filmkonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forngardsforestandare",
        "name": "Forngårdsföreståndare",
        "searchPhrase": "forngårdsföreståndare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "foremalsassistent",
        "name": "Föremålsassistent",
        "searchPhrase": "föremålsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "grafisk-producent",
        "name": "Grafisk producent",
        "searchPhrase": "grafisk producent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "informationsstrateg",
        "name": "Informationsstrateg",
        "searchPhrase": "informationsstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "informator",
        "name": "Informatör",
        "searchPhrase": "informatör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kommunikationsadministrator",
        "name": "Kommunikationsadministratör",
        "searchPhrase": "kommunikationsadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kommunikationsassistent",
        "name": "Kommunikationsassistent",
        "searchPhrase": "kommunikationsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kommunikationschef",
        "name": "Kommunikationschef",
        "searchPhrase": "kommunikationschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kommunikationskonsult",
        "name": "Kommunikationskonsult",
        "searchPhrase": "kommunikationskonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kommunikationsradgivare",
        "name": "Kommunikationsrådgivare",
        "searchPhrase": "kommunikationsrådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kommunikationsstrateg",
        "name": "Kommunikationsstrateg",
        "searchPhrase": "kommunikationsstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kultur--och-fritidschef",
        "name": "Kultur- och fritidschef",
        "searchPhrase": "kultur- och fritidschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kulturansvarig",
        "name": "Kulturansvarig",
        "searchPhrase": "kulturansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kulturkoordinator",
        "name": "Kulturkoordinator",
        "searchPhrase": "kulturkoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kulturpedagog",
        "name": "Kulturpedagog",
        "searchPhrase": "kulturpedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kultursamordnare",
        "name": "Kultursamordnare",
        "searchPhrase": "kultursamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kulturstrateg",
        "name": "Kulturstrateg",
        "searchPhrase": "kulturstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lansbibliotekarie",
        "name": "Länsbibliotekarie",
        "searchPhrase": "länsbibliotekarie a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "magasinredaktor",
        "name": "Magasinredaktör",
        "searchPhrase": "magasinredaktör a-kassa",
        "recommendedAkassaId": "journalist",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "manusredaktor",
        "name": "Manusredaktör",
        "searchPhrase": "manusredaktör a-kassa",
        "recommendedAkassaId": "journalist",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "manussekreterare",
        "name": "Manussekreterare",
        "searchPhrase": "manussekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "manusutvecklare",
        "name": "Manusutvecklare",
        "searchPhrase": "manusutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mediaansvarig",
        "name": "Mediaansvarig",
        "searchPhrase": "mediaansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mediaassistent",
        "name": "Mediaassistent",
        "searchPhrase": "mediaassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mediachef",
        "name": "Mediachef",
        "searchPhrase": "mediachef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mediakonsult",
        "name": "Mediakonsult",
        "searchPhrase": "mediakonsult a-kassa",
        "recommendedAkassaId": "vision",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mediatekniker",
        "name": "Mediatekniker",
        "searchPhrase": "mediatekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medieadministrator",
        "name": "Medieadministratör",
        "searchPhrase": "medieadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medieansvarig",
        "name": "Medieansvarig",
        "searchPhrase": "medieansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medieassistent",
        "name": "Medieassistent",
        "searchPhrase": "medieassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mediechef",
        "name": "Mediechef",
        "searchPhrase": "mediechef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medieinformator",
        "name": "Medieinformatör",
        "searchPhrase": "medieinformatör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mediekonsulent",
        "name": "Mediekonsulent",
        "searchPhrase": "mediekonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mediepedagog",
        "name": "Mediepedagog",
        "searchPhrase": "mediepedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mediesamordnare",
        "name": "Mediesamordnare",
        "searchPhrase": "mediesamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mediesekreterare",
        "name": "Mediesekreterare",
        "searchPhrase": "mediesekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medietekniker",
        "name": "Medietekniker",
        "searchPhrase": "medietekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medieutvecklare",
        "name": "Medieutvecklare",
        "searchPhrase": "medieutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "multimediaansvarig",
        "name": "Multimediaansvarig",
        "searchPhrase": "multimediaansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "multimediaingenjor",
        "name": "Multimediaingenjör",
        "searchPhrase": "multimediaingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "multimediaproducent",
        "name": "Multimediaproducent",
        "searchPhrase": "multimediaproducent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "multimediaredaktor",
        "name": "Multimediaredaktör",
        "searchPhrase": "multimediaredaktör a-kassa",
        "recommendedAkassaId": "journalist",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "multimediaspecialist",
        "name": "Multimediaspecialist",
        "searchPhrase": "multimediaspecialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "multimediatekniker",
        "name": "Multimediatekniker",
        "searchPhrase": "multimediatekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "museiadministrator",
        "name": "Museiadministratör",
        "searchPhrase": "museiadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "museifotograf",
        "name": "Museifotograf",
        "searchPhrase": "museifotograf a-kassa",
        "recommendedAkassaId": "journalist",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "museihandlaggare",
        "name": "Museihandläggare",
        "searchPhrase": "museihandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "museisamordnare",
        "name": "Museisamordnare",
        "searchPhrase": "museisamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "museisekreterare",
        "name": "Museisekreterare",
        "searchPhrase": "museisekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "museiutvecklare",
        "name": "Museiutvecklare",
        "searchPhrase": "museiutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "musikhandledare",
        "name": "Musikhandledare",
        "searchPhrase": "musikhandledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "musikintstruktor",
        "name": "Musikintstruktör",
        "searchPhrase": "musikintstruktör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "musikpedagog",
        "name": "Musikpedagog",
        "searchPhrase": "musikpedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "musikproducent",
        "name": "Musikproducent",
        "searchPhrase": "musikproducent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "musiksekreterare",
        "name": "Musiksekreterare",
        "searchPhrase": "musiksekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "musikterapeut",
        "name": "Musikterapeut",
        "searchPhrase": "musikterapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "musikutvecklare",
        "name": "Musikutvecklare",
        "searchPhrase": "musikutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "originaldesigner",
        "name": "Originaldesigner",
        "searchPhrase": "originaldesigner a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "orkesterchef",
        "name": "Orkesterchef",
        "searchPhrase": "orkesterchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "orkesterledare",
        "name": "Orkesterledare",
        "searchPhrase": "orkesterledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pressansvarig",
        "name": "Pressansvarig",
        "searchPhrase": "pressansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "presschef",
        "name": "Presschef",
        "searchPhrase": "presschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pressinformator",
        "name": "Pressinformatör",
        "searchPhrase": "pressinformatör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "publikansvarig",
        "name": "Publikansvarig",
        "searchPhrase": "publikansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "publikchef",
        "name": "Publikchef",
        "searchPhrase": "publikchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "publiksamordnare",
        "name": "Publiksamordnare",
        "searchPhrase": "publiksamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "publikstrateg",
        "name": "Publikstrateg",
        "searchPhrase": "publikstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "scenansvarig",
        "name": "Scenansvarig",
        "searchPhrase": "scenansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "scenchef",
        "name": "Scenchef",
        "searchPhrase": "scenchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "videotekniker",
        "name": "Videotekniker",
        "searchPhrase": "videotekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "oversattningsansvarig",
        "name": "Översättningsansvarig",
        "searchPhrase": "översättningsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "oversattningskoordinator",
        "name": "Översättningskoordinator",
        "searchPhrase": "översättningskoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "oversattningsspecialist",
        "name": "Översättningsspecialist",
        "searchPhrase": "översättningsspecialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "radioproducent",
        "name": "Radioproducent",
        "searchPhrase": "radioproducent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kulturarbetare",
        "name": "Kulturarbetare",
        "searchPhrase": "kulturarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "diakon",
        "name": "Diakon",
        "searchPhrase": "diakon a-kassa",
        "recommendedAkassaId": "vision",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forsamlingsassistent",
        "name": "Församlingsassistent",
        "searchPhrase": "församlingsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forsamlingsforestandare",
        "name": "Församlingsföreståndare",
        "searchPhrase": "församlingsföreståndare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "klockare",
        "name": "Klockare",
        "searchPhrase": "klockare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "krematoriearbetare",
        "name": "Krematoriearbetare",
        "searchPhrase": "krematoriearbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kyrkoherde",
        "name": "Kyrkoherde",
        "searchPhrase": "kyrkoherde a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kyrkovaktare",
        "name": "Kyrkoväktare",
        "searchPhrase": "kyrkoväktare a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "pastor",
        "name": "Pastor",
        "searchPhrase": "pastor a-kassa",
        "recommendedAkassaId": "vision",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pastorsadjunkt",
        "name": "Pastorsadjunkt",
        "searchPhrase": "pastorsadjunkt a-kassa",
        "recommendedAkassaId": "vision",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "prast",
        "name": "Präst",
        "searchPhrase": "präst a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forsamlingsvard",
        "name": "Församlingsvärd",
        "searchPhrase": "församlingsvärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kapellvaktmastare",
        "name": "Kapellvaktmästare",
        "searchPhrase": "kapellvaktmästare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dagvakt",
        "name": "Dagvakt",
        "searchPhrase": "dagvakt a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kyrkomusiker",
        "name": "Kyrkomusiker",
        "searchPhrase": "kyrkomusiker a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "diakoniassistent",
        "name": "Diakoniassistent",
        "searchPhrase": "diakoniassistent a-kassa",
        "recommendedAkassaId": "vision",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "biskop",
        "name": "Biskop",
        "searchPhrase": "biskop a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "domprost",
        "name": "Domprost",
        "searchPhrase": "domprost a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kontraktsprost",
        "name": "Kontraktsprost",
        "searchPhrase": "kontraktsprost a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forsamlingsdiakon",
        "name": "Församlingsdiakon",
        "searchPhrase": "församlingsdiakon a-kassa",
        "recommendedAkassaId": "vision",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kyrkogardsforestandare",
        "name": "Kyrkogårdsföreståndare",
        "searchPhrase": "kyrkogårdsföreståndare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ringaralderman",
        "name": "Ringarålderman",
        "searchPhrase": "ringarålderman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kantor",
        "name": "Kantor",
        "searchPhrase": "kantor a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "organist",
        "name": "Organist",
        "searchPhrase": "organist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forsamlingspedagog",
        "name": "Församlingspedagog",
        "searchPhrase": "församlingspedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "diakonissa",
        "name": "Diakonissa",
        "searchPhrase": "diakonissa a-kassa",
        "recommendedAkassaId": "vision",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "komminister",
        "name": "Komminister",
        "searchPhrase": "komminister a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kyrkvaktmastare",
        "name": "Kyrkvaktmästare",
        "searchPhrase": "kyrkvaktmästare a-kassa",
        "recommendedAkassaId": "kommunal",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "barnpastor",
        "name": "Barnpastor",
        "searchPhrase": "barnpastor a-kassa",
        "recommendedAkassaId": "vision",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "diakoniansvarig",
        "name": "Diakoniansvarig",
        "searchPhrase": "diakoniansvarig a-kassa",
        "recommendedAkassaId": "vision",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "diakonisekreterare",
        "name": "Diakonisekreterare",
        "searchPhrase": "diakonisekreterare a-kassa",
        "recommendedAkassaId": "vision",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "diakonitjansteman",
        "name": "Diakonitjänsteman",
        "searchPhrase": "diakonitjänsteman a-kassa",
        "recommendedAkassaId": "vision",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "distriktsassistent",
        "name": "Distriktsassistent",
        "searchPhrase": "distriktsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "distriktsforestandare",
        "name": "Distriktsföreståndare",
        "searchPhrase": "distriktsföreståndare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "distriktsprast",
        "name": "Distriktspräst",
        "searchPhrase": "distriktspräst a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "griftegardschef",
        "name": "Griftegårdschef",
        "searchPhrase": "griftegårdschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "krematoriechef",
        "name": "Krematoriechef",
        "searchPhrase": "krematoriechef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "krematorietekniker",
        "name": "Krematorietekniker",
        "searchPhrase": "krematorietekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kyrkogardsansvarig",
        "name": "Kyrkogårdsansvarig",
        "searchPhrase": "kyrkogårdsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kyrkogardschef",
        "name": "Kyrkogårdschef",
        "searchPhrase": "kyrkogårdschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kyrkogardskonsulent",
        "name": "Kyrkogårdskonsulent",
        "searchPhrase": "kyrkogårdskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kyrkogardssekreterare",
        "name": "Kyrkogårdssekreterare",
        "searchPhrase": "kyrkogårdssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kyrkoorganist",
        "name": "Kyrkoorganist",
        "searchPhrase": "kyrkoorganist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsmiljoingenjor",
        "name": "Arbetsmiljöingenjör",
        "searchPhrase": "arbetsmiljöingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsmiljoinspektor",
        "name": "Arbetsmiljöinspektör",
        "searchPhrase": "arbetsmiljöinspektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arrendator",
        "name": "Arrendator",
        "searchPhrase": "arrendator a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "asbestsanerare",
        "name": "Asbestsanerare",
        "searchPhrase": "asbestsanerare a-kassa",
        "recommendedAkassaId": "fastighets",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "brandingenjor",
        "name": "Brandingenjör",
        "searchPhrase": "brandingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "demontor",
        "name": "Demontör",
        "searchPhrase": "demontör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "deponiarbetare",
        "name": "Deponiarbetare",
        "searchPhrase": "deponiarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "djurskyddsinspektor",
        "name": "Djurskyddsinspektör",
        "searchPhrase": "djurskyddsinspektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "geograf",
        "name": "Geograf",
        "searchPhrase": "geograf a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hortonom",
        "name": "Hortonom",
        "searchPhrase": "hortonom a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "halsovardsinspektor",
        "name": "Hälsovårdsinspektör",
        "searchPhrase": "hälsovårdsinspektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "idrottsplatsarbetare",
        "name": "Idrottsplatsarbetare",
        "searchPhrase": "idrottsplatsarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "livsmedelsinspektor",
        "name": "Livsmedelsinspektör",
        "searchPhrase": "livsmedelsinspektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "miljoinspektor",
        "name": "Miljöinspektör",
        "searchPhrase": "miljöinspektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "miljokonsult",
        "name": "Miljökonsult",
        "searchPhrase": "miljökonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "miljokoordinator",
        "name": "Miljökoordinator",
        "searchPhrase": "miljökoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "miljoplanerare",
        "name": "Miljöplanerare",
        "searchPhrase": "miljöplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "miljosamordnare",
        "name": "Miljösamordnare",
        "searchPhrase": "miljösamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "miljostrateg",
        "name": "Miljöstrateg",
        "searchPhrase": "miljöstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "miljotekniker",
        "name": "Miljötekniker",
        "searchPhrase": "miljötekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "parkarbetare",
        "name": "Parkarbetare",
        "searchPhrase": "parkarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "parkingenjor",
        "name": "Parkingenjör",
        "searchPhrase": "parkingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "provtagare",
        "name": "Provtagare",
        "searchPhrase": "provtagare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "radonsanerare",
        "name": "Radonsanerare",
        "searchPhrase": "radonsanerare a-kassa",
        "recommendedAkassaId": "fastighets",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "renhallningsarbetare",
        "name": "Renhållningsarbetare",
        "searchPhrase": "renhållningsarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "saneringstekniker",
        "name": "Saneringstekniker",
        "searchPhrase": "saneringstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sopstationsarbetare",
        "name": "Sopstationsarbetare",
        "searchPhrase": "sopstationsarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "soptippsskotare",
        "name": "Soptippsskötare",
        "searchPhrase": "soptippsskötare a-kassa",
        "recommendedAkassaId": "kommunal",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "skadedjurstekniker",
        "name": "Skadedjurstekniker",
        "searchPhrase": "skadedjurstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "atervinningsarbetare",
        "name": "Återvinningsarbetare",
        "searchPhrase": "återvinningsarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "miljoarbetare",
        "name": "Miljöarbetare",
        "searchPhrase": "miljöarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vagoperator",
        "name": "Vågoperatör",
        "searchPhrase": "vågoperatör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "stralskyddstekniker",
        "name": "Strålskyddstekniker",
        "searchPhrase": "strålskyddstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "miljo--och-halsoskyddsinspektor",
        "name": "Miljö- och hälsoskyddsinspektör",
        "searchPhrase": "miljö- och hälsoskyddsinspektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avfallsingenjor",
        "name": "Avfallsingenjör",
        "searchPhrase": "avfallsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "matsakerhetstekniker",
        "name": "Matsäkerhetstekniker",
        "searchPhrase": "matsäkerhetstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hse-advisor",
        "name": "HSE advisor",
        "searchPhrase": "hse advisor a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avfallsadministrator",
        "name": "Avfallsadministratör",
        "searchPhrase": "avfallsadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avfallsansvarig",
        "name": "Avfallsansvarig",
        "searchPhrase": "avfallsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avfallschef",
        "name": "Avfallschef",
        "searchPhrase": "avfallschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avfallscontroller",
        "name": "Avfallscontroller",
        "searchPhrase": "avfallscontroller a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avfallshandlaggare",
        "name": "Avfallshandläggare",
        "searchPhrase": "avfallshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avfallsplanerare",
        "name": "Avfallsplanerare",
        "searchPhrase": "avfallsplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avfallsradgivare",
        "name": "Avfallsrådgivare",
        "searchPhrase": "avfallsrådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avfallssamordnare",
        "name": "Avfallssamordnare",
        "searchPhrase": "avfallssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avfallsstrateg",
        "name": "Avfallsstrateg",
        "searchPhrase": "avfallsstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avfallstekniker",
        "name": "Avfallstekniker",
        "searchPhrase": "avfallstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bygg--och-halsoskyddsinspektor",
        "name": "Bygg- och hälsoskyddsinspektör",
        "searchPhrase": "bygg- och hälsoskyddsinspektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "bygg--och-miljochef",
        "name": "Bygg- och miljöchef",
        "searchPhrase": "bygg- och miljöchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "bygg--och-miljosamordnare",
        "name": "Bygg- och miljösamordnare",
        "searchPhrase": "bygg- och miljösamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "deponichef",
        "name": "Deponichef",
        "searchPhrase": "deponichef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "distriktsforman",
        "name": "Distriktsförman",
        "searchPhrase": "distriktsförman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kommunekolog",
        "name": "Kommunekolog",
        "searchPhrase": "kommunekolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "miljoadministrator",
        "name": "Miljöadministratör",
        "searchPhrase": "miljöadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "miljoansvarig",
        "name": "Miljöansvarig",
        "searchPhrase": "miljöansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "miljoassistent",
        "name": "Miljöassistent",
        "searchPhrase": "miljöassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "miljochef",
        "name": "Miljöchef",
        "searchPhrase": "miljöchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "miljocontroller",
        "name": "Miljöcontroller",
        "searchPhrase": "miljöcontroller a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "miljokonsulent",
        "name": "Miljökonsulent",
        "searchPhrase": "miljökonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "miljoledare",
        "name": "Miljöledare",
        "searchPhrase": "miljöledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "miljopedagog",
        "name": "Miljöpedagog",
        "searchPhrase": "miljöpedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "miljosekrerare",
        "name": "Miljösekrerare",
        "searchPhrase": "miljösekrerare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "miljoutredare",
        "name": "Miljöutredare",
        "searchPhrase": "miljöutredare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "miljoutvecklare",
        "name": "Miljöutvecklare",
        "searchPhrase": "miljöutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tillganglighetsansvarig",
        "name": "Tillgänglighetsansvarig",
        "searchPhrase": "tillgänglighetsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tillganglighetskonsult",
        "name": "Tillgänglighetskonsult",
        "searchPhrase": "tillgänglighetskonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tillganglighetsradgivare",
        "name": "Tillgänglighetsrådgivare",
        "searchPhrase": "tillgänglighetsrådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tillganglighetsstrateg",
        "name": "Tillgänglighetsstrateg",
        "searchPhrase": "tillgänglighetsstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arborist",
        "name": "Arborist",
        "searchPhrase": "arborist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arkeolog",
        "name": "Arkeolog",
        "searchPhrase": "arkeolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "djurskotare",
        "name": "Djurskötare",
        "searchPhrase": "djurskötare a-kassa",
        "recommendedAkassaId": "kommunal",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "djurvardare",
        "name": "Djurvårdare",
        "searchPhrase": "djurvårdare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "ekolog",
        "name": "Ekolog",
        "searchPhrase": "ekolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fruktplockare",
        "name": "Fruktplockare",
        "searchPhrase": "fruktplockare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forrattningslantmatare",
        "name": "Förrättningslantmätare",
        "searchPhrase": "förrättningslantmätare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gardskarl",
        "name": "Gårdskarl",
        "searchPhrase": "gårdskarl a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hingsthallare",
        "name": "Hingsthållare",
        "searchPhrase": "hingsthållare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hippolog",
        "name": "Hippolog",
        "searchPhrase": "hippolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hundfrisor",
        "name": "Hundfrisör",
        "searchPhrase": "hundfrisör a-kassa",
        "recommendedAkassaId": "handels",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hundpsykolog",
        "name": "Hundpsykolog",
        "searchPhrase": "hundpsykolog a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hundskotare",
        "name": "Hundskötare",
        "searchPhrase": "hundskötare a-kassa",
        "recommendedAkassaId": "kommunal",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "hundtrimmare",
        "name": "Hundtrimmare",
        "searchPhrase": "hundtrimmare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hunduppfodare",
        "name": "Hunduppfödare",
        "searchPhrase": "hunduppfödare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hastskotare",
        "name": "Hästskötare",
        "searchPhrase": "hästskötare a-kassa",
        "recommendedAkassaId": "kommunal",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "hastuppfodare",
        "name": "Hästuppfödare",
        "searchPhrase": "hästuppfödare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "jordbrukare",
        "name": "Jordbrukare",
        "searchPhrase": "jordbrukare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "jagmastare",
        "name": "Jägmästare",
        "searchPhrase": "jägmästare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "landskapsarkitekt",
        "name": "Landskapsarkitekt",
        "searchPhrase": "landskapsarkitekt a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "landskapsingenjor",
        "name": "Landskapsingenjör",
        "searchPhrase": "landskapsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lantarbetare",
        "name": "Lantarbetare",
        "searchPhrase": "lantarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lantbrukare",
        "name": "Lantbrukare",
        "searchPhrase": "lantbrukare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lantmastare",
        "name": "Lantmästare",
        "searchPhrase": "lantmästare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lantmateriingenjor",
        "name": "Lantmäteriingenjör",
        "searchPhrase": "lantmäteriingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "limnolog",
        "name": "Limnolog",
        "searchPhrase": "limnolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "miljohandlaggare",
        "name": "Miljöhandläggare",
        "searchPhrase": "miljöhandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "miljoingenjor",
        "name": "Miljöingenjör",
        "searchPhrase": "miljöingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skogsarbetare",
        "name": "Skogsarbetare",
        "searchPhrase": "skogsarbetare a-kassa",
        "recommendedAkassaId": "gs",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skogsavverkare",
        "name": "Skogsavverkare",
        "searchPhrase": "skogsavverkare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skogshuggare",
        "name": "Skogshuggare",
        "searchPhrase": "skogshuggare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skogsmastare",
        "name": "Skogsmästare",
        "searchPhrase": "skogsmästare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skogsplanterare",
        "name": "Skogsplanterare",
        "searchPhrase": "skogsplanterare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sagverksarbetare",
        "name": "Sågverksarbetare",
        "searchPhrase": "sågverksarbetare a-kassa",
        "recommendedAkassaId": "gs",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sagverksoperator",
        "name": "Sågverksoperatör",
        "searchPhrase": "sågverksoperatör a-kassa",
        "recommendedAkassaId": "gs",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tradfallare",
        "name": "Trädfällare",
        "searchPhrase": "trädfällare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tradvardare",
        "name": "Trädvårdare",
        "searchPhrase": "trädvårdare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "vinodlare",
        "name": "Vinodlare",
        "searchPhrase": "vinodlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "beridare",
        "name": "Beridare",
        "searchPhrase": "beridare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hovslagare",
        "name": "Hovslagare",
        "searchPhrase": "hovslagare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "akvarietekniker",
        "name": "Akvarietekniker",
        "searchPhrase": "akvarietekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tomatplockare",
        "name": "Tomatplockare",
        "searchPhrase": "tomatplockare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "unghastutbildare",
        "name": "Unghästutbildare",
        "searchPhrase": "unghästutbildare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "odlare",
        "name": "Odlare",
        "searchPhrase": "odlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hundrastare",
        "name": "Hundrastare",
        "searchPhrase": "hundrastare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fjaderfaarbetare",
        "name": "Fjäderfäarbetare",
        "searchPhrase": "fjäderfäarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "foderradgivare",
        "name": "Foderrådgivare",
        "searchPhrase": "foderrådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skogsplanerare",
        "name": "Skogsplanerare",
        "searchPhrase": "skogsplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gronsaksodlare",
        "name": "Grönsaksodlare",
        "searchPhrase": "grönsaksodlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "agrotekniker",
        "name": "Agrotekniker",
        "searchPhrase": "agrotekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "biodlare",
        "name": "Biodlare",
        "searchPhrase": "biodlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "stallarbetare",
        "name": "Stallarbetare",
        "searchPhrase": "stallarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barplockare",
        "name": "Bärplockare",
        "searchPhrase": "bärplockare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "plantsattare",
        "name": "Plantsättare",
        "searchPhrase": "plantsättare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tradgardsarbetare",
        "name": "Trädgårdsarbetare",
        "searchPhrase": "trädgårdsarbetare a-kassa",
        "recommendedAkassaId": "kommunal",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "lantbruksassistent",
        "name": "Lantbruksassistent",
        "searchPhrase": "lantbruksassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vingardsarbetare",
        "name": "Vingårdsarbetare",
        "searchPhrase": "vingårdsarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "virkesinkopare",
        "name": "Virkesinköpare",
        "searchPhrase": "virkesinköpare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "virkeskontrollant",
        "name": "Virkeskontrollant",
        "searchPhrase": "virkeskontrollant a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "virkesmatare",
        "name": "Virkesmätare",
        "searchPhrase": "virkesmätare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "overtradgardsmastare",
        "name": "Överträdgårdsmästare",
        "searchPhrase": "överträdgårdsmästare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fotbollsspelare",
        "name": "Fotbollsspelare",
        "searchPhrase": "fotbollsspelare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fotbollstranare",
        "name": "Fotbollstränare",
        "searchPhrase": "fotbollstränare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ryttare",
        "name": "Ryttare",
        "searchPhrase": "ryttare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sportchef",
        "name": "Sportchef",
        "searchPhrase": "sportchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tennistranare",
        "name": "Tennistränare",
        "searchPhrase": "tennistränare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "travtranare",
        "name": "Travtränare",
        "searchPhrase": "travtränare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fotbollsscout",
        "name": "Fotbollsscout",
        "searchPhrase": "fotbollsscout a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "basketspelare",
        "name": "Basketspelare",
        "searchPhrase": "basketspelare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ishockeyspelare",
        "name": "Ishockeyspelare",
        "searchPhrase": "ishockeyspelare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "klubbchef",
        "name": "Klubbchef",
        "searchPhrase": "klubbchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "handbollsspelare",
        "name": "Handbollsspelare",
        "searchPhrase": "handbollsspelare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gymnastikledare",
        "name": "Gymnastikledare",
        "searchPhrase": "gymnastikledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ledbyggare",
        "name": "Ledbyggare",
        "searchPhrase": "ledbyggare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "arrestvakt",
        "name": "Arrestvakt",
        "searchPhrase": "arrestvakt a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "brandman",
        "name": "Brandman",
        "searchPhrase": "brandman a-kassa",
        "recommendedAkassaId": "kommunal",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "dorrvakt",
        "name": "Dörrvakt",
        "searchPhrase": "dörrvakt a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "granspolis",
        "name": "Gränspolis",
        "searchPhrase": "gränspolis a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hundforare",
        "name": "Hundförare",
        "searchPhrase": "hundförare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "inre-befal",
        "name": "Inre befäl",
        "searchPhrase": "inre befäl a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "insatsledare",
        "name": "Insatsledare",
        "searchPhrase": "insatsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kommendor",
        "name": "Kommendör",
        "searchPhrase": "kommendör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kommissarie",
        "name": "Kommissarie",
        "searchPhrase": "kommissarie a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "konteramiral",
        "name": "Konteramiral",
        "searchPhrase": "konteramiral a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kriminalinspektor",
        "name": "Kriminalinspektör",
        "searchPhrase": "kriminalinspektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kriminalkommissarie",
        "name": "Kriminalkommissarie",
        "searchPhrase": "kriminalkommissarie a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kriminaltekniker",
        "name": "Kriminaltekniker",
        "searchPhrase": "kriminaltekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kriminalvardsinspektor",
        "name": "Kriminalvårdsinspektör",
        "searchPhrase": "kriminalvårdsinspektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "kriminolog",
        "name": "Kriminolog",
        "searchPhrase": "kriminolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "larminstallator",
        "name": "Larminstallatör",
        "searchPhrase": "larminstallatör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "livvakt",
        "name": "Livvakt",
        "searchPhrase": "livvakt a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "militar",
        "name": "Militär",
        "searchPhrase": "militär a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "militarbefal",
        "name": "Militärbefäl",
        "searchPhrase": "militärbefäl a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "nattvakt",
        "name": "Nattvakt",
        "searchPhrase": "nattvakt a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "passkontrollant",
        "name": "Passkontrollant",
        "searchPhrase": "passkontrollant a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "personskyddsvaktare",
        "name": "Personskyddsväktare",
        "searchPhrase": "personskyddsväktare a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "pistor",
        "name": "Pistör",
        "searchPhrase": "pistör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "polis",
        "name": "Polis",
        "searchPhrase": "polis a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/images/professions/polis.png"
    },
    {
        "slug": "polisassistent",
        "name": "Polisassistent",
        "searchPhrase": "polisassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "polischef",
        "name": "Polischef",
        "searchPhrase": "polischef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "polisinspektor",
        "name": "Polisinspektör",
        "searchPhrase": "polisinspektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "polisintendent",
        "name": "Polisintendent",
        "searchPhrase": "polisintendent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "poliskommissarie",
        "name": "Poliskommissarie",
        "searchPhrase": "poliskommissarie a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "polismastare",
        "name": "Polismästare",
        "searchPhrase": "polismästare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "privatdetektiv",
        "name": "Privatdetektiv",
        "searchPhrase": "privatdetektiv a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "reservofficer",
        "name": "Reservofficer",
        "searchPhrase": "reservofficer a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "raddningschef",
        "name": "Räddningschef",
        "searchPhrase": "räddningschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "raddningsdykare",
        "name": "Räddningsdykare",
        "searchPhrase": "räddningsdykare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "rojdykare",
        "name": "Röjdykare",
        "searchPhrase": "röjdykare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "soldat",
        "name": "Soldat",
        "searchPhrase": "soldat a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "specialistofficer",
        "name": "Specialistofficer",
        "searchPhrase": "specialistofficer a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "styrkeledare",
        "name": "Styrkeledare",
        "searchPhrase": "styrkeledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "stridspilot",
        "name": "Stridspilot",
        "searchPhrase": "stridspilot a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "sakerhetspolis",
        "name": "Säkerhetspolis",
        "searchPhrase": "säkerhetspolis a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "trafikpolis",
        "name": "Trafikpolis",
        "searchPhrase": "trafikpolis a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tulltjansteman",
        "name": "Tulltjänsteman",
        "searchPhrase": "tulltjänsteman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "yrkesmilitar",
        "name": "Yrkesmilitär",
        "searchPhrase": "yrkesmilitär a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "yrkesofficer",
        "name": "Yrkesofficer",
        "searchPhrase": "yrkesofficer a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "yttre-befal",
        "name": "Yttre befäl",
        "searchPhrase": "yttre befäl a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "orlogskapten",
        "name": "Örlogskapten",
        "searchPhrase": "örlogskapten a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "overbefalhavare",
        "name": "Överbefälhavare",
        "searchPhrase": "överbefälhavare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "overstelojtnant",
        "name": "Överstelöjtnant",
        "searchPhrase": "överstelöjtnant a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "brandchef",
        "name": "Brandchef",
        "searchPhrase": "brandchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "brandforman",
        "name": "Brandförman",
        "searchPhrase": "brandförman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "brandmastare",
        "name": "Brandmästare",
        "searchPhrase": "brandmästare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "deltidsbrandman",
        "name": "Deltidsbrandman",
        "searchPhrase": "deltidsbrandman a-kassa",
        "recommendedAkassaId": "kommunal",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "brandskyddstekniker",
        "name": "Brandskyddstekniker",
        "searchPhrase": "brandskyddstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "brandtekniker",
        "name": "Brandtekniker",
        "searchPhrase": "brandtekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ordningsvakt",
        "name": "Ordningsvakt",
        "searchPhrase": "ordningsvakt a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vaktare",
        "name": "Väktare",
        "searchPhrase": "väktare a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "tullinspektor",
        "name": "Tullinspektör",
        "searchPhrase": "tullinspektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forman",
        "name": "Förman",
        "searchPhrase": "förman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sakerhetschef",
        "name": "Säkerhetschef",
        "searchPhrase": "säkerhetschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sakerhetsexpert",
        "name": "Säkerhetsexpert",
        "searchPhrase": "säkerhetsexpert a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "beredskapssamordnare",
        "name": "Beredskapssamordnare",
        "searchPhrase": "beredskapssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "multimediahandlaggare",
        "name": "Multimediahandläggare",
        "searchPhrase": "multimediahandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bildanalytiker",
        "name": "Bildanalytiker",
        "searchPhrase": "bildanalytiker a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "larmoperator",
        "name": "Larmoperatör",
        "searchPhrase": "larmoperatör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "sakerhetssamordnare",
        "name": "Säkerhetssamordnare",
        "searchPhrase": "säkerhetssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "entrevard",
        "name": "Entrévärd",
        "searchPhrase": "entrévärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "granskontrollant",
        "name": "Gränskontrollant",
        "searchPhrase": "gränskontrollant a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "beredskaps--och-sakerhetssamordnare",
        "name": "Beredskaps- och säkerhetssamordnare",
        "searchPhrase": "beredskaps- och säkerhetssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "beredskapsarbetare",
        "name": "Beredskapsarbetare",
        "searchPhrase": "beredskapsarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "beredskapsassistent",
        "name": "Beredskapsassistent",
        "searchPhrase": "beredskapsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "beredskapshandlaggare",
        "name": "Beredskapshandläggare",
        "searchPhrase": "beredskapshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "beredskapsplanerare",
        "name": "Beredskapsplanerare",
        "searchPhrase": "beredskapsplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bevakningsman",
        "name": "Bevakningsman",
        "searchPhrase": "bevakningsman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "brandbefal",
        "name": "Brandbefäl",
        "searchPhrase": "brandbefäl a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "brandinspektor",
        "name": "Brandinspektör",
        "searchPhrase": "brandinspektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "brandlarmstekniker",
        "name": "Brandlarmstekniker",
        "searchPhrase": "brandlarmstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "brandskyddsansvarig",
        "name": "Brandskyddsansvarig",
        "searchPhrase": "brandskyddsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "brandskyddsassistent",
        "name": "Brandskyddsassistent",
        "searchPhrase": "brandskyddsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "brandskyddsingenjor",
        "name": "Brandskyddsingenjör",
        "searchPhrase": "brandskyddsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "brandskyddskontrollant",
        "name": "Brandskyddskontrollant",
        "searchPhrase": "brandskyddskontrollant a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "brandskyddssamordnare",
        "name": "Brandskyddssamordnare",
        "searchPhrase": "brandskyddssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "brandskyddsspecialist",
        "name": "Brandskyddsspecialist",
        "searchPhrase": "brandskyddsspecialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "brandtillsynsman",
        "name": "Brandtillsynsman",
        "searchPhrase": "brandtillsynsman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "brottsforebyggare",
        "name": "Brottsförebyggare",
        "searchPhrase": "brottsförebyggare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "brasamordnare",
        "name": "Bråsamordnare",
        "searchPhrase": "bråsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "distriktsbrandinspektor",
        "name": "Distriktsbrandinspektör",
        "searchPhrase": "distriktsbrandinspektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "major",
        "name": "Major",
        "searchPhrase": "major a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "raddningsinspektor",
        "name": "Räddningsinspektör",
        "searchPhrase": "räddningsinspektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skadesamordnare",
        "name": "Skadesamordnare",
        "searchPhrase": "skadesamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skyddsingenjor",
        "name": "Skyddsingenjör",
        "searchPhrase": "skyddsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skyddskonsult",
        "name": "Skyddskonsult",
        "searchPhrase": "skyddskonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skyddssamordnare",
        "name": "Skyddssamordnare",
        "searchPhrase": "skyddssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tillsynschef",
        "name": "Tillsynschef",
        "searchPhrase": "tillsynschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utredningsassistent",
        "name": "Utredningsassistent",
        "searchPhrase": "utredningsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utredningschef",
        "name": "Utredningschef",
        "searchPhrase": "utredningschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utredningskonsult",
        "name": "Utredningskonsult",
        "searchPhrase": "utredningskonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utredningsledare",
        "name": "Utredningsledare",
        "searchPhrase": "utredningsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vittnesstodsamordnare",
        "name": "Vittnesstödsamordnare",
        "searchPhrase": "vittnesstödsamordnare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "overvakaransvarig",
        "name": "Övervakaransvarig",
        "searchPhrase": "övervakaransvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "overvakt",
        "name": "Övervakt",
        "searchPhrase": "övervakt a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "civil-utredare",
        "name": "Civil utredare",
        "searchPhrase": "civil utredare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "risksamordnare",
        "name": "Risksamordnare",
        "searchPhrase": "risksamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sakerhetsskyddsspecialist",
        "name": "Säkerhetsskyddsspecialist",
        "searchPhrase": "säkerhetsskyddsspecialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "aktiveringspedagog",
        "name": "Aktiveringspedagog",
        "searchPhrase": "aktiveringspedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "akupunktor",
        "name": "Akupunktör",
        "searchPhrase": "akupunktör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "akutsjukskoterska",
        "name": "Akutsjuksköterska",
        "searchPhrase": "akutsjuksköterska a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "allergolog",
        "name": "Allergolog",
        "searchPhrase": "allergolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ambulansforare",
        "name": "Ambulansförare",
        "searchPhrase": "ambulansförare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "ambulanssjukskoterska",
        "name": "Ambulanssjuksköterska",
        "searchPhrase": "ambulanssjuksköterska a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "ambulanssjukvardare",
        "name": "Ambulanssjukvårdare",
        "searchPhrase": "ambulanssjukvårdare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "anestesilakare",
        "name": "Anestesiläkare",
        "searchPhrase": "anestesiläkare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "anestesiolog",
        "name": "Anestesiolog",
        "searchPhrase": "anestesiolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "anestesisjukskoterska",
        "name": "Anestesisjuksköterska",
        "searchPhrase": "anestesisjuksköterska a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "anhorigsamordnare",
        "name": "Anhörigsamordnare",
        "searchPhrase": "anhörigsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetspsykolog",
        "name": "Arbetspsykolog",
        "searchPhrase": "arbetspsykolog a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsterapeut",
        "name": "Arbetsterapeut",
        "searchPhrase": "arbetsterapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsterapibitrade",
        "name": "Arbetsterapibiträde",
        "searchPhrase": "arbetsterapibiträde a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "at-lakare",
        "name": "AT-läkare",
        "searchPhrase": "at-läkare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "audionom",
        "name": "Audionom",
        "searchPhrase": "audionom a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barnlakare",
        "name": "Barnläkare",
        "searchPhrase": "barnläkare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "barnmorska",
        "name": "Barnmorska",
        "searchPhrase": "barnmorska a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barnpsykolog",
        "name": "Barnpsykolog",
        "searchPhrase": "barnpsykolog a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barnsjukskoterska",
        "name": "Barnsjuksköterska",
        "searchPhrase": "barnsjuksköterska a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "boendeassistent",
        "name": "Boendeassistent",
        "searchPhrase": "boendeassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "boendehandledare",
        "name": "Boendehandledare",
        "searchPhrase": "boendehandledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "boendestodjare",
        "name": "Boendestödjare",
        "searchPhrase": "boendestödjare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefsarbetsterapeut",
        "name": "Chefsarbetsterapeut",
        "searchPhrase": "chefsarbetsterapeut a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefsgymnast",
        "name": "Chefsgymnast",
        "searchPhrase": "chefsgymnast a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefspsykolog",
        "name": "Chefspsykolog",
        "searchPhrase": "chefspsykolog a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefssjukskoterska",
        "name": "Chefssjuksköterska",
        "searchPhrase": "chefssjuksköterska a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "chefsoverlakare",
        "name": "Chefsöverläkare",
        "searchPhrase": "chefsöverläkare a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "cytodiagnostiker",
        "name": "Cytodiagnostiker",
        "searchPhrase": "cytodiagnostiker a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dermatolog",
        "name": "Dermatolog",
        "searchPhrase": "dermatolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dietist",
        "name": "Dietist",
        "searchPhrase": "dietist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "distriktslakare",
        "name": "Distriktsläkare",
        "searchPhrase": "distriktsläkare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "distriktsskoterska",
        "name": "Distriktssköterska",
        "searchPhrase": "distriktssköterska a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "distriktsveterinar",
        "name": "Distriktsveterinär",
        "searchPhrase": "distriktsveterinär a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "djursjukvardare",
        "name": "Djursjukvårdare",
        "searchPhrase": "djursjukvårdare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "ergonom",
        "name": "Ergonom",
        "searchPhrase": "ergonom a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "familjeterapeut",
        "name": "Familjeterapeut",
        "searchPhrase": "familjeterapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "folkhalsosamordnare",
        "name": "Folkhälsosamordnare",
        "searchPhrase": "folkhälsosamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "foniater",
        "name": "Foniater",
        "searchPhrase": "foniater a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forskningssjukskoterska",
        "name": "Forskningssjuksköterska",
        "searchPhrase": "forskningssjuksköterska a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "fotvardsspecialist",
        "name": "Fotvårdsspecialist",
        "searchPhrase": "fotvårdsspecialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "friskvardskonsulent",
        "name": "Friskvårdskonsulent",
        "searchPhrase": "friskvårdskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "friskvardskonsult",
        "name": "Friskvårdskonsult",
        "searchPhrase": "friskvårdskonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "friskvardsterapeut",
        "name": "Friskvårdsterapeut",
        "searchPhrase": "friskvårdsterapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "fysioterapeut",
        "name": "Fysioterapeut",
        "searchPhrase": "fysioterapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "foretagslakare",
        "name": "Företagsläkare",
        "searchPhrase": "företagsläkare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "foretagsskoterska",
        "name": "Företagssköterska",
        "searchPhrase": "företagssköterska a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "geriatriker",
        "name": "Geriatriker",
        "searchPhrase": "geriatriker a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "geriatriksjukskoterska",
        "name": "Geriatriksjuksköterska",
        "searchPhrase": "geriatriksjuksköterska a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "gipstekniker",
        "name": "Gipstekniker",
        "searchPhrase": "gipstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gynekolog",
        "name": "Gynekolog",
        "searchPhrase": "gynekolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "habiliteringspersonal",
        "name": "Habiliteringspersonal",
        "searchPhrase": "habiliteringspersonal a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "handkirurg",
        "name": "Handkirurg",
        "searchPhrase": "handkirurg a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hemsamarit",
        "name": "Hemsamarit",
        "searchPhrase": "hemsamarit a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hemsjukvardare",
        "name": "Hemsjukvårdare",
        "searchPhrase": "hemsjukvårdare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "hjarnkirurg",
        "name": "Hjärnkirurg",
        "searchPhrase": "hjärnkirurg a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "homeopat",
        "name": "Homeopat",
        "searchPhrase": "homeopat a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hudlakare",
        "name": "Hudläkare",
        "searchPhrase": "hudläkare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "huslakare",
        "name": "Husläkare",
        "searchPhrase": "husläkare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "hygientekniker",
        "name": "Hygientekniker",
        "searchPhrase": "hygientekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hypnoanalytiker",
        "name": "Hypnoanalytiker",
        "searchPhrase": "hypnoanalytiker a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "halsocoach",
        "name": "Hälsocoach",
        "searchPhrase": "hälsocoach a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "halsokonsult",
        "name": "Hälsokonsult",
        "searchPhrase": "hälsokonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "halsopedagog",
        "name": "Hälsopedagog",
        "searchPhrase": "hälsopedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "halsoradgivare",
        "name": "Hälsorådgivare",
        "searchPhrase": "hälsorådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "halsovagledare",
        "name": "Hälsovägledare",
        "searchPhrase": "hälsovägledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "horselpedagog",
        "name": "Hörselpedagog",
        "searchPhrase": "hörselpedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "horselvardsingenjor",
        "name": "Hörselvårdsingenjör",
        "searchPhrase": "hörselvårdsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "infektionslakare",
        "name": "Infektionsläkare",
        "searchPhrase": "infektionsläkare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "intensivvardssjukskoterska",
        "name": "Intensivvårdssjuksköterska",
        "searchPhrase": "intensivvårdssjuksköterska a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "kardiolog",
        "name": "Kardiolog",
        "searchPhrase": "kardiolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kinesiolog",
        "name": "Kinesiolog",
        "searchPhrase": "kinesiolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kiropraktor",
        "name": "Kiropraktor",
        "searchPhrase": "kiropraktor a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kirurg",
        "name": "Kirurg",
        "searchPhrase": "kirurg a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "klinikansvarig",
        "name": "Klinikansvarig",
        "searchPhrase": "klinikansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "logoped",
        "name": "Logoped",
        "searchPhrase": "logoped a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lakare",
        "name": "Läkare",
        "searchPhrase": "läkare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "lakarsekreterare",
        "name": "Läkarsekreterare",
        "searchPhrase": "läkarsekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medicintekniker",
        "name": "Medicintekniker",
        "searchPhrase": "medicintekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mentalskotare",
        "name": "Mentalskötare",
        "searchPhrase": "mentalskötare a-kassa",
        "recommendedAkassaId": "kommunal",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "naprapat",
        "name": "Naprapat",
        "searchPhrase": "naprapat a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "narkoslakare",
        "name": "Narkosläkare",
        "searchPhrase": "narkosläkare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "narkossjukskoterska",
        "name": "Narkossjuksköterska",
        "searchPhrase": "narkossjuksköterska a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "naturlakare",
        "name": "Naturläkare",
        "searchPhrase": "naturläkare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "naturterapeut",
        "name": "Naturterapeut",
        "searchPhrase": "naturterapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "neurokirurg",
        "name": "Neurokirurg",
        "searchPhrase": "neurokirurg a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "neuropsykolog",
        "name": "Neuropsykolog",
        "searchPhrase": "neuropsykolog a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "obducent",
        "name": "Obducent",
        "searchPhrase": "obducent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "obduktionstekniker",
        "name": "Obduktionstekniker",
        "searchPhrase": "obduktionstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "odontolog",
        "name": "Odontolog",
        "searchPhrase": "odontolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "onkologisjukskoterska",
        "name": "Onkologisjuksköterska",
        "searchPhrase": "onkologisjuksköterska a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "operationskoordinator",
        "name": "Operationskoordinator",
        "searchPhrase": "operationskoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "operationssjukskoterska",
        "name": "Operationssjuksköterska",
        "searchPhrase": "operationssjuksköterska a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "optiker",
        "name": "Optiker",
        "searchPhrase": "optiker a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "optikerassistent",
        "name": "Optikerassistent",
        "searchPhrase": "optikerassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "optometritekniker",
        "name": "Optometritekniker",
        "searchPhrase": "optometritekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ortodontiassistent",
        "name": "Ortodontiassistent",
        "searchPhrase": "ortodontiassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ortoped",
        "name": "Ortoped",
        "searchPhrase": "ortoped a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ortopedingenjor",
        "name": "Ortopedingenjör",
        "searchPhrase": "ortopedingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ortopedkirurg",
        "name": "Ortopedkirurg",
        "searchPhrase": "ortopedkirurg a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ortopedtekniker",
        "name": "Ortopedtekniker",
        "searchPhrase": "ortopedtekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ortoptist",
        "name": "Ortoptist",
        "searchPhrase": "ortoptist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "osteopat",
        "name": "Osteopat",
        "searchPhrase": "osteopat a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "patolog",
        "name": "Patolog",
        "searchPhrase": "patolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pediatriker",
        "name": "Pediatriker",
        "searchPhrase": "pediatriker a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "perfusionist",
        "name": "Perfusionist",
        "searchPhrase": "perfusionist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "personlig-tranare",
        "name": "Personlig tränare",
        "searchPhrase": "personlig tränare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "planeringsledare",
        "name": "Planeringsledare",
        "searchPhrase": "planeringsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "plastikkirurg",
        "name": "Plastikkirurg",
        "searchPhrase": "plastikkirurg a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "podiater",
        "name": "Podiater",
        "searchPhrase": "podiater a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "psykiatriker",
        "name": "Psykiatriker",
        "searchPhrase": "psykiatriker a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "psykiatrisjukskoterska",
        "name": "Psykiatrisjuksköterska",
        "searchPhrase": "psykiatrisjuksköterska a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "psykoanalytiker",
        "name": "Psykoanalytiker",
        "searchPhrase": "psykoanalytiker a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "psykolog",
        "name": "Psykolog",
        "searchPhrase": "psykolog a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "psykoterapeut",
        "name": "Psykoterapeut",
        "searchPhrase": "psykoterapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "receptarie",
        "name": "Receptarie",
        "searchPhrase": "receptarie a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "reflexolog",
        "name": "Reflexolog",
        "searchPhrase": "reflexolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "rehabassistent",
        "name": "Rehabassistent",
        "searchPhrase": "rehabassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "rehabiliteringsassistent",
        "name": "Rehabiliteringsassistent",
        "searchPhrase": "rehabiliteringsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "rehabsamordnare",
        "name": "Rehabsamordnare",
        "searchPhrase": "rehabsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "rattslakare",
        "name": "Rättsläkare",
        "searchPhrase": "rättsläkare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "rontgenbitrade",
        "name": "Röntgenbiträde",
        "searchPhrase": "röntgenbiträde a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "rontgenlakare",
        "name": "Röntgenläkare",
        "searchPhrase": "röntgenläkare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "rontgensjukskoterska",
        "name": "Röntgensjuksköterska",
        "searchPhrase": "röntgensjuksköterska a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "sektionsledare",
        "name": "Sektionsledare",
        "searchPhrase": "sektionsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sexolog",
        "name": "Sexolog",
        "searchPhrase": "sexolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sjukgymnast",
        "name": "Sjukgymnast",
        "searchPhrase": "sjukgymnast a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sjukgymnastbitrade",
        "name": "Sjukgymnastbiträde",
        "searchPhrase": "sjukgymnastbiträde a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sjukhusdirektor",
        "name": "Sjukhusdirektör",
        "searchPhrase": "sjukhusdirektör a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sjukhusfysiker",
        "name": "Sjukhusfysiker",
        "searchPhrase": "sjukhusfysiker a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sjukskoterska",
        "name": "Sjuksköterska",
        "searchPhrase": "sjuksköterska a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/images/professions/sjukskoterska.png"
    },
    {
        "slug": "sjukvardsbitrade",
        "name": "Sjukvårdsbiträde",
        "searchPhrase": "sjukvårdsbiträde a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "skollakare",
        "name": "Skolläkare",
        "searchPhrase": "skolläkare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "skolpsykolog",
        "name": "Skolpsykolog",
        "searchPhrase": "skolpsykolog a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skolskoterska",
        "name": "Skolsköterska",
        "searchPhrase": "skolsköterska a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skotare",
        "name": "Skötare",
        "searchPhrase": "skötare a-kassa",
        "recommendedAkassaId": "kommunal",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "specialistlakare",
        "name": "Specialistläkare",
        "searchPhrase": "specialistläkare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "specialistunderskoterska",
        "name": "Specialistundersköterska",
        "searchPhrase": "specialistundersköterska a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "spinninginstruktor",
        "name": "Spinninginstruktör",
        "searchPhrase": "spinninginstruktör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "st-lakare",
        "name": "ST-läkare",
        "searchPhrase": "st-läkare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "steriltekniker",
        "name": "Steriltekniker",
        "searchPhrase": "steriltekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "synpedagog",
        "name": "Synpedagog",
        "searchPhrase": "synpedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tandhygienist",
        "name": "Tandhygienist",
        "searchPhrase": "tandhygienist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tandlakare",
        "name": "Tandläkare",
        "searchPhrase": "tandläkare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "tandskoterska",
        "name": "Tandsköterska",
        "searchPhrase": "tandsköterska a-kassa",
        "recommendedAkassaId": "vision",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tandtekniker",
        "name": "Tandtekniker",
        "searchPhrase": "tandtekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "terapibitrade",
        "name": "Terapibiträde",
        "searchPhrase": "terapibiträde a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "thoraxkirurg",
        "name": "Thoraxkirurg",
        "searchPhrase": "thoraxkirurg a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "traningsinstruktor",
        "name": "Träningsinstruktör",
        "searchPhrase": "träningsinstruktör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "underlakare",
        "name": "Underläkare",
        "searchPhrase": "underläkare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "underskoterska",
        "name": "Undersköterska",
        "searchPhrase": "undersköterska a-kassa",
        "recommendedAkassaId": "kommunal",
        "image": "/images/professions/sjukskoterska.png"
    },
    {
        "slug": "urolog",
        "name": "Urolog",
        "searchPhrase": "urolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "uroterapeut",
        "name": "Uroterapeut",
        "searchPhrase": "uroterapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vattengympainstruktor",
        "name": "Vattengympainstruktör",
        "searchPhrase": "vattengympainstruktör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "venereolog",
        "name": "Venereolog",
        "searchPhrase": "venereolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "veterinar",
        "name": "Veterinär",
        "searchPhrase": "veterinär a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "veterinarassistent",
        "name": "Veterinärassistent",
        "searchPhrase": "veterinärassistent a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vardadministrator",
        "name": "Vårdadministratör",
        "searchPhrase": "vårdadministratör a-kassa",
        "recommendedAkassaId": "vision",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "vardare",
        "name": "Vårdare",
        "searchPhrase": "vårdare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "vardbitrade",
        "name": "Vårdbiträde",
        "searchPhrase": "vårdbiträde a-kassa",
        "recommendedAkassaId": "kommunal",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "vardutvecklare",
        "name": "Vårdutvecklare",
        "searchPhrase": "vårdutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "zonterapeut",
        "name": "Zonterapeut",
        "searchPhrase": "zonterapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ogonlakare",
        "name": "Ögonläkare",
        "searchPhrase": "ögonläkare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "ogonsjukskoterska",
        "name": "Ögonsjuksköterska",
        "searchPhrase": "ögonsjuksköterska a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "oronlakare",
        "name": "Öronläkare",
        "searchPhrase": "öronläkare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "overlakare",
        "name": "Överläkare",
        "searchPhrase": "överläkare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "overskotare",
        "name": "Överskötare",
        "searchPhrase": "överskötare a-kassa",
        "recommendedAkassaId": "kommunal",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "overtandlakare",
        "name": "Övertandläkare",
        "searchPhrase": "övertandläkare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "anaplastolog",
        "name": "Anaplastolog",
        "searchPhrase": "anaplastolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "stresscoach",
        "name": "Stresscoach",
        "searchPhrase": "stresscoach a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "patientkoordinator",
        "name": "Patientkoordinator",
        "searchPhrase": "patientkoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "aktiveringskonsulent",
        "name": "Aktiveringskonsulent",
        "searchPhrase": "aktiveringskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "alkohol--och-drogterapeut",
        "name": "Alkohol- och drogterapeut",
        "searchPhrase": "alkohol- och drogterapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "alkoholradgivare",
        "name": "Alkoholrådgivare",
        "searchPhrase": "alkoholrådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "alkoholterapeut",
        "name": "Alkoholterapeut",
        "searchPhrase": "alkoholterapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ambulanschef",
        "name": "Ambulanschef",
        "searchPhrase": "ambulanschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ambulansforestandare",
        "name": "Ambulansföreståndare",
        "searchPhrase": "ambulansföreståndare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ambulansforman",
        "name": "Ambulansförman",
        "searchPhrase": "ambulansförman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ambulansinstruktor",
        "name": "Ambulansinstruktör",
        "searchPhrase": "ambulansinstruktör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "djurfysioterapeut",
        "name": "Djurfysioterapeut",
        "searchPhrase": "djurfysioterapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hundfysioterapeut",
        "name": "Hundfysioterapeut",
        "searchPhrase": "hundfysioterapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "servicevard",
        "name": "Servicevärd",
        "searchPhrase": "servicevärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "omvardnadsassistent",
        "name": "Omvårdnadsassistent",
        "searchPhrase": "omvårdnadsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "sjukhustransportor",
        "name": "Sjukhustransportör",
        "searchPhrase": "sjukhustransportör a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "medicinsk-fotterapeut",
        "name": "Medicinsk fotterapeut",
        "searchPhrase": "medicinsk fotterapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bitradande-klinikchef",
        "name": "Biträdande klinikchef",
        "searchPhrase": "biträdande klinikchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tandlakarassistent",
        "name": "Tandläkarassistent",
        "searchPhrase": "tandläkarassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medlemsvard",
        "name": "Medlemsvärd",
        "searchPhrase": "medlemsvärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "djursjukskotare",
        "name": "Djursjukskötare",
        "searchPhrase": "djursjukskötare a-kassa",
        "recommendedAkassaId": "kommunal",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "fasciaspecialist",
        "name": "Fasciaspecialist",
        "searchPhrase": "fasciaspecialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "halso--och-sjukvardsstrateg",
        "name": "Hälso- och sjukvårdsstrateg",
        "searchPhrase": "hälso- och sjukvårdsstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "gymansvarig",
        "name": "Gymansvarig",
        "searchPhrase": "gymansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "maltidsstrateg",
        "name": "Måltidsstrateg",
        "searchPhrase": "måltidsstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "patienttransportor",
        "name": "Patienttransportör",
        "searchPhrase": "patienttransportör a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "medicinsk-fotvardare",
        "name": "Medicinsk fotvårdare",
        "searchPhrase": "medicinsk fotvårdare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "hemtjanstpersonal",
        "name": "Hemtjänstpersonal",
        "searchPhrase": "hemtjänstpersonal a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "aktivitetshandledare",
        "name": "Aktivitetshandledare",
        "searchPhrase": "aktivitetshandledare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "aktivitetssamordnare",
        "name": "Aktivitetssamordnare",
        "searchPhrase": "aktivitetssamordnare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "klinikchef",
        "name": "Klinikchef",
        "searchPhrase": "klinikchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bemanningssjukskoterska",
        "name": "Bemanningssjuksköterska",
        "searchPhrase": "bemanningssjuksköterska a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "medicinteknisk-assistent",
        "name": "Medicinteknisk assistent",
        "searchPhrase": "medicinteknisk assistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "patientstodjare",
        "name": "Patientstödjare",
        "searchPhrase": "patientstödjare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sonograf",
        "name": "Sonograf",
        "searchPhrase": "sonograf a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "omsorgsbitrade",
        "name": "Omsorgsbiträde",
        "searchPhrase": "omsorgsbiträde a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "alkohol--och-drogbehandlare",
        "name": "Alkohol- och drogbehandlare",
        "searchPhrase": "alkohol- och drogbehandlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "alkohol--och-drogforebyggare",
        "name": "Alkohol- och drogförebyggare",
        "searchPhrase": "alkohol- och drogförebyggare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "alkohol--och-drogradgivare",
        "name": "Alkohol- och drogrådgivare",
        "searchPhrase": "alkohol- och drogrådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "alkohol--och-drogsamordnare",
        "name": "Alkohol- och drogsamordnare",
        "searchPhrase": "alkohol- och drogsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "apu-samordnare",
        "name": "APU-samordnare",
        "searchPhrase": "apu-samordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsanpassare",
        "name": "Arbetsanpassare",
        "searchPhrase": "arbetsanpassare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsrehabiliterare",
        "name": "Arbetsrehabiliterare",
        "searchPhrase": "arbetsrehabiliterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "audiolog",
        "name": "Audiolog",
        "searchPhrase": "audiolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "audiometrist",
        "name": "Audiometrist",
        "searchPhrase": "audiometrist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ava-chef",
        "name": "AVA-chef",
        "searchPhrase": "ava-chef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "basenhetschef",
        "name": "Basenhetschef",
        "searchPhrase": "basenhetschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "behandlare",
        "name": "Behandlare",
        "searchPhrase": "behandlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "behandlingsansvarig",
        "name": "Behandlingsansvarig",
        "searchPhrase": "behandlingsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "behandlingschef",
        "name": "Behandlingschef",
        "searchPhrase": "behandlingschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "behandlingshandlaggare",
        "name": "Behandlingshandläggare",
        "searchPhrase": "behandlingshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "behandlingskonsulent",
        "name": "Behandlingskonsulent",
        "searchPhrase": "behandlingskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "behandlingsledare",
        "name": "Behandlingsledare",
        "searchPhrase": "behandlingsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "behandlingspersonal",
        "name": "Behandlingspersonal",
        "searchPhrase": "behandlingspersonal a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "behandlingssamordnare",
        "name": "Behandlingssamordnare",
        "searchPhrase": "behandlingssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "behovsbedomare",
        "name": "Behovsbedömare",
        "searchPhrase": "behovsbedömare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "beroendeterapeut",
        "name": "Beroendeterapeut",
        "searchPhrase": "beroendeterapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefstandtekniker",
        "name": "Chefstandtekniker",
        "searchPhrase": "chefstandtekniker a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dagcentralsansvarig",
        "name": "Dagcentralsansvarig",
        "searchPhrase": "dagcentralsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "demenssamordnare",
        "name": "Demenssamordnare",
        "searchPhrase": "demenssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "demensvardsutvecklare",
        "name": "Demensvårdsutvecklare",
        "searchPhrase": "demensvårdsutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "distriktsarbetsterapeut",
        "name": "Distriktsarbetsterapeut",
        "searchPhrase": "distriktsarbetsterapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "drogforebyggare",
        "name": "Drogförebyggare",
        "searchPhrase": "drogförebyggare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "drogradgivare",
        "name": "Drogrådgivare",
        "searchPhrase": "drogrådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "drogsamordnare",
        "name": "Drogsamordnare",
        "searchPhrase": "drogsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "drogterapeut",
        "name": "Drogterapeut",
        "searchPhrase": "drogterapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "eftervardskonsulent",
        "name": "Eftervårdskonsulent",
        "searchPhrase": "eftervårdskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "folkhalsokonsulent",
        "name": "Folkhälsokonsulent",
        "searchPhrase": "folkhälsokonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "folkhalsoplanerare",
        "name": "Folkhälsoplanerare",
        "searchPhrase": "folkhälsoplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "folkhalsoutvecklare",
        "name": "Folkhälsoutvecklare",
        "searchPhrase": "folkhälsoutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "friskvardare",
        "name": "Friskvårdare",
        "searchPhrase": "friskvårdare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "friskvardsansvarig",
        "name": "Friskvårdsansvarig",
        "searchPhrase": "friskvårdsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "friskvardsassistent",
        "name": "Friskvårdsassistent",
        "searchPhrase": "friskvårdsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "friskvardschef",
        "name": "Friskvårdschef",
        "searchPhrase": "friskvårdschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "friskvardsinstruktor",
        "name": "Friskvårdsinstruktör",
        "searchPhrase": "friskvårdsinstruktör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "friskvardsledare",
        "name": "Friskvårdsledare",
        "searchPhrase": "friskvårdsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "friskvardsplanerare",
        "name": "Friskvårdsplanerare",
        "searchPhrase": "friskvårdsplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "friskvardssekreterare",
        "name": "Friskvårdssekreterare",
        "searchPhrase": "friskvårdssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "friskvardsutvecklare",
        "name": "Friskvårdsutvecklare",
        "searchPhrase": "friskvårdsutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "habiliterare",
        "name": "Habiliterare",
        "searchPhrase": "habiliterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "habiliteringskonsulent",
        "name": "Habiliteringskonsulent",
        "searchPhrase": "habiliteringskonsulent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "habiliteringsledare",
        "name": "Habiliteringsledare",
        "searchPhrase": "habiliteringsledare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "heminstruktor",
        "name": "Heminstruktör",
        "searchPhrase": "heminstruktör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hemtjanstchef",
        "name": "Hemtjänstchef",
        "searchPhrase": "hemtjänstchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hemtjanstplanerare",
        "name": "Hemtjänstplanerare",
        "searchPhrase": "hemtjänstplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hemtjanstsekreterare",
        "name": "Hemtjänstsekreterare",
        "searchPhrase": "hemtjänstsekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hjalpmedelsassistent",
        "name": "Hjälpmedelsassistent",
        "searchPhrase": "hjälpmedelsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hjalpmedelsingenjor",
        "name": "Hjälpmedelsingenjör",
        "searchPhrase": "hjälpmedelsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hjalpmedelskonsulent",
        "name": "Hjälpmedelskonsulent",
        "searchPhrase": "hjälpmedelskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hjalpmedelssamordnare",
        "name": "Hjälpmedelssamordnare",
        "searchPhrase": "hjälpmedelssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "halsokommunikator",
        "name": "Hälsokommunikatör",
        "searchPhrase": "hälsokommunikatör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "halsokonsulent",
        "name": "Hälsokonsulent",
        "searchPhrase": "hälsokonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "halsosamordnare",
        "name": "Hälsosamordnare",
        "searchPhrase": "hälsosamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "halsoutvecklare",
        "name": "Hälsoutvecklare",
        "searchPhrase": "hälsoutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "halsovardssekreterare",
        "name": "Hälsovårdssekreterare",
        "searchPhrase": "hälsovårdssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "horselingenjor",
        "name": "Hörselingenjör",
        "searchPhrase": "hörselingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "horselvardsforestandare",
        "name": "Hörselvårdsföreståndare",
        "searchPhrase": "hörselvårdsföreståndare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "horselvardstekniker",
        "name": "Hörselvårdstekniker",
        "searchPhrase": "hörselvårdstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "lakarassistent",
        "name": "Läkarassistent",
        "searchPhrase": "läkarassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medicinadministrator",
        "name": "Medicinadministratör",
        "searchPhrase": "medicinadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medicinassistent",
        "name": "Medicinassistent",
        "searchPhrase": "medicinassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medicinsk-analytiker",
        "name": "Medicinsk analytiker",
        "searchPhrase": "medicinsk analytiker a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medicinsk-ansvarig",
        "name": "Medicinsk ansvarig",
        "searchPhrase": "medicinsk ansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medicinsk-chef",
        "name": "Medicinsk chef",
        "searchPhrase": "medicinsk chef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medicinsk-controller",
        "name": "Medicinsk controller",
        "searchPhrase": "medicinsk controller a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medicinsk-fotograf",
        "name": "Medicinsk fotograf",
        "searchPhrase": "medicinsk fotograf a-kassa",
        "recommendedAkassaId": "journalist",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medicinsk-handlaggare",
        "name": "Medicinsk handläggare",
        "searchPhrase": "medicinsk handläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medicinsk-ingenjor",
        "name": "Medicinsk ingenjör",
        "searchPhrase": "medicinsk ingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medicinsk-koordinator",
        "name": "Medicinsk koordinator",
        "searchPhrase": "medicinsk koordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medicinsk-ledare",
        "name": "Medicinsk ledare",
        "searchPhrase": "medicinsk ledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medicinsk-tekniker",
        "name": "Medicinsk tekniker",
        "searchPhrase": "medicinsk tekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medicinteknisk-ansvarig",
        "name": "Medicinteknisk ansvarig",
        "searchPhrase": "medicinteknisk ansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medicinteknisk-chef",
        "name": "Medicinteknisk chef",
        "searchPhrase": "medicinteknisk chef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medicinteknisk-ingenjor",
        "name": "Medicinteknisk ingenjör",
        "searchPhrase": "medicinteknisk ingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medicinteknisk-konsult",
        "name": "Medicinteknisk konsult",
        "searchPhrase": "medicinteknisk konsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "narsjukvardschef",
        "name": "Närsjukvårdschef",
        "searchPhrase": "närsjukvårdschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "narsjukvardssamordnare",
        "name": "Närsjukvårdssamordnare",
        "searchPhrase": "närsjukvårdssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "narsjukvardsstrateg",
        "name": "Närsjukvårdsstrateg",
        "searchPhrase": "närsjukvårdsstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "omsorgsadministrator",
        "name": "Omsorgsadministratör",
        "searchPhrase": "omsorgsadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "omsorgsansvarig",
        "name": "Omsorgsansvarig",
        "searchPhrase": "omsorgsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "omsorgschef",
        "name": "Omsorgschef",
        "searchPhrase": "omsorgschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "omsorgshandlaggare",
        "name": "Omsorgshandläggare",
        "searchPhrase": "omsorgshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "omsorgskonsulent",
        "name": "Omsorgskonsulent",
        "searchPhrase": "omsorgskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "omsorgskoordinator",
        "name": "Omsorgskoordinator",
        "searchPhrase": "omsorgskoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "omsorgsledare",
        "name": "Omsorgsledare",
        "searchPhrase": "omsorgsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "omsorgsplanerare",
        "name": "Omsorgsplanerare",
        "searchPhrase": "omsorgsplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "omsorgssamordnare",
        "name": "Omsorgssamordnare",
        "searchPhrase": "omsorgssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "omsorgsutvecklare",
        "name": "Omsorgsutvecklare",
        "searchPhrase": "omsorgsutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "operationsassistent",
        "name": "Operationsassistent",
        "searchPhrase": "operationsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "operationschef",
        "name": "Operationschef",
        "searchPhrase": "operationschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "primarvardschef",
        "name": "Primärvårdschef",
        "searchPhrase": "primärvårdschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "primarvardskoordinator",
        "name": "Primärvårdskoordinator",
        "searchPhrase": "primärvårdskoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "sjukhusdiakon",
        "name": "Sjukhusdiakon",
        "searchPhrase": "sjukhusdiakon a-kassa",
        "recommendedAkassaId": "vision",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sjukhusoptiker",
        "name": "Sjukhusoptiker",
        "searchPhrase": "sjukhusoptiker a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sjukhusprast",
        "name": "Sjukhuspräst",
        "searchPhrase": "sjukhuspräst a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sjukhussekreterare",
        "name": "Sjukhussekreterare",
        "searchPhrase": "sjukhussekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tandvardssamordnare",
        "name": "Tandvårdssamordnare",
        "searchPhrase": "tandvårdssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "terapeut",
        "name": "Terapeut",
        "searchPhrase": "terapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "aldreomsorgsassistent",
        "name": "Äldreomsorgsassistent",
        "searchPhrase": "äldreomsorgsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "aldreomsorgschef",
        "name": "Äldreomsorgschef",
        "searchPhrase": "äldreomsorgschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "aldreomsorgshandlaggare",
        "name": "Äldreomsorgshandläggare",
        "searchPhrase": "äldreomsorgshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "aldreomsorgssamordnare",
        "name": "Äldreomsorgssamordnare",
        "searchPhrase": "äldreomsorgssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "aldreomsorgssekreterare",
        "name": "Äldreomsorgssekreterare",
        "searchPhrase": "äldreomsorgssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "overvardschef",
        "name": "Övervårdschef",
        "searchPhrase": "övervårdschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "overvardsforman",
        "name": "Övervårdsförman",
        "searchPhrase": "övervårdsförman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "overvardsingenjor",
        "name": "Övervårdsingenjör",
        "searchPhrase": "övervårdsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "overvardskoordinator",
        "name": "Övervårdskoordinator",
        "searchPhrase": "övervårdskoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "overvardsledare",
        "name": "Övervårdsledare",
        "searchPhrase": "övervårdsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "overvardsman",
        "name": "Övervårdsman",
        "searchPhrase": "övervårdsman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "overvardssamordnare",
        "name": "Övervårdssamordnare",
        "searchPhrase": "övervårdssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "overvardstekniker",
        "name": "Övervårdstekniker",
        "searchPhrase": "övervårdstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "overvardsutvecklare",
        "name": "Övervårdsutvecklare",
        "searchPhrase": "övervårdsutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "grupptraningskoordinator",
        "name": "Gruppträningskoordinator",
        "searchPhrase": "gruppträningskoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "befraktare",
        "name": "Befraktare",
        "searchPhrase": "befraktare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "batmekaniker",
        "name": "Båtmekaniker",
        "searchPhrase": "båtmekaniker a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "dykare",
        "name": "Dykare",
        "searchPhrase": "dykare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fartygsbefal",
        "name": "Fartygsbefäl",
        "searchPhrase": "fartygsbefäl a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fiskare",
        "name": "Fiskare",
        "searchPhrase": "fiskare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fiskeguide",
        "name": "Fiskeguide",
        "searchPhrase": "fiskeguide a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hamnarbetare",
        "name": "Hamnarbetare",
        "searchPhrase": "hamnarbetare a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "kustbevakare",
        "name": "Kustbevakare",
        "searchPhrase": "kustbevakare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mariningenjor",
        "name": "Mariningenjör",
        "searchPhrase": "mariningenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "matros",
        "name": "Matros",
        "searchPhrase": "matros a-kassa",
        "recommendedAkassaId": "seko",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mudderverksarbetare",
        "name": "Mudderverksarbetare",
        "searchPhrase": "mudderverksarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "nautiker",
        "name": "Nautiker",
        "searchPhrase": "nautiker a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "redare",
        "name": "Redare",
        "searchPhrase": "redare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "roddare",
        "name": "Roddare",
        "searchPhrase": "roddare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sjoingenjor",
        "name": "Sjöingenjör",
        "searchPhrase": "sjöingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sjokapten",
        "name": "Sjökapten",
        "searchPhrase": "sjökapten a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sjoman",
        "name": "Sjöman",
        "searchPhrase": "sjöman a-kassa",
        "recommendedAkassaId": "seko",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skeppare",
        "name": "Skeppare",
        "searchPhrase": "skeppare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skeppsmaklare",
        "name": "Skeppsmäklare",
        "searchPhrase": "skeppsmäklare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skeppsredare",
        "name": "Skeppsredare",
        "searchPhrase": "skeppsredare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "styrman",
        "name": "Styrman",
        "searchPhrase": "styrman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "varvsarbetare",
        "name": "Varvsarbetare",
        "searchPhrase": "varvsarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "yrkesfiskare",
        "name": "Yrkesfiskare",
        "searchPhrase": "yrkesfiskare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "overstyrman",
        "name": "Överstyrman",
        "searchPhrase": "överstyrman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hamnkranforare",
        "name": "Hamnkranförare",
        "searchPhrase": "hamnkranförare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "sjobefal",
        "name": "Sjöbefäl",
        "searchPhrase": "sjöbefäl a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "maskinbefal",
        "name": "Maskinbefäl",
        "searchPhrase": "maskinbefäl a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vaktstyrman",
        "name": "Vaktstyrman",
        "searchPhrase": "vaktstyrman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "purser",
        "name": "Purser",
        "searchPhrase": "purser a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kustuppsyningsman",
        "name": "Kustuppsyningsman",
        "searchPhrase": "kustuppsyningsman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "adjunkt",
        "name": "Adjunkt",
        "searchPhrase": "adjunkt a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "aktivitetsledare",
        "name": "Aktivitetsledare",
        "searchPhrase": "aktivitetsledare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ateljerista",
        "name": "Ateljerista",
        "searchPhrase": "ateljerista a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bildlarare",
        "name": "Bildlärare",
        "searchPhrase": "bildlärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bildpedagog",
        "name": "Bildpedagog",
        "searchPhrase": "bildpedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bilskollarare",
        "name": "Bilskollärare",
        "searchPhrase": "bilskollärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bitradande-rektor",
        "name": "Biträdande rektor",
        "searchPhrase": "biträdande rektor a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "cirkelledare",
        "name": "Cirkelledare",
        "searchPhrase": "cirkelledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dagbarnvardare",
        "name": "Dagbarnvårdare",
        "searchPhrase": "dagbarnvårdare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "dagmamma",
        "name": "Dagmamma",
        "searchPhrase": "dagmamma a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "danslarare",
        "name": "Danslärare",
        "searchPhrase": "danslärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "danspedagog",
        "name": "Danspedagog",
        "searchPhrase": "danspedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "docent",
        "name": "Docent",
        "searchPhrase": "docent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "doktorand",
        "name": "Doktorand",
        "searchPhrase": "doktorand a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dramapedagog",
        "name": "Dramapedagog",
        "searchPhrase": "dramapedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "epiker",
        "name": "Epiker",
        "searchPhrase": "epiker a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "etnolog",
        "name": "Etnolog",
        "searchPhrase": "etnolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "folkhogskolelarare",
        "name": "Folkhögskolelärare",
        "searchPhrase": "folkhögskolelärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fritidsassistent",
        "name": "Fritidsassistent",
        "searchPhrase": "fritidsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fritidspedagog",
        "name": "Fritidspedagog",
        "searchPhrase": "fritidspedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forskollarare",
        "name": "Förskollärare",
        "searchPhrase": "förskollärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "genealog",
        "name": "Genealog",
        "searchPhrase": "genealog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "genusvetare",
        "name": "Genusvetare",
        "searchPhrase": "genusvetare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "grundskollarare",
        "name": "Grundskollärare",
        "searchPhrase": "grundskollärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gymnasielarare",
        "name": "Gymnasielärare",
        "searchPhrase": "gymnasielärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hemkunskapslarare",
        "name": "Hemkunskapslärare",
        "searchPhrase": "hemkunskapslärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hemslojdskonsulent",
        "name": "Hemslöjdskonsulent",
        "searchPhrase": "hemslöjdskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "historiker",
        "name": "Historiker",
        "searchPhrase": "historiker a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hogskolelarare",
        "name": "Högskolelärare",
        "searchPhrase": "högskolelärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hogstadielarare",
        "name": "Högstadielärare",
        "searchPhrase": "högstadielärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "idrottslarare",
        "name": "Idrottslärare",
        "searchPhrase": "idrottslärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "it-pedagog",
        "name": "IT-pedagog",
        "searchPhrase": "it-pedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kursledare",
        "name": "Kursledare",
        "searchPhrase": "kursledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lektor",
        "name": "Lektor",
        "searchPhrase": "lektor a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lingvist",
        "name": "Lingvist",
        "searchPhrase": "lingvist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lagstadielarare",
        "name": "Lågstadielärare",
        "searchPhrase": "lågstadielärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lararassistent",
        "name": "Lärarassistent",
        "searchPhrase": "lärarassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "larare",
        "name": "Lärare",
        "searchPhrase": "lärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/images/professions/skola.png"
    },
    {
        "slug": "mellanstadielarare",
        "name": "Mellanstadielärare",
        "searchPhrase": "mellanstadielärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "montessorilarare",
        "name": "Montessorilärare",
        "searchPhrase": "montessorilärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "museipedagog",
        "name": "Museipedagog",
        "searchPhrase": "museipedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "musikledare",
        "name": "Musikledare",
        "searchPhrase": "musikledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "musiklarare",
        "name": "Musiklärare",
        "searchPhrase": "musiklärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pedagogista",
        "name": "Pedagogista",
        "searchPhrase": "pedagogista a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "professor",
        "name": "Professor",
        "searchPhrase": "professor a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "rektor",
        "name": "Rektor",
        "searchPhrase": "rektor a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "resurspedagog",
        "name": "Resurspedagog",
        "searchPhrase": "resurspedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ridinstruktor",
        "name": "Ridinstruktör",
        "searchPhrase": "ridinstruktör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ridlarare",
        "name": "Ridlärare",
        "searchPhrase": "ridlärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "rattsvetare",
        "name": "Rättsvetare",
        "searchPhrase": "rättsvetare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sfi-larare",
        "name": "SFI-lärare",
        "searchPhrase": "sfi-lärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "simlarare",
        "name": "Simlärare",
        "searchPhrase": "simlärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skidlarare",
        "name": "Skidlärare",
        "searchPhrase": "skidlärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skolassistent",
        "name": "Skolassistent",
        "searchPhrase": "skolassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skolintendent",
        "name": "Skolintendent",
        "searchPhrase": "skolintendent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skolsekreterare",
        "name": "Skolsekreterare",
        "searchPhrase": "skolsekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "slojdlarare",
        "name": "Slöjdlärare",
        "searchPhrase": "slöjdlärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "socialantropolog",
        "name": "Socialantropolog",
        "searchPhrase": "socialantropolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "speciallarare",
        "name": "Speciallärare",
        "searchPhrase": "speciallärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "specialpedagog",
        "name": "Specialpedagog",
        "searchPhrase": "specialpedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "spraklarare",
        "name": "Språklärare",
        "searchPhrase": "språklärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sprakstodjare",
        "name": "Språkstödjare",
        "searchPhrase": "språkstödjare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "statistiker",
        "name": "Statistiker",
        "searchPhrase": "statistiker a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "studieadministrator",
        "name": "Studieadministratör",
        "searchPhrase": "studieadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "studiehandledare",
        "name": "Studiehandledare",
        "searchPhrase": "studiehandledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "studiekonsulent",
        "name": "Studiekonsulent",
        "searchPhrase": "studiekonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "studievagledare",
        "name": "Studievägledare",
        "searchPhrase": "studievägledare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "syokonsulent",
        "name": "Syokonsulent",
        "searchPhrase": "syokonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sangpedagog",
        "name": "Sångpedagog",
        "searchPhrase": "sångpedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "talpedagog",
        "name": "Talpedagog",
        "searchPhrase": "talpedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teaterpedagog",
        "name": "Teaterpedagog",
        "searchPhrase": "teaterpedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "trafiklarare",
        "name": "Trafiklärare",
        "searchPhrase": "trafiklärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ungdomscoach",
        "name": "Ungdomscoach",
        "searchPhrase": "ungdomscoach a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ungdomskonsulent",
        "name": "Ungdomskonsulent",
        "searchPhrase": "ungdomskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "universitetsadjunkt",
        "name": "Universitetsadjunkt",
        "searchPhrase": "universitetsadjunkt a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "universitetslektor",
        "name": "Universitetslektor",
        "searchPhrase": "universitetslektor a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utbildningsadministrator",
        "name": "Utbildningsadministratör",
        "searchPhrase": "utbildningsadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utbildningskonsult",
        "name": "Utbildningskonsult",
        "searchPhrase": "utbildningskonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utbildningsledare",
        "name": "Utbildningsledare",
        "searchPhrase": "utbildningsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utbildningssekreterare",
        "name": "Utbildningssekreterare",
        "searchPhrase": "utbildningssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "yrkeslarare",
        "name": "Yrkeslärare",
        "searchPhrase": "yrkeslärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "yrkesvagledare",
        "name": "Yrkesvägledare",
        "searchPhrase": "yrkesvägledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tentamensvakt",
        "name": "Tentamensvakt",
        "searchPhrase": "tentamensvakt a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tentamensvard",
        "name": "Tentamensvärd",
        "searchPhrase": "tentamensvärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lararvikarie",
        "name": "Lärarvikarie",
        "searchPhrase": "lärarvikarie a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skolchef",
        "name": "Skolchef",
        "searchPhrase": "skolchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "heltidsmentor",
        "name": "Heltidsmentor",
        "searchPhrase": "heltidsmentor a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "internlarare",
        "name": "Internlärare",
        "searchPhrase": "internlärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utbildningsutvecklare",
        "name": "Utbildningsutvecklare",
        "searchPhrase": "utbildningsutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "naturskolepedagog",
        "name": "Naturskolepedagog",
        "searchPhrase": "naturskolepedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "modersmalslarare",
        "name": "Modersmålslärare",
        "searchPhrase": "modersmålslärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "studiepedagog",
        "name": "Studiepedagog",
        "searchPhrase": "studiepedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forskoletekniker",
        "name": "Förskoletekniker",
        "searchPhrase": "förskoletekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skoltekniker",
        "name": "Skoltekniker",
        "searchPhrase": "skoltekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ellarare",
        "name": "Ellärare",
        "searchPhrase": "ellärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "amneslarare",
        "name": "Ämneslärare",
        "searchPhrase": "ämneslärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kulturskollarare",
        "name": "Kulturskollärare",
        "searchPhrase": "kulturskollärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "universitetslarare",
        "name": "Universitetslärare",
        "searchPhrase": "universitetslärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "studieforbundslarare",
        "name": "Studieförbundslärare",
        "searchPhrase": "studieförbundslärare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "klassmentor",
        "name": "Klassmentor",
        "searchPhrase": "klassmentor a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forskolevikarie",
        "name": "Förskolevikarie",
        "searchPhrase": "förskolevikarie a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hogskoleadjunkt",
        "name": "Högskoleadjunkt",
        "searchPhrase": "högskoleadjunkt a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sprakutvecklare",
        "name": "Språkutvecklare",
        "searchPhrase": "språkutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "studie--och-yrkesvagledare",
        "name": "Studie- och yrkesvägledare",
        "searchPhrase": "studie- och yrkesvägledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "aktivitetspedagog",
        "name": "Aktivitetspedagog",
        "searchPhrase": "aktivitetspedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "antagningsansvarig",
        "name": "Antagningsansvarig",
        "searchPhrase": "antagningsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "antagningsassistent",
        "name": "Antagningsassistent",
        "searchPhrase": "antagningsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "antagningschef",
        "name": "Antagningschef",
        "searchPhrase": "antagningschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "antagningssekreterare",
        "name": "Antagningssekreterare",
        "searchPhrase": "antagningssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsvagledare",
        "name": "Arbetsvägledare",
        "searchPhrase": "arbetsvägledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "autismpedagog",
        "name": "Autismpedagog",
        "searchPhrase": "autismpedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barn--och-utbildningschef",
        "name": "Barn- och utbildningschef",
        "searchPhrase": "barn- och utbildningschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barnpedagog",
        "name": "Barnpedagog",
        "searchPhrase": "barnpedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barnstugeassistent",
        "name": "Barnstugeassistent",
        "searchPhrase": "barnstugeassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "beteendepedagog",
        "name": "Beteendepedagog",
        "searchPhrase": "beteendepedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "datapedagog",
        "name": "Datapedagog",
        "searchPhrase": "datapedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "datautbildare",
        "name": "Datautbildare",
        "searchPhrase": "datautbildare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dyslexikonsulent",
        "name": "Dyslexikonsulent",
        "searchPhrase": "dyslexikonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gitarrpedagog",
        "name": "Gitarrpedagog",
        "searchPhrase": "gitarrpedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "grundskolechef",
        "name": "Grundskolechef",
        "searchPhrase": "grundskolechef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gymnasiepedagog",
        "name": "Gymnasiepedagog",
        "searchPhrase": "gymnasiepedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kursansvarig",
        "name": "Kursansvarig",
        "searchPhrase": "kursansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kursassistent",
        "name": "Kursassistent",
        "searchPhrase": "kursassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kursforestandare",
        "name": "Kursföreståndare",
        "searchPhrase": "kursföreståndare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kurssekreterare",
        "name": "Kurssekreterare",
        "searchPhrase": "kurssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lararbehorighetskontrollant",
        "name": "Lärarbehörighetskontrollant",
        "searchPhrase": "lärarbehörighetskontrollant a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lararbitrade",
        "name": "Lärarbiträde",
        "searchPhrase": "lärarbiträde a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lararcoach",
        "name": "Lärarcoach",
        "searchPhrase": "lärarcoach a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lararformedlare",
        "name": "Lärarförmedlare",
        "searchPhrase": "lärarförmedlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lararhandledare",
        "name": "Lärarhandledare",
        "searchPhrase": "lärarhandledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lararkoordinator",
        "name": "Lärarkoordinator",
        "searchPhrase": "lärarkoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lararlots",
        "name": "Lärarlots",
        "searchPhrase": "lärarlots a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lararresurs",
        "name": "Lärarresurs",
        "searchPhrase": "lärarresurs a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lararsamordnare",
        "name": "Lärarsamordnare",
        "searchPhrase": "lärarsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lararsekreterare",
        "name": "Lärarsekreterare",
        "searchPhrase": "lärarsekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lararstodjare",
        "name": "Lärarstödjare",
        "searchPhrase": "lärarstödjare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "larartjansteman",
        "name": "Lärartjänsteman",
        "searchPhrase": "lärartjänsteman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lararutbildare",
        "name": "Lärarutbildare",
        "searchPhrase": "lärarutbildare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "laromedelsadministrator",
        "name": "Läromedelsadministratör",
        "searchPhrase": "läromedelsadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "laromedelsansvarig",
        "name": "Läromedelsansvarig",
        "searchPhrase": "läromedelsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "laromedelsassistent",
        "name": "Läromedelsassistent",
        "searchPhrase": "läromedelsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "laromedelsdesigner",
        "name": "Läromedelsdesigner",
        "searchPhrase": "läromedelsdesigner a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "laromedelsforestandare",
        "name": "Läromedelsföreståndare",
        "searchPhrase": "läromedelsföreståndare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "laromedelsforfattare",
        "name": "Läromedelsförfattare",
        "searchPhrase": "läromedelsförfattare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "laromedelsingenjor",
        "name": "Läromedelsingenjör",
        "searchPhrase": "läromedelsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "laromedelskoordinator",
        "name": "Läromedelskoordinator",
        "searchPhrase": "läromedelskoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "laromedelspedagog",
        "name": "Läromedelspedagog",
        "searchPhrase": "läromedelspedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "laromedelsproducent",
        "name": "Läromedelsproducent",
        "searchPhrase": "läromedelsproducent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "laromedelsspecialist",
        "name": "Läromedelsspecialist",
        "searchPhrase": "läromedelsspecialist a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "laromedelssaljare",
        "name": "Läromedelssäljare",
        "searchPhrase": "läromedelssäljare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "laromedelsutvecklare",
        "name": "Läromedelsutvecklare",
        "searchPhrase": "läromedelsutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "las--och-skrivkonsulent",
        "name": "Läs- och skrivkonsulent",
        "searchPhrase": "läs- och skrivkonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "las--och-skrivpedagog",
        "name": "Läs- och skrivpedagog",
        "searchPhrase": "läs- och skrivpedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "las--och-skrivstodjare",
        "name": "Läs- och skrivstödjare",
        "searchPhrase": "läs- och skrivstödjare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "laslustansvarig",
        "name": "Läslustansvarig",
        "searchPhrase": "läslustansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lasombudsman",
        "name": "Läsombudsman",
        "searchPhrase": "läsombudsman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "laspedagog",
        "name": "Läspedagog",
        "searchPhrase": "läspedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lasvagledare",
        "name": "Läsvägledare",
        "searchPhrase": "läsvägledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "laxhjalpare",
        "name": "Läxhjälpare",
        "searchPhrase": "läxhjälpare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "laxpedagog",
        "name": "Läxpedagog",
        "searchPhrase": "läxpedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "magister",
        "name": "Magister",
        "searchPhrase": "magister a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mentor",
        "name": "Mentor",
        "searchPhrase": "mentor a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pedagog",
        "name": "Pedagog",
        "searchPhrase": "pedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pedagogansvarig",
        "name": "Pedagogansvarig",
        "searchPhrase": "pedagogansvarig a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pedagogassistent",
        "name": "Pedagogassistent",
        "searchPhrase": "pedagogassistent a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pedagogchef",
        "name": "Pedagogchef",
        "searchPhrase": "pedagogchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pedagoghandledare",
        "name": "Pedagoghandledare",
        "searchPhrase": "pedagoghandledare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pedagogikansvarig",
        "name": "Pedagogikansvarig",
        "searchPhrase": "pedagogikansvarig a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pedagogikkoordinator",
        "name": "Pedagogikkoordinator",
        "searchPhrase": "pedagogikkoordinator a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pedagogiksamordnare",
        "name": "Pedagogiksamordnare",
        "searchPhrase": "pedagogiksamordnare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pedagogikstrateg",
        "name": "Pedagogikstrateg",
        "searchPhrase": "pedagogikstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pedagogikstodjare",
        "name": "Pedagogikstödjare",
        "searchPhrase": "pedagogikstödjare a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skolbibliotekarie",
        "name": "Skolbibliotekarie",
        "searchPhrase": "skolbibliotekarie a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skolkanslist",
        "name": "Skolkanslist",
        "searchPhrase": "skolkanslist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skolledare",
        "name": "Skolledare",
        "searchPhrase": "skolledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skolmaltidsansvarig",
        "name": "Skolmåltidsansvarig",
        "searchPhrase": "skolmåltidsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skolplanerare",
        "name": "Skolplanerare",
        "searchPhrase": "skolplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skolsamordnare",
        "name": "Skolsamordnare",
        "searchPhrase": "skolsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skolskjutshandlaggare",
        "name": "Skolskjutshandläggare",
        "searchPhrase": "skolskjutshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skolskjutsplanerare",
        "name": "Skolskjutsplanerare",
        "searchPhrase": "skolskjutsplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skolskjutsstrateg",
        "name": "Skolskjutsstrateg",
        "searchPhrase": "skolskjutsstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "studieassistent",
        "name": "Studieassistent",
        "searchPhrase": "studieassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "studieledare",
        "name": "Studieledare",
        "searchPhrase": "studieledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "studieradgivare",
        "name": "Studierådgivare",
        "searchPhrase": "studierådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "studiesamordnare",
        "name": "Studiesamordnare",
        "searchPhrase": "studiesamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "studiesekreterare",
        "name": "Studiesekreterare",
        "searchPhrase": "studiesekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "studiestodshandlaggare",
        "name": "Studiestödshandläggare",
        "searchPhrase": "studiestödshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utbildare",
        "name": "Utbildare",
        "searchPhrase": "utbildare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utbildningsansvarig",
        "name": "Utbildningsansvarig",
        "searchPhrase": "utbildningsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utbildningsassistent",
        "name": "Utbildningsassistent",
        "searchPhrase": "utbildningsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utbildningschef",
        "name": "Utbildningschef",
        "searchPhrase": "utbildningschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utbildningskonsulent",
        "name": "Utbildningskonsulent",
        "searchPhrase": "utbildningskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utbildningskoordinator",
        "name": "Utbildningskoordinator",
        "searchPhrase": "utbildningskoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utbildningsstrateg",
        "name": "Utbildningsstrateg",
        "searchPhrase": "utbildningsstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vikarieformedlare",
        "name": "Vikarieförmedlare",
        "searchPhrase": "vikarieförmedlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vikariekonsult",
        "name": "Vikariekonsult",
        "searchPhrase": "vikariekonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vikarieresurs",
        "name": "Vikarieresurs",
        "searchPhrase": "vikarieresurs a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vagledare",
        "name": "Vägledare",
        "searchPhrase": "vägledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "yrkesinformator",
        "name": "Yrkesinformatör",
        "searchPhrase": "yrkesinformatör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "filmpedagog",
        "name": "Filmpedagog",
        "searchPhrase": "filmpedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "anhorigkonsulent",
        "name": "Anhörigkonsulent",
        "searchPhrase": "anhörigkonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetscoach",
        "name": "Arbetscoach",
        "searchPhrase": "arbetscoach a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsmarknadskonsulent",
        "name": "Arbetsmarknadskonsulent",
        "searchPhrase": "arbetsmarknadskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "au-pair",
        "name": "Au pair",
        "searchPhrase": "au pair a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barnflicka",
        "name": "Barnflicka",
        "searchPhrase": "barnflicka a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barnskotare",
        "name": "Barnskötare",
        "searchPhrase": "barnskötare a-kassa",
        "recommendedAkassaId": "kommunal",
        "image": "/images/professions/skola.png"
    },
    {
        "slug": "begravningsentreprenor",
        "name": "Begravningsentreprenör",
        "searchPhrase": "begravningsentreprenör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "behandlingsassistent",
        "name": "Behandlingsassistent",
        "searchPhrase": "behandlingsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "behandlingspedagog",
        "name": "Behandlingspedagog",
        "searchPhrase": "behandlingspedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "behandlingssekreterare",
        "name": "Behandlingssekreterare",
        "searchPhrase": "behandlingssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "beteendevetare",
        "name": "Beteendevetare",
        "searchPhrase": "beteendevetare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bistandsbedomare",
        "name": "Biståndsbedömare",
        "searchPhrase": "biståndsbedömare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bistandshandlaggare",
        "name": "Biståndshandläggare",
        "searchPhrase": "biståndshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "boendepedagog",
        "name": "Boendepedagog",
        "searchPhrase": "boendepedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "chefskurator",
        "name": "Chefskurator",
        "searchPhrase": "chefskurator a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "delgivare",
        "name": "Delgivare",
        "searchPhrase": "delgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "departementssekreterare",
        "name": "Departementssekreterare",
        "searchPhrase": "departementssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "diplomat",
        "name": "Diplomat",
        "searchPhrase": "diplomat a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dovtolk",
        "name": "Dövtolk",
        "searchPhrase": "dövtolk a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "elevassistent",
        "name": "Elevassistent",
        "searchPhrase": "elevassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "familjebehandlare",
        "name": "Familjebehandlare",
        "searchPhrase": "familjebehandlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "familjehemssekreterare",
        "name": "Familjehemssekreterare",
        "searchPhrase": "familjehemssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "familjepedagog",
        "name": "Familjepedagog",
        "searchPhrase": "familjepedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "familjeradgivare",
        "name": "Familjerådgivare",
        "searchPhrase": "familjerådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "familjevardsinspektor",
        "name": "Familjevårdsinspektör",
        "searchPhrase": "familjevårdsinspektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "flyktinghandlaggare",
        "name": "Flyktinghandläggare",
        "searchPhrase": "flyktinghandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "flyktingsamordnare",
        "name": "Flyktingsamordnare",
        "searchPhrase": "flyktingsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "folkhalsovetare",
        "name": "Folkhälsovetare",
        "searchPhrase": "folkhälsovetare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fritidsledare",
        "name": "Fritidsledare",
        "searchPhrase": "fritidsledare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "frivardsinspektor",
        "name": "Frivårdsinspektör",
        "searchPhrase": "frivårdsinspektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "faltassistent",
        "name": "Fältassistent",
        "searchPhrase": "fältassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "faltsekreterare",
        "name": "Fältsekreterare",
        "searchPhrase": "fältsekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forestandare",
        "name": "Föreståndare",
        "searchPhrase": "föreståndare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fortroendevald",
        "name": "Förtroendevald",
        "searchPhrase": "förtroendevald a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "habiliteringsassistent",
        "name": "Habiliteringsassistent",
        "searchPhrase": "habiliteringsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "habiliteringspedagog",
        "name": "Habiliteringspedagog",
        "searchPhrase": "habiliteringspedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "handledare",
        "name": "Handledare",
        "searchPhrase": "handledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "integrationspedagog",
        "name": "Integrationspedagog",
        "searchPhrase": "integrationspedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "karriarcoach",
        "name": "Karriärcoach",
        "searchPhrase": "karriärcoach a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kbt-terapeut",
        "name": "KBT-terapeut",
        "searchPhrase": "kbt-terapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kontakttolk",
        "name": "Kontakttolk",
        "searchPhrase": "kontakttolk a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kriminalvardare",
        "name": "Kriminalvårdare",
        "searchPhrase": "kriminalvårdare a-kassa",
        "recommendedAkassaId": "seko",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "kurator",
        "name": "Kurator",
        "searchPhrase": "kurator a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kvinnojoursarbetare",
        "name": "Kvinnojoursarbetare",
        "searchPhrase": "kvinnojoursarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kyrkvard",
        "name": "Kyrkvärd",
        "searchPhrase": "kyrkvärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ledsagare",
        "name": "Ledsagare",
        "searchPhrase": "ledsagare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mst-terapeut",
        "name": "MST-terapeut",
        "searchPhrase": "mst-terapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "omsorgsassistent",
        "name": "Omsorgsassistent",
        "searchPhrase": "omsorgsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "omsorgspedagog",
        "name": "Omsorgspedagog",
        "searchPhrase": "omsorgspedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "personlig-assistent",
        "name": "Personlig assistent",
        "searchPhrase": "personlig assistent a-kassa",
        "recommendedAkassaId": "kommunal",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "personligt-ombud",
        "name": "Personligt ombud",
        "searchPhrase": "personligt ombud a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "samtalsterapeut",
        "name": "Samtalsterapeut",
        "searchPhrase": "samtalsterapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skolkurator",
        "name": "Skolkurator",
        "searchPhrase": "skolkurator a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "skolvard",
        "name": "Skolvärd",
        "searchPhrase": "skolvärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "socialkonsulent",
        "name": "Socialkonsulent",
        "searchPhrase": "socialkonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "socialpedagog",
        "name": "Socialpedagog",
        "searchPhrase": "socialpedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "socialsekreterare",
        "name": "Socialsekreterare",
        "searchPhrase": "socialsekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "socialterapeut",
        "name": "Socialterapeut",
        "searchPhrase": "socialterapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "socionom",
        "name": "Socionom",
        "searchPhrase": "socionom a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "statsvetare",
        "name": "Statsvetare",
        "searchPhrase": "statsvetare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "stodassistent",
        "name": "Stödassistent",
        "searchPhrase": "stödassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "stodpedagog",
        "name": "Stödpedagog",
        "searchPhrase": "stödpedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "stodperson",
        "name": "Stödperson",
        "searchPhrase": "stödperson a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "teckensprakstolk",
        "name": "Teckenspråkstolk",
        "searchPhrase": "teckenspråkstolk a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ungdomsledare",
        "name": "Ungdomsledare",
        "searchPhrase": "ungdomsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ungdomspedagog",
        "name": "Ungdomspedagog",
        "searchPhrase": "ungdomspedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "verksamhetspedagog",
        "name": "Verksamhetspedagog",
        "searchPhrase": "verksamhetspedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "aldrepedagog",
        "name": "Äldrepedagog",
        "searchPhrase": "äldrepedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "overformyndare",
        "name": "Överförmyndare",
        "searchPhrase": "överförmyndare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "overvakare",
        "name": "Övervakare",
        "searchPhrase": "övervakare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "badvakt",
        "name": "Badvakt",
        "searchPhrase": "badvakt a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "badmastare",
        "name": "Badmästare",
        "searchPhrase": "badmästare a-kassa",
        "recommendedAkassaId": "kommunal",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "elevstodjare",
        "name": "Elevstödjare",
        "searchPhrase": "elevstödjare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barnvakt",
        "name": "Barnvakt",
        "searchPhrase": "barnvakt a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "nanny",
        "name": "Nanny",
        "searchPhrase": "nanny a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "alkoholkonsulent",
        "name": "Alkoholkonsulent",
        "searchPhrase": "alkoholkonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barntimmeledare",
        "name": "Barntimmeledare",
        "searchPhrase": "barntimmeledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "case-manager",
        "name": "Case manager",
        "searchPhrase": "case manager a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "avlosare",
        "name": "Avlösare",
        "searchPhrase": "avlösare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetshandledare",
        "name": "Arbetshandledare",
        "searchPhrase": "arbetshandledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "trygghetsvard",
        "name": "Trygghetsvärd",
        "searchPhrase": "trygghetsvärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "foreningsutvecklare",
        "name": "Föreningsutvecklare",
        "searchPhrase": "föreningsutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forvarshandledare",
        "name": "Förvarshandledare",
        "searchPhrase": "förvarshandledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "begravningsradgivare",
        "name": "Begravningsrådgivare",
        "searchPhrase": "begravningsrådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "elevsamordnare",
        "name": "Elevsamordnare",
        "searchPhrase": "elevsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "familjehemskonsulent",
        "name": "Familjehemskonsulent",
        "searchPhrase": "familjehemskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "aktiveringssamordnare",
        "name": "Aktiveringssamordnare",
        "searchPhrase": "aktiveringssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "akutrekryterare",
        "name": "Akutrekryterare",
        "searchPhrase": "akutrekryterare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "anhorig--och-frivilligsamordnare",
        "name": "Anhörig- och frivilligsamordnare",
        "searchPhrase": "anhörig- och frivilligsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "anhorig--och-aldrekonsulent",
        "name": "Anhörig- och äldrekonsulent",
        "searchPhrase": "anhörig- och äldrekonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "anhorigkonsult",
        "name": "Anhörigkonsult",
        "searchPhrase": "anhörigkonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "anhorigombud",
        "name": "Anhörigombud",
        "searchPhrase": "anhörigombud a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "anhorigradgivare",
        "name": "Anhörigrådgivare",
        "searchPhrase": "anhörigrådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "anhorigsamarit",
        "name": "Anhörigsamarit",
        "searchPhrase": "anhörigsamarit a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "anhorigstodjare",
        "name": "Anhörigstödjare",
        "searchPhrase": "anhörigstödjare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsanskaffare",
        "name": "Arbetsanskaffare",
        "searchPhrase": "arbetsanskaffare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsbitrade",
        "name": "Arbetsbiträde",
        "searchPhrase": "arbetsbiträde a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetsinstruktor",
        "name": "Arbetsinstruktör",
        "searchPhrase": "arbetsinstruktör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetskonsult",
        "name": "Arbetskonsult",
        "searchPhrase": "arbetskonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetslivskonsulent",
        "name": "Arbetslivskonsulent",
        "searchPhrase": "arbetslivskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetslivskonsult",
        "name": "Arbetslivskonsult",
        "searchPhrase": "arbetslivskonsult a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "arbetslivssekreterare",
        "name": "Arbetslivssekreterare",
        "searchPhrase": "arbetslivssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "assistanssamordnare",
        "name": "Assistanssamordnare",
        "searchPhrase": "assistanssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barn--och-familjepastor",
        "name": "Barn- och familjepastor",
        "searchPhrase": "barn- och familjepastor a-kassa",
        "recommendedAkassaId": "vision",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barn--och-ungdomsbehandlare",
        "name": "Barn- och ungdomsbehandlare",
        "searchPhrase": "barn- och ungdomsbehandlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barn--och-ungdomskonsulent",
        "name": "Barn- och ungdomskonsulent",
        "searchPhrase": "barn- och ungdomskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barn--och-ungdomsledare",
        "name": "Barn- och ungdomsledare",
        "searchPhrase": "barn- och ungdomsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barn--och-ungdomspedagog",
        "name": "Barn- och ungdomspedagog",
        "searchPhrase": "barn- och ungdomspedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barn--och-ungdomssamordnare",
        "name": "Barn- och ungdomssamordnare",
        "searchPhrase": "barn- och ungdomssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barn--och-ungdomssekreterare",
        "name": "Barn- och ungdomssekreterare",
        "searchPhrase": "barn- och ungdomssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barnhandlaggare",
        "name": "Barnhandläggare",
        "searchPhrase": "barnhandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barnledare",
        "name": "Barnledare",
        "searchPhrase": "barnledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barnombudsman",
        "name": "Barnombudsman",
        "searchPhrase": "barnombudsman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barnomsorghandlaggare",
        "name": "Barnomsorghandläggare",
        "searchPhrase": "barnomsorghandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barnomsorgsadministrator",
        "name": "Barnomsorgsadministratör",
        "searchPhrase": "barnomsorgsadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barnomsorgsansvarig",
        "name": "Barnomsorgsansvarig",
        "searchPhrase": "barnomsorgsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barnomsorgsassistent",
        "name": "Barnomsorgsassistent",
        "searchPhrase": "barnomsorgsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "barnomsorgssekreterare",
        "name": "Barnomsorgssekreterare",
        "searchPhrase": "barnomsorgssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bistandsassistent",
        "name": "Biståndsassistent",
        "searchPhrase": "biståndsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bistandschef",
        "name": "Biståndschef",
        "searchPhrase": "biståndschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bistandsutredare",
        "name": "Biståndsutredare",
        "searchPhrase": "biståndsutredare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "boendeansvarig",
        "name": "Boendeansvarig",
        "searchPhrase": "boendeansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "boendechef",
        "name": "Boendechef",
        "searchPhrase": "boendechef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "boendecoach",
        "name": "Boendecoach",
        "searchPhrase": "boendecoach a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "boendeforestandare",
        "name": "Boendeföreståndare",
        "searchPhrase": "boendeföreståndare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "boendeformedlare",
        "name": "Boendeförmedlare",
        "searchPhrase": "boendeförmedlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "boendehandlaggare",
        "name": "Boendehandläggare",
        "searchPhrase": "boendehandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "boendekonsulent",
        "name": "Boendekonsulent",
        "searchPhrase": "boendekonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "boendekoordinator",
        "name": "Boendekoordinator",
        "searchPhrase": "boendekoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "boendelots",
        "name": "Boendelots",
        "searchPhrase": "boendelots a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "boendesamordnare",
        "name": "Boendesamordnare",
        "searchPhrase": "boendesamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "boendesekreterare",
        "name": "Boendesekreterare",
        "searchPhrase": "boendesekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "centralplanerare",
        "name": "Centralplanerare",
        "searchPhrase": "centralplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "coach",
        "name": "Coach",
        "searchPhrase": "coach a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "etableringslots",
        "name": "Etableringslots",
        "searchPhrase": "etableringslots a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "familje--och-natverksbehandlare",
        "name": "Familje- och nätverksbehandlare",
        "searchPhrase": "familje- och nätverksbehandlare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "familjeassistent",
        "name": "Familjeassistent",
        "searchPhrase": "familjeassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "familjehandledare",
        "name": "Familjehandledare",
        "searchPhrase": "familjehandledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "familjehemsassistent",
        "name": "Familjehemsassistent",
        "searchPhrase": "familjehemsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "familjekonsulent",
        "name": "Familjekonsulent",
        "searchPhrase": "familjekonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "familjerattsassistent",
        "name": "Familjerättsassistent",
        "searchPhrase": "familjerättsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "familjerattshandlaggare",
        "name": "Familjerättshandläggare",
        "searchPhrase": "familjerättshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "familjerattssekreterare",
        "name": "Familjerättssekreterare",
        "searchPhrase": "familjerättssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "familjestodjare",
        "name": "Familjestödjare",
        "searchPhrase": "familjestödjare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "familjeutredare",
        "name": "Familjeutredare",
        "searchPhrase": "familjeutredare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "familjevardskonsulent",
        "name": "Familjevårdskonsulent",
        "searchPhrase": "familjevårdskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "familjevardssekreterare",
        "name": "Familjevårdssekreterare",
        "searchPhrase": "familjevårdssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "flyktingassistent",
        "name": "Flyktingassistent",
        "searchPhrase": "flyktingassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "flyktingkonsulent",
        "name": "Flyktingkonsulent",
        "searchPhrase": "flyktingkonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "flyktingmottagare",
        "name": "Flyktingmottagare",
        "searchPhrase": "flyktingmottagare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "flyktingpedagog",
        "name": "Flyktingpedagog",
        "searchPhrase": "flyktingpedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "flyktingsekreterare",
        "name": "Flyktingsekreterare",
        "searchPhrase": "flyktingsekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fritidschef",
        "name": "Fritidschef",
        "searchPhrase": "fritidschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fritidsgardschef",
        "name": "Fritidsgårdschef",
        "searchPhrase": "fritidsgårdschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fritidsgardssamordnare",
        "name": "Fritidsgårdssamordnare",
        "searchPhrase": "fritidsgårdssamordnare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fritidskonsulent",
        "name": "Fritidskonsulent",
        "searchPhrase": "fritidskonsulent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fritidssamordnare",
        "name": "Fritidssamordnare",
        "searchPhrase": "fritidssamordnare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fritidstekniker",
        "name": "Fritidstekniker",
        "searchPhrase": "fritidstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "frivilligsamordnare",
        "name": "Frivilligsamordnare",
        "searchPhrase": "frivilligsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "faltarbetare",
        "name": "Fältarbetare",
        "searchPhrase": "fältarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "faltpedagog",
        "name": "Fältpedagog",
        "searchPhrase": "fältpedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "faltsamordnare",
        "name": "Fältsamordnare",
        "searchPhrase": "fältsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "foreningsansvarig",
        "name": "Föreningsansvarig",
        "searchPhrase": "föreningsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "foreningsassistent",
        "name": "Föreningsassistent",
        "searchPhrase": "föreningsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "foreningschef",
        "name": "Föreningschef",
        "searchPhrase": "föreningschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "foreningshandlaggare",
        "name": "Föreningshandläggare",
        "searchPhrase": "föreningshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "foreningssamordnare",
        "name": "Föreningssamordnare",
        "searchPhrase": "föreningssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "formedlingsassistent",
        "name": "Förmedlingsassistent",
        "searchPhrase": "förmedlingsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gardsforestandare",
        "name": "Gårdsföreståndare",
        "searchPhrase": "gårdsföreståndare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hallforestandare",
        "name": "Hallföreståndare",
        "searchPhrase": "hallföreståndare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "handikapphandlaggare",
        "name": "Handikapphandläggare",
        "searchPhrase": "handikapphandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "handledarassistent",
        "name": "Handledarassistent",
        "searchPhrase": "handledarassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "handlaggarassistent",
        "name": "Handläggarassistent",
        "searchPhrase": "handläggarassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hr-ansvarig",
        "name": "HR-ansvarig",
        "searchPhrase": "hr-ansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hr-partner",
        "name": "HR-partner",
        "searchPhrase": "hr-partner a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hr-strateg",
        "name": "HR-strateg",
        "searchPhrase": "hr-strateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "hr-utvecklare",
        "name": "HR-utvecklare",
        "searchPhrase": "hr-utvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "idrotts--och-fritidschef",
        "name": "Idrotts- och fritidschef",
        "searchPhrase": "idrotts- och fritidschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "idrottsassistent",
        "name": "Idrottsassistent",
        "searchPhrase": "idrottsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "idrottskonsulent",
        "name": "Idrottskonsulent",
        "searchPhrase": "idrottskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "idrottsledare",
        "name": "Idrottsledare",
        "searchPhrase": "idrottsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "integrationsansvarig",
        "name": "Integrationsansvarig",
        "searchPhrase": "integrationsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "integrationsassistent",
        "name": "Integrationsassistent",
        "searchPhrase": "integrationsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "integrationschef",
        "name": "Integrationschef",
        "searchPhrase": "integrationschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "integrationshandledare",
        "name": "Integrationshandledare",
        "searchPhrase": "integrationshandledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "integrationskonsulent",
        "name": "Integrationskonsulent",
        "searchPhrase": "integrationskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "integrationsledare",
        "name": "Integrationsledare",
        "searchPhrase": "integrationsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "integrationssamordnare",
        "name": "Integrationssamordnare",
        "searchPhrase": "integrationssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "konsumentradgivare",
        "name": "Konsumentrådgivare",
        "searchPhrase": "konsumentrådgivare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "konsumentsamordnare",
        "name": "Konsumentsamordnare",
        "searchPhrase": "konsumentsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lss-assistent",
        "name": "LSS-assistent",
        "searchPhrase": "lss-assistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lss-chef",
        "name": "LSS-chef",
        "searchPhrase": "lss-chef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lss-handlaggare",
        "name": "LSS-handläggare",
        "searchPhrase": "lss-handläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lss-koordinator",
        "name": "LSS-koordinator",
        "searchPhrase": "lss-koordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lss-samordnare",
        "name": "LSS-samordnare",
        "searchPhrase": "lss-samordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "matchare",
        "name": "Matchare",
        "searchPhrase": "matchare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medlemsadministrator",
        "name": "Medlemsadministratör",
        "searchPhrase": "medlemsadministratör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medlemsansvarig",
        "name": "Medlemsansvarig",
        "searchPhrase": "medlemsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medlemsassistent",
        "name": "Medlemsassistent",
        "searchPhrase": "medlemsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medlemschef",
        "name": "Medlemschef",
        "searchPhrase": "medlemschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medlemsforvaltare",
        "name": "Medlemsförvaltare",
        "searchPhrase": "medlemsförvaltare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medlemshandlaggare",
        "name": "Medlemshandläggare",
        "searchPhrase": "medlemshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medlemskoordinator",
        "name": "Medlemskoordinator",
        "searchPhrase": "medlemskoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medlemssamordnare",
        "name": "Medlemssamordnare",
        "searchPhrase": "medlemssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "medlemssupport",
        "name": "Medlemssupport",
        "searchPhrase": "medlemssupport a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "metodassistent",
        "name": "Metodassistent",
        "searchPhrase": "metodassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "metodchef",
        "name": "Metodchef",
        "searchPhrase": "metodchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "metodcoach",
        "name": "Metodcoach",
        "searchPhrase": "metodcoach a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "metodhandledare",
        "name": "Metodhandledare",
        "searchPhrase": "metodhandledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "metodinspektor",
        "name": "Metodinspektör",
        "searchPhrase": "metodinspektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "metodkonsulent",
        "name": "Metodkonsulent",
        "searchPhrase": "metodkonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "metodledare",
        "name": "Metodledare",
        "searchPhrase": "metodledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "metodolog",
        "name": "Metodolog",
        "searchPhrase": "metodolog a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "metodsamordnare",
        "name": "Metodsamordnare",
        "searchPhrase": "metodsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "metodstrateg",
        "name": "Metodstrateg",
        "searchPhrase": "metodstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "migrantkoordinator",
        "name": "Migrantkoordinator",
        "searchPhrase": "migrantkoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "missbrukshandlaggare",
        "name": "Missbrukshandläggare",
        "searchPhrase": "missbrukshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "missbrukskonsulent",
        "name": "Missbrukskonsulent",
        "searchPhrase": "missbrukskonsulent a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "missbrukspedagog",
        "name": "Missbrukspedagog",
        "searchPhrase": "missbrukspedagog a-kassa",
        "recommendedAkassaId": "la",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "missbrukssamordnare",
        "name": "Missbrukssamordnare",
        "searchPhrase": "missbrukssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "missbruksterapeut",
        "name": "Missbruksterapeut",
        "searchPhrase": "missbruksterapeut a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "poolansvarig",
        "name": "Poolansvarig",
        "searchPhrase": "poolansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "poolkoordinator",
        "name": "Poolkoordinator",
        "searchPhrase": "poolkoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "poolsamordnare",
        "name": "Poolsamordnare",
        "searchPhrase": "poolsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "preventionssamordnare",
        "name": "Preventionssamordnare",
        "searchPhrase": "preventionssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ungdomsansvarig",
        "name": "Ungdomsansvarig",
        "searchPhrase": "ungdomsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ungdomsassistent",
        "name": "Ungdomsassistent",
        "searchPhrase": "ungdomsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ungdomssamordnare",
        "name": "Ungdomssamordnare",
        "searchPhrase": "ungdomssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ungdomssekreterare",
        "name": "Ungdomssekreterare",
        "searchPhrase": "ungdomssekreterare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ungdomsutvecklare",
        "name": "Ungdomsutvecklare",
        "searchPhrase": "ungdomsutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "volontaransvarig",
        "name": "Volontäransvarig",
        "searchPhrase": "volontäransvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "volontarsamordnare",
        "name": "Volontärsamordnare",
        "searchPhrase": "volontärsamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "aviator",
        "name": "Aviatör",
        "searchPhrase": "aviatör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "banarbetare",
        "name": "Banarbetare",
        "searchPhrase": "banarbetare a-kassa",
        "recommendedAkassaId": "seko",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bantekniker",
        "name": "Bantekniker",
        "searchPhrase": "bantekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "besiktningsingenjor",
        "name": "Besiktningsingenjör",
        "searchPhrase": "besiktningsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "besiktningstekniker",
        "name": "Besiktningstekniker",
        "searchPhrase": "besiktningstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bilbargare",
        "name": "Bilbärgare",
        "searchPhrase": "bilbärgare a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "bildemonterare",
        "name": "Bildemonterare",
        "searchPhrase": "bildemonterare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bilinspektor",
        "name": "Bilinspektör",
        "searchPhrase": "bilinspektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "biljettkontrollant",
        "name": "Biljettkontrollant",
        "searchPhrase": "biljettkontrollant a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bilmekaniker",
        "name": "Bilmekaniker",
        "searchPhrase": "bilmekaniker a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "bilplatslagare",
        "name": "Bilplåtslagare",
        "searchPhrase": "bilplåtslagare a-kassa",
        "recommendedAkassaId": "byggnads",
        "image": "/assets/images/categories/construction.png"
    },
    {
        "slug": "bilrekonditionerare",
        "name": "Bilrekonditionerare",
        "searchPhrase": "bilrekonditionerare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bilskadereparator",
        "name": "Bilskadereparatör",
        "searchPhrase": "bilskadereparatör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bilskadetekniker",
        "name": "Bilskadetekniker",
        "searchPhrase": "bilskadetekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "biluthyrare",
        "name": "Biluthyrare",
        "searchPhrase": "biluthyrare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "bilvardare",
        "name": "Bilvårdare",
        "searchPhrase": "bilvårdare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/healthcare.png"
    },
    {
        "slug": "brevbarare",
        "name": "Brevbärare",
        "searchPhrase": "brevbärare a-kassa",
        "recommendedAkassaId": "seko",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "budbilsforare",
        "name": "Budbilsförare",
        "searchPhrase": "budbilsförare a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "busschauffor",
        "name": "Busschaufför",
        "searchPhrase": "busschaufför a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "bussmekaniker",
        "name": "Bussmekaniker",
        "searchPhrase": "bussmekaniker a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "bargare",
        "name": "Bärgare",
        "searchPhrase": "bärgare a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "chauffor",
        "name": "Chaufför",
        "searchPhrase": "chaufför a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "chefspilot",
        "name": "Chefspilot",
        "searchPhrase": "chefspilot a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "cykelbud",
        "name": "Cykelbud",
        "searchPhrase": "cykelbud a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "cykelmekaniker",
        "name": "Cykelmekaniker",
        "searchPhrase": "cykelmekaniker a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "cykelreparator",
        "name": "Cykelreparatör",
        "searchPhrase": "cykelreparatör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "dumperforare",
        "name": "Dumperförare",
        "searchPhrase": "dumperförare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "dackmontor",
        "name": "Däckmontör",
        "searchPhrase": "däckmontör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "flygingenjor",
        "name": "Flygingenjör",
        "searchPhrase": "flygingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "flygkapten",
        "name": "Flygkapten",
        "searchPhrase": "flygkapten a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "flygledarassistent",
        "name": "Flygledarassistent",
        "searchPhrase": "flygledarassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "flygledare",
        "name": "Flygledare",
        "searchPhrase": "flygledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "flygmekaniker",
        "name": "Flygmekaniker",
        "searchPhrase": "flygmekaniker a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "flygplatsman",
        "name": "Flygplatsman",
        "searchPhrase": "flygplatsman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "flygtekniker",
        "name": "Flygtekniker",
        "searchPhrase": "flygtekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "flygvard",
        "name": "Flygvärd",
        "searchPhrase": "flygvärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "flygvardinna",
        "name": "Flygvärdinna",
        "searchPhrase": "flygvärdinna a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "flyttgubbe",
        "name": "Flyttgubbe",
        "searchPhrase": "flyttgubbe a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fordonsingenjor",
        "name": "Fordonsingenjör",
        "searchPhrase": "fordonsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fordonsmekaniker",
        "name": "Fordonsmekaniker",
        "searchPhrase": "fordonsmekaniker a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "fordonsoperator",
        "name": "Fordonsoperatör",
        "searchPhrase": "fordonsoperatör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "fordonsreparator",
        "name": "Fordonsreparatör",
        "searchPhrase": "fordonsreparatör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fordonstekniker",
        "name": "Fordonstekniker",
        "searchPhrase": "fordonstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "garagearbetare",
        "name": "Garagearbetare",
        "searchPhrase": "garagearbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "garagevard",
        "name": "Garagevärd",
        "searchPhrase": "garagevärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "godsmottagare",
        "name": "Godsmottagare",
        "searchPhrase": "godsmottagare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "gravmaskinist",
        "name": "Grävmaskinist",
        "searchPhrase": "grävmaskinist a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "helikopterpilot",
        "name": "Helikopterpilot",
        "searchPhrase": "helikopterpilot a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "hjullastarforare",
        "name": "Hjullastarförare",
        "searchPhrase": "hjullastarförare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "husvagnsmekaniker",
        "name": "Husvagnsmekaniker",
        "searchPhrase": "husvagnsmekaniker a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "hyttvard",
        "name": "Hyttvärd",
        "searchPhrase": "hyttvärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "jungman",
        "name": "Jungman",
        "searchPhrase": "jungman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "jarnvagsarbetare",
        "name": "Järnvägsarbetare",
        "searchPhrase": "järnvägsarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "jarnvagsingenjor",
        "name": "Järnvägsingenjör",
        "searchPhrase": "järnvägsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kabinpersonal",
        "name": "Kabinpersonal",
        "searchPhrase": "kabinpersonal a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "konduktor",
        "name": "Konduktör",
        "searchPhrase": "konduktör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "kurir",
        "name": "Kurir",
        "searchPhrase": "kurir a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lagerarbetare",
        "name": "Lagerarbetare",
        "searchPhrase": "lagerarbetare a-kassa",
        "recommendedAkassaId": "handels",
        "image": "/images/professions/lagerarbetare.png"
    },
    {
        "slug": "lagerchef",
        "name": "Lagerchef",
        "searchPhrase": "lagerchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lantbrevbarare",
        "name": "Lantbrevbärare",
        "searchPhrase": "lantbrevbärare a-kassa",
        "recommendedAkassaId": "seko",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lastare",
        "name": "Lastare",
        "searchPhrase": "lastare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lastbilschauffor",
        "name": "Lastbilschaufför",
        "searchPhrase": "lastbilschaufför a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "lastbilsmekaniker",
        "name": "Lastbilsmekaniker",
        "searchPhrase": "lastbilsmekaniker a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "lastmaskinforare",
        "name": "Lastmaskinförare",
        "searchPhrase": "lastmaskinförare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "logistikchef",
        "name": "Logistikchef",
        "searchPhrase": "logistikchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "logistiker",
        "name": "Logistiker",
        "searchPhrase": "logistiker a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lokforare",
        "name": "Lokförare",
        "searchPhrase": "lokförare a-kassa",
        "recommendedAkassaId": "seko",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "lots",
        "name": "Lots",
        "searchPhrase": "lots a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "langtradarchauffor",
        "name": "Långtradarchaufför",
        "searchPhrase": "långtradarchaufför a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "lattmatros",
        "name": "Lättmatros",
        "searchPhrase": "lättmatros a-kassa",
        "recommendedAkassaId": "seko",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "markvardinna",
        "name": "Markvärdinna",
        "searchPhrase": "markvärdinna a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mekaniker",
        "name": "Mekaniker",
        "searchPhrase": "mekaniker a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "motorcykelmekaniker",
        "name": "Motorcykelmekaniker",
        "searchPhrase": "motorcykelmekaniker a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "motorman",
        "name": "Motorman",
        "searchPhrase": "motorman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "paketdistributor",
        "name": "Paketdistributör",
        "searchPhrase": "paketdistributör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "parkeringsvakt",
        "name": "Parkeringsvakt",
        "searchPhrase": "parkeringsvakt a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "pilot",
        "name": "Pilot",
        "searchPhrase": "pilot a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "pistmaskinsforare",
        "name": "Pistmaskinsförare",
        "searchPhrase": "pistmaskinsförare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "postsorterare",
        "name": "Postsorterare",
        "searchPhrase": "postsorterare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "postutdelare",
        "name": "Postutdelare",
        "searchPhrase": "postutdelare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "ramparbetare",
        "name": "Ramparbetare",
        "searchPhrase": "ramparbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "rangerare",
        "name": "Rangerare",
        "searchPhrase": "rangerare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "reparationstekniker",
        "name": "Reparationstekniker",
        "searchPhrase": "reparationstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "reservdelsman",
        "name": "Reservdelsman",
        "searchPhrase": "reservdelsman a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "servicehallspersonal",
        "name": "Servicehallspersonal",
        "searchPhrase": "servicehallspersonal a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "serviceman",
        "name": "Serviceman",
        "searchPhrase": "serviceman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/service.png"
    },
    {
        "slug": "skogsmaskinsforare",
        "name": "Skogsmaskinsförare",
        "searchPhrase": "skogsmaskinsförare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "sopakare",
        "name": "Sopåkare",
        "searchPhrase": "sopåkare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "speditor",
        "name": "Speditör",
        "searchPhrase": "speditör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sparsvetsare",
        "name": "Spårsvetsare",
        "searchPhrase": "spårsvetsare a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "sparvagnsforare",
        "name": "Spårvagnsförare",
        "searchPhrase": "spårvagnsförare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "sparrvakt",
        "name": "Spärrvakt",
        "searchPhrase": "spärrvakt a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "stuvare",
        "name": "Stuvare",
        "searchPhrase": "stuvare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "taxichauffor",
        "name": "Taxichaufför",
        "searchPhrase": "taxichaufför a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "terminalarbetare",
        "name": "Terminalarbetare",
        "searchPhrase": "terminalarbetare a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "testforare",
        "name": "Testförare",
        "searchPhrase": "testförare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "tidningsbud",
        "name": "Tidningsbud",
        "searchPhrase": "tidningsbud a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "timmerbilschauffor",
        "name": "Timmerbilschaufför",
        "searchPhrase": "timmerbilschaufför a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "trafikingenjor",
        "name": "Trafikingenjör",
        "searchPhrase": "trafikingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "trafikinspektor",
        "name": "Trafikinspektör",
        "searchPhrase": "trafikinspektör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "trafikledare",
        "name": "Trafikledare",
        "searchPhrase": "trafikledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "trafikplanerare",
        "name": "Trafikplanerare",
        "searchPhrase": "trafikplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "trafikvard",
        "name": "Trafikvärd",
        "searchPhrase": "trafikvärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "trafikovervakare",
        "name": "Trafikövervakare",
        "searchPhrase": "trafikövervakare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "traktorforare",
        "name": "Traktorförare",
        "searchPhrase": "traktorförare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "traktormekaniker",
        "name": "Traktormekaniker",
        "searchPhrase": "traktormekaniker a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "transportledare",
        "name": "Transportledare",
        "searchPhrase": "transportledare a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "transportplanerare",
        "name": "Transportplanerare",
        "searchPhrase": "transportplanerare a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "truckforare",
        "name": "Truckförare",
        "searchPhrase": "truckförare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "truckreparator",
        "name": "Truckreparatör",
        "searchPhrase": "truckreparatör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tunnelbaneforare",
        "name": "Tunnelbaneförare",
        "searchPhrase": "tunnelbaneförare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "tagforare",
        "name": "Tågförare",
        "searchPhrase": "tågförare a-kassa",
        "recommendedAkassaId": "seko",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "tagklarerare",
        "name": "Tågklarerare",
        "searchPhrase": "tågklarerare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tagmastare",
        "name": "Tågmästare",
        "searchPhrase": "tågmästare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tagtekniker",
        "name": "Tågtekniker",
        "searchPhrase": "tågtekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "tagvard",
        "name": "Tågvärd",
        "searchPhrase": "tågvärd a-kassa",
        "recommendedAkassaId": "seko",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "varumottagare",
        "name": "Varumottagare",
        "searchPhrase": "varumottagare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vaghyvelforare",
        "name": "Väghyvelförare",
        "searchPhrase": "väghyvelförare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "vagtransportledare",
        "name": "Vägtransportledare",
        "searchPhrase": "vägtransportledare a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "bilforare",
        "name": "Bilförare",
        "searchPhrase": "bilförare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "bussforare",
        "name": "Bussförare",
        "searchPhrase": "bussförare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "bussvard",
        "name": "Bussvärd",
        "searchPhrase": "bussvärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "flygplatskontrollant",
        "name": "Flygplatskontrollant",
        "searchPhrase": "flygplatskontrollant a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "sakerhetskontrollant",
        "name": "Säkerhetskontrollant",
        "searchPhrase": "säkerhetskontrollant a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "terminalvard",
        "name": "Terminalvärd",
        "searchPhrase": "terminalvärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fordonsforare",
        "name": "Fordonsförare",
        "searchPhrase": "fordonsförare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "trafikinformator",
        "name": "Trafikinformatör",
        "searchPhrase": "trafikinformatör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "afis-tjansteman",
        "name": "AFIS-tjänsteman",
        "searchPhrase": "afis-tjänsteman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "airport-officer",
        "name": "Airport officer",
        "searchPhrase": "airport officer a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "biltestare",
        "name": "Biltestare",
        "searchPhrase": "biltestare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "komfortoperator",
        "name": "Komfortoperatör",
        "searchPhrase": "komfortoperatör a-kassa",
        "recommendedAkassaId": "ifmetall",
        "image": "/assets/images/categories/industry.png"
    },
    {
        "slug": "sop--och-latrinhamtare",
        "name": "Sop- och latrinhämtare",
        "searchPhrase": "sop- och latrinhämtare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "stationsvard",
        "name": "Stationsvärd",
        "searchPhrase": "stationsvärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "postvaktmastare",
        "name": "Postvaktmästare",
        "searchPhrase": "postvaktmästare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "lagerplanerare",
        "name": "Lagerplanerare",
        "searchPhrase": "lagerplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "biltransportor",
        "name": "Biltransportör",
        "searchPhrase": "biltransportör a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "transportor",
        "name": "Transportör",
        "searchPhrase": "transportör a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "flaggvakt",
        "name": "Flaggvakt",
        "searchPhrase": "flaggvakt a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "busstekniker",
        "name": "Busstekniker",
        "searchPhrase": "busstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fordonsansvarig",
        "name": "Fordonsansvarig",
        "searchPhrase": "fordonsansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "utlastningsplanerare",
        "name": "Utlastningsplanerare",
        "searchPhrase": "utlastningsplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fleet-operator",
        "name": "Fleet operator",
        "searchPhrase": "fleet operator a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "flygplatsmedarbetare",
        "name": "Flygplatsmedarbetare",
        "searchPhrase": "flygplatsmedarbetare a-kassa",
        "recommendedAkassaId": "saak",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "farjforare",
        "name": "Färjförare",
        "searchPhrase": "färjförare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "kajvard",
        "name": "Kajvärd",
        "searchPhrase": "kajvärd a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "mopedbud",
        "name": "Mopedbud",
        "searchPhrase": "mopedbud a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "flygstyrman",
        "name": "Flygstyrman",
        "searchPhrase": "flygstyrman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "sparrexpeditor",
        "name": "Spärrexpeditör",
        "searchPhrase": "spärrexpeditör a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "besiktningsassistent",
        "name": "Besiktningsassistent",
        "searchPhrase": "besiktningsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "besiktningsforman",
        "name": "Besiktningsförman",
        "searchPhrase": "besiktningsförman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "besiktningsman",
        "name": "Besiktningsman",
        "searchPhrase": "besiktningsman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "besiktningstjansteman",
        "name": "Besiktningstjänsteman",
        "searchPhrase": "besiktningstjänsteman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "depachef",
        "name": "Depåchef",
        "searchPhrase": "depåchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "depaforman",
        "name": "Depåförman",
        "searchPhrase": "depåförman a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "distributionsassistent",
        "name": "Distributionsassistent",
        "searchPhrase": "distributionsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "distributionschef",
        "name": "Distributionschef",
        "searchPhrase": "distributionschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "distributionsingenjor",
        "name": "Distributionsingenjör",
        "searchPhrase": "distributionsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "distributionstekniker",
        "name": "Distributionstekniker",
        "searchPhrase": "distributionstekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "distributor",
        "name": "Distributör",
        "searchPhrase": "distributör a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fordonsassistent",
        "name": "Fordonsassistent",
        "searchPhrase": "fordonsassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fordonshandlaggare",
        "name": "Fordonshandläggare",
        "searchPhrase": "fordonshandläggare a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fordonssamordnare",
        "name": "Fordonssamordnare",
        "searchPhrase": "fordonssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fardtjanstassistent",
        "name": "Färdtjänstassistent",
        "searchPhrase": "färdtjänstassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fardtjanstchef",
        "name": "Färdtjänstchef",
        "searchPhrase": "färdtjänstchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fardtjanstplanerare",
        "name": "Färdtjänstplanerare",
        "searchPhrase": "färdtjänstplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "fardtjanstutredare",
        "name": "Färdtjänstutredare",
        "searchPhrase": "färdtjänstutredare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "forbindelseplanerare",
        "name": "Förbindelseplanerare",
        "searchPhrase": "förbindelseplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "logistikansvarig",
        "name": "Logistikansvarig",
        "searchPhrase": "logistikansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "logistikkoordinator",
        "name": "Logistikkoordinator",
        "searchPhrase": "logistikkoordinator a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "parkeringschef",
        "name": "Parkeringschef",
        "searchPhrase": "parkeringschef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "parkeringsingenjor",
        "name": "Parkeringsingenjör",
        "searchPhrase": "parkeringsingenjör a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "parkeringskontrollant",
        "name": "Parkeringskontrollant",
        "searchPhrase": "parkeringskontrollant a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "parkeringsledare",
        "name": "Parkeringsledare",
        "searchPhrase": "parkeringsledare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "parkeringsplanerare",
        "name": "Parkeringsplanerare",
        "searchPhrase": "parkeringsplanerare a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "parkeringssamordnare",
        "name": "Parkeringssamordnare",
        "searchPhrase": "parkeringssamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "parkeringsstrateg",
        "name": "Parkeringsstrateg",
        "searchPhrase": "parkeringsstrateg a-kassa",
        "recommendedAkassaId": "aea",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "terminalchef",
        "name": "Terminalchef",
        "searchPhrase": "terminalchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "terminaltekniker",
        "name": "Terminaltekniker",
        "searchPhrase": "terminaltekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "trafikansvarig",
        "name": "Trafikansvarig",
        "searchPhrase": "trafikansvarig a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "trafikassistent",
        "name": "Trafikassistent",
        "searchPhrase": "trafikassistent a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "trafikchef",
        "name": "Trafikchef",
        "searchPhrase": "trafikchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "trafiksamordnare",
        "name": "Trafiksamordnare",
        "searchPhrase": "trafiksamordnare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "trafiktekniker",
        "name": "Trafiktekniker",
        "searchPhrase": "trafiktekniker a-kassa",
        "recommendedAkassaId": "unionen",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "trafikutvecklare",
        "name": "Trafikutvecklare",
        "searchPhrase": "trafikutvecklare a-kassa",
        "recommendedAkassaId": "alfa",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "transportansvarig",
        "name": "Transportansvarig",
        "searchPhrase": "transportansvarig a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    },
    {
        "slug": "transportchef",
        "name": "Transportchef",
        "searchPhrase": "transportchef a-kassa",
        "recommendedAkassaId": "ledarna",
        "image": "/assets/images/categories/office.png"
    },
    {
        "slug": "vardetransportor",
        "name": "Värdetransportör",
        "searchPhrase": "värdetransportör a-kassa",
        "recommendedAkassaId": "transport",
        "image": "/assets/images/categories/transport.png"
    }
];