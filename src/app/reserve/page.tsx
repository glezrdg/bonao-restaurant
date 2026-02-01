import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section, SectionLabel, SectionTitle } from "@/components/layout/Section";
import { PageHeader } from "@/components/sections/PageHeader";
import { ResyWidget } from "@/components/integrations/ResyWidget";
import { restaurantInfo } from "@/data/menu";

export const metadata: Metadata = {
  title: "Reserve a Table | Bonao Restaurant",
  description:
    "Book your table at Bonao Restaurant. Experience modern Dominican cuisine in an intimate Brooklyn setting.",
};

export default function ReservePage() {
  return (
    <>
      <Header transparent />
      <main>
        {/* Hero */}
        <PageHeader
          label="BOOK"
          title="Reserve Your Table"
          description="Join us for an unforgettable dining experience in the heart of Brooklyn."
          backgroundImage="/optimized/restaurant/_S8A7302"
        />

        {/* Booking Section */}
        <Section variant="paper" className="py-20">
          <div className="max-w-2xl mx-auto">
            {/* Resy Widget */}
            <div className="bg-paper rounded-xl p-8 shadow-lg border border-line-light mb-8">
              <div className="text-center mb-8">
                <h3 className="font-garamond text-2xl text-espresso mb-2">
                  Select Your Reservation
                </h3>
                <p className="text-walnut text-sm">
                  Choose your preferred date, time, and party size
                </p>
              </div>

              {/* Resy Widget Integration */}
              <ResyWidget />
            </div>

            {/* Fallback Contact */}
            <div className="text-center">
              <p className="text-walnut mb-4">
                Prefer to call? Reach us directly:
              </p>
              <a
                href={`tel:${restaurantInfo.phone.replace(/[^0-9+]/g, "")}`}
                className="inline-flex items-center gap-2 text-xl font-medium text-bronze hover:text-copper transition-premium"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {restaurantInfo.phone}
              </a>
            </div>
          </div>
        </Section>

        {/* Additional Info */}
        <Section variant="dark">
          <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <h3 className="section-label text-copper mb-3">Hours</h3>
              <p className="text-greige">Mon &ndash; Thu: 4pm &ndash; 12am</p>
              <p className="text-greige">Fri &ndash; Sun: 4pm &ndash; 1am</p>
            </div>
            <div>
              <h3 className="section-label text-copper mb-3">Dress Code</h3>
              <p className="text-greige">Smart Casual</p>
              <p className="text-greige/70 text-sm mt-1">No athletic wear</p>
            </div>
            <div>
              <h3 className="section-label text-copper mb-3">Private Events</h3>
              <a
                href="/parties"
                className="text-copper hover:text-bronze transition-premium"
              >
                Inquire about private dining &rarr;
              </a>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
