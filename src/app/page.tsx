import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section, SectionLabel, SectionTitle } from "@/components/layout/Section";
import { HeroSection } from "@/components/sections/HeroSection";
import { EventsShowcase } from "@/components/sections/EventsShowcase";
import { MenuPreview } from "@/components/sections/MenuPreview";
import { ReviewSection } from "@/components/sections/ReviewSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { menu } from "@/data/menu";

const reviews = [
  {
    text: "I loved the atmosphere. The food is exquisite and giving luxury! I dances and had amazing time. I would totally recommend and for the quality the prices are excellent for the quality.",
    author: "Amel Trinidad",
    timeAgo: "2 weeks ago",
    isNew: true,
  },
  {
    text: "Very friendly, sophisticated, ambient lighting, perfect for any event. The menu is very different to what is in the area. Would 100% come back and recommend friends.",
    author: "Laury Paulino",
    timeAgo: "2 months ago",
  },
  {
    text: "This restaurant absolutely blew me away! It's gourmet Dominican cuisine with a modern twist unlike any other. Our group got different drinks and they were all delicious. A beautifully decorated establishment.",
    author: "Rachel Vargas-Chavez",
    timeAgo: "6 months ago",
  },
];

const badges = ["Valet Parking", "Private Rooms", "Live Music", "Full Bar"];

export default function Home() {
  // Get menu items for preview
  const mainCourses = menu.find((c) => c.name === "Main Courses")?.items.slice(0, 4) || [];
  const drinks = menu.find((c) => c.name === "Juices & Drinks")?.items.slice(0, 4) || [];

  return (
    <>
      <Header transparent animatedLogo />
      <main>
        {/* 1. Hero Section - Dark with Carousel */}
        <HeroSection
          subheadline="Modern Dominican cuisine crafted for the night. Bold flavors, intimate atmosphere, unforgettable experiences."
          backgroundImages={[
            "/optimized/restaurant/_S8A7279",
            "/optimized/restaurant/_S8A7281",
            "/optimized/restaurant/_S8A7328",
            "/optimized/restaurant/_S8A7361",
          ]}
          interval={6000}
        />

        {/* 2. Events Section - Paper (Linen) */}
        <Section variant="paper" id="events">
          <EventsShowcase />
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

        {/* 5. Gallery Section - Dark */}
        <Section variant="dark" id="gallery">
          <GallerySection />
        </Section>
      </main>
      <Footer />
    </>
  );
}
