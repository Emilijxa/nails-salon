import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "../data/gallery";
import { useLanguage } from "../i18n/LanguageContext";

type GalleryFilmstripProps = {
  images: GalleryImage[];
  onSelect: (index: number) => void;
};

const GAP = 14;

function framesToScrollFor(width: number): number {
  return width >= 1024 ? 2 : 1;
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function GalleryFilmstrip({ images, onSelect }: GalleryFilmstripProps) {
  const { t } = useLanguage();
  const listId = useId();
  const scrollerRef = useRef<HTMLUListElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const frameRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const dragRef = useRef<number | null>(null);

  const [progress, setProgress] = useState(0);
  const [thumbRatio, setThumbRatio] = useState(0.4);
  const [active, setActive] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const frameStep = () => {
    const first = scrollerRef.current?.firstElementChild as HTMLElement | null;
    return first ? first.offsetWidth + GAP : 0;
  };

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const max = Math.max(el.scrollWidth - el.clientWidth, 0);
    const left = el.scrollLeft;
    const ratio = el.scrollWidth > 0 ? el.clientWidth / el.scrollWidth : 1;

    setThumbRatio(Math.min(1, Math.max(0.12, ratio)));
    setProgress(max === 0 ? 0 : Math.min(1, Math.max(0, left / max)));
    setCanPrev(left > 4);
    setCanNext(left < max - 4);

    const step = frameStep();
    if (step > 0) {
      setActive(Math.min(images.length - 1, Math.max(0, Math.round(left / step))));
    }
  }, [images.length]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    updateScrollState();
    const resize = new ResizeObserver(() => updateScrollState());
    resize.observe(el);
    el.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      resize.disconnect();
      el.removeEventListener("scroll", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollTo = (left: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({
      left,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  const scrollByFrames = (direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = framesToScrollFor(el.clientWidth) * frameStep();
    if (!amount) return;
    scrollTo(el.scrollLeft + direction * amount);
  };

  const focusFrame = (index: number) => {
    frameRefs.current[index]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollByFrames(1);
      focusFrame(Math.min(images.length - 1, active + 1));
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollByFrames(-1);
      focusFrame(Math.max(0, active - 1));
    }
    if (event.key === "Home") {
      event.preventDefault();
      scrollTo(0);
      focusFrame(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      const el = scrollerRef.current;
      if (el) scrollTo(el.scrollWidth);
      focusFrame(images.length - 1);
    }
  };

  const scrollFromClientX = (clientX: number) => {
    const el = scrollerRef.current;
    const track = trackRef.current;
    if (!el || !track) return;
    const rect = track.getBoundingClientRect();
    const max = Math.max(el.scrollWidth - el.clientWidth, 0);
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    el.scrollLeft = ratio * max;
  };

  const onTrackPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    const track = trackRef.current;
    const el = scrollerRef.current;
    if (!track || !el) return;

    track.setPointerCapture(event.pointerId);
    dragRef.current = event.pointerId;
    scrollFromClientX(event.clientX);
  };

  const onTrackPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragRef.current !== event.pointerId) return;
    scrollFromClientX(event.clientX);
  };

  const onTrackPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragRef.current === event.pointerId) {
      dragRef.current = null;
    }
  };

  const counter = t.gallery.counter
    .replace("{current}", String(active + 1))
    .replace("{total}", String(images.length));

  const thumbWidth = `${thumbRatio * 100}%`;
  const thumbLeft = `${progress * (1 - thumbRatio) * 100}%`;

  const arrowClass =
    "inline-flex min-h-11 min-w-11 items-center justify-center border border-charcoal/20 bg-ivory text-charcoal transition-colors duration-300 hover:border-rose-dark hover:text-rose-dark disabled:pointer-events-none disabled:opacity-30";

  return (
    <div className="relative" onKeyDown={onKeyDown}>
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          className={arrowClass}
          onClick={() => scrollByFrames(-1)}
          disabled={!canPrev}
          aria-controls={listId}
          aria-label={t.gallery.previous}
        >
          <ChevronLeft size={20} strokeWidth={1.4} aria-hidden="true" />
        </button>
        <p
          className="font-sans text-[0.68rem] uppercase tracking-[0.28em] text-muted"
          aria-live="polite"
        >
          {counter}
        </p>
        <button
          type="button"
          className={arrowClass}
          onClick={() => scrollByFrames(1)}
          disabled={!canNext}
          aria-controls={listId}
          aria-label={t.gallery.next}
        >
          <ChevronRight size={20} strokeWidth={1.4} aria-hidden="true" />
        </button>
      </div>

      <ul
        id={listId}
        ref={scrollerRef}
        role="list"
        aria-label={t.gallery.filmstrip}
        className="filmstrip-track mt-6 flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain"
        style={{ gap: GAP }}
      >
        {images.map((image, index) => (
          <li key={image.id} className="filmstrip-frame snap-start">
            <button
              ref={(node) => {
                frameRefs.current[index] = node;
              }}
              type="button"
              onClick={() => onSelect(index)}
              className="group relative block aspect-[4/5] w-full overflow-hidden border border-charcoal/10 bg-nude text-left transition-colors duration-300 hover:border-rose-dark focus-visible:outline-none"
              aria-label={t.gallery.alts[image.altKey]}
            >
              <img
                src={image.src}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                width={1200}
                height={1500}
                loading={index < 3 ? "eager" : "lazy"}
                draggable={false}
              />
              <span
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute inset-x-0 bottom-0 px-3 py-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                aria-hidden="true"
              >
                <span className="font-sans text-[0.62rem] tracking-[0.22em] text-ivory uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div
        ref={trackRef}
        className="relative mt-7 h-8 cursor-pointer touch-none"
        onPointerDown={onTrackPointerDown}
        onPointerMove={onTrackPointerMove}
        onPointerUp={onTrackPointerUp}
        onPointerCancel={onTrackPointerUp}
        aria-hidden="true"
      >
        <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-charcoal/12" />
        <span
          className="absolute top-1/2 h-[3px] -translate-y-1/2 bg-rose-dark"
          style={{ width: thumbWidth, left: thumbLeft }}
        />
      </div>
    </div>
  );
}
