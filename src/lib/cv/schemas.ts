import { z } from 'zod';

// --- Master Profile Schema ---

export const PersonalInfoSchema = z.object({
    name: z.string().min(1, "Namn är obligatoriskt"),
    email: z.string().email("Ogiltig e-postadress"),
    phone: z.string().optional(),
    city: z.string().optional(),
    linkedinUrl: z.string().url().optional().or(z.literal("")),
    portfolioUrl: z.string().url().optional().or(z.literal("")),
});

export const ExperienceSchema = z.object({
    id: z.string(),
    title: z.string().min(1, "Titel behövs"),
    company: z.string().min(1, "Företag behövs"),
    location: z.string().optional(),
    startDate: z.string().min(1, "Startdatum behövs"),
    endDate: z.string().optional(), // Empty string or undefined if current
    isCurrent: z.boolean().default(false),
    description: z.string().optional(),
    achievements: z.array(z.string()).optional(),
});

export const EducationSchema = z.object({
    id: z.string(),
    school: z.string().min(1, "Skola behövs"),
    degree: z.string().min(1, "Examen/Utbildning behövs"),
    field: z.string().optional(),
    startDate: z.string().min(1, "Startdatum behövs"),
    endDate: z.string().optional(),
    description: z.string().optional(),
});

export const SkillSchema = z.object({
    name: z.string(),
    level: z.enum(["beginner", "intermediate", "advanced", "expert"]).optional(),
});

export const MasterProfileSchema = z.object({
    personal: PersonalInfoSchema,
    summary: z.string().optional(),
    experience: z.array(ExperienceSchema).default([]),
    education: z.array(EducationSchema).default([]),
    skills: z.object({
        hard: z.array(z.string()).default([]),
        soft: z.array(z.string()).default([]),
        languages: z.array(z.object({ name: z.string(), level: z.string() })).default([]),
    }).default({ hard: [], soft: [], languages: [] }),
});

export type MasterProfile = z.infer<typeof MasterProfileSchema>;

// --- Generator Schemas ---

export const GeneratorSettingsSchema = z.object({
    jobDescription: z.string().optional(),
    jobRole: z.string().optional(),
    tone: z.enum(["formal", "warm", "direct", "sales", "humble"]).default("formal"),
    length: z.enum(["short", "standard", "long"]).default("standard"),
    language: z.enum(["sv", "en"]).default("sv"),
    template: z.enum(["modern", "ats"]).default("modern"),
});

export type GeneratorSettings = z.infer<typeof GeneratorSettingsSchema>;

// --- Generated Documents Schema ---

export const CvSectionItemSchema = z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.string().optional(),
    location: z.string().optional(),
    content: z.string().optional(),
    bullets: z.array(z.string()).optional(),
});

export const CvSectionSchema = z.object({
    title: z.string(),
    type: z.enum(["personal", "summary", "experience", "education", "skills", "custom"]),
    items: z.array(CvSectionItemSchema),
});

export const GeneratedCvSchema = z.object({
    headline: z.string().optional(),
    sections: z.array(CvSectionSchema),
});

export const GeneratedCoverLetterSchema = z.object({
    recipient: z.string().optional(),
    subject: z.string(),
    opening: z.string(),
    paragraphs: z.array(z.string()),
    closing: z.string(),
    signOff: z.string(),
});

export const GeneratedDocumentsSchema = z.object({
    cv: GeneratedCvSchema,
    coverLetter: GeneratedCoverLetterSchema,
});

export type GeneratedDocuments = z.infer<typeof GeneratedDocumentsSchema>;

// --- Analysis Schemas ---

export const AnalysisSectionSchema = z.object({
    score: z.number().min(1).max(10),
    feedback: z.string(),
    improvements: z.array(z.string()),
});

export const CvAnalysisSchema = z.object({
    overall: AnalysisSectionSchema,
    content: AnalysisSectionSchema,
    structure: AnalysisSectionSchema,
    adaptation: AnalysisSectionSchema,
    language: AnalysisSectionSchema,
    coverLetter: AnalysisSectionSchema.optional(),
});

export type CvAnalysis = z.infer<typeof CvAnalysisSchema>;
