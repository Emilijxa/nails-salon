/**
 * Gallery / portfolio images.
 *
 * Add more photographs by placing files in public/images/gallery/
 * and appending objects here. `altKey` must match `gallery.alts` in
 * src/i18n/translations.ts
 */

export type GalleryImage = {
  id: string;
  src: string;
  altKey:
    | "glitterArt"
    | "milkyWhite"
    | "roseShimmer"
    | "frenchSoft"
    | "hotPink"
    | "frenchClassic"
    | "wineRed";
};

export const galleryImages: GalleryImage[] = [
  { id: "nails-01", src: "/images/gallery/nails-01.jpg", altKey: "glitterArt" },
  { id: "nails-02", src: "/images/gallery/nails-02.jpg", altKey: "milkyWhite" },
  { id: "nails-03", src: "/images/gallery/nails-03.jpg", altKey: "roseShimmer" },
  { id: "nails-04", src: "/images/gallery/nails-04.jpg", altKey: "frenchSoft" },
  { id: "nails-05", src: "/images/gallery/nails-05.jpg", altKey: "hotPink" },
  { id: "nails-06", src: "/images/gallery/nails-06.jpg", altKey: "frenchClassic" },
  { id: "nails-07", src: "/images/gallery/nails-07.jpg", altKey: "wineRed" },
];
