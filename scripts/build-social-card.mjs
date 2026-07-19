import sharp from "sharp";

const [source, destination = "public/og-v2.png"] = process.argv.slice(2);
if (!source) throw new Error("Usage: node scripts/build-social-card.mjs <source-image> [destination]");

const overlay = Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shade" x1="0" x2="1">
        <stop offset="0" stop-color="#0d2721" stop-opacity="0.98"/>
        <stop offset="0.5" stop-color="#0d2721" stop-opacity="0.70"/>
        <stop offset="0.72" stop-color="#0d2721" stop-opacity="0.12"/>
        <stop offset="1" stop-color="#0d2721" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#shade)"/>
    <circle cx="78" cy="76" r="32" fill="#fffdf8"/>
    <text x="78" y="88" text-anchor="middle" fill="#17372f" font-family="Baskerville, Georgia, serif" font-size="34">H</text>
    <text x="132" y="83" fill="#fffdf8" font-family="Arial, sans-serif" font-size="16" font-weight="700" letter-spacing="5">HOME SAUNA GUIDE</text>
    <text x="50" y="245" fill="#fffdf8" font-family="Baskerville, Georgia, serif" font-size="78">
      <tspan x="50" dy="0">Better löyly starts</tspan>
      <tspan x="50" dy="86">with the room.</tspan>
    </text>
    <text x="54" y="540" fill="#f5c5a9" font-family="Arial, sans-serif" font-size="14" font-weight="700" letter-spacing="2.2">BATHER-FIRST HEAT  ·  BREATHABLE AIR  ·  HONEST TRADEOFFS</text>
  </svg>
`);

await sharp(source)
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .composite([{ input: overlay, top: 0, left: 0 }])
  .png({ compressionLevel: 9, palette: true, quality: 92 })
  .toFile(destination);

console.log(destination);
