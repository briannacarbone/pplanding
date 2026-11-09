"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, Star } from "lucide-react";
import type { googleReviews } from "../lib/google-reviews";

type Review = (typeof googleReviews)[number];

export function ReviewCarousel({ reviews }: { reviews: readonly Review[] }) {
  const viewport = useRef<HTMLDivElement>(null);
  const paused = useRef(true);
  const hovered = useRef(false);
  const focused = useRef(false);
  const [isPaused, setIsPaused] = useState(true);
  function pause(value: boolean) {
    paused.current = value;
    setIsPaused(value);
  }

  useEffect(() => {
    const element = viewport.current;
    if (!element) return;
    const group = element.firstElementChild as HTMLElement;
    element.scrollLeft = group.getBoundingClientRect().width;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let previous = 0;
    let distance = 0;
    const tick = (time: number) => {
      if (previous && !paused.current && !hovered.current && !focused.current && !motion.matches && !document.hidden) {
        // Decreasing scrollLeft moves the cards from left to right.
        distance += Math.min(time - previous, 50) * 0.025;
        if (distance >= 1) {
          element.scrollLeft -= Math.floor(distance);
          distance %= 1;
        }
      }
      previous = time;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  function wrap() {
    const element = viewport.current;
    if (!element) return;
    const width = (element.firstElementChild as HTMLElement).getBoundingClientRect().width;
    if (element.scrollLeft < width * 0.25) element.scrollLeft += width;
    else if (element.scrollLeft > width * 1.75) element.scrollLeft -= width;
  }

  function move(direction: number) {
    pause(true);
    const element = viewport.current;
    if (!element) return;
    const card = element.querySelector<HTMLElement>("article");
    const step = (card?.getBoundingClientRect().width ?? 320) + 24;
    element.scrollLeft = (Math.round(element.scrollLeft / step) + direction) * step;
  }

  return (
    <div className="mt-10" role="region" aria-roledescription="carousel" aria-label="Five-star Google reviews">
      <div className="review-layout">
        <button type="button" onClick={() => move(-1)} aria-label="Scroll reviews left" className="review-control review-side"><ChevronLeft aria-hidden size={26} /></button>
      <div ref={viewport} onScroll={wrap} onMouseEnter={() => { hovered.current = true; }} onMouseLeave={() => { hovered.current = false; }} onFocusCapture={() => { focused.current = true; }} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) focused.current = false; }} onPointerDown={() => pause(true)} onWheel={() => pause(true)} onKeyDown={event => { if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); move(event.key === "ArrowLeft" ? -1 : 1); } }} tabIndex={0} aria-label="Reviews. Use the arrow keys or swipe to scroll." className="review-viewport flex overflow-x-auto focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
        {[0, 1, 2].map(copy => (
          <div key={copy} aria-hidden={copy !== 1 ? true : undefined} inert={copy !== 1 ? true : undefined} className="flex shrink-0 gap-6 pr-6">
            {reviews.map(review => (
              <article
                key={review.name}
                className="review-card flex shrink-0 flex-col gap-4 bg-white/10 p-6 sm:p-7"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white ${review.avatarBg}`}
                    >
                      {review.initials}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{review.name}</p>
                      <p className="text-xs text-white/70">{review.context}</p>
                    </div>
                  </div>
                  <span
                    aria-label="Posted on Google"
                    title="Posted on Google"
                    className="flex shrink-0 items-center gap-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/45"
                  >
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                  </span>
                </div>

                <div className="flex items-center gap-0.5" role="img" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]" />
                  ))}
                </div>

                <p className="text-sm leading-7 text-white/78">{review.body}</p>
              </article>
            ))}
          </div>
        ))}
      </div>
        <button type="button" onClick={() => move(1)} aria-label="Scroll reviews right" className="review-control review-side"><ChevronRight aria-hidden size={26} /></button>
      </div>
      <div className="mt-4 flex justify-center">
        <button type="button" onClick={() => pause(!isPaused)} aria-label={isPaused ? "Play scrolling reviews" : "Pause scrolling reviews"} aria-pressed={isPaused} className="review-control">{isPaused ? <Play aria-hidden size={16} /> : <Pause aria-hidden size={16} />}</button>
      </div>
    </div>
  );
}
