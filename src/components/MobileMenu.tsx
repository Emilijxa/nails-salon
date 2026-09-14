import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { BookingButton } from "./BookingButton";
import { BrandLockup } from "./BrandLockup";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../i18n/LanguageContext";
import { hasInstagram, business } from "../config/business";
import { useLockBody } from "./Reveal";
import { InstagramIcon } from "./icons";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
};

const LINKS = ["services", "gallery", "about", "reviews", "contact"] as const;

export function MobileMenu({ open, onClose, onNavigate }: MobileMenuProps) {
  const { t } = useLanguage();
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

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
    services: t.nav.services,
    gallery: t.nav.gallery,
    about: t.nav.about,
    reviews: t.nav.reviews,
    contact: t.nav.contact,
  };

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-[#F6F1EB] px-6 py-5 xl:hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="flex shrink-0 items-center justify-between gap-4">
        <p id={titleId} className="sr-only">
          {business.businessName}
        </p>
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="text-left"
          aria-label={t.nav.home}
        >
          <BrandLockup size="sm" />
        </button>
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

      <nav
        className="mt-8 flex flex-col border-t border-charcoal/10"
        aria-label={t.nav.main}
      >
        {LINKS.map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => onNavigate(id)}
            className="min-h-12 border-b border-charcoal/10 py-3 text-left font-serif text-[1.4rem] leading-none tracking-wide text-charcoal"
          >
            {labels[id]}
          </button>
        ))}
      </nav>

      <div className="mt-8 shrink-0">
        <BookingButton className="w-full" />
        {hasInstagram ? (
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-charcoal"
          >
            <InstagramIcon size={18} />
            {t.cta.instagram}
          </a>
        ) : null}
      </div>

      <div className="mt-auto shrink-0 pt-8">
        <p className="mb-1 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-muted">
          {t.nav.language}
        </p>
        <LanguageSwitcher />
      </div>
    </div>,
    document.body,
  );
}
