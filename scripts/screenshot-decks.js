import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.join(__dirname, '../public');
const BASE_URL = 'http://localhost:5173/'; // Ensure your dev server is running here

async function run() {
    console.log('📸 Starting slide screenshot generator...');

    const items = fs.readdirSync(PUBLIC_DIR);
    // Filter for layout-*.json files or all .json that form a deck, ignoring api-docs
    const deckFiles = items.filter(file => file.endsWith('.json') && file !== 'api-docs.json' && file !== 'deck.json');

    if (deckFiles.length === 0) {
        console.log('⚠️ No deck JSON files found in public/');
        return;
    }

    console.log(`Found ${deckFiles.length} decks:`, deckFiles);

    const browser = await puppeteer.launch({
        headless: "new",
        defaultViewport: { width: 1920, height: 1080 }
    });

    const page = await browser.newPage();

    for (const file of deckFiles) {
        const deckName = path.basename(file, '.json');
        const url = `${BASE_URL}?deck=${deckName}`;
        const outputPath = path.join(PUBLIC_DIR, `${deckName}.png`);

        console.log(`\nProcessing ${deckName}...`);
        console.log(`  Target: ${url}`);

        try {
            await page.goto(url, { waitUntil: 'networkidle0' });

            // Wait for the engine to initialize and potential animations
            // We can look for the slide container or just wait a fixed time
            // A safer bet is waiting for the specific DOM element if possible,
            // but fixed wait + networkidle is often enough for simple captures.
            await page.waitForSelector('.lumina-slide', { timeout: 5000 }).catch(() => {
                console.log('  ⚠️ Warning: .lumina-slide not found, taking specific screenshot anyway...');
            });

            // Wait a bit more for animations (cascade effect) to finish
            await new Promise(r => setTimeout(r, 2000));

            await page.screenshot({ path: outputPath, fullPage: true });
            console.log(`  ✅ Saved to ${outputPath}`);

        } catch (err) {
            console.error(`  ❌ Failed to screenshot ${deckName}:`, err.message);
        }
    }

    await browser.close();
    console.log('\n✨ All done!');
}

run();
