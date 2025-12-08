import { Court } from "../types";

export const courts: Court[] = [
    // --- Tingsrätter ---
    {
        name: "Alingsås tingsrätt",
        slug: "alingsas-tingsratt",
        address: "Södra Strömgatan 8 441 30 Alingsås",
        email: "alingsas.tingsratt@dom.se",
        phone: "0322-65 95 00",
        hours: "08:00–16:00",
        imageUrl: "https://www.domstol.se/publishedmedia/0a1s7o7ft0f3ogwphgri/Alingsas_tingsratt_exteriort_4.jpg",
        cities: [
            "Alingsås", "Lerum", "Floda", "Nödinge-Nol", "Älvängen",
            "Herrljunga", "Vårgårda", "Gråbo", "Sollebrunn", "Surte",
            "Ingared", "Stenkullen", "Bohus", "Tollered", "Lödöse"
        ]
    },
    {
        name: "Attunda tingsrätt",
        slug: "attunda-tingsratt",
        address: "Tingsvägen 11 191 61 Sollentuna",
        email: "attunda.tingsratt@dom.se",
        phone: "08-561 696 00",
        hours: "08:00–16:00",
        imageUrl: "https://www.domstol.se/publishedmedia/gtxahkugg0zb1j5gc2h0/Attunda_tingsr-tt_02.jpg",
        cities: [
            "Täby", "Sollentuna", "Upplands Väsby", "Vallentuna", "Märsta",
            "Danderyd", "Sigtuna", "Vaxholm", "Österåker", "Järfälla",
            "Rosersberg", "Kungsängen", "Bro", "Knivsta", "Rimbo"
        ]
    },
    {
        name: "Göteborgs tingsrätt",
        slug: "goteborgs-tingsratt",
        address: "Ullevigatan 15 411 40 Göteborg",
        email: "goteborgs.tingsratt@dom.se",
        phone: "031-701 20 00",
        hours: "08:00–16:00",
        imageUrl: "https://www.domstol.se/publishedmedia/6o0n7lpgtqqf35eyezl6/goteborg_tingsratt_exteriort_3.jpg",
        cities: [
            "Göteborg", "Mölndal", "Kungsbacka", "Partille", "Härryda", "Kungälv", "Öckerö", "Tjörn", "Stenungsund", "Lerum", "Mölnlycke", "Landvetter", "Hindås", "Rävlanda", "Bollebygd"
        ]
    },
    {
        name: "Halmstads tingsrätt",
        slug: "halmstads-tingsratt",
        address: "Storgatan 27 302 43 Halmstad",
        email: "halmstads.tingsratt@dom.se",
        phone: "035-15 66 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Halmstad", "Falkenberg", "Varberg", "Laholm", "Hyltebruk", "Kungsäter", "Tvååker", "Getinge", "Harplinge", "Veinge", "Skummeslöv", "Våxtorp", "Knäred", "Simlångsdalen", "Oskarström"
        ]
    },
    {
        name: "Helsingborgs tingsrätt",
        slug: "helsingborgs-tingsratt",
        address: "Konsul Perssons plats 1 252 21 Helsingborg",
        email: "helsingborgs.tingsratt@dom.se",
        phone: "042-19 90 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Helsingborg", "Landskrona", "Höganäs", "Ängelholm", "Båstad", "Klippan", "Åstorp", "Örkelljunga", "Perstorp", "Bjuv", "Svalöv", "Röstånga", "Munka-Ljungby", "Kågeröd", "Teckomatorp"
        ]
    },
    {
        name: "Hudiksvalls tingsrätt",
        slug: "hudiksvalls-tingsratt",
        address: "Trädgårdsgatan 7 824 30 Hudiksvall",
        email: "hudiksvalls.tingsratt@dom.se",
        phone: "0650-55 23 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Hudiksvall", "Söderhamn", "Bollnäs", "Ljusdal", "Edsbyn", "Arbrå", "Kilafors", "Delsbo", "Färila", "Järvsö", "Alfta", "Bergsjö", "Gnarp", "Iggesund", "Enånger"
        ]
    },
    {
        name: "Hässleholms tingsrätt",
        slug: "hassleholms-tingsratt",
        address: "Första Avenyen 5 281 31 Hässleholm",
        email: "hassleholms.tingsratt@dom.se",
        phone: "0451-29 85 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Hässleholm", "Kristianstad", "Osby", "Bromölla", "Tyringe", "Sösdala", "Hästveda", "Vittsjö", "Bjärnum", "Glimåkra", "Broby", "Knislinge", "Östra Göinge", "Hörby", "Tollarp"
        ]
    },
    {
        name: "Jönköpings tingsrätt",
        slug: "jonkopings-tingsratt",
        address: "Vallgatan 11 553 16 Jönköping",
        email: "jonkopings.tingsratt@dom.se",
        phone: "036-15 66 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Jönköping", "Huskvarna", "Nässjö", "Eksjö", "Tranås", "Vetlanda", "Vaggeryd", "Sävsjö", "Gnosjö", "Mullsjö", "Habo", "Bankeryd", "Gränna", "Skillingaryd", "Värnamo"
        ]
    },
    {
        name: "Kalmar tingsrätt",
        slug: "kalmar-tingsratt",
        address: "Stortorget 13 392 32 Kalmar",
        email: "kalmar.tingsratt@dom.se",
        phone: "0480-47 65 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Kalmar", "Nybro", "Oskarshamn", "Högsby", "Mönsterås", "Emmaboda", "Torsås", "Färjestaden", "Borgholm", "Lindsdal", "Påskallavik", "Mörbylånga", "Degerhamn", "Trekanten", "Söderåkra"
        ]
    },
    {
        name: "Kristianstads tingsrätt",
        slug: "kristianstads-tingsratt",
        address: "Västra Vallgatan 11 291 31 Kristianstad",
        email: "kristianstads.tingsratt@dom.se",
        phone: "044-12 89 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Kristianstad", "Hässleholm", "Åhus", "Bromölla", "Sölvesborg", "Osby", "Tyringe", "Tollarp", "Degeberga", "Knislinge", "Broby", "Glimåkra", "Önnestad", "Vinslöv", "Hörby"
        ]
    },
    {
        name: "Linköpings tingsrätt",
        slug: "linkopings-tingsratt",
        address: "Brigadgatan 3 587 58 Linköping",
        email: "linkopings.tingsratt@dom.se",
        phone: "013-25 19 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Linköping", "Motala", "Mjölby", "Vadstena", "Åtvidaberg", "Kisa", "Boxholm", "Mantorp", "Skänninge", "Rimforsa", "Vikingstad", "Malmslätt", "Linghem", "Ödeshög", "Tjällmo"
        ]
    },
    {
        name: "Luleå tingsrätt",
        slug: "lulea-tingsratt",
        address: "Skeppsbrogatan 39 972 31 Luleå",
        email: "lulea.tingsratt@dom.se",
        phone: "0920-29 54 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Luleå", "Boden", "Piteå", "Älvsbyn", "Arvidsjaur", "Råneå", "Gammelstad", "Kalix", "Öjebyn", "Haparanda", "Töre", "Jokkmokk", "Korpilombolo", "Överkalix", "Harads"
        ]
    },
    {
        name: "Lunds tingsrätt",
        slug: "lunds-tingsratt",
        address: "Tingsrättsplatsen 2 224 67 Lund",
        email: "lunds.tingsratt@dom.se",
        phone: "046-18 85 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Lund", "Eslöv", "Höör", "Lomma", "Staffanstorp", "Svedala", "Kävlinge", "Furulund", "Hjärup", "Bara", "Dalby", "Genarp", "Veberöd", "Flyinge", "Södra Sandby"
        ]
    },
    {
        name: "Lycksele tingsrätt",
        slug: "lycksele-tingsratt",
        address: "Storgatan 24 921 31 Lycksele",
        email: "lycksele.tingsratt@dom.se",
        phone: "0950-275 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Lycksele", "Storuman", "Vilhelmina", "Åsele", "Sorsele", "Malå", "Tärnaby", "Ammarnäs", "Dorotea", "Blattnicksele", "Gunnarn", "Gargnäs", "Stensele", "Hemavan", "Vojmån"
        ]
    },
    {
        name: "Malmö tingsrätt",
        slug: "malmo-tingsratt",
        address: "Kalendegatan 1 211 35 Malmö",
        email: "malmo.tingsratt@dom.se",
        phone: "040-35 30 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Malmö", "Trelleborg", "Vellinge", "Burlöv", "Arlöv", "Höllviken", "Skanör", "Falsterbo", "Ljunghusen", "Bunkeflostrand", "Oxie", "Skurup", "Rydsgård", "Svedala", "Bara"
        ]
    },
    {
        name: "Mora tingsrätt",
        slug: "mora-tingsratt",
        address: "Rättarvägen 2 792 32 Mora",
        email: "mora.tingsratt@dom.se",
        phone: "0250-285 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Mora", "Orsa", "Älvdalen", "Malung", "Sälen", "Rättvik", "Leksand", "Vansbro", "Idre", "Särna", "Gagnef", "Furudal", "Mockfjärd", "Djurås", "Smedjebacken"
        ]
    },
    {
        name: "Nacka tingsrätt",
        slug: "nacka-tingsratt",
        address: "Augustendalsvägen 20 131 52 Nacka Strand",
        email: "nacka.tingsratt@dom.se",
        phone: "08-561 660 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Nacka", "Värmdö", "Saltsjöbaden", "Gustavsberg", "Ingarö", "Tyresö", "Älta", "Boo", "Haninge", "Västerhaninge", "Jordbro", "Dalarö", "Sandhamn", "Runmarö", "Möja"
        ]
    },
    {
        name: "Norrköpings tingsrätt",
        slug: "norrkopings-tingsratt",
        address: "Olai Kyrkogata 36 602 32 Norrköping",
        email: "norrkopings.tingsratt@dom.se",
        phone: "011-27 40 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Norrköping", "Finspång", "Söderköping", "Valdemarsvik", "Gusum", "Ringarum", "Östra Husby", "Vikbolandet", "Krokek", "Ljunga", "Skärblacka", "Kimstad", "Svensksundsviken", "Jursla", "Åby"
        ]
    },
    {
        name: "Nyköpings tingsrätt",
        slug: "nykopings-tingsratt",
        address: "Stora Torget 7 611 32 Nyköping",
        email: "nykoping.tingsratt@dom.se",
        phone: "0155-29 60 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Nyköping", "Oxelösund", "Trosa", "Gnesta", "Vagnhärad", "Stigtomta", "Tystberga", "Nävekvarn", "Jönåker", "Runtuna", "Lästringe", "Ålberga", "Sköldinge", "Bergshammar", "Buskhyttan"
        ]
    },
    {
        name: "Skaraborgs tingsrätt",
        slug: "skaraborgs-tingsratt",
        address: "Rådhusgatan 8 541 30 Skövde",
        email: "skaraborgs.tingsratt@dom.se",
        phone: "0500-27 85 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Skövde", "Mariestad", "Falköping", "Tidaholm", "Hjo", "Töreboda", "Karlsborg", "Skara", "Götene", "Lidköping", "Vara", "Grästorp", "Mullsjö", "Habo", "Tibro"
        ]
    },
    {
        name: "Skellefteå tingsrätt",
        slug: "skelleftea-tingsratt",
        address: "Södra Järnvägsgatan 5 931 31 Skellefteå",
        email: "skelleftea.tingsratt@dom.se",
        phone: "0910-73 35 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Skellefteå", "Ursviken", "Burträsk", "Byske", "Kåge", "Jörn", "Boliden", "Lövånger", "Bureå", "Skelleftehamn", "Robertsfors", "Ånäset", "Bygdsiljum", "Bastuträsk", "Medle"
        ]
    },
    {
        name: "Sodertörns tingsrätt",
        slug: "sodertorns-tingsratt",
        address: "Björnkullavägen 5A 141 51 Huddinge",
        email: "sodertorns.tingsratt@dom.se",
        phone: "08-561 670 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Huddinge", "Botkyrka", "Haninge", "Tumba", "Tullinge", "Salem", "Handen", "Jordbro", "Västerhaninge", "Fittja", "Alby", "Hallunda", "Norsborg", "Skärholmen", "Vårby"
        ]
    },
    {
        name: "Solna tingsrätt",
        slug: "solna-tingsratt",
        address: "Sundbybergsvägen 9 171 73 Solna",
        email: "solna.tingsratt@dom.se",
        phone: "08-561 650 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Solna", "Sundbyberg", "Danderyd", "Stocksund", "Bergshamra", "Lidingö", "Enebyberg", "Täby", "Åkersberga", "Vallentuna", "Kista", "Spånga", "Vällingby", "Bromma", "Hässelby"
        ]
    },
    {
        name: "Stockholms tingsrätt",
        slug: "stockholms-tingsratt",
        address: "Scheelegatan 7 112 23 Stockholm",
        email: "stockholms.tingsratt@dom.se",
        phone: "08-561 650 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Stockholm", "Bromma", "Kista", "Spånga", "Hässelby", "Vällingby", "Älvsjö", "Skärholmen", "Farsta", "Enskede", "Bandhagen", "Hagsätra", "Rågsved", "Sköndal", "Årsta"
        ]
    },
    {
        name: "Sundsvalls tingsrätt",
        slug: "sundsvalls-tingsratt",
        address: "Nybrogatan 10 852 31 Sundsvall",
        email: "sundsvalls.tingsratt@dom.se",
        phone: "060-18 58 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Sundsvall", "Timrå", "Härnösand", "Matfors", "Kvissleby", "Njurunda", "Söråker", "Stockvik", "Bergsjö", "Gnarp", "Harmånger", "Ljusdal", "Delsbo", "Hudiksvall", "Söderhamn"
        ]
    },
    {
        name: "Södertälje tingsrätt",
        slug: "sodertalje-tingsratt",
        address: "Storgatan 4 151 71 Södertälje",
        email: "sodertalje.tingsratt@dom.se",
        phone: "08-561 662 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Södertälje", "Järna", "Nykvarn", "Gnesta", "Mölnbo", "Pershagen", "Hölö", "Viksäter", "Enhörna", "Kallfors", "Stjärnhov", "Björnlunda", "Ösmo", "Sorunda", "Vagnhärad"
        ]
    },
    {
        name: "Uddevalla tingsrätt",
        slug: "uddevalla-tingsratt",
        address: "Kaptensgatan 15 451 32 Uddevalla",
        email: "uddevalla.tingsratt@dom.se",
        phone: "0522-68 95 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Uddevalla", "Lysekil", "Munkedal", "Färgelanda", "Tanumshede", "Grebbestad", "Strömstad", "Ed", "Ljungskile", "Henån", "Ellös", "Skärhamn", "Sotenäs", "Bovallstrand", "Hunnebostrand"
        ]
    },
    {
        name: "Umeå tingsrätt",
        slug: "umea-tingsratt",
        address: "Storgatan 34 903 23 Umeå",
        email: "umea.tingsratt@dom.se",
        phone: "090-17 22 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Umeå", "Nordmaling", "Vännäs", "Bjurholm", "Vindeln", "Tavelsjö", "Hörnefors", "Sävar", "Holmsund", "Obbola", "Robertsfors", "Ånäset", "Bygdsiljum", "Burträsk", "Lövånger"
        ]
    },
    {
        name: "Uppsala tingsrätt",
        slug: "uppsala-tingsratt",
        address: "Rådhusgatan 11 753 21 Uppsala",
        email: "uppsala.tingsratt@dom.se",
        phone: "018-16 58 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Uppsala", "Enköping", "Tierp", "Östhammar", "Knivsta", "Heby", "Bålsta", "Älvkarleby", "Skutskär", "Gimo", "Alunda", "Vattholma", "Morgongåva", "Österbybruk", "Hargshamn"
        ]
    },
    {
        name: "Värmlands tingsrätt",
        slug: "varmlands-tingsratt",
        address: "Jonas Wenströmsgatan 2 652 21 Karlstad",
        email: "varmlands.tingsratt@dom.se",
        phone: "054-17 62 00",
        hours: "08:00–16:00",
        imageUrl: "https://www.domstol.se/publishedmedia/9lzb9oc3tmbglugs3973/R-dhuset_i_Karlstad.jpg",
        cities: [
            "Karlstad", "Kristinehamn", "Arvika", "Filipstad", "Sunne", "Torsby", "Kil", "Hammarö", "Forshaga", "Grums", "Säffle", "Storfors", "Munkfors", "Hagfors", "Molkom"
        ]
    },
    {
        name: "Västerås tingsrätt",
        slug: "vasteras-tingsratt",
        address: "Sigurdsgatan 19 721 30 Västerås",
        email: "vasteras.tingsratt@dom.se",
        phone: "021-49 00 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Västerås", "Sala", "Köping", "Arboga", "Hallstahammar", "Surahammar", "Kungsör", "Fagersta", "Norberg", "Skinnskatteberg", "Kolbäck", "Ramnäs", "Skultuna", "Tillberga", "Hökåsen"
        ]
    },
    {
        name: "Västmanlands tingsrätt",
        slug: "vastmanlands-tingsratt",
        address: "Stora gatan 24 722 12 Västerås",
        email: "vastmanlands.tingsratt@dom.se",
        phone: "021-18 88 00",
        hours: "08:00–16:00",
        imageUrl: "https://www.domstol.se/publishedmedia/ta9whemf8wiu11q6wf79/vastmanland_tingsratt_exteriort_2.jpg",
        cities: [
            "Sala", "Fagersta", "Norberg", "Skinnskatteberg", "Surahammar", "Hallstahammar", "Kolbäck", "Kolsva", "Riddarhyttan", "Virsbo", "Valskog", "Ängelsberg", "Ramnäs", "Hökåsen", "Söderbärke"
        ]
    },
    {
        name: "Vänersborgs tingsrätt",
        slug: "vanersborgs-tingsratt",
        address: "Residensgatan 9 462 33 Vänersborg",
        email: "vanersborgs.tingsratt@dom.se",
        phone: "0521-28 00 00",
        hours: "08:00–16:00",
        imageUrl: "https://www.domstol.se/publishedmedia/z7qdj61p8e66lbxzbb6b/vanersborg_tingsratt_exteriort_1.jpg",
        cities: [
            "Vänersborg", "Trollhättan", "Lilla Edet", "Åmål", "Mellerud", "Bengtsfors", "Dals-Ed", "Vargön", "Sjövik", "Brålanda", "Frändefors", "Färgelanda", "Högsäter", "Bäckefors", "Grästorp"
        ]
    },
    {
        name: "Växjö tingsrätt",
        slug: "vaxjo-tingsratt",
        address: "Kungsgatan 11 352 31 Växjö",
        email: "vaxjo.tingsratt@dom.se",
        phone: "0470-77 00 00",
        hours: "08:00–16:00",
        imageUrl: "https://www.domstol.se/publishedmedia/wisj3sett8ttij1n5eja/vaxjo_tingsratt_exteriort_4.jpg",
        cities: [
            "Växjö", "Ljungby", "Älmhult", "Alvesta", "Lessebo", "Tingsryd", "Markaryd", "Uppvidinge", "Strömsnäsbruk", "Ryd", "Vislanda", "Diö", "Lenhovda", "Åseda", "Traryd"
        ]
    },
    {
        name: "Ystads tingsrätt",
        slug: "ystads-tingsratt",
        address: "Stortorget 2 271 43 Ystad",
        email: "ystads.tingsratt@dom.se",
        phone: "0411-52 70 00",
        hours: "08:00–16:00",
        imageUrl: "https://www.domstol.se/publishedmedia/g916b3ql6e6ambtbb6a4/Ystads_tingsratt_exteriort_1.jpg",
        cities: [
            "Ystad", "Simrishamn", "Tomelilla", "Sjöbo", "Skurup", "Rydsgård", "Vollsjö", "Brösarp", "Kivik", "Sankt Olof", "Gärsnäs", "Borrby", "Hammenhög", "Löderup", "Skillinge"
        ]
    },
    {
        name: "Ångermanlands tingsrätt",
        slug: "angermanlands-tingsratt",
        address: "Torggatan 5 871 30 Härnösand",
        email: "angermanlands.tingsratt@dom.se",
        phone: "0611-34 58 00",
        hours: "08:00–16:00",
        imageUrl: "https://www.domstol.se/publishedmedia/ox7yi4ibufglior4h2p3/b-da_ny_breddad.jpg",
        cities: [
            "Härnösand", "Kramfors", "Sollefteå", "Örnsköldsvik", "Ullånger", "Docksta", "Nordingrå", "Bjästa", "Husum", "Björna", "Långsele", "Junsele", "Ramsele", "Näsåker", "Söråker"
        ]
    },
    {
        name: "Örebro tingsrätt",
        slug: "orebro-tingsratt",
        address: "Olaigatan 13A 703 61 Örebro",
        email: "orebro.tingsratt@dom.se",
        phone: "019-16 32 00",
        hours: "08:00–16:00",
        imageUrl: "https://www.domstol.se/publishedmedia/t8dz0t61qp3bhre3ae99/IMG_0266.jpg",
        cities: [
            "Örebro", "Kumla", "Hallsberg", "Askersund", "Lindesberg", "Nora", "Lekeberg", "Laxå", "Degerfors", "Hällefors", "Kopparberg", "Fjugesta", "Vintrosa", "Pålsboda", "Sköllersta"
        ]
    },
    {
        name: "Östersunds tingsrätt",
        slug: "ostersunds-tingsratt",
        address: "Rådhusgatan 4 831 34 Östersund",
        email: "ostersunds.tingsratt@dom.se",
        phone: "063-15 66 00",
        hours: "08:00–16:00",
        imageUrl: "https://www.domstol.se/publishedmedia/vpw3pz7uou37an43y7vo/ostersund_tingsratt_exteriort_2.jpg",
        cities: [
            "Östersund", "Strömsund", "Krokom", "Åre", "Sveg", "Hammarstrand", "Bräcke", "Gällö", "Svenstavik", "Järpen", "Kälarne", "Hällesjö", "Ragunda", "Lit", "Föllinge"
        ]
    },
    {
        name: "Östra Göinge tingsrätt",
        slug: "ostra-goinge-tingsratt",
        address: "Storgatan 41 289 32 Broby",
        email: "ostra.goinge.tingsratt@dom.se",
        phone: "044-12 89 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Östra Göinge", "Broby", "Knislinge", "Glimåkra", "Sibbhult", "Hanaskog", "Immeln", "Hjärsås", "Östanå", "Lönsboda", "Killeberg", "Arkelstorp", "Näsum", "Vånga", "Jämshög"
        ]
    },
    {
        name: "Söderhamns tingsrätt",
        slug: "soderhamns-tingsratt",
        address: "Kungsgatan 11 826 30 Söderhamn",
        email: "soderhamns.tingsratt@dom.se",
        phone: "0270-28 50 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Söderhamn", "Ljusne", "Sandarne", "Kilafors", "Mohed", "Bergvik", "Marmaverken", "Lottefors", "Trönö", "Växbo", "Söräng", "Skog", "Lingbo", "Holmsveden", "Bergby"
        ]
    },
    {
        name: "Varbergs tingsrätt",
        slug: "varbergs-tingsratt",
        address: "Västkustvägen 7 432 43 Varberg",
        email: "varbergs.tingsratt@dom.se",
        phone: "0340-67 85 00",
        hours: "08:00–16:00",
        imageUrl: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
        cities: [
            "Varberg", "Falkenberg", "Kungsbacka", "Tvååker", "Vessigebro", "Ullared", "Träslövsläge", "Skrea", "Galtabäck", "Glommen", "Frillesås", "Åsa", "Fjärås", "Onsala", "Vallda"
        ]
    },
    {
        name: "Gävle tingsrätt",
        slug: "gavle-tingsratt",
        address: "Rådhusesplanaden 1 803 11 Gävle",
        email: "gavle.tingsratt@dom.se",
        phone: "026-15 66 00",
        hours: "08:00–16:00",
        imageUrl: "https://www.domstol.se/publishedmedia/vxmrfyjsrf24d4ifxlr7/gavle_tingsratt_exteriort_2.jpg",
        cities: [
            "Gävle", "Sandviken", "Hofors", "Ockelbo", "Storvik", "Årsunda", "Hedesunda", "Torsåker", "Järbo", "Kungsgården", "Valbo", "Österfärnebo", "Gysinge", "Tierp", "Skutskär"
        ]
    },

    // --- Hovrätter ---
    {
        name: "Göta hovrätt",
        slug: "gota-hovratt",
        address: "Kaptensgatan 11 553 16 Jönköping",
        email: "gota.hovratt@dom.se",
        phone: "036-15 65 00",
        hours: "08:00–16:00",
        imageUrl: "https://www.domstol.se/publishedmedia/jw41h2xczzw6pfbgo256/_E2A9833_.jpg",
        cities: [
            "Örebro", "Linköping", "Jönköping", "Norrköping", "Karlstad", "Eskilstuna", "Nyköping", "Katrineholm", "Huskvarna", "Motala", "Finspång", "Mjölby", "Kristinehamn", "Arvika", "Karlskoga", "Kumla", "Lindesberg", "Hallsberg", "Tranås", "Vetlanda"
        ]
    },
    {
        name: "Hovrätten för Nedre Norrland",
        slug: "hovratten-for-nedre-norrland",
        address: "Nybrogatan 10 852 31 Sundsvall",
        email: "hovratten.nedre.norrland@dom.se",
        phone: "060-18 58 00",
        hours: "08:00–16:00",
        imageUrl: "https://www.domstol.se/publishedmedia/73pfcyki9eni9esmfz1a/hovratten_nedrenorrland_Kammarratten_Sundsvall_ext.jpg",
        cities: [
            "Gävle", "Sundsvall", "Östersund", "Hudiksvall", "Sandviken", "Bollnäs", "Härnösand", "Söderhamn", "Timrå", "Ånge", "Kramfors", "Strömsund", "Ljusdal", "Bräcke", "Ockelbo", "Hofors", "Berg", "Nordanstig", "Ragunda", "Krokom"
        ]
    },
    {
        name: "Hovrätten för Övre Norrland",
        slug: "hovratten-for-ovre-norrland",
        address: "Tjärhovsgatan 8 904 22 Umeå",
        email: "hovratten.ovre.norrland@dom.se",
        phone: "090-17 21 00",
        hours: "08:00–16:00",
        imageUrl: "https://www.domstol.se/publishedmedia/x0v6yu7aalke6bxyxj64/hovratten_ovre_norrland_exteriort_1.jpg",
        cities: [
            "Umeå", "Skellefteå", "Luleå", "Boden", "Piteå", "Kiruna", "Gällivare", "Älvsbyn", "Arvidsjaur", "Lycksele", "Storuman", "Vilhelmina", "Åsele", "Sorsele", "Malå", "Nordmaling", "Vännäs", "Bjurholm", "Vindeln", "Haparanda"
        ]
    },
    {
        name: "Hovrätten för Västra Sverige",
        slug: "hovratten-for-vastra-sverige",
        address: "Ullevigatan 15 411 40 Göteborg",
        email: "hovratten.vastra.sverige@dom.se",
        phone: "031-701 20 00",
        hours: "08:00–16:00",
        imageUrl: "https://www.domstol.se/publishedmedia/8no07qe16jkuxsr6ij7z/4486_hovratten_vastra_sverige_exteriort_1.jpg",
        cities: [
            "Göteborg", "Borås", "Mölndal", "Kungsbacka", "Partille", "Kungälv", "Uddevalla", "Trollhättan", "Alingsås", "Lerum", "Varberg", "Falkenberg", "Halmstad", "Stenungsund", "Tjörn", "Kinna", "Ulricehamn", "Svenljunga", "Tranemo", "Mölnlycke"
        ]
    },
    {
        name: "Hovrätten över Skåne och Blekinge",
        slug: "hovratten-over-skane-och-blekinge",
        address: "Kalendegatan 1 211 35 Malmö",
        email: "hovratten.skane.blekinge@dom.se",
        phone: "040-35 30 00",
        hours: "08:00–16:00",
        imageUrl: "https://www.domstol.se/publishedmedia/qkw5sti95va3qig0ji33/Hovr-tten.jpg",
        cities: [
            "Malmö", "Lund", "Helsingborg", "Kristianstad", "Landskrona", "Trelleborg", "Ystad", "Hässleholm", "Ängelholm", "Höganäs", "Eslöv", "Staffanstorp", "Svedala", "Lomma", "Karlskrona", "Ronneby", "Karlshamn", "Sölvesborg", "Höör", "Klippan"
        ]
    },
    {
        name: "Svea hovrätt",
        slug: "svea-hovratt",
        address: "Kyrkogatan 13 111 52 Stockholm",
        email: "svea.hovratt@dom.se",
        phone: "08-561 670 00",
        hours: "08:00–16:00",
        imageUrl: "https://www.domstol.se/publishedmedia/j8tpr758n41b526dy7oc/Svea_hovr-ttW20221103.jpg",
        cities: [
            "Stockholm", "Uppsala", "Västerås", "Eskilstuna", "Nyköping", "Södertälje", "Huddinge", "Botkyrka", "Haninge", "Nacka", "Sollentuna", "Täby", "Visby", "Falun", "Borlänge", "Katrineholm", "Enköping", "Sala", "Strängnäs", "Ludvika"
        ]
    }
];
