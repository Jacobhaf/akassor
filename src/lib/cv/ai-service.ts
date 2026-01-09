import OpenAI from 'openai';
import { MasterProfileSchema, GeneratedDocumentsSchema, MasterProfile, GeneratorSettings } from './schemas';
import { z } from 'zod';

const apiKey = process.env.OPENAI_API_KEY;

// Fallback logic to allow UI testing without API key
const MOCK_DELAY = 1500;

export async function normalizeProfile(rawData: any): Promise<MasterProfile> {
    if (!apiKey) {
        console.warn("No OpenAI API key found, using mock normalization.");
        await new Promise(resolve => setTimeout(resolve, MOCK_DELAY));

        // Simple mock pass-through with some cleanup
        return {
            personal: {
                name: rawData.personal?.name || "Anonym Användare",
                email: rawData.personal?.email || "exempel@email.com",
                phone: rawData.personal?.phone || "",
                city: rawData.personal?.city || "",
                linkedinUrl: rawData.personal?.linkedinUrl || "",
                portfolioUrl: rawData.personal?.portfolioUrl || "",
            },
            summary: rawData.summary || "En driven och engagerad medarbetare med erfarenhet inom...",
            experience: (rawData.experience || []).map((e: any) => ({
                ...e,
                isCurrent: Boolean(e.isCurrent),
                achievements: e.achievements || ["Ansvarade för daglig drift", "Ökade effektiviteten med 20%"]
            })),
            education: rawData.education || [],
            skills: {
                hard: rawData.skills?.hard || ["Projektledning"],
                soft: rawData.skills?.soft || ["Kommunikation"],
                languages: rawData.skills?.languages || [{ name: "Svenska", level: "Modersmål" }]
            }
        };
    }

    const openai = new OpenAI({ apiKey });

    const completion = await openai.chat.completions.create({
        model: "gpt-4-turbo-preview", // Or gpt-3.5-turbo if cost is a concern, but 4 is better for JSON
        response_format: { type: "json_object" },
        messages: [
            {
                role: "system",
                content: `You are an expert resume consultant for the Swedish market. 
        Your task is to normalize unstructured user data into a structured Master Profile JSON.
        - Correct spelling and grammar (Swedish).
        - Improve formulations to be more professional but strictly stick to the facts provided.
        - If 'achievements' are missing in experience, suggest generic professional ones based on the title, but mark them for review if possible (here just include them).
        - Output strictly matching the provided JSON schema.`
            },
            {
                role: "user",
                content: `Normalize this data into the schema: ${JSON.stringify(rawData)}`
            }
        ]
    });

    const content = completion.choices[0].message.content;
    if (!content) throw new Error("No content from AI");

    // Validate with Zod
    const json = JSON.parse(content);
    return MasterProfileSchema.parse(json);
}

export async function generateDocuments(profile: MasterProfile, settings: GeneratorSettings) {
    if (!apiKey) {
        console.warn("No OpenAI API key found, using mock generation.");
        await new Promise(resolve => setTimeout(resolve, MOCK_DELAY));

        // Mock generation
        return {
            cv: {
                headline: `${profile.personal.name} - ${settings.jobRole || "Kandidat"}`,
                sections: [
                    {
                        title: "Profil",
                        type: "summary",
                        items: [{ title: "", content: profile.summary || "Erfaren specialist..." }]
                    },
                    {
                        title: "Arbetslivserfarenhet",
                        type: "experience",
                        items: profile.experience.map(e => ({
                            title: e.title,
                            subtitle: e.company,
                            date: `${e.startDate} - ${e.endDate || "Nuvarande"}`,
                            content: e.description,
                            bullets: e.achievements
                        }))
                    },
                    // ... more sections would be here
                ]
            },
            coverLetter: {
                recipient: "Rekryteringsansvarig",
                subject: `Ansökan till tjänsten som ${settings.jobRole}`,
                opening: "Hej,",
                paragraphs: [
                    `Jag såg annonsen för tjänsten som ${settings.jobRole} och blev genast intresserad.`,
                    "Med min bakgrund inom branschen tror jag att jag kan bidra..."
                ],
                closing: "Jag ser fram emot att höra från er.",
                signOff: "Vänliga hälsningar,"
            }
        };
    }

    const openai = new OpenAI({ apiKey });

    const systemPrompt = `You are a professional resume writer.
  Generate a CV and Cover Letter based on the User Profile and Job Description.
  Tone: ${settings.tone}.
  Language: ${settings.language == 'sv' ? 'Swedish' : 'English'}.
  
  Output a JSON object with 'cv' and 'coverLetter' keys.
  
  CV Requirements:
  - Tailor the summary and bullets to the job description.
  - Use active verbs.
  
  Cover Letter Requirements:
  - Professional structure.
  - Connect user skills to job requirements.
  `;

    const completion = await openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        response_format: { type: "json_object" },
        messages: [
            { role: "system", content: systemPrompt },
            {
                role: "user",
                content: `Profile: ${JSON.stringify(profile)}\n\nJob Description: ${settings.jobDescription}\nJob Role: ${settings.jobRole}`
            }
        ]
    });

    const content = completion.choices[0].message.content;
    if (!content) throw new Error("No content from AI");

    const json = JSON.parse(content);
    return GeneratedDocumentsSchema.parse(json);
}
