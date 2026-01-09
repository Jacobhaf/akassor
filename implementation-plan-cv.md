# Teknisk Design: AI-CV & Personligt Brev

## Översikt
En ny funktion på `valjaakassa.se` som låter användare skapa skräddarsydda CV:n och personliga brev med hjälp av AI. Systemet bygger på en "Master Profile" som normaliseras från användardata och sedan används för att generera dokument anpassade efter specifika jobbannonser.

## Arkitektur

### Tech Stack
- **Frontend**: Next.js (App Router), React, Tailwind CSS.
- **State**: React Context + useReducer för "Wizard"-data.
- **Backend**: Next.js API Routes (Route Handlers).
- **AI**: OpenAI API (via `openai` SDK).
- **Validering**: Zod (för strikta JSON-scheman).
- **PDF**: `@react-pdf/renderer` (för stabil rendering utan headless browser).

### Dataflöde
1.  **Input**: Användaren fyller i formulär (Wizard).
2.  **Normalisering (AI)**: Rådata skickas till `/api/cv/normalize`. AI strukturerar och rättar text mot `MasterProfileSchema`.
3.  **Redigering & Jobbval**: Användaren granskar profilen och klistrar in en jobbannons.
4.  **Generering (AI)**: Profil + Jobbannons skickas till `/api/cv/generate`. AI skapar `GeneratedDocuments` (CV-innehåll + Brev).
5.  **Export**: Användaren laddar ner PDF som renderas on-the-fly via `@react-pdf`.

## Datamodeller (Schema)

### MasterProfile (Zod)
```typescript
{
  personal: { name, email, phone, location, links: [] },
  summary: string, // AI-förslag
  experience: [{ title, company, location, startDate, endDate, current, description, achievements: [] }],
  education: [{ school, degree, field, startDate, endDate, description }],
  skills: { hard: [], soft: [], languages: [] }
}
```

### GeneratedDocuments (Zod)
```typescript
{
  cv: {
    layout: "modern" | "ats",
    headline: string,
    sections: [{ title, items: [{ title, subtitle, date, content, bullets: [] }] }]
  },
  coverLetter: {
    recipient: string,
    subject: string,
    paragraphs: string[] // Array av textblock
  }
}
```

## API Endpoints

### `POST /api/cv/normalize`
- **Body**: `{ rawData: any }`
- **Process**: Anropar LLM med `response_format: { type: "json_object" }` och strikt Zod-schema.
- **Return**: `MasterProfile`

### `POST /api/cv/generate`
- **Body**: `{ profile: MasterProfile, jobDescription: string, settings: { tone, length, template } }`
- **Process**: Construct prompt with profile context + job context. Ask for specific JSON output.
- **Return**: `GeneratedDocuments`

### `POST /api/cv/pdf` (Alternativt client-side rendering)
*Notering: `@react-pdf/renderer` fungerar utmärkt client-side för preview, vilket sparar server-resurser. Vi siktar på client-side rendering för MVP för snabbare feedback-loop, men endpoint finns redo om vi behöver server-signering.*

## Komponenter (Frontend)

1.  **`CvWizard`**: Huvudcontainer som hanterar steg (state).
2.  **`StepProfile`**, **`StepExperience`**, **`StepEducation`**: Formulärdelar.
3.  **`DocumentEditor`**: Split-view. Vänster: Redigera JSON/Text. Höger: `PDFViewer` (från @react-pdf).
4.  **`TemplateRenderer`**: Tar in data och vald mall-ID, returnerar React-pdf `<Document>`.

## Säkerhet & Integritet
- Inga data sparas i databas i MVP.
- Allt state lever i användarens webbläsare (Session Storage / React State).
- API-anrop loggar ej PII (strikt filter).
- Rate limiting på API-routes (t.ex. 5 requests / min per IP).

## Tidsplan / Implementeringssteg
1.  **Setup**: Installera deps, skapa mappar.
2.  **Schemas**: Definiera Zod-typer i `src/lib/cv/schemas.ts`.
3.  **API**: Bygg mockade endpoints först, sen koppla på OpenAI.
4.  **Frontend**: Bygg Wizard-skelettet och koppla ihop med state.
5.  **Rendering**: Skapa PDF-mallar.
6.  **Polish**: UX, felhantering, laddningstider.
