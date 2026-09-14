import {
  business,
  hasEmail,
  hasInstagram,
  hasPhone,
  hasSiteUrl,
} from "../config/business";
import { useLanguage } from "../i18n/LanguageContext";

export function JsonLd() {
  const { t } = useLanguage();

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    name: `${business.businessName} ${business.brandSubtitle}`.trim(),
    description: t.seo.description,
  };

  if (hasSiteUrl) {
    data.url = business.siteUrl;
  }

  if (hasPhone) {
    data.telephone = business.phone;
  }

  if (hasEmail) {
    data.email = business.email;
  }

  if (hasInstagram) {
    data.sameAs = [business.instagramUrl];
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
