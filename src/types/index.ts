export type EmployerType = "kommun_region" | "privat_borsnoterat" | "myndighet" | "eget_foretag";

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
    // New fields for comparison module
    members: number;
    pricePerMonth: number;
    employerTypes: EmployerType[];
    partner: boolean;
    maxCompPerMonth: number;
}

export interface Yrke {
    slug: string;
    name: string;
    searchPhrase: string;
    recommendedAkassaId: string;
    image?: string;
}
