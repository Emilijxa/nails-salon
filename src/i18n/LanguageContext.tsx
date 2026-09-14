import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Translation } from "./translations";
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  type Language,
} from "./types";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const SUPPORTED: Language[] = ["es", "en", "ru", "lt"];

function isLanguage(value: string): value is Language {
  return SUPPORTED.includes(value as Language);
}

function detectLanguage(): Language {
  try {
    const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (saved && isLanguage(saved)) return saved;
  } catch {
    // localStorage may be unavailable
  }

  const nav = window.navigator.language?.toLowerCase() ?? "";
  if (nav.startsWith("es")) return "es";
  if (nav.startsWith("en")) return "en";
  if (nav.startsWith("ru")) return "ru";
  if (nav.startsWith("lt")) return "lt";
  return DEFAULT_LANGUAGE;
}

function applyDocumentLanguage(language: Language, title: string): void {
  document.documentElement.lang = language;
  document.title = title;

  const description = translations[language].seo.description;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", description);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", description);

  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) twitterTitle.setAttribute("content", title);

  const twitterDesc = document.querySelector('meta[name="twitter:description"]');
  if (twitterDesc) twitterDesc.setAttribute("content", description);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => detectLanguage());

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, next);
    } catch {
      // ignore write failures
    }
  }, []);

  const t = translations[language];

  useEffect(() => {
    applyDocumentLanguage(language, t.seo.title);
  }, [language, t.seo.title]);

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
