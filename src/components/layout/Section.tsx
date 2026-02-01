"use client";

import { cn } from "@/lib/utils";

interface SectionProps {
  variant: "dark" | "paper";
  id?: string;
  className?: string;
  children: React.ReactNode;
  fullBleed?: boolean;
}

export function Section({
  variant,
  id,
  className,
  children,
  fullBleed = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full",
        "py-16 md:py-24",
        variant === "dark" && "bg-charcoal text-paper",
        variant === "paper" && "bg-linen text-espresso",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto",
          !fullBleed && "max-w-7xl px-6 lg:px-8"
        )}
      >
        {children}
      </div>
    </section>
  );
}

interface SectionLabelProps {
  children: React.ReactNode;
  variant?: "dark" | "paper";
}

export function SectionLabel({ children, variant = "dark" }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "section-label block mb-2",
        variant === "dark" && "text-copper",
        variant === "paper" && "text-sage"
      )}
    >
      {children}
    </span>
  );
}

interface SectionTitleProps {
  children: React.ReactNode;
  variant?: "dark" | "paper";
  className?: string;
}

export function SectionTitle({ children, variant = "dark", className }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "headline text-3xl md:text-4xl lg:text-5xl",
        variant === "dark" && "text-paper",
        variant === "paper" && "text-espresso",
        className
      )}
    >
      {children}
    </h2>
  );
}
