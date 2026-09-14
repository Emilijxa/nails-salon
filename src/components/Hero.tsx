import { useLanguage } from "../i18n/LanguageContext";
import { scrollToId } from "../lib/navigate";
import { BookingButton } from "./BookingButton";
import { BrandLockup } from "./BrandLockup";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink text-ivory"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <img
          src="/images/hero/hero-nails.jpg"
          alt=""
          className="h-full w-full object-cover opacity-35"
          width={1400}
          height={1750}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/75 to-ink" />
      </div>

      <div className="relative mx-auto grid min-h-[min(92vh,52rem)] max-w-6xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <h1 id="hero-heading">
            <BrandLockup size="lg" inverted />
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-ivory/80 sm:text-xl">
            {t.hero.tagline}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <BookingButton variant="light" size="lg" className="w-full sm:w-auto" />
            <button
              type="button"
              onClick={() => scrollToId("galeria")}
              className="inline-flex min-h-12 items-center justify-center border border-ivory/25 px-8 text-sm font-medium uppercase tracking-[0.12em] text-ivory transition-colors hover:border-champagne hover:text-champagne"
            >
              {t.cta.viewWork}
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="aspect-[4/5] overflow-hidden border border-champagne/20">
            <img
              src="/images/gallery/nails-01.jpg"
              alt={t.gallery.alts.glitterArt}
              className="h-full w-full object-cover"
              width={1200}
              height={1500}
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden w-36 overflow-hidden border border-champagne/25 sm:block lg:-left-8">
            <img
              src="/images/gallery/nails-05.jpg"
              alt=""
              className="aspect-[3/4] w-full object-cover"
              width={400}
              height={533}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
