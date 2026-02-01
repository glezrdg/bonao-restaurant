import type { Metadata } from "next";
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
  style: ["italic"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Bonao Restaurant | Modern Dominican Cuisine in Brooklyn",
  description: "Experience premium Dominican cuisine with craft cocktails and an intimate atmosphere. Reserve your table or order online.",
  keywords: ["restaurant", "Dominican food", "Bonao", "Brooklyn", "Caribbean cuisine", "craft cocktails"],
  openGraph: {
    title: "Bonao Restaurant | Modern Dominican Cuisine in Brooklyn",
    description: "Experience premium Dominican cuisine with craft cocktails and an intimate atmosphere.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${ebGaramond.variable} font-sans antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
