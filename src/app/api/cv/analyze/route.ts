import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60;
export const dynamic = 'force-dynamic';

export async function GET() {
    return NextResponse.json({
        status: "CV Analysis API is running",
        time: new Date().toISOString()
    });
}

export async function POST(req: NextRequest) {
    // Import inside the handler to prevent top-level module crashes
    const { parseFile } = await import("@/lib/cv/file-parser");
    const { analyzeCV } = await import("@/lib/cv/ai-service");

    try {
        const formData = await req.formData();
        const cvFile = formData.get("cv") as File;
        const coverLetterFile = formData.get("coverLetter") as File | null;

        console.log("SERVER_API: Received files", {
            cv: cvFile ? { name: cvFile.name, size: cvFile.size, type: cvFile.type } : "MISSING",
            cl: coverLetterFile ? { name: coverLetterFile.name, size: coverLetterFile.size, type: coverLetterFile.type } : "MISSING"
        });

        if (!cvFile) {
            return NextResponse.json(
                { error: "CV saknas" },
                { status: 400 }
            );
        }

        const cvText = await parseFile(cvFile);
        let coverLetterText = undefined;

        if (coverLetterFile && coverLetterFile.size > 0) {
            coverLetterText = await parseFile(coverLetterFile);
        }

        // Safety check: ensure we actually got some text
        if (!cvText || cvText.trim().length < 50) {
            return NextResponse.json(
                { error: "Kunde inte läsa texten i ditt CV. Se till att det är en text-baserad PDF/Word-fil, inte en bild." },
                { status: 400 }
            );
        }

        const analysis = await analyzeCV(cvText, coverLetterText);

        return NextResponse.json(analysis);

    } catch (error: any) {
        console.error("ANALYSIS_ROUTE_ERROR:", error);
        return NextResponse.json(
            {
                error: error.message || "Något gick fel vid analysen. Detta kan bero på en timeout eller problem med AI-tjänsten.",
                details: error.stack ? "Server error occurred" : undefined
            },
            { status: 500 }
        );
    }
}
