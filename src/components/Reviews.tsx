import { Star } from "lucide-react";
import { reviews } from "../data/reviews";
import { useLanguage } from "../i18n/LanguageContext";
import { cn } from "../lib/cn";
import { SectionHeading } from "./SectionHeading";

function StarRating({ rating, label }: { rating: number; label: string }) {
  const clamped = Math.min(5, Math.max(0, rating));

  return (
    <div className="flex items-center gap-0.5" aria-label={label}>
      {Array.from({ length: 5 }, (_, i) => {
        const filled = i < clamped;
        return (
          <Star
            key={i}
            size={16}
            strokeWidth={1.4}
            className={cn(filled ? "fill-rose-dark text-rose-dark" : "text-charcoal/25")}
            aria-hidden="true"
          />
        );
      })}
    </div>
  );
}

export function Reviews() {
  const { t } = useLanguage();

  return (
    <section
      id="opiniones"
      className="scroll-mt-0 bg-ivory px-5 py-20 sm:px-8 sm:py-24"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="reviews-heading"
          title={t.reviews.heading}
          subtitle={t.reviews.subtitle}
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => {
            const ratingLabel = t.reviews.ratingLabel.replace(
              "{rating}",
              String(review.rating),
            );
            return (
              <li
                key={review.id}
                className="border border-charcoal/10 bg-white/60 px-6 py-8"
              >
                <StarRating rating={review.rating} label={ratingLabel} />
                <blockquote className="mt-5">
                  <p className="font-serif text-xl leading-relaxed text-charcoal">
                    {t.reviews.items[review.textKey]}
                  </p>
                  <footer className="mt-6 text-xs uppercase tracking-[0.22em] text-muted">
                    {t.reviews[review.nameKey]}
                  </footer>
                </blockquote>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
