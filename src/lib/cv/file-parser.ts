import mammoth from 'mammoth';

export async function parseFile(file: File): Promise<string> {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    if (file.type === 'application/pdf') {
        try {
            // Dynamically require pdf-parse only when needed
            const pdf = require('pdf-parse');
            const data = await pdf(buffer);
            return data.text;
        } catch (error) {
            console.error("PDF Parsing failed:", error);
            return "Kunde inte läsa PDF-texten korrekt. Kontrollera filen.";
        }
    } else if (
        file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ) {
        try {
            const result = await mammoth.extractRawText({ buffer: buffer });
            return result.value;
        } catch (error) {
            console.error("DOCX Parsing failed:", error);
            throw new Error("Kunde inte läsa Word-filen.");
        }
    } else if (file.type === 'text/plain') {
        const textDecoder = new TextDecoder('utf-8');
        return textDecoder.decode(arrayBuffer);
    } else {
        throw new Error(`Filformatet ${file.type} stöds ej. Vänligen ladda upp PDF eller Word (docx).`);
    }
}
