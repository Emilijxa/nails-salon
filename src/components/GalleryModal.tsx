import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "../data/gallery";
import { useLanguage } from "../i18n/LanguageContext";
import { useLockBody } from "./Reveal";

type GalleryModalProps = {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function GalleryModal({
  images,
  index,
  onClose,
  onIndexChange,
}: GalleryModalProps) {
  const { t } = useLanguage();
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const image = images[index];

  useLockBody(true);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") {
        onIndexChange((index + 1) % images.length);
      }
      if (event.key === "ArrowLeft") {
        onIndexChange((index - 1 + images.length) % images.length);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [index, images.length, onClose, onIndexChange]);

  if (!image) return null;

  const alt = t.gallery.alts[image.altKey];
  const counter = t.gallery.counter
    .replace("{current}", String(index + 1))
    .replace("{total}", String(images.length));

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-label={t.gallery.dialog}
    >
      <button
        type="button"
        className="absolute inset-0 bg-ink/85"
        aria-label={t.gallery.close}
        onClick={onClose}
      />

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center">
        <p id={titleId} className="sr-only">
          {alt}. {counter}
        </p>
        <img
          src={image.src}
          alt={alt}
          className="max-h-[min(78vh,52rem)] w-full object-contain"
          width={1200}
          height={1500}
        />
        <p className="mt-4 text-sm tracking-[0.16em] text-ivory/70">{counter}</p>
      </div>

      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 inline-flex min-h-11 min-w-11 items-center justify-center text-ivory hover:text-champagne"
        aria-label={t.gallery.close}
      >
        <X size={22} strokeWidth={1.5} aria-hidden="true" />
      </button>

      {images.length > 1 ? (
        <>
          <button
            type="button"
            onClick={() => onIndexChange((index - 1 + images.length) % images.length)}
            className="absolute left-2 top-1/2 inline-flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center text-ivory hover:text-champagne sm:left-4"
            aria-label={t.gallery.previous}
          >
            <ChevronLeft size={28} strokeWidth={1.25} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => onIndexChange((index + 1) % images.length)}
            className="absolute right-2 top-1/2 inline-flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center text-ivory hover:text-champagne sm:right-4"
            aria-label={t.gallery.next}
          >
            <ChevronRight size={28} strokeWidth={1.25} aria-hidden="true" />
          </button>
        </>
      ) : null}
    </div>,
    document.body,
  );
}
