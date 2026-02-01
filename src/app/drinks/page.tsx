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
  title: "Drinks | Bonao Restaurant",
  description:
    "Craft cocktails, fresh juices, and premium spirits. Experience our curated beverage selection.",
};

export default function DrinksPage() {
  const drinkCategories = menu.filter((cat) => cat.name === "Juices & Drinks");

  return (
    <>
      <Header transparent />
      <main>
        {/* Hero Banner */}
        <PageHeader
          label="SIP"
          title="Drinks & Spirits"
          description="Fresh tropical juices, craft cocktails, and premium beverages to complement your meal."
          backgroundImage="/optimized/restaurant/_S8A7351"
        />

        {/* Drinks Grid */}
        <Section variant="paper">
          <MenuGrid
            categories={drinkCategories}
            showCategoryNav={false}
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
