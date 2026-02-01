"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { restaurantInfo } from "@/data/menu";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-paper border-t border-line-dark">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Logo */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-block">
            <Image
              src="/BONAO - Logotipo-blanco.svg"
              alt="Bonao Restaurant"
              width={180}
              height={60}
              className="h-14 w-auto mx-auto"
            />
          </Link>
          <p className="text-greige mt-4">{restaurantInfo.tagline}</p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Location */}
          <div className="text-center lg:text-left">
            <h3 className="section-label text-copper mb-4">Location</h3>
            <address className="not-italic text-greige leading-relaxed">
              123 Jamaica Avenue<br />
              Brooklyn, NY 11207
            </address>
            <a
              href="https://maps.google.com/?q=123+Jamaica+Avenue+Brooklyn+NY+11207"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-copper hover:text-bronze transition-premium"
            >
              Get Directions &rarr;
            </a>
          </div>

          {/* Hours */}
          <div className="text-center lg:text-left">
            <h3 className="section-label text-copper mb-4">Hours</h3>
            <div className="text-greige space-y-1">
              <p>Monday &ndash; Thursday</p>
              <p className="text-paper">4pm &ndash; 12am</p>
              <p className="mt-3">Friday &ndash; Sunday</p>
              <p className="text-paper">4pm &ndash; 1am</p>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center lg:text-left">
            <h3 className="section-label text-copper mb-4">Contact</h3>
            <div className="space-y-2">
              <a
                href={`tel:${restaurantInfo.phone.replace(/[^0-9+]/g, "")}`}
                className="block text-greige hover:text-paper transition-premium"
              >
                {restaurantInfo.phone}
              </a>
              <a
                href={`mailto:${restaurantInfo.email}`}
                className="block text-greige hover:text-paper transition-premium"
              >
                {restaurantInfo.email}
              </a>
              <a
                href={restaurantInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-greige hover:text-paper transition-premium"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Follow */}
          <div className="text-center lg:text-left">
            <h3 className="section-label text-copper mb-4">Follow</h3>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a
                href={restaurantInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-greige hover:text-paper transition-premium"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={restaurantInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-greige hover:text-paper transition-premium"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={restaurantInfo.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-greige hover:text-paper transition-premium"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="mt-12 rounded-lg overflow-hidden border border-line-dark">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.9089!2d-73.8724!3d40.6761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25e3d6dce21a9%3A0x2be57cc0b4b7e6e0!2s123%20Jamaica%20Ave%2C%20Brooklyn%2C%20NY%2011207!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bonao Restaurant Location"
            className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-line-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-greige">
            <p>&copy; {currentYear} Bonao Restaurant. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="hover:text-paper transition-premium"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-paper transition-premium"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
