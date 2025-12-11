
import fs from 'fs';
import { determineAkassa, generateSlug, determineImage } from './mapper.js';

// Raw list provided by user (truncated for demo, pretending we read from a file or big string)
// I will read from a text file that I will Create next.
const rawFile = 'src/data/raw_yrken.txt';

try {
    const data = fs.readFileSync(rawFile, 'utf8');
    const lines = data.split('\n').map(l => l.trim()).filter(l => l.length > 0);

    // De-duplicate
    const uniqueYrken = [...new Set(lines)];

    const yrkeObjects = uniqueYrken.map(name => {
        const slug = generateSlug(name);
        // Basic heuristic to guess recommended Akassa
        const akassaId = determineAkassa(name);
        const image = determineImage(name, akassaId);

        return {
            slug,
            name,
            searchPhrase: `${name.toLowerCase()} a-kassa`,
            recommendedAkassaId: akassaId,
            image
        };
    });

    // Generate TypeScript output
    const tsOutput = `import { Yrke } from "@/types";

export const yrken: Yrke[] = ${JSON.stringify(yrkeObjects, null, 4)};`;

    // We can't overwrite database.ts directly because it has other exports. 
    // We will output to a temp file 'src/data/generated_yrken.ts'
    fs.writeFileSync('src/data/generated_yrken.ts', tsOutput);
    console.log(`Generated ${yrkeObjects.length} professions to src/data/generated_yrken.ts`);

} catch (e) {
    console.error("Error processing:", e);
}
