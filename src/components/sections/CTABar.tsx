"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface CTABarProps {
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  variant?: "dark" | "paper";
}

export function CTABar({ primaryCta, secondaryCta, variant = "paper" }: CTABarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "sticky bottom-0 z-40 py-4 px-6",
        "border-t",
        variant === "dark" && "bg-charcoal/95 backdrop-blur-sm border-line-dark",
        variant === "paper" && "bg-linen/95 backdrop-blur-sm border-line-light"
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          variant="primary"
          size="md"
          href={primaryCta.href}
          external={primaryCta.href.startsWith("http")}
        >
          {primaryCta.label}
        </Button>
        {secondaryCta && (
          <Button
            variant={variant === "dark" ? "secondary" : "ghost"}
            size="md"
            href={secondaryCta.href}
            external={secondaryCta.href.startsWith("http")}
          >
            {secondaryCta.label}
          </Button>
        )}
      </div>
    </motion.div>
  );
}
