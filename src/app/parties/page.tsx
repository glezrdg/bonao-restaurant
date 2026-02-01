"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section, SectionLabel, SectionTitle } from "@/components/layout/Section";
import { PageHeader } from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const eventTypes = [
  "Birthday",
  "Corporate",
  "Anniversary",
  "Graduation",
  "Holiday",
  "Other",
];

const timeRanges = [
  { value: "lunch", label: "Lunch (11am - 3pm)" },
  { value: "happy-hour", label: "Happy Hour (4pm - 7pm)" },
  { value: "dinner", label: "Dinner (7pm - 10pm)" },
  { value: "late-night", label: "Late Night (10pm+)" },
];

export default function PartiesPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <>
      <Header transparent />
      <main>
        {/* Hero */}
        <PageHeader
          label="CELEBRATE"
          title="Private Events"
          description="Create unforgettable moments in our private dining spaces."
          backgroundImage="/optimized/restaurant/_S8A7314"
        />

        {/* Content */}
        <Section variant="paper" className="py-20">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left: Info */}
            <div>
              <span className="section-label text-sage">CELEBRATE WITH US</span>
              <h2 className="font-garamond text-4xl text-espresso mt-2 mb-6">
                Your event, our passion
              </h2>
              <p className="text-walnut mb-8 leading-relaxed">
                Whether it&apos;s an intimate birthday dinner, a corporate gathering,
                or a milestone celebration, our team will craft a bespoke experience
                tailored to your vision.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-bronze/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-bronze">&#10029;</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-espresso">Private Dining Room</h3>
                    <p className="text-walnut text-sm">Accommodates up to 30 guests</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-bronze/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-bronze">&#10029;</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-espresso">Custom Menus</h3>
                    <p className="text-walnut text-sm">Tailored to your preferences and dietary needs</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-bronze/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-bronze">&#10029;</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-espresso">Full Bar Service</h3>
                    <p className="text-walnut text-sm">Craft cocktails and premium wines</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-bronze/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-bronze">&#10029;</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-espresso">Event Coordination</h3>
                    <p className="text-walnut text-sm">Dedicated staff to ensure everything runs smoothly</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-paper rounded-xl p-8 shadow-lg border border-line-light">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-sage"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-garamond text-2xl text-espresso mb-2">
                    Thank You!
                  </h3>
                  <p className="text-walnut mb-6">
                    We&apos;ve received your inquiry and will be in touch within 24 hours.
                  </p>
                  <Button variant="ghost" onClick={() => setSubmitted(false)}>
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="font-garamond text-xl text-espresso mb-6">
                    Request Information
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm text-walnut mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className={cn(
                          "w-full px-4 py-3 rounded-lg",
                          "bg-linen border border-line-light",
                          "text-espresso placeholder:text-walnut/50",
                          "focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage",
                          "transition-premium"
                        )}
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-walnut mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          className={cn(
                            "w-full px-4 py-3 rounded-lg",
                            "bg-linen border border-line-light",
                            "text-espresso placeholder:text-walnut/50",
                            "focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage",
                            "transition-premium"
                          )}
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-walnut mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          className={cn(
                            "w-full px-4 py-3 rounded-lg",
                            "bg-linen border border-line-light",
                            "text-espresso placeholder:text-walnut/50",
                            "focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage",
                            "transition-premium"
                          )}
                        />
                      </div>
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-walnut mb-2">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          required
                          className={cn(
                            "w-full px-4 py-3 rounded-lg",
                            "bg-linen border border-line-light",
                            "text-espresso",
                            "focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage",
                            "transition-premium"
                          )}
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-walnut mb-2">
                          Time Range *
                        </label>
                        <select
                          required
                          className={cn(
                            "w-full px-4 py-3 rounded-lg appearance-none",
                            "bg-linen border border-line-light",
                            "text-espresso",
                            "focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage",
                            "transition-premium"
                          )}
                        >
                          <option value="">Select...</option>
                          {timeRanges.map((range) => (
                            <option key={range.value} value={range.value}>
                              {range.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Guest Count & Event Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-walnut mb-2">
                          Guest Count *
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="100"
                          required
                          className={cn(
                            "w-full px-4 py-3 rounded-lg",
                            "bg-linen border border-line-light",
                            "text-espresso",
                            "focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage",
                            "transition-premium"
                          )}
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-walnut mb-2">
                          Event Type *
                        </label>
                        <select
                          required
                          className={cn(
                            "w-full px-4 py-3 rounded-lg appearance-none",
                            "bg-linen border border-line-light",
                            "text-espresso",
                            "focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage",
                            "transition-premium"
                          )}
                        >
                          <option value="">Select...</option>
                          {eventTypes.map((type) => (
                            <option key={type} value={type.toLowerCase()}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block text-sm text-walnut mb-2">
                        Additional Details
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your event..."
                        className={cn(
                          "w-full px-4 py-3 rounded-lg resize-none",
                          "bg-linen border border-line-light",
                          "text-espresso placeholder:text-walnut/50",
                          "focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage",
                          "transition-premium"
                        )}
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      variant="primary"
                      size="lg"
                      fullWidth
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Submit Inquiry"}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
