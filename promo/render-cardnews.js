const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const root = path.resolve(__dirname, "..");
const variants = {
  rest: {
    html: "cardnews.html",
    filenames: [
      "redefine_persona_rest_01_hook.png",
      "redefine_persona_rest_02_empathy.png",
      "redefine_persona_rest_03_reassurance.png",
      "redefine_persona_rest_04_program.png",
      "redefine_persona_rest_05_apply.png",
    ],
    preview: "cardnews-preview-full.png",
  },
  isolation: {
    html: "cardnews-isolation.html",
    filenames: [
      "redefine_persona_isolation_01_hook.png",
      "redefine_persona_isolation_02_empathy.png",
      "redefine_persona_isolation_03_reassurance.png",
      "redefine_persona_isolation_04_program.png",
      "redefine_persona_isolation_05_apply.png",
    ],
    preview: "cardnews-isolation-preview-full.png",
  },
};

const variantName = process.argv[2] || "rest";
const variant = variants[variantName];

if (!variant) {
  throw new Error(`Unknown cardnews variant: ${variantName}`);
}

const htmlPath = path.join(root, "promo", variant.html);
const outDir = path.join(root, "promo", "dist");
const qaDir = path.join(root, "promo", "qa");

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  fs.mkdirSync(qaDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1160, height: 1430 },
    deviceScaleFactor: 1,
  });

  await page.goto(`file://${htmlPath}`);
  await page.evaluate(async () => {
    await document.fonts.ready;
    const images = Array.from(document.images);
    await Promise.all(
      images.map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve, reject) => {
          img.addEventListener("load", resolve, { once: true });
          img.addEventListener("error", reject, { once: true });
        });
      }),
    );
  });

  const cards = await page.$$("[data-card]");
  if (cards.length !== 5) {
    throw new Error(`Expected 5 cards, found ${cards.length}`);
  }

  for (let index = 0; index < cards.length; index += 1) {
    await cards[index].screenshot({
      path: path.join(outDir, variant.filenames[index]),
    });
  }

  await page.screenshot({
    path: path.join(qaDir, variant.preview),
    fullPage: true,
  });

  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
