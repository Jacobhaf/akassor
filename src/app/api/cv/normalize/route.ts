import { NextRequest, NextResponse } from "next/server";
import { normalizeProfile } from "@/lib/cv/ai-service";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const normalized = await normalizeProfile(body.rawData);
        return NextResponse.json(normalized);
    } catch (error) {
        console.error("Normalize error:", error);
        return NextResponse.json({ error: "Failed to normalize profile" }, { status: 500 });
    }
}
