import { readFileSync } from "node:fs";

const legacy = JSON.parse(readFileSync(new URL("./src/data/legacy-content.json", import.meta.url), "utf8"));
const currentRoutes = new Set([
  "about", "affiliate-disclosure", "blog", "contact", "editorial-policy", "faq",
  "guides", "point-of-view", "sources", "tools/sauna-room-calculator",
]);

const sameSiteDestination = (destination) => {
  try {
    const url = new URL(destination);
    if (url.hostname === "homesaunaguide.com" || url.hostname === "www.homesaunaguide.com") {
      return `${url.pathname}${url.search}` || "/";
    }
  } catch {
    return destination.startsWith("/") ? destination : `/${destination}`;
  }
  return destination;
};

const rankMathRedirects = legacy.redirects
  .filter((item) => item.comparison === "exact" && !currentRoutes.has(item.source.replace(/^\/+|\/+$/g, "")))
  .map((item) => {
    const [pathname, query = ""] = item.source.split("?");
    const redirect = {
      source: `/${pathname}`.replace(/\/{2,}/g, "/"),
      destination: sameSiteDestination(item.destination),
      permanent: item.statusCode === 301,
    };
    if (!query) return redirect;
    const [key, ...value] = query.split("=");
    return { ...redirect, has: [{ type: "query", key, value: value.join("=") }] };
  });

const idRedirects = legacy.posts
  .filter((post) => Number.isInteger(post.id))
  .map((post) => ({
    source: "/",
    has: [{ type: "query", key: "p", value: String(post.id) }],
    destination: post.path,
    permanent: true,
  }));

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "web.archive.org", pathname: "/web/**" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.homesaunaguide.com" }],
        destination: "https://homesaunaguide.com/:path*",
        permanent: true,
      },
      { source: "/2019/05", destination: "/blog", permanent: true },
      { source: "/2019/05/", destination: "/blog", permanent: true },
      { source: "/sauna-marketplace-homepage", destination: "/", permanent: true },
      { source: "/sauna-marketplace-homepage/", destination: "/", permanent: true },
      { source: "/author/bennyburger", destination: "/about", permanent: true },
      { source: "/author/bennyburger/", destination: "/about", permanent: true },
      { source: "/category/home-sauna-tips", destination: "/guides", permanent: true },
      { source: "/category/home-sauna-tips/", destination: "/guides", permanent: true },
      { source: "/category/sauna-guide", destination: "/guides", permanent: true },
      { source: "/category/sauna-guide/", destination: "/guides", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/cgi-sys/defaultwebpage.cgi", destination: "/", permanent: true },
      { source: "/feed", destination: "/blog", permanent: true },
      ...rankMathRedirects,
      ...idRedirects,
    ];
  },
};

export default nextConfig;
