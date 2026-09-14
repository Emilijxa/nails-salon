import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { getAppPath, scrollToId } from "../lib/navigate";
import { cn } from "../lib/cn";
import { BookingButton } from "./BookingButton";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";

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
  const [overHero, setOverHero] = useState(() => getAppPath() === "/");

  const labels: Record<(typeof NAV_ITEMS)[number]["id"], string> = {
    home: t.nav.home,
    services: t.nav.services,
    gallery: t.nav.gallery,
    about: t.nav.about,
    reviews: t.nav.reviews,
    contact: t.nav.contact,
  };

  useEffect(() => {
    const update = () => {
      if (getAppPath() !== "/") {
        setOverHero(false);
        return;
      }
      const hero = document.getElementById("top");
      if (!hero) {
        setOverHero(false);
        return;
      }
      setOverHero(window.scrollY < Math.max(hero.offsetHeight - 12, 24));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("popstate", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("popstate", update);
    };
  }, []);

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
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
      <div className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-end gap-4 px-5 py-4 sm:px-8 sm:py-5">
        <nav
          className="hidden items-center gap-1 xl:flex"
          aria-label={t.nav.main}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goTo(item.id)}
              className={cn(
                "min-h-11 whitespace-nowrap px-2 text-[0.75rem] font-medium tracking-[0.12em] uppercase transition-colors",
                overHero
                  ? "text-ivory/70 hover:text-ivory"
                  : "text-muted hover:text-charcoal",
              )}
            >
              {labels[item.id]}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <LanguageSwitcher inverted={overHero} />
          <BookingButton
            size="sm"
            variant={overHero ? "ghost" : "primary"}
            className="whitespace-nowrap"
          />
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex min-h-11 min-w-11 items-center justify-center border transition-colors duration-300 xl:hidden",
            overHero
              ? "border-champagne/55 text-champagne hover:border-ivory hover:text-ivory"
              : "border-charcoal/20 bg-ivory/90 text-charcoal hover:border-rose-dark hover:text-rose-dark",
          )}
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
