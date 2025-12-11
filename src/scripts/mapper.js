
const akassaKeywords = {
    // 1. Specific Unions (High priority)
    byggnads: ['snickare', 'betong', 'murare', 'målare', 'golv', 'plåtslagare', 'rörläggare', 'anläggare', 'byggnads', 'ställningsbyggare', 'takmontör', 'plattsättare'],
    eak: ['elektriker', 'elmontör', 'eltekniker', 'larmtekniker', 'linjemontör', 'distributionselektriker'],
    seko: ['brevbärare', 'lokförare', 'tågvärd', 'matros', 'sjöman', 'banarbetare', 'vägarbetare', 'kriminalvårdare', 'tågförare'],
    transport: ['chaufför', 'lastbil', 'taxiförare', 'väktare', 'bärgare', 'hamnarbetare', 'flygplatskontrollant', 'terminalarbetare', 'åkeri', 'transport', 'budbilsförare', 'busschaufför', 'pilot', 'flygvärdinna'],
    hrak: ['kock', 'servitör', 'servitris', 'bartender', 'hotell', 'receptionist', 'kallskänka', 'barista', 'hovmästare', 'kypare', 'husfru'],
    livs: ['slaktare', 'bagare', 'styckare', 'konditor', 'charkuterist', 'mejeriarbetare'],
    pappers: ['pappers', 'massaindustri'],
    gs: ['skogsarbetare', 'träindustri', 'sågverk', 'tryckare', 'grafiker', 'bokbindare'],
    fastighets: ['fastighetsskötare', 'städare', 'lokalvårdare', 'fönsterputsare', 'sanerare'],
    journalist: ['journalist', 'fotograf', 'redaktör', 'reporter'],
    finans: ['bank', 'finans', 'försäkring', 'aktie', 'börs'],

    // 2. Academic / High Education (AEA)
    aea: [
        'ingenjör', 'civilekonom', 'personalvetare', 'biolog', 'agronom', 'apotekare', 'arkitekt', 'bibliotekarie', 'curator',
        'designer', 'doktorand', 'forskare', 'geolog', 'jurist', 'lantmätare', 'logoped', 'officer', 'präst', 'psykolog',
        'tandläkare', 'veterinär', 'socionom', 'terapeut', 'läkare', 'systemvetare', 'revisor', 'kommunikatör', 'planerare',
        'specialist', 'strateg', 'analytiker', 'sjuksköterska', 'barnmorska', 'audionom', 'arbetsterapeut', 'fysioterapeut', 'tandhygienist'
    ],

    // 3. Teachers
    lararnas: ['lärare', 'förskollärare', 'studievägledare', 'pedagog', 'lektor', 'forskare', 'rektor'], // Rektor sometimes Ledarna

    // 4. Municipal / Healthcare (Kommunal)
    kommunal: [
        'undersköterska', 'vårdbiträde', 'barnskötare', 'brandman', 'personlig assistent', 'skötare', 'badmästare',
        'djurskötare', 'trädgårdsarbetare', 'kyrkvaktmästare'
    ],

    // 5. White Collar / Office (Unionen, Ledarna, Vision)
    ledarna: ['chef', 'vd', 'manager', 'direktör', 'rektor', 'arbetsledare', 'platschef'],
    vision: ['tandsköterska', 'medicinsk sekreterare', 'vårdadministratör', 'pastor', 'diakon'], // Municipal admin often Vision
    unionen: [
        'administratör', 'assistent', 'handläggare', 'inköpare', 'it', 'konsult', 'koordinator', 'marknadsförare',
        'projektledare', 'sekreterare', 'säljare', 'tekniker', 'webb', 'support', 'kontorist', 'receptionist', 'ekonom',
        'mäklare', 'informatör', 'speditör', 'informatör'
    ],
    handels: ['butik', 'säljare', 'lager', 'florist', 'kassör', 'frisör', 'dekoratör', 'skorstensfejare'], // Säljare can be ambiguous

    // 6. Industry (IF Metall)
    ifmetall: ['svetsare', 'montör', 'operatör', 'industri', 'mekaniker', 'verkstad', 'gjutare', 'lackerare', 'gruvarbetare']
};

export function determineAkassa(yrkeName) {
    const lowerName = yrkeName.toLowerCase();

    // Special Cases / Overrides
    if (lowerName.includes('säljare') && (lowerName.includes('butik') || lowerName.includes('kassa'))) return 'handels';
    if (lowerName.includes('säljare') && (lowerName.includes('företag') || lowerName.includes('fält'))) return 'saljarnas';
    if (lowerName.includes('chef') || lowerName.includes('vd ')) return 'ledarna';

    for (const [akassa, keywords] of Object.entries(akassaKeywords)) {
        if (keywords.some(k => lowerName.includes(k))) {
            // Map simplified keys to database IDs
            const map = {
                'lararnas': 'la',
                'finans': 'ffak',
                'elektrikerna': 'eak'
            };
            return map[akassa] || akassa;
        }
    }

    // Fallbacks based on broad categories if specific keywords fail
    if (lowerName.includes('ingenjör')) return 'aea';
    if (lowerName.includes('tekniker')) return 'unionen';
    if (lowerName.includes('arbetare')) return 'saak'; // Sveriges Arbetares Akassa as generic fallback? Or Alfa?

    return 'alfa'; // Default fallback
}

export function generateSlug(name) {
    return name.toLowerCase()
        .replace(/å/g, 'a')
        .replace(/ä/g, 'a')
        .replace(/ö/g, 'o')
        .replace(/é/g, 'e')
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
}

export function determineImage(yrkeName, akassaId) {
    const lower = yrkeName.toLowerCase();
    if (akassaId === 'byggnads' || lower.includes('bygg')) return '/assets/images/categories/construction.png';
    if (akassaId === 'kommunal' || lower.includes('vård') || lower.includes('läkare') || lower.includes('sjuksköterska')) return '/assets/images/categories/healthcare.png';
    if (akassaId === 'transport' || lower.includes('förare') || lower.includes('chaufför')) return '/assets/images/categories/transport.png';
    if (akassaId === 'ifmetall' || lower.includes('industri') || lower.includes('montör')) return '/assets/images/categories/industry.png';
    if (akassaId === 'hrak' || lower.includes('kock') || lower.includes('servic')) return '/assets/images/categories/service.png'; // Need to check if service.png exists, otherwise office or fallback
    return '/assets/images/categories/office.png';
}
