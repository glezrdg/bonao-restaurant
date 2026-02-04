import type { Metadata, Viewport } from "next";
import { Figtree, EB_Garamond } from "next/font/google";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "500", "600"],
});

const baseUrl = "https://bonaorestaurant.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0C0C0C",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Bonao Restaurant | Modern Dominican Cuisine in Brooklyn, NY",
    template: "%s | Bonao Restaurant Brooklyn",
  },
  description:
    "Brooklyn's premier Dominican restaurant. Experience modern Caribbean cuisine, craft cocktails, live music, and private dining. Located on Jamaica Avenue. Reserve your table today.",
  keywords: [
    "Dominican restaurant Brooklyn",
    "Bonao restaurant",
    "Caribbean food NYC",
    "Dominican cuisine New York",
    "Brooklyn restaurants",
    "Jamaica Avenue restaurants",
    "live music restaurant Brooklyn",
    "private dining Brooklyn",
    "craft cocktails Brooklyn",
    "mofongo Brooklyn",
    "Dominican food near me",
    "best Dominican restaurant NYC",
    "Caribbean restaurant Brooklyn",
    "fine dining Brooklyn",
    "date night Brooklyn",
  ],
  authors: [{ name: "Bonao Restaurant" }],
  creator: "Bonao Restaurant",
  publisher: "Bonao Restaurant",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Bonao Restaurant | Modern Dominican Cuisine in Brooklyn",
    description:
      "Brooklyn's premier Dominican restaurant featuring modern Caribbean cuisine, craft cocktails, live music, and private dining experiences.",
    url: baseUrl,
    siteName: "Bonao Restaurant",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/optimized/restaurant/_S8A7314_1200.webp",
        width: 1200,
        height: 630,
        alt: "Bonao Restaurant - Modern Dominican Cuisine in Brooklyn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bonao Restaurant | Modern Dominican Cuisine in Brooklyn",
    description:
      "Brooklyn's premier Dominican restaurant. Modern Caribbean cuisine, craft cocktails & live music.",
    images: ["/optimized/restaurant/_S8A7314_1200.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  category: "Restaurant",
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

// JSON-LD Structured Data for Restaurant
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Bonao Restaurant",
  alternateName: "Bonao Bar and Grill",
  description:
    "Modern Dominican cuisine restaurant in Brooklyn featuring craft cocktails, live music, and private dining experiences.",
  url: baseUrl,
  telephone: "+1-718-346-0285",
  email: "Bonaobarandgrill@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Jamaica Avenue",
    addressLocality: "Brooklyn",
    addressRegion: "NY",
    postalCode: "11207",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.6912,
    longitude: -73.8827,
  },
  image: [
    `${baseUrl}/optimized/restaurant/_S8A7314_1200.webp`,
    `${baseUrl}/optimized/restaurant/_S8A7285_1200.webp`,
  ],
  priceRange: "$$",
  servesCuisine: ["Dominican", "Caribbean", "Latin American"],
  acceptsReservations: "True",
  hasMenu: `${baseUrl}/menu`,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "16:00",
      closes: "00:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday", "Sunday"],
      opens: "16:00",
      closes: "01:00",
    },
  ],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Live Music", value: true },
    { "@type": "LocationFeatureSpecification", name: "Full Bar", value: true },
    { "@type": "LocationFeatureSpecification", name: "Outdoor Seating", value: true },
    { "@type": "LocationFeatureSpecification", name: "Private Events", value: true },
    { "@type": "LocationFeatureSpecification", name: "Valet Parking", value: true },
  ],
  sameAs: [
    "https://www.instagram.com/bonaorestaurant/",
    "https://www.facebook.com/bonaobarandgrill",
    "https://www.tiktok.com/@bonaorestaurant",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "150",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${figtree.variable} ${ebGaramond.variable} font-sans antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
