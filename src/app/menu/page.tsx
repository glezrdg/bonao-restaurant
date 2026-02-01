import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { MenuGrid } from "@/components/pages/MenuGrid";
import { CTABar } from "@/components/sections/CTABar";
import { PageHeader } from "@/components/sections/PageHeader";
import { menu, restaurantInfo } from "@/data/menu";
import { generateWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Menu | Bonao Restaurant",
  description:
    "Explore our menu featuring modern Dominican cuisine. Appetizers, main courses, sides, and desserts crafted with authentic flavors.",
};

export default function MenuPage() {
  // Filter out drinks for dedicated drinks page
  const foodCategories = menu.filter((cat) => cat.name !== "Juices & Drinks");

  return (
    <>
      <Header transparent />
      <main>
        {/* Hero Banner */}
        <PageHeader
          label="TASTE"
          title="Our Menu"
          description="Modern Dominican cuisine honoring bold flavors and tradition. Every dish tells a story of heritage and innovation."
          backgroundImage="/optimized/restaurant/_S8A7295"
        />

        {/* Menu Grid */}
        <Section variant="paper">
          <MenuGrid
            categories={foodCategories}
            showCategoryNav
            itemLinkUrl={restaurantInfo.orderOnlineUrl}
          />
        </Section>

        {/* Sticky CTA Bar */}
        <CTABar
          primaryCta={{ label: "Order Online", href: restaurantInfo.orderOnlineUrl }}
          secondaryCta={{ label: "Order via WhatsApp", href: generateWhatsAppUrl() }}
          variant="dark"
        />
      </main>
      <Footer />
    </>
  );
}
