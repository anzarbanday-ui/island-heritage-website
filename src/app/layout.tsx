import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";
import { FloatingCTAs } from "@/components/FloatingCTAs";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Boutique Heritage Hotel — Srinagar, Kashmir`,
    template: `%s | ${site.name}`
  },
  description: site.tagline,
  keywords: [
    "Island Heritage hotel",
    "boutique hotel Srinagar",
    "luxury hotel Kashmir",
    "heritage hotel Srinagar",
    "Lal Chowk hotel",
    "Dal Lake hotel",
    "Kashmir accommodation"
  ],
  openGraph: {
    title: `${site.name} | Boutique Heritage Hotel — Srinagar, Kashmir`,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} — Srinagar, Kashmir`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Boutique Heritage Hotel`,
    description: site.tagline,
    images: ["/og-image.jpg"]
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url }
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": site.name,
  "description": site.tagline,
  "url": site.url,
  "telephone": site.phone,
  "email": site.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Peerzu Island, Near GPO, Lal Chowk",
    "addressLocality": "Srinagar",
    "addressRegion": "Jammu & Kashmir",
    "postalCode": "190001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.0711899,
    "longitude": 74.8253108
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "07:00",
    "closes": "23:00"
  },
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "WiFi", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Parking", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Room Service", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Food Service", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Airport Transfer", "value": true }
  ],
  "priceRange": "₹₹₹",
  "image": `${site.url}/og-image.jpg`,
  "sameAs": []
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingCTAs />
      </body>
    </html>
  );
}
