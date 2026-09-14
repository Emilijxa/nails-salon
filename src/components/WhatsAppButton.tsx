import { getWhatsAppUrl, hasWhatsApp } from "../config/business";
import { useLanguage } from "../i18n/LanguageContext";
import { WhatsAppIcon } from "./icons";

export function WhatsAppButton() {
  const { t } = useLanguage();
  if (!hasWhatsApp) return null;

  const href = getWhatsAppUrl(t.whatsapp.defaultMessage);
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.ariaLabel}
      className="fixed bottom-5 right-5 z-40 inline-flex min-h-14 min-w-14 items-center justify-center rounded-full bg-charcoal text-ivory shadow-md transition-colors duration-300 hover:bg-ink sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon />
    </a>
  );
}
