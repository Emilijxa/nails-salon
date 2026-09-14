/**
 * Gallery / portfolio images.
 *
 * Replace the files in public/images/gallery/ with Neringa’s real photographs,
 * keeping the same filenames — or update `src` here.
 *
 * Current images are decorative placeholders, not photographs of Neringa’s work.
 */

export type GalleryImage = {
  id: string;
  src: string;
  altKey: "placeholder1" | "placeholder2" | "placeholder3" | "placeholder4" | "placeholder5" | "placeholder6" | "placeholder7" | "placeholder8";
};

export const galleryImages: GalleryImage[] = [
  { id: "nails-01", src: "/images/gallery/nails-01.jpg", altKey: "placeholder1" },
  { id: "nails-02", src: "/images/gallery/nails-02.jpg", altKey: "placeholder2" },
  { id: "nails-03", src: "/images/gallery/nails-03.jpg", altKey: "placeholder3" },
  { id: "nails-04", src: "/images/gallery/nails-04.jpg", altKey: "placeholder4" },
  { id: "nails-05", src: "/images/gallery/nails-05.jpg", altKey: "placeholder5" },
  { id: "nails-06", src: "/images/gallery/nails-06.jpg", altKey: "placeholder6" },
  { id: "nails-07", src: "/images/gallery/nails-07.jpg", altKey: "placeholder7" },
  { id: "nails-08", src: "/images/gallery/nails-08.jpg", altKey: "placeholder8" },
];
