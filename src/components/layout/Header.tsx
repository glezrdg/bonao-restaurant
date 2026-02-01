"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";
import { restaurantInfo } from "@/data/menu";

interface HeaderProps {
  transparent?: boolean;
}

const navLinks = [
  { label: "Menu", href: "/menu" },
  { label: "Drinks", href: "/drinks" },
  { label: "Reserve", href: "/reserve" },
  { label: "Parties", href: "/parties" },
  { label: "About", href: "/about" },
];

export function Header({ transparent = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <motion.div whileHover={{ scale: 1.02 }}>
                <Image
                  src="/BONAO - Logotipo-blanco.svg"
                  alt="Bonao Restaurant"
                  width={280}
                  height={112}
                  className="h-16 md:h-28 w-auto"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
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
                      "text-sm font-medium tracking-wide relative",
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

            {/* Desktop CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="hidden lg:flex items-center gap-4"
            >
              <Button
                variant="secondary"
                size="sm"
                href={restaurantInfo.orderOnlineUrl}
                external
              >
                Order Online
              </Button>
              <Button variant="primary" size="sm" href="/reserve">
                Reserve
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
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
