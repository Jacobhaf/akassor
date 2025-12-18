const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputFile = '/Users/jacobhafstrom25/.gemini/antigravity/brain/ca1285c7-efb2-4c7f-af63-71adb60d3649/uploaded_image_1766083463946.jpg';
const outputDir = 'public/images/professions';

// Ensure dir exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

async function process() {
    const metadata = await sharp(inputFile).metadata();
    console.log('Original dimensions:', metadata.width, 'x', metadata.height);

    // The image might have white borders (gutters) between grid items.
    // However, looking at the user's uploaded image (which I can't strictly "see" pixel-perfectly without analysis),
    // it seems like a clean grid.
    // If there ARE gutters, a simple division might include lines. 
    // But for now, let's assume simple grid.

    const colCount = 4;
    const rowCount = 3;
    const tileWidth = Math.floor(metadata.width / colCount);
    const tileHeight = Math.floor(metadata.height / rowCount);

    // Map of index (0-11) to filename
    const fileMap = [
        'elektriker.jpg', // 0: Top Left
        'lokalvardare.jpg', // 1: Top Mid-Left
        'kock.jpg', // 2: Top Mid-Right
        'ingenjor.jpg', // 3: Top Right
        'frisor.jpg', // 4: Mid Left
        'polis.jpg', // 5: Mid Mid-Left
        'sjukskoterska.jpg', // 6: Mid Mid-Right (Blue scrubs)
        'lakare.jpg', // 7: Mid Right (White coat)
        'larare.jpg', // 8: Bottom Left
        'barnskotare.jpg', // 9: Bottom Mid-Left
        'lagerarbetare.jpg', // 10: Bottom Mid-Right
        'lastbilschauffor.jpg' // 11: Bottom Right
    ];

    for (let i = 0; i < 12; i++) {
        const row = Math.floor(i / colCount);
        const col = i % colCount;

        await sharp(inputFile)
            .extract({
                left: col * tileWidth,
                top: row * tileHeight,
                width: tileWidth,
                height: tileHeight
            })
            // Resize to standard size to ensure consistency? Maybe 800x600 or 600x450
            .resize(800, 600, { fit: 'cover' })
            .toFile(path.join(outputDir, fileMap[i]));

        console.log(`Saved ${fileMap[i]}`);
    }
}

process().catch(console.error);
