import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "./icons";
import {
  business,
  getMailtoUrl,
  getTelUrl,
  getWhatsAppUrl,
  hasEmail,
  hasInstagram,
  hasLocation,
  hasPhone,
  hasWhatsApp,
} from "../config/business";
import { openingHours } from "../data/openingHours";
import { useLanguage } from "../i18n/LanguageContext";
import { BookingButton } from "./BookingButton";
import { SectionHeading } from "./SectionHeading";

const logoButtonClass =
  "inline-flex min-h-16 min-w-16 items-center justify-center text-rose-dark transition-colors hover:text-charcoal";

export function Contact() {
  const { t } = useLanguage();
  const whatsappUrl = getWhatsAppUrl(t.whatsapp.defaultMessage);
  const telUrl = getTelUrl();
  const mailtoUrl = getMailtoUrl();
  const locationLines = hasLocation ? business.location.split("\n") : [];

  const instagramLogo = <InstagramIcon size={44} />;

  return (
    <section
      id="contacto"
      className="scroll-mt-0 bg-nude px-5 py-20 sm:px-8 sm:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="contact-heading"
          title={t.contact.heading}
          subtitle={t.contact.subtitle}
        />

        <div className="mt-10 flex items-center justify-center gap-6 sm:gap-10">
          {hasWhatsApp && whatsappUrl ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.whatsapp.ariaLabel}
              className={logoButtonClass}
            >
              <WhatsAppIcon size={48} />
            </a>
          ) : null}

          {hasInstagram ? (
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.cta.instagram}
              className={logoButtonClass}
            >
              {instagramLogo}
            </a>
          ) : (
            <div className={logoButtonClass} aria-label={t.contact.instagramPending}>
              {instagramLogo}
            </div>
          )}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ul className="space-y-8">
            <li className="flex gap-4">
              <MapPin className="mt-1 shrink-0 text-rose-dark" size={20} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.22em] text-muted">
                  {t.contact.location}
                </p>
                {hasLocation ? (
                  <div className="mt-3 max-w-xl space-y-1 font-serif text-xl font-medium leading-relaxed tracking-tight text-charcoal">
                    {locationLines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                ) : (
                  <>
                    <p className="mt-3 font-serif text-xl font-medium leading-relaxed tracking-tight text-charcoal">
                      {t.contact.locationPending}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {t.contact.addressNote}
                    </p>
                  </>
                )}
              </div>
            </li>

            {hasPhone && telUrl ? (
              <li className="flex gap-4">
                <Phone className="mt-1 shrink-0 text-rose-dark" size={20} strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <p className="font-sans text-xs uppercase tracking-[0.22em] text-muted">
                    {t.contact.phone}
                  </p>
                  <a href={telUrl} className="mt-3 inline-flex min-h-11 items-center font-serif text-xl font-medium tracking-tight text-charcoal hover:text-rose-dark">
                    {business.phone}
                  </a>
                </div>
              </li>
            ) : null}

            {hasEmail && mailtoUrl ? (
              <li className="flex gap-4">
                <Mail className="mt-1 shrink-0 text-rose-dark" size={20} strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <p className="font-sans text-xs uppercase tracking-[0.22em] text-muted">
                    {t.contact.email}
                  </p>
                  <a href={mailtoUrl} className="mt-3 inline-flex min-h-11 items-center font-serif text-xl font-medium tracking-tight text-charcoal hover:text-rose-dark">
                    {business.email}
                  </a>
                </div>
              </li>
            ) : null}
          </ul>

          <div className="border border-charcoal/10 bg-ivory/70 px-6 py-8 sm:px-8">
            <div className="flex items-center gap-2 text-charcoal">
              <Clock size={18} strokeWidth={1.5} aria-hidden="true" />
              <p className="font-sans text-xs uppercase tracking-[0.22em]">{t.contact.hours}</p>
            </div>
            <ul className="mt-6 space-y-3">
              {openingHours.map((entry) => (
                <li
                  key={entry.id}
                  className="flex items-baseline justify-between gap-4 border-b border-charcoal/8 pb-3 text-sm last:border-0"
                >
                  <span className="text-charcoal">{t.hours[entry.dayKey]}</span>
                  <span className="text-muted">
                    {entry.hours === "closed" ? t.hours.closed : entry.hours}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              {t.contact.hoursNote}
            </p>
            <div className="mt-8">
              <BookingButton className="w-full sm:w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
