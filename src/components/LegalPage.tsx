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
          {kind === "privacy" ? (
            <>
              <dl className="space-y-4 text-charcoal">
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-muted">
                    {t.privacy.controllerLabel}
                  </dt>
                  <dd className="mt-1">{t.privacy.controller}</dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-muted">
                    {t.privacy.addressLabel}
                  </dt>
                  <dd className="mt-1">{t.privacy.address}</dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-muted">
                    {t.privacy.emailLabel}
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${t.privacy.email}`}
                      className="underline decoration-charcoal/20 underline-offset-4 hover:text-rose-dark"
                    >
                      {t.privacy.email}
                    </a>
                  </dd>
                </div>
              </dl>
              <p>{t.privacy.p1}</p>
              <p>{t.privacy.p2}</p>
              <p>{t.privacy.p3}</p>
              <p>{t.privacy.p4}</p>
              <p>{t.privacy.p5}</p>
              <p>{t.privacy.p6}</p>
              <p>
                {t.privacy.p7Before}
                <a
                  href={`mailto:${t.privacy.email}`}
                  className="underline decoration-charcoal/20 underline-offset-4 hover:text-rose-dark"
                >
                  {t.privacy.email}
                </a>{t.privacy.p7After}
              </p>
              <p>{t.privacy.p8}</p>
              <p>{t.privacy.p9}</p>
            </>
          ) : (
            <>
              <p>{t.legal.p1}</p>
              <dl className="space-y-4 text-charcoal">
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-muted">
                    {t.legal.ownerLabel}
                  </dt>
                  <dd className="mt-1">{t.legal.owner}</dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-muted">
                    {t.legal.nifLabel}
                  </dt>
                  <dd className="mt-1">{t.legal.nif}</dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-muted">
                    {t.legal.addressLabel}
                  </dt>
                  <dd className="mt-1">{t.legal.address}</dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-muted">
                    {t.legal.emailLabel}
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${t.legal.email}`}
                      className="underline decoration-charcoal/20 underline-offset-4 hover:text-rose-dark"
                    >
                      {t.legal.email}
                    </a>
                  </dd>
                </div>
              </dl>
              <p>{t.legal.p2}</p>
              <p>{t.legal.p3}</p>
              <p>{t.legal.p4}</p>
            </>
          )}
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
