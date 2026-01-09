import { NextRequest, NextResponse } from "next/server";
import { generateDocuments } from "@/lib/cv/ai-service";
import { MasterProfileSchema, GeneratorSettingsSchema } from "@/lib/cv/schemas";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // Validate inputs
        const profile = MasterProfileSchema.parse(body.profile);
        const settings = GeneratorSettingsSchema.parse(body.settings);

        const documents = await generateDocuments(profile, settings);
        return NextResponse.json(documents);
    } catch (error) {
        console.error("Generation error:", error);
        return NextResponse.json({ error: "Failed to generate documents" }, { status: 500 });
    }
}
