import { getWhatsAppUrl, hasWhatsApp } from "../config/business";
import { useLanguage } from "../i18n/LanguageContext";

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.43-9.91 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.9-4.44 9.9-9.9C21.94 6.43 17.5 2 12.04 2zm5.79 14.09c-.24.68-1.39 1.25-1.92 1.33-.49.07-1.1.1-1.77-.11-.41-.13-.93-.3-1.6-.59-2.81-1.22-4.64-4.05-4.78-4.24-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.08.99-2.36.26-.28.57-.35.76-.35h.55c.18 0 .41-.07.64.49.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.14.31-.28.48-.14.16-.3.37-.42.49-.14.14-.29.29-.12.57.16.28.73 1.2 1.56 1.95 1.07.96 1.97 1.26 2.25 1.4.28.14.44.12.6-.07.16-.19.69-.8.88-1.08.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.46.21.53.33.07.12.07.68-.17 1.36z" />
    </svg>
  );
}

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
      className="fixed bottom-5 right-5 z-40 inline-flex min-h-14 min-w-14 items-center justify-center rounded-full bg-[#5B8F6A] text-white shadow-md transition-transform duration-300 hover:scale-[1.04] sm:bottom-7 sm:right-7"
    >
      <WhatsAppGlyph />
    </a>
  );
}
