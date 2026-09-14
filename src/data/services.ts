/**
 * Service listings shown on the website.
 *
 * `translationKey` must match a key under `services.items` in
 * src/i18n/translations.ts
 *
 * Booking for every service uses the same Square URL from src/config/business.ts
 */

export type Service = {
  id: string;
  translationKey: "semiPermanent" | "gelNails" | "fill" | "removal" | "nailArt";
  price: string;
  duration: string;
};

export const services: Service[] = [
  {
    id: "semi-permanent",
    translationKey: "semiPermanent",
    price: "€18",
    duration: "1 h",
  },
  {
    id: "gel-nails",
    translationKey: "gelNails",
    price: "€32",
    duration: "2 h",
  },
  {
    id: "fill",
    translationKey: "fill",
    price: "€25",
    duration: "1–2 h",
  },
  {
    id: "removal",
    translationKey: "removal",
    price: "€12",
    duration: "1 h",
  },
  {
    id: "nail-art",
    translationKey: "nailArt",
    price: "€12",
    duration: "1 h",
  },
];
