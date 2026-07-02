import { createWriteStream, mkdirSync, existsSync } from "node:fs";
import { dirname, join, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "..", "public");

const ASSETS = [
  "https://arbitrum.io/_next/static/media/AeonikFono_Regular-s.p.0jb6l04h1rhsm.woff",
  "https://arbitrum.io/_next/static/media/Aeonik_Medium-s.p.0q~vge5orjjn3.otf",
  "https://arbitrum.io/_next/static/media/Aeonik_Regular-s.p.0ftq0wdzi66u6.otf",
  "https://arbitrum.io/_next/static/media/DMMono_Regular-s.p.0o2e964hvo05l.ttf",
  "https://arbitrum.io/_next/static/media/DMSans_VariableFont_opsz%2Cwght-s.p.03bhhnavum~6o.ttf",
  "https://arbitrum.io/_next/static/media/FKScreamer_Upright-s.p.0~no7z3p.cbqt.otf",
  "https://arbitrum.io/_next/static/media/FjallaOne_Regular-s.p.11gh01x_oggqs.ttf",
  "https://arbitrum.io/all_on_arbitrum.svg",
  "https://arbitrum.io/apple-icon.png?apple-icon.12ip5.gsexlpz.png",
  "https://arbitrum.io/arb_logo_color.svg",
  "https://arbitrum.io/arrow_right.svg",
  "https://arbitrum.io/assets/arbitrum/logo_color.svg",
  "https://arbitrum.io/assets/usd-ai.webp",
  "https://arbitrum.io/assets/usdc.webp",
  "https://arbitrum.io/brandkit/icon_white.svg",
  "https://arbitrum.io/computer.webp",
  "https://arbitrum.io/discord_icon.svg",
  "https://arbitrum.io/globe.webp",
  "https://arbitrum.io/hand.webp",
  "https://arbitrum.io/homepage/deploy.webp",
  "https://arbitrum.io/homepage/hero/arbitrum_everywhere.svg",
  "https://arbitrum.io/homepage/hero/scene_3_cube_face.webp",
  "https://arbitrum.io/homepage/hero/scene_4_cube_face.webp",
  "https://arbitrum.io/homepage/hero/scene_5_cube_face.webp",
  "https://arbitrum.io/homepage/hero/xerox_scan.webp",
  "https://arbitrum.io/homepage/hexagon.svg",
  "https://arbitrum.io/homepage/launch.webp",
  "https://arbitrum.io/homepage/lego_cube.webp",
  "https://arbitrum.io/images/orbitchains/robinhood-logo.webp",
  "https://arbitrum.io/images/orbitchains/t-rex-logo.webp",
  "https://arbitrum.io/images/projects/aave-logo.webp",
  "https://arbitrum.io/images/projects/berry-logo.webp",
  "https://arbitrum.io/images/projects/blackbird-logo.webp",
  "https://arbitrum.io/images/projects/el-dorado-logo.webp",
  "https://arbitrum.io/images/projects/ethereal-logo.webp",
  "https://arbitrum.io/images/projects/farcaster-logo.webp",
  "https://arbitrum.io/images/projects/forkast-logo.webp",
  "https://arbitrum.io/images/projects/gmx-logo.webp",
  "https://arbitrum.io/images/projects/golden-tides-logo.webp",
  "https://arbitrum.io/images/projects/hyve-logo.webp",
  "https://arbitrum.io/images/projects/l3e7-logo.webp",
  "https://arbitrum.io/images/projects/morpho-logo.webp",
  "https://arbitrum.io/images/projects/my-pet-hooligan-logo.webp",
  "https://arbitrum.io/images/projects/opensea-logo.webp",
  "https://arbitrum.io/images/projects/ostium-logo.webp",
  "https://arbitrum.io/images/projects/otherside-logo.webp",
  "https://arbitrum.io/images/projects/peanut-logo.webp",
  "https://arbitrum.io/images/projects/pendle-logo.webp",
  "https://arbitrum.io/images/projects/riftstorm-logo.webp",
  "https://arbitrum.io/images/projects/session-logo.webp",
  "https://arbitrum.io/images/projects/the-beacon-logo.webp",
  "https://arbitrum.io/images/projects/uniswap-labs-logo.webp",
  "https://arbitrum.io/images/projects/usd-ai-logo.webp",
  "https://arbitrum.io/images/projects/usdt0-logo.webp",
  "https://arbitrum.io/images/projects/variational-logo.webp",
  "https://arbitrum.io/images/projects/wildcard-logo.webp",
  "https://arbitrum.io/instagram_icon.svg",
  "https://arbitrum.io/letter_a.svg",
  "https://arbitrum.io/letter_b.svg",
  "https://arbitrum.io/letter_i.svg",
  "https://arbitrum.io/letter_m.svg",
  "https://arbitrum.io/letter_r.svg",
  "https://arbitrum.io/letter_t.svg",
  "https://arbitrum.io/letter_u.svg",
  "https://arbitrum.io/linkedin_icon.svg",
  "https://arbitrum.io/tiktok_icon.svg",
  "https://arbitrum.io/tunnel.webp",
  "https://arbitrum.io/twitter_icon.svg",
  "https://arbitrum.io/youtube_icon.svg",
  "https://arbitrum.io/favicon.ico?favicon.12ip5.gsexlpz.ico",
  "https://arbitrum.io/icon.ico?icon.12ip5.gsexlpz.ico",
  "https://arbitrum.io/opengraph-image.jpg?opengraph-image.00090l05labas.jpg",
  "https://blog.arbitrum.io/content/images/size/w2000/2025/04/5165794889500307030.jpg",
  "https://blog.arbitrum.io/content/images/size/w2000/2025/06/0625_ArbitrumRobinhood_Blog_1600x828--1-.png",
  "https://blog.arbitrum.io/content/images/size/w2000/2025/06/gmx.jpg",
  "https://blog.arbitrum.io/content/images/size/w2000/2025/07/rho.jpg",
  "https://blog.arbitrum.io/content/images/size/w2000/2025/08/0825_USDAI_CaseStudy_Blog_1.jpg",
  "https://blog.arbitrum.io/content/images/size/w2000/2025/08/0825_Variational_CaseStudy_Blog_option1.jpg",
  "https://blog.arbitrum.io/content/images/size/w2000/2025/09/0925_Arbitrum_LitProtocol_Blog_option3.jpg",
  "https://blog.arbitrum.io/content/images/size/w2000/2025/10/1025_Talos_CaseStudy_Blog.jpg",
];

function mapToLocal(url) {
  const u = new URL(url);
  let p = decodeURIComponent(u.pathname);
  // strip query
  if (u.host === "blog.arbitrum.io") {
    const name = p.split("/").pop();
    return join("images", "case-studies", name);
  }
  if (p.startsWith("/_next/static/media/")) {
    const orig = p.split("/").pop();
    // clean hashed name -> keep readable base
    const base = orig.replace(/-s\.p\..*$/, "");
    const ext = extname(orig);
    return join("fonts", base + ext);
  }
  // favicons / og / apple icon -> seo
  if (p === "/favicon.ico" || p === "/icon.ico" || p === "/apple-icon.png" || p === "/opengraph-image.jpg") {
    const name = p.split("/").pop();
    return join("seo", name);
  }
  // keep rest of path as-is under public
  return p.replace(/^\//, "");
}

async function download(url, dest) {
  const out = join(PUBLIC, dest);
  if (existsSync(out)) return { url, dest: "skip" };
  mkdirSync(dirname(out), { recursive: true });
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok || !res.body) throw new Error(`HTTP ${res.status} for ${url}`);
  await pipeline(Readable.fromWeb(res.body), createWriteStream(out));
  return { url, dest };
}

const CONCURRENCY = 6;
async function run() {
  let i = 0;
  const results = [];
  async function worker() {
    while (i < ASSETS.length) {
      const idx = i++;
      const url = ASSETS[idx];
      try {
        const r = await download(url, mapToLocal(url));
        results.push(r);
        console.log(`OK  ${r.dest}`);
      } catch (e) {
        console.error(`FAIL ${url} -> ${e.message}`);
        results.push({ url, dest: "FAIL", error: e.message });
      }
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  const ok = results.filter((r) => r.dest !== "FAIL" && r.dest !== "skip").length;
  const skip = results.filter((r) => r.dest === "skip").length;
  const fail = results.filter((r) => r.dest === "FAIL").length;
  console.log(`\nDone: ${ok} downloaded, ${skip} skipped, ${fail} failed`);
}
run();
