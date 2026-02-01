import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section, SectionLabel, SectionTitle } from "@/components/layout/Section";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { MenuPreview } from "@/components/sections/MenuPreview";
import { ReviewSection } from "@/components/sections/ReviewSection";
import { BookingBlock } from "@/components/sections/BookingBlock";
import { menu } from "@/data/menu";

const signatureItems = [
  {
    image: "/optimized/katrine/3P4A0028_800.webp",
    title: "Chef's Selections",
    description: "Signature dishes crafted with passion",
    href: "/menu",
  },
  {
    image: "/optimized/katrine/3P4A0102_800.webp",
    title: "Craft Cocktails",
    description: "Handcrafted spirits and fresh juices",
    href: "/drinks",
  },
  {
    image: "/optimized/restaurant/_S8A7314_800.webp",
    title: "Private Dining",
    description: "Intimate spaces for special occasions",
    href: "/parties",
  },
  {
    image: "/optimized/katrine/3P4A0150_800.webp",
    title: "Wine & Spirits",
    description: "Curated selection from around the world",
    href: "/drinks",
  },
];

const reviews = [
  {
    text: "Best Dominican food in Brooklyn! The atmosphere is incredible.",
    author: "Maria G.",
  },
  {
    text: "The cocktails are amazing and the food is even better. A must-visit!",
    author: "James T.",
  },
  {
    text: "Our go-to for special occasions. The private dining room is perfect.",
    author: "Lisa M.",
  },
];

const badges = ["Valet Parking", "Private Rooms", "Live Music", "Full Bar"];

export default function Home() {
  // Get menu items for preview
  const mainCourses = menu.find((c) => c.name === "Main Courses")?.items.slice(0, 4) || [];
  const drinks = menu.find((c) => c.name === "Juices & Drinks")?.items.slice(0, 4) || [];

  return (
    <>
      <Header transparent />
      <main>
        {/* 1. Hero Section - Dark */}
        <HeroSection
          headline="Fire & Spirits"
          subheadline="Modern Dominican cuisine crafted for the night. Bold flavors, intimate atmosphere, unforgettable experiences."
          backgroundImage="/optimized/restaurant/_S8A7285"
        />

        {/* 2. Signatures Section - Paper (Linen) */}
        <Section variant="paper" id="signatures">
          <div className="text-center mb-12">
            <SectionLabel variant="paper">SIGNATURES</SectionLabel>
            <SectionTitle variant="paper">Crafted for the night.</SectionTitle>
          </div>
          <FeatureGrid items={signatureItems} />
        </Section>

        {/* 3. Tonight's Specials - Dark */}
        <Section variant="dark" id="specials">
          <div className="text-center mb-12">
            <SectionLabel variant="dark">TONIGHT</SectionLabel>
            <SectionTitle variant="dark">Chef&apos;s selections</SectionTitle>
          </div>
          <MenuPreview
            leftColumn={{
              title: "Fresh Juices & Drinks",
              items: drinks,
            }}
            centerImage="/optimized/katrine/3P4A0047_1200.webp"
            rightColumn={{
              title: "From the Kitchen",
              items: mainCourses,
            }}
          />
        </Section>

        {/* 4. Reviews Section - Paper (Linen) */}
        <Section variant="paper" id="reviews">
          <div className="text-center mb-12">
            <SectionLabel variant="paper">WHAT THEY SAY</SectionLabel>
            <SectionTitle variant="paper">Guests love us</SectionTitle>
          </div>
          <ReviewSection reviews={reviews} badges={badges} />
        </Section>

        {/* 5. Booking Block - Dark */}
        <Section variant="dark" id="reserve">
          <BookingBlock showPrivateDiningCTA />
        </Section>
      </main>
      <Footer />
    </>
  );
}
