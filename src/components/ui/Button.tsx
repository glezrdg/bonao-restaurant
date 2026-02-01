"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  external?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  children,
  fullWidth = false,
  disabled = false,
  className,
  external = false,
}: ButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center font-medium",
    "transition-premium focus-sage",
    "disabled:opacity-50 disabled:pointer-events-none",
    fullWidth && "w-full"
  );

  const variantStyles = {
    primary: cn(
      "bg-sage text-paper",
      "hover:bg-sage-hover hover:-translate-y-0.5",
      "active:translate-y-0"
    ),
    secondary: cn(
      "bg-transparent border border-greige/40 text-greige",
      "hover:border-greige hover:text-paper",
      "hover:-translate-y-0.5 active:translate-y-0"
    ),
    ghost: cn(
      "bg-transparent text-copper",
      "hover:text-bronze underline-offset-4 hover:underline"
    ),
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm rounded-md",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-lg",
  };

  const combinedClassName = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  );
}
