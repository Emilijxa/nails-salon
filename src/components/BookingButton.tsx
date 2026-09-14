import type { ReactNode } from "react";
import { SQUARE_BOOKING_URL } from "../config/business";
import { cn } from "../lib/cn";
import { useLanguage } from "../i18n/LanguageContext";

type BookingButtonProps = {
  variant?: "primary" | "secondary" | "light" | "link";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: ReactNode;
};

const variantClass = {
  primary: "bg-charcoal text-ivory hover:bg-ink border border-charcoal",
  secondary:
    "bg-transparent text-charcoal border border-charcoal/20 hover:border-rose-dark hover:text-rose-dark",
  light: "bg-champagne text-charcoal hover:bg-ivory border border-champagne",
  link: "bg-transparent text-muted hover:text-charcoal",
} as const;

const sizeClass = {
  sm: "px-4 py-2 text-sm min-h-11",
  md: "px-6 py-3 text-sm min-h-12",
  lg: "px-8 py-3.5 text-base min-h-12",
} as const;

export function BookingButton({
  variant = "primary",
  size = "md",
  className,
  children,
}: BookingButtonProps) {
  const { t } = useLanguage();
  const isLink = variant === "link";

  return (
    <a
      href={SQUARE_BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors duration-300 focus-visible:outline-none",
        isLink
          ? "min-h-11 text-left text-sm font-normal"
          : cn(
              "font-medium tracking-[0.12em] uppercase",
              sizeClass[size],
            ),
        variantClass[variant],
        className,
      )}
    >
      {children ?? t.cta.book}
    </a>
  );
}
