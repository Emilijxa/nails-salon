/**
 * Service listings shown on the website.
 *
 * Prices and durations are placeholders until Neringa supplies the real ones.
 * Replace `price` and `duration` in place. Add or remove objects as needed.
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
    price: "€XX",
    duration: "XX min",
  },
  {
    id: "gel-nails",
    translationKey: "gelNails",
    price: "€XX",
    duration: "XX min",
  },
  {
    id: "fill",
    translationKey: "fill",
    price: "€XX",
    duration: "XX min",
  },
  {
    id: "removal",
    translationKey: "removal",
    price: "€XX",
    duration: "XX min",
  },
  {
    id: "nail-art",
    translationKey: "nailArt",
    price: "€XX",
    duration: "XX min",
  },
];
