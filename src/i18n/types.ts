export type Language = "es" | "en" | "ru" | "lt";

export const LANGUAGE_OPTIONS: readonly {
  code: Language;
  nativeLabel: string;
  shortLabel: string;
}[] = [
  { code: "es", nativeLabel: "Español", shortLabel: "ES" },
  { code: "en", nativeLabel: "English", shortLabel: "EN" },
  { code: "ru", nativeLabel: "Русский", shortLabel: "RU" },
  { code: "lt", nativeLabel: "Lietuvių", shortLabel: "LT" },
] as const;

export const DEFAULT_LANGUAGE: Language = "es";

export const LANGUAGE_STORAGE_KEY = "neringa-language";
