import { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section, SectionLabel, SectionTitle } from "@/components/layout/Section";
import { PageHeader } from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Events | Bonao Restaurant",
  description:
    "Upcoming events at Bonao Restaurant. Live music, special menus, and celebrations.",
};

const events = [
  {
    id: 1,
    title: "Live Jazz Night",
    date: "Every Friday",
    time: "8:00 PM",
    description:
      "Enjoy smooth jazz while dining on our signature dishes. Featuring rotating local artists and a special cocktail menu.",
    image: "/optimized/katrine/3P4A0102_800.webp",
  },
  {
    id: 2,
    title: "Dominican Heritage Dinner",
    date: "Last Saturday of the Month",
    time: "6:00 PM",
    description:
      "A special tasting menu celebrating the diverse flavors of the Dominican Republic. Five courses paired with cocktails.",
    image: "/optimized/katrine/3P4A0028_800.webp",
  },
];

export default function EventsPage() {
  return (
    <>
      <Header transparent />
      <main>
        {/* Hero */}
        <PageHeader
          label="HAPPENINGS"
          title="Upcoming Events"
          description="Join us for special nights and celebrations"
          backgroundImage="/optimized/restaurant/_S8A7281"
        />

        {/* Events Grid */}
        <Section variant="paper" className="py-20">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-paper rounded-xl overflow-hidden shadow-lg border border-line-light group"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-sage text-paper text-sm rounded-full">
                      {event.date}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-copper text-sm mb-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.time}
                  </div>
                  <h3 className="font-garamond text-2xl text-espresso mb-3">
                    {event.title}
                  </h3>
                  <p className="text-walnut mb-6">{event.description}</p>
                  <Button variant="primary" size="md" href="/reserve">
                    Reserve for This Event
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state (hidden when events exist) */}
          {events.length === 0 && (
            <div className="text-center py-12">
              <p className="text-walnut text-lg">
                No upcoming events scheduled. Check back soon!
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-walnut mb-4">
              Want to host your own event?
            </p>
            <Button variant="ghost" href="/parties">
              Inquire About Private Events &rarr;
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
