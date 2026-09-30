/**
 * Customer reviews.
 *
 * `textKey` maps to `reviews.items[textKey]` in src/i18n/translations.ts
 * Rating may be any integer from 1 to 5.
 * `postedOn` is shown as DD/MM/YYYY; `postedOnIso` is the machine-readable date.
 */

export type Review = {
  id: string;
  nameKey: "client" | "lina" | "olga" | "rasa";
  textKey: "placeholder1" | "placeholder2" | "placeholder3";
  rating: number;
  postedOn?: string;
  postedOnIso?: string;
};

export const reviews: Review[] = [
  {
    id: "review-1",
    nameKey: "lina",
    textKey: "placeholder1",
    rating: 5,
    postedOn: "11/09/2026",
    postedOnIso: "2026-09-11",
  },
  {
    id: "review-2",
    nameKey: "olga",
    textKey: "placeholder2",
    rating: 5,
    postedOn: "28/08/2026",
    postedOnIso: "2026-08-28",
  },
  {
    id: "review-3",
    nameKey: "rasa",
    textKey: "placeholder3",
    rating: 5,
    postedOn: "22/08/2026",
    postedOnIso: "2026-08-22",
  },
];
