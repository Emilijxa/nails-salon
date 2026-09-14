import { Clock } from "lucide-react";
import { services } from "../data/services";
import { useLanguage } from "../i18n/LanguageContext";
import { BookingButton } from "./BookingButton";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  const { t } = useLanguage();

  return (
    <section
      id="servicios"
      className="scroll-mt-0 bg-ivory px-5 py-20 sm:px-8 sm:py-24"
      aria-labelledby="services-heading"
    >
      <Reveal>
        <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="services-heading"
          title={t.services.heading}
          subtitle={t.services.subtitle}
        />

        <ul className="mt-14 divide-y divide-charcoal/10 border-y border-charcoal/10">
          {services.map((service) => {
            const copy = t.services.items[service.translationKey];
            return (
              <li
                key={service.id}
                className="grid gap-4 py-8 md:grid-cols-[1fr_auto] md:items-center md:gap-10"
              >
                <div>
                  <h3 className="font-serif text-2xl text-charcoal md:text-[1.65rem]">
                    {copy.name}
                  </h3>
                  <p className="mt-2 max-w-xl text-[0.98rem] leading-relaxed text-muted">
                    {copy.description}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 md:justify-end">
                  <p className="text-sm text-charcoal">
                    <span className="sr-only">{t.services.price}: </span>
                    <span className="font-medium tracking-wide">{service.price}</span>
                  </p>
                  <p className="inline-flex items-center gap-1.5 text-sm text-muted">
                    <Clock size={15} strokeWidth={1.5} aria-hidden="true" />
                    <span className="sr-only">{t.services.duration}: </span>
                    {service.duration}
                  </p>
                  <BookingButton variant="secondary" size="sm">
                    {t.services.bookThis}
                  </BookingButton>
                </div>
              </li>
            );
          })}
        </ul>
        </div>
      </Reveal>
    </section>
  );
}
