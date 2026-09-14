import { useLanguage } from "../i18n/LanguageContext";
import { BookingButton } from "./BookingButton";
import { cn } from "../lib/cn";

type BookingCTAProps = {
  variant: "mid" | "final";
};

export function BookingCTA({ variant }: BookingCTAProps) {
  const { t } = useLanguage();
  const copy = variant === "mid" ? t.bookingMid : t.bookingFinal;
  const inverted = variant === "final";

  return (
    <section
      className={cn(
        "px-5 py-16 sm:px-8 sm:py-20",
        inverted ? "bg-ink text-ivory" : "bg-nude",
      )}
      aria-labelledby={variant === "mid" ? "booking-mid-heading" : "booking-final-heading"}
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id={variant === "mid" ? "booking-mid-heading" : "booking-final-heading"}
          className={cn(
            "font-serif text-3xl font-medium tracking-tight sm:text-4xl",
            inverted ? "text-ivory" : "text-charcoal",
          )}
        >
          {copy.heading}
        </h2>
        <span
          className={cn(
            "mx-auto mt-5 block h-px w-12",
            inverted ? "bg-champagne/40" : "bg-rose/60",
          )}
          aria-hidden="true"
        />
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-[1.05rem]",
            inverted ? "text-ivory/75" : "text-muted",
          )}
        >
          {copy.body}
        </p>
        <div className="mt-8">
          <BookingButton variant={inverted ? "light" : "primary"} size="lg" />
        </div>
      </div>
    </section>
  );
}
