import { useEffect } from "react";
import { business, hasSiteUrl } from "../config/business";

export function Seo() {
  useEffect(() => {
    const origin = hasSiteUrl
      ? business.siteUrl.replace(/\/$/, "")
      : window.location.origin;

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", `${origin}/`);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", `${origin}/`);

    const image = `${origin}/images/og-image.jpg`;
    document
      .querySelectorAll('meta[property="og:image"], meta[name="twitter:image"]')
      .forEach((el) => el.setAttribute("content", image));
  }, []);

  return null;
}
