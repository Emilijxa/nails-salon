import { useLanguage } from "../i18n/LanguageContext";
import { navigate } from "../lib/navigate";

type LegalKind = "privacy" | "legal";

export function LegalPage({ kind }: { kind: LegalKind }) {
  const { t } = useLanguage();
  const copy = kind === "privacy" ? t.privacy : t.legal;

  return (
    <main id="main-content" className="bg-ivory px-5 pb-16 pt-24 sm:px-8 sm:pb-24 sm:pt-28">
      <article className="mx-auto max-w-2xl">
        <p className="text-xs uppercase tracking-[0.28em] text-rose-dark">{copy.updated}</p>
        <h1 className="mt-4 font-serif text-4xl text-charcoal sm:text-5xl">{copy.title}</h1>
        <div className="mt-10 space-y-5 text-[1.02rem] leading-relaxed text-muted">
          <p>{copy.p1}</p>
          <p>{copy.p2}</p>
          <p>{copy.p3}</p>
          <p>{copy.p4}</p>
          {kind === "privacy" ? <p>{t.privacy.p5}</p> : null}
        </div>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="mt-12 inline-flex min-h-11 items-center text-sm uppercase tracking-[0.16em] text-charcoal hover:text-rose-dark"
        >
          {t.footer.backHome}
        </button>
      </article>
    </main>
  );
}
