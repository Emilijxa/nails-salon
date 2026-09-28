import { business } from "../config/business";
import { useLanguage } from "../i18n/LanguageContext";
import { getAppPath, navigate, scrollToId } from "../lib/navigate";
import { BookingButton } from "./BookingButton";
import { BrandLockup } from "./BrandLockup";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const goHomeSection = (hash: string) => {
    if (getAppPath() !== "/") {
      window.history.pushState({}, "", `/#${hash}`);
      window.dispatchEvent(new PopStateEvent("popstate"));
      return;
    }
    if (hash === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    scrollToId(hash);
  };

  return (
    <footer className="border-t border-charcoal/8 bg-ivory px-5 py-14 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <button
            type="button"
            onClick={() => {
              if (getAppPath() !== "/") navigate("/");
              else goHomeSection("top");
            }}
            className="text-left"
          >
            <BrandLockup size="md" />
          </button>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
            {t.hero.tagline}
          </p>
        </div>

        <nav aria-label={t.nav.main} className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
          <button type="button" className="min-h-11 text-left text-muted hover:text-charcoal" onClick={() => goHomeSection("top")}>
            {t.nav.home}
          </button>
          <button type="button" className="min-h-11 text-left text-muted hover:text-charcoal" onClick={() => goHomeSection("servicios")}>
            {t.nav.services}
          </button>
          <button type="button" className="min-h-11 text-left text-muted hover:text-charcoal" onClick={() => goHomeSection("galeria")}>
            {t.nav.gallery}
          </button>
          <button type="button" className="min-h-11 text-left text-muted hover:text-charcoal" onClick={() => goHomeSection("sobre-mi")}>
            {t.nav.about}
          </button>
          <button type="button" className="min-h-11 text-left text-muted hover:text-charcoal" onClick={() => goHomeSection("opiniones")}>
            {t.nav.reviews}
          </button>
          <button type="button" className="min-h-11 text-left text-muted hover:text-charcoal" onClick={() => goHomeSection("contacto")}>
            {t.nav.contact}
          </button>
          <BookingButton variant="link" className="justify-start">
            {t.cta.book}
          </BookingButton>
        </nav>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-3 border-t border-charcoal/8 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {business.businessName}. {t.footer.rights}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <button type="button" className="min-h-11 hover:text-charcoal" onClick={() => navigate("/privacy")}>
            {t.footer.privacy}
          </button>
          <button type="button" className="min-h-11 hover:text-charcoal" onClick={() => navigate("/legal")}>
            {t.footer.legal}
          </button>
        </div>
      </div>
    </footer>
  );
}
