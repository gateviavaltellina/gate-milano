import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load env
const envPath = resolve(__dirname, "../.env.local");
const env = Object.fromEntries(
  readFileSync(envPath, "utf-8")
    .split("\n")
    .filter((l) => l.includes("="))
    .map((l) => l.split("=").map((s) => s.trim()))
);

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: env.SANITY_API_TOKEN,
});

const events = [
  {
    title: "KUKO by MANTIKORE & GATE MILANO",
    date: "2026-04-10T22:00:00.000Z",
    ticketUrl: "https://xceed.me/en/milano/event/kuko-by-mantikore-gate-milano/216281/channel/gate-milano-website",
    imageUrl: "https://www.gatemilano.it/wp-content/uploads/2026/01/STATIC-45-10.04-819x1024.png",
    genres: ["Techno"],
  },
  {
    title: "Soma Floor Premiere w/ Sivinski, Ariha, Resa Utopica & Teeo",
    date: "2026-04-11T22:00:00.000Z",
    ticketUrl: "https://xceed.me/en/milano/event/soma-floor/224389/channel/gate-milano-website",
    imageUrl: "https://www.gatemilano.it/wp-content/uploads/2026/03/SomaFloor-1.1-1024x1024.png",
    genres: ["Techno"],
  },
  {
    title: "AZYR, JAZZY & ALEX FARELL at Alcatraz",
    date: "2026-04-11T22:00:00.000Z",
    ticketUrl: "https://xceed.me/en/milano/event/azyr-jazzy-alex-farrell-at-alcatraz-milano/219528/channel/gate-milano-website",
    imageUrl: "https://www.gatemilano.it/wp-content/uploads/2026/03/farell-1080x1350-1-819x1024.jpg",
    genres: ["House", "Tech-House"],
  },
  {
    title: "LOS LOCOS VS NOTTELUNGA w/ Edmmaro, DJ Piro & Packapunch909",
    date: "2026-04-11T22:00:00.000Z",
    ticketUrl: "https://xceed.me/en/milano/event/los-locos-vs-nottelunga-w-edmmaro-dj-piro-packapunch909/223133/channel/gate-milano-website",
    imageUrl: "https://www.gatemilano.it/wp-content/uploads/2026/03/1080X1350-Los-locos-vs-Nottelunga-819x1024.png",
    genres: ["Clubbing"],
  },
  {
    title: "PERREO XL",
    date: "2026-04-11T22:00:00.000Z",
    ticketUrl: "https://xceed.me/en/milano/event/perreo-xl-2/214585/channel/gate-milano-website",
    imageUrl: "https://www.gatemilano.it/wp-content/uploads/2025/09/perreo-xl-saturdays-reggaeton-and-urban-milano-xceed-07ad-1-1024x576.webp",
    genres: ["Reggaeton", "Urban"],
  },
  {
    title: "IC3PEAK Milan",
    date: "2026-04-16T22:00:00.000Z",
    ticketUrl: "https://ticketshop.eu/en/events/106845",
    imageUrl: "https://www.gatemilano.it/wp-content/uploads/2026/02/ic3peak-724x1024.png",
    genres: ["Live Events"],
  },
  {
    title: "REVERSE",
    date: "2026-04-17T22:00:00.000Z",
    ticketUrl: "https://xceed.me/en/milano/event/reverse-4/221280/channel/gate-milano-website",
    imageUrl: "https://www.gatemilano.it/wp-content/uploads/2026/03/REBVERSE--1024x576.jpeg",
    genres: ["Techno"],
  },
  {
    title: "Cloudy, Hemptote, Gladjee",
    date: "2026-04-17T22:00:00.000Z",
    ticketUrl: "https://xceed.me/en/milano/event/cloudy--209261/channel--gate-milano-website",
    imageUrl: "https://www.gatemilano.it/wp-content/uploads/2025/11/CLOUDY-1080X1035.png",
    genres: ["Electronic Music"],
  },
  {
    title: "Persuasa: Lehar & Morab",
    date: "2026-04-18T22:00:00.000Z",
    ticketUrl: "https://xceed.me/en/milano/event/persuasa/223708/channel/gate-milano-website",
    imageUrl: "https://www.gatemilano.it/wp-content/uploads/2025/12/flyer1080x1080-1804-1024x1024.webp",
    genres: ["Techno"],
  },
  {
    title: "PERREO XL",
    date: "2026-04-18T22:00:00.000Z",
    ticketUrl: "https://xceed.me/en/milano/event/perreo-xl-3/214586/channel/gate-milano-website",
    imageUrl: "https://www.gatemilano.it/wp-content/uploads/2025/09/perreo-xl-saturdays-reggaeton-and-urban-milano-xceed-07ad-1-1024x576.webp",
    genres: ["Reggaeton", "Urban"],
  },
  {
    title: "LA VITA A 30 ANNI – ALCATRAZ MILANO",
    date: "2026-04-25T22:00:00.000Z",
    ticketUrl: "https://xceed.me/it/milano/event/la-vita-a-30-anni-la-notte-giovane-per-vecchi-dentro-4/223384",
    imageUrl: "https://www.gatemilano.it/wp-content/uploads/2026/01/2773aa22-b553-42c7-9be3-bbe559440cc2.webp",
    genres: ["Commercial Events"],
  },
  {
    title: "PERREO XL",
    date: "2026-04-25T22:00:00.000Z",
    ticketUrl: "https://xceed.me/en/milano/event/perreo-xl-4/214587/channel/gate-milano-website",
    imageUrl: "https://www.gatemilano.it/wp-content/uploads/2025/09/perreo-xl-saturdays-reggaeton-and-urban-milano-xceed-07ad-1-1024x576.webp",
    genres: ["Reggaeton", "Urban"],
  },
  {
    title: "OVERKAST",
    date: "2026-04-30T22:00:00.000Z",
    ticketUrl: "https://xceed.me/en/milano/event/overkast-6/223032/channel/gate-milano-website",
    imageUrl: "https://www.gatemilano.it/wp-content/uploads/2026/03/OverkastGate-30042026-1x1-1-1024x1024.jpg",
    genres: ["Techno"],
  },
  {
    title: "PERREO XL – XXXXXXXXL EDITION – 2nd ANNIVERSARY",
    date: "2026-04-30T22:00:00.000Z",
    ticketUrl: "https://xceed.me/en/milano/event/perreo-xl-xxxxxxxxl-edition-2nd-anniversary-reggaeton-and-urban/223029/channel/gate-milano-website",
    imageUrl: "https://www.gatemilano.it/wp-content/uploads/2026/03/Apr-30-1x1-1-1024x1024.png",
    genres: ["Reggaeton", "Urban"],
  },
  {
    title: "DYEN, SNTS, REBECCA BERNARDI",
    date: "2026-04-30T22:00:00.000Z",
    ticketUrl: "https://xceed.me/en/milano/event/dyen-snts-rebecca-bernardi/218714/channel/gate-milano-website",
    imageUrl: "https://www.gatemilano.it/wp-content/uploads/2026/02/DYEN-1080X1350-1.png",
    genres: ["Techno"],
  },
  {
    title: "PERREO XL",
    date: "2026-05-02T22:00:00.000Z",
    ticketUrl: "https://xceed.me/en/milano/event/perreo-xl-5/214588/channel/gate-milano-website",
    imageUrl: "https://www.gatemilano.it/wp-content/uploads/2025/09/perreo-xl-saturdays-reggaeton-and-urban-milano-xceed-07ad-1-1024x576.webp",
    genres: ["Reggaeton", "Urban"],
  },
  {
    title: "Schranz Movement Milano",
    date: "2026-05-09T22:00:00.000Z",
    ticketUrl: "https://xceed.me/en/milano/event/schranz-movement-milano/219887/channel/gate-milano-website",
    imageUrl: "https://www.gatemilano.it/wp-content/uploads/2026/03/Schranz-Movement-x-Gate-Milano-Square-1024x1024.jpg",
    genres: ["Techno", "Hard Techno"],
  },
  {
    title: "PERREO XL",
    date: "2026-05-09T22:00:00.000Z",
    ticketUrl: "https://xceed.me/en/milano/event/perreo-xl-6/214589/channel/gate-milano-website",
    imageUrl: "https://www.gatemilano.it/wp-content/uploads/2025/09/perreo-xl-saturdays-reggaeton-and-urban-milano-xceed-07ad-1-1024x576.webp",
    genres: ["Reggaeton", "Urban"],
  },
  {
    title: "Oxxxymiron",
    date: "2026-05-14T22:00:00.000Z",
    ticketUrl: "https://somewhere.show/oxxxymiron-milan",
    imageUrl: "https://www.gatemilano.it/wp-content/uploads/2026/01/1080-1080-copy-1024x1024.png",
    genres: ["Live Events"],
  },
  {
    title: "PERREO XL",
    date: "2026-05-16T22:00:00.000Z",
    ticketUrl: "https://xceed.me/en/milano/event/perreo-xl-7/214590/channel/gate-milano-website",
    imageUrl: "https://www.gatemilano.it/wp-content/uploads/2025/09/perreo-xl-saturdays-reggaeton-and-urban-milano-xceed-07ad-1-1024x576.webp",
    genres: ["Reggaeton", "Urban"],
  },
  {
    title: "EZEDIEL ALL NIGHT LONG at GATE",
    date: "2026-05-23T22:00:00.000Z",
    ticketUrl: "https://xceed.me/en/milano/event/ezediel-all-night-long-at-gate/224390/channel/gate-milano-website",
    imageUrl: "https://www.gatemilano.it/wp-content/uploads/2026/01/Flyer-EXCEED.png",
    genres: ["Techno"],
  },
  {
    title: "PERREO XL",
    date: "2026-05-23T22:00:00.000Z",
    ticketUrl: "https://xceed.me/en/milano/event/perreo-xl-8/214591/channel/gate-milano-website",
    imageUrl: "https://www.gatemilano.it/wp-content/uploads/2025/09/perreo-xl-saturdays-reggaeton-and-urban-milano-xceed-07ad-1-1024x576.webp",
    genres: ["Reggaeton", "Urban"],
  },
  {
    title: "999999999, Antonio De Angelis, Gladjee B2B Vittorio Di Mango",
    date: "2026-05-29T22:00:00.000Z",
    ticketUrl: "https://xceed.me/en/milano/event/999999999-antonio-de-angelis-gladjee-b2b-vittorio-di-mango/218716/channel/gate-milano-website",
    imageUrl: "https://www.gatemilano.it/wp-content/uploads/2026/02/Niinetimesnine-1080X1350-1-1.png",
    genres: ["Techno"],
  },
  {
    title: "PERREO XL",
    date: "2026-05-30T22:00:00.000Z",
    ticketUrl: "https://xceed.me/en/milano/event/perreo-xl-9/214592/channel/gate-milano-website",
    imageUrl: "https://www.gatemilano.it/wp-content/uploads/2025/09/perreo-xl-saturdays-reggaeton-and-urban-milano-xceed-07ad-1-1024x576.webp",
    genres: ["Reggaeton", "Urban"],
  },
  {
    title: "PERREO XL",
    date: "2026-06-06T22:00:00.000Z",
    ticketUrl: "https://xceed.me/en/milano/event/perreo-xl-10/214593/channel/gate-milano-website",
    imageUrl: "https://www.gatemilano.it/wp-content/uploads/2025/09/perreo-xl-saturdays-reggaeton-and-urban-milano-xceed-07ad-1-1024x576.webp",
    genres: ["Reggaeton", "Urban"],
  },
  {
    title: "PERREO XL",
    date: "2026-06-13T22:00:00.000Z",
    ticketUrl: "https://xceed.me/en/milano/event/perreo-xl-11/214594/channel/gate-milano-website",
    imageUrl: "https://www.gatemilano.it/wp-content/uploads/2025/09/perreo-xl-saturdays-reggaeton-and-urban-milano-xceed-07ad-1-1024x576.webp",
    genres: ["Reggaeton", "Urban"],
  },
  {
    title: "PERREO XL",
    date: "2026-06-20T22:00:00.000Z",
    ticketUrl: "https://xceed.me/en/milano/event/perreo-xl-12/214595/channel/gate-milano-website",
    imageUrl: "https://www.gatemilano.it/wp-content/uploads/2025/09/perreo-xl-saturdays-reggaeton-and-urban-milano-xceed-07ad-1-1024x576.webp",
    genres: ["Reggaeton", "Urban"],
  },
  {
    title: "PERREO XL",
    date: "2026-06-27T22:00:00.000Z",
    ticketUrl: "https://xceed.me/en/milano/event/perreo-xl-13/214596/channel/gate-milano-website",
    imageUrl: "https://www.gatemilano.it/wp-content/uploads/2025/09/perreo-xl-saturdays-reggaeton-and-urban-milano-xceed-07ad-1-1024x576.webp",
    genres: ["Reggaeton", "Urban"],
  },
];

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 96);
}

async function uploadImage(imageUrl, title) {
  try {
    const res = await fetch(imageUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = await res.arrayBuffer();
    const ext = imageUrl.split(".").pop().split("?")[0];
    const mimeTypes = { jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", webp: "image/webp" };
    const contentType = mimeTypes[ext] || "image/jpeg";
    const asset = await client.assets.upload("image", Buffer.from(buffer), {
      filename: `${slugify(title)}.${ext}`,
      contentType,
    });
    return asset._id;
  } catch (err) {
    console.warn(`  ⚠ Could not upload image for "${title}": ${err.message}`);
    return null;
  }
}

async function main() {
  if (!env.SANITY_API_TOKEN) {
    console.error("❌ SANITY_API_TOKEN not found in .env.local");
    console.error("Add it: SANITY_API_TOKEN=skXXXX...");
    process.exit(1);
  }

  console.log(`Importing ${events.length} events...\n`);

  for (const event of events) {
    process.stdout.write(`→ ${event.title}... `);

    const imageAssetId = await uploadImage(event.imageUrl, event.title);

    const doc = {
      _type: "event",
      title: event.title,
      slug: { _type: "slug", current: slugify(event.title + "-" + event.date.slice(0, 10)) },
      date: event.date,
      genres: event.genres,
      ticketUrl: event.ticketUrl,
      isSoldOut: false,
    };

    if (imageAssetId) {
      doc.image = { _type: "image", asset: { _type: "reference", _ref: imageAssetId } };
    }

    await client.create(doc);
    console.log("✓");
  }

  console.log("\n✅ Done! All events imported.");
}

main().catch(console.error);
