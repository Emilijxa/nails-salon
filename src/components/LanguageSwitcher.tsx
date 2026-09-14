import { LANGUAGE_OPTIONS } from "../i18n/types";
import { useLanguage } from "../i18n/LanguageContext";
import { cn } from "../lib/cn";

type LanguageSwitcherProps = {
  variant?: "inline" | "stack";
  inverted?: boolean;
};

export function LanguageSwitcher({
  variant = "inline",
  inverted = false,
}: LanguageSwitcherProps) {
  const { language, setLanguage, t } = useLanguage();

  if (variant === "stack") {
    return (
      <div>
        <p className="mb-3 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-muted">
          {t.nav.language}
        </p>
        <div className="flex flex-col gap-1" role="group" aria-label={t.language.label}>
          {LANGUAGE_OPTIONS.map((option) => {
            const selected = option.code === language;
            return (
              <button
                key={option.code}
                type="button"
                onClick={() => setLanguage(option.code)}
                aria-pressed={selected}
                className={cn(
                  "min-h-11 rounded-sm px-3 text-left text-base transition-colors",
                  selected
                    ? "bg-nude text-charcoal"
                    : "text-muted hover:bg-nude/60 hover:text-charcoal",
                )}
              >
                {option.nativeLabel}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex items-center gap-1"
      role="group"
      aria-label={t.language.label}
    >
      {LANGUAGE_OPTIONS.map((option, index) => {
        const selected = option.code === language;
        return (
          <span key={option.code} className="flex items-center">
            {index > 0 ? (
              <span
                className={cn(
                  "mx-1 text-[0.65rem]",
                  inverted ? "text-ivory/30" : "text-charcoal/20",
                )}
                aria-hidden="true"
              >
                |
              </span>
            ) : null}
            <button
              type="button"
              onClick={() => setLanguage(option.code)}
              aria-pressed={selected}
              className={cn(
                "min-h-11 min-w-11 px-1.5 text-[0.72rem] font-medium tracking-[0.16em] uppercase transition-colors",
                inverted
                  ? selected
                    ? "text-champagne"
                    : "text-ivory/55 hover:text-ivory"
                  : selected
                    ? "text-charcoal"
                    : "text-muted hover:text-charcoal",
              )}
            >
              {option.shortLabel}
            </button>
          </span>
        );
      })}
    </div>
  );
}
