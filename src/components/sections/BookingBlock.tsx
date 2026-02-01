"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { ResyWidget } from "@/components/integrations/ResyWidget";
import { restaurantInfo } from "@/data/menu";
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

interface BookingBlockProps {
  showPrivateDiningCTA?: boolean;
  showResyWidget?: boolean;
  backgroundImage?: string;
}

export function BookingBlock({
  showPrivateDiningCTA = true,
  showResyWidget = true,
  backgroundImage = "/optimized/restaurant/_S8A7314_1920.webp",
}: BookingBlockProps) {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={backgroundImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Label */}
        <motion.span variants={staggerItem} className="section-label text-copper mb-4 block">
          RESERVATIONS
        </motion.span>

        {/* Headline */}
        <motion.h2 variants={fadeInUp} className="font-garamond text-4xl md:text-5xl text-paper mb-6">
          Reserve your table
        </motion.h2>

        {/* Description */}
        <motion.p variants={staggerItem} className="text-greige text-lg max-w-2xl mx-auto mb-10">
          Join us for an unforgettable dining experience. Whether it&apos;s a romantic dinner,
          a celebration with friends, or a business gathering, we&apos;re here to make it special.
        </motion.p>

        {/* Resy Widget */}
        {showResyWidget && (
          <motion.div
            variants={fadeInUp}
            className="bg-charcoal/50 backdrop-blur-sm border border-line-dark rounded-xl p-8 mb-8"
          >
            <ResyWidget />
            <p className="text-sm text-greige mt-6">
              Or call us at{" "}
              <a
                href={`tel:${restaurantInfo.phone.replace(/[^0-9+]/g, "")}`}
                className="text-copper hover:text-bronze transition-premium"
              >
                {restaurantInfo.phone}
              </a>
            </p>
          </motion.div>
        )}

        {/* Private Dining CTA */}
        {showPrivateDiningCTA && (
          <motion.div variants={staggerItem} className="border-t border-line-dark pt-8">
            <p className="text-greige mb-4">
              Planning a private event or larger party?
            </p>
            <Button variant="ghost" href="/parties">
              Inquire About Private Dining &rarr;
            </Button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
