import { useState } from "react";
import { InstagramIcon } from "./icons";
import { business, hasInstagram } from "../config/business";
import { galleryImages } from "../data/gallery";
import { useLanguage } from "../i18n/LanguageContext";
import { GalleryFilmstrip } from "./GalleryFilmstrip";
import { GalleryModal } from "./GalleryModal";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Gallery() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="galeria"
      className="scroll-mt-0 bg-ivory px-5 py-20 sm:px-8 sm:py-24"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            id="gallery-heading"
            title={t.gallery.heading}
            subtitle={t.gallery.subtitle}
          />
        </Reveal>

        <div className="mt-14">
          <GalleryFilmstrip images={galleryImages} onSelect={setOpenIndex} />
        </div>

        {hasInstagram ? (
          <p className="mt-10 text-center">
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm tracking-[0.08em] text-charcoal transition-colors hover:text-rose-dark"
            >
              <InstagramIcon size={18} />
              {t.cta.instagram}
            </a>
          </p>
        ) : null}
      </div>

      {openIndex !== null ? (
        <GalleryModal
          images={galleryImages}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      ) : null}
    </section>
  );
}
