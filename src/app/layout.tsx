import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { SITE } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Home Sauna Guide | Better Löyly by Design",
    template: "%s | Home Sauna Guide",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: "Home Sauna Guide Editorial Team" }],
  creator: "Home Sauna Guide Editorial Team",
  publisher: SITE.name,
  category: "Home Improvement",
  keywords: ["home sauna", "sauna planning", "build a sauna", "sauna heater", "sauna ventilation", "Finnish sauna"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Home Sauna Guide | Better löyly starts with the room",
    description: SITE.description,
    url: SITE.url,
    images: [{ url: "/og-v3.png", width: 1200, height: 630, alt: "Home Sauna Guide: better löyly starts with the room" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Sauna Guide",
    description: "Bather-first heat, breathable air, useful geometry, durable assemblies, and honest tradeoffs.",
    images: ["/og-v3.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#17372f",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      email: SITE.email,
      description: SITE.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      name: SITE.name,
      url: SITE.url,
      description: SITE.description,
      publisher: { "@id": `${SITE.url}/#organization` },
      inLanguage: "en-US",
    },
  ];

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <JsonLd data={structuredData} />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
