import { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section, SectionLabel, SectionTitle } from "@/components/layout/Section";
import { PageHeader } from "@/components/sections/PageHeader";

export const metadata: Metadata = {
  title: "About | Bonao Restaurant",
  description:
    "The story behind Bonao Restaurant. Modern Dominican cuisine rooted in tradition, served in the heart of Brooklyn.",
};

export default function AboutPage() {
  return (
    <>
      <Header transparent />
      <main>
        {/* Hero */}
        <PageHeader
          label="OUR STORY"
          title="About Bonao"
          description="Named after the vibrant city in the heart of the Dominican Republic, Bonao Restaurant brings authentic Dominican flavors to Brooklyn. We believe in honoring tradition while embracing innovation."
          backgroundImage="/optimized/restaurant/_S8A7285"
          className="pb-20"
        />

        {/* Story Section */}
        <Section variant="paper" className="py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <span className="section-label text-sage">THE BEGINNING</span>
              <h2 className="font-garamond text-4xl text-espresso mt-2 mb-6">
                Where tradition meets innovation
              </h2>
              <p className="text-walnut leading-relaxed mb-4">
                Our journey began with a simple dream: to share the rich culinary
                heritage of the Dominican Republic with New York. Every dish tells
                a story of family recipes, fresh ingredients, and the warmth of
                Dominican hospitality.
              </p>
              <p className="text-walnut leading-relaxed">
                From the smoky aromas of our grill to the vibrant colors of our
                cocktails, every detail at Bonao is crafted to transport you to
                the island while keeping you rooted in the heart of Brooklyn.
              </p>
            </div>
            <div className="relative aspect-4/3 rounded-lg overflow-hidden">
              <Image
                src="/optimized/katrine/3P4A0028_800.webp"
                alt="Beautifully plated signature dish at Bonao Restaurant"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Section>

        {/* Values */}
        <Section variant="dark" className="py-20">
          <div className="text-center mb-12">
            <SectionLabel variant="dark">OUR VALUES</SectionLabel>
            <SectionTitle variant="dark" className="mt-2">
              What we stand for
            </SectionTitle>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-copper text-lg mb-2">Quality</h3>
              <p className="text-greige">
                Premium ingredients sourced daily from trusted suppliers
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-copper text-lg mb-2">Authenticity</h3>
              <p className="text-greige">
                Traditional recipes honored with modern technique
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-copper text-lg mb-2">Community</h3>
              <p className="text-greige">
                A gathering place for celebration and connection
              </p>
            </div>
          </div>
        </Section>

        {/* Kitchen Section */}
        <Section variant="paper" className="py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative aspect-4/3 rounded-lg overflow-hidden lg:order-1">
              <Image
                src="/optimized/katrine/3P4A0047_800.webp"
                alt="Chef's artfully prepared dish at Bonao"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="lg:order-2">
              <span className="section-label text-sage">THE KITCHEN</span>
              <h2 className="font-garamond text-4xl text-espresso mt-2 mb-6">
                Passion on every plate
              </h2>
              <p className="text-walnut leading-relaxed mb-4">
                Our culinary team blends classical training with deep respect for
                Dominican traditions. Each dish is crafted with intention, bringing
                bold flavors and artistic presentation to your table.
              </p>
              <p className="text-walnut leading-relaxed">
                From the fire of our grill to the delicate touches of our desserts,
                every element is designed to create a memorable experience that
                honors our roots while pushing culinary boundaries.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
