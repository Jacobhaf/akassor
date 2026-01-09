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
                    {
                        title: "Utbildning",
                        type: "education",
                        items: profile.education.map(e => ({
                            title: e.school,
                            subtitle: e.degree,
                            date: `${e.startDate} - ${e.endDate || "Nu"}`,
                            content: e.description
                        }))
                    },
                    {
                        title: "Kompetenser",
                        type: "skills",
                        items: profile.skills.hard.map(h => ({ title: h }))
                    }
                ]
            },
            coverLetter: {
                recipient: "Rekryteringsansvarig",
                subject: `Ansökan till tjänsten som ${settings.jobRole}`,
                opening: "Hej!",
                paragraphs: [
                    `Jag såg annonsen för tjänsten som ${settings.jobRole} och blev genast intresserad. Det här är ett mockat svar eftersom ingen API-nyckel hittades.`,
                    "Med min bakgrund inom branschen tror jag att jag kan bidra till er framgång."
                ],
                closing: "Jag ser fram emot att höra från er.",
                signOff: "Vänliga hälsningar,"
            }
        };
    }

    const openai = new OpenAI({ apiKey });

    const systemPrompt = `Du är en senior svensk karriärcoach och rekryterare.
  Din uppgift är att skapa ett professionellt CV och ett personligt brev baserat på kandidatens profil och jobbannonsen.

  HÅRDA KRAV:
  - Hitta inte på fakta. Använd endast information som finns i profilen eller i jobbannonsen.
  - Om relevant information saknas: skriv generellt men neutralt utan att påstå något specifikt som inte står i profilen.
  - Inga påhittade siffror, företag, titlar, utbildningar, datum, system eller certifikat.
  - Inga klyschor (“jag är en social lagspelare”) utan konkretisering.
  
  SPRÅK & TON:
  - Språk: Svenska (om inte jobbannonsen är strikt på engelska, då engelska).
  - Ton: ${settings.tone} (t.ex. formell, varm, säljig).
  - Längd på personligt brev: LÅNG (450-700 ord) om inte "short" valts.
  
  STRUKTUR & SCHEMA (Output JSON):
  Du ska returnera ett JSON-objekt med två huvudnycklar: "cv" och "coverLetter", som följer denna struktur EXAKT:
  
  {
    "cv": {
      "headline": "Kort rubrik (t.ex. 'Senior Utvecklare med fokus på React')",
      "sections": [
        {
          "title": "Rubrik (t.ex. PROFIL, ARBETSLIVSERFARENHET)",
          "type": "summary" | "experience" | "education" | "skills",
          "items": [
             { 
               "title": "Jobbtitel / Skola / Kompetens",
               "subtitle": "Företag / Examen / Nivå", 
               "date": "ÅÅÅÅ-MM - ÅÅÅÅ-MM",
               "content": "Beskrivning...",
               "bullets": ["Merit 1", "Merit 2"]
             }
          ]
        }
      ]
    },
    "coverLetter": {
      "recipient": "Rekryteringsansvarig (eller namnet om det finns i annonsen)",
      "subject": "Ansökan till tjänsten som [Titel]",
      "opening": "Hej [Namn] eller Hej,",
      "paragraphs": [
         "STYCKEN (Array av strängar):",
         "1. Inledning: Varför jag söker och kort om rollen.",
         "2. Varför jag (Relevans): Starka relevansblock kopplade till krav. Koppla min erfarenhet till det ni söker.",
         "3. Prestationer: Konkreta exempel från min profil. Visa resultat.",
         "4. Arbetssätt: Hur jag jobbar, samarbetar och kommunicerar.",
         "5. Varför er: Koppling till er verksamhet/bransch.",
         "6. Avslut: Call-to-action och tack."
      ],
      "closing": "Jag ser fram emot att höra från er.",
      "signOff": "Vänliga hälsningar,"
    }
  }
  
  INSTRUKTIONER FÖR PERSONLIGT BREV:
  - Matcha brevets innehåll mot annonsen: visa “bevis” (erfarenhet/prestation) när det finns.
  - Om profilen har flera erfarenheter: välj de 2–3 mest relevanta.
  - Använd en "senior rekryteringsproffsig" stil: tydliga stycken, lättläst, inga slanguttryck.
  
  INSTRUKTIONER FÖR CV:
  - Skriv en stark "Summary" som röd tråd.
  - Lyft fram relevanta "hard skills" i en separat sektion.
  - Under arbetslivserfarenhet: Fokusera på prestationer (bullets) och använd aktiva verb.
  `;

    const completion = await openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        response_format: { type: "json_object" },
        messages: [
            { role: "system", content: systemPrompt },
            {
                role: "user",
                content: `
        JOBBANNONS:
        """${settings.jobDescription}"""
        
        KANDIDATENS PROFIL (MasterProfile):
        ${JSON.stringify(profile)}
        
        SÖKT ROLL: ${settings.jobRole}
        `
            }
        ]
    });

    const content = completion.choices[0].message.content;
    if (!content) throw new Error("No content from AI");

    const json = JSON.parse(content);
    return GeneratedDocumentsSchema.parse(json);
}
