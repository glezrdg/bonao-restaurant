"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import { Button } from "@/components/ui/Button";

export function EventsShowcase() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="relative"
    >
      {/* Header */}
      <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16">
        <span className="section-label text-sage mb-4 block">
          Unforgettable Nights
        </span>
        <h2 className="font-safira text-4xl md:text-5xl lg:text-6xl text-espresso leading-tight">
          WHERE THE NIGHT
          <br />
          <span className="text-espresso/80">COMES ALIVE</span>
        </h2>
      </motion.div>

      {/* Main Grid - Video Center, Images on Sides */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 items-center">
        {/* Left Image */}
        <motion.div
          variants={staggerItem}
          className="lg:col-span-3 hidden lg:block"
        >
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden group">
            <Image
              src="/event1.jpeg"
              alt="Live events at Bonao"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-garamond text-paper text-lg">Live Music</p>
              <p className="text-paper/70 text-sm">Every Weekend</p>
            </div>
          </div>
        </motion.div>

        {/* Center Video */}
        <motion.div
          variants={staggerItem}
          className="lg:col-span-6"
        >
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/event-video.mp4" type="video/mp4" />
            </video>
            {/* Overlay with CTA */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent flex items-end justify-center pb-8">
              <div className="text-center">
                <p className="text-paper/90 text-sm md:text-base mb-4 max-w-md mx-auto px-4">
                  From intimate dinners to grand celebrations, we bring your vision to life
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Button variant="primary" size="md" href="/events">
                    View Events
                  </Button>
                  <Button variant="secondary" size="md" href="/parties">
                    Book Private Event
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={staggerItem}
          className="lg:col-span-3 hidden lg:block"
        >
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden group">
            <Image
              src="/event2.jpeg"
              alt="Private events at Bonao"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-garamond text-paper text-lg">Private Events</p>
              <p className="text-paper/70 text-sm">Tailored Experiences</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Images - Show below video on mobile */}
      <div className="grid grid-cols-2 gap-4 mt-4 lg:hidden">
        <motion.div variants={staggerItem}>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/event1.jpeg"
              alt="Live events at Bonao"
              fill
              className="object-cover"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
            <div className="absolute bottom-3 left-3">
              <p className="font-garamond text-paper text-sm">Live Music</p>
            </div>
          </div>
        </motion.div>
        <motion.div variants={staggerItem}>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/event2.jpeg"
              alt="Private events at Bonao"
              fill
              className="object-cover"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
            <div className="absolute bottom-3 left-3">
              <p className="font-garamond text-paper text-sm">Private Events</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Feature Tags */}
      <motion.div
        variants={staggerItem}
        className="flex flex-wrap items-center justify-center gap-4 mt-10"
      >
        {["DJ Nights", "Live Bands", "Private Parties", "Corporate Events", "Celebrations"].map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 bg-espresso/5 border border-espresso/10 rounded-full text-sm text-walnut"
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}
