import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { BookingButton } from "./BookingButton";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../i18n/LanguageContext";
import { getWhatsAppUrl, hasInstagram, hasWhatsApp, business } from "../config/business";
import { useLockBody } from "./Reveal";
import { MessageCircle } from "lucide-react";
import { InstagramIcon } from "./icons";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
};

const LINKS = ["home", "services", "gallery", "about", "reviews", "contact"] as const;

export function MobileMenu({ open, onClose, onNavigate }: MobileMenuProps) {
  const { t } = useLanguage();
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const whatsappUrl = getWhatsAppUrl(t.whatsapp.defaultMessage);

  useLockBody(open);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const labels: Record<(typeof LINKS)[number], string> = {
    home: t.nav.home,
    services: t.nav.services,
    gallery: t.nav.gallery,
    about: t.nav.about,
    reviews: t.nav.reviews,
    contact: t.nav.contact,
  };

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-[#F6F1EB] px-6 py-6 xl:hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="flex items-center justify-between">
        <p id={titleId} className="font-serif text-xl tracking-[0.16em] uppercase text-charcoal">
          {business.businessName}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="inline-flex min-h-11 min-w-11 items-center justify-center text-charcoal"
          aria-label={t.nav.closeMenu}
        >
          <span className="sr-only">{t.nav.closeMenu}</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </button>
      </div>

      <nav className="mt-8 flex flex-col gap-1 overflow-y-auto" aria-label={t.nav.main}>
        {LINKS.map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => onNavigate(id)}
            className="min-h-12 border-b border-charcoal/10 px-1 text-left font-serif text-2xl text-charcoal"
          >
            {labels[id]}
          </button>
        ))}
      </nav>

      <div className="mt-8">
        <BookingButton className="w-full" />
      </div>

      {(hasWhatsApp || hasInstagram) && (
        <div className="mt-5 flex flex-col gap-2">
          {whatsappUrl ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-charcoal"
            >
              <MessageCircle size={18} aria-hidden="true" />
              {t.cta.whatsapp}
            </a>
          ) : null}
          {hasInstagram ? (
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-charcoal"
            >
              <InstagramIcon size={18} />
              {t.cta.instagram}
            </a>
          ) : null}
        </div>
      )}

      <div className="mt-auto pt-8">
        <LanguageSwitcher variant="stack" />
      </div>
    </div>,
    document.body,
  );
}
