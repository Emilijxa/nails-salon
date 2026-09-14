import { cn } from "../lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  inverted?: boolean;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  inverted = false,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-[0.68rem] font-medium uppercase tracking-[0.32em]",
            inverted ? "text-champagne/70" : "text-rose-dark",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "font-serif text-3xl font-medium tracking-tight sm:text-4xl md:text-[2.75rem]",
          inverted ? "text-ivory" : "text-charcoal",
        )}
      >
        {title}
      </h2>
      <span
        className={cn(
          "mx-auto mt-5 block h-px w-12",
          align === "left" && "mx-0",
          inverted ? "bg-champagne/40" : "bg-rose/60",
        )}
        aria-hidden="true"
      />
      {subtitle ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-[1.05rem]",
            inverted ? "text-ivory/75" : "text-muted",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
