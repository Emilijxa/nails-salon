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
  lg: "text-[2.35rem] sm:text-5xl md:text-6xl leading-none",
} as const;

const logoSize = {
  sm: "h-[1.55em] -ml-[0.08em] -mr-[0.12em]",
  md: "h-[1.6em] -ml-[0.1em] -mr-[0.14em]",
  lg: "h-[1.55em] -ml-[0.12em] -mr-[0.18em]",
} as const;

const subtitleSize = {
  sm: "text-[0.58rem] mt-1",
  md: "text-[0.62rem] mt-1.5",
  lg: "text-[0.7rem] sm:text-xs mt-3 sm:mt-4",
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
      <span className="sr-only">
        {business.businessName} {business.brandSubtitle}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex items-center font-serif font-medium tracking-[0.18em] uppercase",
          inverted ? "text-champagne" : "text-charcoal",
          nameSize[size],
        )}
      >
        <img
          src="/images/brand/logo.png"
          alt=""
          width={720}
          height={467}
          className={cn("w-auto object-contain object-left", logoSize[size])}
        />
        <span>eringa</span>
      </span>
      <span
        aria-hidden="true"
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
