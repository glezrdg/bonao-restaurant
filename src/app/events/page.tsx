import { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
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
    image: "/event1.jpeg",
  },
  {
    id: 2,
    title: "Dominican Heritage Dinner",
    date: "Last Saturday of the Month",
    time: "6:00 PM",
    description:
      "A special tasting menu celebrating the diverse flavors of the Dominican Republic. Five courses paired with cocktails.",
    image: "/event2.jpeg",
  },
];

const features = [
  { icon: "🎵", title: "Live Music", desc: "Every weekend" },
  { icon: "🍸", title: "Craft Cocktails", desc: "Signature drinks" },
  { icon: "🎉", title: "Private Events", desc: "Tailored experiences" },
  { icon: "🎤", title: "DJ Nights", desc: "Dance the night away" },
];

export default function EventsPage() {
  return (
    <>
      <Header transparent />
      <main>
        {/* Video Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/event-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-linear-to-b from-charcoal/70 via-charcoal/50 to-charcoal" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-6 pt-32 pb-16">
            <span className="section-label text-copper mb-4 block">
              Unforgettable Nights
            </span>
            <h1 className="font-safira text-5xl md:text-6xl lg:text-7xl text-paper mb-6">
              WHERE THE NIGHT
              <br />
              <span className="text-paper/80">COMES ALIVE</span>
            </h1>
            <p className="text-greige text-lg md:text-xl max-w-2xl mx-auto mb-8">
              From live music to private celebrations, experience nights that linger in memory long after the last song fades.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" size="lg" href="https://resy.com/cities/new-york-ny/venues/bonao-restaurant" external>
                Reserve Now
              </Button>
              <Button variant="secondary" size="lg" href="/parties">
                Private Events
              </Button>
            </div>
          </div>
        </section>

        {/* Features Strip */}
        <div className="bg-charcoal border-y border-line-dark">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-center gap-3 text-paper">
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <p className="font-medium">{feature.title}</p>
                    <p className="text-sm text-greige">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <Section variant="paper">
          <div className="text-center mb-12">
            <span className="section-label text-sage mb-4 block">
              HAPPENINGS
            </span>
            <h2 className="font-safira text-4xl md:text-5xl text-espresso">
              Upcoming Events
            </h2>
          </div>

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
                  <Button variant="primary" size="md" href="https://resy.com/cities/new-york-ny/venues/bonao-restaurant" external>
                    Reserve for This Event
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Gallery Strip */}
        <Section variant="dark">
          <div className="text-center mb-12">
            <span className="section-label text-copper mb-4 block">
              THE ATMOSPHERE
            </span>
            <h2 className="font-safira text-4xl md:text-5xl text-paper">
              Nights to Remember
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/event1.jpeg"
                alt="Event atmosphere"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/event2.jpeg"
                alt="Event atmosphere"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/event1.jpeg"
                alt="Event atmosphere"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500 object-right"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/event2.jpeg"
                alt="Event atmosphere"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500 object-left"
              />
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section variant="paper">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-safira text-3xl md:text-4xl text-espresso mb-4">
              Host Your Event With Us
            </h2>
            <p className="text-walnut mb-8">
              From intimate gatherings to grand celebrations, our team will help create an unforgettable experience tailored to your vision.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" size="lg" href="/parties">
                Plan Your Private Event
              </Button>
              <Button variant="ghost" href="tel:+17183460285">
                Call Us: (718) 346-0285
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
