import { useLanguage } from "../i18n/LanguageContext";
import { scrollToId } from "../lib/navigate";
import { BookingButton } from "./BookingButton";
import { BrandLockup } from "./BrandLockup";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-ink text-ivory"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <img
          src="/images/hero/hero-nails.jpg"
          alt=""
          className="h-full w-full object-cover object-[center_30%] opacity-[0.48]"
          width={1400}
          height={1750}
        />
        <div className="absolute inset-0 bg-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-transparent to-ink/70" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-between px-5 pb-24 pt-8 sm:px-8 sm:pb-14 sm:pt-10 lg:pt-28 lg:pb-16">
        <h1 id="hero-heading" className="max-w-xl pr-14 xl:pr-0">
          <BrandLockup size="lg" inverted />
        </h1>

        <div className="max-w-lg">
          <p className="max-w-md text-lg leading-relaxed text-ivory/85 sm:text-xl">
            {t.hero.tagline}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <BookingButton variant="light" size="lg" className="w-full sm:w-auto" />
            <button
              type="button"
              onClick={() => scrollToId("galeria")}
              className="inline-flex min-h-12 items-center justify-center border border-ivory/30 px-8 text-sm font-medium uppercase tracking-[0.12em] text-ivory transition-colors hover:border-champagne hover:text-champagne"
            >
              {t.cta.viewWork}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
