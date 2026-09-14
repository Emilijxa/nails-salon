/**
 * Customer reviews.
 *
 * These are obvious placeholders. Replace `name`, `textKey` content in
 * translations, and `rating` with genuine reviews before launch.
 * Do not present placeholder text as real client feedback.
 *
 * `textKey` maps to `reviews.items[textKey]` in src/i18n/translations.ts
 * Rating may be any integer from 1 to 5.
 */

export type Review = {
  id: string;
  nameKey: "client";
  textKey: "placeholder1" | "placeholder2" | "placeholder3";
  rating: number;
};

export const reviews: Review[] = [
  {
    id: "review-1",
    nameKey: "client",
    textKey: "placeholder1",
    rating: 5,
  },
  {
    id: "review-2",
    nameKey: "client",
    textKey: "placeholder2",
    rating: 5,
  },
  {
    id: "review-3",
    nameKey: "client",
    textKey: "placeholder3",
    rating: 4,
  },
];
