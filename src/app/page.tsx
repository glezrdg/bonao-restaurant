import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section, SectionLabel, SectionTitle } from "@/components/layout/Section";
import { HeroSection } from "@/components/sections/HeroSection";
import { EditorialGrid } from "@/components/sections/EditorialGrid";
import { MenuPreview } from "@/components/sections/MenuPreview";
import { ReviewSection } from "@/components/sections/ReviewSection";
import { BookingBlock } from "@/components/sections/BookingBlock";
import { menu } from "@/data/menu";

const signatureItems = [
  {
    image: "/optimized/katrine/3P4A0102_800.webp",
    title: "Live Lounge Experience",
    href: "/events",
  },
  {
    image: "/optimized/katrine/3P4A0028_800.webp",
    title: "Fine Dining Cuisine",
    href: "/menu",
  },
  {
    image: "/optimized/katrine/3P4A0047_800.webp",
    title: "Signature Cocktails",
    href: "/drinks",
  },
  {
    image: "/optimized/restaurant/_S8A7314_800.webp",
    title: "Private Dining Rooms",
    href: "/parties",
  },
  {
    image: "/optimized/katrine/3P4A0150_800.webp",
    title: "Wine & Spirits Selection",
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
        {/* 1. Hero Section - Dark with Carousel */}
        <HeroSection
          headline="Fire & Spirits"
          subheadline="Modern Dominican cuisine crafted for the night. Bold flavors, intimate atmosphere, unforgettable experiences."
          backgroundImages={[
            "/optimized/restaurant/_S8A7285",
            "/optimized/restaurant/_S8A7295",
            "/optimized/restaurant/_S8A7314",
            "/optimized/restaurant/_S8A7351",
          ]}
          interval={6000}
        />

        {/* 2. Signatures Section - Paper (Linen) */}
        <Section variant="paper" id="signatures">
          <EditorialGrid
            headline="WHERE EVERY FLAVOR"
            subheadline="ELEVATED BY ELEGANCE"
            items={signatureItems}
          />
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
