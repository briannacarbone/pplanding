"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export type GalleryPhoto = {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  position?: string;
};

export function GalleryGrid({ photos }: { photos: readonly GalleryPhoto[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activePhoto = activeIndex === null ? null : photos[activeIndex];
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const previous = useCallback(() =>
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + photos.length) % photos.length,
    ), [photos.length]);
  const next = useCallback(() =>
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % photos.length,
    ), [photos.length]);

  useEffect(() => {
    if (!isOpen) return;
    const element = dialog.current;
    const previousFocus = opener.current;
    element?.showModal();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") { event.preventDefault(); previous(); }
      if (event.key === "ArrowRight") { event.preventDefault(); next(); }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      element?.close();
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
      if (previousFocus?.isConnected) previousFocus.focus();
    };
  }, [isOpen, next, previous]);

  return (
    <>
      <div className="grid auto-rows-[14rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[17rem] lg:grid-cols-3">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={(event) => { opener.current = event.currentTarget; setActiveIndex(index); }}
            className={`group relative min-h-44 overflow-hidden bg-[var(--pp-night)] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--pp-main)] ${photo.className ?? ""}`}
            aria-label={`Open photo: ${photo.caption}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1024px) calc((100vw - 64px) / 2), 33vw"
              className="object-cover transition duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:transform-none"
              style={{ objectPosition: photo.position ?? "center" }}
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-5 pb-4 pt-12 text-sm font-semibold text-white opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
              {photo.caption}
            </span>
          </button>
        ))}
      </div>

      {activePhoto && activeIndex !== null ? (
        <dialog
          ref={dialog}
          className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none items-center justify-center border-0 bg-[var(--pp-night)] p-4 open:flex sm:p-8"
          aria-label="Photo viewer"
          onCancel={close}
          onClose={close}
          onClick={(event) => { if (event.target === event.currentTarget) close(); }}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center border border-white/30 text-white transition hover:bg-white/10 sm:right-8 sm:top-8"
            aria-label="Close photo viewer"
            autoFocus
          >
            <X className="h-5 w-5" aria-hidden />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              previous();
            }}
            className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center bg-black/35 text-white transition hover:bg-black/60 sm:left-8"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-7 w-7" aria-hidden />
          </button>

          <figure
            className="flex h-full w-full max-w-6xl flex-col items-center justify-center gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative min-h-0 w-full flex-1">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <figcaption aria-live="polite" aria-atomic="true" className="shrink-0 text-center text-sm text-white/78">
              <span className="font-semibold text-white">{activePhoto.caption}</span>
              <span className="ml-3 text-white/70">
                {activeIndex + 1} / {photos.length}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
            className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center bg-black/35 text-white transition hover:bg-black/60 sm:right-8"
            aria-label="Next photo"
          >
            <ChevronRight className="h-7 w-7" aria-hidden />
          </button>
        </dialog>
      ) : null}
    </>
  );
}
