# Page Templates

## Standard Page Structure

Every page follows this structure:

```tsx
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Page Title | Bonao Restaurant',
  description: 'Page description for SEO (150-160 chars)',
  openGraph: {
    title: 'Page Title | Bonao Restaurant',
    description: 'Page description for social sharing',
    images: ['/og-image.jpg'],
  },
};

export default function PageName() {
  return (
    <>
      <Header />
      <main>
        {/* Page sections here */}
      </main>
      <Footer />
    </>
  );
}
```

---

## Home Page Template

**File:** `src/app/page.tsx`

```tsx
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/layout/Section';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { SplitSection } from '@/components/sections/SplitSection';
import { MenuPreview } from '@/components/sections/MenuPreview';
import { ReviewSection } from '@/components/sections/ReviewSection';
import { BookingBlock } from '@/components/sections/BookingBlock';
import { menu, restaurantInfo } from '@/data/menu';

export const metadata: Metadata = {
  title: 'Bonao Restaurant | Modern Dominican Cuisine in Brooklyn',
  description: 'Experience premium Dominican cuisine with craft cocktails and an intimate atmosphere. Reserve your table or order online.',
};

export default function Home() {
  return (
    <>
      <Header transparent />
      <main>
        {/* 1. Hero - Dark */}
        <HeroSection
          headline="Fire & Spirits"
          subheadline="Modern Dominican cuisine crafted for the night"
          backgroundImage="/images/hero-interior.jpg"
          showReservationForm
        />

        {/* 2. Signatures - Ivory */}
        <Section variant="ivory" id="signatures">
          <SectionLabel>SIGNATURES</SectionLabel>
          <SectionTitle>Crafted for the night.</SectionTitle>
          <FeatureGrid
            items={[
              { image: '/images/signature-1.jpg', title: 'Chef's Selections', href: '/menu' },
              { image: '/images/signature-2.jpg', title: 'Craft Cocktails', href: '/drinks' },
              { image: '/images/signature-3.jpg', title: 'Private Dining', href: '/parties' },
              { image: '/images/signature-4.jpg', title: 'Wine List', href: '/drinks#wine' },
            ]}
          />
        </Section>

        {/* 3. Featured Pairing - Alternating */}
        <SplitSection
          variant="dark"
          imagePosition="right"
          image="/images/feature-dish.jpg"
          label="FROM THE GRILL"
          title="Where fire meets tradition"
          description="Our signature dishes honor the bold flavors of Dominican cuisine while embracing modern technique."
          cta={{ label: 'Explore the Menu', href: '/menu' }}
        />

        {/* 4. Tonight's Specials - Dark */}
        <Section variant="dark" id="specials">
          <SectionLabel>TONIGHT</SectionLabel>
          <SectionTitle>Chef's selections</SectionTitle>
          <MenuPreview
            leftColumn={{
              title: 'Cocktails',
              items: menu.find(c => c.name === 'Juices & Drinks')?.items.slice(0, 4) || []
            }}
            centerImage="/images/special-hero.jpg"
            rightColumn={{
              title: 'From the Kitchen',
              items: menu.find(c => c.name === 'Main Courses')?.items.slice(0, 4) || []
            }}
          />
        </Section>

        {/* 5. Social Proof - Ivory */}
        <Section variant="ivory" id="reviews">
          <ReviewSection
            reviews={[
              { text: 'Best Dominican food in Brooklyn!', author: 'Maria G.' },
              { text: 'The atmosphere is incredible.', author: 'James T.' },
              { text: 'Our go-to for special occasions.', author: 'Lisa M.' },
            ]}
            badges={['Valet Parking', 'Private Rooms', 'Live Music', 'Full Bar']}
          />
        </Section>

        {/* 6. Booking Block - Dark */}
        <Section variant="dark" id="reserve">
          <BookingBlock
            showForm
            showPrivateDiningCTA
          />
        </Section>
      </main>
      <Footer />
    </>
  );
}
```

---

## Menu Page Template

**File:** `src/app/menu/page.tsx`

```tsx
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/layout/Section';
import { MenuGrid } from '@/components/pages/MenuGrid';
import { CTABar } from '@/components/sections/CTABar';
import { menu, restaurantInfo } from '@/data/menu';

export const metadata: Metadata = {
  title: 'Menu | Bonao Restaurant',
  description: 'Explore our menu featuring modern Dominican cuisine. Appetizers, main courses, sides, and desserts crafted with authentic flavors.',
};

export default function MenuPage() {
  // Filter out drinks for dedicated drinks page
  const foodCategories = menu.filter(
    cat => cat.name !== 'Juices & Drinks'
  );

  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <Section variant="dark" className="py-16 text-center">
          <h1 className="font-garamond text-5xl italic mb-4">Our Menu</h1>
          <p className="text-white/70 max-w-xl mx-auto">
            Modern Dominican cuisine honoring bold flavors and tradition
          </p>
        </Section>

        {/* CTA Bar - Top */}
        <CTABar
          primaryCta={{ label: 'Order Online', href: restaurantInfo.orderOnlineUrl }}
          secondaryCta={{ label: 'Order via WhatsApp', href: generateWhatsAppUrl() }}
        />

        {/* Menu Grid */}
        <Section variant="ivory">
          <MenuGrid
            categories={foodCategories}
            showCategoryNav
            itemLinkUrl={restaurantInfo.orderOnlineUrl}
          />
        </Section>

        {/* CTA Bar - Bottom */}
        <CTABar
          primaryCta={{ label: 'Order Online', href: restaurantInfo.orderOnlineUrl }}
          secondaryCta={{ label: 'Order via WhatsApp', href: generateWhatsAppUrl() }}
          variant="dark"
        />
      </main>
      <Footer />
    </>
  );
}
```

---

## Drinks Page Template

**File:** `src/app/drinks/page.tsx`

```tsx
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/layout/Section';
import { MenuGrid } from '@/components/pages/MenuGrid';
import { CTABar } from '@/components/sections/CTABar';
import { menu, restaurantInfo } from '@/data/menu';

export const metadata: Metadata = {
  title: 'Drinks | Bonao Restaurant',
  description: 'Craft cocktails, fresh juices, and premium spirits. Experience our curated beverage selection.',
};

export default function DrinksPage() {
  const drinkCategories = menu.filter(
    cat => cat.name === 'Juices & Drinks'
  );

  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <Section variant="dark" className="py-16 text-center">
          <h1 className="font-garamond text-5xl italic mb-4">Drinks & Spirits</h1>
          <p className="text-white/70 max-w-xl mx-auto">
            Craft cocktails and fresh juices to complement your meal
          </p>
        </Section>

        {/* Menu Grid */}
        <Section variant="ivory">
          <MenuGrid
            categories={drinkCategories}
            itemLinkUrl={restaurantInfo.orderOnlineUrl}
          />
        </Section>

        {/* CTA Bar */}
        <CTABar
          primaryCta={{ label: 'Order Online', href: restaurantInfo.orderOnlineUrl }}
          secondaryCta={{ label: 'Order via WhatsApp', href: generateWhatsAppUrl() }}
          variant="dark"
        />
      </main>
      <Footer />
    </>
  );
}
```

---

## Reserve Page Template

**File:** `src/app/reserve/page.tsx`

```tsx
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/layout/Section';
import { ResyWidget } from '@/components/integrations/ResyWidget';
import { restaurantInfo } from '@/data/menu';

export const metadata: Metadata = {
  title: 'Reserve a Table | Bonao Restaurant',
  description: 'Book your table at Bonao Restaurant. Experience modern Dominican cuisine in an intimate Brooklyn setting.',
};

export default function ReservePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <Section variant="dark" className="py-16 text-center">
          <h1 className="font-garamond text-5xl italic mb-4">Reserve Your Table</h1>
          <p className="text-white/70 max-w-xl mx-auto">
            Join us for an unforgettable dining experience
          </p>
        </Section>

        {/* Booking Widget */}
        <Section variant="ivory" className="py-20">
          <div className="max-w-2xl mx-auto">
            {/* Resy Widget Integration */}
            <ResyWidget restaurantId={process.env.RESY_RESTAURANT_ID} />

            {/* Fallback Info */}
            <div className="mt-12 text-center">
              <p className="text-ink/70 mb-4">
                Having trouble? Call us directly:
              </p>
              <a
                href={`tel:${restaurantInfo.phone}`}
                className="text-bronze text-xl font-medium hover:underline"
              >
                {restaurantInfo.phone}
              </a>
            </div>
          </div>
        </Section>

        {/* Additional Info */}
        <Section variant="dark">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-bronze uppercase tracking-wider text-sm mb-2">Hours</h3>
              <p className="text-white/70">Mon–Thu: {restaurantInfo.hours.weekday}</p>
              <p className="text-white/70">Fri–Sun: {restaurantInfo.hours.weekend}</p>
            </div>
            <div>
              <h3 className="text-bronze uppercase tracking-wider text-sm mb-2">Dress Code</h3>
              <p className="text-white/70">Smart Casual</p>
            </div>
            <div>
              <h3 className="text-bronze uppercase tracking-wider text-sm mb-2">Private Dining</h3>
              <a href="/parties" className="text-bronze hover:underline">
                Inquire about events →
              </a>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
```

---

## Order Page Template

**File:** `src/app/order/page.tsx`

```tsx
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { restaurantInfo } from '@/data/menu';
import { generateWhatsAppUrl } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Order Online | Bonao Restaurant',
  description: 'Order Bonao Restaurant for pickup or delivery. Choose online ordering or WhatsApp for a personalized experience.',
};

export default function OrderPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <Section variant="dark" className="py-16 text-center">
          <h1 className="font-garamond text-5xl italic mb-4">Order Now</h1>
          <p className="text-white/70 max-w-xl mx-auto">
            Enjoy Bonao at home. Choose your preferred ordering method.
          </p>
        </Section>

        {/* Order Options */}
        <Section variant="ivory" className="py-20">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* Online Ordering Card */}
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-ember/10 rounded-full flex items-center justify-center mx-auto mb-6">
                {/* Icon */}
                <svg className="w-8 h-8 text-ember" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-medium text-ink mb-4">Order Online</h2>
              <p className="text-ink/70 mb-8">
                Browse our full menu, customize your order, and checkout securely.
              </p>
              <Button
                variant="primary"
                size="lg"
                href={restaurantInfo.orderOnlineUrl}
                fullWidth
              >
                Order Now
              </Button>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                {/* WhatsApp Icon */}
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h2 className="text-2xl font-medium text-ink mb-4">Order via WhatsApp</h2>
              <p className="text-ink/70 mb-8">
                Chat directly with us for a personalized ordering experience.
              </p>
              <Button
                variant="secondary"
                size="lg"
                href={generateWhatsAppUrl()}
                fullWidth
              >
                Message Us
              </Button>
            </div>

          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
```

---

## Parties Page Template

**File:** `src/app/parties/page.tsx`

```tsx
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/layout/Section';
import { PartyForm } from '@/components/pages/PartyForm';

export const metadata: Metadata = {
  title: 'Private Events | Bonao Restaurant',
  description: 'Host your next celebration at Bonao. Private dining rooms, custom menus, and unforgettable experiences.',
};

export default function PartiesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <Section variant="dark" className="py-16 text-center">
          <h1 className="font-garamond text-5xl italic mb-4">Private Events</h1>
          <p className="text-white/70 max-w-xl mx-auto">
            Create unforgettable moments in our private dining spaces
          </p>
        </Section>

        {/* Split: Info + Form */}
        <Section variant="ivory" className="py-20">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* Left: Info */}
            <div>
              <span className="text-bronze uppercase tracking-wider text-sm">
                CELEBRATE WITH US
              </span>
              <h2 className="font-garamond text-4xl italic mt-2 mb-6">
                Your event, our passion
              </h2>
              <p className="text-ink/70 mb-8">
                Whether it's an intimate birthday dinner, a corporate gathering,
                or a milestone celebration, our team will craft a bespoke experience
                tailored to your vision.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-bronze/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-bronze">✦</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-ink">Private Dining Room</h3>
                    <p className="text-ink/60 text-sm">Accommodates up to 30 guests</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-bronze/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-bronze">✦</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-ink">Custom Menus</h3>
                    <p className="text-ink/60 text-sm">Tailored to your preferences</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-bronze/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-bronze">✦</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-ink">Full Bar Service</h3>
                    <p className="text-ink/60 text-sm">Craft cocktails and premium wines</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-medium text-ink mb-6">Request Information</h3>
              <PartyForm />
            </div>

          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
```

---

## About Page Template

**File:** `src/app/about/page.tsx`

```tsx
import { Metadata } from 'next';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/layout/Section';
import { SplitSection } from '@/components/sections/SplitSection';

export const metadata: Metadata = {
  title: 'About | Bonao Restaurant',
  description: 'The story behind Bonao Restaurant. Modern Dominican cuisine rooted in tradition, served in the heart of Brooklyn.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <Section variant="dark" className="py-20 text-center">
          <span className="text-bronze uppercase tracking-wider text-sm">OUR STORY</span>
          <h1 className="font-garamond text-5xl italic mt-4 mb-6">About Bonao</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            {/* Client provides "About Bonao" copy */}
            Named after the vibrant city in the heart of the Dominican Republic,
            Bonao Restaurant brings authentic Dominican flavors to Brooklyn.
          </p>
        </Section>

        {/* Story Section */}
        <SplitSection
          variant="ivory"
          imagePosition="right"
          image="/images/about-interior.jpg"
          label="THE BEGINNING"
          title="Where tradition meets innovation"
          description="Our journey began with a simple dream: to share the rich culinary heritage of the Dominican Republic with New York. Every dish tells a story of family recipes, fresh ingredients, and the warmth of Dominican hospitality."
        />

        {/* Values */}
        <Section variant="dark" className="py-20">
          <div className="text-center mb-12">
            <span className="text-bronze uppercase tracking-wider text-sm">OUR VALUES</span>
            <h2 className="font-garamond text-4xl italic mt-2">What we stand for</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <h3 className="text-bronze text-lg mb-2">Quality</h3>
              <p className="text-white/60">
                Premium ingredients sourced daily from trusted suppliers
              </p>
            </div>
            <div>
              <h3 className="text-bronze text-lg mb-2">Authenticity</h3>
              <p className="text-white/60">
                Traditional recipes honored with modern technique
              </p>
            </div>
            <div>
              <h3 className="text-bronze text-lg mb-2">Community</h3>
              <p className="text-white/60">
                A gathering place for celebration and connection
              </p>
            </div>
          </div>
        </Section>

        {/* Team/Chef Section (optional) */}
        <SplitSection
          variant="ivory"
          imagePosition="left"
          image="/images/about-chef.jpg"
          label="THE KITCHEN"
          title="Passion on every plate"
          description="Our culinary team blends classical training with deep respect for Dominican traditions. Each dish is crafted with intention, bringing bold flavors and artistic presentation to your table."
        />
      </main>
      <Footer />
    </>
  );
}
```

---

## Events Page Template

**File:** `src/app/events/page.tsx`

```tsx
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/layout/Section';
import { EventCard } from '@/components/pages/EventCard';

export const metadata: Metadata = {
  title: 'Events | Bonao Restaurant',
  description: 'Upcoming events at Bonao Restaurant. Live music, special menus, and celebrations.',
};

// Temporary static data - client will provide
const events = [
  {
    id: 1,
    title: 'Live Jazz Night',
    date: 'Every Friday',
    time: '8:00 PM',
    description: 'Enjoy smooth jazz while dining on our signature dishes.',
    image: '/images/event-jazz.jpg',
  },
  {
    id: 2,
    title: 'Dominican Independence Day',
    date: 'February 27, 2024',
    time: '6:00 PM',
    description: 'Celebrate with a special menu and live entertainment.',
    image: '/images/event-independence.jpg',
  },
];

export default function EventsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <Section variant="dark" className="py-16 text-center">
          <h1 className="font-garamond text-5xl italic mb-4">Upcoming Events</h1>
          <p className="text-white/70 max-w-xl mx-auto">
            Join us for special nights and celebrations
          </p>
        </Section>

        {/* Events Grid */}
        <Section variant="ivory" className="py-20">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {events.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                date={event.date}
                time={event.time}
                description={event.description}
                image={event.image}
                ctaType="reserve"
                ctaHref="/reserve"
              />
            ))}
          </div>

          {/* Empty state if no events */}
          {events.length === 0 && (
            <div className="text-center py-12">
              <p className="text-ink/60 text-lg">
                No upcoming events scheduled. Check back soon!
              </p>
            </div>
          )}
        </Section>
      </main>
      <Footer />
    </>
  );
}
```

---

## Jobs Page Template

**File:** `src/app/jobs/page.tsx`

```tsx
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/layout/Section';
import { JobForm } from '@/components/pages/JobForm';
import { restaurantInfo } from '@/data/menu';

export const metadata: Metadata = {
  title: 'Careers | Bonao Restaurant',
  description: 'Join the Bonao team. Explore career opportunities in our Brooklyn restaurant.',
};

export default function JobsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <Section variant="dark" className="py-16 text-center">
          <h1 className="font-garamond text-5xl italic mb-4">Join Our Team</h1>
          <p className="text-white/70 max-w-xl mx-auto">
            Be part of something special
          </p>
        </Section>

        {/* Content */}
        <Section variant="ivory" className="py-20">
          <div className="max-w-2xl mx-auto">
            <p className="text-ink/70 text-lg mb-8 text-center">
              We're always looking for passionate individuals to join our family.
              If you love hospitality and great food, we'd love to hear from you.
            </p>

            {/* Option A: Email-based (simpler) */}
            <div className="bg-white rounded-lg p-8 shadow-lg text-center mb-8">
              <h2 className="text-2xl font-medium text-ink mb-4">Apply Now</h2>
              <p className="text-ink/60 mb-6">
                Send your resume and a brief introduction to:
              </p>
              <a
                href={`mailto:${restaurantInfo.email}?subject=Job Application`}
                className="text-bronze text-xl font-medium hover:underline"
              >
                {restaurantInfo.email}
              </a>
            </div>

            {/* OR Option B: Simple form */}
            {/*
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-xl font-medium text-ink mb-6">Application</h2>
              <JobForm />
            </div>
            */}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
```

---

## Specials Page Template

**File:** `src/app/specials/page.tsx`

```tsx
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/layout/Section';
import { MenuItemCard } from '@/components/pages/MenuItemCard';
import { Button } from '@/components/ui/Button';
import { menu, restaurantInfo } from '@/data/menu';

export const metadata: Metadata = {
  title: 'Specials | Bonao Restaurant',
  description: 'Chef's specials and featured dishes at Bonao Restaurant. Limited time offerings crafted with seasonal ingredients.',
};

export default function SpecialsPage() {
  // Curated selection of featured items
  const featuredItems = [
    menu.find(c => c.name === 'Main Courses')?.items[0],
    menu.find(c => c.name === 'Main Courses')?.items[1],
    menu.find(c => c.name === 'Appetizers')?.items[0],
    menu.find(c => c.name === 'Juices & Drinks')?.items[0],
  ].filter(Boolean);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <Section variant="dark" className="py-16 text-center">
          <span className="text-bronze uppercase tracking-wider text-sm">THIS WEEK</span>
          <h1 className="font-garamond text-5xl italic mt-2 mb-4">Chef's Specials</h1>
          <p className="text-white/70 max-w-xl mx-auto">
            Limited offerings featuring the best of the season
          </p>
        </Section>

        {/* Featured Items */}
        <Section variant="ivory" className="py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredItems.map((item, index) => (
              item && (
                <MenuItemCard
                  key={index}
                  item={item}
                  orderUrl={restaurantInfo.orderOnlineUrl}
                />
              )
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" href="/menu">
              View Full Menu
            </Button>
            <Button variant="primary" href={restaurantInfo.orderOnlineUrl}>
              Order Now
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
```

---

## Common Patterns

### Section with Label + Title

```tsx
<Section variant="ivory">
  <div className="text-center mb-12">
    <span className="text-bronze uppercase tracking-wider text-sm font-medium">
      SECTION LABEL
    </span>
    <h2 className="font-garamond text-4xl italic mt-2">
      Section Title Here
    </h2>
  </div>
  {/* Section content */}
</Section>
```

### CTA Button Group

```tsx
<div className="flex flex-wrap justify-center gap-4">
  <Button variant="primary" href="/reserve">
    Reserve Now
  </Button>
  <Button variant="secondary" href="/menu">
    View Menu
  </Button>
</div>
```

### Responsive Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards */}
</div>
```
