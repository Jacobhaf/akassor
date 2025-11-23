export interface Akassa {
    id: string;
    name: string;
    shortName?: string;
    slug: string;
    website: string;
    phone: string;
    email: string;
    primaryIndustries: string[];
    membershipFee: string;
    exampleJobs: string[];
}

export interface Yrke {
    slug: string;
    name: string;
    searchPhrase: string;
    recommendedAkassaId: string;
}
