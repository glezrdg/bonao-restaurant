"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";

interface HeaderProps {
  transparent?: boolean;
  /** When true, logo fades in after scroll (for hero animation) */
  animatedLogo?: boolean;
}

const navLinks = [
  { label: "Menu", href: "/menu" },
  { label: "Drinks", href: "/drinks" },
  { label: "Events", href: "/events" },
  { label: "Parties", href: "/parties" },
  { label: "About", href: "/about" },
];

export function Header({ transparent = false, animatedLogo = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogo, setShowLogo] = useState(!animatedLogo);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      // Show header logo after scrolling halfway down viewport
      if (animatedLogo) {
        const halfViewport = window.innerHeight * 0.5;
        setShowLogo(scrollY > halfViewport);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animatedLogo]);

  const showBackground = !transparent || isScrolled;

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-300",
          showBackground
            ? "bg-charcoal/95 backdrop-blur-sm border-b border-line-dark"
            : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-3 items-center h-16 md:h-18">
            {/* Logo - Left */}
            <div className="justify-self-start">
              <Link href="/" className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: animatedLogo ? 0 : 1 }}
                  animate={{ opacity: showLogo ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/BONAO - Logotipo-blanco.svg"
                    alt="Bonao Restaurant"
                    width={420}
                    height={100}
                    className="h-6 sm:h-7 lg:h-8 w-auto"
                    priority
                  />
                </motion.div>
              </Link>
            </div>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center justify-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "text-base font-medium tracking-wide relative",
                      "text-greige hover:text-paper",
                      "transition-premium",
                    )}
                  >
                    <span>{link.label}</span>
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-px bg-copper"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Menu Button - Right */}
            <div className="justify-self-end">
              <motion.button
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => setMobileNavOpen(true)}
                className="lg:hidden p-2 text-paper hover:text-greige transition-premium"
                aria-label="Open menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileNavOpen && (
          <MobileNav
            isOpen={mobileNavOpen}
            onClose={() => setMobileNavOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
