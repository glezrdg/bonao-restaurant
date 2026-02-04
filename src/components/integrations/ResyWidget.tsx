"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

interface ResyWidgetProps {
  venueId?: number;
  apiKey?: string;
  buttonText?: string;
  className?: string;
}

export function ResyWidget({
  venueId = 91747,
  apiKey = "DXCS1ndWZsZBCjkBA7pAZM2w4HRemi30",
  buttonText = "Book a Table",
  className = "",
}: ResyWidgetProps) {
  const resyContainerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    // Initialize widget after script loads
    const initWidget = () => {
      if (
        buttonRef.current &&
        !initialized.current &&
        typeof window !== "undefined" &&
        (window as any).resyWidget
      ) {
        (window as any).resyWidget.addButton(buttonRef.current, {
          venueId,
          apiKey,
          replace: true,
        });
        initialized.current = true;
      }
    };

    // Check if script already loaded
    if ((window as any).resyWidget) {
      initWidget();
    }

    // Listen for script load
    window.addEventListener("resy-widget-loaded", initWidget);
    return () => {
      window.removeEventListener("resy-widget-loaded", initWidget);
    };
  }, [venueId, apiKey]);

  return (
    <>
      <Script
        src="https://widgets.resy.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          window.dispatchEvent(new Event("resy-widget-loaded"));
        }}
      />
      <div className={`relative inline-block ${className}`}>
        {/* Your beautiful custom button (visible but doesn't capture clicks) */}
        <span
          className="inline-flex items-center justify-center px-8 py-4 bg-sage text-paper rounded-lg font-medium text-lg cursor-pointer pointer-events-none"
          aria-hidden="true"
        >
          {buttonText}
        </span>

        {/* Invisible Resy widget on top - captures all clicks */}
        <div
          ref={resyContainerRef}
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: 0 }}
        >
          <a
            ref={buttonRef}
            href="https://resy.com/cities/new-york-ny/venues/bonao-restaurant"
            className="w-full h-full block"
            aria-label={buttonText}
          >
            Reserve
          </a>
        </div>
      </div>
    </>
  );
}
