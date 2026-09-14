import { useLanguage } from "../i18n/LanguageContext";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { t } = useLanguage();

  return (
    <section
      id="sobre-mi"
      className="scroll-mt-24 bg-nude px-5 py-20 sm:px-8 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <figure className="mx-auto w-full max-w-md">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="/images/about/neringa-portrait.jpg"
              alt={t.about.portraitAlt}
              className="h-full w-full object-cover object-[center_20%]"
              width={1200}
              height={1500}
              loading="lazy"
            />
          </div>
          <figcaption className="mt-3 text-center text-xs tracking-[0.16em] uppercase text-muted">
            {t.about.portraitCaption}
          </figcaption>
        </figure>

        <div>
          <SectionHeading
            id="about-heading"
            align="left"
            title={t.about.heading}
          />
          <div className="mt-8 max-w-xl space-y-5 text-[1.02rem] leading-relaxed text-muted">
            <p className="text-charcoal">{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p className="border-l border-rose/70 pl-4 text-[0.95rem] italic">
              {t.about.p3}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
