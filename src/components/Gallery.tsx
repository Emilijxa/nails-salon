import { useState } from "react";
import { InstagramIcon } from "./icons";
import { business, hasInstagram } from "../config/business";
import { galleryImages } from "../data/gallery";
import { useLanguage } from "../i18n/LanguageContext";
import { GalleryModal } from "./GalleryModal";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Gallery() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="galeria"
      className="scroll-mt-24 bg-ivory px-5 py-20 sm:px-8 sm:py-24"
      aria-labelledby="gallery-heading"
    >
      <Reveal>
        <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="gallery-heading"
          title={t.gallery.heading}
          subtitle={t.gallery.subtitle}
        />

        <ul className="mt-14 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <li key={image.id}>
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                className="group relative block aspect-[4/5] w-full overflow-hidden focus-visible:outline-none"
                aria-label={t.gallery.alts[image.altKey]}
              >
                <img
                  src={image.src}
                  alt={t.gallery.alts[image.altKey]}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  width={1200}
                  height={1500}
                  loading={index < 2 ? "eager" : "lazy"}
                />
              </button>
            </li>
          ))}
        </ul>

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
      </Reveal>

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
