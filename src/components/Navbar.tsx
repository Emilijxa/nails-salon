import { useState } from "react";
import { Menu } from "lucide-react";
import { business } from "../config/business";
import { useLanguage } from "../i18n/LanguageContext";
import { getAppPath, navigate, scrollToId } from "../lib/navigate";
import { BookingButton } from "./BookingButton";
import { BrandLockup } from "./BrandLockup";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";
import { cn } from "../lib/cn";

const NAV_ITEMS = [
  { id: "home", hash: "top" },
  { id: "services", hash: "servicios" },
  { id: "gallery", hash: "galeria" },
  { id: "about", hash: "sobre-mi" },
  { id: "reviews", hash: "opiniones" },
  { id: "contact", hash: "contacto" },
] as const;

export function Navbar() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const labels: Record<(typeof NAV_ITEMS)[number]["id"], string> = {
    home: t.nav.home,
    services: t.nav.services,
    gallery: t.nav.gallery,
    about: t.nav.about,
    reviews: t.nav.reviews,
    contact: t.nav.contact,
  };

  const goTo = (sectionId: string) => {
    setMenuOpen(false);
    const item = NAV_ITEMS.find((entry) => entry.id === sectionId);
    const hash = item?.hash ?? "top";

    if (getAppPath() !== "/") {
      window.history.pushState({}, "", `/#${hash}`);
      window.dispatchEvent(new PopStateEvent("popstate"));
      return;
    }

    if (hash === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      history.replaceState({}, "", "/");
      return;
    }

    scrollToId(hash);
    history.replaceState({}, "", `/#${hash}`);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/8 bg-ivory/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <button
          type="button"
          onClick={() => {
            if (getAppPath() !== "/") {
              navigate("/");
              return;
            }
            goTo("home");
          }}
          className="flex shrink-0 items-center gap-3 text-left"
          aria-label={`${business.businessName} ${business.brandSubtitle}`}
        >
          <img
            src="/images/brand/logo.jpg"
            alt=""
            width={44}
            height={44}
            className={cn("h-11 w-11 object-cover object-[center_16%]")}
          />
          <BrandLockup size="sm" />
        </button>

        <nav
          className="hidden items-center gap-1 xl:flex"
          aria-label={t.nav.main}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goTo(item.id)}
              className="min-h-11 whitespace-nowrap px-2 text-[0.75rem] font-medium tracking-[0.12em] uppercase text-muted transition-colors hover:text-charcoal"
            >
              {labels[item.id]}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <LanguageSwitcher />
          <BookingButton size="sm" className="whitespace-nowrap" />
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center text-charcoal xl:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(true)}
          aria-label={t.nav.openMenu}
        >
          <Menu size={22} strokeWidth={1.5} aria-hidden="true" />
        </button>
      </div>

      <div id="mobile-menu">
        <MobileMenu
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          onNavigate={goTo}
        />
      </div>
    </header>
  );
}
