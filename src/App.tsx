import { About } from "./components/About";
import { BookingCTA } from "./components/BookingCTA";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { JsonLd } from "./components/JsonLd";
import { LegalPage } from "./components/LegalPage";
import { Navbar } from "./components/Navbar";
import { Reviews } from "./components/Reviews";
import { Seo } from "./components/Seo";
import { Services } from "./components/Services";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { useLanguage } from "./i18n/LanguageContext";
import { getAppPath, scrollToId, type AppPath } from "./lib/navigate";
import { useEffect, useState } from "react";

function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <Services />
      <BookingCTA variant="mid" />
      <Gallery />
      <About />
      <Reviews />
      <Contact />
      <BookingCTA variant="final" />
    </main>
  );
}

export default function App() {
  const { t } = useLanguage();
  const [path, setPath] = useState<AppPath>(() => getAppPath());

  useEffect(() => {
    const onPop = () => setPath(getAppPath());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    if (path !== "/") return;
    const hash = window.location.hash.replace("#", "");
    if (!hash || hash === "top") return;
    const timer = window.setTimeout(() => scrollToId(hash), 60);
    return () => window.clearTimeout(timer);
  }, [path]);

  return (
    <>
      <Seo />
      <JsonLd />
      <a href="#main-content" className="skip-link">
        {t.skipToContent}
      </a>
      <Navbar />
      {path === "/privacy" ? (
        <LegalPage kind="privacy" />
      ) : path === "/legal" ? (
        <LegalPage kind="legal" />
      ) : (
        <HomePage />
      )}
      <Footer />
      <WhatsAppButton />
    </>
  );
}
