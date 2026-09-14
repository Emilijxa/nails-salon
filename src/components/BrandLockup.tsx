import { business } from "../config/business";
import { cn } from "../lib/cn";

type BrandLockupProps = {
  className?: string;
  align?: "left" | "center";
  size?: "sm" | "md" | "lg";
  inverted?: boolean;
};

const nameSize = {
  sm: "text-xl leading-none",
  md: "text-2xl leading-none",
  lg: "text-[2.75rem] sm:text-6xl leading-none",
} as const;

const subtitleSize = {
  sm: "text-[0.58rem] mt-1",
  md: "text-[0.62rem] mt-1.5",
  lg: "text-[0.7rem] sm:text-xs mt-3",
} as const;

export function BrandLockup({
  className,
  align = "left",
  size = "md",
  inverted = false,
}: BrandLockupProps) {
  return (
    <span
      className={cn(
        "inline-flex flex-col",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <span
        className={cn(
          "font-serif font-medium tracking-[0.18em] uppercase",
          inverted ? "text-champagne" : "text-charcoal",
          nameSize[size],
        )}
      >
        {business.businessName}
      </span>
      <span
        className={cn(
          "font-sans font-normal tracking-[0.38em] uppercase",
          inverted ? "text-champagne/75" : "text-muted",
          subtitleSize[size],
        )}
      >
        {business.brandSubtitle}
      </span>
    </span>
  );
}
