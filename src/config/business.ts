/**
 * Central business configuration for Neringa Nail Technician.
 *
 * Fill in empty values before launch. The website hides WhatsApp, Instagram,
 * phone and email actions until the matching field is set, so missing data
 * will never produce a broken button.
 */

export const SQUARE_BOOKING_URL =
  "https://app.squareup.com/appointments/book/84m7brwsos03pw/LA6H12NQF7NYE/start";

export const business = {
  businessName: "Neringa",
  brandSubtitle: "Nail Technician",

  /**
   * Public Square Appointments booking page.
   * Every booking button on the site uses this single URL.
   */
  squareBookingUrl: SQUARE_BOOKING_URL,

  /**
   * WhatsApp number in international format, digits only, no spaces.
   * Spain example: 346XXXXXXXX
   */
  whatsappNumber: "",

  /**
   * Full Instagram profile URL, for example:
   * https://www.instagram.com/username/
   */
  instagramUrl: "",

  /**
   * Display phone number, for example: +34 6XX XXX XXX
   */
  phone: "",

  /**
   * Public contact email. Leave empty until a real address exists.
   */
  email: "",

  /**
   * General public location only (city / area). Do not invent a street address.
   * Example: "Valencia, España"
   */
  location: "",

  /**
   * Public site URL used for canonical + Open Graph tags once deployed.
   * Example: "https://www.example.com"
   */
  siteUrl: "",
} as const;

export type BusinessConfig = typeof business;

export const hasWhatsApp = business.whatsappNumber.trim().length > 0;
export const hasInstagram = business.instagramUrl.trim().length > 0;
export const hasPhone = business.phone.trim().length > 0;
export const hasEmail = business.email.trim().length > 0;
export const hasLocation = business.location.trim().length > 0;
export const hasSiteUrl = business.siteUrl.trim().length > 0;

export function getWhatsAppUrl(message: string): string | null {
  if (!hasWhatsApp) return null;
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getTelUrl(): string | null {
  if (!hasPhone) return null;
  const digits = business.phone.replace(/[^\d+]/g, "");
  if (!digits) return null;
  return `tel:${digits}`;
}

export function getMailtoUrl(): string | null {
  if (!hasEmail) return null;
  return `mailto:${business.email}`;
}
