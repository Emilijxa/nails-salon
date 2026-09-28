import { useLanguage } from "../i18n/LanguageContext";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { t } = useLanguage();

  return (
    <section
      id="sobre-mi"
      className="scroll-mt-0 bg-nude px-5 py-20 sm:px-8 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <figure className="mx-auto w-full max-w-md">
          <img
            src="/images/about/neringa-portrait.jpg"
            alt={t.about.portraitAlt}
            className="h-auto w-full"
            width={758}
            height={972}
            loading="lazy"
          />
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
